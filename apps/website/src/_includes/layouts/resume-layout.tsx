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
      <script
        src={`/${data.cacheBusterVersion}/script.js`}
        type="module"
      ></script>
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
      <data.comp.PageNav
        secondary={
          <a
            href={`/${data.cacheBusterVersion}/static/matt-sherman-resume.pdf`}
            class="icon-and-text"
          >
            <data.comp.icons.PdfIcon />
            View PDF
          </a>
        }
      />
      {data.children}
    </body>
  </html>
);
