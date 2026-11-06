from html.parser import HTMLParser
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.fragments = []
        self.csp = None
        self.canonical = None
    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        assert 'style' not in a, 'Inline style bypasses external stylesheet policy'
        assert not any(k.startswith('on') for k in a), 'Inline event handler'
        if 'id' in a:
            assert a['id'] not in self.ids, 'Duplicate ID'
            self.ids.add(a['id'])
        if tag == 'script':
            assert a.get('src') == '/site.js' and 'defer' in a
        if tag == 'meta' and a.get('http-equiv', '').lower() == 'content-security-policy':
            self.csp = a['content']
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical = a['href']
        if a.get('href', '').startswith('#'):
            self.fragments.append(a['href'][1:])

for name in ['index.html', '404.html']:
    text = (ROOT / name).read_text()
    page = Page()
    page.feed(text)
    assert page.csp and "script-src 'self'" in page.csp
    assert "'unsafe-inline'" not in page.csp and "'unsafe-eval'" not in page.csp
    assert "connect-src 'none'" in page.csp and "form-action 'none'" in page.csp
    assert '<style' not in text and '<script>' not in text
    assert set(page.fragments) <= page.ids, 'Broken page anchor'
    if name == 'index.html':
        assert page.canonical == 'https://gyttjaenterprises.com/'
assert (ROOT/'CNAME').read_text().strip() == 'gyttjaenterprises.com'
sitemap = ET.parse(ROOT/'sitemap.xml')
assert [e.text for e in sitemap.findall('.//{*}loc')] == ['https://gyttjaenterprises.com/']
assert 'Sitemap: https://gyttjaenterprises.com/sitemap.xml' in (ROOT/'robots.txt').read_text()
for name in ['styles.css', 'site.js', 'SECURITY.md']:
    assert (ROOT/name).read_text().strip()
print('HTML, asset, security-policy, anchor and sitemap checks passed.')
