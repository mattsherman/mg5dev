export const title = "Blog";
export const layout = "layouts/layout.tsx";

interface PostListItemProps {
  data: Lume.Data;
  post: Lume.Data;
  helpers: Lume.Helpers;
}

function PostListItem({ data, post, helpers }: PostListItemProps) {
  const { HUMAN_DATE_FORMAT } = data;
  const { date, url } = helpers;

  const postUrl = url(post.url);
  const formattedDate = date(post.date, HUMAN_DATE_FORMAT);

  return (
    <article class="post-list-item">
      <header>
        <h2>
          <a href={postUrl}>{post.title}</a>
        </h2>
        <ul class="post-metadata">
          <li>
            <time datetime={post.date.toISOString()}>{formattedDate}</time>
          </li>
          <li>
            <address>{post.author}</address>
          </li>
        </ul>
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
        return <PostListItem data={data} post={post} helpers={helpers} />;
      })}
    </>
  );
};
