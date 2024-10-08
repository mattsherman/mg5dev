export const title = "Welcome to mg5.dev";
export const layout = "layouts/layout.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <h1>{data.title}</h1>
    <p>This is the home page for mg5.dev!</p>
  </>
);
