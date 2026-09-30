# Nexora — static site

Plain HTML/CSS/JS, no build step. Five pages: `index.html`, `about.html`, `services.html`, `industries.html`, `contact.html`, plus `404.html`.

## Before you deploy

1. **Contact form — get a free Web3Forms access key.**
   Go to https://web3forms.com, sign up free, and copy your Access Key.
   Open `contact.html` and replace `YOUR_WEB3FORMS_ACCESS_KEY` in the hidden `access_key` input with your real key.

2. **Founder headshot** — when ready, add your photo to `assets/images/` (e.g. `founder.jpg`), then in `about.html` swap the `src="assets/images/founder-placeholder.svg"` for your new file. A placeholder avatar is in place until then.

3. **Sitemap** — once you know your Cloudflare Pages URL (either the free `*.pages.dev` one or a custom domain), replace `REPLACE_WITH_YOUR_URL` in `sitemap.xml`.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub (or GitLab) repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select the repo.
3. Build settings: **no framework preset needed** — leave build command blank, set output directory to `/` (the repo root).
4. Deploy. You'll get a free `your-project.pages.dev` URL immediately.
5. (Later) Add a custom domain under the Pages project's **Custom domains** tab once you register one — no rebuild required.
6. In **SSL/TLS**, set encryption mode to *Full (strict)* and turn on **Always Use HTTPS**.
7. The `_headers` file in this folder is picked up automatically by Cloudflare Pages and applies the security headers (CSP, HSTS, X-Frame-Options, etc.) described in the site plan.
8. Turn on **Cloudflare Web Analytics** (free, cookie-less) from the dashboard once live.

## Structure

```
nexora-site/
├─ index.html
├─ about.html
├─ services.html
├─ industries.html
├─ contact.html
├─ 404.html
├─ _headers          (Cloudflare security headers)
├─ robots.txt
├─ sitemap.xml
└─ assets/
   ├─ css/styles.css
   ├─ js/main.js
   └─ images/
      ├─ logo-navy.png
      ├─ logo-icon-navy.png
      └─ favicon.png
```

## Homepage imagery

Three images were added to `index.html`, cropped from the concept graphics you shared and cleaned up (removed baked-in AI text and a placeholder logo badge that wasn't the real Nexora mark, then captioned with the site's own typography instead):
- `hero-cube.jpg` — hero section, right side
- `feature-threat-detection.jpg` and `feature-iam.jpg` — new "Capabilities at a glance" section

Two of your four source images weren't used:
- The "hooded hacker" and "businessman touching CYBERSECURITY hexagon" photos — these read as generic stock photography. If you have a license for them, happy to add either; otherwise the hacker-in-a-hoodie cliché also cuts against the "next generation" positioning.
- The encryption/padlock panel — the center of that graphic is an "N&J" monogram badge, which isn't the actual Nexora logo, so using it as-is would introduce a second, inconsistent mark.

## Notes

- Primary CTA site-wide: **"Book a Consultation."** Secondary CTA on the Services page: **"Request a Security Assessment."**
- Founder bio is intentionally generic — no employer names, per your instruction.
- Certifications listed on the About page reflect what's actually held today (see the site plan for the note on the original outline's placeholder cert list).
