import{r as k,a as j,g as L,b as s,u as I,c as E,L as A,d as O,e as R,B as M,R as B,f as b,h as F}from"./vendor-DYVSoK-q.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function x(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(a){if(a.ep)return;a.ep=!0;const n=x(a);fetch(a.href,n)}})();var T={exports:{}},C={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function U(){if(_)return C;_=1;var t=k(),o=Symbol.for("react.element"),x=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function g(h,d,S){var m,f={},r=null,c=null;S!==void 0&&(r=""+S),d.key!==void 0&&(r=""+d.key),d.ref!==void 0&&(c=d.ref);for(m in d)u.call(d,m)&&!n.hasOwnProperty(m)&&(f[m]=d[m]);if(h&&h.defaultProps)for(m in d=h.defaultProps,d)f[m]===void 0&&(f[m]=d[m]);return{$$typeof:o,type:h,key:r,ref:c,props:f,_owner:a.current}}return C.Fragment=x,C.jsx=g,C.jsxs=g,C}var N;function H(){return N||(N=1,T.exports=U()),T.exports}var e=H(),y={},D;function z(){if(D)return y;D=1;var t=j();return y.createRoot=t.createRoot,y.hydrateRoot=t.hydrateRoot,y}var q=z();const W=L(q),G=[{path:"/",label:"首页"},{path:"/articles",label:"文章"}],J=()=>{const[t,o]=s.useState(!1),[x,u]=s.useState(!1),[a,n]=s.useState(!1),[g,h]=s.useState(""),[d,S]=s.useState(!1),m=I(),f=E();s.useEffect(()=>{const l=()=>{o(window.scrollY>20)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),s.useEffect(()=>{const l=localStorage.getItem("theme"),p=window.matchMedia("(prefers-color-scheme: dark)").matches;(l==="dark"||!l&&p)&&(n(!0),document.documentElement.classList.add("dark-mode"))},[]);const r=s.useCallback(()=>{n(l=>{const p=!l;return p?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light")),p})},[]),c=s.useCallback(l=>{l.preventDefault(),g.trim()&&(f(`/articles?search=${encodeURIComponent(g)}`),h(""),S(!1))},[g,f]),i=s.useCallback(()=>{u(!1)},[]);return e.jsx("header",{className:`header ${t?"scrolled":""}`,children:e.jsxs("div",{className:"header-container container",children:[e.jsxs(A,{to:"/",className:"logo",children:[e.jsx("span",{className:"logo-icon",children:"📚"}),e.jsx("span",{className:"logo-text",children:"知识学堂"})]}),e.jsxs("nav",{className:`nav ${x?"active":""}`,children:[G.map(l=>e.jsx(A,{to:l.path,className:`nav-link ${m.pathname===l.path?"active":""}`,onClick:i,children:l.label},l.path)),e.jsx("a",{href:"https://github.com/DRGJU",className:"nav-link github-link",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:e.jsx("svg",{viewBox:"0 0 24 24",className:"github-icon","aria-hidden":"true",children:e.jsx("path",{fill:"currentColor",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs("form",{onSubmit:c,className:`search-form ${d?"active":""}`,children:[e.jsx("input",{type:"text",placeholder:"搜索文章...",value:g,onChange:l=>h(l.target.value),className:"search-input","aria-label":"搜索文章"}),e.jsx("button",{type:"submit",className:"search-btn","aria-label":"搜索",children:"🔍"})]}),e.jsx("button",{onClick:()=>S(l=>!l),className:"action-btn search-toggle","aria-label":"搜索",type:"button",children:"🔍"}),e.jsx("button",{onClick:r,className:"action-btn theme-toggle","aria-label":"切换主题",type:"button",children:a?"☀️":"🌙"}),e.jsxs("button",{className:"mobile-menu-btn",onClick:()=>u(l=>!l),"aria-label":"菜单",type:"button","aria-expanded":x,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})})},Y=()=>{const t=s.useMemo(()=>new Date().getFullYear(),[]);return e.jsx("footer",{className:"footer",children:e.jsxs("div",{className:"footer-container container",children:[e.jsx("div",{className:"footer-content",children:e.jsxs("div",{className:"footer-section",children:[e.jsxs("h3",{className:"footer-title",children:[e.jsx("span",{className:"footer-icon",children:"📚"}),"知识学堂"]}),e.jsx("p",{className:"footer-description",children:"分享优质文章与教程，让学习变得更简单。 我们致力于提供高质量的学习内容，帮助您在各个领域快速成长。"})]})}),e.jsx("div",{className:"footer-bottom",children:e.jsxs("p",{children:["© ",t," 知识学堂。All rights reserved."]})})]})})},V=[{title:"菜鸟教程",description:"全面的技术教程网站，涵盖编程、数据库、Web 开发等",url:"https://www.runoob.com",color:"#009688",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"})})},{title:"MDN Web Docs",description:"Mozilla 提供的权威 Web 技术文档，前端开发必备资源",url:"https://developer.mozilla.org/zh-CN",color:"#5E35B1",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})},{title:"GitHub",description:"全球最大的代码托管平台，发现优秀项目和开源代码",url:"https://github.com",color:"#24292E",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.295-1.23 3.295-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})},{title:"Stack Overflow",description:"全球最大的程序员问答社区，解决编程问题的宝库",url:"https://stackoverflow.com",color:"#F48024",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18 19.5H6v-2h12v2zm-2.4-3.9l-1.2-1.8 10-6.6 1.2 1.8-10 6.6zm-2.7-3.3l-1.5-1.5 8.5-8.5 1.5 1.5-8.5 8.5zm-3-2.4L8.4 8.4l6.4-6.4 1.5 1.5-6.4 6.4zM6 15.5v-2h12v2H6z"})})},{title:"freeCodeCamp",description:"免费编程学习平台，提供交互式编程课程和项目实战",url:"https://www.freecodecamp.org",color:"#0A0A23",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 0L2.5 6.5V19L12 24l9.5-5V6.5L12 0zm0 2.5l7 4.5v9.5L12 21l-7-4.5V7L12 2.5z"})})},{title:"W3Schools",description:"Web 技术教程和参考手册，适合初学者快速入门",url:"https://www.w3schools.com",color:"#04AA6D",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zm0 11l-8-4v9l8 4 8-4V9l-8 4z"})})},{title:"廖雪峰的官方网站",description:"知名的编程技术教程，包括 Python、Git、Java 等热门语言",url:"https://www.liaoxuefeng.com",color:"#A60000",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})},{title:"Codecademy",description:"交互式编程学习平台，边学边练，快速掌握编程技能",url:"https://www.codecademy.com",color:"#FFD300",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 14H4v-4h8v4zm0-6H4V8h8v4zm6 6h-4v-4h4v4zm0-6h-4V8h4v4z"})})},{title:"Learn X in Y minutes",description:"快速了解编程语言语法的速查网站，简洁明了",url:"https://learnxinyminutes.com",color:"#2E86AB",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"})})},{title:"Programiz",description:"提供 Python、C、C++、Java 等语言的入门教程和示例",url:"https://www.programiz.com",color:"#66CC33",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"})})},{title:"掘金",description:"中文技术社区，专注互联网前沿技术分享与交流",url:"https://juejin.cn",color:"#1E80FF",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"})})},{title:"知乎",description:"中文互联网高质量的问答社区和创作者聚集地",url:"https://www.zhihu.com",color:"#0084FF",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})},{title:"思否 SegmentFault",description:"中文开发者技术社区，提供技术问答和专栏文章",url:"https://segmentfault.com",color:"#009A61",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})},{title:"V2EX",description:"创意工作者社区，讨论技术、分享创意和生活",url:"https://www.v2ex.com",color:"#1F1F1F",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2L2 22h20L12 2zm0 3.5L18.5 20H5.5L12 5.5z"})})},{title:"阮一峰的博客",description:"知名技术博主，每周分享技术动态和前沿资讯",url:"https://www.ruanyifeng.com/blog/",color:"#D93025",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"})})}],K=[{id:1,title:"Docker 安装与配置完全指南",excerpt:"从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践，帮助您快速上手容器化技术。",category:"技术",readTime:"15 分钟",image:"🐳"}],X=()=>e.jsxs("div",{className:"home",children:[e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"hero-container container",children:[e.jsxs("div",{className:"hero-content fade-in",children:[e.jsxs("h1",{className:"hero-title",children:["探索知识的",e.jsx("span",{className:"highlight",children:"无限可能"})]}),e.jsx("p",{className:"hero-subtitle",children:"在这里，您可以找到各种优质的文章和教程，涵盖技术、生活、学习等多个领域"}),e.jsxs("div",{className:"hero-buttons",children:[e.jsx(A,{to:"/articles",className:"btn btn-primary",children:"浏览文章"}),e.jsx(A,{to:"/",className:"btn btn-secondary",children:"了解更多"})]})]}),e.jsx("div",{className:"hero-image fade-in",children:e.jsx("div",{className:"hero-illustration",children:"📖"})})]})}),e.jsx("section",{className:"latest-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{className:"section-title",children:"最新文章"}),e.jsx("p",{className:"section-subtitle",children:"探索最新发布的技术文章和教程"})]}),e.jsx("div",{className:"latest-grid",children:K.map(t=>e.jsxs(A,{to:`/article/${t.id}`,className:"latest-card fade-in",children:[e.jsx("div",{className:"latest-card-image",children:e.jsx("span",{className:"card-emoji",children:t.image})}),e.jsxs("div",{className:"latest-card-content",children:[e.jsx("span",{className:"card-category",children:t.category}),e.jsx("h3",{className:"card-title",children:t.title}),e.jsx("p",{className:"card-excerpt",children:t.excerpt}),e.jsxs("div",{className:"card-meta",children:[e.jsxs("span",{className:"read-time",children:["⏱️ ",t.readTime]}),e.jsx("span",{className:"learn-more",children:"阅读文章 →"})]})]})]},t.id))})]})}),e.jsx("section",{className:"resources-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{className:"section-title",children:"学习资源"}),e.jsx("p",{className:"section-subtitle",children:"精选优质学习网站，助您快速成长"})]}),e.jsx("div",{className:"resources-grid",children:V.map((t,o)=>e.jsxs("a",{href:t.url,className:"resource-card fade-in",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("div",{className:"resource-icon",style:{color:t.color,width:"64px",height:"64px"},children:t.icon}),e.jsx("h3",{className:"resource-title",children:t.title}),e.jsx("p",{className:"resource-description",children:t.description}),e.jsx("span",{className:"visit-link",children:"访问网站 →"})]},o))})]})})]}),w=["全部","教程","技术","生活","公告"],P=6,Q=[{id:1,title:"Docker 安装与配置完全指南",excerpt:"从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践，帮助您快速上手容器化技术。",category:"技术",author:"DRGJU",date:"2024-03-31",readTime:"15 分钟",image:"🐳",views:0},{id:2,title:"计算机科学导论",excerpt:"全面系统的计算机科学入门教程，涵盖计算机基础、编程、算法、数据结构、操作系统、网络、数据库、软件工程、Web 开发、网络安全等核心知识。",category:"教程",author:"DRGJU",date:"2024-03-31",readTime:"180 分钟",image:"💻",views:0},{id:3,title:"编码：隐匿在计算机软件背后的语言",excerpt:"基于 Charles Petzold 经典著作，从零开始系统讲解编码、二进制、逻辑电路到计算机工作原理的完整知识体系，包含详细讲解、实例演示、动手实验和完整学习路线。",category:"教程",author:"DRGJU",date:"2024-03-31",readTime:"180 分钟",image:"📖",views:0},{id:4,title:"网络是怎样连接的 - 完整指南",excerpt:"基于户根勤经典著作，系统讲解从输入 URL 到网页显示的完整网络过程，涵盖 HTTP、DNS、TCP/IP、路由器、交换机等核心知识。",category:"教程",author:"DRGJU",date:"2024-03-31",readTime:"150 分钟",image:"🌐",views:0},{id:5,title:"Python 编程：从入门到实践 - 完整教程",excerpt:"基于 Eric Matthes 经典著作，从零开始系统讲解 Python 编程的基础知识和实践项目，包含三个完整项目：游戏开发、数据可视化、Web 应用。",category:"教程",author:"DRGJU",date:"2024-03-31",readTime:"200 分钟",image:"🐍",views:0},{id:6,title:"深入理解计算机系统 - 完整知识体系",excerpt:"基于 CSAPP 经典教材，系统讲解计算机系统的核心概念：数据表示、汇编、处理器架构、存储器层次、链接、异常控制流、虚拟内存、系统级 I/O、网络编程、并发编程等。",category:"教程",author:"DRGJU",date:"2024-04-03",readTime:"300 分钟",image:"🖥️",views:0}],$=()=>{const[t]=O(),[o,x]=s.useState("全部"),[u,a]=s.useState("date"),[n,g]=s.useState(""),[h,d]=s.useState(1);s.useEffect(()=>{const i=t.get("search"),l=t.get("category");i&&g(i),l&&w.includes(l)&&x(l)},[t]);const S=s.useCallback(i=>{x(i),d(1)},[]),m=s.useCallback(i=>{g(i),d(1)},[]),f=s.useMemo(()=>{let i=[...Q];if(o!=="全部"&&(i=i.filter(l=>l.category===o)),n.trim()){const l=n.toLowerCase();i=i.filter(p=>p.title.toLowerCase().includes(l)||p.excerpt.toLowerCase().includes(l)||p.author.toLowerCase().includes(l))}return i.sort((l,p)=>{switch(u){case"date":return new Date(p.date).getTime()-new Date(l.date).getTime();case"views":return p.views-l.views;case"readTime":return parseInt(l.readTime)-parseInt(p.readTime);default:return 0}}),i},[o,n,u]),r=s.useMemo(()=>Math.ceil(f.length/P),[f]),c=s.useMemo(()=>f.slice((h-1)*P,h*P),[f,h]);return s.useEffect(()=>{d(1)},[o,n]),e.jsxs("div",{className:"article-list-page",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"page-title",children:"全部文章"}),e.jsx("p",{className:"page-subtitle",children:"探索我们的文章库，找到您感兴趣的内容"})]})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"toolbar",children:[e.jsx("div",{className:"search-box",children:e.jsx("input",{type:"text",placeholder:"🔍 搜索文章标题、内容或作者...",value:n,onChange:i=>m(i.target.value),className:"search-box-input","aria-label":"搜索文章"})}),e.jsxs("div",{className:"sort-options",children:[e.jsx("label",{className:"sort-label",children:"排序方式："}),e.jsxs("select",{value:u,onChange:i=>a(i.target.value),className:"sort-select","aria-label":"排序方式",children:[e.jsx("option",{value:"date",children:"按发布时间"}),e.jsx("option",{value:"views",children:"按阅读量"}),e.jsx("option",{value:"readTime",children:"按阅读时间"})]})]})]}),e.jsx("div",{className:"category-filter",children:w.map(i=>e.jsx("button",{className:`filter-btn ${o===i?"active":""}`,onClick:()=>S(i),type:"button",children:i},i))}),e.jsxs("div",{className:"results-info",children:["找到 ",f.length," 篇文章",n&&e.jsxs("span",{children:[' - 搜索关键词："',n,'"']})]}),e.jsx("div",{className:"articles-grid",children:c.map(i=>e.jsxs("a",{href:`/article/${i.id}`,className:"article-card fade-in",children:[e.jsx("div",{className:"article-card-image",children:e.jsx("span",{className:"card-emoji",children:i.image})}),e.jsxs("div",{className:"article-card-content",children:[e.jsxs("div",{className:"article-card-header",children:[e.jsx("span",{className:"article-category",children:i.category}),e.jsx("span",{className:"article-date",children:i.date})]}),e.jsx("h3",{className:"article-card-title",children:i.title}),e.jsx("p",{className:"article-card-excerpt",children:i.excerpt}),e.jsxs("div",{className:"article-card-footer",children:[e.jsxs("div",{className:"article-author",children:[e.jsx("span",{className:"author-icon",children:"👤"}),e.jsx("span",{children:i.author})]}),e.jsxs("div",{className:"article-meta-right",children:[e.jsxs("span",{className:"article-views",children:["👁️ ",i.views]}),e.jsxs("span",{className:"article-read-time",children:["⏱️ ",i.readTime]})]})]})]})]},i.id))}),c.length===0&&e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:"📭"}),e.jsx("h3",{children:"暂无文章"}),e.jsx("p",{children:n?"没有找到匹配的文章，请尝试其他关键词":"该分类下还没有文章，敬请期待"})]}),r>1&&e.jsxs("div",{className:"pagination",children:[e.jsx("button",{onClick:()=>d(i=>Math.max(1,i-1)),disabled:h===1,className:"pagination-btn",children:"← 上一页"}),e.jsx("div",{className:"pagination-numbers",children:Array.from({length:r},(i,l)=>l+1).map(i=>e.jsx("button",{onClick:()=>d(i),className:`pagination-number ${h===i?"active":""}`,children:i},i))}),e.jsx("button",{onClick:()=>d(i=>Math.min(r,i+1)),disabled:h===r,className:"pagination-btn",children:"下一页 →"})]})]})]})},v={5:{title:"Python 编程：从入门到实践 - 完整教程",content:`
      <h2 id="intro">🐍 Python 编程：从入门到实践 - 完整教程</h2>
      
      <p>本文基于 Eric Matthes 的经典著作《Python 编程：从入门到实践》，从零开始系统讲解 Python 编程的基础知识和实践项目。无论你是编程新手还是有经验的开发者，都能通过本教程掌握 Python 的核心技能。</p>
      
      <div class="learning-objectives">
        <h3>📌 学习目标</h3>
        <ul>
          <li>掌握 Python 基础语法和数据结构</li>
          <li>理解函数、类和模块的使用</li>
          <li>学会文件操作和异常处理</li>
          <li>能够编写实际的 Python 程序</li>
          <li>完成三个实践项目：外星人入侵游戏、数据可视化、Web 应用程序</li>
        </ul>
      </div>

      <h2 id="part1">第一部分：Python 基础</h2>
      
      <h3 id="python-intro">第 1 章：Python 简介</h3>
      
      <h4 id="why-python">1.1 为什么选择 Python？</h4>
      <p>Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。</p>
      
      <p><strong>Python 的优势：</strong></p>
      <ul>
        <li><strong>语法简洁：</strong>代码可读性强，接近自然语言</li>
        <li><strong>易于学习：</strong>对新手友好，入门门槛低</li>
        <li><strong>功能强大：</strong>标准库丰富，第三方库众多</li>
        <li><strong>应用广泛：</strong>Web 开发、数据分析、人工智能、自动化脚本等</li>
        <li><strong>跨平台：</strong>支持 Windows、macOS、Linux 等操作系统</li>
      </ul>
      
      <p><strong>Python 的应用领域：</strong></p>
      <ul>
        <li>Web 开发（Django、Flask）</li>
        <li>数据分析（NumPy、Pandas、Matplotlib）</li>
        <li>人工智能（TensorFlow、PyTorch）</li>
        <li>自动化运维</li>
        <li>网络爬虫</li>
        <li>科学计算</li>
      </ul>

      <h4 id="install-python">1.2 安装 Python</h4>
      <p><strong>Windows 系统安装步骤：</strong></p>
      <ol>
        <li>访问 Python 官网：https://www.python.org/</li>
        <li>下载最新版本的安装程序</li>
        <li>运行安装程序，勾选"Add Python to PATH"</li>
        <li>点击"Install Now"完成安装</li>
        <li>打开命令提示符，输入 <code>python --version</code> 验证安装</li>
      </ol>
      
      <p><strong>macOS 系统安装：</strong></p>
      <pre><code class="language-bash"># 使用 Homebrew 安装
brew install python3

# 验证安装
python3 --version</code></pre>
      
      <p><strong>Linux 系统安装：</strong></p>
      <pre><code class="language-bash"># Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip

# CentOS/RHEL
sudo yum install python3 python3-pip

# 验证安装
python3 --version
pip3 --version</code></pre>

      <h4 id="first-program">1.3 第一个 Python 程序</h4>
      <p>创建文件 <code>hello.py</code>：</p>
      <pre><code class="language-python"># hello.py
print("Hello, Python World!")
print("欢迎学习 Python 编程！")

# 运行程序
# 在终端输入：python hello.py</code></pre>
      
      <p><strong>输出结果：</strong></p>
      <pre><code class="language-text">Hello, Python World!
欢迎学习 Python 编程！</code></pre>

      <h3 id="variables">第 2 章：变量和简单数据类型</h3>
      
      <h4 id="variable-basics">2.1 变量</h4>
      <p>变量是存储数据的容器，用于在程序中保存和使用信息。</p>
      
      <pre><code class="language-python"># 变量的定义和使用
message = "Hello Python"
print(message)

# 修改变量的值
message = "Hello Python Crash Course"
print(message)

# 变量命名规则
# 1. 只能包含字母、数字和下划线
# 2. 不能以数字开头
# 3. 不能使用 Python 关键字
# 4. 区分大小写

# 好的命名示例
user_name = "zhangsan"
user_age = 25
user_height = 1.75

# 不好的命名示例
a = "zhangsan"  # 不具描述性
1name = "lisi"  # 不能以数字开头</code></pre>

      <h4 id="string">2.2 字符串</h4>
      <p>字符串是由字符组成的序列，用单引号或双引号表示。</p>
      
      <pre><code class="language-python"># 字符串的基本操作
first_name = "John"
last_name = "Doe"

# 字符串拼接
full_name = first_name + " " + last_name
print(full_name)  # 输出：John Doe

# f 字符串（Python 3.6+）
message = f"Hello, {full_name}!"
print(message)  # 输出：Hello, John Doe!

# 字符串方法
name = "python programming"
print(name.title())    # 首字母大写：Python Programming
print(name.upper())    # 全部大写：PYTHON PROGRAMMING
print(name.lower())    # 全部小写：python programming

# 删除空白
text = "  Hello  "
print(text.strip())   # 删除两端空白："Hello"
print(text.lstrip())  # 删除左端空白
print(text.rstrip())  # 删除右端空白</code></pre>

      <h4 id="numbers">2.3 数字</h4>
      <pre><code class="language-python"># 整数
age = 25
count = -10

# 浮点数
pi = 3.14159
price = 19.99

# 基本运算
a = 10
b = 3

print(a + b)  # 加法：13
print(a - b)  # 减法：7
print(a * b)  # 乘法：30
print(a / b)  # 除法：3.3333...
print(a // b) # 整除：3
print(a % b)  # 取余：1
print(a ** b) # 幂运算：1000

# 多重赋值
x, y, z = 1, 2, 3
print(x, y, z)  # 输出：1 2 3

# 常量（Python 没有真正的常量，约定使用大写）
PI = 3.14159
MAX_SIZE = 100</code></pre>

      <h3 id="list">第 3 章：列表简介</h3>
      
      <h4 id="list-basics">3.1 创建和访问列表</h4>
      <p>列表是 Python 中最基本的数据结构，用于存储有序的元素集合。</p>
      
      <pre><code class="language-python"># 创建列表
fruits = ['apple', 'banana', 'orange', 'grape']
numbers = [1, 2, 3, 4, 5]
mixed = [1, 'hello', 3.14, True]

# 访问列表元素
print(fruits[0])     # 第一个元素：apple
print(fruits[1])     # 第二个元素：banana
print(fruits[-1])    # 最后一个元素：grape
print(fruits[-2])    # 倒数第二个元素：orange

# 修改列表元素
fruits[0] = 'pear'
print(fruits)  # ['pear', 'banana', 'orange', 'grape']

# 添加元素
fruits.append('watermelon')  # 末尾添加
fruits.insert(1, 'peach')    # 指定位置插入
print(fruits)  # ['pear', 'peach', 'banana', 'orange', 'grape', 'watermelon']

# 删除元素
del fruits[0]           # 删除指定位置
removed = fruits.pop()  # 删除末尾元素并返回
fruits.remove('banana') # 删除指定值的元素
print(fruits)</code></pre>

      <h4 id="list-operations">3.2 列表操作</h4>
      <pre><code class="language-python"># 列表切片
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:5])    # [2, 3, 4]
print(numbers[:4])     # [0, 1, 2, 3]
print(numbers[5:])     # [5, 6, 7, 8, 9]
print(numbers[::2])    # [0, 2, 4, 6, 8] 步长为 2
print(numbers[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] 反转列表

# 列表遍历
squares = []
for value in range(1, 11):
    square = value ** 2
    squares.append(square)
print(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# 列表推导式
squares = [value**2 for value in range(1, 11)]
print(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# 列表统计
numbers = [1, 2, 3, 4, 5]
print(len(numbers))  # 长度：5
print(min(numbers))  # 最小值：1
print(max(numbers))  # 最大值：5
print(sum(numbers))  # 总和：15

# 列表排序
cars = ['bmw', 'audi', 'toyota', 'subaru']
cars.sort()              # 永久排序（升序）
cars.sort(reverse=True)  # 永久排序（降序）
sorted(cars)             # 临时排序，不改变原列表
cars.reverse()           # 反转列表</code></pre>

      <h3 id="tuple">第 4 章：元组</h3>
      <pre><code class="language-python"># 元组是不可变的列表
dimensions = (200, 50)
print(dimensions[0])  # 200
print(dimensions[1])  # 50

# 不能修改元组元素
# dimensions[0] = 250  # 会报错！

# 遍历元组
for dimension in dimensions:
    print(dimension)

# 修改元组变量（重新赋值）
dimensions = (400, 100)
print(dimensions)  # (400, 100)</code></pre>

      <h3 id="dict">第 5 章：字典</h3>
      <p>字典是键值对的集合，用于存储相关联的数据。</p>
      
      <pre><code class="language-python"># 创建字典
alien = {
    'color': 'green',
    'points': 5,
    'x_position': 0,
    'y_position': 25
}

# 访问字典元素
print(alien['color'])  # green
print(alien['points']) # 5

# 添加键值对
alien['speed'] = 'medium'

# 修改值
alien['color'] = 'yellow'
alien['points'] = 10

# 删除键值对
del alien['points']

# 遍历字典
for key, value in alien.items():
    print(f"{key}: {value}")

# 遍历所有键
for key in alien.keys():
    print(key)

# 遍历所有值
for value in alien.values():
    print(value)

# 字典推导式
squares = {x: x**2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}</code></pre>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 1</h4>
        <pre><code class="language-text">问题 1：Python 的优势有哪些？
问题 2：列表和元组的区别？
问题 3：如何创建字典？
问题 4：列表推导式的语法？

答案：
1. 语法简洁、易于学习、功能强大、应用广泛、跨平台
2. 列表可变，元组不可变
3. 使用花括号 {}，包含键值对
4. [表达式 for 变量 in 序列]</code></pre>
      </div>

      <h2 id="part2">第二部分：控制结构和函数</h2>
      
      <h3 id="if-statement">第 6 章：if 语句</h3>
      
      <pre><code class="language-python"># 条件测试
age = 18
if age >= 18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")

# 多个条件
age = 15
if age < 4:
    price = 0
elif age < 18:
    price = 25
else:
    price = 40
print(f"Your admission cost is \${price}.")

# 多个 elif 块
age = 66
if age < 4:
    price = 0
elif age < 18:
    price = 25
elif age < 65:
    price = 40
else:  # age >= 65
    price = 20
print(f"Your admission cost is \${price}.")

# 检查特殊元素
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']
for topping in requested_toppings:
    if topping == 'green peppers':
        print("Sorry, we are out of green peppers right now.")
    else:
        print(f"Adding {topping}.")
print("\\nFinished making your pizza!")</code></pre>

      <h3 id="while-loop">第 7 章：while 循环</h3>
      
      <pre><code class="language-python"># 基本 while 循环
current_number = 1
while current_number <= 5:
    print(current_number)
    current_number += 1

# 让用户选择何时退出
prompt = "\\nTell me something, and I will repeat it back to you:"
prompt += "\\nEnter 'quit' to end the program. "
message = ""
while message != 'quit':
    message = input(prompt)
    if message != 'quit':
        print(message)

# 使用标志
active = True
while active:
    message = input(prompt)
    if message == 'quit':
        active = False
    else:
        print(message)

# break 退出循环
while True:
    city = input("Please enter the name of a city you have visited: ")
    if city == 'quit':
        break
    else:
        print(f"I'd love to go to {city}!")

# continue 继续循环
current_number = 0
while current_number < 10:
    current_number += 1
    if current_number % 2 == 0:
        continue
    print(current_number)  # 只打印奇数</code></pre>

      <h3 id="function">第 8 章：函数</h3>
      
      <h4 id="function-basics">8.1 定义和调用函数</h4>
      <pre><code class="language-python"># 定义函数
def greet_user():
    """显示简单的问候语"""
    print("Hello!")

# 调用函数
greet_user()

# 向函数传递信息
def greet_user(username):
    """显示个性化的问候语"""
    print(f"Hello, {username.title()}!")

greet_user('jesse')  # Hello, Jesse!

# 实参和形参
# 形参：函数定义中的参数
# 实参：函数调用时传递的值</code></pre>

      <h4 id="function-arguments">8.2 传递实参</h4>
      <pre><code class="language-python"># 位置实参
def describe_pet(animal_type, pet_name):
    """显示宠物的信息"""
    print(f"I have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")

describe_pet('hamster', 'harry')
describe_pet('dog', 'willie')

# 关键字实参
describe_pet(animal_type='hamster', pet_name='harry')
describe_pet(pet_name='harry', animal_type='hamster')

# 默认值
def describe_pet(pet_name, animal_type='dog'):
    print(f"I have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")

describe_pet(pet_name='willie')           # 使用默认值
describe_pet(pet_name='harry', animal_type='hamster')  # 覆盖默认值

# 返回值
def get_formatted_name(first_name, last_name):
    """返回整洁的姓名"""
    full_name = f"{first_name} {last_name}"
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix')
print(musician)  # Jimi Hendrix

# 返回字典
def build_person(first_name, last_name, age=None):
    """返回一个字典，其中包含有关一个人的信息"""
    person = {'first': first_name, 'last': last_name}
    if age:
        person['age'] = age
    return person

musician = build_person('jimi', 'hendrix', age=27)
print(musician)  # {'first': 'jimi', 'last': 'hendrix', 'age': 27}</code></pre>

      <h4 id="pass-list">8.3 传递列表</h4>
      <pre><code class="language-python"># 在函数中使用列表
def greet_users(names):
    """向列表中的每位用户都发出简单的问候"""
    for name in names:
        msg = f"Hello, {name.title()}!"
        print(msg)

usernames = ['hannah', 'ty', 'margot']
greet_users(usernames)

# 修改列表中的元素
def print_models(unprinted_designs, completed_models):
    """
    模拟打印每个设计，直到没有未打印的设计为止
    打印每个设计后，都将其移到列表 completed_models 中
    """
    while unprinted_designs:
        current_design = unprinted_designs.pop()
        print(f"Printing model: {current_design}")
        completed_models.append(current_design)

def show_completed_models(completed_models):
    """显示打印好的所有模型"""
    print("\\nThe following models have been printed:")
    for completed_model in completed_models:
        print(completed_model)

unprinted_designs = ['phone case', 'robot pendant', 'dodecahedron']
completed_models = []
print_models(unprinted_designs, completed_models)
show_completed_models(completed_models)</code></pre>

      <h4 id="arbitrary-args">8.4 传递任意数量的实参</h4>
      <pre><code class="language-python"># 传递任意数量的实参
def make_pizza(*toppings):
    """打印顾客点的所有配料"""
    print("\\nMaking a pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")

make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')

# 结合使用位置实参和任意数量实参
def make_pizza(size, *toppings):
    """概述要制作的比萨"""
    print(f"\\nMaking a {size}-inch pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")

make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')

# 使用任意数量的关键字实参
def build_profile(first, last, **user_info):
    """创建一个字典，其中包含我们知道的有关用户的一切"""
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info

user_profile = build_profile('albert', 'einstein',
                             location='princeton',
                             field='physics')
print(user_profile)
# {'location': 'princeton', 'field': 'physics', 'first_name': 'albert', 'last_name': 'einstein'}</code></pre>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 2</h4>
        <pre><code class="language-text">问题 1：if-elif-else 结构的作用？
问题 2：while 循环如何退出？
问题 3：位置实参和关键字实参的区别？
问题 4：*args 和 **kwargs 的作用？

答案：
1. 根据多个条件执行不同的代码块
2. 条件为 False、使用 break、或设置标志
3. 位置实参按顺序传递，关键字实参指名道姓
4. *args 接收任意数量的位置实参，**kwargs 接收任意数量的关键字实参</code></pre>
      </div>

      <h2 id="part3">第三部分：高级特性</h2>
      
      <h3 id="file">第 9 章：文件和异常</h3>
      
      <h4 id="read-file">9.1 读取文件</h4>
      <pre><code class="language-python"># 读取整个文件
with open('pi_digits.txt') as file_object:
    contents = file_object.read()
    print(contents)

# 逐行读取
filename = 'pi_digits.txt'
with open(filename) as file_object:
    for line in file_object:
        print(line.rstrip())

# 创建一个包含文件各行内容的列表
with open(filename) as file_object:
    lines = file_object.readlines()

for line in lines:
    print(line.rstrip())</code></pre>

      <h4 id="write-file">9.2 写入文件</h4>
      <pre><code class="language-python"># 写入空文件
filename = 'programming.txt'
with open(filename, 'w') as file_object:
    file_object.write("I love programming.")

# 写入多行
with open(filename, 'w') as file_object:
    file_object.write("I love programming.\\n")
    file_object.write("I love creating new games.\\n")

# 附加到文件
with open(filename, 'a') as file_object:
    file_object.write("I also love working with data.\\n")
    file_object.write("I love creating apps that can run in a browser.\\n")</code></pre>

      <h4 id="exception">9.3 异常处理</h4>
      <pre><code class="language-python"># 处理 ZeroDivisionError 异常
try:
    print(5 / 0)
except ZeroDivisionError:
    print("You can't divide by zero!")

# 使用异常避免程序崩溃
print("Give me two numbers, and I'll divide them.")
print("Enter 'q' to quit.")

while True:
    first_number = input("\\nFirst number: ")
    if first_number == 'q':
        break
    second_number = input("Second number: ")
    if second_number == 'q':
        break
    try:
        answer = int(first_number) / int(second_number)
    except ZeroDivisionError:
        print("You can't divide by 0!")
    else:
        print(answer)

# 处理 FileNotFoundError 异常
filename = 'alice.txt'
try:
    with open(filename, encoding='utf-8') as f:
        contents = f.read()
except FileNotFoundError:
    print(f"Sorry, the file {filename} does not exist.")
else:
    words = contents.split()
    num_words = len(words)
    print(f"The file {filename} has about {num_words} words.")</code></pre>

      <h3 id="class">第 10 章：类</h3>
      
      <h4 id="class-basics">10.1 创建和使用类</h4>
      <pre><code class="language-python"># 创建类
class Dog:
    """一次模拟小狗的简单尝试"""
    
    def __init__(self, name, age):
        """初始化属性 name 和 age"""
        self.name = name
        self.age = age
    
    def sit(self):
        """模拟小狗被命令时蹲下"""
        print(f"{self.name} is now sitting.")
    
    def roll_over(self):
        """模拟小狗被命令时打滚"""
        print(f"{self.name} rolled over!")

# 使用类
my_dog = Dog('Willie', 6)
print(f"My dog's name is {my_dog.name}.")
print(f"My dog is {my_dog.age} years old.")
my_dog.sit()
my_dog.roll_over()

# 创建多个实例
your_dog = Dog('Lucy', 3)
print(f"\\nYour dog's name is {your_dog.name}.")
print(f"Your dog is {your_dog.age} years old.")
your_dog.sit()</code></pre>

      <h4 id="inheritance">10.2 继承</h4>
      <pre><code class="language-python"># 子类的方法 __init__()
class Car:
    """一次模拟汽车的简单尝试"""
    
    def __init__(self, make, model, year):
        """初始化描述汽车的属性"""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        """返回整洁的描述性信息"""
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()
    
    def read_odometer(self):
        """打印一条指出汽车里程的消息"""
        print(f"This car has {self.odometer_reading} miles on it.")
    
    def update_odometer(self, mileage):
        """将里程表读数设置为指定的值"""
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")
    
    def increment_odometer(self, miles):
        """将里程表读数增加指定的量"""
        self.odometer_reading += miles

# 继承
class ElectricCar(Car):
    """电动汽车的独特之处"""
    
    def __init__(self, make, model, year):
        """
        初始化父类的属性
        再初始化电动汽车特有的属性
        """
        super().__init__(make, model, year)
        self.battery_size = 75
    
    def describe_battery(self):
        """打印一条描述电瓶容量的消息"""
        print(f"This car has a {self.battery_size}-kWh battery.")
    
    # 重写父类方法
    def fill_gas_tank(self):
        """电动汽车没有油箱"""
        print("This car doesn't need a gas tank!")

my_tesla = ElectricCar('tesla', 'model s', 2019)
print(my_tesla.get_descriptive_name())
my_tesla.describe_battery()
my_tesla.fill_gas_tank()</code></pre>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 3</h4>
        <pre><code class="language-text">问题 1：with 语句的作用？
问题 2：try-except-else 结构？
问题 3：如何创建类？
问题 4：继承的作用？

答案：
1. 自动管理文件资源，无需手动关闭
2. try 执行代码，except 处理异常，else 在无异常时执行
3. 使用 class 关键字，包含 __init__ 方法和实例方法
4. 子类继承父类的属性和方法，可以添加或重写</code></pre>
      </div>

      <h2 id="part4">第四部分：实践项目</h2>
      
      <h3 id="project1">项目 1：外星人入侵游戏</h3>
      <p>使用 Pygame 开发一个太空射击游戏。</p>
      
      <pre><code class="language-python"># 安装 Pygame
# pip install pygame

# 游戏基本结构
import pygame
from pygame.sprite import Group
from ship import Ship
import game_functions as gf

def run_game():
    # 初始化 pygame、设置和屏幕对象
    pygame.init()
    screen = pygame.display.set_mode((1200, 800))
    pygame.display.set_caption("Alien Invasion")
    
    # 创建一艘飞船
    ship = Ship(screen)
    
    # 创建一个用于存储子弹的编组
    bullets = Group()
    
    # 开始游戏的主循环
    while True:
        gf.check_events(ship, screen, bullets)
        ship.update()
        bullets.update()
        gf.update_screen(screen, ship, bullets)

run_game()</code></pre>

      <h3 id="project2">项目 2：数据可视化</h3>
      <p>使用 Matplotlib 和 Pygal 创建数据的可视化图形。</p>
      
      <pre><code class="language-python"># 安装库
# pip install matplotlib pygal

# 绘制简单的折线图
import matplotlib.pyplot as plt

input_values = [1, 2, 3, 4, 5]
squares = [1, 4, 9, 16, 25]

plt.plot(input_values, squares, linewidth=5)

# 设置图表标题，并给坐标轴加上标签
plt.title("Square Numbers", fontsize=24)
plt.xlabel("Value", fontsize=14)
plt.ylabel("Square of Value", fontsize=14)

# 设置刻度标记的大小
plt.tick_params(axis='both', labelsize=14)

plt.show()

# 绘制散点图
import matplotlib.pyplot as plt

plt.scatter(2, 4, s=200)

# 设置图表标题并给坐标轴加上标签
plt.title("Square Numbers", fontsize=24)
plt.xlabel("Value", fontsize=14)
plt.ylabel("Square of Value", fontsize=14)

# 设置刻度标记
plt.tick_params(axis='both', which='major', labelsize=14)

plt.show()</code></pre>

      <h3 id="project3">项目 3：Web 应用程序</h3>
      <p>使用 Django 创建功能完备的 Web 应用程序。</p>
      
      <pre><code class="language-python"># 安装 Django
# pip install django

# 创建项目
# django-admin startproject learning_log
# cd learning_log
# python manage.py startapp learning_logs

# models.py - 定义数据模型
from django.db import models

class Topic(models.Model):
    """用户学习的主题"""
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        """返回模型的字符串表示"""
        return self.text

class Entry(models.Model):
    """学到的有关某个主题的具体知识"""
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'entries'
    
    def __str__(self):
        """返回模型的字符串表示"""
        return f"{self.text[:50]}..."

# views.py - 视图函数
from django.shortcuts import render
from .models import Topic

def index(request):
    """学习笔记的主页"""
    return render(request, 'learning_logs/index.html')

def topics(request):
    """显示所有的主题"""
    topics = Topic.objects.order_by('date_added')
    context = {'topics': topics}
    return render(request, 'learning_logs/topics.html', context)</code></pre>

      <div class="final-message">
        <h3>🎉 恭喜完成 Python 学习之旅！</h3>
        <p>现在你已经掌握了 Python 编程的核心技能：</p>
        <ul>
          <li><strong>基础语法：</strong>变量、数据类型、列表、字典</li>
          <li><strong>控制结构：</strong>if 语句、while 循环、for 循环</li>
          <li><strong>函数：</strong>定义函数、传递参数、返回值</li>
          <li><strong>高级特性：</strong>文件操作、异常处理、类与继承</li>
          <li><strong>实践项目：</strong>游戏开发、数据可视化、Web 应用</li>
        </ul>
        <p><strong>编程的力量在于：它将你的想法变为现实。</strong></p>
        
        <h4>📚 推荐进一步学习</h4>
        <ul>
          <li>《Python 编程：从入门到实践》- Eric Matthes</li>
          <li>《流畅的 Python》- Luciano Ramalho</li>
          <li>《Python Cookbook》- David Beazley</li>
          <li>官方文档：https://docs.python.org/3/</li>
          <li>实战项目：开发自己的应用</li>
        </ul>
      </div>
    `,category:"教程",readTime:"200 分钟",tags:["Python","编程","入门","实践","完整教程"]},4:{title:"网络是怎样连接的 - 完整指南",content:`
      <h2 id="intro">🌐 网络是怎样连接的 - 完整指南</h2>
      
      <p>本文基于户根勤的经典著作《网络是怎样连接的》，从零开始系统讲解计算机网络的完整工作原理。当你在浏览器中输入网址后，到底发生了什么？这是一次从应用层到物理层的完整网络之旅。</p>
      
      <div class="learning-objectives">
        <h3>📌 学习目标</h3>
        <ul>
          <li>理解网络通信的完整流程</li>
          <li>掌握 TCP/IP 协议栈的层次结构</li>
          <li>学会 DNS 解析的工作原理</li>
          <li>理解数据包如何在网络中传输</li>
          <li>掌握 HTTP 协议的请求响应过程</li>
          <li>建立网络通信的完整认知框架</li>
        </ul>
      </div>

      <div class="journey-overview">
        <h3>🗺️ 网络通信之旅概览</h3>
        <pre><code class="language-text">完整流程：
1. 浏览器生成 HTTP 请求消息
2. 查询 DNS 获取 IP 地址
3. 通过 TCP 建立连接
4. 将数据封装成数据包
5. 通过路由器转发
6. 通过交换机到达服务器
7. 服务器处理请求并响应
8. 浏览器解析并显示网页</code></pre>
      </div>

      <h2 id="part1">第一部分：浏览器中的网络</h2>
      
      <h3 id="browser-basics">第 1 章：浏览器工作原理</h3>
      
      <h4 id="url-structure">1.1 URL 结构详解</h4>
      <p>URL（统一资源定位符）是网页的地址，包含了访问资源所需的全部信息。</p>
      
      <pre><code class="language-text">https://www.example.com:443/path/to/page?name=value#section</code></pre>
      
      <p>URL 各部分含义：</p>
      <ul>
        <li><strong>协议（Protocol）：</strong>https - 告诉浏览器使用什么协议，常见协议有 http, https, ftp, mailto</li>
        <li><strong>域名（Domain）：</strong>www.example.com - 服务器的地址名称，便于人类记忆（相比 IP 地址）</li>
        <li><strong>端口号（Port）：</strong>443 - 指定服务器上的具体服务，默认端口可省略（http:80, https:443）</li>
        <li><strong>路径（Path）：</strong>/path/to/page - 服务器上资源的位置，类似文件系统中的路径</li>
        <li><strong>查询参数（Query）：</strong>?name=value - 传递给服务器的参数，多个参数用&连接：?a=1&b=2</li>
        <li><strong>片段标识符（Fragment）：</strong>#section - 指定页面内的位置，不发送到服务器，仅浏览器使用</li>
      </ul>

      <h4 id="browser-components">1.2 浏览器的组成</h4>
      <p>现代浏览器由多个组件协同工作，每个组件负责不同的功能。</p>
      
      <p><strong>主要组件包括：</strong></p>
      <ul>
        <li><strong>用户界面（User Interface）：</strong>地址栏、书签、前进后退按钮等可见部分</li>
        <li><strong>浏览器引擎（Browser Engine）：</strong>协调 UI 和渲染引擎，管理页面加载流程</li>
        <li><strong>渲染引擎（Rendering Engine）：</strong>解析 HTML、CSS，渲染页面，常见引擎有 WebKit（Safari）、Blink（Chrome、Edge）、Gecko（Firefox）</li>
        <li><strong>JavaScript 引擎：</strong>执行 JavaScript 代码，常见引擎有 V8（Chrome、Node.js）、SpiderMonkey（Firefox）、JavaScriptCore（Safari）</li>
        <li><strong>网络层（Networking）：</strong>处理 HTTP/HTTPS 请求和响应，管理连接和缓存</li>
        <li><strong>数据存储（Data Storage）：</strong>Cooki e、LocalStorage（5-10MB）、SessionStorage、IndexedDB 等本地存储机制</li>
      </ul>

      <h3 id="http-message">第 2 章：HTTP 消息</h3>
      
      <h4 id="http-request">2.1 HTTP 请求消息</h4>
      <p>当你在浏览器输入 URL 并按下回车后，浏览器会生成一个 HTTP 请求消息。</p>
      
      <pre><code class="language-http">GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 ...
Accept: text/html
Accept-Language: zh-CN,zh;q=0.9
Accept-Encoding: gzip, deflate
Connection: keep-alive
Cookie: session_id=abc123

name=zhangsan&age=25</code></pre>
      
      <p><strong>HTTP 请求由以下部分组成：</strong></p>
      <ul>
        <li><strong>请求行：</strong>包含方法（GET/POST/PUT/DELETE 等）、路径和 HTTP 版本</li>
        <li><strong>请求头：</strong>键值对形式，包含 Host（必需）、User-Agent、Accept、Cookie 等信息</li>
        <li><strong>空行：</strong>分隔头部和主体，即使没有请求体也需要</li>
        <li><strong>请求体（可选）：</strong>POST/PUT请求时携带数据，GET 请求通常没有</li>
      </ul>
      
      <p><strong>常用 HTTP 方法：</strong>GET（获取资源）、POST（提交数据）、PUT（更新资源）、DELETE（删除资源）、HEAD（获取响应头）、OPTIONS（获取支持的方法）。</p>

      <h4 id="http-response">2.2 HTTP 响应消息</h4>
      <p>服务器处理请求后，返回 HTTP 响应消息给浏览器。</p>
      
      <pre><code class="language-http">HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1234
Server: nginx/1.18.0
Date: Mon, 01 Jan 2024 00:00:00 GMT
Set-Cookie: session=xyz789
Cache-Control: max-age=3600

&lt;!DOCTYPE html&gt;
&lt;html&gt;...&lt;/html&gt;</code></pre>
      
      <p><strong>HTTP 响应由以下部分组成：</strong></p>
      <ul>
        <li><strong>状态行：</strong>包含 HTTP 版本、状态码和状态描述</li>
        <li><strong>响应头：</strong>包含 Content-Type、Content-Length、Server、Date、Set-Cookie 等信息</li>
        <li><strong>空行：</strong>分隔头部和主体</li>
        <li><strong>响应体：</strong>HTML 文档、JSON 数据、图片二进制数据等</li>
      </ul>
      
      <p><strong>常见 HTTP 状态码：</strong></p>
      <ul>
        <li><strong>2xx 成功：</strong>200 OK（请求成功）、201 Created（资源创建成功）、204 No Content（成功但无内容）</li>
        <li><strong>3xx 重定向：</strong>301 Moved Permanently（永久重定向）、302 Found（临时重定向）、304 Not Modified（未修改，使用缓存）</li>
        <li><strong>4xx 客户端错误：</strong>400 Bad Request（请求格式错误）、401 Unauthorized（未授权）、403 Forbidden（禁止访问）、404 Not Found（资源不存在）、429 Too Many Requests（请求过多）</li>
        <li><strong>5xx 服务器错误：</strong>500 Internal Server Error（服务器内部错误）、502 Bad Gateway（网关错误）、503 Service Unavailable（服务不可用）、504 Gateway Timeout（网关超时）</li>
      </ul>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 1</h4>
        <pre><code class="language-text">问题 1：URL 的各部分分别代表什么？
问题 2：HTTP 请求由哪几部分组成？
问题 3：常见的 HTTP 状态码有哪些？
问题 4：GET 和 POST 请求的区别？

答案：
1. 协议 + 域名 + 端口（可选）+ 路径 + 查询参数（可选）+ 片段（可选）
2. 请求行、请求头、空行、请求体（可选）
3. 200 成功、301 重定向、404 未找到、500 服务器错误等
4. GET 参数在 URL 中，不安全；POST 参数在请求体，相对安全</code></pre>
      </div>

      <h2 id="part2">第二部分：DNS 解析</h2>
      
      <h3 id="dns-intro">第 3 章：DNS 域名系统</h3>
      
      <h4 id="why-dns">3.1 为什么需要 DNS？</h4>
      <p>计算机使用 IP 地址（如 192.168.1.1）进行通信，但人类难以记忆数字地址。DNS 就是为了解决这个问题。</p>
      
      <p><strong>DNS（Domain Name System）的作用：</strong></p>
      <ul>
        <li>域名系统，互联网的"电话簿"</li>
        <li>将域名转换为 IP 地址</li>
        <li>分布式数据库系统</li>
      </ul>
      
      <p><strong>示例：</strong>输入 <code>www.example.com</code>，DNS 解析后得到 <code>93.184.216.34</code>，计算机实际访问的是这个 IP 地址。</p>

      <h4 id="dns-hierarchy">3.2 DNS 层次结构</h4>
      <p>DNS 域名空间采用树状结构组织，从根域名开始，逐级向下划分。</p>
      
      <pre><code class="language-text">                    . （根域）
                   /                   /              .com      .org    .net   .cn  （顶级域 TLD）
            |          |       |      |
         example    linux  example  baidu  （二级域）
            |                    |
          www  mail  ftp        www      （子域/主机）</code></pre>
      
      <p><strong>域名从右向左层级递增：</strong>以 <code>www.example.com.</code> 为例</p>
      <ul>
        <li><strong>根域：</strong>最右边的点（通常省略）</li>
        <li><strong>顶级域（TLD）：</strong>com - 通用顶级域（.com 商业、.org 非营利、.edu 教育、.gov 政府）或国家代码顶级域（.cn 中国、.us 美国、.uk 英国）</li>
        <li><strong>二级域：</strong>example - 注册的域名</li>
        <li><strong>三级域/主机名：</strong>www - 具体的服务器或服务</li>
      </ul>
      
      <p><strong>完整域名（FQDN）：</strong>包含所有层级，以点结尾的绝对域名。</p>

      <h4 id="dns-resolution">3.3 DNS 解析过程（详细）</h4>
      <p>当你在浏览器输入 <code>www.example.com</code> 后，DNS 解析按以下顺序进行：</p>
      
      <ol>
        <li><strong>查询浏览器缓存：</strong>浏览器检查自己的 DNS 缓存，有则直接返回</li>
        <li><strong>查询操作系统缓存：</strong>检查 hosts 文件和系统 DNS 缓存</li>
        <li><strong>查询本地 DNS 服务器：</strong>ISP 提供的 DNS 服务器，进行递归查询</li>
        <li><strong>迭代查询过程：</strong>
          <ul>
            <li>询问根域名服务器 → 返回 .com TLD 服务器地址</li>
            <li>询问 .com TLD 服务器 → 返回 example.com 权威服务器地址</li>
            <li>询问权威域名服务器 → 返回 www.example.com 的 IP 地址</li>
          </ul>
        </li>
        <li><strong>返回结果并缓存：</strong>本地 DNS 将结果返回给客户端，双方都缓存结果（根据 TTL）</li>
      </ol>
      
      <pre><code class="language-text">完整路径：
浏览器 → 操作系统 → 本地 DNS → 根 DNS → TLD DNS → 权威 DNS
         ↑                                        ↓
         └────────── 返回 93.184.216.34 ──────────┘</code></pre>

      <h4 id="dns-record">3.4 DNS 记录类型</h4>
      <p>DNS 使用不同类型的记录来存储各种信息。</p>
      
      <p><strong>常见的 DNS 记录类型：</strong></p>
      <ul>
        <li><strong>A 记录（Address Record）：</strong>域名 → IPv4 地址
          <pre><code class="language-text">示例：www.example.com → 93.184.216.34</code></pre>
        </li>
        <li><strong>AAAA 记录（IPv6 Address）：</strong>域名 → IPv6 地址
          <pre><code class="language-text">示例：www.example.com → 2606:2800:220:1:248:1893:25c8:1946</code></pre>
        </li>
        <li><strong>CNAME 记录（Canonical Name）：</strong>域名 → 别名，用于多个域名指向同一地址
          <pre><code class="language-text">示例：blog.example.com → www.example.com</code></pre>
        </li>
        <li><strong>MX 记录（Mail Exchange）：</strong>邮件服务器地址，优先级数字越小越高
          <pre><code class="language-text">示例：example.com → mail.example.com（优先级：10, 20, 30）</code></pre>
        </li>
        <li><strong>NS 记录（Name Server）：</strong>域名服务器记录，指定由哪个 DNS 服务器解析
          <pre><code class="language-text">示例：example.com → ns1.example.com</code></pre>
        </li>
        <li><strong>TXT 记录（Text Record）：</strong>文本记录，用于域名验证、SPF 反垃圾邮件
          <pre><code class="language-text">示例："v=spf1 include:_spf.google.com ~all"</code></pre>
        </li>
        <li><strong>SOA 记录（Start of Authority）：</strong>授权起始记录，包含域名的管理信息，每个区域必须有且只有一个</li>
        <li><strong>PTR 记录（Pointer Record）：</strong>IP 地址 → 域名，用于反向 DNS 查询</li>
      </ul>
      
      <p><strong>DNS 记录示例（DNS 区域文件）：</strong></p>
      <pre><code class="language-dns">$TTL 86400  ; 默认 TTL：1 天
@   IN  SOA   ns1.example.com. admin.example.com. (
              2024010101  ; 序列号
              3600        ; 刷新时间
              1800        ; 重试时间
              604800      ; 过期时间
              86400       ; 最小 TTL
              )

@       IN  NS    ns1.example.com.
@       IN  NS    ns2.example.com.
@       IN  A     93.184.216.34
www     IN  A     93.184.216.34
mail    IN  A     93.184.216.35
blog    IN  CNAME www.example.com.
@       IN  MX 10 mail.example.com.
@       IN  TXT   "v=spf1 mx -all"</code></pre>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 2</h4>
        <pre><code class="language-text">问题 1：DNS 解析的查询顺序是什么？
问题 2：根域名服务器的作用是什么？
问题 3：A 记录和 CNAME 记录的区别？
问题 4：什么是递归查询和迭代查询？

答案：
1. 浏览器缓存 → 操作系统缓存 → 本地 DNS → 根 DNS → TLD DNS → 权威 DNS
2. 返回顶级域（TLD）服务器的地址
3. A 记录直接指向 IP，CNAME 指向另一个域名
4. 递归查询：DNS 服务器代理客户端完成所有查询
   迭代查询：DNS 服务器返回下一级服务器地址，客户端自己查询</code></pre>
      </div>

      <h2 id="part3">第三部分：TCP/IP 协议栈</h2>
      
      <h3 id="osi-model">第 4 章：网络分层模型</h3>
      
      <h4 id="osi-7-layers">4.1 OSI 七层模型</h4>
      <p>OSI（开放系统互连）参考模型是国际标准化组织（ISO）制定的网络通信模型，共分为七层。</p>
      
      <p><strong>从下到上分别为：</strong></p>
      <ol>
        <li><strong>物理层（Physical）：</strong>电缆、光纤、无线电波，传输原始比特流</li>
        <li><strong>数据链路层（Data Link）：</strong>Ethernet、WiFi、PPP，负责帧传输和错误检测</li>
        <li><strong>网络层（Network）：</strong>IP、ICMP、ARP，负责路由选择和寻址</li>
        <li><strong>传输层（Transport）：</strong>TCP、UDP，负责端到端通信和流量控制</li>
        <li><strong>会话层（Session）：</strong>RPC、SQL、NFS，建立、管理、终止会话</li>
        <li><strong>表示层（Presentation）：</strong>SSL/TLS、JPEG、ASCII，数据格式转换、加密解密</li>
        <li><strong>应用层（Application）：</strong>HTTP、FTP、SMTP、DNS，为应用程序提供网络服务</li>
      </ol>
      
      <p><strong>记忆口诀（从上到下）：</strong>"All People Seem To Need Data Processing"（所有人似乎需要数据处理）</p>

      <h4 id="tcp-ip-4-layers">4.2 TCP/IP 四层模型</h4>
      <p>实际使用的是 TCP/IP 模型，它将 OSI 的七层简化为四层。</p>
      
      <p><strong>从下到上分别为：</strong></p>
      <ol>
        <li><strong>网络接口层：</strong>对应 OSI 的数据链路层和物理层（Ethernet、WiFi、PPP）</li>
        <li><strong>网络层（网际层）：</strong>IP、ICMP、ARP，负责路由和寻址</li>
        <li><strong>传输层：</strong>TCP、UDP，负责端到端通信</li>
        <li><strong>应用层：</strong>对应 OSI 的应用层、表示层、会话层（HTTP、DNS、SMTP、FTP）</li>
      </ol>

      <h3 id="data-encapsulation">第 5 章：数据封装过程</h3>
      
      <h4 id="encapsulation-detail">5.1 发送数据：封装</h4>
      <p>数据从应用层向下传递，每层添加头部信息，这个过程称为封装。</p>
      
      <p><strong>示例：发送 HTTP 请求</strong></p>
      <ol>
        <li><strong>应用层（HTTP 数据）：</strong>生成 HTTP 请求（GET / HTTP/1.1）</li>
        <li><strong>传输层（TCP 段）：</strong>添加 TCP 头部（源端口、目的端口、序列号等）</li>
        <li><strong>网络层（IP 数据包）：</strong>添加 IP 头部（源 IP、目的 IP、TTL 等）</li>
        <li><strong>数据链路层（以太网帧）：</strong>添加以太网头部（源 MAC、目的 MAC、类型）和帧尾（FCS 校验）</li>
        <li><strong>物理层（比特流）：</strong>转换为 01010101... 比特流在物理介质上传输</li>
      </ol>
      
      <p><strong>每层头部包含的信息：</strong></p>
      <ul>
        <li><strong>TCP 头部（20-60 字节）：</strong>源端口（16 位）、目的端口（16 位）、序列号（32 位）、确认号（32 位）、标志位（SYN、ACK、FIN、RST 等）、窗口大小</li>
        <li><strong>IP 头部（20-60 字节）：</strong>版本（4 位）、头部长度（4 位）、服务类型（8 位）、总长度（16 位）、标识/标志/片偏移（分片控制）、TTL（8 位）、协议（8 位，6=TCP, 17=UDP）、头部校验和（16 位）、源 IP 地址（32 位）、目的 IP 地址（32 位）</li>
        <li><strong>以太网头部（14 字节）：</strong>目的 MAC 地址（6 字节）、源 MAC 地址（6 字节）、类型（2 字节）、帧尾 FCS（4 字节，帧校验序列）</li>
      </ul>

      <h4 id="mtu-fragmentation">5.2 MTU 与分片</h4>
      <p><strong>MTU（Maximum Transmission Unit）：</strong>数据链路层一次能传输的最大数据量，以太网 MTU 为 1500 字节。</p>
      
      <p>如果 IP 数据包超过 MTU，需要进行分片：</p>
      
      <pre><code class="language-text">原始数据包（4000 字节）：
┌────────────────────────────────────┐
│ IP 头 (20) │     数据 (3980)      │
└────────────────────────────────────┘
          ↓ 分片（MTU=1500）

分片 1（1500 字节）：
┌────────────────────────────────────┐
│ IP 头 (20) │     数据 (1480)      │
│ 片偏移=0   │ 更多分片=1            │
└────────────────────────────────────┘

分片 2（1500 字节）：
┌────────────────────────────────────┐
│ IP 头 (20) │     数据 (1480)      │
│ 片偏移=185 │ 更多分片=1            │
└────────────────────────────────────┘
   （185 = 1480 ÷ 8）

分片 3（1040 字节）：
┌────────────────────────────────────┐
│ IP 头 (20) │     数据 (1020)      │
│ 片偏移=370 │ 更多分片=0            │
└────────────────────────────────────┘</code></pre>
      
      <p><strong>重组：</strong>在目的主机进行，根据标识、片偏移重组原始数据。</p>

      <h3 id="tcp-connection">第 6 章：TCP 连接管理</h3>
      
      <h4 id="three-way-handshake">6.1 三次握手建立连接</h4>
      <p>TCP 是面向连接的协议，传输数据前必须先建立连接。</p>
      
      <pre><code class="language-text">三次握手过程：

客户端（Client）                    服务器（Server）
    │                                    │
    │   1. SYN=1, seq=x                  │
    │   （我想和你建立连接）              │
    │  ─────────────────────────────────>│
    │                                    │
    │   2. SYN=1, ACK=1, seq=y, ack=x+1 │
    │   （好的，我也同意建立连接）         │
    │  <─────────────────────────────────│
    │                                    │
    │   3. ACK=1, seq=x+1, ack=y+1      │
    │   （好的，连接建立成功）            │
    │  ─────────────────────────────────>│
    │                                    │
    │         连接已建立，可以传输数据     │
    │                                    │</code></pre>
      
      <p><strong>详细步骤：</strong></p>
      <ol>
        <li><strong>第一次握手（客户端 → 服务器）：</strong>客户端发送 SYN 包（SYN=1），随机选择初始序列号 seq=x，进入 SYN_SENT 状态</li>
        <li><strong>第二次握手（服务器 → 客户端）：</strong>服务器收到 SYN 包，发送 SYN-ACK 包（SYN=1, ACK=1），自己的初始序列号 seq=y，确认号 ack=x+1，进入 SYN_RCVD 状态</li>
        <li><strong>第三次握手（客户端 → 服务器）：</strong>客户端收到 SYN-ACK 包，发送 ACK 包（ACK=1），序列号 seq=x+1，确认号 ack=y+1，进入 ESTABLISHED 状态，服务器收到后也进入 ESTABLISHED 状态</li>
      </ol>
      
      <p><strong>为什么需要三次握手？</strong>1. 确认双方的发送和接收能力都正常；2. 同步初始序列号（ISN）；3. 防止已失效的连接请求突然到达，造成错误。</p>
      
      <p><strong>序列号的作用：</strong>保证数据按序到达、识别重复的数据包、流量控制。</p>

      <h4 id="four-way-handshake">6.2 四次挥手断开连接</h4>
      <p>TCP 连接是双向的，断开连接需要分别关闭两个方向。</p>
      
      <pre><code class="language-text">四次挥手过程：

客户端（Client）                    服务器（Server）
    │                                    │
    │   1. FIN=1, ACK=1, seq=u          │
    │   （我没有数据要发送了）            │
    │  ─────────────────────────────────>│
    │                                    │
    │   2. ACK=1, seq=v, ack=u+1        │
    │   （好的，我知道了）                │
    │  <─────────────────────────────────│
    │                                    │
    │         （服务器可能还有数据发送）   │
    │         ... 数据传输 ...            │
    │                                    │
    │   3. FIN=1, ACK=1, seq=w, ack=u+1 │
    │   （我也没有数据要发送了）          │
    │  <─────────────────────────────────│
    │                                    │
    │   4. ACK=1, seq=u+1, ack=w+1      │
    │   （好的，再见）                    │
    │  ─────────────────────────────────>│
    │                                    │
    │           连接已断开                │
    │                                    │</code></pre>
      
      <p><strong>详细步骤：</strong></p>
      <ol>
        <li><strong>第一次挥手（客户端 → 服务器）：</strong>客户端发送 FIN 包（FIN=1），确认之前数据的 ACK，序列号 seq=u，进入 FIN_WAIT_1 状态</li>
        <li><strong>第二次挥手（服务器 → 客户端）：</strong>服务器收到 FIN 包，发送 ACK 确认，序列号 seq=v，确认号 ack=u+1，进入 CLOSE_WAIT 状态，客户端收到后进入 FIN_WAIT_2 状态</li>
        <li><strong>第三次挥手（服务器 → 客户端）：</strong>服务器发送完剩余数据后，发送 FIN 包（FIN=1），序列号 seq=w，进入 LAST_ACK 状态</li>
        <li><strong>第四次挥手（客户端 → 服务器）：</strong>客户端收到 FIN 包，发送 ACK 确认，序列号 seq=u+1，确认号 ack=w+1，进入 TIME_WAIT 状态，服务器收到后进入 CLOSED 状态，客户端等待 2MSL 后也进入 CLOSED 状态</li>
      </ol>
      
      <p><strong>为什么需要四次挥手？</strong>TCP 是全双工的，每个方向必须单独关闭。服务器收到 FIN 后，可能还有数据要发送，所以先确认，等数据发送完再发送 FIN。</p>
      
      <p><strong>TIME_WAIT 状态的作用：</strong>1. 确保最后的 ACK 能到达服务器；2. 防止"已失效的连接请求"影响新连接；3. 持续时间：2MSL（最长报文段寿命，通常 MSL=1 分钟，2MSL=2 分钟）。</p>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 3</h4>
        <pre><code class="language-text">问题 1：数据封装的顺序是什么？
问题 2：为什么需要三次握手而不是两次？
问题 3：TIME_WAIT 状态的作用是什么？
问题 4：MTU 是多少？超过 MTU 怎么办？

答案：
1. 应用数据 → TCP 段 → IP 包 → 以太网帧 → 比特流
2. 确认双方收发能力、同步序列号、防止失效连接请求
3. 确保最后的 ACK 到达、防止旧连接影响新连接
4. 以太网 MTU=1500 字节；超过需要分片传输</code></pre>
      </div>

      <h2 id="part4">第四部分：网络传输</h2>
      
      <h3 id="routing">第 7 章：路由与转发</h3>
      
      <h4 id="router-function">7.1 路由器的工作原理</h4>
      <p><strong>路由器的功能：</strong>连接不同的网络、根据 IP 地址转发数据包、选择最佳路径。</p>
      
      <p><strong>路由器转发过程：</strong>数据包到达路由器 → 检查目的 IP 地址 → 查询路由表 → 选择下一跳路由器 → 从相应接口转发 → 目标网络或下一个路由器。</p>
      
      <pre><code class="language-text">路由表结构：
┌──────────────────────────────────────────┐
│ 目的网络    │ 子网掩码    │ 下一跳 │ 接口│
├──────────────────────────────────────────┤
│ 192.168.1.0│255.255.255.0│  -   │ eth0│
│ 10.0.0.0   │255.0.0.0    │192.168.1.1│eth1│
│ 0.0.0.0    │0.0.0.0      │203.0.113.1│eth2│
└──────────────────────────────────────────┘
   ↑
默认路由（匹配所有）</code></pre>
      
      <p><strong>路由匹配规则：</strong></p>
      <ol>
        <li><strong>最长前缀匹配：</strong>选择最具体的路由。示例：目的 IP 192.168.1.100 匹配 192.168.1.0/24（24 位掩码），而不是 192.168.0.0/16</li>
        <li><strong>默认路由：</strong>0.0.0.0/0，当没有其他路由匹配时使用，通常指向 ISP 的路由器</li>
      </ol>
      
      <p><strong>路由协议：</strong></p>
      <ul>
        <li><strong>静态路由：</strong>手动配置，简单稳定，不适合大型网络</li>
        <li><strong>动态路由：</strong>自动学习和更新，适应网络变化，常见协议有 RIP（基于距离向量）、OSPF（基于链路状态）、BGP（路径向量，Internet 使用）</li>
      </ul>

      <h4 id="nat">7.2 NAT（网络地址转换）</h4>
      <p><strong>为什么需要 NAT？</strong>IPv4 地址耗尽、私有网络需要访问公网、节省 IP 地址。</p>
      
      <pre><code class="language-text">NAT 工作原理：

私有网络                    路由器（NAT）                公网
┌──────────┐              ┌──────────┐              ┌──────────┐
│ 电脑 A   │              │          │              │  互联网  │
│192.168.1.2│─────────────>│ 公网 IP   │─────────────>│ 服务器   │
│:5000     │              │203.0.113.1│              │93.184.216│
└──────────┘              │:60000    │              └──────────┘
                          │          │
┌──────────┐              │          │
│ 电脑 B   │              │          │
│192.168.1.3│─────────────>│          │
│:5000     │              │          │
└──────────┘              └──────────┘

NAT 转换表：
┌─────────────────────────────────────────────┐
│ 内部 IP:端口   │ 外部 IP:端口   │  方向     │
├─────────────────────────────────────────────┤
│192.168.1.2:5000│203.0.113.1:60000│ 出站    │
│192.168.1.3:5000│203.0.113.1:60001│ 出站    │
└─────────────────────────────────────────────┘</code></pre>
      
      <p><strong>转换过程：</strong></p>
      <ol>
        <li><strong>出站（内网 → 外网）：</strong>电脑 A 发送 192.168.1.2:5000 → 93.184.216.34:80，NAT 路由器将源地址改为公网 IP，分配新端口 60000，记录到 NAT 表，转发 203.0.113.1:60000 → 93.184.216.34:80</li>
        <li><strong>入站（外网 → 内网）：</strong>服务器响应 93.184.216.34:80 → 203.0.113.1:60000，NAT 路由器查询 NAT 表，找到对应的内网地址，转换 203.0.113.1:60000 → 192.168.1.2:5000，转发到内网</li>
      </ol>
      
      <p><strong>NAT 类型：</strong></p>
      <ul>
        <li><strong>静态 NAT：</strong>一对一映射，内网 IP ↔ 外网 IP</li>
        <li><strong>动态 NAT：</strong>从地址池分配，多对多映射</li>
        <li><strong>PAT（端口地址转换）：</strong>多对一映射，使用端口区分，最常用（家用路由器）</li>
      </ul>

      <h3 id="switch">第 8 章：交换机与局域网</h3>
      
      <h4 id="switch-function">8.1 交换机的工作原理</h4>
      <p><strong>交换机 vs 集线器：</strong></p>
      <ul>
        <li><strong>集线器（Hub）：</strong>物理层设备，广播所有数据到所有端口，所有设备共享带宽，容易产生冲突</li>
        <li><strong>交换机（Switch）：</strong>数据链路层设备，根据 MAC 地址转发，每个端口独立带宽，减少冲突</li>
      </ul>
      
      <p><strong>交换机转发过程：</strong></p>
      <ol>
        <li><strong>学习 MAC 地址：</strong>记录源 MAC 地址和端口，建立 MAC 地址表</li>
        <li><strong>转发数据帧：</strong>查找目的 MAC 地址，从对应端口转发，未知 MAC 则广播</li>
      </ol>
      
      <pre><code class="language-text">MAC 地址表：
┌─────────────────────────────────┐
│   MAC 地址       │   端口       │
├─────────────────────────────────┤
│ AA:BB:CC:01:01:01│  Port 1     │
│ AA:BB:CC:02:02:02│  Port 2     │
│ AA:BB:CC:03:03:03│  Port 3     │
└─────────────────────────────────┘</code></pre>
      
      <p><strong>示例：</strong>电脑 A（Port 1）发送数据给电脑 B（Port 2）</p>
      <ol>
        <li>交换机收到数据帧，源 MAC：AA:BB:CC:01:01:01，目的 MAC：AA:BB:CC:02:02:02</li>
        <li>学习源 MAC：记录 AA:BB:CC:01:01:01 → Port 1</li>
        <li>查找目的 MAC：在 MAC 地址表中找到 AA:BB:CC:02:02:02 → Port 2</li>
        <li>转发：只从 Port 2 转发，其他端口不受影响</li>
      </ol>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 4</h4>
        <pre><code class="language-text">问题 1：路由器的作用是什么？
问题 2：NAT 解决了什么问题？
问题 3：交换机和集线器的区别？
问题 4：MAC 地址表的作用？

答案：
1. 连接不同网络、根据 IP 转发数据包、选择路径
2. IPv4 地址耗尽、私有网络访问公网
3. 交换机基于 MAC 转发、独享带宽；集线器广播、共享带宽
4. 记录 MAC 地址和端口映射，实现精确转发</code></pre>
      </div>

      <h2 id="part5">第五部分：服务器处理</h2>
      
      <h3 id="server-processing">第 9 章：服务器如何处理请求</h3>
      
      <h4 id="server-architecture">9.1 Web 服务器架构</h4>
      <p><strong>典型 Web 服务器架构包含以下组件：</strong></p>
      <ol>
        <li><strong>防火墙：</strong>保护服务器安全，过滤恶意流量</li>
        <li><strong>负载均衡器：</strong>分发请求到多台 Web 服务器，提高并发能力和可用性</li>
        <li><strong>Web 服务器集群：</strong>多台 Nginx 服务器并行工作，处理 HTTP 请求</li>
        <li><strong>应用服务器：</strong>执行业务逻辑（Node.js、Java、Python 等）</li>
        <li><strong>数据库：</strong>存储数据（MySQL、PostgreSQL 等）</li>
      </ol>
      
      <pre><code class="language-text">典型 Web 服务器架构：

                    互联网
                      │
                      ↓
              ┌───────────────┐
              │   防火墙       │
              └───────┬───────┘
                      │
              ┌───────────────┐
              │  负载均衡器    │
              │ (Load Balancer)│
              └───────┬───────┘
                      │
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
  ┌──────────┐ ┌──────────┐ ┌──────────┐
  │ Web 服务器 │ │ Web 服务器 │ │ Web 服务器 │
  │  Nginx   │ │  Nginx   │ │  Nginx   │
  └─────┬────┘ └─────┬────┘ └─────┬────┘
        │             │             │
        └─────────────┼─────────────┘
                      │
              ┌───────────────┐
              │  应用服务器    │
              │  (Node.js/   │
              │   Java/      │
              │   Python)    │
              └───────┬───────┘
                      │
              ┌───────────────┐
              │   数据库       │
              │  (MySQL/     │
              │   PostgreSQL)│
              └───────────────┘</code></pre>
      
      <p><strong>请求处理流程：</strong></p>
      <ol>
        <li><strong>DNS 解析：</strong>www.example.com → IP 地址</li>
        <li><strong>到达服务器：</strong>通过防火墙，到达负载均衡器</li>
        <li><strong>负载均衡：</strong>选择一台 Web 服务器，转发请求</li>
        <li><strong>Web 服务器处理：</strong>Nginx 接收 HTTP 请求，静态资源直接返回，动态请求转发给应用服务器</li>
        <li><strong>应用服务器处理：</strong>执行业务逻辑，查询数据库，生成响应</li>
        <li><strong>返回响应：</strong>原路返回，浏览器接收</li>
      </ol>

      <h3 id="complete-journey">第 10 章：完整的网络之旅</h3>
      
      <h4 id="journey-summary">10.1 从输入 URL 到显示网页</h4>
      <p><strong>完整流程总结：</strong></p>
      <ol>
        <li><strong>浏览器解析 URL：</strong>输入 https://www.example.com/index.html，解析出协议（HTTPS）、域名（www.example.com）、路径（/index.html）</li>
        <li><strong>DNS 查询：</strong>浏览器缓存 → 系统缓存 → 本地 DNS → 根 DNS → TLD DNS → 权威 DNS，结果：www.example.com = 93.184.216.34</li>
        <li><strong>建立 TCP 连接（三次握手）：</strong>
          <pre><code class="language-text">客户端                              服务器
SYN=1, seq=x  ─────────────────────>
                <─────────────────────
           SYN=1, ACK=1, seq=y, ack=x+1
ACK=1, seq=x+1, ack=y+1 ────────────>
连接建立</code></pre>
        </li>
        <li><strong>TLS 握手（HTTPS）：</strong>协商加密算法、交换密钥、验证证书</li>
        <li><strong>发送 HTTP 请求：</strong>GET /index.html HTTP/1.1，包含 Host、User-Agent 等请求头</li>
        <li><strong>数据封装：</strong>HTTP 请求 → TCP 段 → IP 包 → 以太网帧 → 比特流</li>
        <li><strong>网络传输：</strong>电脑 → 路由器 → 交换机 → 多个路由器 → 服务器网络</li>
        <li><strong>服务器处理：</strong>防火墙 → 负载均衡 → Web 服务器 → 应用服务器 → 数据库</li>
        <li><strong>返回 HTTP 响应：</strong>HTTP/1.1 200 OK，包含 Content-Type 和 HTML 内容</li>
        <li><strong>浏览器渲染：</strong>解析 HTML 构建 DOM → 解析 CSS 构建 CSSOM → 执行 JavaScript → 布局（Layout）→ 绘制（Paint）→ 显示页面</li>
        <li><strong>断开连接（四次挥手）：</strong>
          <pre><code class="language-text">客户端                              服务器
FIN=1  ────────────────────────────>
                <─────────────────────
           ACK=1
                ...
                <─────────────────────
           FIN=1
ACK=1  ────────────────────────────>
连接断开</code></pre>
        </li>
      </ol>

      <div class="final-message">
        <h3>🎉 恭喜完成网络学习之旅！</h3>
        <p>现在你已经理解了从输入 URL 到网页显示的完整网络过程。这涉及到多个层次的协作：</p>
        <ul>
          <li><strong>应用层：</strong>HTTP 协议、DNS 解析</li>
          <li><strong>传输层：</strong>TCP 连接管理</li>
          <li><strong>网络层：</strong>IP 路由、NAT 转换</li>
          <li><strong>数据链路层：</strong>交换机转发</li>
          <li><strong>物理层：</strong>比特流传输</li>
        </ul>
        <p><strong>网络的力量在于：它连接了全世界的计算机，让信息能够自由流动。</strong></p>
        
        <h4>📚 推荐进一步学习</h4>
        <ul>
          <li>《网络是怎样连接的》- 户根勤</li>
          <li>《计算机网络：自顶向下方法》- James F. Kurose</li>
          <li>《TCP/IP 详解》- W. Richard Stevens</li>
          <li>Wireshark 抓包分析实践</li>
          <li>搭建自己的 Web 服务器</li>
        </ul>
      </div>
    `,category:"教程",readTime:"150 分钟",tags:["网络","TCP/IP","HTTP","DNS","路由器","完整教程"]},3:{title:"编码：隐匿在计算机软件背后的语言",content:`
      <h2 id="intro">📖 编码：隐匿在计算机软件背后的语言 - 完整教程</h2>
      
      <p>本文基于 Charles Petzold 的经典著作《编码：隐匿在计算机软件背后的语言》，从零开始系统讲解编码、二进制、逻辑电路到计算机工作原理的完整知识体系。这不仅是一篇文章，更是一套完整的自学课程，包含详细讲解、实例演示和动手练习。</p>
      
      <div class="learning-objectives">
        <h3>📌 学习目标</h3>
        <ul>
          <li>理解二进制系统及其在计算机中的应用</li>
          <li>掌握逻辑门电路的工作原理</li>
          <li>学会二进制运算和编码方法</li>
          <li>理解计算机硬件如何执行软件指令</li>
          <li>能够解释文字、图像、声音如何转换为二进制</li>
          <li>建立从底层硬件到上层软件的完整认知</li>
        </ul>
      </div>

      <h2 id="part1">第一部分：编码基础</h2>
      
      <h3 id="why-code">第 1 章：为什么要编码？</h3>
      
      <h4 id="communication-need">1.1 人类沟通的需要</h4>
      <p>编码的历史和人类文明一样悠久。当我们说话时，我们将思想编码为声音；当我们写字时，我们将语言编码为符号。</p>
      
      <h5>编码的定义</h5>
      <p><strong>编码（Encoding）</strong>是将信息从一种形式转换为另一种形式的过程，以便于存储、传输或处理。</p>
      
      <pre><code class="language-text">编码过程：
原始信息 → 编码器 → 编码后的信息 → 传输/存储 → 解码器 → 还原信息

示例：
思想 "你好" → 大脑编码 → 声波振动 → 空气传播 → 耳朵接收 → 大脑解码 → 理解 "你好"</code></pre>

      <h4 id="code-types">1.2 常见编码类型</h4>
      <ul>
        <li><strong>自然语言编码：</strong>
          <ul>
            <li>汉语、英语、法语等 spoken languages</li>
            <li>特点：丰富、灵活、有歧义</li>
          </ul>
        </li>
        <li><strong>文字编码：</strong>
          <ul>
            <li>汉字、拉丁字母、阿拉伯数字</li>
            <li>特点：可记录、可传播、永久保存</li>
          </ul>
        </li>
        <li><strong>数字编码：</strong>
          <ul>
            <li>十进制、二进制、十六进制</li>
            <li>特点：精确、可计算、无歧义</li>
          </ul>
        </li>
        <li><strong>密码编码：</strong>
          <ul>
            <li>凯撒密码、摩尔斯电码、现代加密</li>
            <li>特点：保密、安全、需密钥</li>
          </ul>
        </li>
      </ul>

      <h4 id="exercise-1-1">1.3 练习题</h4>
      <pre><code class="language-text">练习 1：列举你日常生活中遇到的 5 种编码方式
提示：交通信号灯、手势、旗语、盲文等

练习 2：尝试用简单的手势编码表达以下信息
- 是/否
- 数字 1-10
- 方向（上下左右）</code></pre>

      <h3 id="binary">第 2 章：二进制——计算机的语言</h3>
      
      <h4 id="number-systems">2.1 数制系统</h4>
      <p>数制是用一组固定的数字和规则来表示数值的方法。</p>
      
      <h5>十进制（Decimal）</h5>
      <pre><code class="language-text">基数：10
数字：0, 1, 2, 3, 4, 5, 6, 7, 8, 9
规则：逢十进一

位值表示法：
365 = 3×10² + 6×10¹ + 5×10⁰
    = 3×100 + 6×10 + 5×1
    = 300 + 60 + 5
    = 365</code></pre>

      <h5>二进制（Binary）</h5>
      <pre><code class="language-text">基数：2
数字：0, 1
规则：逢二进一

位值表示法：
1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰
     = 1×8 + 0×4 + 1×2 + 1×1
     = 8 + 0 + 2 + 1
     = 11（十进制）</code></pre>

      <h4 id="binary-conversion">2.2 进制转换（详细教学）</h4>
      
      <h5>十进制转二进制</h5>
      <p><strong>方法：除 2 取余，逆序排列</strong></p>
      <pre><code class="language-text">示例：将十进制 13 转换为二进制

步骤：
13 ÷ 2 = 6 ... 余 1  ↑
 6 ÷ 2 = 3 ... 余 0  |
 3 ÷ 2 = 1 ... 余 1  | 逆序排列
 1 ÷ 2 = 0 ... 余 1  ↓

结果：13（十进制）= 1101（二进制）

验证：1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13 ✓</code></pre>

      <h5>详细步骤说明</h5>
      <pre><code class="language-text">为什么用除 2 取余法？

原理：
- 二进制的基数是 2
- 每次除以 2，余数就是该位的值（0 或 1）
- 商继续除以 2，得到下一位
- 直到商为 0

计算过程详解（以 25 为例）：

第 1 步：25 ÷ 2 = 12 ... 余 1（最低位，2⁰位）
第 2 步：12 ÷ 2 = 6  ... 余 0（2¹位）
第 3 步：6  ÷ 2 = 3  ... 余 0（2²位）
第 4 步：3  ÷ 2 = 1  ... 余 1（2³位）
第 5 步：1  ÷ 2 = 0  ... 余 1（最高位，2⁴位）

从下往上读取余数：11001
所以：25（十进制）= 11001（二进制）

验证：1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 16 + 8 + 0 + 0 + 1 = 25 ✓</code></pre>

      <h5>二进制转十进制</h5>
      <p><strong>方法：按权展开，相加求和</strong></p>
      <pre><code class="language-text">示例：将二进制 10110 转换为十进制

10110 = 1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰
      = 1×16 + 0×8 + 1×4 + 1×2 + 0×1
      = 16 + 0 + 4 + 2 + 0
      = 22（十进制）</code></pre>

      <h4 id="practice-2-1">2.3 动手练习</h4>
      <pre><code class="language-text">练习 1：将以下十进制数转换为二进制
a) 7    b) 15    c) 23    d) 42    e) 100

练习 2：将以下二进制数转换为十进制
a) 1010    b) 1111    c) 10000    d) 110011

答案：
练习 1：a) 111  b) 1111  c) 10111  d) 101010  e) 1100100
练习 2：a) 10  b) 15  c) 16  d) 51</code></pre>

      <h4 id="why-binary">2.4 为什么计算机使用二进制？</h4>
      <p>计算机使用二进制不是因为数学家喜欢，而是因为物理实现的便利性：</p>
      <ul>
        <li><strong>易于物理表示：</strong>
          <ul>
            <li>开关：开（1）/ 关（0）</li>
            <li>电压：高电平（1）/ 低电平（0）</li>
            <li>磁性：有磁（1）/ 无磁（0）</li>
            <li>光学：亮（1）/ 暗（0）</li>
          </ul>
        </li>
        <li><strong>抗干扰能力强：</strong>
          <ul>
            <li>两个状态差异明显，不易混淆</li>
            <li>噪声影响小，可靠性高</li>
          </ul>
        </li>
        <li><strong>运算规则简单：</strong>
          <ul>
            <li>加法、乘法表只有 4 种组合</li>
            <li>硬件实现简单、成本低</li>
          </ul>
        </li>
        <li><strong>适合逻辑运算：</strong>
          <ul>
            <li>1 和 0 对应真和假</li>
            <li>便于实现逻辑判断</li>
          </ul>
        </li>
      </ul>

      <h3 id="electricity">第 3 章：电与编码</h3>
      
      <h4 id="morse-code-detail">3.1 莫尔斯电码详解</h4>
      <p>莫尔斯电码是最早的电报编码系统，由 Samuel Morse 于 1838 年发明。它使用点和划的组合来表示字母和数字。</p>
      
      <h5>编码规则</h5>
      <pre><code class="language-text">基本单位：
