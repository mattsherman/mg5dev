export const title = "Blog";
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
    <article class="post-list-item">
      <header>
        <h2>
          <a href={postUrl}>{post.title}</a>
        </h2>
        <div>
          <time datetime={post.date.toISOString()}>{formattedDate}</time>
        </div>
      </header>
      <div class="post-excerpt">
        <p>{post.excerpt}</p>
      </div>
      <div>
        <a href={postUrl}>Read post</a>
      </div>
    </article>
  );
}

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const { search } = data;
  const posts = search.pages("type=post");

  return (
    <>
      {posts.map((post) => {
        return <PostListItem post={post} helpers={helpers} />;
      })}
    </>
  );
};
