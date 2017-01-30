webpackJsonp([31],{104:function(n,a,e){n.exports=e(1).markdownPostProcessor('<p>Junctions.js is a router built from the ground up for component-based applications.</p>\n<p>It equips you to create reusable React components that have routes and links, and integrate seamlessly with the browser <a href="https://developer.mozilla.org/en/docs/Web/API/History">History API</a>.</p>\n<h2 id="why-use-junctionsjs"><a class="header-anchor" href="#why-use-junctionsjs" aria-hidden="true">#</a> Why use junctions.js?</h2>\n<p>Because it has <em>principles</em>.</p>\n<ul>\n<li><strong>Composability.</strong> Reuse components anywhere. Even those with links and routes!</li>\n<li><strong>No Surprises.</strong> The Back and Forward buttons work just as the user expects.</li>\n<li><strong>Flexibility.</strong> Junctions doesn’t make decisions for you. It let’s React be React.</li>\n</ul>\n<p>These three principles are described in more (and less) detail in <a href="%%%SITEPACK_LINK%%%/docs/introduction/three-principles.md%%%END_SITEPACK_LINK%%%">The Haiku Of Routing Principles</a>.</p>\n<h2 id="getting-started"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2>\n<p>The pitch for a super awesome routing library is a funny place to get asked “Do you actually need a router?” – but it would be irresponsible to tell you how great junctions.js is without telling you that <em>not using any router is often even better</em>. So ask yourself – <a href="%%%SITEPACK_LINK%%%/docs/introduction/do-i-need-a-router.md%%%END_SITEPACK_LINK%%%">do you really <em>need</em> a router?</a></p>\n<p>Once you’ve decided that junctions.js does fit your needs, the best way to get started is to try it. and the <a href="%%%SITEPACK_LINK%%%/docs%%%END_SITEPACK_LINK%%%">Tutorial</a> makes this easy – after following along, you’ll have built a real app and have the experience to apply junctions.js to your own projects.</p>\n<h2 id="demos"><a class="header-anchor" href="#demos" aria-hidden="true">#</a> Demos</h2>\n<p>This website hosts a number of live demos with source. Take a look at the <a href="%%%SITEPACK_LINK%%%/examples/Raw.example.js%%%END_SITEPACK_LINK%%%">Raw</a> example to see how Junctions works without any React-specific helper components, or see <a href="%%%SITEPACK_LINK%%%/examples/Basic.example.js%%%END_SITEPACK_LINK%%%">Basic</a> for a typical example.</p>\n<p>Also, the <a href="https://junctions.js.org">junctions.js website</a> eats its own dog food. When viewing the website, you can open your developer console to take a look!</p>\n<h2 id="installation"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>\n<p>At minimum, you’ll need the junctions package</p>\n<pre><code class="language-bash">npm <span class="token function" >install</span> junctions --save\n</code></pre>\n<p>If you want <a href="%%%SITEPACK_LINK%%%/docs/api/react-junctions/Link.md%%%END_SITEPACK_LINK%%%">&lt;Link&gt;</a> and <a href="%%%SITEPACK_LINK%%%/docs/api/react-junctions/Router.md%%%END_SITEPACK_LINK%%%">&lt;Router&gt;</a> components to help integrating with React, install <code>react-junctions</code></p>\n<pre><code class="language-bash">npm <span class="token function" >install</span> react-junctions --save\n</code></pre>\n<p>Alternatively, use plain-ol’ script tags with unpkg.</p>\n<pre><code class="language-html"><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>script</span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://unpkg.com/junctions@0.3.0/dist/junctions.js<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>script</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>script</span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://unpkg.com/react-junctions@0.3.2/dist/index.js<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>script</span><span class="token punctuation" >></span></span>\n</code></pre>\n<h2 id="contributing"><a class="header-anchor" href="#contributing" aria-hidden="true">#</a> Contributing</h2>\n<p>Contributions are welcome, especially for the documentation.</p>\n<p>To get the documentation running locally, you’ll need to make sure you have a link to the junctions package itself in your <code>node_modules</code> directory:</p>\n<pre><code class="language-bash">npm <span class="token function" >install</span>\nnpm <span class="token function" >link</span>\nnpm <span class="token function" >link</span> junctions\nnpm run docs:start\n</code></pre>\n<p>Then open your browser to <a href="http://localhost:4000">http://localhost:4000</a>!</p>\n')}});