- 点（·）：短信号，持续 1 个时间单位
- 划（—）：长信号，持续 3 个时间单位

时间间隔：
- 字符内点划间隔：1 个时间单位
- 字符间间隔：3 个时间单位
- 单词间间隔：7 个时间单位</code></pre>

      <h5>完整编码表</h5>
      <pre><code class="language-text">字母表：
A: ·—      N: —·      1: ·————
B: —···    O: ———     2: ··———
C: —·—·    P: ·——·    3: ···——
D: —··     Q: ——·—    4: ····—
E: ·       R: ·—·     5: ·····
F: ··—·    S: ···     6: —····
G: ——·     T: —       7: ——···
H: ····    U: ··—     8: ———··
I: ··      V: ···—    9: ————·
J: ·———    W: ·——     0: —————
K: —·—     X: —··—
L: ·—··    Y: —·——
M: ——      Z: ——··

特殊符号：
sos: ··· ——— ···（国际求救信号）</code></pre>

      <h5>动手实验：发送莫尔斯电码</h5>
      <pre><code class="language-text">实验材料：
- 手电筒或手机闪光灯
- 纸和笔

实验步骤：
1. 学习基本字母编码
2. 练习发送你的名字
3. 尝试发送完整单词 "HELLO"
4. 接收并解码同伴发送的消息

