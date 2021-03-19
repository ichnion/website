(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{118:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),u=function(e){var a=n.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return t?n.a.createElement(d,c(c({ref:a},p),{},{components:t})):n.a.createElement(d,c({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},76:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return u}));var r=t(3),n=t(7),o=(t(0),t(118)),i={title:"Overview",slug:"/"},c={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Excavator",source:"@site/docs/overview.md",slug:"/",permalink:"/website/docs/",editUrl:"https://github.com/ichnion/website/edit/main/docs/overview.md",version:"current",lastUpdatedBy:"chansuke",lastUpdatedAt:1616127926,sidebar:"docs",next:{title:"About",permalink:"/website/docs/about"}},l=[{value:"Installing Excavator",id:"installing-excavator",children:[{value:"Compiling from source",id:"compiling-from-source",children:[]},{value:"Install from crates.io",id:"install-from-cratesio",children:[]},{value:"Install from Homebrew",id:"install-from-homebrew",children:[]}]},{value:"How to use Excavator",id:"how-to-use-excavator",children:[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Basic usage",id:"basic-usage",children:[]}]}],p={toc:l};function u(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("h1",{id:"excavator"},"Excavator"),Object(o.a)("p",null,"Excavator extracts and stores data from your personal data exports."),Object(o.a)("h2",{id:"installing-excavator"},"Installing Excavator"),Object(o.a)("h3",{id:"compiling-from-source"},"Compiling from source"),Object(o.a)("p",null,"You need to have a ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://doc.rust-lang.org/cargo/appendix/glossary.html#package-manager"}),"package manager")," called ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://doc.rust-lang.org/cargo/"}),"cargo")," in your local."),Object(o.a)("p",null,"If you already have got ",Object(o.a)("inlineCode",{parentName:"p"},"rustc")," installed in your local, you also have ",Object(o.a)("inlineCode",{parentName:"p"},"cargo")," installed locally."),Object(o.a)("p",null,"And then you can install with this command."),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ cargo install --git https://github.com/ichnion/excavator --branch rusqlite\n")),Object(o.a)("h3",{id:"install-from-cratesio"},"Install from crates.io"),Object(o.a)("p",null,"TBD"),Object(o.a)("h3",{id:"install-from-homebrew"},"Install from Homebrew"),Object(o.a)("p",null,"TBD"),Object(o.a)("h2",{id:"how-to-use-excavator"},"How to use Excavator"),Object(o.a)("h3",{id:"prerequisite"},"Prerequisite"),Object(o.a)("p",null,"Currently, we support ",Object(o.a)("em",{parentName:"p"},"part of")," ",Object(o.a)("inlineCode",{parentName:"p"},"Google Takeout")," and ",Object(o.a)("inlineCode",{parentName:"p"},"Facebook")," data."),Object(o.a)("p",null,"You need to prepare the applicable data from ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://takeout.google.com/settings/takeout"}),"Google Takeout")," or ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.facebook.com/help/972879969525875"}),"Facebook"),"."),Object(o.a)("p",null,"Supported files are below."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Google Takout"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"MyActivity.json")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"search-history.json")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"watch-history.json")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"Location History.json")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"Saved Place.json")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"Semantic Location History.json")))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Facebook"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"device_location.json")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"primary_location.json")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"primary_public_location.json"))))),Object(o.a)("h3",{id:"basic-usage"},"Basic usage"),Object(o.a)("p",null,"Below is the basic example to use excavator. Which will extract the data from the file."),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"$ excavator read SavedPlace.json")))}u.isMDXComponent=!0}}]);