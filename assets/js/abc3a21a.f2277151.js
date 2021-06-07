(self.webpackChunkichnion_website=self.webpackChunkichnion_website||[]).push([[118],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},161:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={title:"Common errors while developing",sidebar_label:"Common errors"},s={unversionedId:"developer/errors/index",id:"developer/errors/index",isDocsHomePage:!1,title:"Common errors while developing",description:"This page is a non-exhaustive list of the errors you may have while programming your own Excavator's function.",source:"@site/docs/developer/errors/index.md",sourceDirName:"developer/errors",slug:"/developer/errors/index",permalink:"/website/docs/developer/errors/index",editUrl:"https://github.com/ichnion/website/edit/main/docs/developer/errors/index.md",version:"current",lastUpdatedBy:"Daniel Kastl",lastUpdatedAt:1623049748,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Common errors",frontMatter:{title:"Common errors while developing",sidebar_label:"Common errors"},sidebar:"docs",previous:{title:"How to extract data by yourself?",permalink:"/website/docs/developer/tutorial/index"},next:{title:"Contributing to Ichnion",permalink:"/website/docs/developer/contribute"}},l=[{value:"SqliteFailure",id:"sqlitefailure",children:[]},{value:"Missing field",id:"missing-field",children:[]},{value:"Use of undeclared crate or module",id:"use-of-undeclared-crate-or-module",children:[]},{value:"Could not find &quot;...&quot; in activities",id:"could-not-find--in-activities",children:[]},{value:"The trait <code>ToSql</code> is not implemented for",id:"the-trait-tosql-is-not-implemented-for",children:[]},{value:"expected struct <code>std::string::String</code>, found <code>&amp;str</code>",id:"expected-struct-stdstringstring-found-str",children:[]}],u={toc:l};function d(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page is a non-exhaustive list of the errors you may have while programming your own Excavator's function."),(0,o.kt)("p",null,"We recommand you at first to try to use the compiler. Indeed, the Rust's compiler is very powerful, and can easily correct your code to make it valid.\nYou can also look at the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/"},"Rust documentation")," to solve your problem.\nFinally, if you still have errors, you can ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/HPFF83fTR4"},"contact us on Discord"),". We will be happy to help you !"),(0,o.kt)("h2",{id:"sqlitefailure"},"SqliteFailure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(9028).Z})),(0,o.kt)("p",null,"An Sqlite error means that there is an issue with your database. It usually comes from a wrong syntax in your database when you create it. You should look at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/db/schema.rs")," if the database is correctly defined : be careful with each word written, each symbol like ",(0,o.kt)("inlineCode",{parentName:"p"},",")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"()"),". Your syntax must be identical as ours in the ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/developer/tutorial/index"},"tutorial"),"."),(0,o.kt)("p",null,"Another Sqlite error could come from your Primary Key. If you use one of the field of your file as a primary key, verify that each value of this field is different."),(0,o.kt)("h2",{id:"missing-field"},"Missing field"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(3376).Z})),(0,o.kt)("p",null,"If you error's message returns \"",(0,o.kt)("em",{parentName:"p"},"missing field ..."),'", it means that you must have written a wrong name for a field of one of your structure. In our example, we have written "',(0,o.kt)("em",{parentName:"p"},"oui"),'" instead of ',(0,o.kt)("em",{parentName:"p"},"Areas_you_may_have_visited_in_the_last_two_years")," into our ",(0,o.kt)("inlineCode",{parentName:"p"},"GeneralStructure"),', but there is not such field named "',(0,o.kt)("em",{parentName:"p"},"oui"),'" in our ',(0,o.kt)("inlineCode",{parentName:"p"},".json")," file. This is the reason why we have this error."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember that each field of your structures must have the same name as a field in your .json file. Please also remember that you can't extract a field if its names is made of more than 1 word (like Postal Code in our tutorial's example)."))),(0,o.kt)("h2",{id:"use-of-undeclared-crate-or-module"},"Use of undeclared crate or module"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(2745).Z})),(0,o.kt)("p",null,"This errors means that you forgot to write this line of code in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.rs")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use excavator::activities::name_of_the_source::name_of_your_file;\n")),(0,o.kt)("p",null,"In our example :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use excavator::activities::snapchat::snapchat_areas_visited_history;\n")),(0,o.kt)("h2",{id:"could-not-find--in-activities"},'Could not find "..." in activities'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(909).Z})),(0,o.kt)("p",null,"This means that your forgot to write the following code into ",(0,o.kt)("inlineCode",{parentName:"p"},"src/activities.rs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub mod name_of_the_source;\npub use name_of_the_source::*;\n")),(0,o.kt)("p",null,"In our example :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub mod snapchat;\npub use snapchat::*;\n")),(0,o.kt)("h2",{id:"the-trait-tosql-is-not-implemented-for"},"The trait ",(0,o.kt)("inlineCode",{parentName:"h2"},"ToSql")," is not implemented for"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(8657).Z})),(0,o.kt)("p",null,"This errors usually means that you forgot to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"to_string()")," method to a field that needs one (",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"u64"),", ...)."),(0,o.kt)("p",null,"In our example, we just need to write ",(0,o.kt)("inlineCode",{parentName:"p"},".to_string()")," next to ",(0,o.kt)("inlineCode",{parentName:"p"},"&my_uuid"),"."),(0,o.kt)("h2",{id:"expected-struct-stdstringstring-found-str"},"expected struct ",(0,o.kt)("inlineCode",{parentName:"h2"},"std::string::String"),", found ",(0,o.kt)("inlineCode",{parentName:"h2"},"&str")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(6060).Z})),(0,o.kt)("p",null,"This error can happen while you are running your test. It's an error that you may do if you are comfortable with other programming languages. Indeed, a particularity of Rust is that it differentiates ",(0,o.kt)("em",{parentName:"p"},'"..."')," (",(0,o.kt)("inlineCode",{parentName:"p"},"&str"),") elements and String. Or we need to add a String to our database, so we need to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"to_string()")," method even on ",(0,o.kt)("inlineCode",{parentName:"p"},"&str")," elements."),(0,o.kt)("p",null,"In our example, we just need to write ",(0,o.kt)("inlineCode",{parentName:"p"},'Time: "2021/02/12 11:51:31 UTC".to_string()')," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},'Time: "2021/02/12 11:51:31 UTC"'),"."))}d.isMDXComponent=!0},6060:function(e,t,r){"use strict";t.Z=r.p+"assets/images/expected_string-9c37265e94c68ccf1a3b2bf74b638c1f.png"},909:function(e,t,r){"use strict";t.Z=r.p+"assets/images/not_found-ba75364a91a91928315d424de970baf7.png"},9028:function(e,t,r){"use strict";t.Z=r.p+"assets/images/sqlite-be063a439f2c6643c42c949a12c8101a.png"},8657:function(e,t,r){"use strict";t.Z=r.p+"assets/images/trait_sql-07ee175c30f06bf12550744f90b666a3.png"},2745:function(e,t,r){"use strict";t.Z=r.p+"assets/images/undeclared_crate-58ada9e73d70256c3ae8c13fe0a27ebb.png"},3376:function(e,t,r){"use strict";t.Z=r.p+"assets/images/unknown_field-e1a0a33a9e225a4710c7397cf1e449fd.png"}}]);