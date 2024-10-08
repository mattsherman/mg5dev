export const title = "mg5.dev Blog";
export const layout = "layouts/layout.tsx";

interface PostListItemProps {
  post: Lume.Data;
  helpers: Lume.Helpers;
}

function PostListItem({ post, helpers }: PostListItemProps) {
  const { date, url } = helpers;

  const postUrl = url(post.url);
  const formattedDate = date(post.date);

  return (
    <article>
      <header>
        <h2>
          <a href={postUrl}>{post.title}</a>
        </h2>
        <p>{formattedDate}</p>
        <p>{post.excerpt}</p>
      </header>
    </article>
  );
}

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const { search } = data;
  const posts = search.pages("type=post");

  return (
    <>
      <h1>{data.title}</h1>

      {posts.map((post) => {
        return <PostListItem post={post} helpers={helpers} />;
      })}
    </>
  );
};
