webpackJsonp([0x67ef26645b2a,60335399758886],{107:function(e,t){e.exports={layoutContext:{}}},199:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(2),l=a(o),c=n(210),i=a(c),u=n(107),s=a(u);t.default=function(e){return l.default.createElement(i.default,r({},e,s.default))},e.exports=t.default},396:function(e,t){},510:function(e,t,n){e.exports=n.p+"static/brain.589c98b0.png"},206:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=n(36),c=a(l),i=n(510),u=a(i);n(396);var s=function(e){var t=e.linkList;return o.default.createElement("footer",{className:"footer"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"columns"},o.default.createElement("nav",{className:"footer__nav"},o.default.createElement("ul",{className:"nav__list"},o.default.createElement("li",{className:"nav__item"},o.default.createElement(c.default,{className:"nav__link logo-img",to:"/"},o.default.createElement("img",{src:u.default,alt:"Logo"}))),t.map(function(e){return o.default.createElement("li",{key:e.linkKey,className:"nav__item"},o.default.createElement(c.default,{activeClassName:"active",className:"nav__link",to:e.linkPath},e.linkName))})),o.default.createElement("p",{className:"nav__coop"},"Copyright © 2011 - 2018 HeadMade")))))};t.default=s,e.exports=t.default},397:function(e,t){},511:function(e,t,n){e.exports=n.p+"static/headmade.9577d2aa.png"},207:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(2),i=a(c),u=n(36),s=a(u),f=n(208),p=a(f),d=n(511),m=a(d);n(397);var h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.linkList,n=e.isOpen,a=e.toggleOpen,r=e.location;return i.default.createElement("header",{className:"header "+("/"===r?"index":"")},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"columns"},i.default.createElement("nav",{className:"header__nav"},i.default.createElement("div",{className:"nav__logo"},i.default.createElement(s.default,{className:"nav__linkLogo",to:"/"},i.default.createElement("img",{src:m.default,alt:"Logo"}))),i.default.createElement("ul",{className:"nav__list "+(n?"nav__list--active":"")},t.map(function(e){return i.default.createElement("li",{key:e.linkKey,className:"nav__item"},i.default.createElement(s.default,{activeClassName:"active",className:"nav__link",to:e.linkPath},e.linkName))})),i.default.createElement("div",{className:"hamburger-wrapper"},i.default.createElement("button",{className:"c-hamburger c-hamburger--htx "+(n?"active":""),onClick:a},i.default.createElement("span",null,"toggle men")))))))},t}(i.default.Component);t.default=(0,p.default)(h),e.exports=t.default},208:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=n(2),u=a(i);t.default=function(e){return function(t){function n(){var e,a,l;r(this,n);for(var c=arguments.length,i=Array(c),u=0;u<c;u++)i[u]=arguments[u];return e=a=o(this,t.call.apply(t,[this].concat(i))),a.state={isOpen:!1},a.toggleOpen=function(e){a.setState({isOpen:!a.state.isOpen}),e&&e.preventDefault&&e.preventDefault()},l=e,o(a,l)}return l(n,t),n.prototype.render=function(){return u.default.createElement(e,c({},this.props,this.state,{toggleOpen:this.toggleOpen}))},n}(i.Component)},e.exports=t.default},318:function(e,t,n){e.exports=n.p+"static/pfagoraslabpro-bold.28b7469d.ttf"},319:function(e,t,n){e.exports=n.p+"static/pfagoraslabpro-medium.ec250065.ttf"},320:function(e,t,n){e.exports=n.p+"static/pfagoraslabpro-thin.ded70f47.ttf"},210:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(2),i=a(c),u=n(9),s=a(u),f=n(25),p=a(f),d=n(207),m=a(d),h=n(206),_=a(h);n(398),n(318),n(319),n(320);var v=n(321),y=a(v),b=[{linkPath:"/projects",linkName:"Проекты",linkKey:1},{linkPath:"/contacts",linkName:"Контакты",linkKey:2},{linkPath:"/about",linkName:"О нас",linkKey:3}],E=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.children;return i.default.createElement("div",{className:"generalWrapper"},i.default.createElement(p.default,{title:"HeadMade",meta:[{name:"description",content:'Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411'}],link:[{rel:"icon",href:y.default}]}),i.default.createElement(m.default,{linkList:b,location:this.props.location.pathname}),e(),i.default.createElement(_.default,{linkList:b}))},t}(i.default.Component);E.propTypes={children:s.default.func},t.default=E,e.exports=t.default},398:function(e,t){},321:function(e,t,n){e.exports=n.p+"static/favicon.ff47c910.ico"}});
//# sourceMappingURL=component---src-layouts-index-js-703e74fd94c739156f2b.js.map