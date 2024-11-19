export default (data: Lume.Data, _helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <data.comp.BaseStylesLinks />
      <link rel="stylesheet" href={`/${data.cacheBusterVersion}/styles.css`} />
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
      <main>
        <header>
          <h1>{data.title}</h1>
        </header>

        {data.children}
      </main>
      <data.comp.Footer />
    </body>
  </html>
);
