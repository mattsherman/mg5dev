export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/styles.css" />
      <title>{data.title}</title>
    </head>
    <body>
      <nav>
        <nav>
          <ol class="header-breadcrumb horizontal-list">
            <li>
              <a href="/">mg5.dev</a>
            </li>
          </ol>
        </nav>
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
