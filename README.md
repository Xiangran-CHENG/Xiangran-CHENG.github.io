# Personal Homepage

This project is a static personal homepage and can be published directly with GitHub Pages.

The personal homepage at `index.html` uses a compact introduction, linked profiles, a year-aligned biography, four research summaries and selected publications. The typography and timeline draw on the owner's Karpathy homepage reference; no reference-site content or images are reused. It remains photo-free, with portfolio visuals accessible through the gallery link. Navigation is always visible on mobile.

- Root styling and bilingual behavior live in `styles.css` and `script.js`. English is the default; the EN/中文 controls preserve the existing `homepage-language` preference when browser storage is available.
- Biography milestones are grounded in the supplied presentation, without inferred graduation dates or unverified performance metrics. Autonomous laboratory construction is a goal. Research images are explicitly labeled as conceptual.
- The selected papers are a subset of the verified group publication record, with DOI links and contribution markers. Keep them consistent when updating the complete list. MatEvolve remains omitted.
- The existing CV download, Google Scholar link, email and separate group pages remain accessible. The personal-page email uses the owner-confirmed `chengxiangran@bza.edu.cn`.

## Cheng Research Group

The English-language group homepage lives at `group/index.html` and is linked from the personal homepage. The published URL is `https://xiangran-cheng.github.io/group/`.

