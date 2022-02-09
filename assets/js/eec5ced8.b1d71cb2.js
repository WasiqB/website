"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8759],{7182:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return m}});var n=i(6687);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=c(i),m=l,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return i?n.createElement(k,o(o({ref:t},s),{},{components:i})):n.createElement(k,o({ref:t},s))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,o=new Array(a);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4512:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=i(891),l=i(466),a=(i(6687),i(7182)),o=["components"],r={title:"Supported Device Actions",id:"supported-device-actions"},p=void 0,c={unversionedId:"supported-device-actions",id:"supported-device-actions",title:"Supported Device Actions",description:"Overview",source:"@site/docs/coteafs-appium/supported-device-action.md",sourceDirName:".",slug:"/supported-device-actions",permalink:"/website/projects/coteafs-appium/supported-device-actions",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/supported-device-action.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1644410990,formattedLastUpdatedAt:"2/9/2022",frontMatter:{title:"Supported Device Actions",id:"supported-device-actions"},sidebar:"docs",previous:{title:"Supported Devices",permalink:"/website/projects/coteafs-appium/supported-devices"},next:{title:"Supported Device Element Actions",permalink:"/website/projects/coteafs-appium/supported-device-element-actions"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Actions common for all the devices",id:"actions-common-for-all-the-devices",children:[],level:2},{value:"Swipe Directions available",id:"swipe-directions-available",children:[],level:2},{value:"Swipe start positions",id:"swipe-start-positions",children:[],level:2},{value:"Android specific actions",id:"android-specific-actions",children:[],level:2},{value:"iOS specific actions",id:"ios-specific-actions",children:[],level:2}],d={toc:s};function u(e){var t=e.components,i=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"There are plenty of platform specific actions which are supported in the framework and to trigger that action on device, you need to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"onDevice")," method on the Current Activity class object. Same is illustrated below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  . . .\n  login.onDevice ().hideKeyboard ();\n  . . .\n")),(0,a.kt)("h2",{id:"actions-common-for-all-the-devices"},"Actions common for all the devices"),(0,a.kt)("p",null,"Following is the list of actions common on all the devices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"captureScreenshot"),": Captures current activity screenshot and saves the file at path specified in config file. File name will have the prefix defined in the config file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigateTo"),": This is specific to web app testing on device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rotate"),": Rotate the device to Landscape or Portrait mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rotation"),": Gets current rotation mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pinch"),": This will zoom out of the current activity by specified distance from center of the screen to the device screen borders."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pullFile"),": This method will pull file from device storage to local machine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pullFolder"),": This method will pull complete folder from device storage to local machine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"swipe"),": This method will swipe in the specified direction and by specified distance from specified starting position on the screen."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zoom"),": This will zoom in to the current activity by specified distance from center of the screen to the device screen borders.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Caution: Zoom and Pinch on Android will only work when Automation name is ",(0,a.kt)("inlineCode",{parentName:"p"},"ESPRESSO"),".")),(0,a.kt)("h2",{id:"swipe-directions-available"},"Swipe Directions available"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"RIGHT")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"LEFT")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"UP")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DOWN"))),(0,a.kt)("h2",{id:"swipe-start-positions"},"Swipe start positions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"RIGHT")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"LEFT")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"UP")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DOWN")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"CENTER"))),(0,a.kt)("h2",{id:"android-specific-actions"},"Android specific actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"currentActivity"),": Gets the name of current activity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clipboard"),": Gets and sets clipboard text from device. Or for specified type like IMAGE, URL, TEXT."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handlePermissionAlert"),": Handles Android permission alert by tapping on specified ",(0,a.kt)("inlineCode",{parentName:"li"},"Allow")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Deny")," buttons."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handleAlert"),": Handles pop-up Alerts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hideKeyboard"),": This will hide the currently displayed keyboard."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isLocked"),": Returns boolean value by checking if the device is locked or no."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lock"),": This will lock the device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"longPressKey"),": This will long press the specified key on the device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pressKey"),": This will press the specified key on the device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pushFile"),": This method will push file from local machine to device storage."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toggleAirplane"),": This will toggle ON/OFF Airplane mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toggleData"),": This will toggle ON/OFF Mobile data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toggleLocation"),": This will toggle ON/OFF Location services."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toggleWifi"),": This will toggle ON/OFF Wifi."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unlock"),": This will unlock the device.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note for clipboard:\nWhen getting clipboard for type other than TEXT, it will be returned as Base64 encoded which will currently require you to decode at your end to use it. Decoding will be done later on in the framework.")),(0,a.kt)("h2",{id:"ios-specific-actions"},"iOS specific actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clipboard"),": Gets clipboard text from device. Or for specified type like IMAGE, URL, TEXT."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handleAlert"),": This will handle pop-up Alert and returns the message."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hideKeyboard"),": This will hide the keyboard by using specified strategy and key name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shake"),": This will shake the device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pushFile"),": This method will push file from local machine to device storage.")))}u.isMDXComponent=!0}}]);