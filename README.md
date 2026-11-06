# Gyttja Enterprises

The static website for [gyttjaenterprises.com](https://gyttjaenterprises.com/), a soil amendment and topsoil concept using recovered river and lake sediment.

Gyttja Enterprises is a business concept in development, not a registered business entity. Products and services are not currently offered for sale.

## Site structure

- `index.html`: complete page, styles, calculator, and email contact form.
- `CNAME`: GitHub Pages custom domain.
- `sitemap.xml`: canonical public page for search engines.
- `robots.txt`: crawler instructions and sitemap location.
- `404.html`: missing-page fallback.
- `.nojekyll`: publishes the static files without Jekyll processing.
- `SECURITY.md`: supported version and private reporting instructions.

## Preview locally

No build step or package installation is required. With Python 3 installed:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Stop the server with Ctrl+C.

## Deployment

GitHub Pages publishes the root of the `main` branch at https://gyttjaenterprises.com/. Changes pushed to `main` trigger a Pages deployment; check the Actions tab for the result. HTTPS enforcement is enabled in repository Settings → Pages.

Keep `CNAME`, the canonical URL in `index.html`, `sitemap.xml`, and the sitemap URL in `robots.txt` consistent when changing the domain. Add new standalone public HTML pages to the sitemap; section links such as `#products` are not separate pages.

## Maintenance checks

Before publishing, preview at desktop and mobile widths, check navigation and research links, exercise the calculator, and confirm the contact form opens a correctly populated draft email. The form uses the visitor's mail application and does not submit data to a server.

Keep research summaries, development status, product claims, and contact details accurate. The site loads fonts from Google Fonts and links to external research; those resources are outside this repository.

## Contributions and security

Use a focused pull request with a description of the change and relevant verification. Report ordinary bugs through Issues. Report vulnerabilities privately using [the security policy](SECURITY.md).

## Rights

No open-source license is granted by this repository. Referenced research remains subject to its original owners' terms.