- Home (`group/index.html`) opens with the heading "AI for Materials Synthesis" and a short vision statement and places the mission "Understand formation. Guide synthesis." after the Big Picture narrative. It connects societal needs to reliable synthesis and functional validation, with synthesizability as the core scientific question and three connected directions. A Big Picture section places the group in the processing–structure–properties–performance relationships of materials science, with forward prediction and inverse design linked by experimental feedback. The synthesis–structure connection is highlighted as the team's core focus. The synthesizability gap leads directly into the Mission section. Supporting illustrations are displayed directly without a disclosure control; section headings have no forced line breaks; the Vision hero uses text on the left and a transparent illustration on the right, stacking on narrow screens. Team information lives on People. Its page-specific styles live in `group/home.css`. Research (`group/research.html`), People (`group/people.html`) and Join us (`group/join.html`) are separate pages; edit their corresponding content there. All group pages are in English and do not read the personal homepage's saved language preference.
- The strategy is "Observe. Model. Test and guide." Progress is framed as a goal: predictions under new conditions, experimentally tested synthesis routes and verified function. Synthesizability remains the core question; scientific agents support evidence and research decisions across the four directions. The materials map is accessible HTML/CSS, with a vertical layout on small screens. The simplified relationships do not imply a unique inverse mapping or that synthesis is the sole bottleneck across materials science.
- Scientific context was checked against [Northwestern Materials Science and Engineering](https://www.mccormick.northwestern.edu/materials-science/), [NIST: New frontiers for the Materials Genome Initiative](https://www.nist.gov/publications/new-frontiers-materials-genome-initiative), and Berkeley Lab's synthesis-science program. These are background references, not affiliations, endorsements or group achievements.
- Publication records are available on the separate Publications page and in the personal homepage selection. The group Home does not include a Selected publications section. Keep research goals and methods under development distinct from demonstrated results.
- All six pages share file-based navigation with a current-page indicator. Previous Home links ending in `#research`, `#people` or `#join` redirect to their new pages; old research-topic anchors also retain their destinations.
- The group site uses a black, white and neutral-gray palette, including navigation accents, buttons, footers, the gallery viewer and favicon. All artwork retains its original colors, including the Home hero, gallery images and downloadable assets; only interface colors and overlays use the neutral palette.
- Group styling and navigation live in `group/group.css` and `group/group.js`. All six navigation links remain visible on every screen size and wrap on narrow screens. The sticky header height determines anchor scroll offsets so section headings remain visible.
- The separate Portfolio & Gallery page lives at `group/gallery.html`, with styling in `group/gallery.css` and the keyboard-accessible image viewer in `group/gallery.js`. Its published URL is `https://xiangran-cheng.github.io/group/gallery.html`.
- To add an entry, copy an existing gallery figure, update the image link and thumbnail, and supply accurate `data-title`, `data-caption` and image `alt` text. Keep `data-gallery` on the link to include it in the image viewer. Images retain working original-file links without JavaScript.
- The gallery contains five conceptual visuals/designs. Both personal photographs and the empty Photographs section were removed at the owner's request, pending replacement images. The current poster presents World Models for Materials Synthesis as a recruitment theme under the Materials Architects design name; the site identity remains Cheng Research Group / AI for Materials Synthesis. The earlier poster asset is preserved but is no longer linked from current recruitment pages.
- The People page uses a single-column mentor biography without a photograph. Personal photo assets remain in the repository for possible later use, but are not displayed on the personal homepage, People or Gallery pages.
- The confirmed contact email is `chengxiangran@bza.edu.cn`.
- The research narrative and biography incorporate the user-supplied `Self-introduction_XiangranCHENG.pptx`, including speaker notes. Milestone years are not treated as graduation dates. Autonomous laboratory development is described as a research goal.
- The Home title is "AI for Materials Synthesis", making the AI focus explicit while retaining Cheng Research Group as the group identity. Its mission brings artificial intelligence together with synthesis science and centers on the quantitative understanding, prediction and control of materials formation: thermodynamics, reaction kinetics, energy transfer and atomic transport across scales. In situ and ex situ characterization, physics-based computation and data science support experimentally tested mechanisms and nonequilibrium pathway prediction. Machine learning and autonomous experimentation are methods under development, not completed capabilities. The scientific framing draws on [Berkeley Lab's Data Driven Synthesis Science program](https://materialssciences.lbl.gov/research/research-programs/data-driven-synthesis-science/) without copying its text or claiming its facilities or achievements. World-model branding is omitted from the group Home title, mission and metadata at the owner's request. All group footers use "AI for Materials Synthesis" consistently.
- The Research page presents four directions and 13 ongoing projects supplied by the owner: Synthesizability and Synthesis Design (core); Structure Evolution and Functional Design; Materials for Energy Storage and Conversion (application needs and validation); Scientific Agents and Autonomous Research (cross-cutting methods and research questions). Its page-specific layout is in `group/research.css`. Keep the bilingual personal-page summaries aligned with these directions. Existing `#synthesis`, `#energy-materials` and `#autonomous-lab` links remain valid; the structure/function direction uses `#structure-function`, with `#multiphysics` retained as a legacy anchor. Semiconductor thermal-field and optical-emission projects remain visible as supporting process-modeling work.
- Project descriptions express work in progress, without invented completion claims, metrics, collaborators or project funding. Ferroelectric domain prediction and magnetic storage are now confirmed research settings. Predicting a domain state is distinct from validating its functional response. Energy conversion is a direction of extension, without invented projects or results.
- `assets/xiangran-cheng-introduction.webp` comes from the supplied presentation's slide 1 portrait. `assets/materials-electrolytes.webp` and `assets/materials-autonomous-lab.webp` are web-optimized conceptual illustrations from slide 2. The reaction-path image is also conceptual, not experimental evidence.
- English member names use Mandarin Pinyin in given-name/family-name order: Chen Liang (梁晨), Jiayuan Sun (孙佳源), Qianyou Zhong (钟千有), Xintong Guan (关心桐), Anyi Li (李安亿), and Wenya Xu (许文雅). Roles follow the supplied roster.
- Publications have a separate English page at `group/publications.html`, styled by `group/publications.css`. Entries are grouped by year, retain the supplied author order and contribution markers, and link to verified DOIs. Google Scholar provides the complete record. The former personal-homepage `#publications` link redirects to this page; without JavaScript it reaches the selected papers and a link to the complete list. Papers shown as background references in the presentation are not republished as group achievements.
- Bibliographic details were checked against the publishers when adding article links. The Science Bulletin entry uses pages 3796–3799; the Advanced Materials entry uses volume 38, issue 5, e13158.
- The Publications page contains 23 journal publications (2021–2026) and one ECS conference contribution, checked against Google Scholar on 11 September 2026. MatEvolve is intentionally omitted at the owner's request. Journal papers and conference contributions are shown separately. The Angewandte fire-resistance paper retains its verified International Edition citation instead of adding Scholar's German-edition version as a duplicate. Citation metrics are not copied to the static page. Publisher metadata supplies Engineering Fracture Mechanics volume 345.
- The updated Chinese recruitment poster is displayed on Join us and available in the gallery and as a download. Its confirmed roster includes 李安亿 and its email is `chengxiangran@bza.edu.cn`. Page-specific recruitment styling lives in `group/join.css`.
- The layout draws on the user's academic group website references. No reference group's text, images, affiliations or achievements are reused.
- No framework, installation or build step is required. Keep `.nojekyll` and publish the repository root. Serve the repository root with any static HTTP server to preview `/group/` locally.

## September 2026 visual update

- Home follows three main sections: Vision; Big Picture (materials development paradigm → synthesizability gap); Mission and Research. The materials-development map is visible by default. The research-vision illustration is displayed in Vision, the synthesis-framework illustration remains visible in Big Picture, and the scientific process diagram accompanies Our Research Strategy. Formation modeling remains inside the core synthesizability direction; structure–function research, energy applications and scientific agents connect to that core.
- Home's Our Research Strategy figure uses editable scientific SVGs: `assets/synthesis-science-hero.svg` and the portrait `assets/synthesis-science-hero-mobile.svg`. The diagram connects processing conditions, reacting interfaces and competing phase pathways with experimental observations, AI and physical modeling. Curves, observations and diffraction patterns are schematic, not research results. Update both layouts together; the portrait version is selected below 541px.
- The Home image viewer reads its image, title and caption from the selected figure, so the synthesis diagram and the broader research-philosophy illustration open with their own descriptions. Native links still open the original assets when JavaScript is unavailable.
- `assets/materials-core-philosophy-2026.png` (1672 × 941) is an AI-generated conceptual illustration created for the group: societal needs, material targets, synthesis pathways and functional validation connected by experimental feedback. The original remains available in the gallery and social-sharing metadata. Home's Our Vision uses its sibling "assets/materials-vision-transparent-2026.png" (1672 × 941, RGBA), edited with built-in ImageGen to remove the two embedded headline lines and extract the background. The transparent artwork sits beside the Vision text on the page's black background, without a surrounding card, and remains clickable to open the image viewer; the original file is accessible there. The hero PNG loads eagerly; the strategy SVG loads lazily. The HTML/CSS materials-development map leads the Big Picture section. The illustration expresses research goals, not measured results.
- Home's illustration viewer lives in `group/home.js`, with styles in `group/home.css`. Clicking either preview image opens an accessible native dialog; Zoom in reveals image details, and Close or Escape returns focus to the opening link. Without JavaScript, preview links open the original image directly. The source PNG and its colors are preserved.
- `assets/synthesis-framework-2026.png` (1534 × 1025, RGBA) is an AI-assisted edit of the owner-supplied synthesis-gap illustration. Built-in ImageGen updated the computational-design label, removed aggregate model/count claims and distinguished thermodynamic competitiveness from experimental formation. All plotted curves, numbers and routes are schematic, not measured data. HTML adds the separate requirement of functional validation.
- `assets/materials-synthesis-recruitment-2026.png` (947 × 1661, RGB) is an AI-assisted edit of the supplied Chinese recruitment poster. Built-in ImageGen corrected 李安安 to 李安亿 while preserving the layout, theme and confirmed email. This is generative editing, not pixel-identical preservation.
- Prompts and visual-verification notes are retained in the local `output/site-update-20260919` handoff folder outside this public repository. No third-party presentation figure is republished as a group result.
- Home, Research and the bilingual personal-page research summaries reflect the owner-confirmed four-direction framework. Original ongoing project titles and publication records are retained.

## Shared group-page styling

All six group pages use `group/group.css` for the font family, responsive title scale, body text, page gutters, spacing, navigation, footer and image-viewer controls. Page titles use `.page-heading`; Home retains its dark vision hero while using the same typography tokens. Use the existing `--font-*`, `--space-*`, `--line` and `--surface` variables when adding content instead of introducing page-specific type scales. Body copy is 16px with a 1.75 line height; metadata and captions use smaller shared sizes. Publication author lists and contribution markers remain complete.

Page-specific CSS should contain layouts and genuinely local components. Keep the six navigation menus and footers consistent, preserve the current-page indicator, and keep navigation visible on small screens. Preview both desktop and mobile widths, including narrow screens and short landscape viewports when changing image dialogs. Group styling does not affect the personal homepage.

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

Home uses a centered content width capped at 1280px across its header, sections and footer, with 20-64px responsive gutters. Section backgrounds remain full width. Its image-and-text columns share a responsive gap capped at 56px. The synthesis-gap explanation and framework image share a row on desktop; narrow screens stack them. Repeated visible figure titles, download controls, mission detail and end-of-page summaries are omitted; accessible figure descriptions, schematic-data labels, research directions and image viewers are preserved. Other group pages keep their shared 1160px layout.
