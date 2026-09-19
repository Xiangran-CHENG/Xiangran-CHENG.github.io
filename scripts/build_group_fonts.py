"""Build local webfonts. See assets/fonts/README.md for sources and usage."""
import argparse
import base64
import re
import shutil
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont


ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "assets" / "fonts"


def rename(font, family, style):
    values = {1: family, 2: style, 3: family + "-" + style,
              4: family + " " + style, 6: family.replace(" ", "") + "-" + style,
              16: family, 17: style}
    for record in font["name"].names:
        if record.nameID in values:
            record.string = values[record.nameID].encode(record.getEncoding())


def save_subset(source, target, unicodes, family, style, variable=False):
    font = TTFont(source, recalcTimestamp=False)
    opts = subset.Options()
    opts.name_IDs = [0, 1, 2, 3, 4, 5, 6, 13, 14, 16, 17]
    worker = subset.Subsetter(options=opts)
    worker.populate(unicodes=unicodes)
    worker.subset(font)
    if variable:
        font = instantiateVariableFont(font, {"wght": (400, 400, 600)}, inplace=True)
    rename(font, family, style)
    font.flavor = "woff2"
    font.save(target)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("source_directory", type=Path)
    args = parser.parse_args()
    DEST.mkdir(parents=True, exist_ok=True)
    source = args.source_directory
    # Latin extensions, Greek, scientific notation, punctuation and symbols.
    latin = set(range(0x20, 0x250)) | set(range(0x370, 0x400))
    latin |= set(range(0x2000, 0x2300)) | set(range(0x1E00, 0x1F00))
    for style, weight in [("Regular", 400), ("SemiBold", 600)]:
        save_subset(source / f"Poppins-{style}.ttf", DEST / f"poppins-{weight}.woff2",
                    latin, "Cheng Latin Web", style)
    html = "".join(p.read_text(encoding="utf-8") for p in (ROOT / "group").glob("*.html"))
    cjk = {ord(c) for c in html if ord(c) >= 0x2E80}
    # Include GB2312's common Chinese characters for future team/content edits.
    for lead in range(0xB0, 0xF8):
        for trail in range(0xA1, 0xFF):
            try:
                cjk.add(ord(bytes([lead, trail]).decode("gb2312")))
            except UnicodeDecodeError:
                pass
    cjk |= set(range(0x3000, 0x3040)) | set(range(0xFF00, 0xFFEF))
    save_subset(source / "SourceHanSansCN-VF.ttf", DEST / "source-han-sans-cn-site.woff2",
                cjk, "Cheng CJK Web", "Regular", variable=True)
    for name in ["Poppins-OFL.txt", "SourceHanSans-OFL.txt"]:
        shutil.copyfile(source / name, DEST / name)
    # SVG images cannot fetch a page's webfont; embed the same font in the map.
    faces = "\n".join(
        '@font-face{font-family:Poppins;font-style:normal;font-weight:' + str(weight)
        + ';src:url(data:font/woff2;base64,'
        + base64.b64encode((DEST / f"poppins-{weight}.woff2").read_bytes()).decode()
        + ') format("woff2")}'
        for weight in [400, 600]
    )
    for path in (ROOT / "assets").glob("research-directions-map*.svg"):
        svg = path.read_text(encoding="utf-8")
        svg = re.sub(r'\s*<style id="embedded-fonts">.*?</style>', '', svg, flags=re.S)
        svg = svg.replace("<defs>", '<defs>\n    <style id="embedded-fonts">' + faces + '</style>', 1)
        path.write_text(svg, encoding="utf-8", newline="\n")
    for path in DEST.glob("*.woff2"):
        print(path.name, path.stat().st_size, "bytes")


if __name__ == "__main__":
    main()
