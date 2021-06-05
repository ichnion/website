(self.webpackChunkichnion_website=self.webpackChunkichnion_website||[]).push([[692],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3027:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"Contributing to Ichnion",sidebar_label:"Contributing"},l={unversionedId:"developer/contribute",id:"developer/contribute",isDocsHomePage:!1,title:"Contributing to Ichnion",description:"We want to make contributing to our projects as approachable and transparent as",source:"@site/docs/developer/contribute.md",sourceDirName:"developer",slug:"/developer/contribute",permalink:"/website/docs/developer/contribute",editUrl:"https://github.com/ichnion/website/edit/main/docs/developer/contribute.md",version:"current",lastUpdatedBy:"Daniel Kastl",lastUpdatedAt:1622896744,formattedLastUpdatedAt:"6/5/2021",sidebar_label:"Contributing",frontMatter:{title:"Contributing to Ichnion",sidebar_label:"Contributing"},sidebar:"docs",previous:{title:"Common errors while developing",permalink:"/website/docs/developer/errors/index"},next:{title:"Markdown",permalink:"/website/docs/developer/markdown"}},c=[{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"Our Development Process",id:"our-development-process",children:[]},{value:"Pull Requests",id:"pull-requests",children:[]},{value:"Developer Certificate of Origin (DCO)",id:"developer-certificate-of-origin-dco",children:[]},{value:"Issues",id:"issues",children:[]},{value:"Coding Style",id:"coding-style",children:[]},{value:"License",id:"license",children:[]},{value:"References",id:"references",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We want to make contributing to our projects as approachable and transparent as\npossible."),(0,i.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,i.kt)("p",null,"The Ichnion Project has adopted a Code of Conduct that we expect project\nparticipants to adhere to. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ichnion/.github/blob/main/CODE_OF_CONDUCT.md"},"read the full text"),"\nso that you can understand what actions will and will not be tolerated."),(0,i.kt)("h2",{id:"our-development-process"},"Our Development Process"),(0,i.kt)("p",null,"We use GitHub to sync code to and from our internal repository. We'll use GitHub\nto track issues and feature requests, as well as accept pull requests."),(0,i.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,i.kt)("p",null,"We actively welcome your pull requests."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fork the repo and create your branch from the development branch."),(0,i.kt)("li",{parentName:"ol"},"If you've added code that should be tested, add tests."),(0,i.kt)("li",{parentName:"ol"},"If you've changed APIs, update the documentation."),(0,i.kt)("li",{parentName:"ol"},"Ensure the test suite passes."),(0,i.kt)("li",{parentName:"ol"},"Make sure your code lints."),(0,i.kt)("li",{parentName:"ol"},"\u201csign off\u201d your commits to indicate that you agree to the terms of the DCO.")),(0,i.kt)("h2",{id:"developer-certificate-of-origin-dco"},"Developer Certificate of Origin (DCO)"),(0,i.kt)("p",null,"For some projects, before we can include your contribution, you need to\ngive us your permission. To indicate that you agree to the terms of the DCO,\nyou \u201csign off\u201d your contribution by adding a line with your name and e-mail\naddress to every Git commit message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git commit --signoff\n")),(0,i.kt)("p",null,"In Sourcetree you can signoff commits automatically by selecting thes sign-off menu\nin the commit dialog."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/914122/74705003-b88a7180-5255-11ea-939a-d9b729947865.png",alt:"DCO"})),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"We use GitHub issues to track public bugs. Please ensure your description is\nclear and has sufficient instructions to be able to reproduce the issue.\nIf possible please provide a minimal demo of the problem."),(0,i.kt)("h2",{id:"coding-style"},"Coding Style"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2 spaces for indentation rather than tabs"),(0,i.kt)("li",{parentName:"ul"},"80 character line length"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run lint")," to conform to our lint rules")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"By contributing to one of our projects, you agree that your contributions will be licensed\nunder the license indicated in the repositories ",(0,i.kt)("inlineCode",{parentName:"p"},"LICENSE")," file."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"This document was adapted from the open-source contribution guidelines for\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/blob/5dd99d327066f5f0b30b95ab95770822cff1ac65/CONTRIBUTING.md"},"Facebook's Draft")))}u.isMDXComponent=!0}}]);