interface PostMetadataData extends Lume.Data {
  post: Lume.Data;
}

export default (data: PostMetadataData, helpers: Lume.Helpers) => {
  const { HUMAN_DATE_FORMAT, post } = data;
  const { date } = helpers;

  const formattedDate = date(post.date, HUMAN_DATE_FORMAT);

  return (
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
  );
};
