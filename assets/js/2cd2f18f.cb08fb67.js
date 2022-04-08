"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7570],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=c(r),d=o,f=y["".concat(u,".").concat(d)]||y[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},46321:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={},u="Deploy Airbyte",c={unversionedId:"quickstart/deploy-airbyte",id:"quickstart/deploy-airbyte",title:"Deploy Airbyte",description:"Deploying Airbyte Open-Source just takes two steps.",source:"@site/../docs/quickstart/deploy-airbyte.md",sourceDirName:"quickstart",slug:"/quickstart/deploy-airbyte",permalink:"/airbyte/quickstart/deploy-airbyte",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/quickstart/deploy-airbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Managing Airbyte Cloud",permalink:"/airbyte/cloud/managing-airbyte-cloud"},next:{title:"Add a Source",permalink:"/airbyte/quickstart/add-a-source"}},s={},p=[{value:"FAQ",id:"faq",level:2}],y={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-airbyte"},"Deploy Airbyte"),(0,a.kt)("p",null,"Deploying Airbyte Open-Source just takes two steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install Docker on your workstation ","(","see ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"instructions"),")",". Make sure you're on the latest version of ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose"),"."),(0,a.kt)("li",{parentName:"ol"},"Run the following commands in your terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,a.kt)("p",null,"Once you see an Airbyte banner, the UI is ready to go at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"),"!"),(0,a.kt)("p",null,"Alternatively, if you have an Airbyte Cloud invite, just follow ",(0,a.kt)("a",{parentName:"p",href:"/airbyte/deploying-airbyte/on-cloud"},"these steps.")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"If you have any questions about the Airbyte Open-Source setup and deployment process, head over to our ",(0,a.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/c/faq/15"},"Getting Started FAQ")," on our Discourse that answers the following questions and more:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How long does it take to set up Airbyte?"),(0,a.kt)("li",{parentName:"ul"},"Where can I see my data once I've run a sync?"),(0,a.kt)("li",{parentName:"ul"},"Can I set a start time for my sync?")),(0,a.kt)("p",null,"If there are any questions that we couldn't answer here, we'd love to help you get started. ",(0,a.kt)("a",{parentName:"p",href:"https://airbytehq.slack.com/ssb/redirect"},"Join our Slack")," and feel free to ask your questions in the ","#","getting-started channel."))}d.isMDXComponent=!0}}]);