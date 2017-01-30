webpackJsonp([29],{106:function(n,a,s){n.exports=s(1).markdownPostProcessor('<p>Not every URL which your application receives is going to be valid. Similarly, not every URL which you <em>produce</em> is going to be exactly the same as where you end up. In particular, if your junction tree has default branches or default parameters, the <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Route.md%%%END_SITEPACK_LINK%%%">Route</a> the converter produces may not match the <a href="%%%SITEPACK_LINK%%%/docs/api/junctions/Location.md%%%END_SITEPACK_LINK%%%">Location</a> which it received.</p>\n<p>To get around this, Junctions uses the concept of a <strong>Canonical Location</strong>. This is the single <code>Location</code> which will be <em>produced</em> by any <code>Route</code> when fed to <code>getLocation</code>, as opposed to the many <code>Location</code> objects which can be fed into <code>getRouteSet</code> to produce that same <code>Route</code>.</p>\n<p>You may want to redirect your user to the canonical location for whichever URL they enter. This can be achieved by checking the canonical location of the route set from each location emitted by a <code>history</code>:</p>\n<pre><code class="language-js"><span class="token keyword" >const</span> converter <span class="token operator" >=</span> Junctions<span class="token punctuation" >.</span><span class="token function" >createConverter</span><span class="token punctuation" >(</span>AppScreen<span class="token punctuation" >.</span>junction<span class="token punctuation" >,</span> baseLocation<span class="token punctuation" >)</span>\n    \n<span class="token keyword" >function</span> <span class="token function" >handleLocationChange</span><span class="token punctuation" >(</span>location<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> route <span class="token operator" >=</span> converter<span class="token punctuation" >.</span><span class="token function" >route</span><span class="token punctuation" >(</span>location<span class="token punctuation" >)</span>\n  <span class="token keyword" >const</span> canonicalLocation <span class="token operator" >=</span> route <span class="token operator" >&amp;&amp;</span> converter<span class="token punctuation" >.</span><span class="token function" >locate</span><span class="token punctuation" >(</span>route<span class="token punctuation" >)</span>\n\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>route <span class="token operator" >&amp;&amp;</span> <span class="token operator" >!</span>Junctions<span class="token punctuation" >.</span><span class="token function" >locationsEqual</span><span class="token punctuation" >(</span>location<span class="token punctuation" >,</span> canonicalLocation<span class="token punctuation" >)</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    history<span class="token punctuation" >.</span><span class="token function" >replace</span><span class="token punctuation" >(</span>canonicalLocation<span class="token punctuation" >)</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span>route<span class="token punctuation" >)</span>\n<span class="token punctuation" >}</span>\n\n<span class="token function" >handleLocationChange</span><span class="token punctuation" >(</span>history<span class="token punctuation" >.</span>location<span class="token punctuation" >)</span>\nhistory<span class="token punctuation" >.</span><span class="token function" >listen</span><span class="token punctuation" >(</span>handleLocationChange<span class="token punctuation" >)</span>\n</code></pre>\n')}});