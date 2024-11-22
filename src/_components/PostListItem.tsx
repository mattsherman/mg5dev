interface PostListItemData extends Lume.Data {
  post: Lume.Data;
}
export default (data: PostListItemData, helpers: Lume.Helpers) => {
  const { post } = data;
  const { url } = helpers;

  const postUrl = url(post.url);

  return (
    <article class="post-list-item">
      <header>
        <h2>
          <a href={postUrl}>{post.title}</a>
        </h2>
        <data.comp.PostMetadata post={post} />
      </header>
      <div class="post-excerpt">
        <p>{post.excerpt}</p>
      </div>
      <div>
        <a href={postUrl}>Read post</a>
      </div>
    </article>
  );
};
