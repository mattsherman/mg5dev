---
title: About This Site 
date: 2024-10-23T00:00:00-0400
excerpt: Welcome to mg5.dev, my own little software development oriented site! Learn more about this site and the tech stack behind it.
---

Welcome to [mg5.dev](https://mg5.dev), my own little software development site!

This site serves as my “business card”, where you can find links to [my GitHub profile](https://github.com/mattsherman), [my LinkedIn profile](https://www.linkedin.com/in/matthewsherman/), and [my résumé](/resume).

I also plan on writing some development/technical oriented blog posts on here.

## About me

I’ve spent more than 25 years professionally as a software engineer, tech lead, and manger. And practically my whole life as a coder... I probably started coding on my Atari 800 when I was around five or six years old!

The past ten years, I’ve been at [Automattic](https://automattic.com), working on both the open-source [WooCommerce](https://woocommerce.com) project  and the commercial [WordPress.com](https://wordpress.com) service.

I’m proud of what I created while at Automattic, but [recent events](https://slate.com/technology/2024/10/wordpress-wpengine-matt-mullenweg-drama-explained.html) made it clear to me (and 158+ of my former colleagues) that now is the right time for a career move!

Prior to Automattic, I spent over 15 years at [Lenel](https://www.lenels2.com), a company I started at when I was still a student at [RIT](https://www.rit.edu).

## What’s the tech stack for this site?

This site is crafted using [Lume](https://lume.land), an open-source static site generator for [Deno](https://deno.com).

The [source for this site is](https://github.com/mattsherman/mg5-dev-web) written in TypeScript and JSX (using Preact). My résumé is stored as JSON, and blog posts such as this are written in Markdown.

I am targeting recent stable versions of web browsers. As a rough guide, I’m using features that are listed as “newly available” according to [baseline badges on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility#baseline_badges). 

Since this site is a small personal development site, I am not concerned with supporting older web browsers. If the target audience of this site were “average” people browsing the web, I’d put in place pre/post-processors, polyfills, and other techniques to ensure that everybody visiting the site had an excellent experience. But, that is not the case, and I purposely want to limit the use of such things to show what can be done simply with modern web standards and the most minimal amount of tooling.

When I push to `trunk`, a GitHub action builds the site and then deploys the latest version to [Deno Deploy](https://deno.com/deploy), where it is served via a simple Deno app.

### Third-party resources

- Icons: The icons are from [Remix Icon](https://remixicon.com/), a set of open-source icons for designers and developers.
- Fonts: The fonts are from [iA](https://github.com/iaolo/iA-Fonts), a set of open-source fonts used in the excellent [iA Writer](https://ia.net/writer) Markdown writing app (which I’m using to write this blog post).

## Why the “5”?

There’s no deep meaning behind the “5” in mg5.dev. (Maybe some day I will find some meaning and turn it into a backronym!)

I simply wanted a short domain name, my initials are “MGS”, and mgs.dev was taken (it doesn’t currently point to anything, but I’ll avoid linking to it in case it does in the future and it is something I wouldn’t want to link to).

That it is also a little goofy, in a pseudo “leetspeak” way, was an added bonus!
