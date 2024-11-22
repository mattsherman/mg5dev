interface PostLayoutData extends Lume.Data {
  HUMAN_DATE_FORMAT: string;
}

export default (data: PostLayoutData, helpers: Lume.Helpers) => {
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
          href={`/${data.cacheBusterVersion}/prism-code-themes/okaidia.css`}
        />
        <data.comp.BaseStylesLinks />
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
              <a href="/" class="icon-and-text">
                <data.comp.icons.HomeIcon />
                mg5.dev
              </a>
            </li>
            <li>
              <a href="/blog" class="icon-and-text">
                <data.comp.icons.BlogIcon />
                Blog
              </a>
            </li>
          </ol>
        </nav>
        <main>
          <header>
            <h1>{data.title}</h1>
            <ul class="post-metadata horizontal-list">
              <li>
                <span class="icon-and-text">
                  <data.comp.icons.DateIcon />
                  <time datetime={data.date.toISOString()}>
                    {formattedDate}
                  </time>
                </span>
              </li>
              <li>
                <span class="icon-and-text">
                  <data.comp.icons.AuthorIcon />
                  <address>{data.author}</address>
                </span>
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
