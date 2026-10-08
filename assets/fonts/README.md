# Group website fonts

The six group pages use Poppins for Latin text and Adobe Source Han Sans
(思源黑体) for Chinese. Fonts are served from this repository, without an
external font service. Body text is 400; headings and emphasized labels are 600.

Sources and licenses:

- Poppins Regular / SemiBold: https://github.com/google/fonts/tree/main/ofl/poppins
  (upstream https://github.com/itfoundry/Poppins). SIL OFL 1.1, copied in `Poppins-OFL.txt`.
- Source Han Sans CN variable, release 2.005R:
  https://github.com/adobe-fonts/source-han-sans/tree/release/Variable/TTF/Subset
  SIL OFL 1.1, copied in `SourceHanSans-OFL.txt`.

WOFF2 subsets reduce page downloads. Poppins includes Latin extensions and
supported scientific symbols. The Chinese subset contains the 6,763 common
Chinese characters in GB2312, characters used by the six group HTML pages, and
CJK/full-width punctuation, with weights 400–600.
The subset's internal family is renamed `Cheng CJK Web` to respect Adobe's
reserved font name. Its glyph design is Source Han Sans. Poppins subsets use the
internal name `Cheng Latin Web` and the CSS alias `Poppins`.

When adding Chinese characters outside that set, rebuild the subset; until then,
those characters use the page's system CJK fallback. Install `fonttools` and `brotli`, then place these
upstream files in a temporary directory: `Poppins-Regular.ttf`,
`Poppins-SemiBold.ttf`, `SourceHanSansCN-VF.ttf`, `Poppins-OFL.txt`, and
`SourceHanSans-OFL.txt`. Run:

```sh
python scripts/build_group_fonts.py /path/to/font-sources
```

The script also embeds the Poppins fonts in both research relationship SVGs,
so the standalone downloadable diagrams keep their typography.
