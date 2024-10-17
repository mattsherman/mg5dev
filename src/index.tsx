export const title = "Matt Sherman";
export const layout = "layouts/layout.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const { search } = data;

  const hasPosts = search.pages("type=post").length > 0;

  return (
    <>
      <ul class="home-page-icons">
        {hasPosts && (
          <li>
            <a href="/blog" class="home-page-blog-link">
              Blog
            </a>
          </li>
        )}
        <li>
          <a href="/resume" class="home-page-resume-link">
            Résumé
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mattsherman"
            class="home-page-github-link"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matthewsherman/"
            class="home-page-linkedin-link"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </>
  );
};