示例：HELLO
H: ····
E: ·
L: ·—··
L: ·—··
O: ———

发送：···· · ·—·· ·—·· ———</code></pre>

      <h4 id="circuit-basics">3.2 电路基础</h4>
      
      <h5>电路的组成</h5>
      <pre><code class="language-text">基本电路元件：
1. 电源（Battery）
   - 提供电能
   - 符号：长线为正极（+），短线为负极（-）

2. 导线（Wire）
   - 传导电流
   - 电阻极小

3. 开关（Switch）
   - 控制电路通断
   - 断开：电路开路，无电流
   - 闭合：电路通路，有电流

4. 负载（Load）
   - 消耗电能
   - 如：灯泡、电阻、电机</code></pre>

      <h5>简单电路实验</h5>
      <pre><code class="language-text">实验：用开关控制灯泡

电路图：
电池 (+) ---- 开关 ---- 灯泡 ---- 电池 (-)

工作原理：
- 开关断开：电路不通，灯灭（表示二进制 0）
- 开关闭合：电路导通，灯亮（表示二进制 1）

这就是计算机存储 1 位信息的基本原理！</code></pre>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 1</h4>
        <pre><code class="language-text">问题 1：为什么计算机使用二进制而不是十进制？
问题 2：将十进制数 25 转换为二进制
问题 3：莫尔斯电码中，sos 信号如何表示？
问题 4：电路中开关的作用是什么？

答案：
1. 二进制易于物理实现、抗干扰强、运算简单、适合逻辑运算
2. 25 = 11001（二进制）
3. sos = ··· ——— ···
4. 控制电路的通断，实现 0 和 1 的切换</code></pre>
      </div>

      <h2 id="part2">第二部分：逻辑电路</h2>
      
      <h3 id="logic-gates">第 4 章：逻辑门——构建计算机的基石</h3>
      
      <p>逻辑门是执行基本逻辑运算的电子电路，是数字电路的基本单元。所有复杂的计算机功能都是由简单的逻辑门组合而成的。</p>

      <h4 id="and-gate-detail">4.1 与门（AND Gate）</h4>
      
      <h5>工作原理</h5>
      <pre><code class="language-text">规则：只有当所有输入都为 1 时，输出才为 1
      否则输出为 0

真值表（Truth Table）：
输入 A | 输入 B | 输出 Y
  0    |   0    |   0
  0    |   1    |   0
  1    |   0    |   0
  1    |   1    |   1

逻辑表达式：Y = A · B 或 Y = AB

符号表示：
     A ──┐
         ├── Y
     B ──┘</code></pre>

      <h5>电路实现（详细）</h5>
      <pre><code class="language-text">用开关实现与门：

电源 (+) ---- 开关 A ---- 开关 B ---- 灯泡 ---- 电源 (-)

工作原理详解：

