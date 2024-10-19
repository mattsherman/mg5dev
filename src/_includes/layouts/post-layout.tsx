export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const { HUMAN_DATE_FORMAT } = data;
  const { date } = helpers;

  const formattedDate = date(data.date, HUMAN_DATE_FORMAT);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href={`/${data.cacheBusterVersion}/styles.css`}
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
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ol>
        </nav>
        <main>
          <header>
            <h1>{data.title}</h1>
            <ul class="post-metadata horizontal-list">
              <li>
                <time datetime={data.date.toISOString()}>{formattedDate}</time>
              </li>
              <li>
                <address>{data.author}</address>
              </li>
            </ul>
          </header>

          {data.children}
        </main>
        <data.comp.Footer />
      </body>
    </html>
  );
};
