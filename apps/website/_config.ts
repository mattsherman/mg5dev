import lume from 'lume/mod.ts';

import date from 'lume/plugins/date.ts';
import esbuild from 'lume/plugins/esbuild.ts';
import feed from 'lume/plugins/feed.ts';
import jsx from 'lume/plugins/jsx_preact.ts';
import mdx from 'lume/plugins/mdx.ts';
import prism from 'lume/plugins/prism.ts';

// Additional prism language support
import 'npm:prismjs@1.29.0/components/prism-typescript.js';
import 'npm:prismjs@1.29.0/components/prism-markup-templating.js';
import 'npm:prismjs@1.29.0/components/prism-php.js';

import cacheBusting from 'lume/middlewares/cache_busting.ts';

Deno.env.set('TZ', 'America/New_York');

const site = lume({
  src: './src',
  server: {
    middlewares: [cacheBusting()],
  },
});

site.data('cacheBusterVersion', `v${Date.now()}`);

site.copy('static');
site.copy(['.css', '.html']);

site.use(
  esbuild({
    options: {
      bundle: true,
      format: 'esm',
      keepNames: false,
      minify: false,
      platform: 'browser',
      target: 'esnext',
    },
  })
);

site.use(jsx());

site.use(mdx());

site.use(date());

site.use(
  prism({
    theme: {
      name: 'okaidia',
      path: '/prism-code-themes/okaidia.css',
    },
  })
);

site.use(
  feed({
    output: ['/posts.rss', '/posts.json'],
    query: 'type=post',
    info: {
      title: 'mg5.dev',
      description: "Matt Sherman's development blog",
    },
    items: {
      title: '=title',
      description: '=excerpt',
      published: '=date',
      content: '=children',
    },
  })
);

export default site;