情况 1：A=0, B=0（两个开关都断开）
电流路径：电源 → 开关 A(断开) ✗
结果：无电流，灯泡不亮，输出 Y=0

情况 2：A=0, B=1（A 断开，B 闭合）
电流路径：电源 → 开关 A(断开) ✗
结果：无电流，灯泡不亮，输出 Y=0

情况 3：A=1, B=0（A 闭合，B 断开）
电流路径：电源 → 开关 A(闭合) ✓ → 开关 B(断开) ✗
结果：无电流，灯泡不亮，输出 Y=0

情况 4：A=1, B=1（两个开关都闭合）
电流路径：电源 → 开关 A(闭合) ✓ → 开关 B(闭合) ✓ → 灯泡 ✓
结果：有电流，灯泡亮，输出 Y=1

关键点：
- 两个开关串联
- 电流必须通过所有开关才能到达灯泡
- 任一开关断开，电路就断开</code></pre>

      <h5>用晶体管实现与门</h5>
      <pre><code class="language-text">现代计算机使用晶体管（Transistor）实现逻辑门。

NPN 晶体管与门电路：

        Vcc (+5V)
         |
        [R] 电阻
         |
         +---- Y (输出)
         |
     C1  |   C2
    [T1] |  [T2]  NPN 晶体管
     E1  |   E2
         |
        GND

输入 A 连接 T1 基极
输入 B 连接 T2 基极

工作原理：
- A=0: T1 截止，无电流
- A=1: T1 导通
- B=0: T2 截止，无电流
- B=1: T2 导通
- 只有 T1 和 T2 都导通时，Y 才为低电平

实际应用中，与门通常由多个晶体管组合实现。</code></pre>

      <h5>生活实例</h5>
      <pre><code class="language-text">与门的应用场景：

1. 保险柜的双钥匙系统
   - 需要两把钥匙同时插入并转动
   - 钥匙 A 插入 (1) AND 钥匙 B 插入 (1) = 打开 (1)
   - 任一钥匙缺失 = 无法打开 (0)

2. 汽车启动系统
   - 需要踩下刹车 (1) AND 按下启动按钮 (1)
   - 只踩刹车不按钮 = 不启动 (0)
   - 只按钮不踩刹车 = 不启动 (0)

3. 登录系统
   - 用户名正确 (1) AND 密码正确 (1) = 登录成功 (1)
   - 用户名错误 = 登录失败 (0)
   - 密码错误 = 登录失败 (0)

4. 微波炉安全锁
   - 门关闭 (1) AND 启动按钮按下 (1) = 开始加热 (1)
   - 门打开 = 立即停止 (0)</code></pre>

      <h4 id="or-gate-detail">4.2 或门（OR Gate）</h4>
      
      <h5>工作原理</h5>
      <pre><code class="language-text">规则：只要有一个输入为 1，输出就为 1
      只有所有输入都为 0 时，输出才为 0

真值表：
输入 A | 输入 B | 输出 Y
  0    |   0    |   0
  0    |   1    |   1
  1    |   0    |   1
  1    |   1    |   1

逻辑表达式：Y = A + B</code></pre>

      <h5>电路实现</h5>
      <pre><code class="language-text">用开关实现或门：
         ---- 开关 A ----
电源 ----                ---- 灯泡
         ---- 开关 B ----

- 开关 A 或开关 B 闭合，灯泡就亮
- 只有两个开关都断开，灯泡才不亮</code></pre>

      <h4 id="not-gate-detail">4.3 非门（NOT Gate）</h4>
      
      <h5>工作原理</h5>
      <pre><code class="language-text">规则：输出与输入相反
      输入 0 则输出 1，输入 1 则输出 0

真值表：
输入 A | 输出 Y
  0    |   1
  1    |   0

逻辑表达式：Y = Ā 或 Y = ¬A

别名：反相器（Inverter）</code></pre>

      <h4 id="xor-gate-detail">4.4 异或门（XOR Gate）</h4>
      
      <h5>工作原理</h5>
      <pre><code class="language-text">规则：当两个输入不同时输出 1，相同时输出 0

真值表：
输入 A | 输入 B | 输出 Y
  0    |   0    |   0
  0    |   1    |   1
  1    |   0    |   1
  1    |   1    |   0

逻辑表达式：Y = A ⊕ B

记忆技巧：相同为 0，不同为 1</code></pre>

      <h5>重要应用</h5>
      <pre><code class="language-text">异或门的应用：
1. 二进制加法（半加器）
2. 比较器（判断两个数是否相等）
3. 数据加密
4. 错误检测</code></pre>

      <h4 id="gate-combination">4.5 逻辑门的组合</h4>
      <p>复杂的逻辑功能可以通过组合基本逻辑门来实现。</p>
      
      <h5>组合示例：Y = (A AND B) OR C</h5>
      <pre><code class="language-text">电路结构：
A ----|    |
      | AND |----|    |
B ----|____|    |    |
                 | OR |---- Y
C --------------|____|

真值表：
A | B | C | A·B | Y=(A·B)+C
0 | 0 | 0 |  0  |    0
0 | 0 | 1 |  0  |    1
0 | 1 | 0 |  0  |    0
0 | 1 | 1 |  0  |    1
1 | 0 | 0 |  0  |    0
1 | 0 | 1 |  0  |    1
1 | 1 | 0 |  1  |    1
1 | 1 | 1 |  1  |    1</code></pre>

      <h4 id="exercise-4-1">4.6 动手练习</h4>
      <pre><code class="language-text">练习 1：画出以下逻辑表达式的电路图
a) Y = A AND (B OR C)
b) Y = (A OR B) AND (C OR D)
c) Y = NOT (A AND B)

练习 2：根据真值表设计逻辑电路
A | B | Y
0 | 0 | 1
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1
提示：这是同或门（XNOR）</code></pre>

      <h3 id="binary-addition-detail">第 5 章：二进制加法详解</h3>
      
      <h4 id="binary-add-rules">5.1 二进制加法规则</h4>
      <pre><code class="language-text">基本规则（只有 4 种情况）：
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10  （逢二进一，写 0 进 1）

示例：计算 1011 + 1101

  1011
+ 1101
------
 11000

计算过程（从右到左）：
第 0 位：1 + 1 = 10，写 0 进 1
第 1 位：1 + 0 + 1（进位）= 10，写 0 进 1
第 2 位：0 + 1 + 1（进位）= 10，写 0 进 1
第 3 位：1 + 1 + 1（进位）= 11，写 1 进 1
第 4 位：进位 1

验证：
1011（二进制）= 11（十进制）
1101（二进制）= 13（十进制）
11000（二进制）= 24（十进制）
11 + 13 = 24 ✓</code></pre>

      <h4 id="half-adder-detail">5.2 半加器（Half Adder）</h4>
      
      <p>半加器是最简单的加法电路，用于计算两个 1 位二进制数的和。</p>

      <h5>设计思路</h5>
      <pre><code class="language-text">输入：A, B（两个 1 位二进制数）
输出：Sum（和）, Carry（进位）

分析：
A | B | Sum | Carry
0 | 0 |  0  |   0
0 | 1 |  1  |   0
1 | 0 |  1  |   0
1 | 1 |  0  |   1

观察规律：
- Sum 的规律与 XOR 门相同：Sum = A XOR B
- Carry 的规律与 AND 门相同：Carry = A AND B</code></pre>

      <h5>电路实现</h5>
      <pre><code class="language-text">半加器电路：
A ----|    |
      | XOR |---- Sum
B ----|____|

A ----|    |
      | AND |---- Carry
B ----|____|</code></pre>

      <h5>局限性</h5>
      <pre><code class="language-text">半加器的问题：
- 只考虑两个输入相加
- 没有考虑来自低位的进位
- 不能用于多位加法

解决方案：使用全加器</code></pre>

      <h4 id="full-adder-detail">5.3 全加器（Full Adder）</h4>
      
      <h5>设计思路</h5>
      <pre><code class="language-text">输入：A, B, Cin（A 和 B 是要加的数，Cin 是来自低位的进位）
输出：Sum, Cout（Sum 是和，Cout 是向高位的进位）

真值表：
A | B | Cin | Sum | Cout
0 | 0 |  0  |  0  |  0
0 | 0 |  1  |  1  |  0
0 | 1 |  0  |  1  |  0
0 | 1 |  1  |  0  |  1
1 | 0 |  0  |  1  |  0
1 | 0 |  1  |  0  |  1
1 | 1 |  0  |  0  |  1
1 | 1 |  1  |  1  |  1

逻辑表达式：
Sum = A XOR B XOR Cin
Cout = (A AND B) OR (Cin AND (A XOR B))</code></pre>

      <h5>用半加器构建全加器</h5>
      <pre><code class="language-text">全加器可以用两个半加器和一个或门实现：

        A ----+
              |
        B ----| HA1 |---- Sum1 ----+
              |     |              |
              +-----+              |
                | Carry1           |
                |                  |
        Cin ---+                  |----| OR |---- Cout
                                   |
        Sum1 ----------------------| HA2 |---- Sum
        Cin ----------------------|     |
                                   +-----+
                                     | Carry2</code></pre>

      <h4 id="multi-bit-adder">5.4 多位加法器</h4>
      
      <h5>8 位加法器</h5>
      <pre><code class="language-text">将 8 个全加器级联，形成 8 位加法器：

        A7 B7     A6 B6     A5 B5     A4 B4     A3 B3     A2 B2     A1 B1     A0 B0
         | |       | |       | |       | |       | |       | |       | |       | |
        [FA7]     [FA6]     [FA5]     [FA4]     [FA3]     [FA2]     [FA1]     [FA0]
         | |       | |       | |       | |       | |       | |       | |       | |
Cout7 <--+ +-->Cout6--->Cout5--->Cout4--->Cout3--->Cout2--->Cout1--->Cout0--->Cin=0
         |
       Sum7      Sum6    Sum5    Sum4    Sum3    Sum2    Sum1    Sum0

特点：
- 可以计算两个 8 位二进制数的和
- 进位从低位向高位传递（串行进位）
- 最终结果：S7 S6 S5 S4 S3 S2 S1 S0</code></pre>

      <h5>加法器应用</h5>
      <pre><code class="language-text">示例：计算 25 + 13

25（十进制）= 00011001（二进制）
13（十进制）= 00001101（二进制）

  00011001
+ 00001101
----------
  00100110

00100110（二进制）= 38（十进制）
25 + 13 = 38 ✓</code></pre>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 2</h4>
        <pre><code class="language-text">问题 1：画出与门、或门、非门的真值表
问题 2：用二进制加法计算 1011 + 0111
问题 3：半加器和全加器的区别是什么？
问题 4：为什么需要多个全加器级联？

答案：
1. 与门：全 1 出 1；或门：有 1 出 1；非门：取反
2. 1011 + 0111 = 10010（11 + 7 = 18）
3. 半加器不考虑进位输入，全加器考虑进位输入
4. 实现多位二进制数的加法运算</code></pre>
      </div>

      <h2 id="part3">第三部分：存储与表示</h2>
      
      <h3 id="memory-detail">第 6 章：存储器——记住信息</h3>
      
      <h4 id="flip-flop-detail">6.1 触发器（Flip-Flop）详解</h4>
      
      <p>触发器是一种能够存储 1 位二进制信息的电路，是构建寄存器和内存的基础。</p>

      <h5>RS 触发器（Reset-Set Flip-Flop）</h5>
      <pre><code class="language-text">结构：
- 由两个或非门交叉连接组成
- 两个输入：R（Reset，复位）, S（Set，置位）
- 两个输出：Q, Q'（Q 的反相）

工作原理：
R | S | Q(t+1) | 说明
0 | 0 |  Q(t)  | 保持原状态
0 | 1 |   1    | 置位（Set）
1 | 0 |   0    | 复位（Reset）
1 | 1 |  无效  | 禁止状态

特性：
- 具有两个稳定状态（0 和 1）—— 双稳态电路
- 可以"记住"最后的状态
- 是构建寄存器和内存的基础</code></pre>

      <h5>D 触发器（Data Flip-Flop）</h5>
      <pre><code class="language-text">结构：
- 在 RS 触发器基础上改进
- 一个数据输入：D
- 一个时钟输入：CLK
- 一个输出：Q

工作原理：
- 当时钟信号上升沿到来时
- Q 输出 = D 输入
- 其他时间保持原状态

特点：
- 避免了 RS 触发器的无效状态
- 更可靠，应用更广泛</code></pre>

      <h4 id="register-detail">6.2 寄存器（Register）</h4>
      
      <h5>8 位寄存器</h5>
      <pre><code class="language-text">结构：
由 8 个 D 触发器并行连接组成

数据输入：D7 D6 D5 D4 D3 D2 D1 D0
          |  |  |  |  |  |  |  |
        [DFF][DFF][DFF][DFF][DFF][DFF][DFF][DFF]
          |  |  |  |  |  |  |  |
数据输出：Q7 Q6 Q5 Q4 Q3 Q2 Q1 Q0
          ^  ^  ^  ^  ^  ^  ^  ^
          |  |  |  |  |  |  |  |
        所有触发器共享同一个时钟信号 CLK

功能：
- 存储 8 位二进制数据
- 当时钟上升沿到来时，同时锁存输入数据
- 数据可以长期保持，直到新的时钟信号</code></pre>

      <h5>寄存器的应用</h5>
      <pre><code class="language-text">CPU 中的寄存器：
1. 数据寄存器：存储运算数据
2. 地址寄存器：存储内存地址
3. 指令寄存器：存储当前执行的指令
4. 程序计数器：存储下一条指令地址
5. 状态寄存器：存储运算状态标志

特点：
- 速度极快（与 CPU 同频）
- 容量很小（通常几十字节）
- 价格昂贵（每个寄存器需要多个晶体管）</code></pre>

      <h4 id="ram-detail">6.3 RAM（随机存取存储器）</h4>
      
      <h5>RAM 的结构</h5>
      <pre><code class="language-text">4×4 RAM 示例（16 个存储单元）：

        列地址
        00  01  10  11
      +---+---+---+---+
   00 | 0 | 1 | 2 | 3 |
行     +---+---+---+---+
地  01 | 4 | 5 | 6 | 7 |
址     +---+---+---+---+
   10 | 8 | 9 |10 |11 |
      +---+---+---+---+
   11 |12 |13 |14 |15 |
      +---+---+---+---+

每个单元存储 1 位数据
总容量：16 位 = 2 字节</code></pre>

      <h5>读写操作</h5>
      <pre><code class="language-text">写操作：
1. 设置地址线（选择存储单元）
2. 设置数据线（要写入的数据）
3. 激活写控制信号
4. 数据被存储到选定单元

读操作：
1. 设置地址线（选择存储单元）
2. 激活读控制信号
3. 数据从选定单元输出到数据线</code></pre>

      <h5>RAM 的特点</h5>
      <pre><code class="language-text">优点：
- 读写速度快
- 可随机访问任意地址
- 可反复擦写

缺点：
- 断电数据丢失（易失性）
- 需要持续供电保持数据

类型：
- SRAM（静态 RAM）：速度快，用于缓存
- DRAM（动态 RAM）：容量大，用于主内存</code></pre>

      <h3 id="data-representation">第 7 章：信息的二进制表示</h3>
      
      <h4 id="text-encoding-detail">7.1 文本编码详解</h4>
      
      <h5>ASCII 码（美国信息交换标准代码）</h5>
      <pre><code class="language-text">基本信息：
- 制定时间：1963 年
- 位数：7 位（0-127）
- 扩展：8 位（0-255），称为扩展 ASCII

编码表（部分）：
0-31:   控制字符（换行、回车等）
32:     空格
48-57:  数字 0-9
65-90:  大写字母 A-Z
97-122: 小写字母 a-z

示例计算：
字母 'A' 的 ASCII 码是 65
65（十进制）= 01000001（二进制）
所以 'A' 在计算机中存储为：01000001

字母 'a' 的 ASCII 码是 97
97（十进制）= 01100001（二进制）
大小写相差 32（2⁵）</code></pre>

      <h5>ASCII 编码练习</h5>
      <pre><code class="language-text">练习 1：将字符串 "Hi" 编码为二进制
H = 72 = 01001000
i = 105 = 01101001
结果：01001000 01101001

练习 2：解码二进制字符串
01001000 01100101 01101100 01101100 01101111
= 72     101      108      108      111
= H      e        l        l        o
= "Hello"

练习 3：计算字符串长度
"Hello" = 5 个字符 = 5 字节 = 40 位
每个字符 8 位（1 字节）

练习 4：中英文对比
英文 "Hi" = 2 字符 = 2 字节
中文 "你好"：
- UTF-8：6 字节（每个汉字 3 字节）
- UTF-16：4 字节（每个汉字 2 字节）
- GBK：4 字节（每个汉字 2 字节）</code></pre>

      <h5>ASCII 码的实际应用</h5>
      <pre><code class="language-text">1. 文件存储
   - 文本文件（.txt）直接存储 ASCII 码
   - 示例："ABC" 存储为：01000001 01000010 01000011

2. 网络传输
   - HTTP 协议头部使用 ASCII 编码
   - 示例：GET /index.html

3. 编程语言
   - 源代码文件使用 ASCII/UTF-8 编码
   - 字符串常量在内存中存储为 ASCII 码

4. 数据校验
   - 校验和计算基于 ASCII 值
   - 示例：计算 "ABC" 的校验和
     65 + 66 + 67 = 198

5. 大小写转换
   - 大写 A(65) 转小写 a(97)：+32
   - 小写转大写：-32
   - 原理：二进制第 6 位不同
     A: 01000001
     a: 01100001
            ↑ 第 6 位</code></pre>

      <h5>Unicode 编码</h5>
      <pre><code class="language-text">Unicode 的产生：
- ASCII 只能表示 128 个字符
- 无法表示中文、日文、阿拉伯文等
- Unicode 应运而生，包含世界上所有字符

Unicode 特点：
- 字符集：包含 14 万多个字符
- 编码方式：UTF-8, UTF-16, UTF-32
- 向后兼容 ASCII

UTF-8 编码规则：
- 1 字节：U+0000 到 U+007F（ASCII 字符）
- 2 字节：U+0080 到 U+07FF
- 3 字节：U+0800 到 U+FFFF
- 4 字节：U+10000 到 U+10FFFF

示例：
中 = U+4E2D
UTF-8 编码：E4 B8 AD（3 字节）
二进制：11100100 10111000 10101101</code></pre>

      <h4 id="image-encoding-detail">7.2 图像编码详解</h4>
      
      <h5>位图原理</h5>
      <pre><code class="language-text">位图（Bitmap）基本概念：
- 将图像分解为规则的像素网格
- 每个像素用二进制值表示颜色
- 分辨率：图像的宽度和高度（像素数）

示例：8×8 的黑白图像
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0

存储：每行 8 位 = 1 字节，共 8 字节</code></pre>

      <h5>颜色深度</h5>
      <pre><code class="language-text">1 位色（黑白）：
- 每像素 1 位
- 2 种颜色：0=黑，1=白

8 位色（256 色）：
- 每像素 8 位
- 256 种颜色（0-255）
- 通常使用调色板

24 位色（真彩色）：
- 每像素 24 位
- RGB 各 8 位（256 级）
- 总颜色数：256×256×256 = 16,777,216 种

示例：纯红色
R=255, G=0, B=0
二进制：11111111 00000000 00000000
十六进制：FF 00 00</code></pre>

      <h5>图像文件大小计算</h5>
      <pre><code class="language-text">公式：
文件大小 = 宽度 × 高度 × 颜色深度 ÷ 8（字节）

示例 1：640×480 的黑白图像
= 640 × 480 × 1 ÷ 8
= 38,400 字节 ≈ 37.5 KB

示例 2：1920×1080 的真彩色图像
= 1920 × 1080 × 24 ÷ 8
= 6,220,800 字节 ≈ 5.93 MB</code></pre>

      <h4 id="sound-encoding-detail">7.3 声音编码详解</h4>
      
      <h5>声音数字化过程</h5>
      <pre><code class="language-text">步骤 1：采样（Sampling）
- 按固定频率采集声音波形的振幅值
- 采样率：每秒采样的次数
- 常见采样率：
  * 8 kHz：电话音质
  * 44.1 kHz：CD 音质
  * 48 kHz：专业音频

步骤 2：量化（Quantization）
- 将采样值转换为数字
- 量化精度：每个采样值的位数
- 常见精度：
  * 8 位：256 级
  * 16 位：65,536 级（CD 音质）
  * 24 位：16,777,216 级（专业音质）</code></pre>

      <h5>CD 音质计算</h5>
      <pre><code class="language-text">CD 音质参数：
- 采样率：44.1 kHz = 44,100 次/秒
- 量化精度：16 位
- 声道：立体声（2 声道）

数据率计算：
44,100 × 16 × 2 = 1,411,200 bps
= 1,411,200 ÷ 8 = 176,400 B/s
= 176,400 ÷ 1024 ≈ 172 KB/s
= 172 ÷ 1024 ≈ 0.168 MB/s

一张 CD（74 分钟）容量：
0.168 × 60 × 74 ≈ 746 MB</code></pre>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 3</h4>
        <pre><code class="language-text">问题 1：触发器的作用是什么？
问题 2：8 位寄存器需要多少个触发器？
问题 3：字符串 "CPU" 的 ASCII 编码（二进制）是什么？
问题 4：1920×1080 的 24 位彩色图像有多大？

答案：
1. 存储 1 位二进制信息
2. 8 个触发器
3. C=67=01000011, P=80=01010000, U=85=01010101
4. 1920×1080×24÷8 = 6,220,800 字节 ≈ 5.93 MB</code></pre>
      </div>

      <h2 id="part4">第四部分：从硬件到软件</h2>
      
      <h3 id="cpu-detail">第 8 章：CPU 工作原理完整解析</h3>
      
      <h4 id="cpu-architecture">8.1 CPU 内部结构</h4>
      
      <pre><code class="language-text">CPU 主要组件：

┌─────────────────────────────────────┐
│              CPU                    │
│                                     │
│  ┌──────────────┐  ┌──────────────┐ │
│  │     ALU      │  │   控制器 CU   │ │
│  │  (算术逻辑)  │  │  (指令解码)   │ │
│  └──────┬───────┘  └──────┬───────┘ │
│         │                 │         │
│  ┌──────┴─────────────────┴──────┐ │
│  │         寄存器组              │ │
│  │  PC  IR  ACC  SP  通用寄存器   │ │
│  └───────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘

各部件功能：
1. ALU（算术逻辑单元）
   - 执行算术运算：加、减、乘、除
   - 执行逻辑运算：与、或、非、异或
   - 执行比较运算：大于、小于、等于

2. 控制器（CU）
   - 从内存取指令
   - 解码指令（确定要做什么操作）
   - 产生控制信号（指挥各部件工作）

3. 寄存器组
   - PC（程序计数器）：下一条指令地址
   - IR（指令寄存器）：当前执行的指令
   - ACC（累加器）：存储运算结果
   - SP（堆栈指针）：栈顶地址
   - 通用寄存器：临时存储数据</code></pre>

      <h4 id="instruction-cycle-detail">8.2 指令周期详解</h4>
      
      <pre><code class="language-text">CPU 执行指令的完整过程：

┌──────────────────────────────────────┐
│          指令周期                     │
│                                      │
│    ┌─────────┐                       │
│    │  取指   │                       │
│    │ (Fetch) │                       │
│    └────┬────┘                       │
│         │                            │
│         ↓                            │
│    ┌─────────┐                       │
│    │  译码   │                       │
│    │(Decode) │                       │
│    └────┬────┘                       │
│         │                            │
│         ↓                            │
│    ┌─────────┐                       │
│    │  执行   │                       │
│    │(Execute)│                       │
│    └────┬────┘                       │
│         │                            │
│         ↓                            │
│    ┌─────────┐                       │
│    │  访存   │                       │
│    │ (Memory)│                       │
│    └────┬────┘                       │
│         │                            │
│         ↓                            │
│    ┌─────────┐                       │
│    │  写回   │                       │
│    │(Writeback)                      │
│    └────┬────┘                       │
│         │                            │
│         └──────→ 回到取指             │
└──────────────────────────────────────┘

详细步骤（以 ADD A, B 指令为例）：

1. 取指（Fetch）- 1 个时钟周期
   - PC 输出指令地址到地址总线
   - 内存将该地址的指令送到数据总线
   - CPU 读取指令到 IR（指令寄存器）
   - PC 自动 +1，指向下一条指令
   
   示例：
   PC = 0x1000
   从内存地址 0x1000 读取指令：00000001 (ADD A, B)
   IR ← 00000001
   PC ← 0x1001

2. 译码（Decode）- 1 个时钟周期
   - 控制单元解析 IR 中的指令
   - 识别操作码（Opcode）：00000001 = ADD
   - 识别操作数：寄存器 A 和寄存器 B
   - 产生相应的控制信号
   
   控制信号：
   - 打开寄存器 A 的输出门
   - 打开寄存器 B 的输出门
   - 设置 ALU 为加法模式
   - 准备累加器接收结果

3. 执行（Execute）- 1-3 个时钟周期
   - ALU 从寄存器 A 和 B 读取数据
   - 执行加法运算
   - 结果暂存到累加器（ACC）
   - 更新状态寄存器（标志位）
   
   示例：
   A = 5 (00000101)
   B = 3 (00000011)
   ALU 计算：5 + 3 = 8
   ACC ← 8 (00001000)
   
   状态标志：
   - 零标志（Z）：结果为 0 则置 1
   - 进位标志（C）：有进位则置 1
   - 符号标志（S）：结果为负则置 1
   - 溢出标志（V）：溢出则置 1

4. 访存（Memory）- 0-2 个时钟周期
   - 如果指令需要访问内存（如 LOAD、STORE）
   - 则进行内存读写操作
   - ADD 指令不需要访存，此阶段跳过
   
   示例（如果是 STORE 指令）：
   - 将 ACC 的值写入内存地址
   - 地址由地址寄存器提供

5. 写回（Writeback）- 1 个时钟周期
   - 将结果写回到目标寄存器
   - 更新程序状态字（PSW）
   
   示例：
   - 将 ACC 的值（8）写回寄存器 A
   - A ← 8
   
完成一个指令周期后，立即开始下一个指令周期。</code></pre>

      <h5>时钟周期详解</h5>
      <pre><code class="language-text">什么是一个时钟周期？

时钟信号：
        ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐
    ____│ │_│ │_│ │_│ │_│ │_
        ↑   ↑   ↑   ↑   ↑
       t0  t1  t2  t3  t4

- 每个上升沿（↑）触发一次操作
- 时钟频率：每秒振荡次数
- 3 GHz CPU = 每秒 30 亿个时钟周期

典型指令的时钟周期数：

简单指令（如 ADD、SUB）：
取指 (1) + 译码 (1) + 执行 (1) + 写回 (1) = 4 个周期

复杂指令（如 MUL、DIV）：
取指 (1) + 译码 (1) + 执行 (10-20) + 写回 (1) = 13-23 个周期

内存访问指令（如 LOAD、STORE）：
取指 (1) + 译码 (1) + 执行 (1) + 访存 (2-10) + 写回 (1) = 6-13 个周期

现代 CPU 优化技术：
1. 流水线（Pipeline）
   - 多条指令重叠执行
   - 取指、译码、执行可以同时进行
   - 理想情况下，每个时钟周期完成一条指令

2. 超标量（Superscalar）
   - 多个执行单元并行工作
   - 每个时钟周期执行多条指令

3. 乱序执行（Out-of-Order）
   - 动态调度指令执行顺序
   - 充分利用执行单元</code></pre>

      <h4 id="instruction-set">8.3 指令集架构</h4>
      
      <h5>指令格式</h5>
      <pre><code class="language-text">典型指令格式：

┌─────────┬─────────┬─────────┐
│ 操作码  │ 操作数 1 │ 操作数 2 │
│Opcode   │Operand1 │Operand2 │
└─────────┴─────────┴─────────┘
  8 位      8 位       8 位

示例指令：
10000001 00000001 00000010
│        │          │
│        │          └─ 操作数 2（寄存器 2）
│        └──────────── 操作数 1（寄存器 1）
└────────────────────── 操作码（LOAD 指令）

含义：将寄存器 2 的值加载到寄存器 1</code></pre>

      <h5>常见指令类型</h5>
      <pre><code class="language-text">1. 数据传输指令
   - LOAD：从内存加载到寄存器
   - STORE：从寄存器存储到内存
   - MOVE：寄存器间传送

2. 算术运算指令
   - ADD：加法
   - SUB：减法
   - MUL：乘法
   - DIV：除法

3. 逻辑运算指令
   - AND：与
   - OR：或
   - NOT：非
   - XOR：异或

4. 控制流指令
   - JMP：无条件跳转
   - JZ：为零则跳转
   - JNZ：非零则跳转
   - CALL：调用子程序
   - RET：从子程序返回</code></pre>

      <h3 id="programming-languages">第 9 章：编程语言层次</h3>
      
      <h4 id="machine-language-detail">9.1 机器语言</h4>
      
      <pre><code class="language-text">机器语言特点：
- 由二进制代码（0 和 1）组成
- CPU 直接理解和执行
- 与硬件密切相关
- 难以阅读和编写

示例程序：计算 5 + 3

地址  机器码        汇编           说明
0000  10000001 0101  LOAD A, 5    ; A = 5
0001  10000010 0011  LOAD B, 3    ; B = 3
0010  00000001       ADD A, B     ; A = A + B
0011  10000011 0000  STORE 0, A   ; [0] = A
0100  00000000       HALT         ; 停止

执行过程：
1. CPU 从地址 0000 取指令
2. 执行 LOAD A, 5（将 5 加载到寄存器 A）
3. 从地址 0001 取指令
4. 执行 LOAD B, 3（将 3 加载到寄存器 B）
5. 从地址 0010 取指令
6. 执行 ADD A, B（A = 5 + 3 = 8）
7. 从地址 0011 取指令
8. 执行 STORE 0, A（将结果 8 存储到内存地址 0）
9. 从地址 0100 取指令
10. 执行 HALT（停止）</code></pre>

      <h4 id="assembly-language-detail">9.2 汇编语言</h4>
      
      <pre><code class="language-text">汇编语言特点：
- 使用助记符（Mnemonic）代替二进制操作码
- 使用符号代替地址
- 需要通过汇编器转换为机器语言
- 仍然与硬件密切相关

