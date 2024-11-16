export const title = "mg5.dev";
export const layout = "layouts/home-page-layout.tsx";

export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  const { search } = data;

  const hasPosts = search.pages("type=post").length > 0;

  return (
    <>
      <ul class="home-page-icons">
        {hasPosts && (
          <li>
            <a href="/blog">
              <data.comp.icons.BlogIcon />
              Blog
            </a>
          </li>
        )}
        <li>
          <a href="/resume">
            <data.comp.icons.ResumeIcon />
            Résumé
          </a>
        </li>
        <li>
          <a href="https://github.com/mattsherman">
            <data.comp.icons.GitHubIcon />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/matthewsherman/">
            <data.comp.icons.LinkedInIcon />
            LinkedIn
          </a>
        </li>
      </ul>
    </>
  );
};
