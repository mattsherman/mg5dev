export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>{data.title}</title>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <nav>
        <a href="/">mg5.dev</a>
      </nav>
      <main>
        <header>
          <h1>{data.title}</h1>
        </header>

        {data.children}
      </main>
    </body>
  </html>
);
