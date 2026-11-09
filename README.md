# POMFRET MUN

Prototype site for Pomfret School’s Model UN conference. Plain HTML and CSS, so it can be edited and published on GitHub Pages without a build step.

## Edit

- Page text is in `index.html`, `conference.html`, `committees.html`, and `registration.html`.
- Colors and type are the variables at the top of `css/styles.css`.
- Photos and the logo are in `images/`. The campus photos are about 1000 pixels wide. Drop in a larger file with the same name when you have one.

Slots that still need real content are marked in the pages: the date, secretariat names, committee topics, the schedule, and the registration link.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. Settings, then Pages, then Deploy from a branch. Choose `main` and `/ (root)`.
3. The site will be at `https://<user>.github.io/<repo>/`.

Links are relative, so a project site in a subpath still works. `.nojekyll` is included so GitHub Pages serves every file as-is.
