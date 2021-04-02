(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(118)),i={title:"Other visualization"},c={unversionedId:"user/visualize/other",id:"user/visualize/other",isDocsHomePage:!1,title:"Other visualization",description:"In order to view and use the extracted data placed into a SQLite database file when the extraction process was executed, the DB Browser for SQLite (available in the Mac App Store) desktop application can be used. With it all the past activities stored by Google, Twitter, and Facebook can be browsed and reviewed by moving into the Browse Data tab and choosing the desired table.",source:"@site/docs/user/visualize/other.md",slug:"/user/visualize/other",permalink:"/website/docs/user/visualize/other",editUrl:"https://github.com/ichnion/website/edit/main/docs/user/visualize/other.md",version:"current",lastUpdatedBy:"chansuke",lastUpdatedAt:1617345937,sidebar:"docs",previous:{title:"Jupyter Notebook",permalink:"/website/docs/user/visualize/jupyter"},next:{title:"Developer Guide",permalink:"/website/docs/developer"}},s=[],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"In order to view and use the extracted data placed into a SQLite database file when the extraction process was executed, the ",Object(o.a)("inlineCode",{parentName:"p"},"DB Browser for SQLite")," (available in the Mac App Store) desktop application can be used. With it all the past activities stored by Google, Twitter, and Facebook can be browsed and reviewed by moving into the ",Object(o.a)("inlineCode",{parentName:"p"},"Browse Data")," tab and choosing the desired table. "),Object(o.a)("p",null,Object(o.a)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/68265868/112421662-cf619880-8d72-11eb-8467-0737a5bd71d9.png",alt:"Screen Shot 2021-03-25 at 13 56 41"}))),Object(o.a)("p",null,"To view and analyze the extracted Location Information from the different services, the GIS desktop application ",Object(o.a)("inlineCode",{parentName:"p"},"QGIS")," (available in Homebrew for Macs) can also be used. The loaction table in SQLite has to be converted first into a CSV file using the DB Browser in order for QGIS to be able to create a Map Layer from the data. "),Object(o.a)("p",null,Object(o.a)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/68265868/112423648-64b25c00-8d76-11eb-8a8f-f0a318d4f651.png",alt:"image"}))),Object(o.a)("p",null,"Once the CSV file from the location table has been created, the data can be viewed in QGIS by doing ",Object(o.a)("strong",{parentName:"p"},"Layer -> Add Layer -> Add Vector Layer")," ."),Object(o.a)("p",null,Object(o.a)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/68265868/112424576-04bcb500-8d78-11eb-8e1c-e1afc42cda84.png",alt:"image"}))),Object(o.a)("p",null," Then choose the Delimited Text option and enter the CSV filename. Afterwards, chooce ",Object(o.a)("strong",{parentName:"p"},"Point Coordinates")," and set the X field to ",Object(o.a)("strong",{parentName:"p"},"lng")," and the Y field to ",Object(o.a)("strong",{parentName:"p"},"lat")," column names of the CSV file. "),Object(o.a)("p",null," ",Object(o.a)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/68265868/112425021-ba880380-8d78-11eb-84ca-e466ab416e04.png",alt:"Screen Shot 2021-03-25 at 14 42 53"}))),Object(o.a)("p",null," Once the required information has been entered, QGIS should now be able to visualize the location information in a map."),Object(o.a)("p",null,Object(o.a)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/68265868/112420563-c1127d00-8d70-11eb-8d58-23930f47284f.png",alt:"Screen Shot 2021-03-24 at 16 50 27"}))))}p.isMDXComponent=!0},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);