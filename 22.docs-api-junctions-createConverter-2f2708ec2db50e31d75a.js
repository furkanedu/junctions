webpackJsonp([22],{113:function(n,a,s){n.exports=s(1).markdownPostProcessor('<p>Creates a <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Converter.md%%%END_SITEPACK_LINK%%%">Converter</a> object to help convert between <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Route.md%%%END_SITEPACK_LINK%%%">Route</a> and <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Location.md%%%END_SITEPACK_LINK%%%">Location</a> objects.</p>\n<h4 id="arguments"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h4>\n<ul>\n<li><code>junction</code> (<em><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Junction.md%%%END_SITEPACK_LINK%%%">Junction</a> | { [key]: <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Junction.md%%%END_SITEPACK_LINK%%%">Junction</a> }</em>): The Junction or Junctions which specify the map between Route and Location.</li>\n<li><code>baseLocation</code> <em><small>optional</small></em> (<em><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Location.md%%%END_SITEPACK_LINK%%%">Location</a></em>): Location information which must be part of every <code>Location</code> object consumed and produced by this <code>Converter</code>.</li>\n</ul>\n<h4 id="returns"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>\n<p>(<em><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Converter.md%%%END_SITEPACK_LINK%%%">Converter</a></em>) A <code>Converter</code> object</p>\n<h4 id="examples"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h4>\n<h5 id="typical-usage"><a class="header-anchor" href="#typical-usage" aria-hidden="true">#</a> Typical Usage</h5>\n<p>Pass a single <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Junction.md%%%END_SITEPACK_LINK%%%">Junction</a>, indicating that you expect <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Converter.md#routelocation%%%END_SITEPACK_LINK%%%">converter.route()</a> to return a single <code>Route</code> for any input <code>Location</code>.</p>\n<pre><code class="language-js"><span class="token comment" spellcheck="true">// Create a Converter for a single Junction</span>\n<span class="token keyword" >const</span> converter <span class="token operator" >=</span> <span class="token function" >createConverter</span><span class="token punctuation" >(</span>appJunction<span class="token punctuation" >)</span>\n</code></pre>\n<h5 id="multiple-junctions"><a class="header-anchor" href="#multiple-junctions" aria-hidden="true">#</a> Multiple Junctions</h5>\n<p>It is also possible to pass a <em>group</em> of Junctions, indicating that multiple Routes may be active simultaneously.</p>\n<p>Use this feature when you want to allow one component to render multiple Routes simultaneously. For example, a modal <em>and</em> a tab bar.</p>\n<pre><code class="language-js"><span class="token keyword" >const</span> converter <span class="token operator" >=</span> <span class="token function" >createConverter</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n\n  <span class="token comment" spellcheck="true">// This Junction represents your main navigation</span>\n  main<span class="token punctuation" >:</span> <span class="token function" >createJunction</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    dashboard<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> <span class="token keyword" >default</span><span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    invoices<span class="token punctuation" >:</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    contacts<span class="token punctuation" >:</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n\n  <span class="token comment" spellcheck="true">// This Junction allows you to overlay a modal over your entire application</span>\n  modal<span class="token punctuation" >:</span> <span class="token function" >createJunction</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    settings<span class="token punctuation" >:</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n</code></pre>\n<h5 id="base-location"><a class="header-anchor" href="#base-location" aria-hidden="true">#</a> Base Location</h5>\n<p>The optional <code>baseLocation</code> argument allows you to specify parts of your <code>Location</code> objects which should be ignored by <code>converter.route()</code>, and added to locations produced by <code>converter.locate()</code>.</p>\n<p>Use this argument if your app is being served from a subdirectory, as opposed to the root of your domain.</p>\n<pre><code class="language-js"><span class="token keyword" >const</span> baseLocation <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  pathname<span class="token punctuation" >:</span> <span class="token string" >\'/blog/\'</span>\n<span class="token punctuation" >}</span>\n<span class="token keyword" >const</span> converter <span class="token operator" >=</span> <span class="token function" >createConverter</span><span class="token punctuation" >(</span>appJunction<span class="token punctuation" >,</span> baseLocation<span class="token punctuation" >)</span>    \n</code></pre>\n')}});