(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),o=(n(0),n(236)),i={id:"fbcode",title:"Hydra at fbcode"},c={unversionedId:"fb/fbcode",id:"fb/fbcode",isDocsHomePage:!1,title:"Hydra at fbcode",description:"Differences in fbcode",source:"@site/docs/fb/fbcode.md",slug:"/fb/fbcode",permalink:"/docs/next/fb/fbcode",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/fb/fbcode.md",version:"current",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1602608968},l=[{value:"Differences in fbcode",id:"differences-in-fbcode",children:[{value:"Open source plugins",id:"open-source-plugins",children:[]},{value:"Facebook specified plugins",id:"facebook-specified-plugins",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"differences-in-fbcode"},"Differences in fbcode"),Object(o.b)("h3",{id:"open-source-plugins"},"Open source plugins"),Object(o.b)("h4",{id:"supported"},"Supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"hydra_ax_sweeper"),Object(o.b)("li",{parentName:"ul"},"hydra_colorlog"),Object(o.b)("li",{parentName:"ul"},"hydra_nevergrad_sweeper")),Object(o.b)("h4",{id:"unsupported"},"Unsupported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"joblib launcher: Joblib's Loki backend does not work correctly when executed from a par file.")),Object(o.b)("h3",{id:"facebook-specified-plugins"},"Facebook specified plugins"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"fbcode_defaults : Changes configuration defaults to be appropriate for fbcode (e.g: Output directories are in ",Object(o.b)("inlineCode",{parentName:"li"},"fbcode/outputs")," and ",Object(o.b)("inlineCode",{parentName:"li"},"fbcode/multirun"),")")),Object(o.b)("h4",{id:"targets"},"TARGETS"),Object(o.b)("p",null,"Hydra includes buck TARGETS you can use in fbcode. In general, if there is TARGET there are two options:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You can depend on the TARGETS to use Hydra or a plugin."),Object(o.b)("li",{parentName:"ol"},"The TARGETS contains a runnable example.")),Object(o.b)("p",null,"targets are under ",Object(o.b)("inlineCode",{parentName:"p"},"github/facebookresearch/hydra_1.0"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":hydra")," : Primary target to use in most cases. Includes ",Object(o.b)("inlineCode",{parentName:"li"},"hydra_oss")," and the ",Object(o.b)("inlineCode",{parentName:"li"},"fbcode_defaults"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":hydra_oss")," : Vanilla Hydra without any Facebook specific targets."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"plugins/..."),": Plugins that has TARGETS file are runnable in fbcode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"examples/..."),": Examples that has a TARGETS file are runnable in ",Object(o.b)("inlineCode",{parentName:"li"},"fbcode"),".")))}u.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,f=p["".concat(i,".").concat(s)]||p[s]||d[s]||o;return n?a.a.createElement(f,c(c({ref:t},b),{},{components:n})):a.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);