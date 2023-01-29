import{_ as s,c as n,o as a,a as p}from"./app.b733c43a.js";const D=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u6302\u8F7D","slug":"\u6302\u8F7D"},{"level":3,"title":"Vuex","slug":"vuex"},{"level":3,"title":"Pinia","slug":"pinia"},{"level":2,"title":"\u4FEE\u6539\u72B6\u6001","slug":"\u4FEE\u6539\u72B6\u6001"},{"level":3,"title":"vuex","slug":"vuex-1"},{"level":3,"title":"Pinia","slug":"pinia-1"},{"level":2,"title":"Pinia\u89E3\u6784(storeToRefs)","slug":"pinia\u89E3\u6784-storetorefs"},{"level":2,"title":"getters","slug":"getters"},{"level":3,"title":"Pinia","slug":"pinia-2"},{"level":3,"title":"Vuex","slug":"vuex-2"},{"level":2,"title":"modules","slug":"modules"},{"level":3,"title":"Pinia","slug":"pinia-3"},{"level":3,"title":"Vuex","slug":"vuex-3"},{"level":2,"title":"\u5199\u5728\u6700\u540E","slug":"\u5199\u5728\u6700\u540E"}],"relativePath":"articles/pina\u548Cvuex.md"}'),l={name:"articles/pina\u548Cvuex.md"},e=p(`<p>Pinia\u548CVuex\u4E00\u6837\u90FD\u662F\u662Fvue\u7684\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u5668\u3002\u5176\u5B9EPinia\u5C31\u662FVuex5\uFF0C\u53EA\u4E0D\u8FC7\u4E3A\u4E86\u5C0A\u91CD\u539F\u4F5C\u8005\u7684\u8D21\u732E\u5C31\u6CBF\u7528\u4E86\u8FD9\u4E2A\u770B\u8D77\u6765\u5F88\u751C\u7684\u540D\u5B57Pinia\u3002</p><p>\u672C\u6587\u5C06\u901A\u8FC7Vue3\u7684\u5F62\u5F0F\u5BF9\u4E24\u8005\u7684\u4E0D\u540C\u5B9E\u73B0\u65B9\u5F0F\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u8BA9\u4F60\u5728\u4EE5\u540E\u5DE5\u4F5C\u4E2D\u65E0\u8BBA\u4F7F\u7528\u5230Pinia\u8FD8\u662FVuex\u7684\u65F6\u5019\u90FD\u80FD\u591F\u6E38\u5203\u6709\u4F59\u3002</p><p>\u65E2\u7136\u6211\u4EEC\u8981\u5BF9\u6BD4\u4E24\u8005\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u90A3\u4E48\u6211\u4EEC\u80AF\u5B9A\u8981\u5148\u5728\u6211\u4EEC\u7684Vue3\u9879\u76EE\u4E2D\u5F15\u5165\u8FD9\u4E24\u4E2A\u72B6\u6001\u7BA1\u7406\u5668\uFF08\u5B9E\u9645\u9879\u76EE\u4E2D\u5343\u4E07\u4E0D\u8981\u5373\u7528Vuex\u53C8\u7528Pinia\uFF0C\u4E0D\u7136\u4F60\u4F1A\u88AB\u540C\u4E8B\u8BF7\u53BB\u559D\u8336\u7684\u3002\u4E0B\u9762\u5C31\u8BA9\u6211\u4EEC\u770B\u4E0B\u5B83\u4EEC\u7684\u4F7F\u7528\u65B9\u5F0F\u5427</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><ul><li>Vuex</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i vuex -S</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Pinia</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i pinia -S</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6302\u8F7D" tabindex="-1">\u6302\u8F7D <a class="header-anchor" href="#\u6302\u8F7D" aria-hidden="true">#</a></h2><h3 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-hidden="true">#</a></h3><p>\u5728src\u76EE\u5F55\u4E0B\u65B0\u5EFAvuexStore,\u5B9E\u9645\u9879\u76EE\u4E2D\u4F60\u53EA\u9700\u8981\u5EFA\u4E00\u4E2Astore\u76EE\u5F55\u5373\u53EF\uFF0C\u7531\u4E8E\u6211\u4EEC\u9700\u8981\u4E24\u79CD\u72B6\u6001\u7BA1\u7406\u5668\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u5176\u5206\u5F00\u5E76\u521B\u5EFA\u4E24\u4E2Astore\u76EE\u5F55</p><p>\u65B0\u5EFAvuexStore/index.js</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5168\u5C40state\uFF0C\u7C7B\u4F3C\u4E8Evue\u79CD\u7684data</span></span>
<span class="line"><span style="color:#A6ACCD;">    state() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        vuexmsg: &quot;hello vuex&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &quot;xiaoyue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u4FEE\u6539state\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u63D0\u4EA4\u7684mutation\u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">    actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u7C7B\u4F3C\u4E8Evue\u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5C06store\u5206\u5272\u6210\u6A21\u5757\uFF08module\uFF09,\u5E94\u7528\u8F83\u5927\u65F6\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>main.js\u5F15\u5165</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import store from &#39;@/vuexStore&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">createApp(App).use(store).mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>App.vue\u6D4B\u8BD5</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.vuexmsg); //hello vuex</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9875\u9762\u6B63\u5E38\u6253\u5370hello vuex\u8BF4\u660E\u6211\u4EEC\u7684Vuex\u5DF2\u7ECF\u6302\u8F7D\u6210\u529F\u4E86</p><h3 id="pinia" tabindex="-1">Pinia <a class="header-anchor" href="#pinia" aria-hidden="true">#</a></h3><ul><li>main.js\u5F15\u5165</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &quot;./App.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {createPinia} from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const pinia = createPinia()</span></span>
<span class="line"><span style="color:#A6ACCD;">createApp(App).use(pinia).mount(&quot;#app&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u521B\u5EFAStore</li></ul><p>src\u4E0B\u65B0\u5EFApiniaStore/storeA.js</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      piniaMsg: &quot;hello pinia&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>App.vue\u4F7F\u7528</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.piniaMsg); //hello pinia</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4ECE\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u770B\u51FApinia\u4E2D\u6CA1\u6709\u4E86mutations\u548Cmodules\uFF0Cpinia\u4E0D\u5FC5\u4EE5\u5D4C\u5957\uFF08\u901A\u8FC7modules\u5F15\u5165\uFF09\u7684\u65B9\u5F0F\u5F15\u5165\u6A21\u5757\uFF0C\u56E0\u4E3A\u5B83\u7684\u6BCF\u4E2Astore\u4FBF\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u5982storeA\uFF0CstoreB... \u3002 \u5728\u6211\u4EEC\u4F7F\u7528Vuex\u7684\u65F6\u5019\u6BCF\u6B21\u4FEE\u6539state\u7684\u503C\u90FD\u9700\u8981\u8C03\u7528mutations\u91CC\u7684\u4FEE\u6539\u51FD\u6570\uFF08\u4E0B\u9762\u4F1A\u8BF4\u5230\uFF09\uFF0C\u56E0\u4E3AVuex\u9700\u8981\u8FFD\u8E2A\u6570\u636E\u7684\u53D8\u5316\uFF0C\u8FD9\u4F7F\u6211\u4EEC\u5199\u8D77\u6765\u6BD4\u8F83\u7E41\u7410\u3002\u800Cpinia\u5219\u4E0D\u518D\u9700\u8981mutations\uFF0C\u540C\u6B65\u5F02\u6B65\u90FD\u53EF\u5728actions\u8FDB\u884C\u64CD\u4F5C\uFF0C\u81F3\u4E8E\u5B83\u6CA1\u6709\u4E86mutations\u5177\u4F53\u662F\u5982\u4F55\u6700\u7EC8\u5230state\u53D8\u5316\u7684\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4E0D\u8FC7\u591A\u6DF1\u7A76,<s>\u5927\u6982\u597D\u50CF\u5E94\u8BE5\u662F\u901A\u8FC7hooks\u56DE\u8C03\u7684\u5F62\u5F0F\u89E3\u51B3\u7684\u628A\uFF08\u6211\u4E5F\u6CA1\u7814\u7A76\u8FC7\uFF0C\u778E\u731C\u7684</s>\u3002</p><h2 id="\u4FEE\u6539\u72B6\u6001" tabindex="-1">\u4FEE\u6539\u72B6\u6001 <a class="header-anchor" href="#\u4FEE\u6539\u72B6\u6001" aria-hidden="true">#</a></h2><p>\u83B7\u53D6state\u7684\u503C\u4ECE\u4E0A\u9762\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u4E00\u76EE\u4E86\u7136\u7684\u770B\u5230\u4E86\uFF0C\u4E0B\u9762\u8BA9\u6211\u4EEC\u770B\u770B\u4ED6\u4FE9\u4FEE\u6539state\u7684\u65B9\u6CD5\u5427</p><h3 id="vuex-1" tabindex="-1">vuex <a class="header-anchor" href="#vuex-1" aria-hidden="true">#</a></h3><p>vuex\u5728\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4FEE\u6539state\uFF0C\u5982App.vue</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{vuexStore.state.vuexmsg}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.state.vuexmsg = &#39;hello juejin&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.vuexmsg)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u770B\u51FA\u6211\u4EEC\u662F\u53EF\u4EE5\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u4FEE\u6539state\u7684\u800C\u4E14\u8FD8\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u4F46\u662F\u5982\u679C\u8FD9\u6837\u505A\u4E86\uFF0Cvuex\u4E0D\u80FD\u591F\u8BB0\u5F55\u6BCF\u4E00\u6B21state\u7684\u53D8\u5316\u8BB0\u5F55\uFF0C\u5F71\u54CD\u6211\u4EEC\u7684\u8C03\u8BD5\u3002\u5F53vuex\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u4FEE\u6539state\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u6240\u4EE5\u5B98\u65B9\u5EFA\u8BAE\u6211\u4EEC\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u6240\u6709\u7684state\u53D8\u66F4\u90FD\u5728vuex\u5185\u90E8\u8FDB\u884C\uFF0C\u5728mutations\u8FDB\u884C\u4FEE\u6539\u3002\u4F8B\u5982vuexStore/index.js:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  strict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u5168\u5C40state\uFF0C\u7C7B\u4F3C\u4E8Evue\u79CD\u7684data</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    vuexmsg: &quot;hello vuex&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u4FEE\u6539state\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setVuexMsg(state, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.vuexmsg = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u63D0\u4EA4\u7684mutation\u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u7C7B\u4F3C\u4E8Evue\u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u5C06store\u5206\u5272\u6210\u6A21\u5757\uFF08module\uFF09,\u5E94\u7528\u8F83\u5927\u65F6\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">  modules: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u6211\u4EEC\u9700\u8981\u4FEE\u6539vuexmsg\u7684\u65F6\u5019\u9700\u8981\u63D0\u4EA4setVuexMsg\u65B9\u6CD5\uFF0C\u5982App.vue</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ vuexStore.state.vuexmsg }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.commit(&#39;setVuexMsg&#39;, &#39;hello juejin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.vuexmsg) //hello juejin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6216\u8005\u6211\u4EEC\u53EF\u4EE5\u5728actions\u4E2D\u8FDB\u884C\u63D0\u4EA4mutations\u4FEE\u6539state:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  strict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u5168\u5C40state\uFF0C\u7C7B\u4F3C\u4E8Evue\u79CD\u7684data</span></span>
<span class="line"><span style="color:#A6ACCD;">  state() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      vuexmsg: &quot;hello vuex&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u4FEE\u6539state\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setVuexMsg(state, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.vuexmsg = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u63D0\u4EA4\u7684mutation\u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    async getState({ commit }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //const result = await xxxx \u5047\u8BBE\u8FD9\u91CC\u8FDB\u884C\u4E86\u8BF7\u6C42\u5E76\u62FF\u5230\u4E86\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">      commit(&quot;setVuexMsg&quot;, &quot;hello juejin&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7EC4\u4EF6\u4E2D\u4F7F\u7528dispatch\u8FDB\u884C\u5206\u53D1actions</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ vuexStore.state.vuexmsg }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.dispatch(&#39;getState&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E00\u822C\u6765\u8BF4\uFF0Cvuex\u4E2D\u7684\u6D41\u7A0B\u662F\u9996\u5148actions\u4E00\u822C\u653E\u5F02\u6B65\u51FD\u6570\uFF0C\u62FF\u8BF7\u6C42\u540E\u7AEF\u63A5\u53E3\u4E3A\u4F8B\uFF0C\u5F53\u540E\u7AEF\u63A5\u53E3\u8FD4\u56DE\u503C\u7684\u65F6\u5019\uFF0Cactions\u4E2D\u4F1A\u63D0\u4EA4\u4E00\u4E2Amutations\u4E2D\u7684\u51FD\u6570\uFF0C\u7136\u540E\u8FD9\u4E2A\u51FD\u6570\u5BF9vuex\u4E2D\u7684\u72B6\u6001\uFF08state\uFF09\u8FDB\u884C\u4E00\u4E2A\u4FEE\u6539\uFF0C\u7EC4\u4EF6\u4E2D\u518D\u6E32\u67D3\u8FD9\u4E2A\u72B6\u6001\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6574\u4E2A\u6570\u636E\u6D41\u7A0B\u90FD\u5728vuex\u5185\u90E8\u8FDB\u884C\u4FBF\u4E8E\u68C0\u6D4B\u3002\u76F4\u63A5\u770B\u56FE\uFF0C\u4E00\u76EE\u4E86\u7136</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27f85d7d22aa44e1a01cd6f4121afd86~tplv-k3u1fbpfcp-watermark.image?" alt="1f0c7f44205b2a793829d22509fac74.png"></p><h3 id="pinia-1" tabindex="-1">Pinia <a class="header-anchor" href="#pinia-1" aria-hidden="true">#</a></h3><ul><li>\u76F4\u63A5\u4FEE\u6539</li></ul><p>\u76F8\u6BD4\u4E8EVuex\uFF0CPinia\u662F\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u72B6\u6001\u7684\uFF0C\u5E76\u4E14\u8C03\u8BD5\u5DE5\u5177\u80FD\u591F\u8BB0\u5F55\u5230\u6BCF\u4E00\u6B21state\u7684\u53D8\u5316\uFF0C\u5982App.vue</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ piniaStoreA.piniaMsg }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.piniaMsg); //hello pinia</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.piniaMsg = &#39;hello juejin&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.piniaMsg); //hello juejin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>$patch</li></ul><p>\u4F7F\u7528$patch\u65B9\u6CD5\u53EF\u4EE5\u4FEE\u6539\u591A\u4E2Astate\u4E2D\u7684\u503C,\u6BD4\u5982\u6211\u4EEC\u5728piniaStore/storeA.js\u4E2D\u7684state\u589E\u52A0\u4E00\u4E2Aname</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      piniaMsg: &quot;hello pinia&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;xiaoyue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5728App.vue\u4E2D\u8FDB\u884C\u4FEE\u6539\u8FD9\u4E24\u4E2Astate</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.name); //xiaoyue</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.$patch({</span></span>
<span class="line"><span style="color:#A6ACCD;">  piniaMsg: &#39;hello juejin&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.name);//daming</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u7136\u4E5F\u662F\u652F\u6301\u4FEE\u6539\u5355\u4E2A\u72B6\u6001\u7684\u5982</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">piniaStoreA.$patch({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>$patch\u8FD8\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u7684\u65B9\u5F0F\u8FDB\u884C\u4FEE\u6539\u72B6\u6001</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">cartStore.$patch((state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state.name = &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  state.piniaMsg = &#39;hello juejin&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5728actions\u4E2D\u8FDB\u884C\u4FEE\u6539</li></ul><p>\u4E0D\u540C\u4E8EVuex\u7684\u662F\uFF0CPinia\u53BB\u6389\u4E86mutations\uFF0C\u6240\u4EE5\u5728actions\u4E2D\u4FEE\u6539state\u5C31\u884CVuex\u5728mutations\u4FEE\u6539state\u4E00\u6837\u3002\u5176\u5B9E\u8FD9\u4E5F\u662F\u6211\u6BD4\u8F83\u63A8\u8350\u7684\u4E00\u79CD\u4FEE\u6539\u72B6\u6001\u7684\u65B9\u5F0F\uFF0C\u5C31\u50CF\u4E0A\u9762\u8BF4\u7684\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5B9E\u73B0\u6574\u4E2A\u6570\u636E\u6D41\u7A0B\u90FD\u5728\u72B6\u6001\u7BA1\u7406\u5668\u5185\u90E8\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u3002</p><p>\u5728piniaStore/storeA.js\u7684actions\u6DFB\u52A0\u4E00\u4E2A\u4FEE\u6539name\u7684\u51FD\u6570</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      piniaMsg: &quot;hello pinia&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;xiao yue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setName(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.name = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7EC4\u4EF6App.vue\u4E2D\u8C03\u7528\u4E0D\u9700\u8981\u518D\u4F7F\u7528dispatch\u51FD\u6570\uFF0C\u76F4\u63A5\u8C03\u7528store\u7684\u65B9\u6CD5\u5373\u53EF</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.setName(&#39;daming&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u91CD\u7F6Estate</li></ul><p>Pinia\u53EF\u4EE5\u4F7F\u7528$reset\u5C06\u72B6\u6001\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.$reset()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="pinia\u89E3\u6784-storetorefs" tabindex="-1">Pinia\u89E3\u6784(storeToRefs) <a class="header-anchor" href="#pinia\u89E3\u6784-storetorefs" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u7EC4\u4EF6\u4E2D\u9700\u8981\u7528\u5230state\u4E2D\u591A\u4E2A\u53C2\u6570\u65F6\uFF0C\u4F7F\u7528\u89E3\u6784\u7684\u65B9\u5F0F\u53D6\u503C\u5F80\u5F80\u662F\u5F88\u65B9\u4FBF\u7684\uFF0C\u4F46\u662F\u4F20\u7EDF\u7684ES6\u89E3\u6784\u4F1A\u4F7Fstate\u5931\u53BB\u54CD\u5E94\u5F0F\uFF0C\u6BD4\u5982\u7EC4\u4EF6App.vue,\u6211\u4EEC\u5148\u89E3\u6784\u53D6\u5F97name\u503C\uFF0C\u7136\u540E\u518D\u53BB\u6539\u53D8name\u503C\uFF0C\u7136\u540E\u770B\u9875\u9762\u662F\u5426\u53D8\u5316</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">let { piniaMsg, name } = piniaStoreA</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.$patch({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6D4F\u89C8\u5668\u5C55\u793A\u5982\u4E0B</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e93cdd9d0c7c44a1b8724560bc91a40a~tplv-k3u1fbpfcp-watermark.image?" alt="1657813193335.jpg"></p><p>\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u6D4F\u89C8\u5668\u5E76\u6CA1\u6709\u66F4\u65B0\u9875\u9762\u4E3Adaming</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CPinia\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7ED3\u6784\u65B9\u6CD5<strong>storeToRefs</strong>\uFF0C\u6211\u4EEC\u5C06\u7EC4\u4EF6App.vue\u4F7F\u7528<strong>storeToRefs</strong>\u89E3\u6784</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeToRefs } from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">let { piniaMsg, name } = storeToRefs(piniaStoreA)</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.$patch({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u518D\u770B\u4E0B\u9875\u9762\u53D8\u5316</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74379adc42c04fa0b9c4379abeda444b~tplv-k3u1fbpfcp-watermark.image?" alt="1657813178903.jpg"></p><p>\u6211\u4EEC\u53D1\u73B0\u9875\u9762\u5DF2\u7ECF\u88AB\u66F4\u65B0\u6210daming\u4E86</p><h2 id="getters" tabindex="-1">getters <a class="header-anchor" href="#getters" aria-hidden="true">#</a></h2><p>\u5176\u5B9EVuex\u4E2D\u7684getters\u548CPinia\u4E2D\u7684getters\u7528\u6CD5\u662F\u4E00\u81F4\u7684\uFF0C\u7528\u4E8E\u81EA\u52A8\u76D1\u542C\u5BF9\u5E94state\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u52A8\u6001\u8BA1\u7B97\u8FD4\u56DE\u503C(\u548Cvue\u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027\u5DEE\u4E0D\u591A),\u5E76\u4E14getters\u7684\u503C\u4E5F\u5177\u6709\u7F13\u5B58\u7279\u6027</p><h3 id="pinia-2" tabindex="-1">Pinia <a class="header-anchor" href="#pinia-2" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u5148\u5C06piniaStore/storeA.js\u6539\u4E3A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      count1: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      count2: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;\u6211\u88AB\u8C03\u7528\u4E86!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.count1 + this.count2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u5728\u7EC4\u4EF6App.vue\u4E2D\u83B7\u53D6sum</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ piniaStoreA.sum }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum) //3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BA9\u6211\u4EEC\u6765\u770B\u4E0B\u4EC0\u4E48\u662F\u7F13\u5B58\u7279\u6027\u3002\u9996\u5148\u6211\u4EEC\u5728\u7EC4\u4EF6\u591A\u6B21\u8BBF\u95EEsum\u518D\u770B\u4E0B\u63A7\u5236\u53F0\u6253\u5370</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum)</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.count1 = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a444da11d25342f693333c8e47e94f98~tplv-k3u1fbpfcp-watermark.image?" alt="1657814372565.jpg"></p><p>\u4ECE\u6253\u5370\u7ED3\u679C\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\u53EA\u6709\u5728\u9996\u6B21\u4F7F\u7528\u7528\u6216\u8005\u5F53\u6211\u4EEC\u6539\u53D8sum\u6240\u4F9D\u8D56\u7684\u503C\u7684\u65F6\u5019\uFF0Cgetters\u4E2D\u7684sum\u624D\u4F1A\u88AB\u8C03\u7528</p><h3 id="vuex-2" tabindex="-1">Vuex <a class="header-anchor" href="#vuex-2" aria-hidden="true">#</a></h3><p>Vuex\u4E2D\u7684getters\u4F7F\u7528\u548CPinia\u7684\u4F7F\u7528\u65B9\u5F0F\u7C7B\u4F3C\uFF0C\u5C31\u4E0D\u518D\u8FDB\u884C\u8FC7\u591A\u8BF4\u660E,\u5199\u6CD5\u5982\u4E0BvuexStore/index.js</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  strict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u5168\u5C40state\uFF0C\u7C7B\u4F3C\u4E8Evue\u79CD\u7684data</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count1: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    count2: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u7C7B\u4F3C\u4E8Evue\u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum(state){</span></span>
<span class="line"><span style="color:#A6ACCD;">      return state.count1 + state.count2</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="modules" tabindex="-1">modules <a class="header-anchor" href="#modules" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9879\u76EE\u6BD4\u8F83\u5927\uFF0C\u4F7F\u7528\u5355\u4E00\u72B6\u6001\u5E93\uFF0C\u9879\u76EE\u7684\u72B6\u6001\u5E93\u5C31\u4F1A\u96C6\u4E2D\u5230\u4E00\u4E2A\u5927\u5BF9\u8C61\u4E0A\uFF0C\u663E\u5F97\u5341\u5206\u81C3\u80BF\u96BE\u4EE5\u7EF4\u62A4\u3002\u6240\u4EE5Vuex\u5C31\u5141\u8BB8\u6211\u4EEC\u5C06\u5176\u5206\u5272\u6210\u6A21\u5757\uFF08modules\uFF09\uFF0C\u6BCF\u4E2A\u6A21\u5757\u90FD\u62E5\u6709\u81EA\u5DF1state\uFF0Cmutations,actions...\u3002\u800CPinia\u6BCF\u4E2A\u72B6\u6001\u5E93\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u6A21\u5757\u3002</p><h3 id="pinia-3" tabindex="-1">Pinia <a class="header-anchor" href="#pinia-3" aria-hidden="true">#</a></h3><p>Pinia\u6CA1\u6709modules\uFF0C\u5982\u679C\u60F3\u4F7F\u7528\u591A\u4E2Astore\uFF0C\u76F4\u63A5\u5B9A\u4E49\u591A\u4E2Astore\u4F20\u5165\u4E0D\u540C\u7684id\u5373\u53EF\uFF0C\u5982\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {...});</span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeB = defineStore(&quot;storeB&quot;, {...});</span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeC = defineStore(&quot;storeB&quot;, {...});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="vuex-3" tabindex="-1">Vuex <a class="header-anchor" href="#vuex-3" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u6765\u8BF4\u6BCF\u4E2Amodule\u90FD\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\uFF0C\u7136\u540E\u518D\u5F15\u5165\u8FD9\u4E2A\u603B\u7684\u5165\u53E3index.js\u4E2D\uFF0C\u8FD9\u91CC\u4E3A\u4E86\u65B9\u4FBF\u5C31\u5199\u5728\u4E86\u4E00\u8D77</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const moduleA = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; ({ </span></span>
<span class="line"><span style="color:#A6ACCD;">    count:1</span></span>
<span class="line"><span style="color:#A6ACCD;">   }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setCount(state, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.count = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getuser() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //do something</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const moduleB = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; ({ ... }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: { ... },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  strict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u5168\u5C40state\uFF0C\u7C7B\u4F3C\u4E8Evue\u79CD\u7684data</span></span>
<span class="line"><span style="color:#A6ACCD;">  state() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      vuexmsg: &quot;hello vuex&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;xiaoyue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    moduleA,</span></span>
<span class="line"><span style="color:#A6ACCD;">    moduleB</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528moduleA</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.moduleA.count) //1</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.commit(&#39;setCount&#39;, 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.moduleA.count) //2</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.dispatch(&#39;getuser&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E00\u822C\u6211\u4EEC\u4E3A\u4E86\u9632\u6B62\u63D0\u4EA4\u4E00\u4E9Bmutation\u6216\u8005actions\u4E2D\u7684\u65B9\u6CD5\u91CD\u540D\uFF0Cmodules\u4E00\u822C\u4F1A\u91C7\u7528\u547D\u540D\u7A7A\u95F4\u7684\u65B9\u5F0F <strong>namespaced: true</strong> \u5982moduleA\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const moduleA = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">    count: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setCount(state, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.count = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getuser() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //do something</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u5982\u679C\u6211\u4EEC\u518D\u8C03\u7528setCount\u6216\u8005getuser</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vuexStore.commit(&#39;moduleA/setCount&#39;, 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.dispatch(&#39;moduleA/getuser&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1">\u5199\u5728\u6700\u540E <a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4EE5\u4E0A\u6848\u4F8B\u6211\u4EEC\u4F1A\u53D1\u73B0Pinia\u6BD4Vuex\u7B80\u6D01\u8BB8\u591A\uFF0C\u6240\u4EE5\u5982\u679C\u6211\u4EEC\u7684\u9879\u76EE\u662F\u65B0\u9879\u76EE\u7684\u8BDD\u5EFA\u8BAE\u4F7F\u7528Pinia\u3002 \u5F53\u7136\u5982\u679C\u6211\u4EEC\u7684\u9879\u76EE\u4F53\u91CF\u4E0D\u662F\u5F88\u5927\uFF0C\u6211\u4EEC\u5176\u5B9E\u6CA1\u5FC5\u8981\u5F15\u5165vue\u7684\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u76F2\u76EE\u7684\u4F7F\u7528\u53CD\u800C\u4F1A\u5F92\u589E\u5FC3\u667A\u8D1F\u62C5\u3002</p><p>\u5982\u679C\u611F\u89C9\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4F60\u6709\u5E2E\u52A9\u7684\u8BDD\u8BF7\u70B9\u4E2A\u8D5E\u5427orz\u3002</p><p>\u6211\u6B63\u5728\u53C2\u4E0E\u6398\u91D1\u6280\u672F\u793E\u533A\u521B\u4F5C\u8005\u7B7E\u7EA6\u8BA1\u5212\u62DB\u52DF\u6D3B\u52A8\uFF0C<a href="https://juejin.cn/post/7112770927082864653" title="https://juejin.cn/post/7112770927082864653" target="_blank" rel="noopener noreferrer">\u70B9\u51FB\u94FE\u63A5\u62A5\u540D\u6295\u7A3F</a>\u3002</p>`,107),o=[e];function t(c,i,r,A,C,y){return a(),n("div",null,o)}var d=s(l,[["render",t]]);export{D as __pageData,d as default};
