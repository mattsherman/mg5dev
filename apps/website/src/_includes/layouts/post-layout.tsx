interface PostLayoutData extends Lume.Data {}

export default (data: PostLayoutData, _helpers: Lume.Helpers) => {
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
          breadcrumbs={[
            { url: '/blog', text: 'Blog', Icon: data.comp.icons.BlogIcon },
          ]}
        />
        <main>
          <header>
            <h1>{data.title}</h1>
            <data.comp.PostMetadata post={data} />
          </header>

          {data.children}
        </main>
        <data.comp.Footer />
      </body>
    </html>
  );
};
