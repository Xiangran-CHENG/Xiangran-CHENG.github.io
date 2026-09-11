# Personal Homepage

This project is a static personal homepage and can be published directly with GitHub Pages.

## Cheng Group

The English-language group homepage lives at `group/index.html` and is linked from the personal homepage. The published URL is `https://xiangran-cheng.github.io/group/`.

- Edit research, biography, member and recruitment text in `group/index.html`. The page is entirely English and does not read the personal homepage's saved language preference.
- Group styling and the accessible mobile navigation live in `group/group.css` and `group/group.js`.
- The separate Portfolio & Gallery page lives at `group/gallery.html`, with styling in `group/gallery.css` and the keyboard-accessible image viewer in `group/gallery.js`. Its published URL is `https://xiangran-cheng.github.io/group/gallery.html`.
- To add an entry, copy an existing gallery figure, update the image link and thumbnail, and supply accurate `data-title`, `data-caption` and image `alt` text. Keep `data-gallery` on the link to include it in the image viewer. Images retain working original-file links without JavaScript.
- The gallery contains four conceptual visuals/designs and two personal photographs. The photographs come from the supplied presentation and existing personal website; they are not presented as group photographs. The original recruitment poster retains the earlier Materials Builders name.
- The confirmed contact email is `chengxiangran6@bza.edu.cn`.
- The research narrative and biography incorporate the user-supplied `Self-introduction_XiangranCHENG.pptx`, including speaker notes. Milestone years are not treated as graduation dates. Autonomous laboratory development is described as a research goal.
- `assets/xiangran-cheng-introduction.webp` comes from the supplied presentation's slide 1 portrait. `assets/materials-electrolytes.webp` and `assets/materials-autonomous-lab.webp` are web-optimized conceptual illustrations from slide 2. The reaction-path image is also conceptual, not experimental evidence.
- English member names use Mandarin Pinyin in given-name/family-name order: Chen Liang (梁晨), Jiayuan Sun (孙佳源), Qianyou Zhong (钟千有), Xintong Guan (关心桐), Anyi Li (李安亿), and Wenya Xu (许文雅). Roles follow the supplied roster.
- Publications link to the mentor's existing personal page. Papers shown as background references in the presentation are not republished as group achievements.
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
