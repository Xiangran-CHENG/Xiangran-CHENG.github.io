# Personal Homepage

This project is a static personal homepage and can be published directly with GitHub Pages.

The personal homepage at `index.html` uses a compact introduction, linked profiles, a year-aligned biography, four research summaries and selected publications. The typography and timeline draw on the owner's Karpathy homepage reference; no reference-site content or images are reused. It remains photo-free, with portfolio visuals accessible through the gallery link. Navigation is always visible on mobile.

- Root styling and bilingual behavior live in `styles.css` and `script.js`. English is the default; the EN/中文 controls preserve the existing `homepage-language` preference when browser storage is available.
- Biography milestones are grounded in the supplied presentation, without inferred graduation dates or unverified performance metrics. Autonomous laboratory construction is a goal. Research images are explicitly labeled as conceptual.
- The selected papers are a subset of the verified group publication record, with DOI links and contribution markers. Keep them consistent when updating the complete list. MatEvolve remains omitted.
- The existing CV download, Google Scholar link, email and separate group pages remain accessible. The personal-page email uses the owner-confirmed `chengxiangran6@bza.edu.cn`.

## Cheng Research Group

The English-language group homepage lives at `group/index.html` and is linked from the personal homepage. The published URL is `https://xiangran-cheng.github.io/group/`.

- Home (`group/index.html`) contains the research vision and introduction. Research (`group/research.html`), People (`group/people.html`) and Join us (`group/join.html`) are separate pages; edit their corresponding content there. All group pages are in English and do not read the personal homepage's saved language preference.
- All six pages share file-based navigation with a current-page indicator. Previous Home links ending in `#research`, `#people` or `#join` redirect to their new pages; old research-topic anchors also retain their destinations.
- Group styling and navigation live in `group/group.css` and `group/group.js`. All six navigation links remain visible on every screen size and wrap on narrow screens. The sticky header height determines anchor scroll offsets so section headings remain visible.
- The separate Portfolio & Gallery page lives at `group/gallery.html`, with styling in `group/gallery.css` and the keyboard-accessible image viewer in `group/gallery.js`. Its published URL is `https://xiangran-cheng.github.io/group/gallery.html`.
- To add an entry, copy an existing gallery figure, update the image link and thumbnail, and supply accurate `data-title`, `data-caption` and image `alt` text. Keep `data-gallery` on the link to include it in the image viewer. Images retain working original-file links without JavaScript.
- The gallery contains four conceptual visuals/designs. Both personal photographs and the empty Photographs section were removed at the owner's request, pending replacement images. The image assets are retained for existing uses elsewhere. The original recruitment poster retains the earlier Materials Builders name.
- The confirmed contact email is `chengxiangran6@bza.edu.cn`.
- The research narrative and biography incorporate the user-supplied `Self-introduction_XiangranCHENG.pptx`, including speaker notes. Milestone years are not treated as graduation dates. Autonomous laboratory development is described as a research goal.
- The Research page presents four directions and 13 ongoing projects supplied by the owner: materials synthesizability and reaction mechanisms; battery materials and interfaces; multiphysics modeling and spatiotemporal prediction; autonomous laboratories and scientific research. Its page-specific layout is in `group/research.css`. Keep the bilingual personal-page summaries aligned with these directions. Existing `#synthesis`, `#energy-materials` and `#autonomous-lab` links remain valid; the modeling direction uses `#multiphysics`.
- Project descriptions express work in progress, without invented completion claims, metrics, collaborators or project funding. The domain-prediction project uses the neutral term "domain structure" pending clarification of the owner's reference to ferroelectric versus magnetic domains.
- `assets/xiangran-cheng-introduction.webp` comes from the supplied presentation's slide 1 portrait. `assets/materials-electrolytes.webp` and `assets/materials-autonomous-lab.webp` are web-optimized conceptual illustrations from slide 2. The reaction-path image is also conceptual, not experimental evidence.
- English member names use Mandarin Pinyin in given-name/family-name order: Chen Liang (梁晨), Jiayuan Sun (孙佳源), Qianyou Zhong (钟千有), Xintong Guan (关心桐), Anyi Li (李安亿), and Wenya Xu (许文雅). Roles follow the supplied roster.
- Publications have a separate English page at `group/publications.html`, styled by `group/publications.css`. Entries are grouped by year, retain the supplied author order and contribution markers, and link to verified DOIs. Google Scholar provides the complete record. The former personal-homepage `#publications` link redirects to this page; without JavaScript it reaches the selected papers and a link to the complete list. Papers shown as background references in the presentation are not republished as group achievements.
- Bibliographic details were checked against the publishers when adding article links. The Science Bulletin entry uses pages 3796–3799; the Advanced Materials entry uses volume 38, issue 5, e13158.
- The Publications page contains 23 journal publications (2021–2026) and one ECS conference contribution, checked against Google Scholar on 11 September 2026. MatEvolve is intentionally omitted at the owner's request. Journal papers and conference contributions are shown separately. The Angewandte fire-resistance paper retains its verified International Edition citation instead of adding Scholar's German-edition version as a duplicate. Citation metrics are not copied to the static page. Publisher metadata supplies Engineering Fracture Mechanics volume 345.
- The approved recruitment poster remains downloadable in its original Chinese version.
- The layout draws on the user's academic group website references. No reference group's text, images, affiliations or achievements are reused.
- No framework, installation or build step is required. Keep `.nojekyll` and publish the repository root. Serve the repository root with any static HTTP server to preview `/group/` locally.

## Files

- `index.html`
- `styles.css`
- `script.js`
- `.nojekyll`

## Publish With GitHub Pages

1. Create a new public repository on GitHub.
2. Push this project to the repository.
3. Open the repository on GitHub.
4. Go to `Settings` -> `Pages`.
5. Set `Build and deployment` -> `Source` to `Deploy from a branch`.
6. Choose branch `main` and folder `/(root)`.
7. Save and wait for the site to finish deploying.

If your GitHub username is `yourname` and the repository is `homepage`, the public URL will usually be:

`https://yourname.github.io/homepage/`

If you want the site to live at the root personal address instead, create the repository as:

`yourname.github.io`

Then the URL will be:

`https://yourname.github.io/`
