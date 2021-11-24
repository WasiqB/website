"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[934],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6836:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(4137)),a=["components"],l={id:"supported-device-element-actions",title:"Supported Device Element Actions"},s=void 0,p={unversionedId:"supported-device-element-actions",id:"supported-device-element-actions",isDocsHomePage:!1,title:"Supported Device Element Actions",description:"Overview",source:"@site/docs/coteafs-appium/supported-device-element-actions.md",sourceDirName:".",slug:"/supported-device-element-actions",permalink:"/website/projects/coteafs-appium/supported-device-element-actions",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/supported-device-element-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1637764414,formattedLastUpdatedAt:"11/24/2021",frontMatter:{id:"supported-device-element-actions",title:"Supported Device Element Actions"},sidebar:"docs",previous:{title:"Supported Device Actions",permalink:"/website/projects/coteafs-appium/supported-device-actions"},next:{title:"Abstract Activity Class",permalink:"/website/projects/coteafs-appium/activity-class"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Actions common for all the device elements",id:"actions-common-for-all-the-device-elements",children:[],level:2},{value:"Known issue and workarounds",id:"known-issue-and-workarounds",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"There are plenty of device element specific actions which are supported in the framework and to trigger that action on device, you need to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"onElement")," method on the Current Activity and pass the element name on which you need to perform action. Same is illustrated below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'  . . .\n  login.onElement ("userName").enterText ("User1");\n  . . .\n')),(0,o.kt)("h2",{id:"actions-common-for-all-the-device-elements"},"Actions common for all the device elements"),(0,o.kt)("p",null,"Following is the list of actions common on all the device elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appendText"),": This method will append text to the end of the string in the text box without clearing any existing text."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clear"),": This will clear the entered text or selection on the element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"click"),": It is similar to tap but more useful for web testing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enabled"),": It checks and returns the element state whether it is enabled or not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enterText"),": It will clear any existing text and will write the specified string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"doubleTap"),": It will double tap on element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nTaps"),": It will perform n-taps on element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dragDrop"),": It will drag drop of element to another element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getDevice"),": It returns the current device instance under test."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getDriver"),": It returns current driver instance for external use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"longPress"),": It will long press on the element until context menu appears."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pinch"),": This will zoom out of the current element by specified distance from elements border to the center of the element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selected"),": It checks and return the state whether the element is selected or not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"swipe"),": It will swipe on the co-ordinates inside the element starting at the specified position on the element (LEFT, RIGHT, UP, DOWN, CENTER) and swiping up-to the distance specified from the starting position."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tap"),": It will tap on the element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text"),": It will return the text on the element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"visible"),": It checks and return the state whether the element is visible or not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zoom"),": This will zoom in to the current element by specified distance from center of the element to the elements borders."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"verifyThat"),": It returns the verification instance which we can use to perform assertions on the elements.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note:\nZoom and Pinch will only work when Automation Type is Espresso.")),(0,o.kt)("h2",{id:"known-issue-and-workarounds"},"Known issue and workarounds"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Swipe Down:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue:")," When swiping on element with finger on top border doesn't swipes from top to down but instead swipes down to top. Same is also reported to Appium team ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appium/java-client/issues/827"},"#827"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Workaround:")," In coteafs-appium, it has handled the workaround for the issue by starting 5 pixels away from border.")))))}u.isMDXComponent=!0}}]);