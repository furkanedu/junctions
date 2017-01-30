webpackJsonp([27],{108:function(n,a,e){n.exports=e(1).markdownPostProcessor('<p>Junctions was designed to work great with React – without being tied to it. To facilitate this, its functionality has been separated into a core package and packages to integrate junctions with other libraries.</p>\n<h2 id="core-package"><a class="header-anchor" href="#core-package" aria-hidden="true">#</a> Core package</h2>\n<p>The core package is called <a href="https://github.com/jamesknelson/react">junctions</a>. It contains the important parts. In particular:</p>\n<ul>\n<li><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/createJunction.md%%%END_SITEPACK_LINK%%%">createJunction</a>, used to define new <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Junction.md%%%END_SITEPACK_LINK%%%">Junction</a> objects</li>\n<li><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/createConverter.md%%%END_SITEPACK_LINK%%%">createConverter</a>, used to create your application-wide <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Converter.md%%%END_SITEPACK_LINK%%%">Converter</a> object</li>\n<li><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/routesMatch.md%%%END_SITEPACK_LINK%%%">routesMatch</a>, used to check if two <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Route.md%%%END_SITEPACK_LINK%%%">Route</a> objects are equivalent</li>\n<li><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/locationsEqual.md%%%END_SITEPACK_LINK%%%">locationsEqual</a>, used to check if two <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Location.md%%%END_SITEPACK_LINK%%%">Location</a> objects are exactly equal</li>\n</ul>\n<h2 id="integration-packages"><a class="header-anchor" href="#integration-packages" aria-hidden="true">#</a> Integration packages</h2>\n<p>Additional packages are available to ease integration with other tools and libraries:</p>\n<ul>\n<li><a href="https://github.com/jamesknelson/react-junctions">react-junctions</a> provides components for React</li>\n<li><a href="https://github.com/jamesknelson/react-router-junctions">react-router-junctions</a> allows you to mount a Junctions-based Component in a react-router app</li>\n</ul>\n<h2 id="importing"><a class="header-anchor" href="#importing" aria-hidden="true">#</a> Importing</h2>\n<p>Functions and classes are top-level exports. State types cannot be created by themselves, but are returned from some of the top level functions.</p>\n<pre><code class="language-js"><span class="token comment" spellcheck="true">// ES6</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> createJunction <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'junctions\'</span>\n\n<span class="token comment" spellcheck="true">// ES5</span>\n<span class="token keyword" >var</span> createJunction <span class="token operator" >=</span> <span class="token function" >require</span><span class="token punctuation" >(</span><span class="token string" >\'junctions\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span>createJunction\n\n<span class="token comment" spellcheck="true">// UMD</span>\n<span class="token keyword" >var</span> createJunction <span class="token operator" >=</span> Junctions<span class="token punctuation" >.</span>createJunction\n</code></pre>\n')}});