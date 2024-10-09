export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const { date } = helpers;

  const formattedDate = date(data.date);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>{data.title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <nav>
          <a href="/">mg5.dev</a> &gt; <a href="/blog">Blog</a>
        </nav>
        <main>
          <header>
            <h1>{data.title}</h1>
            <div>
              <time datetime={data.date.toISOString()}>{formattedDate}</time>
            </div>
          </header>

          {data.children}
        </main>
      </body>
    </html>
  );
};
