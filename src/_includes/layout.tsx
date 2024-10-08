export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>{data.title}</title>
    </head>
    <body>{data.children}</body>
  </html>
);
