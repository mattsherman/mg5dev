export const title = "Matt Sherman";
export const layout = "layouts/layout.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <ul class="home-page-icons">
      <li class="home-page-blog-list-item">
        <a href="/blog">Blog</a>
      </li>
      <li class="home-page-github-list-item">
        <a href="https://github.com/mattsherman">GitHub</a>
      </li>
      <li class="home-page-linkedin-list-item">
        <a href="https://www.linkedin.com/in/matthewsherman/">LinkedIn</a>
      </li>
    </ul>
  </>
);
