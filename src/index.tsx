export const title = "Welcome to mg5.dev";
export const layout = "layouts/layout.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <p>This is the home page for mg5.dev!</p>
    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="https://github.com/mattsherman">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/matthewsherman/">LinkedIn</a>
      </li>
    </ul>
  </>
);
