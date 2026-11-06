# Security Policy

## Supported version

Security fixes apply to the latest version on the `main` branch and the current deployment at https://gyttjaenterprises.com/. Older commits are not maintained.

## Report a vulnerability

Use [GitHub's private vulnerability reporting form](https://github.com/andrewjourdan/gyttjaenterprises/security/advisories/new). If that form is unavailable, email inquiry@gyttjaenterprises.com with the subject "Security report: Gyttja Enterprises".

Please include the affected URL or file, steps to reproduce, expected and observed behavior, and potential impact. Remove credentials and personal data from screenshots and examples. Do not publish security details in a public issue.

The maintainer will review reports as availability permits. No response deadline or bounty is promised. Coordinate public disclosure with the maintainer after a fix is available.

## Scope

This repository contains a static GitHub Pages website with client-side JavaScript and no application database, account system, or server-side contact endpoint. The quote form opens a draft in the visitor's email application.

Report issues in this site's code or configuration here. Report issues in GitHub, Google Fonts, or linked research sites to those providers. Test only resources you own or are authorized to test; avoid disruption and access to other people's information.

## Maintainer guidance

Never commit passwords, tokens, private keys, or personal information. Keep GitHub secret scanning and push protection enabled. If a credential is exposed, revoke or rotate it immediately; deleting a file alone does not remove it from Git history. Review third-party changes and preserve HTTPS enforcement.

