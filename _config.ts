import date from "lume/plugins/date.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
});

site.use(jsx());

site.use(date());

site.use(
  feed({
    output: ["/posts.rss", "/posts.json"],
    query: "type=post",
    info: {
      title: "My blog",
      description: "This is my blog",
    },
    items: {
      title: "=title",
      description: "=excerpt",
    },
  })
);

export default site;