x86 汇编示例：计算 (5 + 3) × 2

section .data
    result db 0

section .text
    global _start

_start:
    MOV AX, 5      ; 将 5 移动到 AX 寄存器
    MOV BX, 3      ; 将 3 移动到 BX 寄存器
    ADD AX, BX     ; AX = AX + BX (AX = 8)
    MOV BX, 2      ; 将 2 移动到 BX 寄存器
    MUL BX         ; AX = AX × BX (AX = 16)
    MOV [result], AX ; 将结果存储到 result
    MOV EAX, 1     ; 系统调用号（退出）
    XOR EBX, EBX   ; 返回值 0
    INT 0x80       ; 调用内核

汇编过程：
汇编器（Assembler）将汇编代码转换为机器码
NASM、MASM、GAS 是常见的汇编器</code></pre>

      <h4 id="high-level-language-detail">9.3 高级语言</h4>
      
      <pre><code class="language-text">高级语言特点：
- 接近人类自然语言
- 远离硬件细节
- 可移植性好
- 易于学习和使用
- 需要编译或解释为机器语言

Python 示例：计算 (5 + 3) × 2

# 方法 1：直接计算
result = (5 + 3) * 2
print(result)  # 输出：16

# 方法 2：使用变量
a = 5
b = 3
c = 2
result = (a + b) * c
print(result)  # 输出：16

# 方法 3：使用函数
def calculate(x, y, z):
    return (x + y) * z

result = calculate(5, 3, 2)
print(result)  # 输出：16

编译与解释：
- 编译型：C、C++、Go（先编译为机器码，再执行）
- 解释型：Python、JavaScript（边解释边执行）
- 混合型：Java（编译为字节码，JVM 解释执行）</code></pre>

      <h4 id="language-comparison">9.4 语言层次对比</h4>
      <pre><code class="language-text">执行速度：机器语言 > 汇编语言 > 编译型高级语言 > 解释型高级语言
开发效率：解释型高级语言 > 编译型高级语言 > 汇编语言 > 机器语言
可移植性：高级语言 > 汇编语言 > 机器语言
硬件控制：机器语言 > 汇编语言 > 高级语言

选择建议：
- 系统编程（操作系统、驱动）：C、汇编
- 应用开发：Java、Python、JavaScript
- 数据分析：Python、R
- Web 开发：JavaScript、Python、Go
- 嵌入式：C、C++、汇编</code></pre>

      <h3 id="os-detail">第 10 章：操作系统</h3>
      
      <h4 id="os-functions-detail">10.1 操作系统的功能</h4>
      
      <pre><code class="language-text">操作系统是管理计算机硬件和软件资源的系统软件。

核心功能：

1. 进程管理
   - 创建和销毁进程
   - 进程调度（决定哪个进程使用 CPU）
   - 进程间通信
   - 死锁处理

2. 内存管理
   - 分配和回收内存
   - 虚拟内存管理
   - 内存保护

3. 文件系统管理
   - 文件和目录管理
   - 磁盘空间管理
   - 文件访问控制

4. 设备管理
   - 设备驱动
   - I/O 调度
   - 缓冲管理

5. 用户接口
   - 命令行界面（CLI）
   - 图形用户界面（GUI）
   - 系统调用接口</code></pre>

      <h4 id="os-evolution-detail">10.2 操作系统发展史</h4>
      
      <pre><code class="language-text">第一代（1945-1955）：无操作系统
- 直接操作硬件
- 手工插拔线路
- 效率极低

第二代（1955-1965）：批处理系统
- 将作业批量提交
- 自动顺序执行
- 代表：GM-NAA I/O

第三代（1965-1980）：多道程序设计
- 多个程序同时在内存
- CPU 在程序间切换
- 提高利用率
- 代表：IBM OS/360, UNIX

第四代（1980-至今）：个人计算机操作系统
- 图形用户界面
- 多任务处理
- 网络功能
- 代表：MS-DOS, Windows, macOS, Linux

现代操作系统特点：
- 多任务（同时运行多个程序）
- 多用户（多个用户同时使用）
- 多线程（程序内多个执行流）
- 网络化（网络通信和管理）
- 安全性（访问控制和保护）</code></pre>

      <div class="knowledge-check">
        <h4>✅ 知识检查点 4</h4>
        <pre><code class="language-text">问题 1：CPU 执行指令的 5 个步骤是什么？
问题 2：机器语言和汇编语言的区别？
问题 3：操作系统的 5 个主要功能？
问题 4：为什么需要高级语言？

答案：
1. 取指、译码、执行、访存、写回
2. 机器语言是二进制代码，汇编语言使用助记符
3. 进程管理、内存管理、文件管理、设备管理、用户接口
4. 易于学习、开发效率高、可移植性好、远离硬件细节</code></pre>
      </div>

      <h2 id="final">第五部分：综合与实践</h2>
      
      <h3 id="hands-on-labs">第 11 章：动手实验</h3>
      
      <h4 id="lab1">实验 1：用纸板制作逻辑门</h4>
      <pre><code class="language-text">材料准备：
- 硬纸板
- 图钉或按扣
- 金属回形针
- 小灯泡（LED）
- 电池（3V）
- 导线
- 开关

制作与门：
步骤 1：在纸板上画电路图
步骤 2：安装两个开关（串联）
步骤 3：连接电池和 LED
步骤 4：测试四种输入组合
步骤 5：记录输出结果（真值表）

预期结果：
开关 A | 开关 B | LED 状态
  断开   |  断开   |  灭 (0)
  断开   |  闭合   |  灭 (0)
  闭合   |  断开   |  灭 (0)
  闭合   |  闭合   |  亮 (1)</code></pre>

      <h4 id="lab2">实验 2：二进制加法模拟器</h4>
      <pre><code class="language-text">使用在线模拟器：
推荐工具：
1. https://logic.ly/demo/ （逻辑电路模拟）
2. https://www.falstad.com/circuit/ （电路模拟）
3. https://cpu.land/ （CPU 模拟）

实验步骤：
1. 打开 Falstad 电路模拟器
2. 从元件库拖入两个开关（输入 A、B）
3. 添加一个异或门（XOR）
4. 添加一个与门（AND）
5. 连接电路实现半加器
6. 添加 LED 显示 Sum 和 Carry
7. 测试所有输入组合

扩展实验：
- 用两个半加器构建全加器
- 级联 4 个全加器形成 4 位加法器
- 测试：5 + 3 = 8（二进制：0101 + 0011 = 1000）</code></pre>

      <h4 id="lab3">实验 3：编码和解码消息</h4>
      <pre><code class="language-text">任务 1：ASCII 编码
编写程序或手动完成：
- 将你的名字编码为 ASCII 二进制
- 示例：张三
  张：E5 BC A0 (UTF-8)
  三：E4 B8 89 (UTF-8)
  二进制：11100101 10111100 10100000 ...

任务 2：莫尔斯电码
- 用手电筒发送 SOS 信号
- · · · — — — · · ·
- 节奏：滴滴滴 答答答 滴滴滴
  （1 秒 3 短，3 秒 3 长，1 秒 3 短）

任务 3：创建你的编码系统
设计一个 5 位二进制编码：
- 可以表示 2⁵ = 32 个字符
- 包含：26 个字母 + 空格 + 标点
- 示例：A=00001, B=00010, C=00011...</code></pre>

      <h4 id="lab4">实验 4：简单的 CPU 模拟</h4>
      <pre><code class="language-text">使用纸笔模拟 CPU 执行：

假设有一个简化的 CPU：
- 4 个寄存器：A, B, C, PC
- 4 条指令：
  0001: LOAD A, value（加载值到 A）
  0010: LOAD B, value（加载值到 B）
  0011: ADD A, B（A = A + B）
  0100: STORE addr, A（存储 A 到内存）

内存内容：
地址 0000: 0001 0101  ; LOAD A, 5
地址 0001: 0010 0011  ; LOAD B, 3
地址 0002: 0011      ; ADD A, B
地址 0003: 0100 1000  ; STORE 8, A
地址 0004: 0000      ; HALT

执行过程（逐步模拟）：
初始状态：A=0, B=0, PC=0

第 1 周期：
PC=0, 取指令：0001 0101 (LOAD A, 5)
译码：加载 5 到 A
执行：A ← 5
写回：A=5
PC ← 1

第 2 周期：
PC=1, 取指令：0010 0011 (LOAD B, 3)
译码：加载 3 到 B
执行：B ← 3
写回：B=3
PC ← 2

第 3 周期：
PC=2, 取指令：0011 (ADD A, B)
译码：A = A + B
执行：A ← 5 + 3 = 8
写回：A=8
PC ← 3

第 4 周期：
PC=3, 取指令：0100 1000 (STORE 8, A)
译码：存储 A 到地址 8
执行：Memory[8] ← 8
PC ← 4

第 5 周期：
PC=4, 取指令：0000 (HALT)
停止执行

最终结果：
寄存器 A = 8
内存地址 8 = 8</code></pre>

      <h3 id="complete-system">第 12 章：完整的计算机系统</h3>
      
      <h4 id="computer-layers">11.1 计算机层次结构</h4>
      
      <pre><code class="language-text">从下到上的层次：

第 6 层：用户（人）
        ↓ 使用应用程序
第 5 层：应用程序（Word、浏览器等）
        ↓ 调用系统 API
第 4 层：操作系统（Windows、Linux）
        ↓ 管理系统资源
第 3 层：系统软件（编译器、解释器）
        ↓ 转换为机器语言
第 2 层：指令集架构（ISA）
        ↓ 控制硬件
第 1 层：硬件（CPU、内存、I/O）

每一层都建立在下一层之上，
为上一层提供服务。</code></pre>

      <h4 id="from-code-to-execution">11.2 从代码到执行的完整过程</h4>
      
      <pre><code class="language-text">示例：C 语言程序 "Hello World"

源代码（hello.c）：
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}

完整过程：

1. 编写源代码
   - 使用文本编辑器编写 C 代码
   - 保存为 hello.c

2. 预处理
   - 处理 #include 等预处理指令
   - 将 stdio.h 内容插入

3. 编译
   - 词法分析：将代码分解为单词（token）
   - 语法分析：检查语法是否正确
   - 语义分析：检查类型是否匹配
   - 代码生成：生成汇编代码

4. 汇编
   - 汇编器将汇编代码转换为机器码
   - 生成目标文件 hello.o

5. 链接
   - 链接器将多个目标文件链接
   - 添加库函数（printf）
   - 生成可执行文件 hello.exe

6. 加载
   - 操作系统加载程序到内存
   - 分配内存空间
   - 设置程序计数器

7. 执行
   - CPU 从 main 函数开始执行
   - 调用 printf 函数
   - 在屏幕显示 "Hello, World!"
   - 返回 0，程序结束</code></pre>

      <h3 id="summary">📝 完整总结</h3>
      
      <p>恭喜你完成了这本完整的编码教程！让我们回顾一下学到的核心知识：</p>
      
      <h4>第一部分：编码基础</h4>
      <ul>
        <li>✅ 编码是信息的表示和转换</li>
        <li>✅ 二进制是计算机的基础（0 和 1）</li>
        <li>✅ 掌握了十进制和二进制的转换方法</li>
        <li>✅ 理解了莫尔斯电码和电路基础</li>
      </ul>

      <h4>第二部分：逻辑电路</h4>
      <ul>
        <li>✅ 掌握了基本逻辑门（AND、OR、NOT、XOR）</li>
        <li>✅ 学会了二进制加法运算</li>
        <li>✅ 理解了半加器和全加器的原理</li>
        <li>✅ 了解了多位加法器的构建</li>
      </ul>

      <h4>第三部分：存储与表示</h4>
      <ul>
        <li>✅ 触发器可以存储 1 位信息</li>
        <li>✅ 寄存器由多个触发器组成</li>
        <li>✅ RAM 是随机存取存储器</li>
        <li>✅ 文本、图像、声音都可以编码为二进制</li>
      </ul>

      <h4>第四部分：从硬件到软件</h4>
      <ul>
        <li>✅ CPU 通过指令周期执行指令</li>
        <li>✅ 机器语言是二进制指令</li>
        <li>✅ 汇编语言使用助记符</li>
        <li>✅ 高级语言接近人类语言</li>
        <li>✅ 操作系统管理计算机资源</li>
      </ul>

      <h3 id="next-steps">下一步学习建议（详细路线）</h3>
      
      <h4>初级阶段（1-3 个月）</h4>
      <pre><code class="language-text">1. 深入学习一门编程语言
   推荐：Python（入门简单，应用广泛）
   
   学习路线：
   第 1-2 周：基础语法（变量、数据类型、运算符）
   第 3-4 周：控制结构（条件、循环）
   第 5-6 周：函数和模块
   第 7-8 周：面向对象编程
   第 9-12 周：实战项目（小游戏、数据处理）
   
   推荐资源：
   - 书籍：《Python 编程：从入门到实践》
   - 网站：https://www.python.org/
   - 练习：LeetCode 简单题

2. 理解计算机组成
   - 学习数字逻辑电路
   - 了解 CPU 内部结构
   - 学习内存层次结构
   
   推荐资源：
   - 书籍：《计算机组成原理》
   - 课程：Coursera "Computer Architecture"</code></pre>

      <h4>中级阶段（3-6 个月）</h4>
      <pre><code class="language-text">3. 数据结构与算法
   必学内容：
   - 线性结构：数组、链表、栈、队列
   - 树形结构：二叉树、堆、哈希表
   - 图论基础：图的表示、遍历
   - 排序算法：冒泡、选择、插入、快速、归并
   - 查找算法：顺序、二分、哈希
   - 算法思想：递归、分治、贪心、动态规划
   
   推荐资源：
   - 书籍：《算法导论》《算法 4》
   - 网站：LeetCode、牛客网
   - 课程：MIT 6.006 Introduction to Algorithms

4. 操作系统基础
   - 进程和线程管理
   - 内存管理
   - 文件系统
   - 设备管理
   
   推荐资源：
   - 书籍：《深入理解计算机系统》《操作系统导论》
   - 实践：学习 Linux 基本命令</code></pre>

      <h4>高级阶段（6-12 个月）</h4>
      <pre><code class="language-text">5. 计算机网络
   学习内容：
   - OSI 七层模型和 TCP/IP 四层模型
   - HTTP/HTTPS协议
   - TCP/UDP 传输协议
   - IP 地址和路由
   - 网络安全基础
   
   推荐资源：
   - 书籍：《计算机网络：自顶向下方法》
   - 书籍：《TCP/IP 详解》

6. 数据库系统
   - SQL 语言和关系数据库
   - 数据库设计和规范化
   - 索引和查询优化
   - 事务和并发控制
   
   推荐资源：
   - 书籍：《数据库系统概念》
   - 实践：MySQL 或 PostgreSQL

7. 编译原理（可选）
   - 词法分析
   - 语法分析
   - 语义分析
   - 代码生成和优化
   
   推荐资源：
   - 书籍：《编译原理》（龙书）
   - 课程：Stanford CS143</code></pre>

      <h4>实践项目建议</h4>
      <pre><code class="language-text">入门项目：
1. 计算器程序（控制台）
2. 简单文本编辑器
3. 待办事项管理
4. 天气查询工具

进阶项目：
1. 个人博客系统
2. 在线聊天室
3. 简易操作系统（如 xv6）
4. 编译器前端

挑战项目：
1. 实现一个简单的 CPU 模拟器
2. 编写一个玩具操作系统
3. 开发一个 Web 框架
4. 参与开源项目</code></pre>

      <h4 id="learning-resources">推荐学习资源</h4>
      <pre><code class="language-text">经典书籍：
1. 《编码：隐匿在计算机软件背后的语言》- Charles Petzold
   ★★★★★ 入门必读，通俗易懂

2. 《深入理解计算机系统》- Randal E. Bryant
   ★★★★★ CS 基础圣经，强烈推荐

3. 《计算机组成与设计》- David A. Patterson
   ★★★★☆ 硬件基础，详细讲解

4. 《算法导论》- Thomas H. Cormen
   ★★★★☆ 算法经典，难度较大

5. 《代码大全》- Steve McConnell
   ★★★★★ 编程实践，提升代码质量

在线课程：
1. Harvard CS50（计算机科学导论）
   - 网址：https://cs50.harvard.edu/
   - 特点：零基础友好，内容丰富

2. MIT 6.006（算法导论）
   - 网址：https://ocw.mit.edu/
   - 特点：系统学习算法

3. Coursera / edX
   - 网址：https://www.coursera.org/
   - 特点：名校课程，系统学习

实践平台：
1. LeetCode - 算法练习
2. GitHub - 代码托管和开源项目
3. Stack Overflow - 技术问答
4. 掘金 / 知乎 - 技术文章</code></pre>

      <div class="final-message">
        <h3>🎉 恭喜毕业！</h3>
        <p>现在你已经理解了编码的核心概念，明白了计算机如何从简单的开关电路演变为强大的智能设备。记住，计算机并不神秘，它只是由大量简单的元件通过巧妙的组织和编码实现的。</p>
        <p><strong>编码的力量在于：它连接了人类思想与机器执行，是计算机软件背后的隐匿语言。</strong></p>
        <p>继续学习，动手实践，你一定能成为优秀的程序员或工程师！</p>
        
        <h4>💡 最后的建议</h4>
        <ul>
          <li><strong>保持好奇心：</strong>对技术保持热情，不断探索未知</li>
          <li><strong>动手实践：</strong>理论 + 实践 = 真正的理解</li>
          <li><strong>持续学习：</strong>技术更新快，保持学习的习惯</li>
          <li><strong>分享知识：</strong>教是最好的学，写博客、做分享</li>
          <li><strong>建立圈子：</strong>加入技术社区，和同行交流</li>
          <li><strong>坚持 coding：</strong>每天都要写代码，保持手感</li>
        </ul>
        
        <p><em>记住：每个优秀的程序员都是从理解 0 和 1 开始的。你已经迈出了第一步，继续前进吧！</em></p>
      </div>
    `,category:"教程",readTime:"180 分钟",tags:["编码","二进制","计算机基础","编程","硬件","完整教程","实践指南"]},1:{title:"Docker 安装与配置完全指南",content:`
      <h2 id="intro">🐳 Docker 安装与配置完全指南</h2>
      
      <p>Docker 是一个开源的容器化平台，它让开发者可以将应用及其依赖打包到一个轻量级、可移植的容器中。本文将详细介绍 Docker 的安装、配置和使用方法。</p>
      
      <h3 id="what-is-docker">1️⃣ 什么是 Docker？</h3>
      <p>Docker 使用容器化技术，让应用可以在隔离的环境中运行。与虚拟机相比，容器更加轻量级，启动速度更快，资源利用率更高。</p>
      
      <h3 id="windows-install">2️⃣ Windows 系统安装 Docker</h3>
      
      <h4 id="wsl2-requirement">前置要求：WSL 2</h4>
      <p>Docker Desktop 需要 WSL 2（Windows Subsystem for Linux）支持。首先检查并安装 WSL 2：</p>
      
      <pre><code class="language-powershell"># 以管理员身份打开 PowerShell，执行：
wsl --install

# 查看已安装的 WSL 版本
wsl --list --verbose

# 设置 WSL 默认版本为 2
wsl --set-default-version 2</code></pre>

      <h4 id="docker-desktop-install">安装 Docker Desktop</h4>
      <ol>
        <li>访问 <a href="https://www.docker.com/products/docker-desktop" target="_blank">Docker 官网</a> 下载 Docker Desktop</li>
        <li>运行安装程序，按照提示完成安装</li>
        <li>启动 Docker Desktop，等待初始化完成</li>
        <li>在终端验证安装：
        <pre><code class="language-powershell">docker --version
docker compose version</code></pre>
        </li>
      </ol>

      <h3 id="macos-install">3️⃣ macOS 系统安装 Docker</h3>
      
      <h4 id="mac-intel">Intel 芯片 Mac</h4>
      <pre><code class="language-bash"># 使用 Homebrew 安装
brew install --cask docker

# 或者从官网下载 .dmg 文件安装</code></pre>

      <h4 id="mac-apple-silicon">Apple Silicon (M1/M2/M3) Mac</h4>
      <pre><code class="language-bash"># 下载支持 Apple Silicon 的 Docker Desktop 版本
# 官网会自动识别并提供对应版本</code></pre>

      <h3 id="linux-install">4️⃣ Linux 系统安装 Docker</h3>
      
      <h4 id="ubuntu-install">Ubuntu/Debian</h4>
      <pre><code class="language-bash"># 更新包索引
sudo apt-get update

# 安装必要的依赖
sudo apt-get install ca-certificates curl gnupg lsb-release

# 添加 Docker 官方 GPG 密钥
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# 添加 Docker 仓库
echo \\
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装 Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 验证安装
sudo docker run hello-world</code></pre>

      <h4 id="centos-install">CentOS/RHEL</h4>
      <pre><code class="language-bash"># 移除旧版本
sudo yum remove docker docker-common docker-selinux docker-engine

# 安装 yum 工具包
sudo yum install -y yum-utils

# 添加 Docker 仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 安装 Docker
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 启动 Docker
sudo systemctl start docker
sudo systemctl enable docker

# 验证安装
sudo docker run hello-world</code></pre>

      <h3 id="configuration">5️⃣ Docker 配置优化</h3>
      
      <h4 id="mirror-config">配置镜像加速器（中国大陆）</h4>
      <p>编辑 Docker 配置文件 <code>/etc/docker/daemon.json</code>：</p>
      <pre><code class="language-json">{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://registry.docker-cn.com"
  ],
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "bip": "172.18.0.1/24",
  "exec-opts": ["native.cgroupdriver=systemd"],
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ]
}</code></pre>

      <h4 id="restart-docker">重启 Docker 服务</h4>
      <pre><code class="language-bash"># Linux
sudo systemctl daemon-reload
sudo systemctl restart docker

# Windows/Mac
# 在 Docker Desktop 中点击 Restart 按钮</code></pre>

      <h3 id="basic-commands">6️⃣ 常用 Docker 命令</h3>
      
      <h4 id="image-commands">镜像管理</h4>
      <pre><code class="language-bash"># 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx:latest

# 查看本地镜像
docker images

# 删除镜像
docker rmi &lt;image_id&gt;

# 构建镜像
docker build -t myimage:tag .</code></pre>

      <h4 id="container-commands">容器管理</h4>
      <pre><code class="language-bash"># 创建并启动容器
docker run -d -p 8080:80 --name mycontainer nginx

# 查看运行中的容器
docker ps

# 查看所有容器（包括已停止）
docker ps -a

# 停止容器
docker stop &lt;container_id&gt;

# 启动已停止的容器
docker start &lt;container_id&gt;

# 重启容器
docker restart &lt;container_id&gt;

# 删除容器
docker rm &lt;container_id&gt;

# 查看容器日志
docker logs &lt;container_id&gt;

# 进入容器
docker exec -it &lt;container_id&gt; bash</code></pre>

      <h3 id="best-practices">7️⃣ 最佳实践</h3>
      
      <ul>
        <li><strong>使用官方镜像：</strong>优先选择官方维护的镜像，安全性更有保障</li>
        <li><strong>指定版本标签：</strong>避免使用 latest 标签，明确指定版本号</li>
        <li><strong>多阶段构建：</strong>减小最终镜像体积，提高安全性</li>
        <li><strong>清理无用资源：</strong>定期清理停止的容器和悬空镜像
        <pre><code class="language-bash"># 清理所有停止的容器
docker container prune

# 清理悬空镜像
docker image prune

# 清理所有未使用的资源
docker system prune</code></pre>
        </li>
        <li><strong>使用 .dockerignore：</strong>排除不需要的文件，加快构建速度</li>
        <li><strong>限制资源使用：</strong>为容器设置 CPU 和内存限制
        <pre><code class="language-bash">docker run -d --memory="512m" --cpus="1.0" nginx</code></pre>
        </li>
      </ul>

      <h3 id="troubleshooting">8️⃣ 常见问题解决</h3>
      
      <h4 id="permission-error">权限错误（Linux）</h4>
      <pre><code class="language-bash"># 将当前用户添加到 docker 组
sudo usermod -aG docker $USER

# 重新登录或执行
newgrp docker</code></pre>

      <h4 id="wsl-error">WSL 2 相关错误（Windows）</h4>
      <pre><code class="language-powershell"># 更新 WSL
wsl --update

# 重启 WSL
wsl --shutdown

# 在 Docker Desktop 中重新启用 WSL 2 集成</code></pre>

      <h3 id="conclusion">📝 总结</h3>
      <p>通过本文，您已经完成了 Docker 的安装和基础配置。接下来可以：</p>
      <ul>
        <li>学习编写 Dockerfile 创建自定义镜像</li>
        <li>使用 Docker Compose 管理多容器应用</li>
        <li>探索 Docker 网络和数据卷管理</li>
        <li>了解容器编排工具如 Kubernetes</li>
      </ul>
      
      <blockquote>
        "容器化是现代化应用部署的关键技术，Docker 让这一切变得简单。"
      </blockquote>
      
      <p>祝您使用 Docker 愉快！🎉</p>
    `,category:"技术",author:"DRGJU",date:"2024-03-31",readTime:"15 分钟",image:"🐳",tags:["Docker","容器化","DevOps","教程"],views:0},2:{title:"计算机科学导论",content:`
      <h2 id="intro">💻 计算机科学导论</h2>
      
      <p>欢迎来到计算机科学的世界！本教程将全面系统地介绍计算机科学的核心知识，带你从零开始建立完整的计算机科学知识体系。</p>
      
      <blockquote>
        "计算机科学不仅仅是关于计算机，就像天文学不仅仅是关于望远镜一样。" —— Edsger Dijkstra
      </blockquote>

      <h2 id="chapter1">第 1 章：计算机基础</h2>
      
      <h3 id="computer-history">1.1 计算机发展历史</h3>
      <p>计算机的发展经历了四个主要阶段：</p>
      <ul>
        <li><strong>第一代（1946-1957）：</strong>电子管计算机，代表机型 ENIAC</li>
        <li><strong>第二代（1958-1964）：</strong>晶体管计算机，体积大幅缩小</li>
        <li><strong>第三代（1965-1970）：</strong>集成电路计算机，可靠性提高</li>
        <li><strong>第四代（1971 至今）：</strong>大规模集成电路计算机，微型化、智能化</li>
      </ul>

      <h3 id="computer-system">1.2 计算机系统组成</h3>
      <p>一个完整的计算机系统由硬件系统和软件系统两大部分组成：</p>
      
      <h4 id="hardware">硬件系统</h4>
      <p>硬件是计算机的物理组成部分，是看得见、摸得着的实体设备。</p>
      <ul>
        <li><strong>运算器（ALU）：</strong>
          <ul>
            <li>功能：执行算术运算（加减乘除）和逻辑运算（与或非、比较）</li>
            <li>组成：算术逻辑单元（ALU）、累加器、寄存器</li>
            <li>位置：集成在 CPU 中</li>
          </ul>
        </li>
        <li><strong>控制器（CU）：</strong>
          <ul>
            <li>功能：指挥计算机各部件协调工作</li>
            <li>工作流程：取指令 → 分析指令 → 执行指令</li>
            <li>组成：程序计数器（PC）、指令寄存器（IR）、时序发生器</li>
            <li>位置：集成在 CPU 中</li>
          </ul>
        </li>
        <li><strong>中央处理器（CPU）：</strong>
          <ul>
            <li>运算器 + 控制器 = CPU</li>
            <li>计算机的"大脑"，负责执行指令和处理数据</li>
            <li>性能指标：主频（GHz）、核心数、缓存大小</li>
            <li>主流厂商：Intel、AMD、ARM</li>
          </ul>
        </li>
        <li><strong>存储器：</strong>存储程序和数据
          <ul>
            <li><strong>内存（主存储器）：</strong>
              <ul>
                <li>RAM（随机存取存储器）：可读可写，断电数据丢失</li>
                <li>ROM（只读存储器）：只能读，断电数据不丢失</li>
                <li>特点：速度快，容量较小，价格较高</li>
                <li>作用：存放正在运行的程序和数据</li>
              </ul>
            </li>
            <li><strong>外存（辅助存储器）：</strong>
              <ul>
                <li>硬盘（HDD）：机械硬盘，容量大，速度较慢</li>
                <li>固态硬盘（SSD）：速度快，抗震，价格较高</li>
                <li>U 盘、移动硬盘：便携式存储</li>
                <li>特点：速度慢，容量大，价格低，永久存储</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>输入设备：</strong>将外部信息转换为计算机可识别的形式
          <ul>
            <li>键盘：输入字符和命令</li>
            <li>鼠标：图形界面操作</li>
            <li>扫描仪：图像、文档数字化</li>
            <li>麦克风：音频输入</li>
            <li>摄像头：视频输入</li>
            <li>触摸屏：直接触控操作</li>
          </ul>
        </li>
        <li><strong>输出设备：</strong>将计算机处理结果转换为人类可感知的形式
          <ul>
            <li>显示器：显示图像和文字（LCD、LED、OLED）</li>
            <li>打印机：打印文档（激光、喷墨、针式）</li>
            <li>音响/耳机：音频输出</li>
            <li>投影仪：大屏显示</li>
          </ul>
        </li>
      </ul>

      <h4 id="software">软件系统</h4>
      <p>软件是指挥计算机工作的程序和相关数据的总称。</p>
      <ul>
        <li><strong>系统软件：</strong>管理计算机资源，为应用软件提供运行环境
          <ul>
            <li><strong>操作系统（OS）：</strong>
              <ul>
                <li>功能：进程管理、内存管理、文件管理、设备管理</li>
                <li>Windows：微软开发，用户最多，兼容性好</li>
                <li>Linux：开源免费，稳定性高，服务器首选</li>
                <li>macOS：苹果开发，界面美观，创意工作者喜爱</li>
                <li>Unix：早期系统，稳定可靠，用于大型机</li>
                <li>移动操作系统：Android、iOS</li>
              </ul>
            </li>
            <li><strong>设备驱动程序：</strong>
              <ul>
                <li>使操作系统能够识别和使用硬件设备</li>
                <li>显卡驱动、声卡驱动、打印机驱动等</li>
              </ul>
            </li>
            <li><strong>实用工具：</strong>
              <ul>
                <li>系统优化：磁盘清理、注册表清理</li>
                <li>安全防护：杀毒软件、防火墙</li>
                <li>压缩工具：WinRAR、7-Zip</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>应用软件：</strong>为特定应用目的开发的软件
          <ul>
            <li><strong>办公软件：</strong>
              <ul>
                <li>Microsoft Office：Word、Excel、PowerPoint</li>
                <li>WPS Office：国产办公套件</li>
                <li>Google Docs：在线协作文档</li>
              </ul>
            </li>
            <li><strong>浏览器：</strong>
              <ul>
                <li>Chrome：谷歌开发，市场份额第一</li>
                <li>Firefox：Mozilla 开发，开源免费</li>
                <li>Edge：微软开发，基于 Chromium</li>
                <li>Safari：苹果开发，macOS/iOS 默认浏览器</li>
              </ul>
            </li>
            <li><strong>多媒体软件：</strong>
              <ul>
                <li>媒体播放器：VLC、PotPlayer</li>
                <li>图像编辑：Photoshop、GIMP</li>
                <li>视频编辑：Premiere、Final Cut Pro</li>
              </ul>
            </li>
            <li><strong>开发工具：</strong>
              <ul>
                <li>IDE：Visual Studio、IntelliJ IDEA、PyCharm</li>
                <li>代码编辑器：VS Code、Sublime Text</li>
                <li>版本控制：Git、SVN</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="data-representation">1.3 数据在计算机中的表示</h3>
      
      <h4 id="number-systems">数制系统</h4>
      <pre><code class="language-text">二进制（Binary）：0 和 1，计算机内部使用
