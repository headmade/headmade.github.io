webpackJsonp([0x67ef26645b2a,60335399758886],{108:function(e,t){e.exports={layoutContext:{}}},200:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(1),l=a(o),i=n(211),c=a(i),u=n(108),s=a(u);t.default=function(e){return l.default.createElement(c.default,r({},e,s.default))},e.exports=t.default},398:function(e,t){},513:function(e,t,n){e.exports=n.p+"static/brain.589c98b0.png"},208:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l=n(36),i=a(l),c=n(513),u=a(c);n(398);var s=function(e){var t=e.linkList;return o.default.createElement("footer",{className:"footer"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"columns"},o.default.createElement("nav",{className:"footer__nav"},o.default.createElement("ul",{className:"nav__list"},o.default.createElement("li",{className:"nav__item"},o.default.createElement(i.default,{className:"nav__link logo-img",to:"/"},o.default.createElement("img",{src:u.default,alt:"Logo"}))),t.map(function(e){return o.default.createElement("li",{key:e.linkKey,className:"nav__item"},o.default.createElement(i.default,{activeClassName:"active",className:"nav__link",to:e.linkPath},e.linkName))})),o.default.createElement("p",{className:"nav__coop"},"Copyright © 2011 - 2018 HeadMade")))))};t.default=s,e.exports=t.default},399:function(e,t){},514:function(e,t,n){e.exports=n.p+"static/headmade.9577d2aa.png"},209:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),c=a(i),u=n(36),s=a(u),f=n(76),p=a(f),d=n(514),m=a(d);n(399);var h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.linkList,n=e.isOpen,a=e.toggleOpen,r=e.location;return c.default.createElement("header",{className:"header "+("/"===r?"index":"")},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"columns"},c.default.createElement("nav",{className:"header__nav"},c.default.createElement("div",{className:"nav__logo"},c.default.createElement(s.default,{className:"nav__linkLogo",to:"/"},c.default.createElement("img",{src:m.default,alt:"Logo"}))),c.default.createElement("ul",{className:"nav__list "+(n?"nav__list--active":"")},t.map(function(e){return c.default.createElement("li",{key:e.linkKey,className:"nav__item"},c.default.createElement(s.default,{activeClassName:"active",className:"nav__link",to:e.linkPath},e.linkName))})),c.default.createElement("div",{className:"hamburger-wrapper"},c.default.createElement("button",{className:"c-hamburger c-hamburger--htx "+(n?"active":""),onClick:a},c.default.createElement("span",null,"toggle men")))))))},t}(c.default.Component);t.default=(0,p.default)(h),e.exports=t.default},76:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=n(1),u=a(c);t.default=function(e){return function(t){function n(){var e,a,l;r(this,n);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=a=o(this,t.call.apply(t,[this].concat(c))),a.state={isOpen:!1},a.toggleOpen=function(e){a.setState({isOpen:!a.state.isOpen}),e&&e.preventDefault&&e.preventDefault()},l=e,o(a,l)}return l(n,t),n.prototype.render=function(){return u.default.createElement(e,i({},this.props,this.state,{toggleOpen:this.toggleOpen}))},n}(c.Component)},e.exports=t.default},319:function(e,t,n){e.exports=n.p+"static/pfagoraslabpro-bold.28b7469d.ttf"},320:function(e,t,n){e.exports=n.p+"static/pfagoraslabpro-medium.ec250065.ttf"},321:function(e,t,n){e.exports=n.p+"static/pfagoraslabpro-thin.ded70f47.ttf"},211:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),c=a(i),u=n(9),s=a(u),f=n(25),p=a(f),d=n(209),m=a(d),h=n(208),_=a(h);n(400),n(319),n(320),n(321);var v=n(322),y=a(v),b=[{linkPath:"/projects",linkName:"Проекты",linkKey:1},{linkPath:"/contacts",linkName:"Контакты",linkKey:2},{linkPath:"/about",linkName:"О нас",linkKey:3}],E=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.children;return c.default.createElement("div",{className:"generalWrapper"},c.default.createElement(p.default,{title:"Headmade LLC",titleTemplate:"%s - ООО Хэдмейд, headmade.pro",meta:[{name:"description",content:'Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411'}],link:[{rel:"icon",href:y.default}]}),c.default.createElement(m.default,{linkList:b,location:this.props.location.pathname}),e(),c.default.createElement(_.default,{linkList:b}))},t}(c.default.Component);E.propTypes={children:s.default.func},t.default=E,e.exports=t.default},400:function(e,t){},322:function(e,t,n){e.exports=n.p+"static/favicon.ff47c910.ico"}});
//# sourceMappingURL=component---src-layouts-index-js-ae35413639e2a8e81ee6.js.map