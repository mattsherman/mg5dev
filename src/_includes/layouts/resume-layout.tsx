export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/resume/styles.css" />
      <title>{data.title}</title>
    </head>
    <body>{data.children}</body>
  </html>
);
