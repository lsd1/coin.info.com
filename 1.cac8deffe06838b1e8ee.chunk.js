webpackJsonp([1],{"./app/containers/HomePage/index.jsx":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{changeRoute:function(t){return e(K.routeActions.push(t))},dispatch:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=o("./node_modules/_react@16.6.3@react/index.js"),m=o.n(f),y=o("./node_modules/_styled-components@2.4.1@styled-components/dist/styled-components.es.js"),h=o("./node_modules/_reactstrap@6.5.0@reactstrap/dist/reactstrap.es.js"),v=(o("./node_modules/_prop-types@15.6.2@prop-types/index.js"),o("./node_modules/_reselect@3.0.1@reselect/es/index.js")),b=o("./node_modules/_react-redux@5.0.5@react-redux/es/index.js"),_=o("./node_modules/_redux@3.6.0@redux/es/index.js"),g=o("./node_modules/_lodash@4.17.11@lodash/isEmpty.js"),x=o.n(g),j=o("./app/images/token1.png"),w=o.n(j),S=o("./app/components/ServiceBlock/selectors.js"),O=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),k=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),N=y.a.img.withConfig({displayName:"ServiceBlock__IMG"})(["margin-right: 6px;width: 60px;height: 60px;"]),C=y.a.div.withConfig({displayName:"ServiceBlock__Container"})(["background-color: #3498DB;padding: 15px;"]),P=y.a.div.withConfig({displayName:"ServiceBlock__ContainerLogo"})(["background-color: #3498db;"]),E=k(P,{className:"px-3 py-2"},void 0,k("div",{className:"d-inline-block"},void 0,k(N,{src:w.a,alt:"feature logo",className:"card-img-top"})),k("div",{className:"d-inline-block bg-inverse text-white text-nowrap"},void 0,k("h5",{},void 0,"Omni"),k("span",{},void 0,"Featured Property"))),T=function(){return E},B=k("div",{className:"text-white"},void 0,k("span",{},void 0,"LAST UPDATE")),M=function(e){return k("div",{className:"pt-3 pl-3"},void 0,B,k("div",{className:"text-white"},void 0,k("span",{},void 0,"As of Block "+e.last_block)),k("div",{className:"text-white"},void 0,k("span",{},void 0,k("small",{},void 0,e.last_parsed+" UTC"))))},A=y.a.div.withConfig({displayName:"ServiceBlock__StyledContainerSummary"})(["padding: 6px;margin: 0 6px;font-size: 0.9rem"]),R=Object(y.a)(A).withConfig({displayName:"ServiceBlock__StyledContainerSummary1"})(["background-color: #348FE2;"]),$=Object(y.a)(A).withConfig({displayName:"ServiceBlock__StyledContainerSummary2"})(["background-color: #159E9C;"]),I=Object(y.a)(A).withConfig({displayName:"ServiceBlock__StyledContainerSummary3"})(["background-color: #727CB6;"]),z=function(e){var t=e.container;return k(t,{className:"text-white"},void 0,k("span",{className:"d-block lead",style:{fontSize:"0.9rem"}},void 0,e.options.title),k("span",{className:"lead"},void 0,e.options.value))},F=k(T,{}),L=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),O(t,[{key:"render",value:function(){if(x()(this.props)||x()(this.props.status))return null;return k(C,{className:"d-md-flex"},void 0,k("div",{className:"d-inline-block"},void 0,F,m.a.createElement(M,this.props.status)),k("div",{className:"d-md-inline-block d-sm-block w-100"},void 0,k(z,{container:R,options:{title:"LATEST OMNI PRICE",value:function(e){return k("span",{},void 0,Math.round(1e6*(e.omni_btc+1e-7))/1e6," BTC / $",(Math.round(100*(e.omni_usd+1e-5))/100).toFixed(2))}(this.props.status)}}),k(z,{container:$,options:{title:"TOTAL TRANSACTIONS (24 hrs)",value:this.props.status.txcount_24hr}}),k(z,{container:I,options:{title:"OMNI PROPERTIES",value:function(e){return k("span",{},void 0,e.properties_count,k("small",{},void 0," (+"+e.test_properties_count+" test)"))}(this.props.status)}})))}}]),t}(m.a.PureComponent),q=Object(v.b)({status:Object(S.a)()}),D=Object(b.connect)(q,{}),H=(Object(_.c)(D)(L),o("./node_modules/_react-intl@2.7.2@react-intl/lib/index.es.js")),U=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),K=(Object(H.defineMessages)({header:{id:"app.components.HeaderMessage.header",defaultMessage:"{note}",values:{note:U("strong",{},void 0,"Welcome to the new Omniexplorer.info")}}}),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103}(),o("./app/components/TransactionHistory/index.jsx"),o("./app/containers/Transactions/index.jsx"),o("./node_modules/_redux-simple-router@2.0.4@redux-simple-router/lib/index.js")),W=o("./node_modules/_react-icons@2.2.7@react-icons/lib/io/search.js"),G=o.n(W),J=Object(H.defineMessages)({placeholder:{id:"app.components.SearchBox.header",defaultMessage:"Search address, txid or property"}}),Q=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),V=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),X=y.a.input.attrs({type:"search",placeholder:J.placeholder.defaultMessage}).withConfig({displayName:"SearchBox__Input"})([""]),Y=y.a.div.withConfig({displayName:"SearchBox__Wrapper"})(["& div.input-group > input.form-control.searchbox-input {outline: none;border-radius: 19px;max-width: 100%;padding-right: 38px;}& div.input-group > svg.searchbox-icon {height: auto;margin-left: -3rem;z-index: 999;cursor: pointer;}"]),Z=function(e){function t(e){a(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={query:""},o}return c(t,e),V(t,[{key:"handleDoSearch",value:function(e){this.props.changeRoute("/search/"+this.state.query.trim()),this.setState({query:""})}},{key:"handleKeyUp",value:function(e){var t=e.target.value;13===e.keyCode&&t&&this.handleDoSearch(e)}},{key:"render",value:function(){var e=this;return Q(Y,{className:"searchbox-form"},void 0,Q("div",{className:"input-group"},void 0,Q(X,{className:"form-control searchbox-input",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})},onKeyUp:function(t){return e.handleKeyUp(t)}},void 0),Q(G.a,{className:"searchbox-icon",size:24,onClick:function(t){return e.handleDoSearch(t)}})))}}]),t}(m.a.PureComponent),ee=Object(b.connect)(null,l),te=Object(_.c)(ee)(Z),oe=o("./app/utils/injectSaga.js"),ne=o("./app/containers/Transactions/saga.js"),re=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),ie=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=y.a.div.withConfig({displayName:"HomePage__Layout"})(["background-color: #F5F5F5;padding: 0;height:100%;"]),se=y.a.div.withConfig({displayName:"HomePage__Layout2"})(["margin:0 auto;width:50%;margin-top:20%;& div.searchbox-form{transform: scale(1.3);}"]),ce=re(se,{},void 0,re(h.v,{},void 0,re(h.h,{sm:!0},void 0,re(te,{})))),le=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),ie(t,[{key:"render",value:function(){return re(ae,{className:"container-fluid"},void 0,ce)}}]),t}(m.a.PureComponent),ue=Object(oe.a)({key:"transactions",saga:ne.a});t.default=Object(_.c)(ue)(le)},"./node_modules/_react-icons@2.2.7@react-icons/lib/io/search.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=o("./node_modules/_react@16.6.3@react/index.js"),a=n(i),s=o("./node_modules/_react-icon-base@2.1.0@react-icon-base/lib/index.js"),c=n(s),l=function(e){return a.default.createElement(c.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m34.8 30.2c0.3 0.3 0.3 0.8 0 1.1l-3.4 3.5c-0.1 0.1-0.4 0.2-0.6 0.2s-0.4-0.1-0.6-0.2l-6.5-6.8c-2 1.2-4.1 1.8-6.3 1.8-6.8 0-12.4-5.5-12.4-12.4s5.6-12.4 12.4-12.4 12.4 5.5 12.4 12.4c0 2.1-0.6 4.2-1.7 6.1z m-17.4-20.4c-4.1 0-7.6 3.4-7.6 7.6s3.5 7.6 7.6 7.6 7.5-3.4 7.5-7.6-3.3-7.6-7.5-7.6z"})))};t.default=l,e.exports=t.default}});