(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(118)),i={title:"Contributing to Ichnion",sidebar_label:"Contributing"},c={unversionedId:"developer/contribute",id:"developer/contribute",isDocsHomePage:!1,title:"Contributing to Ichnion",description:"We want to make contributing to our projects as approachable and transparent as",source:"@site/docs/developer/contribute.md",slug:"/developer/contribute",permalink:"/website/docs/developer/contribute",editUrl:"https://github.com/ichnion/website/edit/main/docs/developer/contribute.md",version:"current",lastUpdatedBy:"chansuke",lastUpdatedAt:1616576393,sidebar_label:"Contributing",sidebar:"docs",previous:{title:"Developer Guide",permalink:"/website/docs/developer"},next:{title:"Markdown",permalink:"/website/docs/developer/markdown"}},l=[{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"Our Development Process",id:"our-development-process",children:[]},{value:"Pull Requests",id:"pull-requests",children:[]},{value:"Developer Certificate of Origin (DCO)",id:"developer-certificate-of-origin-dco",children:[]},{value:"Issues",id:"issues",children:[]},{value:"Coding Style",id:"coding-style",children:[]},{value:"License",id:"license",children:[]},{value:"References",id:"references",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"We want to make contributing to our projects as approachable and transparent as\npossible."),Object(a.a)("h2",{id:"code-of-conduct"},"Code of Conduct"),Object(a.a)("p",null,"The Ichnion Project has adopted a Code of Conduct that we expect project\nparticipants to adhere to. Please ",Object(a.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ichnion/.github/blob/master/CODE_OF_CONDUCT.md"}),"read the full text"),"\nso that you can understand what actions will and will not be tolerated."),Object(a.a)("h2",{id:"our-development-process"},"Our Development Process"),Object(a.a)("p",null,"We use GitHub to sync code to and from our internal repository. We'll use GitHub\nto track issues and feature requests, as well as accept pull requests."),Object(a.a)("h2",{id:"pull-requests"},"Pull Requests"),Object(a.a)("p",null,"We actively welcome your pull requests."),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},"Fork the repo and create your branch from the development branch."),Object(a.a)("li",{parentName:"ol"},"If you've added code that should be tested, add tests."),Object(a.a)("li",{parentName:"ol"},"If you've changed APIs, update the documentation."),Object(a.a)("li",{parentName:"ol"},"Ensure the test suite passes."),Object(a.a)("li",{parentName:"ol"},"Make sure your code lints."),Object(a.a)("li",{parentName:"ol"},"\u201csign off\u201d your commits to indicate that you agree to the terms of the DCO.")),Object(a.a)("h2",{id:"developer-certificate-of-origin-dco"},"Developer Certificate of Origin (DCO)"),Object(a.a)("p",null,"For some projects, before we can include your contribution, you need to\ngive us your permission. To indicate that you agree to the terms of the DCO,\nyou \u201csign off\u201d your contribution by adding a line with your name and e-mail\naddress to every Git commit message:"),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{}),"git commit --signoff\n")),Object(a.a)("p",null,"In Sourcetree you can signoff commits automatically by selecting thes sign-off menu\nin the commit dialog."),Object(a.a)("p",null,Object(a.a)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/914122/74705003-b88a7180-5255-11ea-939a-d9b729947865.png",alt:"DCO"}))),Object(a.a)("h2",{id:"issues"},"Issues"),Object(a.a)("p",null,"We use GitHub issues to track public bugs. Please ensure your description is\nclear and has sufficient instructions to be able to reproduce the issue.\nIf possible please provide a minimal demo of the problem."),Object(a.a)("h2",{id:"coding-style"},"Coding Style"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"2 spaces for indentation rather than tabs"),Object(a.a)("li",{parentName:"ul"},"80 character line length"),Object(a.a)("li",{parentName:"ul"},"Run ",Object(a.a)("inlineCode",{parentName:"li"},"npm run lint")," to conform to our lint rules")),Object(a.a)("h2",{id:"license"},"License"),Object(a.a)("p",null,"By contributing to one of our projects, you agree that your contributions will be licensed\nunder the license indicated in the repositories ",Object(a.a)("inlineCode",{parentName:"p"},"LICENSE")," file."),Object(a.a)("h2",{id:"references"},"References"),Object(a.a)("p",null,"This document was adapted from the open-source contribution guidelines for\n",Object(a.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/5dd99d327066f5f0b30b95ab95770822cff1ac65/CONTRIBUTING.md"}),"Facebook's Draft")))}u.isMDXComponent=!0}}]);