export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <title>{data.title}</title>
    </head>
    <body>
      <nav>
        <ol class="header-breadcrumb horizontal-list">
          <li>
            <a href="/">mg5.dev</a>
          </li>
        </ol>
        <div class="header-secondary">
          <a
            href={`/${data.cacheBusterVersion}/static/matt-sherman-resume.pdf`}
          >
            View PDF
          </a>
        </div>
      </nav>
      {data.children}
    </body>
  </html>
);
