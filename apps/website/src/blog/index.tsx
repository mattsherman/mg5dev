export const title = 'Blog';
export const layout = 'layouts/layout.tsx';

export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  const { comp, search } = data;

  const PostListItem = comp.PostListItem;

  const posts = search.pages('type=post', 'date=desc');

  return (
    <>
      {posts.map((post) => {
        return <PostListItem post={post} />;
      })}
    </>
  );
};
