export default (data: Lume.Data, _helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <data.comp.BaseStylesLinks />
      <link
        rel="stylesheet"
        href={`/${data.cacheBusterVersion}/resume/styles.css`}
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/posts.rss"
        title="RSS Feed"
      />
      <link
        rel="alternate"
        type="application/json"
        href="/posts.json"
        title="JSON Feed"
      />
      <title>mg5.dev - {data.title}</title>
    </head>
    <body>
      <nav>
        <ol class="header-breadcrumb horizontal-list">
          <li>
            <a href="/" class="icon-and-text">
              <data.comp.icons.HomeIcon />
              mg5.dev
            </a>
          </li>
        </ol>
        <div class="header-secondary">
          <a
            href={`/${data.cacheBusterVersion}/static/matt-sherman-resume.pdf`}
            class="icon-and-text"
          >
            <data.comp.icons.PdfIcon />
            View PDF
          </a>
        </div>
      </nav>
      {data.children}
    </body>
  </html>
);
