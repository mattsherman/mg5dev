interface LayoutData extends Lume.Data {
  cacheBusterVersion: string;
}

export default (data: LayoutData, _helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <data.comp.BaseStylesLinks />
      <link rel="stylesheet" href={`/${data.cacheBusterVersion}/styles.css`} />
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
      <nav>
        <ol class="header-breadcrumb horizontal-list">
          <li>
            <a href="/" class="icon-and-text">
              <data.comp.icons.HomeIcon />
              mg5.dev
            </a>
          </li>
        </ol>
      </nav>
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
