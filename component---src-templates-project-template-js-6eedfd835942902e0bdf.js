webpackJsonp([0x8532625e7af6],{109:function(e,t){},75:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=l(r);a(109);var c=function(){return n.default.createElement("div",{className:"mouse"},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28.375",height:"70.375",viewBox:"0 0 34.375 80.375",id:"mouse"},n.default.createElement("path",{id:"mouse-scroll",d:"M32.927,37.933c0,6.972-5.652,12.625-12.625,12.625h-6.333C6.997,50.558,1.344,44.905,1.344,37.933V13.917  c0-6.972,5.652-12.625,12.625-12.625l6.333,0c6.973,0,12.625,5.653,12.625,12.625V37.933zM19.198,15.125c0,1.104-0.895,2-2,2h-0.125c-1.104,0-2-0.896-2-2V9.166c0-1.104,0.896-2,2-2h0.125c1.105,0,2,0.896,2,2V15.125zM17.136 7.166 L17.166 1.437zM17.136 17.125 L17.136 23.208z"}),n.default.createElement("polyline",{id:"arrow1",points:"26.948,58.5 17.136,68.313 7.323,58.5"}),n.default.createElement("polyline",{id:"arrow2",points:"26.948,65.25 17.136,75.063 7.323,65.25"})))};t.default=c,e.exports=t.default},77:function(e,t){"use strict";t.__esModule=!0;var a=function(e,t){function a(e,t,a,l){return e/=l/2,e<1?a/2*e*e+t:(e-=1,-a/2*(e*(e-2)-1)+t)}function l(t){t+=m;var c=a(t,n,s,e);r.scrollTop=c,t<e&&setTimeout(function(){l(t)},m)}var r=document.querySelector(t),n=r.scrollTop,c=r.scrollHeight,s=c-n,m=20;l(0)};t.default=a,e.exports=t.default},210:function(e,t){"use strict";t.__esModule=!0;var a=function(e){var t=e.currentTarget,a=t.dataset.monitor;console.log("---",a);for(var l=document.querySelector(".monitor-wrapper--js"),r=document.querySelector(".monitor--js"),n=l.querySelectorAll(".btn-list__item--js"),c=0;c<n.length;c++)n[c].classList.remove("active"),t.classList.add("active"),r.classList.remove("desktop","tablet","phone"),r.classList.add(a)};t.default=a,e.exports=t.default},218:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.data,a=t.markdownRemark,l=a.frontmatter,r=a.html;return c.default.createElement("main",{className:"myMain"},c.default.createElement(o.default,null,c.default.createElement("title",null,l.title),c.default.createElement("meta",{name:"description",content:l.description})),c.default.createElement("section",{className:"project"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"columns large-6 small-12 medium-order-2 small-order-2 large-order-1"},c.default.createElement("div",{className:"project__lending"},c.default.createElement("div",{className:"project__lending-img"},c.default.createElement("img",{src:(0,g.default)(l.longDesktopImg,l.path,"longDesktop"),alt:"longDesktopImg"})),c.default.createElement("div",{onClick:function(){return(0,E.default)(4e3,".project__lending-img")}},c.default.createElement(d.default,null)))),c.default.createElement("div",{className:"columns large-6 small-12 small-order-1 medium-order-1 large-order-2"},c.default.createElement("ul",{className:"breadcrumbs"},c.default.createElement("li",{className:"breadcrumbs__item"},c.default.createElement(m.default,{to:"/",className:"breadcrumbs__link"},"Главная")),c.default.createElement("li",{className:"breadcrumbs__item"},c.default.createElement(m.default,{to:"/projects",className:"breadcrumbs__link"},"Проекты")),c.default.createElement("li",{className:"breadcrumbs__item"},l.title)),c.default.createElement("div",{className:"info"},c.default.createElement("h1",{className:"h1"},l.title),c.default.createElement("a",{className:"link",target:"_blank",href:l.href},l.href),c.default.createElement("hr",{className:"hr"}),c.default.createElement("h3",{className:"item__caption"},"Описание"),c.default.createElement("p",{className:"info__text",dangerouslySetInnerHTML:{__html:r}}),c.default.createElement("hr",{className:"hr"}),c.default.createElement("h3",{className:"item__caption"},"Наше участие"),c.default.createElement("ul",{className:"info__list"},l.participation.map(function(e,t){return c.default.createElement("li",{key:t,className:"info__item"},c.default.createElement("span",null,e))})),c.default.createElement("hr",{className:"hr"}),c.default.createElement("a",{target:"_blank",href:l.href,className:"btn"},"Перейти на сайт"))),c.default.createElement("div",{className:"columns large-6 small-12 medium-order-3 small-order-3"},c.default.createElement("div",{className:"statistics info"},c.default.createElement("h3",{className:"item__caption"},"Показатели"),c.default.createElement("ul",{className:"info__list"},l.statistics.map(function(e,t){return c.default.createElement("li",{key:t,className:"info__item"},c.default.createElement("span",null,e))})),c.default.createElement("hr",{className:"hr"}),c.default.createElement("h3",{className:"item__caption"},"Технологии"),c.default.createElement("ul",{className:"info__list"},l.technologies.map(function(e,t){return c.default.createElement("li",{key:t,className:"info__item"},c.default.createElement("span",null,e))})),c.default.createElement("hr",{className:"hr"}),c.default.createElement("h3",{className:"item__caption"},"Документы"),l.files&&c.default.createElement("ul",{className:"info__list"},l.files.map(function(e,t){return c.default.createElement("li",{key:t,className:"info__item"},c.default.createElement("a",{target:"_blank",href:"/downloads"+l.path+e+".pdf"},e))})))),c.default.createElement("div",{className:"columns large-6 small-12 medium-order-4 small-order-4"},c.default.createElement("div",{className:"monitor-wrapper--js"},c.default.createElement("div",{className:"monitor-block statistics"},c.default.createElement("div",{className:"monitor__wrapper"},c.default.createElement("div",{className:"monitor monitor--js desktop"},c.default.createElement("div",{className:"monitor__stand"}),c.default.createElement("div",{className:"monitor__stand-bot"}),c.default.createElement("div",{className:"monitor__img-wrapper"},c.default.createElement("img",{src:(0,g.default)(l.desktopImg,l.path,"desktop"),alt:"desktopImg",className:"monitor__img monitor__img--desktop"}),c.default.createElement("img",{src:(0,g.default)(l.tabletImg,l.path,"tablet"),alt:"tabletImg",className:"monitor__img monitor__img--tablet"}),c.default.createElement("img",{src:(0,g.default)(l.phoneImg,l.path,"phone"),alt:"phoneImg",className:"monitor__img monitor__img--phone"}))))),c.default.createElement("ul",{className:"monitor__btn-list"},c.default.createElement("li",{className:"btn-list__item btn-list__item--js active","data-monitor":"desktop",onClick:function(e){return(0,_.default)(e)}},c.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 48 48",height:"48px",id:"Layer_1",version:"1.1",viewBox:"0 0 48 48",width:"48px"},c.default.createElement("path",{d:"M43,35H29.195c0.595,3.301,2.573,5.572,4.401,7H36c0.553,0,1,0.447,1,1  s-0.447,1-1,1H12c-0.553,0-1-0.447-1-1s0.447-1,1-1h2.403c1.827-1.428,3.807-3.699,4.401-7H5c-2.209,0-4-1.791-4-4V8  c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v23C47,33.209,45.209,35,43,35z M17.397,42h13.205c-1.595-1.682-3.015-3.976-3.459-7  h-6.287C20.412,38.024,18.992,40.318,17.397,42z M45,8c0-1.104-0.896-2-2-2H5C3.896,6,3,6.896,3,8v19l0,0h42V8z M45,29H3l0,0v2  c0,1.104,0.896,2,2,2h14l0,0h10l0,0h14c1.104,0,2-0.896,2-2V29z M24,32c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1  S24.553,32,24,32z"}))),c.default.createElement("li",{className:"btn-list__item btn-list__item--js rotate","data-monitor":"tablet",onClick:function(e){return(0,_.default)(e)}},c.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48px",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 33.994 33.994"},c.default.createElement("g",null,c.default.createElement("path",{d:"M27.125,0H6.867C5.59,0,4.562,1.033,4.562,2.309v29.377c0,1.272,1.028,2.308,2.305,2.308h20.258   c1.273,0,2.306-1.035,2.306-2.308V2.309C29.433,1.033,28.399,0,27.125,0z M16.997,33.129c-0.758,0-1.371-0.613-1.371-1.37   c0-0.758,0.613-1.372,1.371-1.372c0.756,0,1.371,0.614,1.371,1.372C18.368,32.516,17.753,33.129,16.997,33.129z M27.098,29.186   H6.896V2.774h20.202V29.186z"})))),c.default.createElement("li",{className:"btn-list__item btn-list__item--js","data-monitor":"phone",onClick:function(e){return(0,_.default)(e)}},c.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:"48px",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 472.807 472.807"},c.default.createElement("g",null,c.default.createElement("path",{d:"M338.649,0H134.158c-13.567,0-24.605,10.632-24.605,23.695v425.433    c0,13.046,11.03,23.679,24.605,23.679h204.491c13.575,0,24.605-10.632,24.605-23.679V23.687C363.254,10.624,352.223,0,338.649,0z     M200.707,36.822H272.1v5.007h-71.393C200.707,41.83,200.707,36.822,200.707,36.822z M236.407,448.006    c-7.592,0-13.762-6.17-13.762-13.754c0-7.576,6.17-13.737,13.762-13.737c7.592,0,13.762,6.17,13.762,13.737    C250.169,441.837,243.999,448.006,236.407,448.006z M346.46,396.52H126.379V70.337H346.46V396.52z"}))))))))))}t.__esModule=!0,t.pageQuery=void 0,t.default=r;var n=a(1),c=l(n),s=a(36),m=l(s),i=a(25),o=l(i),u=a(75),d=l(u),f=a(210),_=l(f),p=a(77),E=l(p),h=a(43),g=l(h);t.pageQuery="** extracted graphql fragment **"},43:function(e,t){"use strict";t.__esModule=!0;var a=function(e,t,a){return e?e:"/images/projects"+t+a+".png"};t.default=a,e.exports=t.default}});
//# sourceMappingURL=component---src-templates-project-template-js-6eedfd835942902e0bdf.js.map