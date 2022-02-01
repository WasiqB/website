"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2513],{7182:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(891),r=n(466),o=(n(6687),n(7182)),i=["components"],s={id:"usage",title:"Usage"},c=void 0,l={unversionedId:"usage",id:"usage",title:"Usage",description:"Usage options",source:"@site/docs/coteafs-appium/usage.md",sourceDirName:".",slug:"/usage",permalink:"/website/projects/coteafs-appium/usage",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/usage.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1643733786,formattedLastUpdatedAt:"2/1/2022",frontMatter:{id:"usage",title:"Usage"},sidebar:"docs",previous:{title:"Pre-Requisite",permalink:"/website/projects/coteafs-appium/pre-requisite"},next:{title:"Basic Config structure",permalink:"/website/projects/coteafs-appium/config-basics"}},p=[{value:"Usage options",id:"usage-options",children:[{value:"A. Maven Dependency",id:"a-maven-dependency",children:[],level:3},{value:"B. Build path reference",id:"b-build-path-reference",children:[],level:3},{value:"C. Download the JAR&#39;s from the Release Tab",id:"c-download-the-jars-from-the-release-tab",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage-options"},"Usage options"),(0,o.kt)("p",null,"Any of the following options can be used to start working with the framework."),(0,o.kt)("h3",{id:"a-maven-dependency"},"A. Maven Dependency"),(0,o.kt)("p",null,"The framework can be used directly by adding dependency in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.github.wasiqb.coteafs</groupId>\n  <artifactId>appium</artifactId>\n  <version>4.0.0</version>\n</dependency>\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Sometimes it is observed that due to some conflicting dependencies for SnakeYaml and Google's Guava, you need to make sure you add exclusion in other library dependencies (which is internally using an old version of the above mentioned library) which you may use in your pom along with this framework. This is how you do this:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.testng</groupId>\n  <artifactId>testng</artifactId>\n  <version>7.3.0</version>\n  <exclusions>\n    <exclusion>\n      <groupId>org.yaml</groupId>\n      <artifactId>snakeyaml</artifactId>\n    </exclusion>\n    <exclusion>\n      <groupId>com.google.guava</groupId>\n      <artifactId>guava</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>\n")))),(0,o.kt)("p",null,"If this won't solve the issue, than you need to remove old versions from your ",(0,o.kt)("inlineCode",{parentName:"p"},".m2")," repository from your local machine for both ",(0,o.kt)("strong",{parentName:"p"},"SnakeYaml")," and ",(0,o.kt)("strong",{parentName:"p"},"Google's Guava"),"."),(0,o.kt)("h3",{id:"b-build-path-reference"},"B. Build path reference"),(0,o.kt)("p",null,"In order to use it from build path, you need to clone the framework project to your local machine by executing the below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"$ git clone git@github.com:WasiqB/coteafs-appium.git\n")),(0,o.kt)("p",null,"Once project is cloned, build the project by executing the below command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"$ mvn clean install -DskipTests=true\n")),(0,o.kt)("p",null,"After build is completed successfully, refer the JAR's created in ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," folder in build path of your project."),(0,o.kt)("h3",{id:"c-download-the-jars-from-the-release-tab"},"C. Download the JAR's from the Release Tab"),(0,o.kt)("p",null,"You can download the latest release JAR's from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WasiqB/coteafs-appium/releases/latest"},"GitHub")," and add the reference in your project classpath."))}d.isMDXComponent=!0}}]);