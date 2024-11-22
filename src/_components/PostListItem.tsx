interface PostListItemData extends Lume.Data {
  post: Lume.Data;
}
export default (data: PostListItemData, helpers: Lume.Helpers) => {
  const { HUMAN_DATE_FORMAT, post } = data;
  const { date, url } = helpers;

  const postUrl = url(post.url);
  const formattedDate = date(post.date, HUMAN_DATE_FORMAT);

  return (
    <article class="post-list-item">
      <header>
        <h2>
          <a href={postUrl}>{post.title}</a>
        </h2>
        <ul class="post-metadata horizontal-list">
          <li>
            <span class="icon-and-text">
              <data.comp.icons.DateIcon />
              <time datetime={post.date.toISOString()}>{formattedDate}</time>
            </span>
          </li>
          <li>
            <span class="icon-and-text">
              <data.comp.icons.AuthorIcon />
              <address>{post.author}</address>
            </span>
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
};
