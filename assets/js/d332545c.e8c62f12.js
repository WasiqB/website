"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[210],{7182:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(891),i=n(466),a=(n(6687),n(7182)),o=["components"],l={id:"verification",title:"Verification of Elements"},p=void 0,s={unversionedId:"verification",id:"verification",title:"Verification of Elements",description:"Problem Statement",source:"@site/docs/coteafs-appium/verification.md",sourceDirName:".",slug:"/verification",permalink:"/website/projects/coteafs-appium/verification",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/verification.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1644658313,formattedLastUpdatedAt:"2/12/2022",frontMatter:{id:"verification",title:"Verification of Elements"},sidebar:"docs",previous:{title:"Logging",permalink:"/website/projects/coteafs-appium/logging"},next:{title:"Alert Handling",permalink:"/website/projects/coteafs-appium/alerts"}},c=[{value:"Problem Statement",id:"problem-statement",children:[],level:2},{value:"Solution by this Framework",id:"solution-by-this-framework",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"User has to write a lot more code to verify the expected with actual result and it requires good amount of effort and time to be invested in it."),(0,a.kt)("h2",{id:"solution-by-this-framework"},"Solution by this Framework"),(0,a.kt)("p",null,"Inline Assertions are provided by this framework."),(0,a.kt)("p",null,"Following is an example on how to do it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nfinal DashboardActivity main = new DashboardActivity (this.device);\nmain.onElement ("TypedAmt")\n    .verifyThat ()\n    .textShouldBeEqualTo ("$0.1");\n. . .\n')),(0,a.kt)("p",null,"Following is the list of verification methods available:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"shouldBeDisabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Verifies if the element is disabled or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"shouldBeDisplayed")),(0,a.kt)("td",{parentName:"tr",align:null},"Verifies if the element is displayed or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"shouldBeEnabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Verifies if the element is enabled or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"shouldNotBeDisplayed")),(0,a.kt)("td",{parentName:"tr",align:null},"Verifies if the element is hidden or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"textShouldBeEqualTo")),(0,a.kt)("td",{parentName:"tr",align:null},"Verifies if element text is equal to given string or not.")))))}d.isMDXComponent=!0}}]);