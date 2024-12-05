export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  const { user, userRealName, slug, title, height = 300 } = data;

  return (
    <>
      <p
        class="codepen"
        data-height={height}
        data-default-tab="html,result"
        data-slug-hash={slug}
        data-pen-title={title}
        data-user={user}
        style={{
          height: `${height}px`,
          'box-sizing': 'border-box',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          border: '2px solid',
          margin: '1em 0',
          padding: '1em',
        }}
      >
        <span>
          See the Pen{' '}
          <a href={`https://codepen.io/${user}/pen/${slug}`}>{title ?? slug}</a>{' '}
          by {userRealName ?? user} (
          <a href={`https://codepen.io/${user}`}>@{user}</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
      <script
        async
        src="https://cpwebassets.codepen.io/assets/embed/ei.js"
      ></script>
    </>
  );
};