八进制（Octal）：0-7，早期使用
十进制（Decimal）：0-9，人类习惯
十六进制（Hexadecimal）：0-9,A-F，常用于内存地址表示</code></pre>

      <h4 id="encoding">字符编码</h4>
      <ul>
        <li><strong>ASCII 码：</strong>7 位二进制，表示 128 个字符</li>
        <li><strong>GB2312/GBK：</strong>中文字符编码</li>
        <li><strong>Unicode：</strong>统一码，包含世界上几乎所有字符</li>
        <li><strong>UTF-8：</strong>Unicode 的实现方式，互联网最常用</li>
      </ul>

      <h2 id="chapter2">第 2 章：编程基础</h2>
      
      <h3 id="programming-languages">2.1 编程语言分类</h3>
      
      <h4 id="language-levels">按抽象层次分类</h4>
      <ul>
        <li><strong>机器语言：</strong>二进制代码，计算机直接执行</li>
        <li><strong>汇编语言：</strong>助记符表示，需要汇编器转换</li>
        <li><strong>高级语言：</strong>接近自然语言，需要编译或解释
          <ul>
            <li>编译型：C、C++、Java（先编译后执行）</li>
            <li>解释型：Python、JavaScript（边解释边执行）</li>
          </ul>
        </li>
      </ul>

      <h3 id="basic-concepts">2.2 编程基本概念</h3>
      
      <h4 id="variables">变量与数据类型</h4>
      <pre><code class="language-python"># Python 示例
# 变量声明
name = "Alice"      # 字符串
age = 25            # 整数
height = 1.68       # 浮点数
is_student = False  # 布尔值

# 数据类型
# 数值类型：int, float, complex
# 序列类型：str, list, tuple
# 映射类型：dict
# 集合类型：set</code></pre>

      <h4 id="control-structures">控制结构</h4>
      <pre><code class="language-python"># 条件语句
if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
else:
    grade = 'C'

# 循环语句
# for 循环
for i in range(5):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1

# 循环控制
# break - 跳出循环
# continue - 跳过本次循环
# pass - 占位语句</code></pre>

      <h4 id="functions">函数</h4>
      <pre><code class="language-python"># 函数定义
def greet(name, greeting="Hello"):
    """函数的文档字符串"""
    return f"{greeting}, {name}!"

# 函数调用
message = greet("Alice")
print(message)  # 输出：Hello, Alice!

# 参数类型
# 位置参数
# 默认参数
# 可变参数 (*args, **kwargs)</code></pre>

      <h2 id="chapter3">第 3 章：数据结构</h2>
      
      <h3 id="data-structures-intro">3.1 数据结构概述</h3>
      <p>数据结构是计算机存储、组织数据的方式。选择合适的数据结构可以提高程序的运行效率。</p>

      <h3 id="linear-structures">3.2 线性结构</h3>
      
      <h4 id="array">数组（Array）</h4>
      <p>数组是最基本的数据结构，用于存储相同类型的元素集合。</p>
      <pre><code class="language-python"># 数组特点
# - 连续内存空间
# - 随机访问 O(1)：可通过索引直接访问任意元素
# - 插入/删除 O(n)：需要移动大量元素
# - 大小固定：创建后长度不可变

numbers = [1, 2, 3, 4, 5]
print(numbers[0])  # 访问：1
numbers.append(6)  # 追加（实际创建了新数组）

# 数组操作的时间复杂度
# 访问：O(1)
# 搜索：O(n)
# 插入：O(n)
# 删除：O(n)</code></pre>

      <h4 id="linked-list">链表（Linked List）</h4>
      <p>链表由一系列节点组成，每个节点包含数据域和指针域。</p>
      <pre><code class="language-python">class Node:
    def __init__(self, data):
        self.data = data      # 数据域
        self.next = None      # 指针域

# 链表特点
# - 不连续内存：节点可以分散在内存各处
# - 插入/删除 O(1)：只需修改指针
# - 访问 O(n)：必须从头节点开始遍历
# - 动态大小：可随时添加或删除节点

# 链表类型：
# 1. 单链表：每个节点只有一个 next 指针
# 2. 双链表：每个节点有 next 和 prev 两个指针
# 3. 循环链表：尾节点指向头节点</code></pre>

      <h4 id="stack">栈（Stack）</h4>
      <p>栈是一种"后进先出"（LIFO - Last In First Out）的数据结构。</p>
      <pre><code class="language-python"># 栈：后进先出（LIFO）
stack = []
stack.append(1)  # 入栈（push）
stack.append(2)
stack.append(3)
top = stack.pop()  # 出栈（pop）：3

# 栈的操作
# push(x)：将元素 x 压入栈顶
# pop()：移除并返回栈顶元素
# peek()：返回栈顶元素但不移除
# isEmpty()：判断栈是否为空

# 应用场景：
# 1. 函数调用栈：保存函数调用的上下文
# 2. 表达式求值：中缀表达式转后缀表达式
# 3. 括号匹配：检查括号是否正确配对
# 4. 浏览器后退：保存浏览历史
# 5. 撤销操作：保存操作历史</code></pre>

      <h4 id="queue">队列（Queue）</h4>
      <p>队列是一种"先进先出"（FIFO - First In First Out）的数据结构。</p>
      <pre><code class="language-python">from collections import deque

# 队列：先进先出（FIFO）
queue = deque()
queue.append(1)  # 入队（enqueue）
queue.append(2)
queue.append(3)
front = queue.popleft()  # 出队（dequeue）：1

# 队列的操作
# enqueue(x)：将元素 x 加入队尾
# dequeue()：移除并返回队头元素
# front()：返回队头元素但不移除
# isEmpty()：判断队列是否为空

# 应用场景：
# 1. 任务调度：操作系统中的进程调度
# 2. 消息队列：服务间异步通信
# 3. BFS 算法：图的广度优先搜索
# 4. 打印队列：按顺序处理打印任务
# 5. 缓冲区：数据流缓冲

# 队列变体：
# 1. 双端队列（Deque）：两端都可插入/删除
# 2. 优先队列：按优先级出队
# 3. 循环队列：首尾相连的队列</code></pre>

      <h3 id="tree-structures">3.3 树形结构</h3>
      
      <h4 id="binary-tree">二叉树</h4>
      <pre><code class="language-python">class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# 二叉树遍历
# 前序遍历：根 - 左 - 右
# 中序遍历：左 - 根 - 右
# 后序遍历：左 - 右 - 根
# 层序遍历：按层访问</code></pre>

      <h4 id="bst">二叉搜索树（BST）</h4>
      <p>性质：左子树所有节点 &lt; 根节点 &lt; 右子树所有节点</p>

      <h4 id="heap">堆（Heap）</h4>
      <ul>
        <li>大顶堆：每个节点 ≥ 其子节点</li>
        <li>小顶堆：每个节点 ≤ 其子节点</li>
        <li>应用：优先队列、堆排序</li>
      </ul>

      <h3 id="hash-structure">3.4 哈希表</h3>
      <pre><code class="language-python"># 哈希表：键值对存储
hash_map = {
    "name": "Alice",
    "age": 25,
    "city": "Beijing"
}

# 特点
# - 查找、插入、删除平均 O(1)
# - 哈希冲突解决：链地址法、开放地址法</code></pre>

      <h3 id="graph-structure">3.5 图</h3>
      <pre><code class="language-python"># 图的表示
# 邻接矩阵
# 邻接表

# 图的遍历
# DFS（深度优先搜索）
# BFS（广度优先搜索）

# 应用：社交网络、地图导航、依赖关系</code></pre>

      <h2 id="chapter4">第 4 章：算法基础</h2>
      
      <h3 id="algorithm-intro">4.1 算法概述</h3>
      <p>算法是解决问题的步骤和规则。评价算法的两个重要指标：</p>
      <ul>
        <li><strong>时间复杂度：</strong>算法执行时间的增长趋势</li>
        <li><strong>空间复杂度：</strong>算法占用内存的增长趋势</li>
      </ul>

      <h3 id="complexity">4.2 时间复杂度</h3>
      <pre><code class="language-text">常见时间复杂度（从小到大）：
O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ) &lt; O(n!)

示例：
O(1): 访问数组元素
O(log n): 二分查找
O(n): 线性查找
O(n log n): 快速排序、归并排序
O(n²): 冒泡排序、选择排序
O(2ⁿ): 递归计算斐波那契数列</code></pre>

      <h3 id="sorting-algorithms">4.3 排序算法</h3>
      
      <h4 id="bubble-sort">冒泡排序</h4>
      <pre><code class="language-python">def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# 时间复杂度：O(n²)
# 空间复杂度：O(1)
# 稳定排序</code></pre>

      <h4 id="quick-sort">快速排序</h4>
      <pre><code class="language-python">def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# 时间复杂度：平均 O(n log n)，最坏 O(n²)
# 空间复杂度：O(log n)
# 不稳定排序</code></pre>

      <h4 id="merge-sort">归并排序</h4>
      <pre><code class="language-python">def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# 时间复杂度：O(n log n)
# 空间复杂度：O(n)
# 稳定排序</code></pre>

      <h3 id="search-algorithms">4.4 查找算法</h3>
      
      <h4 id="linear-search">顺序查找</h4>
      <pre><code class="language-python">def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# 时间复杂度：O(n)</code></pre>

      <h4 id="binary-search">二分查找</h4>
      <pre><code class="language-python">def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# 时间复杂度：O(log n)
# 要求：数组必须有序</code></pre>

      <h3 id="algorithm-design">4.5 算法设计思想</h3>
      
      <h4 id="divide-conquer">分治法</h4>
      <p>分治法（Divide and Conquer）的核心思想是"分而治之"，将复杂问题分解为多个相同或相似的子问题。</p>
      <p><strong>三个步骤：</strong></p>
      <ol>
        <li><strong>分解（Divide）：</strong>将原问题分解为若干个规模较小的子问题</li>
        <li><strong>解决（Conquer）：</strong>递归地求解各个子问题。若子问题足够小，则直接求解</li>
        <li><strong>合并（Combine）：</strong>将子问题的解合并成原问题的解</li>
      </ol>
      <p><strong>应用实例：</strong></p>
      <ul>
        <li>归并排序：将数组分成两半，分别排序后合并</li>
        <li>快速排序：选择基准值，将数组分为两部分，递归排序</li>
        <li>二分查找：每次将搜索范围缩小一半</li>
        <li>大整数乘法：将大整数分解为小数相乘</li>
      </ul>

      <h4 id="greedy">贪心算法</h4>
      <p>贪心算法（Greedy Algorithm）在每一步选择中都做出当前看来最好的选择，期望通过局部最优选择得到全局最优解。</p>
      <p><strong>特点：</strong></p>
      <ul>
        <li>不回溯：一旦做出选择，就不会改变</li>
        <li>效率高：通常时间复杂度较低</li>
        <li>不一定最优：只能保证局部最优，不能保证全局最优</li>
      </ul>
      <p><strong>适用条件：</strong></p>
      <ul>
        <li>贪心选择性质：局部最优解能导致全局最优解</li>
        <li>最优子结构：问题的最优解包含子问题的最优解</li>
      </ul>
      <p><strong>应用实例：</strong></p>
      <ul>
        <li>霍夫曼编码：数据压缩算法</li>
        <li>最小生成树：Prim 算法、Kruskal 算法</li>
        <li>背包问题（分数背包）：按单位价值排序</li>
        <li>活动选择问题：选择最多互不冲突的活动</li>
        <li>Dijkstra 算法：单源最短路径</li>
      </ul>

      <h4 id="dp">动态规划</h4>
      <p>动态规划（Dynamic Programming）是将复杂问题分解为重叠子问题，通过保存子问题的解避免重复计算。</p>
      <p><strong>核心思想：</strong></p>
      <ul>
        <li>最优子结构：问题的最优解包含子问题的最优解</li>
        <li>重叠子问题：子问题会被重复计算多次</li>
        <li>状态转移方程：定义状态之间的关系</li>
      </ul>
      <p><strong>解题步骤：</strong></p>
      <ol>
        <li>定义状态：用 dp[i] 或 dp[i][j] 表示子问题的解</li>
        <li>确定状态转移方程：找出状态之间的递推关系</li>
        <li>确定初始条件：边界情况的值</li>
        <li>确定计算顺序：自底向上或自顶向下</li>
        <li>构造最优解：根据 dp 数组反推最优解</li>
      </ol>
      <pre><code class="language-python"># 斐波那契数列 - 动态规划
def fibonacci(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

# 时间复杂度：O(n)
# 空间复杂度：O(n)

# 空间优化版本
def fibonacci_optimized(n):
    if n <= 1:
        return n
    
    prev, curr = 0, 1
    for i in range(2, n + 1):
        prev, curr = curr, prev + curr
    
    return curr

# 时间复杂度：O(n)
# 空间复杂度：O(1)</code></pre>
      <p><strong>经典问题：</strong></p>
      <ul>
        <li>背包问题：0-1 背包、完全背包</li>
        <li>最长公共子序列（LCS）</li>
        <li>最长递增子序列（LIS）</li>
        <li>编辑距离</li>
        <li>硬币找零问题</li>
        <li>最大子数组和</li>
      </ul>

      <h4 id="backtracking">回溯法</h4>
      <p>回溯法（Backtracking）是一种通过探索所有可能的候选解来解决问题的算法。如果发现当前路径不能得到可行解，就回退到上一步，尝试其他路径。</p>
      <p><strong>算法框架：</strong></p>
      <pre><code class="language-python">def backtrack(路径，选择列表):
    if 满足结束条件:
        结果集.append(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径，选择列表)
        撤销选择</code></pre>
      <p><strong>特点：</strong></p>
      <ul>
        <li>系统性：系统地搜索所有可能的解</li>
        <li>跳跃性：发现当前路径不可行时立即回退</li>
        <li>通用性：适用于组合数较大的问题</li>
      </ul>
      <p><strong>应用实例：</strong></p>
      <ul>
        <li>八皇后问题：在 8×8 棋盘上放置 8 个皇后</li>
        <li>数独求解：填充 9×9 的数独棋盘</li>
        <li>全排列：生成所有可能的排列</li>
        <li>组合总和：找出所有和为 target 的组合</li>
        <li>N 皇后问题、图的着色问题、迷宫问题等</li>
      </ul>

      <h4 id="brute-force">暴力枚举</h4>
      <p>暴力法（Brute Force）是最直接的解题方法，尝试所有可能的解，直到找到正确答案。</p>
      <p><strong>特点：</strong></p>
      <ul>
        <li>简单直接：容易理解和实现</li>
        <li>效率低：时间复杂度通常很高</li>
        <li>保证正确：只要存在解，就一定能找到</li>
      </ul>
      <p><strong>适用场景：</strong></p>
      <ul>
        <li>问题规模较小</li>
        <li>作为其他算法的对比基准</li>
        <li>没有更优解法时</li>
      </ul>

      <h2 id="chapter5">第 5 章：操作系统</h2>
      
      <h3 id="os-intro">5.1 操作系统概述</h3>
      <p>操作系统是管理计算机硬件与软件资源的系统软件，主要功能包括：</p>
      <ul>
        <li>进程管理</li>
        <li>内存管理</li>
        <li>文件系统管理</li>
        <li>设备管理</li>
        <li>用户接口</li>
      </ul>

      <h3 id="process-management">5.2 进程管理</h3>
      
      <h4 id="process-thread">进程与线程</h4>
      <p><strong>进程（Process）：</strong></p>
      <ul>
        <li>定义：程序的一次执行过程，是资源分配的基本单位</li>
        <li>特征：
          <ul>
            <li>动态性：进程是程序的执行过程，有生命周期</li>
            <li>并发性：多个进程可以同时存在于内存中</li>
            <li>独立性：进程是系统进行资源分配和调度的独立单位</li>
            <li>异步性：各进程按各自独立的、不可预知的速度向前推进</li>
          </ul>
        </li>
        <li>组成：
          <ul>
            <li>程序段：程序的代码</li>
            <li>数据段：程序运行所需的数据</li>
            <li>PCB（进程控制块）：进程存在的唯一标识，包含进程状态、优先级、寄存器值等</li>
          </ul>
        </li>
      </ul>
      
      <p><strong>线程（Thread）：</strong></p>
      <ul>
        <li>定义：CPU 调度的基本单位，是进程中的一个执行路径</li>
        <li>特征：
          <ul>
            <li>轻型实体：线程基本不拥有系统资源</li>
            <li>独立调度：线程是 CPU 调度和分派的基本单位</li>
            <li>可并发执行：同一进程的多个线程可并发执行</li>
            <li>共享进程资源：同一进程的线程共享进程的资源</li>
          </ul>
        </li>
      </ul>
      
      <p><strong>进程与线程的区别：</strong></p>
      <ul>
        <li>根本区别：进程是资源分配单位，线程是 CPU 调度单位</li>
        <li>开销方面：进程切换开销大，线程切换开销小</li>
        <li>拥有资源：进程拥有系统资源，线程只拥有少量资源</li>
        <li>执行关系：一个进程至少有一个线程，可包含多个线程</li>
        <li>内存空间：进程有独立内存空间，线程共享进程内存</li>
      </ul>

      <h4 id="process-state">进程状态</h4>
      <p><strong>三态模型：</strong></p>
      <pre><code class="language-text">就绪态（Ready）：已具备运行条件，等待分配 CPU
  ↓ ↑
运行态（Running）：已分配 CPU，正在执行
  ↓ ↑
阻塞态（Blocked）：等待某事件发生（如 I/O 完成），暂停执行</code></pre>
      
      <p><strong>五态模型：</strong></p>
      <pre><code class="language-text">新建态（New）：进程正在创建
  ↓
就绪态（Ready）
  ↓ ↑
运行态（Running）
  ↓ ↑
阻塞态（Blocked）
  ↓
终止态（Terminated）：进程正在撤销</code></pre>
      
      <p><strong>状态转换：</strong></p>
      <ul>
        <li>就绪 → 运行：进程被调度，获得 CPU</li>
        <li>运行 → 就绪：时间片用完，或被更高优先级进程抢占</li>
        <li>运行 → 阻塞：请求 I/O、申请缓冲区、等待中断等</li>
        <li>阻塞 → 就绪：I/O 完成、申请资源得到满足</li>
      </ul>

      <h4 id="process-scheduling">进程调度算法</h4>
      <p><strong>调度目标：</strong></p>
      <ul>
        <li>CPU 利用率：保持 CPU 尽可能忙碌</li>
        <li>吞吐量：单位时间内完成的进程数</li>
        <li>周转时间：从进程提交到完成的时间</li>
        <li>等待时间：进程在就绪队列中等待的时间</li>
        <li>响应时间：从提交请求到产生第一次响应的时间</li>
      </ul>
      
      <p><strong>常见调度算法：</strong></p>
      <ul>
        <li><strong>先来先服务（FCFS）：</strong>
          <ul>
            <li>规则：按进程到达的先后顺序进行调度</li>
            <li>优点：简单、公平</li>
            <li>缺点：平均等待时间长，对短进程不利</li>
          </ul>
        </li>
        <li><strong>短作业优先（SJF）：</strong>
          <ul>
            <li>规则：优先调度估计运行时间最短的进程</li>
            <li>优点：平均等待时间最短</li>
            <li>缺点：长进程可能"饿死"，难以准确估计运行时间</li>
          </ul>
        </li>
        <li><strong>时间片轮转（RR）：</strong>
          <ul>
            <li>规则：每个进程分配一个时间片，用完则让出 CPU</li>
            <li>优点：响应快，适合分时系统</li>
            <li>缺点：时间片大小难以确定，进程切换频繁</li>
          </ul>
        </li>
        <li><strong>优先级调度：</strong>
          <ul>
            <li>规则：优先调度优先级高的进程</li>
            <li>分类：静态优先级、动态优先级</li>
            <li>问题：低优先级进程可能"饿死"</li>
          </ul>
        </li>
        <li><strong>多级反馈队列：</strong>
          <ul>
            <li>规则：设置多个就绪队列，每个队列优先级不同</li>
            <li>特点：新进程进入第一队列，时间片用完降级</li>
            <li>优点：综合了各种算法的优点</li>
          </ul>
        </li>
      </ul>

      <h3 id="memory-management">5.3 内存管理</h3>
      
      <h4 id="memory-allocation">内存分配方式</h4>
      <ul>
        <li><strong>连续分配：</strong>
          <ul>
            <li>单一连续分配</li>
            <li>固定分区分配</li>
            <li>动态分区分配</li>
          </ul>
        </li>
        <li><strong>非连续分配：</strong>
          <ul>
            <li>分页存储管理</li>
            <li>分段存储管理</li>
            <li>段页式存储管理</li>
          </ul>
        </li>
      </ul>

      <h4 id="virtual-memory">虚拟内存</h4>
      <p>虚拟内存允许程序使用比实际物理内存更大的地址空间。</p>
      <ul>
        <li><strong>请求分页：</strong>只加载需要的页面到内存</li>
        <li><strong>页面置换算法：</strong>
          <ul>
            <li>OPT（最佳置换）</li>
            <li>FIFO（先进先出）</li>
            <li>LRU（最近最少使用）</li>
          </ul>
        </li>
      </ul>

      <h3 id="file-system">5.4 文件系统</h3>
      
      <h4 id="file-structure">文件结构</h4>
      <ul>
        <li>顺序文件</li>
        <li>链接文件</li>
        <li>索引文件</li>
      </ul>

      <h4 id="directory-structure">目录结构</h4>
      <ul>
        <li>单级目录</li>
        <li>两级目录</li>
        <li>树形目录（现代系统使用）</li>
        <li>无环图目录（支持共享）</li>
      </ul>

      <h4 id="disk-scheduling">磁盘调度算法</h4>
      <ul>
        <li>先来先服务（FCFS）</li>
        <li>最短寻道时间优先（SSTF）</li>
        <li>扫描算法（SCAN/电梯算法）</li>
        <li>循环扫描（C-SCAN）</li>
      </ul>

      <h2 id="chapter6">第 6 章：计算机网络</h2>
      
      <h3 id="network-intro">6.1 计算机网络概述</h3>
      <p>计算机网络是将地理位置不同的计算机通过通信线路连接起来，实现资源共享和信息传递的系统。</p>

      <h3 id="network-classification">6.2 网络分类</h3>
      <ul>
        <li><strong>按覆盖范围：</strong>
          <ul>
            <li>LAN（局域网）：几米到几公里</li>
            <li>MAN（城域网）：几公里到几十公里</li>
            <li>WAN（广域网）：几十公里到几千公里</li>
            <li>Internet（互联网）：全球范围</li>
          </ul>
        </li>
        <li><strong>按拓扑结构：</strong>
          <ul>
            <li>星型</li>
            <li>总线型</li>
            <li>环型</li>
            <li>树型</li>
            <li>网状</li>
          </ul>
        </li>
      </ul>

      <h3 id="osi-model">6.3 OSI 七层模型</h3>
      <pre><code class="language-text">从下到上：
7. 应用层（Application）     - HTTP, FTP, SMTP
6. 表示层（Presentation）    - 数据格式转换、加密
5. 会话层（Session）         - 建立、管理会话
4. 传输层（Transport）       - TCP, UDP
3. 网络层（Network）         - IP, 路由选择
2. 数据链路层（Data Link）   - 帧传输、差错控制
1. 物理层（Physical）        - 比特流传输</code></pre>

      <h3 id="tcp-ip">6.4 TCP/IP 协议栈</h3>
      <pre><code class="language-text">四层模型：
4. 应用层（HTTP, FTP, SMTP, DNS）
3. 传输层（TCP, UDP）
2. 网络层（IP, ICMP, ARP）
1. 网络接口层</code></pre>

      <h3 id="tcp-udp">6.5 TCP 与 UDP</h3>
      
      <h4 id="tcp">TCP（传输控制协议）</h4>
      <ul>
        <li>面向连接</li>
        <li>可靠传输</li>
        <li>流量控制</li>
        <li>拥塞控制</li>
        <li>三次握手建立连接</li>
        <li>四次挥手断开连接</li>
      </ul>

      <h4 id="udp">UDP（用户数据报协议）</h4>
      <ul>
        <li>无连接</li>
        <li>不可靠传输</li>
        <li>开销小，速度快</li>
        <li>应用：视频通话、在线游戏、DNS 查询</li>
      </ul>

      <h3 id="http-https">6.6 HTTP 与 HTTPS</h3>
      
      <h4 id="http">HTTP</h4>
      <pre><code class="language-text">HTTP 请求方法：
GET - 获取资源
POST - 提交数据
PUT - 更新资源
DELETE - 删除资源
HEAD - 获取响应头
OPTIONS - 获取支持的方法

HTTP 状态码：
1xx - 信息
2xx - 成功（200 OK）
3xx - 重定向（301, 302）
4xx - 客户端错误（404 Not Found）
5xx - 服务器错误（500 Internal Server Error）</code></pre>

      <h4 id="https">HTTPS</h4>
      <p>HTTP + SSL/TLS，提供加密传输和身份认证。</p>

      <h3 id="ip-address">6.7 IP 地址</h3>
      
      <h4 id="ipv4">IPv4</h4>
      <pre><code class="language-text">格式：4 个字节，32 位，如 192.168.1.1
分类：
A 类：1.0.0.0 - 126.255.255.255
B 类：128.0.0.0 - 191.255.255.255
C 类：192.0.0.0 - 223.255.255.255
私有地址：
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16</code></pre>

      <h4 id="ipv6">IPv6</h4>
      <pre><code class="language-text">格式：128 位，8 组，如 2001:0db8:85a3:0000:0000:8a2e:0370:7334
优势：地址空间大，安全性高，支持自动配置</code></pre>

      <h3 id="dns">6.8 DNS（域名系统）</h3>
      <p>将域名转换为 IP 地址的分布式数据库系统。</p>
      <pre><code class="language-text">DNS 查询过程：
1. 浏览器缓存
2. 操作系统缓存
3. 路由器缓存
4. ISP DNS 服务器
5. 根域名服务器
6. 顶级域名服务器（.com, .org）
7. 权威域名服务器</code></pre>

      <h3 id="network-devices">6.9 网络设备</h3>
      <ul>
        <li><strong>中继器（Repeater）：</strong>物理层设备，放大信号</li>
        <li><strong>集线器（Hub）：</strong>物理层设备，多端口中继器</li>
        <li><strong>网桥（Bridge）：</strong>数据链路层设备，连接两个网段</li>
        <li><strong>交换机（Switch）：</strong>数据链路层设备，多端口网桥
          <ul>
            <li>工作原理：根据 MAC 地址转发数据帧</li>
            <li>特点：独享带宽，支持全双工通信</li>
          </ul>
        </li>
        <li><strong>路由器（Router）：</strong>网络层设备，连接不同网络
          <ul>
            <li>工作原理：根据 IP 地址和路由表转发数据包</li>
            <li>功能：路由选择、拥塞控制、防火墙</li>
          </ul>
        </li>
        <li><strong>网关（Gateway）：</strong>高层设备，协议转换器</li>
      </ul>

      <h3 id="routing">6.10 路由选择</h3>
      <p>路由选择是确定数据包从源到目的地的路径的过程。</p>
      <h4 id="routing-algorithms">路由算法分类</h4>
      <ul>
        <li><strong>静态路由：</strong>
          <ul>
            <li>人工配置路由表</li>
            <li>优点：简单、安全、开销小</li>
            <li>缺点：不能适应网络变化</li>
          </ul>
        </li>
        <li><strong>动态路由：</strong>
          <ul>
            <li>自动学习和更新路由信息</li>
            <li>优点：适应网络变化</li>
            <li>缺点：占用网络资源</li>
          </ul>
        </li>
      </ul>
      <h4 id="dynamic-routing">常见动态路由协议</h4>
      <ul>
        <li><strong>RIP（路由信息协议）：</strong>
          <ul>
            <li>基于距离向量算法</li>
            <li>度量标准：跳数（最大 15 跳）</li>
            <li>更新周期：30 秒</li>
          </ul>
        </li>
        <li><strong>OSPF（开放最短路径优先）：</strong>
          <ul>
            <li>基于链路状态算法</li>
            <li>使用 Dijkstra 算法计算最短路径</li>
            <li>支持大型网络，收敛速度快</li>
          </ul>
        </li>
        <li><strong>BGP（边界网关协议）：</strong>
          <ul>
            <li>路径向量协议</li>
            <li>用于不同自治系统之间的路由</li>
            <li>Internet 的核心路由协议</li>
          </ul>
        </li>
      </ul>

      <h3 id="switching">6.11 交换技术</h3>
      <ul>
        <li><strong>电路交换：</strong>
          <ul>
            <li>建立专用物理通路</li>
            <li>特点：实时性强，但线路利用率低</li>
            <li>应用：传统电话网络</li>
          </ul>
        </li>
        <li><strong>报文交换：</strong>
          <ul>
            <li>存储转发整个报文</li>
            <li>特点：无需建立连接，但延迟大</li>
          </ul>
        </li>
        <li><strong>分组交换：</strong>
          <ul>
            <li>将数据分割为分组（包）</li>
            <li>特点：线路利用率高，延迟小</li>
            <li>应用：Internet、局域网</li>
          </ul>
        </li>
      </ul>

      <h2 id="chapter7">第 7 章：数据库系统</h2>
      
      <h3 id="database-intro">7.1 数据库概述</h3>
      <p>数据库是有组织的数据集合，便于访问、管理和更新。</p>
      <ul>
        <li><strong>DBMS（数据库管理系统）：</strong>MySQL, PostgreSQL, Oracle, SQL Server</li>
        <li><strong>数据库优势：</strong>
          <ul>
            <li>数据结构化</li>
            <li>数据共享</li>
            <li>数据独立性</li>
            <li>数据完整性</li>
            <li>并发控制</li>
          </ul>
        </li>
      </ul>

      <h3 id="relational-database">7.2 关系型数据库</h3>
      
      <h4 id="basic-concepts">基本概念</h4>
      <ul>
        <li><strong>表（Table）：</strong>行和列的集合</li>
        <li><strong>字段（Field）：</strong>表中的列</li>
        <li><strong>记录（Record）：</strong>表中的行</li>
        <li><strong>主键（Primary Key）：</strong>唯一标识记录的字段</li>
        <li><strong>外键（Foreign Key）：</strong>关联其他表的字段</li>
        <li><strong>索引（Index）：</strong>加速查询的数据结构</li>
      </ul>

      <h4 id="sql">SQL（结构化查询语言）</h4>
      <pre><code class="language-sql">-- 数据定义语言（DDL）
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    email VARCHAR(100)
);

