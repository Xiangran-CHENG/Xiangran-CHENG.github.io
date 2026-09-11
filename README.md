# Personal Homepage

This project is a static personal homepage and can be published directly with GitHub Pages.

## Materials Builders research group

The bilingual group page lives at `group/index.html` and is linked from the personal homepage navigation and introduction. After publishing to this repository's existing GitHub Pages site, it is available at `https://xiangran-cheng.github.io/group/`.

- Edit the research text, mentor information, team roster, and recruitment content in `group/index.html`. Chinese and English text use `data-lang="zh"` and `data-lang="en"` respectively.
- Group-specific styling and language switching live in `group/group.css` and `group/group.js`; the original personal homepage stylesheet and script are unchanged.
- The group uses the most recently supplied recruitment email, `chengxiangran6@bza.edu.cn`. The original personal-page contact details are preserved.
- `assets/materials-builders-hero.webp` is an AI-generated conceptual reaction-path illustration, not experimental data or an atomic trajectory. `assets/materials-builders-recruitment.png` is the approved recruitment poster based on its first design. `assets/materials-builders-mentor.webp` is a web-optimized copy of the existing personal-page photograph.
- Member categories reflect the supplied roster only. Existing publications are linked as the mentor's publications, not presented as new group results.
- No framework, package installation, or build step is required. Keep `.nojekyll` and publish the repository root as before. Serve the repository root with any static HTTP server to preview `/group/` locally.
- The layout follows the user's academic-lab reference: a wide research banner, an About Us introduction, research cards, a separate mentor profile, grouped member cards, and recruitment/contact information. The mobile navigation opens with a menu button. The original lab's photos, text, publications, and branding are not reused.

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
