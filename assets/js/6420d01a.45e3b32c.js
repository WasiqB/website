"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7246],{4137:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(r),c=a,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6742:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(4137)),l=["components"],o={id:"error-handling",title:"Error Handling"},p=void 0,d={unversionedId:"error-handling",id:"error-handling",isDocsHomePage:!1,title:"Error Handling",description:"Problem Statement",source:"@site/docs/coteafs-appium/error-handling.md",sourceDirName:".",slug:"/error-handling",permalink:"/website/projects/coteafs-appium/error-handling",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/error-handling.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1637764414,formattedLastUpdatedAt:"11/24/2021",frontMatter:{id:"error-handling",title:"Error Handling"},sidebar:"docs",previous:{title:"Abstract Activity Action Class",permalink:"/website/projects/coteafs-appium/action-class"},next:{title:"Logging",permalink:"/website/projects/coteafs-appium/logging"}},m=[{value:"Problem Statement",id:"problem-statement",children:[],level:2},{value:"Solution provided by this framework",id:"solution-provided-by-this-framework",children:[],level:2}],u={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Tests are not running as expected, it is difficult to find out the root cause, appium related errors are thrown which are very difficult to be identified."),(0,i.kt)("h2",{id:"solution-provided-by-this-framework"},"Solution provided by this framework"),(0,i.kt)("p",null,"This framework handles all the events and throws a meaningful error using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasiqB/coteafs-error"},"coteafs-error")," framework, which is easy to identify the cause of failure."),(0,i.kt)("p",null,"Following is the list of exception and their events of occurring:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Exception"),(0,i.kt)("th",{parentName:"tr",align:null},"Events"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AppiumConfigParameterNotFoundError")),(0,i.kt)("td",{parentName:"tr",align:null},"When the config file is missing mandatory params.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AppiumSelectorNotImplementedError")),(0,i.kt)("td",{parentName:"tr",align:null},"When locator is invalid.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AppiumServerAlreadyRunningError")),(0,i.kt)("td",{parentName:"tr",align:null},"When Appium server is already running.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AppiumServerLogFileError")),(0,i.kt)("td",{parentName:"tr",align:null},"When there is error while deleting previous server logs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AppiumServerNotRunningError")),(0,i.kt)("td",{parentName:"tr",align:null},"When Appium server is not running.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AppiumServerNotStartingError")),(0,i.kt)("td",{parentName:"tr",align:null},"When there is Error while starting the server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AppiumServerNotStoppingError")),(0,i.kt)("td",{parentName:"tr",align:null},"When there is Error while stopping the server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AppiumServerStoppedError")),(0,i.kt)("td",{parentName:"tr",align:null},"When trying to interact with device while Appium server is stopped.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceAppNotClosingError")),(0,i.kt)("td",{parentName:"tr",align:null},"When there is Error while closing Device app.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceAppNotFoundError")),(0,i.kt)("td",{parentName:"tr",align:null},"When device app is not found on local machine.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceDesiredCapabilitiesNotSetError")),(0,i.kt)("td",{parentName:"tr",align:null},"When device mandatory desired capabilities is not set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceDriverDefaultWaitError")),(0,i.kt)("td",{parentName:"tr",align:null},"When there is Error while setting implicit waits.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceDriverInitializationFailedError")),(0,i.kt)("td",{parentName:"tr",align:null},"When there is Error while initializing device driver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceDriverNotStartingError")),(0,i.kt)("td",{parentName:"tr",align:null},"When there is Error while starting device driver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceDriverNotStoppingError")),(0,i.kt)("td",{parentName:"tr",align:null},"When there is Error while quitting device driver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceElementDisabledError")),(0,i.kt)("td",{parentName:"tr",align:null},"When you are trying to interact with disabled element.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceElementFindTimedOutError")),(0,i.kt)("td",{parentName:"tr",align:null},"When element is not ready within specified explicit delay given in config file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceElementNameNotFoundError")),(0,i.kt)("td",{parentName:"tr",align:null},"When element name is not found in Activity class.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceElementNotDisplayedError")),(0,i.kt)("td",{parentName:"tr",align:null},"When you are trying to interact with element which is not yet displayed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceElementNotFoundError")),(0,i.kt)("td",{parentName:"tr",align:null},"When device element cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DeviceTypeNotSupportedError")),(0,i.kt)("td",{parentName:"tr",align:null},"When the mentioned device type is not supported by the framework.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NotEnoughBatteryChargeError")),(0,i.kt)("td",{parentName:"tr",align:null},"When Battery charge is less than 20%.")))))}s.isMDXComponent=!0}}]);