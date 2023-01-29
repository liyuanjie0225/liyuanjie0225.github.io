import{_ as s,c as n,o as a,a as l}from"./app.b733c43a.js";const d=JSON.parse('{"title":"\u524D\u8A00","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"\u5B89\u88C5gulp","slug":"\u5B89\u88C5gulp"},{"level":2,"title":"\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1Task","slug":"\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1task"},{"level":2,"title":"\u4E32\u884C(series)\u548C\u5E76\u884C(parallel)","slug":"\u4E32\u884C-series-\u548C\u5E76\u884C-parallel"},{"level":2,"title":"src()\u548Cdest()","slug":"src-\u548Cdest"},{"level":3,"title":"\u590D\u5236","slug":"\u590D\u5236"},{"level":3,"title":"\u5904\u7406less\u6587\u4EF6","slug":"\u5904\u7406less\u6587\u4EF6"},{"level":2,"title":"\u76D1\u542C\u6587\u4EF6\u66F4\u6539browser-sync","slug":"\u76D1\u542C\u6587\u4EF6\u66F4\u6539browser-sync"},{"level":2,"title":"\u6700\u540E","slug":"\u6700\u540E"}],"relativePath":"articles/gulp\u7684\u4F7F\u7528.md"}'),p={name:"articles/gulp\u7684\u4F7F\u7528.md"},e=l(`<h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u968F\u7740\u524D\u7AEF\u8BF8\u5982webpack\uFF0Crollup\uFF0Cvite\u7684\u53D1\u5C55\uFF0Cgulp\u611F\u89C9\u4F3C\u4E4E\u597D\u50CF\u88AB\u53D6\u4EE3\u4E86\u3002\u5176\u5B9E\u5E76\u6CA1\u6709\uFF0C\u53EA\u4E0D\u8FC7\u5B83\u4ECE\u53F0\u524D\u9000\u5C45\u5230\u4E86\u5E55\u540E\u3002\u6211\u4EEC\u4ECD\u7136\u53EF\u4EE5\u5728\u5F88\u591A\u9879\u76EE\u4E2D\u770B\u5230\u5B83\u7684\u8EAB\u5F71\uFF0C\u6BD4\u5982elementplus\u3001vant\u7B49\u3002\u73B0\u5728gulp\u66F4\u591A\u7684\u662F\u505A\u6D41\u7A0B\u5316\u7684\u63A7\u5236\u3002</p><blockquote><p>\u6BD4\u5982\u6211\u4EEC\u8981\u628A\u4E00\u4E2A\u5927\u8C61\u653E\u8FDB\u51B0\u7BB1\u91CC\u5C31\u9700\u8981 \u6253\u5F00\u51B0\u7BB1\u95E8-&gt;\u628A\u5927\u8C61\u653E\u8FDB\u51B0\u7BB1-&gt;\u5173\u4E0A\u51B0\u7BB1\u95E8\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u6D41\u7A0B\uFF0C\u4F7F\u7528gulp\u5C31\u53EF\u4EE5\u89C4\u5B9A\u8FD9\u4E9B\u6D41\u7A0B\uFF0C\u5C06\u8FD9\u4E2A\u6D41\u7A0B\u81EA\u52A8\u5316\u3002</p></blockquote><p>\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5B83\u5728\u9879\u76EE\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u81EA\u52A8\u6267\u884C\u5E38\u89C1\u4EFB\u52A1\u3002\u6BD4\u5982\u6253\u5305\u4E00\u4E2A\u7EC4\u4EF6\u5E93\uFF0C\u6211\u4EEC\u53EF\u80FD\u8981\u79FB\u9664\u6587\u4EF6\u3001copy\u6587\u4EF6\uFF0C\u6253\u5305\u6837\u5F0F\u3001\u6253\u5305\u7EC4\u4EF6\u3001\u6267\u884C\u4E00\u4E9B\u547D\u4EE4\u8FD8\u6709\u4E00\u952E\u6253\u5305\u591A\u4E2Apackage\u7B49\u7B49\u90FD\u53EF\u4EE5\u7531gulp\u8FDB\u884C\u81EA\u5B9A\u4E49\u6D41\u7A0B\u7684\u63A7\u5236\uFF0C\u975E\u5E38\u7684\u65B9\u4FBF\u3002</p><p>\u672C\u6587\u5C06\u4E3B\u8981\u4ECB\u7ECDgulp\u7684\u4E00\u4E9B\u5E38\u7528\u529F\u80FD</p><h2 id="\u5B89\u88C5gulp" tabindex="-1">\u5B89\u88C5gulp <a class="header-anchor" href="#\u5B89\u88C5gulp" aria-hidden="true">#</a></h2><p>\u9996\u5148\u5168\u5C40\u5B89\u88C5gulp\u7684\u811A\u624B\u67B6</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --global gulp-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u65B0\u5EFA\u6587\u4EF6\u5939gulpdemo\uFF0C\u7136\u540E\u6267\u884C <strong>npm init -y</strong>,\u7136\u540E\u5728\u8FD9\u4E2A\u9879\u76EE\u4E0B\u5B89\u88C5\u672C\u5730\u4F9D\u8D56gulp</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install gulp -D    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u6211\u4EECgulp\u4FBF\u5B89\u88C5\u597D\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA<strong>gulpfile.js</strong>\u6587\u4EF6\uFF0C\u5F53gulp\u6267\u884C\u7684\u65F6\u5019\u4F1A\u81EA\u52A8\u5BFB\u627E\u8FD9\u4E2A\u6587\u4EF6\u3002</p><h2 id="\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1task" tabindex="-1">\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1Task <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1task" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2Agulp\u4EFB\u52A1\uFF08task\uFF09\u90FD\u662F\u4E00\u4E2A\u5F02\u6B65\u7684JavaScript\u51FD\u6570\uFF0C\u6B64\u51FD\u6570\u662F\u4E00\u4E2A\u53EF\u4EE5\u63A5\u6536callback\u4F5C\u4E3A\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u6216\u8005\u8FD4\u56DE\u4E00\u4E2APromise\u7B49\u5F02\u6B65\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u6BD4\u5982\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1\u53EF\u4EE5\u8FD9\u6837\u5199</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">exports.default = (cb) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;my task&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  cb();</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6216\u8005\u8FD9\u6837\u5199</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">exports.default = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;my task&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Promise.resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u7EC8\u7AEF\u8F93\u5165<strong>gulp</strong>\u5C31\u4F1A\u6267\u884C\u6211\u4EEC\u8FD9\u4E2A\u4EFB\u52A1</p><h2 id="\u4E32\u884C-series-\u548C\u5E76\u884C-parallel" tabindex="-1">\u4E32\u884C(series)\u548C\u5E76\u884C(parallel) <a class="header-anchor" href="#\u4E32\u884C-series-\u548C\u5E76\u884C-parallel" aria-hidden="true">#</a></h2><p>\u8FD9\u4E24\u4E2A\u5176\u5B9E\u5F88\u597D\u7406\u89E3\uFF0C\u4E32\u884C\u5C31\u662F\u4EFB\u52A1\u4E00\u4E2A\u4E00\u4E2A\u6267\u884C\uFF0C\u5E76\u884C\u5C31\u662F\u6240\u6709\u4EFB\u52A1\u4E00\u8D77\u6267\u884C\u3002\u4E0B\u9762\u5148\u770B\u4E32\u884C\u6F14\u793A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { series, parallel } = require(&quot;gulp&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const task1 = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;task1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 5000);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">const task2 = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;task2&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Promise.resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.default = series(task1, task2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A7\u5236\u53F0\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/004e4de43da446b2863c0f361c676f62~tplv-k3u1fbpfcp-watermark.image?" alt="1659025931632.jpg"></p><p>\u53EF\u4EE5\u770B\u51FA\u6267\u884Ctask1\u7528\u4E865s\uFF0C\u7136\u540E\u518D\u6267\u884Ctask2\uFF0C\u518D\u770B\u4E0B\u5E76\u884C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { series, parallel } = require(&quot;gulp&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const task1 = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;task1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 5000);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">const task2 = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;task2&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Promise.resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.default = parallel(task1, task2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60b5c9fb35584efb8cc4e80f1027d221~tplv-k3u1fbpfcp-watermark.image?" alt="1659026080863.jpg"></p><p>\u53EF\u4EE5\u770B\u51FA\u4E24\u4E2A\u4EFB\u52A1\u662F\u540C\u65F6\u6267\u884C\u7684</p><h2 id="src-\u548Cdest" tabindex="-1">src()\u548Cdest() <a class="header-anchor" href="#src-\u548Cdest" aria-hidden="true">#</a></h2><p>src()\u548Cdest()\u8FD9\u4E24\u4E2A\u51FD\u6570\u5728\u6211\u4EEC\u5B9E\u9645\u9879\u76EE\u4E2D\u7ECF\u5E38\u4F1A\u7528\u5230\u3002src()\u8868\u793A\u521B\u5EFA\u4E00\u4E2A\u8BFB\u53D6\u6587\u4EF6\u7CFB\u7EDF\u7684\u6D41\uFF0Cdest()\u662F\u521B\u5EFA\u4E00\u4E2A\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u7684\u6D41\u3002\u6211\u4EEC\u76F4\u63A5\u5199\u4E00\u4E2Acopy \u7684\u793A\u4F8B</p><h3 id="\u590D\u5236" tabindex="-1">\u590D\u5236 <a class="header-anchor" href="#\u590D\u5236" aria-hidden="true">#</a></h3><p>\u5728\u5199\u4E4B\u524D\u6211\u4EEC\u5148\u5728\u6211\u4EEC\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2Asrc\u76EE\u5F55\u7528\u4E8E\u5B58\u653E\u6211\u4EEC\u88AB\u590D\u5236\u7684\u6587\u4EF6\uFF0C\u5728src\u4E0B\u968F\u4FBF\u65B0\u5EFA\u51E0\u4E2A\u6587\u4EF6\uFF0C\u5982\u4E0B\u56FE</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f0a59a1ec7e45fd9690be15dc5a2187~tplv-k3u1fbpfcp-watermark.image?" alt="1659026890254.jpg"></p><p>\u7136\u540E\u6211\u4EEC\u5728<strong>gulpfile.js</strong>\u5199\u4E0B\u6211\u4EEC\u7684copy\u4EFB\u52A1\uFF1A\u5C06src\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230dist\u6587\u4EF6\u5939\u4E0B</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { src, dest } = require(&quot;gulp&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const copy = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return src(&quot;src/*&quot;).pipe(dest(&quot;dist/&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.default = copy;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6267\u884Cgulp(\u9ED8\u8BA4\u6267\u884Cexports.default)\uFF0C\u6211\u4EEC\u5C31\u4F1A\u53D1\u73B0\u6839\u76EE\u5F55\u4E0B\u591A\u4E86\u4E2Adist\u6587\u4EF6\u5939</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d2b95ad250947ea9ecb8e5e7c5a1088~tplv-k3u1fbpfcp-watermark.image?" alt="1659027082559.jpg"></p><h3 id="\u5904\u7406less\u6587\u4EF6" tabindex="-1">\u5904\u7406less\u6587\u4EF6 <a class="header-anchor" href="#\u5904\u7406less\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u4E0B\u9762\u6211\u4EEC\u5199\u4E2A\u5904\u7406less\u6587\u4EF6\u7684\u4EFB\u52A1\uFF0C\u9996\u5148\u6211\u4EEC\u5148\u5B89\u88C5<strong>gulp-less</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -D gulp-less</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>\u7136\u540E\u6211\u4EEC\u5728src\u4E0B\u65B0\u5EFA\u4E00\u4E2Astyle/index.less\u5E76\u5199\u4E0B\u4E00\u6BB5less\u8BED\u6CD5\u6837\u5F0F
</code></pre><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@color: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: @color;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E<strong>gulpfile.js</strong>\u5199\u4E0B\u6211\u4EEC\u7684lessTask\uFF1A\u5C06\u6211\u4EECstyle\u4E0B\u7684less\u6587\u4EF6\u89E3\u6790\u6210css\u5E76\u5199\u5165dist/style\u4E2D</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { src, dest } = require(&quot;gulp&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const less = require(&quot;gulp-less&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const lessTask = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return src(&quot;src/style/*.less&quot;).pipe(less()).pipe(dest(&quot;dist/style&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.default = lessTask;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u6267\u884Cgulp\u547D\u4EE4\u5C31\u4F1A\u53D1\u73B0dist/style/index.css</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrap {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7ED9css\u52A0\u524D\u7F00</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install gulp-autoprefixe -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C06\u6211\u4EEC\u7684src/style/index.less\u6539\u4E3A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@color: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: @color;</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u5728<strong>gulpfile.js</strong>\u4E2D\u4F7F\u7528gulp-autoprefixe</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { src, dest } = require(&quot;gulp&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const less = require(&quot;gulp-less&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const autoprefixer = require(&quot;gulp-autoprefixer&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const lessTask = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return src(&quot;src/style/*.less&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(less())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(</span></span>
<span class="line"><span style="color:#A6ACCD;">      autoprefixer({</span></span>
<span class="line"><span style="color:#A6ACCD;">        overrideBrowserslist: [&quot;&gt; 1%&quot;, &quot;last 2 versions&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        cascade: false, //  \u662F\u5426\u7F8E\u5316\u5C5E\u6027\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(dest(&quot;dist/style&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.default = lessTask;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5904\u7406\u540E\u7684dist/style/index.css\u5C31\u53D8\u6210\u4E86</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrap {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: -webkit-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: -ms-flexbox;</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u76D1\u542C\u6587\u4EF6\u66F4\u6539browser-sync" tabindex="-1">\u76D1\u542C\u6587\u4EF6\u66F4\u6539browser-sync <a class="header-anchor" href="#\u76D1\u542C\u6587\u4EF6\u66F4\u6539browser-sync" aria-hidden="true">#</a></h2><p><strong>browser-sync</strong>\u662F\u4E00\u4E2A\u5341\u5206\u597D\u7528\u7684\u6D4F\u89C8\u5668\u540C\u6B65\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u5B83\u53EF\u4EE5\u642D\u5EFA\u9759\u6001\u670D\u52A1\u5668\uFF0C\u76D1\u542C\u6587\u4EF6\u66F4\u6539\uFF0C\u5E76\u5237\u65B0\u9875\u9762\uFF08HMR\uFF09,\u4E0B\u9762\u6765\u770B\u4E0B\u5B83\u7684\u4F7F\u7528</p><p>\u9996\u5148\u80AF\u5B9A\u8981\u5148\u5B89\u88C5</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i browser-sync -D </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAindex.html</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        hello world</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u5728<strong>gulpfile.js</strong>\u4E2D\u8FDB\u884C\u914D\u7F6E</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const browserSync = require(&quot;browser-sync&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const browserTask = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  browserSync.init({</span></span>
<span class="line"><span style="color:#A6ACCD;">    server: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      baseDir: &quot;./&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.default = browserTask;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u65F6\u5019\u5C31\u4F1A\u542F\u52A8\u4E00\u4E2A\u9ED8\u8BA43000\u7AEF\u53E3\u7684\u9875\u9762. \u4E0B\u9762\u6211\u4EEC\u770B\u5982\u4F55\u76D1\u542C\u9875\u9762\u53D8\u5316\u3002</p><p>\u9996\u5148\u6211\u4EEC\u8981\u76D1\u542C\u6587\u4EF6\u7684\u6539\u53D8\uFF0C\u53EF\u4EE5\u4F7F\u7528browserSync\u7684watch,\u76D1\u542C\u5230\u6587\u4EF6\u6539\u53D8\u540E\u518D\u5237\u65B0\u9875\u9762</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { watch } = require(&quot;browser-sync&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const browserSync = require(&quot;browser-sync&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const { series } = require(&quot;gulp&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const reloadTask = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  browserSync.reload();</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const browserTask = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  browserSync.init({</span></span>
<span class="line"><span style="color:#A6ACCD;">    server: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      baseDir: &quot;./&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch(&quot;\u3002/*&quot;, series(reloadTask));</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.default = browserTask;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u6539\u52A8src\u4E0B\u7684\u6587\u4EF6\u6D4F\u89C8\u5668\u4FBF\u4F1A\u5237\u65B0\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u5C06index.html\u5F15\u5165dist/style/index.css\u7684\u6837\u5F0F,\u7136\u540E\u6765\u6A21\u62DF\u4E00\u4E2A\u7B80\u5355\u7684\u6784\u5EFA\u6D41</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;../dist/style/index.css&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;wrap&quot;&gt;hello world&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u6211\u4EEC\u7684\u6D41\u7A0B\u662F <strong>\u7F16\u8BD1less\u6587\u4EF6</strong>-&gt;<strong>\u5C06css\u5199\u5165dist/style</strong>-&gt;<strong>\u89E6\u53D1\u9875\u9762\u66F4\u65B0</strong></p><p>\u6211\u4EEC<strong>gulpfile.js</strong>\u53EF\u4EE5\u8FD9\u6837\u5199</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { src, dest } = require(&quot;gulp&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const { watch } = require(&quot;browser-sync&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const browserSync = require(&quot;browser-sync&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const { series } = require(&quot;gulp&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const less = require(&quot;gulp-less&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const autoprefixer = require(&quot;gulp-autoprefixer&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const lessTask = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return src(&quot;src/style/*.less&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(less())</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(</span></span>
<span class="line"><span style="color:#A6ACCD;">      autoprefixer({</span></span>
<span class="line"><span style="color:#A6ACCD;">        overrideBrowserslist: [&quot;&gt; 1%&quot;, &quot;last 2 versions&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        cascade: false, //  \u662F\u5426\u7F8E\u5316\u5C5E\u6027\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    .pipe(dest(&quot;dist/style&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u9875\u9762\u5237\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">const reloadTask = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  browserSync.reload();</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const browserTask = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  browserSync.init({</span></span>
<span class="line"><span style="color:#A6ACCD;">    server: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      baseDir: &quot;./&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch(&quot;./*.html&quot;, series(reloadTask));</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u76D1\u542C\u6837\u5F0F\u66F4\u65B0\u89E6\u53D1\u4E24\u4E2A\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch(&quot;src/style/*&quot;, series(lessTask, reloadTask));</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.default = browserTask;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u65E0\u8BBA\u6211\u4EEC\u66F4\u6539\u7684\u662F\u6837\u5F0F\u8FD8\u662Fhtml\u90FD\u53EF\u4EE5\u89E6\u53D1\u9875\u9762\u66F4\u65B0\u3002</p><h2 id="\u6700\u540E" tabindex="-1">\u6700\u540E <a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a></h2><p>\u540E\u9762\u6211\u4F1A\u5C06\u6B63\u5728\u5F00\u53D1\u7684vue3\u7EC4\u4EF6\u5E93\u7684\u6837\u5F0F\u6253\u5305\u90E8\u5206\u4F7F\u7528gulp\u5904\u7406\uFF0C\u5982\u679C\u4F60\u5BF9\u7EC4\u4EF6\u5E93\u5F00\u53D1\u611F\u5174\u8DA3\u7684\u8BDD\u53EF\u4EE5\u5173\u6CE8<a href="https://juejin.cn/column/7118932817119019015" title="https://juejin.cn/column/7118932817119019015" target="_blank" rel="noopener noreferrer">Vite+TypeScript\u4ECE\u96F6\u642D\u5EFAVue3\u7EC4\u4EF6\u5E93 - \u4E1C\u65B9\u5C0F\u6708\u7684\u4E13\u680F - \u6398\u91D1 (juejin.cn)</a>\uFF0C\u540E\u7EED\u4F1A\u5B9E\u73B0\u4E00\u4E9B\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5E76\u4EE5\u6587\u7AE0\u5F62\u5F0F\u5448\u73B0\u3002</p><blockquote><p>\u521B\u4F5C\u4E0D\u6613\uFF0C\u4F60\u7684\u70B9\u8D5E\u5C31\u662F\u6211\u7684\u52A8\u529B\uFF01\u5982\u679C\u611F\u89C9\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4F60\u6709\u5E2E\u52A9\u7684\u8BDD\u5C31\u8BF7\u70B9\u4E2A\u8D5E\u5427\uFF0C\u611F\u8C22~</p></blockquote><p>\u6211\u6B63\u5728\u53C2\u4E0E\u6398\u91D1\u6280\u672F\u793E\u533A\u521B\u4F5C\u8005\u7B7E\u7EA6\u8BA1\u5212\u62DB\u52DF\u6D3B\u52A8\uFF0C<a href="https://juejin.cn/post/7112770927082864653" title="https://juejin.cn/post/7112770927082864653" target="_blank" rel="noopener noreferrer">\u70B9\u51FB\u94FE\u63A5\u62A5\u540D\u6295\u7A3F</a>\u3002</p>`,74),o=[e];function t(c,r,i,C,A,y){return a(),n("div",null,o)}var D=s(p,[["render",t]]);export{d as __pageData,D as default};
