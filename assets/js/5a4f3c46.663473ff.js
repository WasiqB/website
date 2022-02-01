"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9888],{7182:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(6687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},890:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=t(891),a=t(466),i=(t(6687),t(7182)),o=["components"],s={title:"Config file",id:"sample-config"},p=void 0,l={unversionedId:"sample-config",id:"sample-config",title:"Config file",description:"Sample Config File",source:"@site/docs/coteafs-appium/sample-config.md",sourceDirName:".",slug:"/sample-config",permalink:"/website/projects/coteafs-appium/sample-config",editUrl:"https://github.com/WasiqBhamla/website/edit/main/docs/coteafs-appium/sample-config.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1643733786,formattedLastUpdatedAt:"2/1/2022",frontMatter:{title:"Config file",id:"sample-config"},sidebar:"docs",previous:{title:"Battery Check",permalink:"/website/projects/coteafs-appium/battery"},next:{title:"Setup Class",permalink:"/website/projects/coteafs-appium/sample-setup-class"}},c=[{value:"Sample Config File",id:"sample-config-file",children:[],level:2}],u={toc:c};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"sample-config-file"},"Sample Config File"),(0,i.kt)("p",null,"Config file is main resource of this framework where all the necessary config setup for servers and devices\nare done.\nFor naming convention of the file, refer the details mentioned ",(0,i.kt)("a",{parentName:"p",href:"/projects/coteafs-appium/config-basics/"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server: &default_server\n  host: 0.0.0.0\n  appium_path: /Users/in-wasiq.bhamla/.nvm/versions/node/v14.15.4/lib/node_modules/appium/build/lib/main.js\n  session_override: true\n  logs:\n    level: DEBUG\n    path: logs/appium-server.log\n    timestamp: true\n    local_timezone: true\n    debug_spacing: true\n\nservers:\n  android:\n    <<: *default_server\n    port: 4723\n    allow_insecure:\n      - adb_screen_streaming\n    android:\n      suppress_adb_kill: true\n  ios:\n    <<: *default_server\n    port: 4725\n    ios:\n      wda_port: 8101\n  browserstack:\n    protocol: HTTPS\n    cloud: BROWSERSTACK\n    user_name: ${env:CLOUD_USER}\n    password: ${env:CLOUD_KEY}\n\ndevice: &default_device\n  os: ANDROID\n  type: REAL\n  language: US\n  session_timeout: 120000\n  others:\n    clear_files: true\n    no_reset: false\n    full_reset: true\n    clear_logs: true\n  playback:\n    stream:\n      enabled: false\n      width: 700\n      height: 1024\n      quality: HIGH\n      bit_rate: 50\n    screenshot:\n      on_error: true\n    record:\n      enabled: false\n      time_limit: 5\n      android:\n        size: 800x720\n      ios:\n        fps: 30\n    delay:\n      before_swipe: 200\n      after_swipe: 100\n      before_tap: 0\n      after_tap: 0\n      implicit: 1\n      explicit: 5\n\ndevices:\n  android:\n    <<: *default_device\n    name: emulator-5554\n    version: 8.1\n    automation: UIAUTOMATOR2\n    type: SIMULATOR\n    android:\n      avd:\n        name: Pixel_3_XL_API_27\n        launch_timeout: 60000\n        ready_timeout: 60000\n        args: -gpu swiftshader_indirect\n      app:\n        install_timeout: 60000\n        type: HYBRID\n        path: apps/android/VodQA.apk\n  android_bs:\n    name: Samsung Galaxy S10\n    automation: UIAUTOMATOR2\n    cloud_capabilities:\n      os_version: 9.0\n      device: Samsung Galaxy S10\n      app: ${env:APP}\n      project: Project Appium\n      build: Build-1\n      name: Test 1\n      browserstack.appium_version: 1.20.2\n    playback:\n      screenshot:\n        on_error: true\n    android:\n      app:\n        ignore_unimportant_views: false\n  ios_bs:\n    name: iPhone 12 Pro Max\n    os: IOS\n    automation: XCUI\n    cloud_capabilities:\n      os_version: 14\n      device: iPhone 12 Pro Max\n      app: ${env:APP_IOS}\n      project: Project Appium\n      build: Build-1\n      name: IOS_Test 1\n      browserstack.appium_version: 1.20.2\n  iphone:\n    <<: *default_device\n    name: iPhone 12 Pro\n    version: 14.4\n    automation: XCUI\n    type: SIMULATOR\n    os: IOS\n    ios:\n      app:\n        path: apps/ios/wdio-app.app.zip\n        type: HYBRID\n")))}f.isMDXComponent=!0}}]);