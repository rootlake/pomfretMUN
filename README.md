# POMFRET MUN

Prototype site for Pomfret School’s Model UN conference. The name is temporary. Plain HTML and CSS, so it can be edited and published on GitHub Pages without a build step.

## Edit

- Page text is in `index.html`, `conference.html`, `committees.html`, and `registration.html`.
- Colors and type are the variables at the top of `css/styles.css`.
- The campus photo is `images/campus-hall.jpg`. To use a video instead, replace the image in the home hero with a `<video autoplay muted loop playsinline>` tag. The comment in `index.html` shows the markup.

Slots that still need real content are marked in the pages: the date, secretariat names, committee topics, the schedule, and the registration link.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. Settings, then Pages, then Deploy from a branch. Choose `main` and `/ (root)`.
3. The site will be at `https://<user>.github.io/<repo>/`.

Links are relative, so a project site in a subpath still works. `.nojekyll` is included so GitHub Pages serves every file as-is.