ALTER TABLE students ADD COLUMN phone VARCHAR(20);

DROP TABLE students;

-- 数据操作语言（DML）
-- 插入数据
INSERT INTO students (id, name, age, email) 
VALUES (1, 'Alice', 20, 'alice@example.com');

-- 查询数据
SELECT * FROM students WHERE age > 18;
SELECT name, age FROM students ORDER BY age DESC;
SELECT COUNT(*) FROM students;

-- 更新数据
UPDATE students SET age = 21 WHERE id = 1;

-- 删除数据
DELETE FROM students WHERE id = 1;

-- 连接查询
SELECT s.name, c.course_name
FROM students s
INNER JOIN courses c ON s.id = c.student_id;

-- 聚合函数
SELECT AVG(age) FROM students;
SELECT MAX(score) FROM exams;
SELECT COUNT(*) FROM students GROUP BY major;</code></pre>

      <h3 id="normalization">7.3 数据库规范化</h3>
      <p>规范化的目的是减少数据冗余，提高数据一致性。</p>
      <ul>
        <li><strong>第一范式（1NF）：</strong>每个字段都是原子值，不可再分</li>
        <li><strong>第二范式（2NF）：</strong>在 1NF 基础上，非主键字段完全依赖主键</li>
        <li><strong>第三范式（3NF）：</strong>在 2NF 基础上，非主键字段直接依赖主键</li>
        <li><strong>BC 范式（BCNF）：</strong>在 3NF 基础上，消除主键内部的依赖</li>
      </ul>

      <h3 id="transaction">7.4 事务</h3>
      <p>事务是数据库操作的逻辑单元，具有 ACID 特性：</p>
      <ul>
        <li><strong>原子性（Atomicity）：</strong>事务要么全部完成，要么全部不完成</li>
        <li><strong>一致性（Consistency）：</strong>事务执行前后，数据库状态一致</li>
        <li><strong>隔离性（Isolation）：</strong>并发事务之间互不干扰</li>
        <li><strong>持久性（Durability）：</strong>事务提交后，结果永久保存</li>
      </ul>

      <h3 id="nosql">7.5 NoSQL 数据库</h3>
      <p>非关系型数据库，适合大数据量、高并发场景。</p>
      <ul>
        <li><strong>键值存储：</strong>Redis, Memcached</li>
        <li><strong>文档存储：</strong>MongoDB, CouchDB</li>
        <li><strong>列族存储：</strong>Cassandra, HBase</li>
        <li><strong>图数据库：</strong>Neo4j, ArangoDB</li>
      </ul>

      <h3 id="index">7.6 索引</h3>
      <p>索引是加速数据库查询的数据结构。</p>
      <h4 id="index-types">索引类型</h4>
      <ul>
        <li><strong>B+ 树索引：</strong>
          <ul>
            <li>最常用的数据库索引结构</li>
            <li>特点：平衡多叉树，所有数据存储在叶子节点</li>
            <li>优势：支持范围查询，查询效率稳定</li>
          </ul>
        </li>
        <li><strong>哈希索引：</strong>
          <ul>
            <li>基于哈希表实现</li>
            <li>优势：等值查询速度快（O(1)）</li>
            <li>劣势：不支持范围查询</li>
          </ul>
        </li>
        <li><strong>全文索引：</strong>
          <ul>
            <li>用于文本搜索</li>
            <li>实现：倒排索引</li>
          </ul>
        </li>
        <li><strong>位图索引：</strong>
          <ul>
            <li>适合低基数列（如性别、状态）</li>
            <li>优势：空间效率高，支持位运算</li>
          </ul>
        </li>
      </ul>
      <h4 id="index-principles">索引设计原则</h4>
      <ul>
        <li>为经常查询的列创建索引</li>
        <li>为经常用于连接的列创建索引</li>
        <li>为经常排序（ORDER BY）的列创建索引</li>
        <li>避免为低基数列创建索引</li>
        <li>避免过度索引（影响写入性能）</li>
      </ul>

      <h3 id="lock">7.7 锁机制</h3>
      <p>锁用于控制并发访问，保证数据一致性。</p>
      <h4 id="lock-granularity">锁的粒度</h4>
      <ul>
        <li><strong>表级锁：</strong>
          <ul>
            <li>开销小，加锁快</li>
            <li>并发度低，冲突概率高</li>
          </ul>
        </li>
        <li><strong>行级锁：</strong>
          <ul>
            <li>开销大，加锁慢</li>
            <li>并发度高，冲突概率低</li>
            <li>实现：InnoDB 通过索引实现行锁</li>
          </ul>
        </li>
        <li><strong>页级锁：</strong>
          <ul>
            <li>介于表锁和行锁之间</li>
            <li>锁定数据页</li>
          </ul>
        </li>
      </ul>
      <h4 id="lock-types">锁的类型</h4>
      <ul>
        <li><strong>共享锁（S 锁/读锁）：</strong>
          <ul>
            <li>允许读操作，不允许写操作</li>
            <li>多个事务可同时持有</li>
          </ul>
        </li>
        <li><strong>排他锁（X 锁/写锁）：</strong>
          <ul>
            <li>不允许读和写</li>
            <li>只允许一个事务持有</li>
          </ul>
        </li>
        <li><strong>意向锁：</strong>
          <ul>
            <li>表级锁，表示将要加行锁</li>
            <li>避免表锁与行锁冲突</li>
          </ul>
        </li>
      </ul>
      <h4 id="concurrency-problems">并发问题</h4>
      <ul>
        <li><strong>脏读：</strong>读到未提交的数据</li>
        <li><strong>不可重复读：</strong>同一查询在不同时间返回不同结果</li>
        <li><strong>幻读：</strong>同一查询在不同时间返回不同行数</li>
      </ul>
      <h4 id="isolation-levels">事务隔离级别</h4>
      <pre><code class="language-text">从低到高：
READ UNCOMMITTED（读未提交）    - 可能脏读、不可重复读、幻读
READ COMMITTED（读已提交）      - 避免脏读，可能不可重复读、幻读
REPEATABLE READ（可重复读）     - 避免脏读、不可重复读，可能幻读
SERIALIZABLE（串行化）         - 避免所有并发问题</code></pre>

      <h3 id="view-procedure">7.8 视图与存储过程</h3>
      <h4 id="view">视图（View）</h4>
      <p>视图是基于 SQL 查询结果的虚拟表。</p>
      <pre><code class="language-sql">-- 创建视图
CREATE VIEW adult_students AS
SELECT id, name, age FROM students WHERE age >= 18;

-- 使用视图
SELECT * FROM adult_students;

-- 优点：
-- 1. 简化复杂查询
-- 2. 提供安全性（隐藏敏感数据）
-- 3. 逻辑独立性</code></pre>

      <h4 id="procedure">存储过程（Stored Procedure）</h4>
      <p>存储过程是预编译的 SQL 代码块，存储在数据库中。</p>
      <pre><code class="language-sql">-- 创建存储过程
DELIMITER $$
CREATE PROCEDURE GetStudentAge(IN student_id INT, OUT age INT)
BEGIN
    SELECT age INTO age FROM students WHERE id = student_id;
END$$
DELIMITER ;

-- 调用存储过程
CALL GetStudentAge(1, @age);
SELECT @age;

-- 优点：
-- 1. 减少网络传输
-- 2. 提高执行效率（预编译）
-- 3. 封装业务逻辑</code></pre>

      <h2 id="chapter8">第 8 章：软件工程</h2>
      
      <h3 id="se-intro">8.1 软件工程概述</h3>
      <p>软件工程是系统化、规范化、可量化的方法来开发、运行和维护软件。</p>

      <h3 id="sdlc">8.2 软件开发生命周期（SDLC）</h3>
      <ol>
        <li><strong>需求分析：</strong>收集和分析用户需求</li>
        <li><strong>设计：</strong>系统架构和详细设计</li>
        <li><strong>实现：</strong>编码实现功能</li>
        <li><strong>测试：</strong>发现和修复缺陷</li>
        <li><strong>部署：</strong>发布到生产环境</li>
        <li><strong>维护：</strong>修复 bug，添加新功能</li>
      </ol>

      <h3 id="development-models">8.3 开发模型</h3>
      
      <h4 id="waterfall">瀑布模型</h4>
      <p>线性顺序模型，每个阶段完成后才能进入下一阶段。</p>
      <p>优点：简单易懂，文档完善</p>
      <p>缺点：缺乏灵活性，难以应对需求变化</p>

      <h4 id="agile">敏捷开发</h4>
      <p>迭代式开发，快速响应变化。</p>
      <ul>
        <li><strong>Scrum：</strong>冲刺（Sprint）、每日站会、回顾会议</li>
        <li><strong>Kanban：</strong>可视化工作流，限制在制品数量</li>
        <li><strong>XP（极限编程）：</strong>结对编程、测试驱动开发、持续集成</li>
      </ul>

      <h3 id="design-patterns">8.4 设计模式</h3>
      <p>设计模式是解决常见问题的可重用方案。GoF（四人帮）提出了 23 种设计模式。</p>
      
      <h4 id="creational-patterns">创建型模式（5 种）</h4>
      <p>用于对象的创建，将对象的创建和使用分离。</p>
      <ul>
        <li><strong>单例模式（Singleton）：</strong>
          <ul>
            <li>确保一个类只有一个实例，并提供全局访问点</li>
            <li>应用：数据库连接池、日志对象、配置管理</li>
            <li>实现：懒汉式、饿汉式、双重检查锁定</li>
          </ul>
        </li>
        <li><strong>工厂方法模式（Factory Method）：</strong>
          <ul>
            <li>定义创建对象的接口，让子类决定实例化哪个类</li>
            <li>应用：日志记录器、数据库连接</li>
          </ul>
        </li>
        <li><strong>抽象工厂模式（Abstract Factory）：</strong>
          <ul>
            <li>创建相关或依赖对象的家族</li>
            <li>应用：UI 主题（按钮、文本框等）</li>
          </ul>
        </li>
        <li><strong>建造者模式（Builder）：</strong>
          <ul>
            <li>分步骤构建复杂对象</li>
            <li>应用：构建复杂 SQL、生成 HTML 文档</li>
          </ul>
        </li>
        <li><strong>原型模式（Prototype）：</strong>
          <ul>
            <li>通过复制现有对象创建新对象</li>
            <li>应用：对象初始化成本高时</li>
          </ul>
        </li>
      </ul>

      <h4 id="structural-patterns">结构型模式（7 种）</h4>
      <p>用于组合类或对象，形成更大的结构。</p>
      <ul>
        <li><strong>适配器模式（Adapter）：</strong>
          <ul>
            <li>将一个类的接口转换成客户希望的另一个接口</li>
            <li>应用：电源适配器、数据格式转换</li>
          </ul>
        </li>
        <li><strong>装饰器模式（Decorator）：</strong>
          <ul>
            <li>动态地给对象添加职责</li>
            <li>应用：Java I/O 流、JavaScript 装饰器</li>
          </ul>
        </li>
        <li><strong>代理模式（Proxy）：</strong>
          <ul>
            <li>为其他对象提供代理以控制访问</li>
            <li>类型：远程代理、虚拟代理、保护代理</li>
            <li>应用：RPC 框架、图片懒加载</li>
          </ul>
        </li>
        <li><strong>外观模式（Facade）：</strong>
          <ul>
            <li>为子系统中的一组接口提供统一界面</li>
            <li>应用：框架入口类、SDK 封装</li>
          </ul>
        </li>
        <li><strong>组合模式（Composite）：</strong>
          <ul>
            <li>将对象组合成树形结构表示"部分 - 整体"的层次结构</li>
            <li>应用：文件系统、UI 组件树</li>
          </ul>
        </li>
        <li><strong>桥接模式（Bridge）：</strong>
          <ul>
            <li>将抽象部分与实现部分分离</li>
            <li>应用：跨平台 UI、 JDBC 驱动</li>
          </ul>
        </li>
        <li><strong>享元模式（Flyweight）：</strong>
          <ul>
            <li>运用共享技术有效支持大量细粒度的对象</li>
            <li>应用：文本编辑器中的字符对象、Java 字符串常量池</li>
          </ul>
        </li>
      </ul>

      <h4 id="behavioral-patterns">行为型模式（11 种）</h4>
      <p>用于描述类或对象怎样交互和职责分配。</p>
      <ul>
        <li><strong>观察者模式（Observer）：</strong>
          <ul>
            <li>定义对象间一对多的依赖关系，当一个对象状态改变时，所有依赖者都得到通知</li>
            <li>应用：事件系统、MVVM 数据绑定、消息队列</li>
          </ul>
        </li>
        <li><strong>策略模式（Strategy）：</strong>
          <ul>
            <li>定义一系列算法，把它们封装起来，并使它们可互换</li>
            <li>应用：排序算法选择、支付方式</li>
          </ul>
        </li>
        <li><strong>命令模式（Command）：</strong>
          <ul>
            <li>将请求封装成对象，支持撤销、重做</li>
            <li>应用：文本编辑器操作、宏命令</li>
          </ul>
        </li>
        <li><strong>模板方法模式（Template Method）：</strong>
          <ul>
            <li>定义算法骨架，将某些步骤延迟到子类</li>
            <li>应用：框架生命周期、测试框架</li>
          </ul>
        </li>
        <li><strong>责任链模式（Chain of Responsibility）：</strong>
          <ul>
            <li>使多个对象都有机会处理请求，从而避免耦合</li>
            <li>应用：异常处理、审批流程、中间件</li>
          </ul>
        </li>
        <li><strong>状态模式（State）：</strong>
          <ul>
            <li>允许对象在内部状态改变时改变行为</li>
            <li>应用：订单状态机、游戏角色状态</li>
          </ul>
        </li>
        <li><strong>迭代器模式（Iterator）：</strong>
          <ul>
            <li>提供一种方法顺序访问聚合对象的各个元素</li>
            <li>应用：集合遍历、数据库游标</li>
          </ul>
        </li>
        <li><strong>中介者模式（Mediator）：</strong>
          <ul>
            <li>用中介对象封装一系列对象交互</li>
            <li>应用：聊天室、MVC 控制器</li>
          </ul>
        </li>
        <li><strong>备忘录模式（Memento）：</strong>
          <ul>
            <li>在不破坏封装性的前提下，捕获对象内部状态</li>
            <li>应用：游戏存档、撤销操作</li>
          </ul>
        </li>
        <li><strong>访问者模式（Visitor）：</strong>
          <ul>
            <li>在不改变元素类的前提下定义新操作</li>
            <li>应用：编译器 AST 遍历、报表生成</li>
          </ul>
        </li>
        <li><strong>解释器模式（Interpreter）：</strong>
          <ul>
            <li>给定一个语言，定义文法表示，并设计解释器</li>
            <li>应用：SQL 解析、正则表达式引擎</li>
          </ul>
        </li>
      </ul>

      <h3 id="testing">8.5 软件测试</h3>
      
      <h4 id="test-levels">测试级别</h4>
      <ul>
        <li>单元测试（Unit Test）：测试最小可测试单元（函数、方法）</li>
        <li>集成测试（Integration Test）：测试模块间的接口和交互</li>
        <li>系统测试（System Test）：测试整个系统的功能和非功能需求</li>
        <li>验收测试（Acceptance Test）：用户验证系统是否满足需求</li>
      </ul>

      <h4 id="test-types">测试类型</h4>
      <ul>
        <li>黑盒测试：不关心内部实现，只测试输入输出</li>
        <li>白盒测试：了解内部结构，测试代码路径</li>
        <li>灰盒测试：结合黑盒和白盒</li>
      </ul>

      <h4 id="test-methods">测试方法</h4>
      <ul>
        <li><strong>功能测试：</strong>验证功能是否正确实现</li>
        <li><strong>性能测试：</strong>测试系统响应时间、吞吐量</li>
        <li><strong>压力测试：</strong>测试系统在极限条件下的表现</li>
        <li><strong>回归测试：</strong>确保修改没有引入新 bug</li>
      </ul>

      <h3 id="version-control">8.6 版本控制</h3>
      <p>版本控制用于管理代码变更历史。</p>
      
      <h4 id="git">Git</h4>
      <p>Git 是分布式版本控制系统。</p>
      <pre><code class="language-bash"># 初始化仓库
git init

# 克隆仓库
git clone &lt;repository_url&gt;

# 查看状态
git status

# 添加文件到暂存区
git add .

# 提交更改
git commit -m "提交信息"

# 查看提交历史
git log

# 创建分支
git branch &lt;branch_name&gt;

# 切换分支
git checkout &lt;branch_name&gt;

# 合并分支
git merge &lt;branch_name&gt;

# 推送远程仓库
git push origin &lt;branch_name&gt;

# 拉取远程仓库
git pull origin &lt;branch_name&gt;</code></pre>

      <h4 id="git-flow">Git 工作流</h4>
      <ul>
        <li><strong>主干开发：</strong>所有开发在 master 分支进行</li>
        <li><strong>功能分支：</strong>每个功能在新分支开发，完成后合并</li>
        <li><strong>Git Flow：</strong>
          <ul>
            <li>master：生产环境代码</li>
            <li>develop：开发主分支</li>
            <li>feature：功能分支</li>
            <li>release：发布分支</li>
            <li>hotfix：紧急修复分支</li>
          </ul>
        </li>
      </ul>

      <h3 id="devops">8.7 DevOps 与 CI/CD</h3>
      <p>DevOps 是开发和运维的自动化流程。</p>
      
      <h4 id="ci-cd">CI/CD（持续集成/持续部署）</h4>
      <ul>
        <li><strong>持续集成（CI）：</strong>
          <ul>
            <li>频繁提交代码到主干</li>
            <li>自动构建和测试</li>
            <li>工具：Jenkins, GitHub Actions, GitLab CI</li>
          </ul>
        </li>
        <li><strong>持续部署（CD）：</strong>
          <ul>
            <li>自动部署到生产环境</li>
            <li>减少人工干预</li>
          </ul>
        </li>
      </ul>

      <h4 id="container-orchestration">容器编排</h4>
      <ul>
        <li><strong>Kubernetes（K8s）：</strong>
          <ul>
            <li>自动化容器部署、扩展和管理</li>
            <li>服务发现和负载均衡</li>
            <li>自动故障恢复</li>
          </ul>
        </li>
        <li><strong>Docker Swarm：</strong>
          <ul>
            <li>Docker 原生的集群管理工具</li>
            <li>简单易用，适合小规模集群</li>
          </ul>
        </li>
      </ul>

      <h2 id="chapter9">第 9 章：Web 开发基础</h2>
      
      <h3 id="web-intro">9.1 Web 概述</h3>
      <p>Web 是基于 HTTP 协议的分布式信息系统。</p>

      <h3 id="frontend">9.2 前端开发</h3>
      
      <h4 id="html">HTML（超文本标记语言）</h4>
      <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;页面标题&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;标题&lt;/h1&gt;
    &lt;p&gt;段落&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p><strong>HTML5 新特性：</strong></p>
      <ul>
        <li>语义化标签：&lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;</li>
        <li>表单增强：input type="email", "date", "range"</li>
        <li>多媒体：&lt;audio&gt;, &lt;video&gt;</li>
        <li>本地存储：localStorage, sessionStorage</li>
        <li>Canvas 绘图</li>
        <li>Web Workers（后台线程）</li>
      </ul>

      <h4 id="css">CSS（层叠样式表）</h4>
      <pre><code class="language-css">/* 选择器 */
.class-name {
    color: red;
    font-size: 16px;
}

#id-name {
    background: blue;
}

/* 盒模型 */
div {
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    margin: 20px;
}</code></pre>
      <p><strong>CSS3 新特性：</strong></p>
      <ul>
        <li>Flexbox 弹性布局</li>
        <li>Grid 网格布局</li>
        <li>动画（Animation）和过渡（Transition）</li>
        <li>媒体查询（响应式设计）</li>
        <li>变量（Custom Properties）</li>
        <li>变换（Transform）</li>
      </ul>
      <pre><code class="language-css">/* Flexbox 布局 */
.container {
    display: flex;
    justify-content: center;  /* 水平居中 */
    align-items: center;      /* 垂直居中 */
}

/* 媒体查询 */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}</code></pre>

      <h4 id="javascript">JavaScript</h4>
      <pre><code class="language-javascript">// 变量声明
let name = 'Alice';
const age = 25;

