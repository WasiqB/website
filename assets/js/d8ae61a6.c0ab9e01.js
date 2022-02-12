"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2625],{7182:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return m}});var n=i(6687);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(i),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9519:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=i(891),r=i(466),a=(i(6687),i(7182)),o=["components"],c={id:"activity-class",title:"Abstract Activity Class"},s=void 0,l={unversionedId:"activity-class",id:"activity-class",title:"Abstract Activity Class",description:"To introduce Page object flavor in tests, Abstract Activity classes are available for each type of supported platforms which can be used to create pages for each Activity under test. The available Abstract classes are listed below:",source:"@site/docs/coteafs-appium/activity-class.md",sourceDirName:".",slug:"/activity-class",permalink:"/website/projects/coteafs-appium/activity-class",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/activity-class.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1644658313,formattedLastUpdatedAt:"2/12/2022",frontMatter:{id:"activity-class",title:"Abstract Activity Class"},sidebar:"docs",previous:{title:"Supported Device Element Actions",permalink:"/website/projects/coteafs-appium/supported-device-element-actions"},next:{title:"Abstract Activity Action Class",permalink:"/website/projects/coteafs-appium/action-class"}},p=[{value:"How to write an activity?",id:"how-to-write-an-activity",children:[],level:2}],d={toc:p};function u(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To introduce Page object flavor in tests, Abstract Activity classes are available for each type of supported platforms which can be used to create pages for each Activity under test. The available Abstract classes are listed below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AndroidActivity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IOSActivity"))),(0,a.kt)("h2",{id:"how-to-write-an-activity"},"How to write an activity?"),(0,a.kt)("p",null,"Here is an example of activity class for Android device and the activity is ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginActivity"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.openqa.selenium.By;\n\nimport com.github.wasiqb.coteafs.appium.android.AndroidActivity;\nimport com.github.wasiqb.coteafs.appium.android.AndroidDevice;\nimport com.github.wasiqb.coteafs.appium.device.DeviceElement;\n\npublic class LoginActivity extends AndroidActivity {\n  public LoginActivity (final AndroidDevice device) {\n    super (device);\n  }\n\n  // Here protected abstract method needs to be implemented which should return the root element.\n  @Override\n  protected DeviceElement prepare () {\n    final DeviceElement main = DeviceElement.create ("Main")\n      .waitStrategy (WaitStrategy.VISIBLE)\n      .forAndroid (By.id ("android:id/content"));\n    DeviceElement.create ("Back")\n      .parent (main)\n      .forAndroid (By.xpath ("//android.widget.TextView[@text=\\"Back\\"]"))\n      .forAndroid (AutomationType.UIAUTOMATOR2, MobileBy.AndroidUIAutomator ("new UiSelector ().text (\\"Back\\");"));\n    DeviceElement.create ("UserName")\n      .forAndroid (MobileBy.AccessibilityId ("username"))\n      .parent (main);\n    DeviceElement.create ("Password")\n      .forAndroid (MobileBy.AccessibilityId ("password"))\n      .parent (main);\n    DeviceElement.create ("Login")\n      .forAndroid (MobileBy.AccessibilityId ("login"))\n      .parent (main);\n    return main;\n  }\n}\n')),(0,a.kt)("p",null,"This is how ",(0,a.kt)("inlineCode",{parentName:"p"},"DeviceElement")," object is created using abstract method ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare"),", where object will be root object which will have user interactive elements as it's child. To know more about DeviceElement, ",(0,a.kt)("a",{parentName:"p",href:"/projects/coteafs-appium/orp/"},"see here"),"."))}u.isMDXComponent=!0}}]);