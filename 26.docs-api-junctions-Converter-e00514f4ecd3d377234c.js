webpackJsonp([26],{109:function(n,a,s){n.exports=s(1).markdownPostProcessor('<p>Contains methods to convert between <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Location.md%%%END_SITEPACK_LINK%%%">Location</a> and <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Route.md%%%END_SITEPACK_LINK%%%">Route</a> objects. <code>Converter</code> objects are returned by the <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/createConverter.md%%%END_SITEPACK_LINK%%%">createConverter</a> function.</p>\n<p>You generally need exactly one <code>Converter</code> per application. This object will be in charge of turning the <code>Location</code> objects received from navigation events into <code>Route</code> objects.</p>\n<h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>\n<h3 id="locateroutes"><a class="header-anchor" href="#locateroutes" aria-hidden="true">#</a> locate(…routes)</h3>\n<p>Convert <code>Route</code> objects to a <code>Location</code> object.</p>\n<p>Use this method when you have a <code>Route</code> which you’d like to navigate, but you need a <code>Location</code> to actually perform this navigation. For example, this may occur when you want to call <a href="https://github.com/mjackson/history#navigation">history.push()</a>, or when you want to pass a route to a <a href="%%%SITEPACK_LINK%%%/docs/api/react-junctions/Link.md%%%END_SITEPACK_LINK%%%">&lt;Link&gt;</a>.</p>\n<h4 id="arguments"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h4>\n<ul>\n<li><code>...routes</code> (<em><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Route.md%%%END_SITEPACK_LINK%%%">Route</a></em>): One or many routes corresponding to the <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Junction.md%%%END_SITEPACK_LINK%%%">Junction</a> objects which <code>createConverter</code> was configured with.</li>\n</ul>\n<h4 id="returns"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>\n<p>(<em><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Location.md%%%END_SITEPACK_LINK%%%">Location</a></em>) A Location which is equivalent to the passed in Routes.</p>\n<h4 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4>\n<pre><code class="language-js"><span class="token keyword" >const</span> converter <span class="token operator" >=</span> <span class="token function" >createConverter</span><span class="token punctuation" >(</span>junction<span class="token punctuation" >)</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >Application</span> <span class="token keyword" >extends</span> <span class="token class-name" >Component</span> <span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>nav</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>converter<span class="token punctuation" >.</span><span class="token function" >locate</span><span class="token punctuation" >(</span>junction<span class="token punctuation" >.</span><span class="token function" >createRoute</span><span class="token punctuation" >(</span><span class="token string" >\'home\'</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Home<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>converter<span class="token punctuation" >.</span><span class="token function" >locate</span><span class="token punctuation" >(</span>junction<span class="token punctuation" >.</span><span class="token function" >createRoute</span><span class="token punctuation" >(</span><span class="token string" >\'about\'</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>About<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>nav</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n</code></pre>\n<h3 id="routelocation"><a class="header-anchor" href="#routelocation" aria-hidden="true">#</a> route(location)</h3>\n<p>Convert a <code>Location</code> object to <code>Route</code> objects.</p>\n<p>Used this method to handle browser navigation events which produce <code>Location</code> objects, such as <a href="https://github.com/mjackson/history#listening">history.listen()</a>.</p>\n<h4 id="arguments-2"><a class="header-anchor" href="#arguments-2" aria-hidden="true">#</a> Arguments</h4>\n<ul>\n<li><code>location</code> (<em><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Location.md%%%END_SITEPACK_LINK%%%">Location</a></em>): A Location object.</li>\n</ul>\n<h4 id="returns-2"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4>\n<p>(<em><a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Route.md%%%END_SITEPACK_LINK%%%">Route</a> | { [junctionKey]: Route | null } | undefined | null</em>).</p>\n<p>The return format depends on the format of the Junction objects which the <code>createConverter</code> was configured with.</p>\n<ul>\n<li>If <code>createConverter</code> was passed a single <code>Junction</code> object, the return will be a single <code>Route</code>.</li>\n<li>If <code>createConverter</code> was passed an object mapping keys to <code>Junction</code> objects, the return will be an object mapping those same keys to <code>Route</code> objects</li>\n</ul>\n<p>Additionally, there are two special cases:</p>\n<ul>\n<li><code>null</code> indicates that the received <code>Location</code> does not contain any routing information. For example, the URL <code>/</code>.</li>\n<li><code>undefined</code> indicates that a <code>Location</code> with unexpected information was received – i.e. 404.</li>\n</ul>\n<h4 id="examples"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h4>\n<h5 id="given-a-with-parallel-junctions"><a class="header-anchor" href="#given-a-with-parallel-junctions" aria-hidden="true">#</a> Given a <code>Converter</code> with Parallel Junctions</h5>\n<p>Assuming the argument location is known, <code>converter.route()</code> will return an object specifying the routes for each Junction.</p>\n<pre><code class="language-js"><span class="token keyword" >const</span> converter <span class="token operator" >=</span> <span class="token function" >createConverter</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  main<span class="token punctuation" >:</span> mainJunction<span class="token punctuation" >,</span>\n  modal<span class="token punctuation" >:</span> modalJunction<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n\n<span class="token comment" spellcheck="true">// returns {</span>\n<span class="token comment" spellcheck="true">//   main: Route | null,</span>\n<span class="token comment" spellcheck="true">//   modal: Route | null,</span>\n<span class="token comment" spellcheck="true">// }</span>\n<span class="token keyword" >const</span> routes <span class="token operator" >=</span> converter<span class="token punctuation" >.</span><span class="token function" >route</span><span class="token punctuation" >(</span>someLocation<span class="token punctuation" >)</span>\n</code></pre>\n<h5 id="given-a-with-a-single-junction"><a class="header-anchor" href="#given-a-with-a-single-junction" aria-hidden="true">#</a> Given a <code>Converter</code> with a single Junction</h5>\n<p>Assuming the argument location is known, <code>converter.route()</code> will return a single Route.</p>\n<pre><code class="language-js"><span class="token keyword" >const</span> converter <span class="token operator" >=</span> <span class="token function" >createConverter</span><span class="token punctuation" >(</span>mainJunction<span class="token punctuation" >)</span>\n\n<span class="token comment" spellcheck="true">// returns Route or null</span>\n<span class="token keyword" >const</span> routes <span class="token operator" >=</span> converter<span class="token punctuation" >.</span><span class="token function" >route</span><span class="token punctuation" >(</span>someLocation<span class="token punctuation" >)</span>\n</code></pre>\n')}});