// 函数
function greet(name) {
    return \`Hello, \${name}!\`;
}

// DOM 操作
document.getElementById('myId').innerHTML = '新内容';

// 事件监听
button.addEventListener('click', function() {
    alert('按钮被点击了！');
});</code></pre>
      <p><strong>ES6+ 新特性：</strong></p>
      <ul>
        <li>箭头函数： <code>() =&gt; {}</code></li>
        <li>解构赋值：<code>const {name, age} = person;</code></li>
        <li>展开运算符：<code>[...array1, ...array2]</code></li>
        <li>Promise 和 async/await（异步编程）</li>
        <li>模块系统：import/export</li>
        <li>类（Class）和继承</li>
      </ul>
      <pre><code class="language-javascript">// Promise
fetch('/api/data')
    .then(response =&gt; response.json())
    .then(data =&gt; console.log(data))
    .catch(error =&gt; console.error(error));

// async/await
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// 解构
const { name, age } = person;
const [first, ...rest] = array;

// 箭头函数
const add = (a, b) =&gt; a + b;</code></pre>

      <h4 id="frontend-frameworks">9.3 前端框架</h4>
      <ul>
        <li><strong>React：</strong>
          <ul>
            <li>Facebook 开发的组件库</li>
            <li>特点：Virtual DOM、单向数据流、Hooks</li>
            <li>生态：React Router, Redux, Next.js</li>
          </ul>
        </li>
        <li><strong>Vue：</strong>
          <ul>
            <li>渐进式框架，易上手</li>
            <li>特点：响应式数据绑定、组件系统</li>
            <li>生态：Vuex, Vue Router, Nuxt.js</li>
          </ul>
        </li>
        <li><strong>Angular：</strong>
          <ul>
            <li>Google 开发的全功能框架</li>
            <li>特点：TypeScript、双向数据绑定、依赖注入</li>
          </ul>
        </li>
      </ul>

      <h3 id="backend">9.4 后端开发</h3>
      
      <h4 id="server-languages">后端语言</h4>
      <ul>
        <li><strong>Java（Spring 框架）：</strong>
          <ul>
            <li>企业级应用首选</li>
            <li>特点：类型安全、性能优秀、生态完善</li>
            <li>框架：Spring Boot, Spring Cloud, Spring MVC</li>
          </ul>
        </li>
        <li><strong>Python（Django, Flask）：</strong>
          <ul>
            <li>语法简洁，开发效率高</li>
            <li>Django：全功能框架，适合快速开发</li>
            <li>Flask：轻量级框架，灵活可扩展</li>
          </ul>
        </li>
        <li><strong>Node.js（Express）：</strong>
          <ul>
            <li>JavaScript 运行环境</li>
            <li>特点：非阻塞 I/O，高并发</li>
            <li>框架：Express, Koa, NestJS</li>
          </ul>
        </li>
        <li><strong>Go（Gin, Echo）：</strong>
          <ul>
            <li>Google 开发，编译型语言</li>
            <li>特点：性能极高，并发能力强</li>
            <li>适合：微服务、API 网关</li>
          </ul>
        </li>
        <li><strong>PHP（Laravel）：</strong>
          <ul>
            <li>Web 开发老牌语言</li>
            <li>Laravel：现代 PHP 框架</li>
          </ul>
        </li>
      </ul>

      <h4 id="backend-frameworks">后端框架对比</h4>
      <pre><code class="language-text">Spring Boot（Java）:
- 约定优于配置
- 内嵌服务器（Tomcat/Jetty）
- 自动配置

Django（Python）:
- 自带 ORM、Admin 后台
- 安全性高
- 适合内容管理

Express（Node.js）:
- 极简主义
- 中间件机制
- 适合 API 开发</code></pre>

      <h4 id="api">RESTful API</h4>
      <pre><code class="language-text">REST 原则：
- 资源由 URI 标识
- 使用 HTTP 方法操作资源
- 无状态通信
- 统一的接口

示例：
GET    /api/users      # 获取用户列表
POST   /api/users      # 创建用户
GET    /api/users/1    # 获取 ID 为 1 的用户
PUT    /api/users/1    # 更新用户
DELETE /api/users/1    # 删除用户</code></pre>

      <h2 id="chapter10">第 10 章：网络安全</h2>
      
      <h3 id="security-intro">10.1 网络安全概述</h3>
      <p>网络安全是保护网络系统免受未经授权的访问、攻击和破坏。</p>
      <p><strong>安全三要素（CIA）：</strong></p>
      <ul>
        <li>机密性（Confidentiality）：防止信息泄露</li>
        <li>完整性（Integrity）：防止信息被篡改</li>
        <li>可用性（Availability）：确保授权用户可访问</li>
      </ul>

      <h3 id="common-attacks">10.2 常见网络攻击</h3>
      
      <h4 id="xss">XSS（跨站脚本攻击）</h4>
      <p>攻击者注入恶意脚本到网页中执行。</p>
      <p><strong>类型：</strong></p>
      <ul>
        <li>反射型 XSS：恶意脚本包含在 URL 中</li>
        <li>存储型 XSS：恶意脚本存储到服务器（如评论区）</li>
        <li>DOM 型 XSS：通过修改 DOM 树执行</li>
      </ul>
      <pre><code class="language-text">防御：
- 输入验证（过滤特殊字符）
- 输出编码（HTML 实体编码）
- 使用 Content-Security-Policy
- 使用 HttpOnly Cookie</code></pre>

      <h4 id="sql-injection">SQL 注入</h4>
      <p>攻击者通过输入恶意 SQL 代码来操作数据库。</p>
      <pre><code class="language-sql">-- 示例：恶意输入
' OR '1'='1

-- 原始 SQL
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = ''

-- 结果：绕过密码验证</code></pre>
      <pre><code class="language-text">防御：
- 使用参数化查询（预编译语句）
- 输入验证（白名单验证）
- 最小权限原则（数据库用户权限限制）
- 使用 ORM 框架</code></pre>

      <h4 id="csrf">CSRF（跨站请求伪造）</h4>
      <p>攻击者诱使用户在已登录的网站上执行非预期操作。</p>
      <pre><code class="language-text">防御：
- 使用 CSRF Token（随机令牌）
- 验证 Referer 头
- SameSite Cookie 属性
- 双重提交 Cookie</code></pre>

      <h4 id="ddos">DDoS（分布式拒绝服务）</h4>
      <p>攻击者利用多个受控机器向目标发送大量请求，使服务不可用。</p>
      <p><strong>类型：</strong></p>
      <ul>
        <li>流量攻击：UDP Flood, ICMP Flood</li>
        <li>协议攻击：SYN Flood, DNS 放大攻击</li>
        <li>应用层攻击：HTTP Flood</li>
      </ul>
      <pre><code class="language-text">防御：
- 使用 CDN 分散流量
- 配置防火墙规则
- 限制请求频率
- 使用 DDoS 防护服务</code></pre>

      <h4 id="brute-force">暴力破解</h4>
      <p>尝试所有可能的密码组合直到找到正确的密码。</p>
      <pre><code class="language-text">防御：
- 强密码策略（长度、复杂度）
- 登录失败次数限制
- 验证码
- 双因素认证（2FA）
- 账户锁定机制</code></pre>

      <h3 id="encryption">10.3 加密技术</h3>
      
      <h4 id="symmetric">对称加密</h4>
      <p>加密和解密使用相同密钥。</p>
      <ul>
        <li>DES（已不安全）</li>
        <li>AES（推荐）</li>
        <li>3DES</li>
      </ul>

      <h4 id="asymmetric">非对称加密</h4>
      <p>使用公钥加密，私钥解密。</p>
      <ul>
        <li>RSA</li>
        <li>ECC</li>
      </ul>

      <h4 id="hash">哈希函数</h4>
      <p>将任意长度数据转换为固定长度的哈希值。</p>
      <ul>
        <li>MD5（已不安全）</li>
        <li>SHA-1（已不安全）</li>
        <li>SHA-256（推荐）</li>
        <li>bcrypt（密码存储）</li>
      </ul>

      <h3 id="authentication">10.4 身份认证</h3>
      
      <h4 id="auth-methods">认证方式</h4>
      <ul>
        <li><strong>用户名密码：</strong>
          <ul>
            <li>最常见的方式</li>
            <li>缺点：密码易泄露、易忘记</li>
          </ul>
        </li>
        <li><strong>双因素认证（2FA）：</strong>
          <ul>
            <li>密码 + 手机验证码</li>
            <li>密码 + 硬件令牌</li>
            <li>提高安全性</li>
          </ul>
        </li>
        <li><strong>生物识别：</strong>
          <ul>
            <li>指纹识别</li>
            <li>人脸识别</li>
            <li>虹膜识别</li>
          </ul>
        </li>
        <li><strong>OAuth 2.0：</strong>
          <ul>
            <li>开放授权标准</li>
            <li>允许第三方应用访问资源，无需提供密码</li>
            <li>应用：微信登录、Google 登录</li>
          </ul>
        </li>
        <li><strong>JWT（JSON Web Token）：</strong>
          <ul>
            <li>无状态认证</li>
            <li>结构：Header.Payload.Signature</li>
            <li>优点：减少服务器存储，支持跨域</li>
          </ul>
        </li>
      </ul>

      <h4 id="jwt-detail">JWT 详解</h4>
      <pre><code class="language-text">JWT 结构：
1. Header（头部）
   - 类型（JWT）
   - 算法（HS256, RS256）

2. Payload（载荷）
   - 声明（用户信息、过期时间等）
   - 标准声明：iss（签发者）, exp（过期时间）, sub（主题）

3. Signature（签名）
   - 对前两部分签名，防止篡改

示例：
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</code></pre>

      <h3 id="security-best-practices">10.5 安全最佳实践</h3>
      <ul>
        <li><strong>密码安全：</strong>
          <ul>
            <li>使用 bcrypt 等算法哈希存储</li>
            <li>加盐（Salt）防止彩虹表攻击</li>
            <li>强制密码复杂度要求</li>
          </ul>
        </li>
        <li><strong>会话管理：</strong>
          <ul>
            <li>使用安全的 Session ID</li>
            <li>设置合理的过期时间</li>
            <li>登出时销毁会话</li>
          </ul>
        </li>
        <li><strong>数据传输：</strong>
          <ul>
            <li>使用 HTTPS（TLS/SSL）</li>
            <li>敏感数据加密传输</li>
          </ul>
        </li>
        <li><strong>输入验证：</strong>
          <ul>
            <li>白名单验证</li>
            <li>过滤特殊字符</li>
            <li>限制输入长度</li>
          </ul>
        </li>
        <li><strong>错误处理：</strong>
          <ul>
            <li>不暴露敏感信息</li>
            <li>记录详细日志</li>
            <li>返回通用错误消息</li>
          </ul>
        </li>
        <li><strong>安全配置：</strong>
          <ul>
            <li>关闭不必要的服务和端口</li>
            <li>定期更新系统和依赖</li>
            <li>使用防火墙</li>
          </ul>
        </li>
      </ul>

      <h2 id="conclusion">📝 总结</h2>
      <p>恭喜你完成了计算机科学导论的学习！这只是计算机科学的入门，每个章节都可以深入钻研。</p>
      
      <h3 id="next-steps">下一步学习建议</h3>
      <ol>
        <li><strong>选择一门编程语言深入学习：</strong>Python、Java 或 C++</li>
        <li><strong>动手实践：</strong>做项目，写代码，解决实际问题</li>
        <li><strong>学习数据结构与算法：</strong>刷 LeetCode 等编程题</li>
        <li><strong>阅读经典书籍：</strong>《算法导论》《深入理解计算机系统》等</li>
        <li><strong>参与开源项目：</strong>在 GitHub 上贡献代码</li>
        <li><strong>持续关注新技术：</strong>人工智能、区块链、云计算等</li>
      </ol>
      
      <blockquote>
        "编程是一门实践的艺术，唯有不断练习，方能精通。"
      </blockquote>
      
      <p>祝你在计算机科学的道路上越走越远！🚀</p>
    `,category:"教程",author:"DRGJU",date:"2024-03-31",readTime:"120 分钟",image:"💻",tags:["计算机科学","编程","算法","数据结构","教程"],views:0},6:{title:"深入理解计算机系统 - 完整知识体系",content:`
      <h2 id="intro">🖥️ 深入理解计算机系统 - 完整知识体系</h2>
      
      <p>本文基于 Randal E. Bryant 和 David R. O'Hallaron 的经典教材《Computer Systems: A Programmer's Perspective》（深入理解计算机系统，简称 CSAPP），系统讲解计算机系统的核心概念和原理。无论你是计算机专业学生、软件工程师还是系统开发者，都能通过本教程深入理解计算机系统的运作机制。</p>
      
      <div class="learning-objectives">
        <h3>📌 学习目标</h3>
        <ul>
          <li>理解计算机系统的层次结构和抽象</li>
          <li>掌握数据的机器级表示和处理</li>
          <li>理解程序的机器级执行过程</li>
          <li>掌握存储器层次结构的工作原理</li>
          <li>理解链接、加载和异常控制流</li>
          <li>掌握虚拟内存和系统级 I/O</li>
          <li>理解网络编程和并发编程</li>
        </ul>
      </div>

      <h2 id="part1">第一部分：程序结构和执行</h2>
      
      <h3 id="chapter1">第 1 章：计算机系统漫游</h3>
      
      <h4 id="system-overview">1.1 计算机系统概述</h4>
      <p>计算机系统是由硬件和软件组成的复杂系统，理解其工作原理对于编写高效、可靠的程序至关重要。</p>
      
      <p><strong>计算机系统的层次结构：</strong></p>
      <ul>
        <li><strong>应用程序层：</strong>用户直接使用的软件（浏览器、编辑器等）</li>
        <li><strong>操作系统层：</strong>管理硬件资源，提供服务（Linux、Windows、macOS）</li>
        <li><strong>系统软件层：</strong>编译器、链接器、加载器等</li>
        <li><strong>硬件层：</strong>CPU、内存、I/O 设备等</li>
      </ul>
      
      <p><strong>核心硬件组件：</strong></p>
      <ul>
        <li><strong>CPU（中央处理器）：</strong>执行指令，处理数据</li>
        <li><strong>内存（RAM）：</strong>存储正在运行的程序和数据</li>
        <li><strong>I/O 设备：</strong>键盘、鼠标、显示器、磁盘、网络接口等</li>
        <li><strong>总线：</strong>连接各个组件，传输数据</li>
      </ul>

      <h4 id="information-rep">1.2 信息的表示和处理</h4>
      <p>计算机中所有信息都以二进制形式表示，理解数据的表示对于编程至关重要。</p>
      
      <pre><code class="language-c">// C 语言中的数据类型
#include &lt;stdio.h&gt;

int main() {
    int x = 12345;           // 整数
    float f = 3.14f;         // 浮点数
    char c = 'A';            // 字符
    char *s = "Hello";       // 字符串
    int arr[3] = {1, 2, 3};  // 数组
    
    printf("int: %d bytes\\n", sizeof(int));
    printf("float: %d bytes\\n", sizeof(float));
    printf("char: %d bytes\\n", sizeof(char));
    printf("pointer: %d bytes\\n", sizeof(char*));
    
    return 0;
}</code></pre>
      
      <p><strong>输出结果（64 位系统）：</strong></p>
      <pre><code class="language-text">int: 4 bytes
float: 4 bytes
char: 1 bytes
pointer: 8 bytes</code></pre>

      <h4 id="compiling">1.3 程序的编译和链接</h4>
      <p>从源代码到可执行文件需要经过编译、汇编、链接等步骤。</p>
      
      <pre><code class="language-bash"># 编译过程示例
# 1. 预处理：处理宏定义、头文件包含等
gcc -E hello.c -o hello.i

# 2. 编译：将预处理后的代码转换为汇编代码
gcc -S hello.i -o hello.s

# 3. 汇编：将汇编代码转换为机器代码（目标文件）
gcc -c hello.s -o hello.o

# 4. 链接：将目标文件和库文件链接成可执行文件
gcc hello.o -o hello

# 或者直接一步完成
gcc hello.c -o hello</code></pre>

      <h2 id="part2">第二部分：数据的表示和处理</h2>
      
      <h3 id="chapter2">第 2 章：信息的表示和处理</h3>
      
      <h4 id="number-systems">2.1 数制和编码</h4>
      <p>计算机使用二进制表示所有数据，理解不同数制之间的转换是基础。</p>
      
      <pre><code class="language-python"># 数制转换示例
# 十进制转二进制
def dec_to_bin(n):
    return bin(n)[2:]  # 去掉 '0b' 前缀

# 二进制转十进制
def bin_to_dec(b):
    return int(b, 2)

# 十六进制转二进制
def hex_to_bin(h):
    return bin(int(h, 16))[2:].zfill(len(h) * 4)

# 示例
print(f"13 的二进制：{dec_to_bin(13)}")  # 1101
print(f"1101 的十进制：{bin_to_dec('1101')}")  # 13
print(f"0xA 的二进制：{hex_to_bin('A')}")  # 1010</code></pre>

      <h4 id="integer-rep">2.2 整数表示</h4>
      <p>计算机使用固定位数表示整数，包括无符号整数和有符号整数（补码表示）。</p>
      
      <pre><code class="language-c">#include &lt;stdio.h&gt;
#include &lt;limits.h&gt;

int main() {
    // 无符号整数
    unsigned int u = 4294967295U;  // 2^32 - 1
    printf("unsigned int max: %u\\n", u);
    
    // 有符号整数（补码）
    int x = -1;
    printf("x = -1, 二进制表示：%u\\n", (unsigned int)x);
    
    // 溢出示例
    int max_int = INT_MAX;
    printf("INT_MAX: %d\\n", max_int);
    printf("INT_MAX + 1: %d\\n", max_int + 1);  // 溢出！
    
    return 0;
}</code></pre>

      <h4 id="floating-point">2.3 浮点数表示</h4>
      <p>浮点数使用 IEEE 754 标准表示，包括符号位、指数位和尾数位。</p>
      
      <pre><code class="language-c">#include &lt;stdio.h&gt;

int main() {
    float f = 0.1f;
    double d = 0.1;
    
    printf("float: %.20f\\n", f);
    printf("double: %.20f\\n", d);
    
    // 浮点数精度问题
    float sum = 0.0f;
    for (int i = 0; i < 10; i++) {
        sum += 0.1f;
    }
    printf("0.1 * 10 = %.20f\\n", sum);
    printf("sum == 1.0? %s\\n", (sum == 1.0f) ? "yes" : "no");
    
    return 0;
}</code></pre>

      <h2 id="part3">第三部分：程序的机器级表示</h2>
      
      <h3 id="chapter3">第 3 章：程序的机器级表示</h3>
      
      <h4 id="assembly-basics">3.1 汇编语言基础</h4>
      <p>汇编语言是机器指令的文本表示，理解汇编有助于理解程序的执行过程。</p>
      
      <pre><code class="language-c">// C 代码
int sum(int *a, int n) {
    int s = 0;
    for (int i = 0; i < n; i++) {
        s += a[i];
    }
    return s;
}</code></pre>
      
      <pre><code class="language-asm"># 对应的 x86-64 汇编代码
sum:
    pushq   %rbp
    movq    %rsp, %rbp
    movl    $0, -8(%rbp)      # s = 0
    movl    $0, -4(%rbp)      # i = 0
    jmp     .L2
    
.L3:
    movl    -4(%rbp), %eax
    cltd
    movl    (%rdi,%rax,4), %edx
    addl    %edx, -8(%rbp)    # s += a[i]
    addl    $1, -4(%rbp)      # i++
    
.L2:
    movl    -4(%rbp), %eax
    cmpl    %esi, %eax
    jl      .L3               # if (i < n) goto .L3
    
    movl    -8(%rbp), %eax    # return s
    popq    %rbp
    ret</code></pre>

      <h4 id="registers">3.2 寄存器和内存</h4>
      <p>CPU 包含多个寄存器用于快速访问数据，理解寄存器的使用对于优化程序很重要。</p>
      
      <pre><code class="language-text"># x86-64 通用寄存器：
# %rax, %rbx, %rcx, %rdx, %rsi, %rdi, %rbp, %rsp, %r8-%r15

# 特殊用途：
# %rax - 返回值
# %rsp - 栈顶指针
# %rbp - 基址指针
# %rip - 指令指针</code></pre>

      <h2 id="part4">第四部分：处理器架构</h2>
      
      <h3 id="chapter4">第 4 章：处理器体系结构</h3>
      
      <h4 id="cpu-design">4.1 CPU 设计基础</h4>
      <p>CPU 由算术逻辑单元（ALU）、控制单元、寄存器等组成，执行取指、译码、执行、访存、写回等步骤。</p>
      
      <pre><code class="language-text"># 指令执行周期：
# 1. 取指（Fetch）：从内存中取出指令
# 2. 译码（Decode）：解析指令含义
# 3. 执行（Execute）：执行指令操作
# 4. 访存（Memory）：访问内存数据
# 5. 写回（Writeback）：将结果写回寄存器</code></pre>

      <h4 id="pipelining">4.2 流水线技术</h4>
      <p>流水线技术允许多条指令同时处于不同的执行阶段，提高 CPU 效率。</p>
      
      <pre><code class="language-text"># 5 级流水线示例：
# 时钟周期  1  2  3  4  5  6  7  8  9
# 指令 1    F  D  E  M  W
# 指令 2       F  D  E  M  W
# 指令 3          F  D  E  M  W
# 指令 4             F  D  E  M  W
# 指令 5                F  D  E  M  W

# 理想情况下，每个时钟周期完成一条指令</code></pre>

      <h2 id="part5">第五部分：存储器层次结构</h2>
      
      <h3 id="chapter5">第 5 章：存储器层次结构</h3>
      
      <h4 id="memory-types">5.1 存储器类型</h4>
      <p>计算机系统使用多层存储器，从快到慢包括：寄存器、高速缓存（Cache）、主存（RAM）、磁盘存储。</p>
      
      <pre><code class="language-text"># 存储器层次结构（从快到慢）：
# L1 Cache: ~1 周期，~32KB
# L2 Cache: ~4 周期，~256KB
# L3 Cache: ~10 周期，~8MB
# 主存：~100 周期，~8-32GB
# SSD: ~100,000 周期，~512GB-1TB
# HDD: ~10,000,000 周期，~1-4TB</code></pre>

      <h4 id="cache-principles">5.2 高速缓存原理</h4>
      <p>Cache 利用程序的局部性原理（时间局部性和空间局部性）提高访问速度。</p>
      
      <pre><code class="language-c">#include &lt;stdio.h&gt;

// 良好的空间局部性
void good_locality(int *a, int n) {
    for (int i = 0; i < n; i++) {
        a[i] = i;  // 顺序访问
    }
}

// 较差的空间局部性
void bad_locality(int *a, int n, int step) {
    for (int i = 0; i < n; i += step) {
        a[i] = i;  // 跳跃访问
    }
}

int main() {
    int a[1000000];
    good_locality(a, 1000000);
    bad_locality(a, 1000000, 100);
    return 0;
}</code></pre>

      <h2 id="part6">第六部分：链接</h2>
      
      <h3 id="chapter6">第 6 章：链接</h3>
      
      <h4 id="linking-basics">6.1 链接基础</h4>
      <p>链接器将多个目标文件和库文件组合成可执行文件，解决符号引用问题。</p>
      
      <pre><code class="language-bash"># 静态链接示例
# main.c
extern int add(int a, int b);
int main() {
    return add(1, 2);
}

# add.c
int add(int a, int b) {
    return a + b;
}

# 编译和链接
gcc -c main.c -o main.o
gcc -c add.c -o add.o
gcc main.o add.o -o program

# 查看符号表
nm program | grep add</code></pre>

      <h4 id="static-vs-dynamic">6.2 静态链接和动态链接</h4>
      <p>静态链接在编译时复制库代码，动态链接在运行时共享库代码。</p>
      
      <pre><code class="language-bash"># 静态链接
gcc -static main.c -o program_static

# 动态链接（默认）
gcc main.c -o program

# 查看依赖的共享库
ldd program

# 创建共享库
gcc -shared -fPIC add.c -o libadd.so
gcc main.c -L. -ladd -o program
export LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH
./program</code></pre>

      <h2 id="part7">第七部分：异常控制流</h2>
      
      <h3 id="chapter7">第 7 章：异常控制流</h3>
      
      <h4 id="exceptions">7.1 异常和中断</h4>
      <p>异常是控制流的突变，由硬件事件（除零、缺页、I/O 完成）或软件事件（系统调用、信号）触发。</p>
      
      <pre><code class="language-c">#include &lt;signal.h&gt;
#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;

// 信号处理函数
void sigint_handler(int sig) {
    printf("\\n捕获到 SIGINT 信号！\\n");
    printf("程序将退出\\n");
    exit(0);
}

int main() {
    // 注册信号处理函数
    signal(SIGINT, sigint_handler);
    
    printf("按 Ctrl+C 发送 SIGINT 信号\\n");
    
    while (1) {
        printf("运行中...\\n");
        sleep(1);
    }
    
    return 0;
}</code></pre>

      <h4 id="processes">7.2 进程</h4>
      <p>进程是正在执行的程序的实例，操作系统通过进程管理 CPU 和内存资源。</p>
      
      <pre><code class="language-c">#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;
#include &lt;sys/wait.h&gt;

int main() {
    pid_t pid = fork();  // 创建子进程
    
    if (pid < 0) {
        perror("fork 失败");
        return 1;
    } else if (pid == 0) {
        // 子进程
        printf("子进程：PID=%d, PPID=%d\\n", getpid(), getppid());
    } else {
        // 父进程
        printf("父进程：创建了子进程 PID=%d\\n", pid);
        wait(NULL);  // 等待子进程结束
        printf("子进程已结束\\n");
    }
    
    return 0;
}</code></pre>

      <h2 id="part8">第八部分：虚拟内存</h2>
      
      <h3 id="chapter8">第 8 章：虚拟内存</h3>
      
      <h4 id="vm-concepts">8.1 虚拟内存概念</h4>
      <p>虚拟内存为每个进程提供独立的地址空间，通过页表将虚拟地址映射到物理地址。</p>
      
      <pre><code class="language-text"># 虚拟内存的优势：
# 1. 简化编程：每个进程看到连续的地址空间
# 2. 内存保护：进程不能访问其他进程的内存
# 3. 高效共享：多个进程可以共享同一物理内存
# 4. 支持大程序：虚拟地址空间可以大于物理内存

# x86-64 虚拟地址空间布局：
# 0x0000000000000000 - 用户栈
# ...
# 0x00007ffffffffffe - 用户堆
# ...
# 0x0000000040000000 - 代码段
# 0xffffffffffffffff - 内核空间</code></pre>

      <h4 id="paging">8.2 分页和页表</h4>
      <p>虚拟内存按页（通常 4KB）划分，页表记录虚拟页到物理页帧的映射。</p>
      
      <pre><code class="language-c">#include &lt;stdio.h&gt;

int main() {
    int x = 42;
    int *p = &x;
    
    printf("变量 x 的地址：%p\\n", (void*)p);
    printf("指针 p 的值：%p\\n", (void*)p);
    printf("x 的值：%d\\n", *p);
    
    // 虚拟地址通过页表映射到物理地址
    // 这个过程由 MMU（内存管理单元）完成
    
    return 0;
}</code></pre>

      <h2 id="part9">第九部分：系统级 I/O</h2>
      
      <h3 id="chapter9">第 9 章：系统级 I/O</h3>
      
      <h4 id="unix-io">9.1 Unix I/O</h4>
      <p>Unix I/O 将设备抽象为文件，通过文件描述符进行操作。</p>
      
      <pre><code class="language-c">#include &lt;fcntl.h&gt;
#include &lt;unistd.h&gt;
#include &lt;stdio.h&gt;

int main() {
    // 打开文件
    int fd = open("test.txt", O_RDONLY);
    if (fd < 0) {
        perror("open");
        return 1;
    }
    
    // 读取文件
    char buffer[100];
    int n = read(fd, buffer, sizeof(buffer));
    if (n < 0) {
        perror("read");
        return 1;
    }
    
    // 写入标准输出
    write(STDOUT_FILENO, buffer, n);
    
    // 关闭文件
    close(fd);
    
    return 0;
}</code></pre>

      <h2 id="part10">第十部分：网络编程</h2>
      
      <h3 id="chapter10">第 10 章：网络编程</h3>
      
      <h4 id="socket-programming">10.1 Socket 编程</h4>
      <p>Socket 是网络通信的端点，TCP/IP 协议提供可靠的字节流服务。</p>
      
      <pre><code class="language-c">// 简单的 TCP 服务器
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;string.h&gt;
#include &lt;unistd.h&gt;
#include &lt;arpa/inet.h&gt;

#define PORT 8080
#define BUFFER_SIZE 1024

int main() {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int opt = 1;
    int addrlen = sizeof(address);
    char buffer[BUFFER_SIZE] = {0};
    
    // 创建 socket
    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    
    // 设置 socket 选项
    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
    
    // 绑定地址和端口
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);
    bind(server_fd, (struct sockaddr *)&address, sizeof(address));
    
    // 监听
    listen(server_fd, 3);
    printf("服务器监听端口 %d\\n", PORT);
    
    // 接受连接
    new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen);
    
    // 读取数据
    read(new_socket, buffer, BUFFER_SIZE);
    printf("收到：%s\\n", buffer);
    
    // 发送响应
    char *response = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n<h1>Hello!</h1>";
    write(new_socket, response, strlen(response));
    
    close(new_socket);
    close(server_fd);
    
    return 0;
}</code></pre>

      <h2 id="part11">第十一部分：并发编程</h2>
      
      <h3 id="chapter11">第 11 章：并发编程</h3>
      
      <h4 id="threads">11.1 线程基础</h4>
      <p>线程是进程内的执行单元，多个线程可以并发执行，共享进程资源。</p>
      
      <pre><code class="language-c">#include &lt;pthread.h&gt;
#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;

#define NUM_THREADS 5

void *thread_func(void *arg) {
    int id = *(int *)arg;
    printf("线程 %d 开始执行\\n", id);
    sleep(1);
    printf("线程 %d 结束执行\\n", id);
    return NULL;
}

int main() {
    pthread_t threads[NUM_THREADS];
    int thread_ids[NUM_THREADS];
    
    // 创建线程
    for (int i = 0; i < NUM_THREADS; i++) {
        thread_ids[i] = i;
        pthread_create(&threads[i], NULL, thread_func, &thread_ids[i]);
    }
    
    // 等待线程结束
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }
    
    printf("所有线程执行完毕\\n");
    return 0;
}</code></pre>

      <h4 id="synchronization">11.2 同步和互斥</h4>
      <p>多线程访问共享资源时需要使用互斥锁、信号量等同步机制避免竞态条件。</p>
      
      <pre><code class="language-c">#include &lt;pthread.h&gt;
#include &lt;stdio.h&gt;

#define NUM_THREADS 5
#define NUM_ITERATIONS 1000

int counter = 0;
pthread_mutex_t mutex;

void *increment(void *arg) {
    for (int i = 0; i < NUM_ITERATIONS; i++) {
        pthread_mutex_lock(&mutex);    // 加锁
        counter++;
        pthread_mutex_unlock(&mutex);  // 解锁
    }
    return NULL;
}

int main() {
    pthread_t threads[NUM_THREADS];
    
    pthread_mutex_init(&mutex, NULL);
    
    // 创建线程
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_create(&threads[i], NULL, increment, NULL);
    }
    
    // 等待线程结束
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }
    
    printf("最终计数器的值：%d\\n", counter);
    printf("期望值：%d\\n", NUM_THREADS * NUM_ITERATIONS);
    
    pthread_mutex_destroy(&mutex);
    return 0;
}</code></pre>

      <h2 id="summary">📝 总结</h2>
      <p>通过本教程，你学习了计算机系统的核心概念：</p>
      
      <ul>
        <li><strong>数据表示：</strong>理解二进制、整数、浮点数的机器级表示</li>
        <li><strong>程序执行：</strong>从源代码到机器指令的转换和执行过程</li>
        <li><strong>处理器架构：</strong>CPU 设计、流水线、指令级并行</li>
        <li><strong>存储器层次：</strong>Cache、主存、虚拟内存的工作原理</li>
        <li><strong>系统编程：</strong>链接、异常控制流、进程、I/O、网络、并发</li>
      </ul>
      
      <blockquote>
        "理解计算机系统是成为优秀程序员的关键。" — Randal E. Bryant
      </blockquote>
      
      <h3 id="further-reading">进一步学习</h3>
      <ol>
        <li><strong>精读 CSAPP 教材：</strong>完成所有练习题和实验</li>
        <li><strong>实践编程：</strong>用 C 语言实现小型操作系统、编译器、数据库等</li>
        <li><strong>学习操作系统：</strong>深入理解 Linux 内核</li>
        <li><strong>学习编译原理：</strong>理解编译器的工作过程</li>
        <li><strong>参与开源项目：</strong>阅读优秀项目的源代码</li>
      </ol>
      
      <p>祝你在计算机系统的学习道路上不断进步！🚀</p>
    `,category:"教程",author:"DRGJU",date:"2024-04-03",readTime:"300 分钟",image:"🖥️",tags:["计算机系统","CSAPP","操作系统","体系结构","系统编程","教程"],views:0}},Z=()=>{const{id:t}=R(),o=s.useMemo(()=>v[t||"1"]||v[1],[t]),[x,u]=s.useState([]),[a,n]=s.useState(""),[g,h]=s.useState(!1),[d,S]=s.useState(!1);s.useEffect(()=>{const c=new DOMParser().parseFromString(o.content,"text/html"),l=Array.from(c.querySelectorAll("h2, h3")).map(p=>({id:p.getAttribute("id")||"",text:p.textContent||"",level:p.tagName==="H2"?2:3}));u(l)},[o.content]),s.useEffect(()=>{const r=()=>{const c=document.querySelectorAll(".article-content h2, .article-content h3");let i="";c.forEach(l=>{const p=l.offsetTop;window.scrollY>=p-200&&(i=l.getAttribute("id")||"")}),n(i)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const m=s.useCallback(r=>{const c=window.location.href,i=`推荐这篇文章：${o.title}`;switch(r){case"copy":navigator.clipboard.writeText(c).then(()=>{S(!0),setTimeout(()=>S(!1),2e3)});break;case"weibo":window.open(`https://service.weibo.com/share/share.php?url=${encodeURIComponent(c)}&title=${encodeURIComponent(i)}`,"_blank","width=600,height=400");break;case"twitter":window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(c)}&text=${encodeURIComponent(i)}`,"_blank","width=600,height=400");break}h(!1)},[o.title]),f=[{name:"微博",icon:"🌐",id:"weibo"},{name:"Twitter",icon:"🐦",id:"twitter"},{name:"复制链接",icon:"🔗",id:"copy"}];return e.jsxs("div",{className:"article-detail-page",children:[e.jsxs("div",{className:"detail-layout container",children:[e.jsxs("article",{className:"article-detail",children:[e.jsxs("header",{className:"article-header",children:[e.jsx(A,{to:"/articles",className:"back-link",children:"← 返回文章列表"}),e.jsxs("div",{className:"article-header-content",children:[e.jsx("span",{className:"article-category-badge",children:o.category}),e.jsx("h1",{className:"article-title",children:o.title}),e.jsx("div",{className:"article-meta",children:e.jsxs("div",{className:"share-section",children:[e.jsxs("button",{className:"share-btn",onClick:()=>h(!g),"aria-label":"分享文章",children:[e.jsx("span",{className:"share-icon-btn",children:"🔗"}),e.jsx("span",{children:"分享"})]}),g&&e.jsxs("div",{className:"share-menu slide-in",children:[f.map(r=>e.jsxs("button",{className:"share-option",onClick:()=>m(r.id),type:"button",children:[e.jsx("span",{className:"share-icon",children:r.icon}),e.jsx("span",{children:r.name})]},r.id)),d&&e.jsx("div",{className:"copy-success",role:"status",children:"✅ 已复制链接"})]})]})})]})]}),e.jsx("div",{className:"article-cover",children:e.jsx("span",{className:"cover-emoji",children:o.image})}),e.jsxs("div",{className:"article-content-wrapper",children:[e.jsx("div",{className:"article-content",dangerouslySetInnerHTML:{__html:o.content}}),e.jsxs("div",{className:"article-tags",children:[e.jsx("span",{className:"tags-label",children:"标签："}),o.tags.map((r,c)=>e.jsx("span",{className:"tag",children:r},c))]})]})]}),x.length>0&&e.jsx("aside",{className:"toc-sidebar",children:e.jsxs("div",{className:"toc-content",children:[e.jsx("h3",{className:"toc-title",children:"📑 目录"}),e.jsx("nav",{className:"toc-nav",children:x.map(r=>e.jsx("a",{href:`#${r.id}`,className:`toc-link level-${r.level} ${a===r.id?"active":""}`,onClick:c=>{c.preventDefault(),document.getElementById(r.id)?.scrollIntoView({behavior:"smooth"})},children:r.text},r.id))})]})})]}),e.jsx("section",{className:"related-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"related-title",children:"相关阅读"}),e.jsx("div",{className:"related-grid",children:Object.entries(v).filter(([r])=>r!==t).slice(0,2).map(([r,c])=>e.jsxs(A,{to:`/article/${r}`,className:"related-card",children:[e.jsx("span",{className:"related-emoji",children:c.image}),e.jsx("h3",{className:"related-title-text",children:c.title}),e.jsx("span",{className:"related-category",children:c.category})]},r))})]})})]})},ee=()=>{const{pathname:t}=I();return s.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t]),null},ie=()=>{const[t,o]=s.useState(!1);s.useEffect(()=>{const u=()=>{window.pageYOffset>300?o(!0):o(!1)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const x=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("button",{className:`back-to-top ${t?"visible":""}`,onClick:x,"aria-label":"返回顶部",children:[e.jsx("span",{className:"back-to-top-icon",children:"↑"}),e.jsx("span",{className:"back-to-top-text",children:"顶部"})]})};function le(){const o=window.location.hostname==="drgju.github.io"?"/article-tutorial-site":"";return e.jsxs(M,{basename:o,children:[e.jsx(ee,{}),e.jsxs("div",{className:"app",children:[e.jsx(J,{}),e.jsx("main",{className:"main-content",children:e.jsxs(B,{children:[e.jsx(b,{path:"/",element:e.jsx(X,{})}),e.jsx(b,{path:"/articles",element:e.jsx($,{})}),e.jsx(b,{path:"/article/:id",element:e.jsx(Z,{})})]})}),e.jsx(Y,{}),e.jsx(ie,{})]})]})}W.createRoot(document.getElementById("root")).render(e.jsx(F.StrictMode,{children:e.jsx(le,{})}));
