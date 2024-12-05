export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  const { breadcrumbs, secondary } = data;

  return (
    <nav>
      <ol class="header-breadcrumb horizontal-list">
        <li>
          <a href="/" class="icon-and-text">
            <data.comp.icons.HomeIcon />
            mg5.dev
          </a>
        </li>
      </ol>
      {secondary && <div class="header-secondary">{secondary}</div>}
    </nav>
  );
};
