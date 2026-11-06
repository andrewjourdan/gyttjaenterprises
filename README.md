# Gyttja Enterprises

The static website for [gyttjaenterprises.com](https://gyttjaenterprises.com/), a soil amendment and topsoil concept using recovered river and lake sediment.

Gyttja Enterprises is a business concept in development, not a registered business entity. Products and services are not currently offered for sale.

## Site structure

- `index.html`: page content and restrictive Content Security Policy.
- `styles.css` and `site.js`: external styles, calculator, and email draft behavior.
- `scripts/`: HTML, security policy, calculator, and email draft checks.
- `.github/workflows/site-checks.yml`: checks on pull requests and pushes to main.
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

## Security configuration

Cloudflare serves the custom domain with Full (strict) encryption, HTTPS redirects, TLS 1.2 minimum, and HSTS (one day, without subdomain coverage or preload). The existing `X-Content-Type-Options: nosniff` setting is enabled.

The site policy permits only its own scripts and styles plus Google Fonts. It blocks inline code, network requests from JavaScript, embedded objects, base URL changes, and native form submission. The email form prepares a `mailto:` draft using JavaScript. The same policy is provided in HTML for direct GitHub Pages access. Cloudflare adds an HTTP CSP including `frame-ancestors 'none'`, `X-Frame-Options: DENY`, referrer policy, and a permissions policy disabling camera, microphone, geolocation, payment, and USB.

Cloudflare response headers are configured on the zone, not by repository files; GitHub Pages does not apply a `_headers` file. If hosting or the proxy changes, recheck these headers. Keep the CSP in the HTML and Cloudflare synchronized when adding resources.

Run `python3 scripts/check_site.py`, `node --check site.js`, and `node scripts/check_behavior.cjs` before publishing. GitHub Actions runs these checks with read-only repository permissions and no persisted checkout credentials. Dependabot checks action updates monthly. Tests prepare an email draft without sending mail.

The site has no server-side contact endpoint, accounts, cookies, or application database. Google Fonts remains an external resource. Search indexing remains enabled.

## Contributions and security

Use a focused pull request with a description of the change and relevant verification. Report ordinary bugs through Issues. Report vulnerabilities privately using [the security policy](SECURITY.md).

## Rights

No open-source license is granted by this repository. Referenced research remains subject to its original owners' terms.
