import { ProxyComponents } from 'lume/core/source.ts';

interface PageNavData extends Lume.Data {
  breadcrumbs?: { url: string; text: string; Icon: ProxyComponents }[];
  secondary?: ProxyComponents;
}

export default (data: PageNavData, _helpers: Lume.Helpers) => {
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
        {breadcrumbs &&
          breadcrumbs.map(({ url, text, Icon }) => (
            <li>
              <a href={url} class="icon-and-text">
                <Icon />
                {text}
              </a>
            </li>
          ))}
      </ol>
      {secondary && <div class="header-secondary">{secondary}</div>}
    </nav>
  );
};
