webpackJsonp([0],{133:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(241);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},154:function(e,t){},220:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=n(r),o=a(209),u=a(242),c=n(u);a(154);var s=function(e){var t=e.store;return l.default.createElement(o.Provider,{store:t},l.default.createElement(c.default,null))};s.propTypes={store:r.PropTypes.object.isRequired},t.default=s},221:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(79),r=a(250),l=function(e){return e&&e.__esModule?e:{default:e}}(r),o=(0,n.combineReducers)({table:l.default});t.default=o},241:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={type:b,items:e};return t&&(a.defaultItems=e),a}function l(e){return{type:v,items:e}}function o(e){return function(t,a){var n=Object.assign({},a()),r=n.table.selectedItems;-1!==n.table.selectedItems.indexOf(e)?(r.splice(n.table.selectedItems.indexOf(e),1),t(l(r))):(r.push(e),t(l(r)))}}function u(){return function(e,t){var a=Object.assign({},t()),n=a.table.selectedItems;n=n.length===a.table.items.length?[]:a.table.items.map(function(e){return e.id}),e(l(n))}}function c(e){return function(t,a){e=e.toLowerCase();var n=Object.assign({},a()),o=n.table.defaultItems.filter(function(t){return-1!==t.marca.toLowerCase().indexOf(e)||-1!==t.modelo.toLowerCase().indexOf(e)||-1!==t.placa.toLowerCase().indexOf(e)||-1!==t.valor.toLowerCase().indexOf(e)||-1!==t.combustivel.toLowerCase().indexOf(e)});t(l([])),t(r(o,!1))}}function s(){return function(e,t){e(r(Object.assign({},t()).table.defaultItems))}}function i(e){return function(t,a){var n=Object.assign({},a()),l=n.table.defaultItems;e.id=l.length+1,l.push(e),t(r(l))}}function d(){return function(e){h.default.get(p.default.dataUrl).then(function(t){e(r(t.data.data,!0))}).catch(function(e){console.error(e)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.SET_SELECTED_ITEMS=t.RECEIVE_ITEMS=void 0,t.receiveItems=r,t.setSelectedItems=l,t.toggleSelected=o,t.toggleSelectAll=u,t.triggerSearch=c,t.resetItems=s,t.addCar=i,t.fetchItems=d;var f=a(247),p=n(f),m=a(223),h=n(m),b=t.RECEIVE_ITEMS="RECEIVE_ITEMS",v=t.SET_SELECTED_ITEMS="SET_SELECTED_ITEMS"},242:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=n(r),o=a(243),u=n(o),c=a(248),s=n(c);a(154);var i=function(){return l.default.createElement("div",{className:"home"},l.default.createElement(u.default,null),l.default.createElement(s.default,null))};t.default=i},243:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=function(e){return e&&e.__esModule?e:{default:e}}(u);a(317);var s=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return l(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"navbar-header"},c.default.createElement("a",{className:"navbar-brand",href:"#"},c.default.createElement("img",{src:"img/logo.png"})))))}}]),t}(c.default.Component);s.propTypes={},t.default=s},244:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),s=n(c),i=a(402),d=a(81),f=(n(d),function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={error:null,form:{plate:{value:"",id:"placa"},model:{value:"",id:"modelo"},brand:{value:"",id:"marca"},fuel:{value:"",id:"combustivel"},price:{value:"",id:"valor"}}},a.addCar=a.addCar.bind(a),a.handleChange=a.handleChange.bind(a),a.getDefaultState=a.getDefaultState.bind(a),a}return o(t,e),u(t,[{key:"getDefaultState",value:function(){return{error:null,form:{plate:{value:"",id:"placa"},model:{value:"",id:"modelo"},brand:{value:"",id:"marca"},fuel:{value:"",id:"combustivel"},price:{value:"",id:"valor"}}}}},{key:"handleChange",value:function(e){var t=e.target,a=Object.assign({},this.state);a.error=null,a.form[t.id].value=t.value,this.setState(a)}},{key:"addCar",value:function(){var e={},t=Object.assign({},this.state);for(var a in this.state.form){if(!this.state.form[a].value||""===this.state.form[a].value)return t.error="Preencha todos os campos.",void this.setState(t);e[this.state.form[a].id]=this.state.form[a].value}this.props.addCar(e),this.setState(this.getDefaultState),this.props.close()}},{key:"render",value:function(){return s.default.createElement(i.Modal,{show:this.props.show,onHide:this.props.close},s.default.createElement(i.Modal.Header,{closeButton:!0},s.default.createElement(i.Modal.Title,null,"Novo Carro")),s.default.createElement(i.Modal.Body,null,s.default.createElement("p",{className:"text-danger"},this.state.error),s.default.createElement(i.FormGroup,null,s.default.createElement(i.ControlLabel,null,"Placa"),s.default.createElement(i.FormControl,{type:"text",id:"plate",value:this.state.form.plate.value,placeholder:"Placa",onChange:this.handleChange})),s.default.createElement(i.FormGroup,null,s.default.createElement(i.ControlLabel,null,"Modelo"),s.default.createElement(i.FormControl,{type:"text",id:"model",value:this.state.form.model.value,placeholder:"Modelo",onChange:this.handleChange})),s.default.createElement(i.FormGroup,null,s.default.createElement(i.ControlLabel,null,"Marca"),s.default.createElement(i.FormControl,{type:"text",id:"brand",value:this.state.form.brand.value,placeholder:"Marca",onChange:this.handleChange})),s.default.createElement(i.FormGroup,null,s.default.createElement(i.ControlLabel,null,"Combustível"),s.default.createElement(i.FormControl,{type:"text",id:"fuel",value:this.state.form.fuel.value,placeholder:"Combustível",onChange:this.handleChange})),s.default.createElement(i.FormGroup,null,s.default.createElement(i.ControlLabel,null,"Preço"),s.default.createElement(i.FormControl,{type:"text",id:"price",value:this.state.form.price.value,placeholder:"Preço",onChange:this.handleChange}))),s.default.createElement(i.Modal.Footer,null,s.default.createElement("button",{className:"btn btn-default",onClick:this.props.close},"Cancelar"),s.default.createElement("button",{className:"btn btn-success",onClick:this.addCar},"Adicionar")))}}]),t}(s.default.Component));f.propTypes={},t.default=f},245:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),s=n(c),i=a(81),d=n(i),f=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a.toggleChecked=a.toggleChecked.bind(a),a}return o(t,e),u(t,[{key:"toggleChecked",value:function(){this.props.toggleSelected(this.props.item.id)}},{key:"render",value:function(){return s.default.createElement("tr",{className:"table-item"},s.default.createElement("td",null,s.default.createElement(d.default,{checked:this.props.isSelected,error:!1,onValueChange:this.toggleChecked,label:""})),s.default.createElement("td",null,s.default.createElement("p",{className:"table-data plate"},this.props.item.placa)),s.default.createElement("td",null,s.default.createElement("p",{className:"table-data model"},this.props.item.modelo)),s.default.createElement("td",null,s.default.createElement("p",{className:"table-data brand"},this.props.item.marca)),s.default.createElement("td",null,s.default.createElement("p",{className:"table-data image"},s.default.createElement("a",{href:this.props.item.imagem||"#"},this.props.item.imagem?"Imagem":"Sem foto"))),s.default.createElement("td",null,s.default.createElement("p",{className:"table-data fuel"},this.props.item.combustivel)),s.default.createElement("td",null,s.default.createElement("p",{className:"table-data price"},this.props.item.valor)))}}]),t}(s.default.Component);f.propTypes={isSelected:c.PropTypes.bool.isRequired,toggleSelected:c.PropTypes.func.isRequired},t.default=f},246:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),s=n(c),i=a(245),d=n(i),f=a(244),p=n(f),m=a(81),h=n(m);a(318);var b=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={search:"",carAdderVisible:!1},a.onClickSearch=a.onClickSearch.bind(a),a.onChangeSearch=a.onChangeSearch.bind(a),a.onKeyPress=a.onKeyPress.bind(a),a.showAdder=a.showAdder.bind(a),a.closeAdder=a.closeAdder.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"onClickSearch",value:function(){var e=this.state.search;""!==e?this.props.triggerSearch(e):this.props.resetItems()}},{key:"onChangeSearch",value:function(e){this.setState({search:e.target.value})}},{key:"onKeyPress",value:function(e){13==e.charCode&&this.onClickSearch()}},{key:"showAdder",value:function(){this.setState({carAdderVisible:!0})}},{key:"closeAdder",value:function(){this.setState({carAdderVisible:!1})}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.items.length;t++)e.push(s.default.createElement(d.default,{key:t,item:this.props.items[t],isSelected:-1!==this.props.selectedItems.indexOf(this.props.items[t].id),toggleSelected:this.props.toggleSelected}));return s.default.createElement("section",{className:"cars"},s.default.createElement(p.default,{show:this.state.carAdderVisible,close:this.closeAdder,addCar:this.props.addCar}),s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"col-xs-6"},s.default.createElement("button",{className:"btn btn-success add-car",onClick:this.showAdder},"Novo Carro")),s.default.createElement("div",{className:"col-xs-6"},s.default.createElement("div",{className:"input-group"},s.default.createElement("input",{type:"text",className:"form-control",placeholder:"Pesquisar",onKeyPress:this.onKeyPress,onChange:this.onChangeSearch}),s.default.createElement("div",{className:"input-group-addon",onClick:this.onClickSearch},s.default.createElement("span",{className:"glyphicon glyphicon-search"}," "))))),s.default.createElement("div",{className:"container"},s.default.createElement("table",{className:"table table-bordered table-hover"},s.default.createElement("thead",null,s.default.createElement("td",null,s.default.createElement(h.default,{checked:this.props.selectedItems.length===this.props.items.length,error:!1,onValueChange:this.props.toggleSelectAll,label:""})),s.default.createElement("td",null,s.default.createElement("p",{className:"name"},"Placa")),s.default.createElement("td",null,s.default.createElement("p",{className:"name"},"Modelo")),s.default.createElement("td",null,s.default.createElement("p",{className:"name"},"Marca")),s.default.createElement("td",null,s.default.createElement("p",{className:"name"},"Foto")),s.default.createElement("td",null,s.default.createElement("p",{className:"name"},"Combustível")),s.default.createElement("td",null,s.default.createElement("p",{className:"name"},"Valor"))),s.default.createElement("tbody",null,e))),s.default.createElement("div",{className:"pages-container"},s.default.createElement("span",{className:"page-item arrow"},s.default.createElement("i",{className:"fa fa-angle-double-left"})),s.default.createElement("span",{className:"page-item active"},"1"),s.default.createElement("span",{className:"page-item"},"2"),s.default.createElement("span",{className:"page-item"},"3"),s.default.createElement("span",{className:"page-item"},"4"),s.default.createElement("span",{className:"page-item"},"5"),s.default.createElement("span",{className:"page-item arrow"},s.default.createElement("i",{className:"fa fa-angle-double-right"}))))}}]),t}(s.default.Component);b.propTypes={items:c.PropTypes.array.isRequired,fetchItems:c.PropTypes.func.isRequired,selectedItems:c.PropTypes.array.isRequired,toggleSelectAll:c.PropTypes.func.isRequired,toggleSelected:c.PropTypes.func.isRequired,addCar:c.PropTypes.func.isRequired},t.default=b},247:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={dataUrl:"https://api.myjson.com/bins/18qzhj"}},248:function(e,t,a){"use strict";function n(e){return{items:e.table.items,updated:e.table.updated,selectedItems:e.table.selectedItems}}function r(e){return{fetchItems:function(){e((0,c.fetchItems)())},toggleSelected:function(t){e((0,c.toggleSelected)(t))},triggerSearch:function(t){e((0,c.triggerSearch)(t))},addCar:function(t){e((0,c.addCar)(t))},resetItems:function(){e((0,c.resetItems)())},toggleSelectAll:function(){e((0,c.toggleSelectAll)())}}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(209),o=a(246),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=a(133),s=(0,l.connect)(n,r)(u.default);t.default=s},249:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(0),l=n(r),o=a(222),u=n(o),c=a(18),s=a(79),i=a(221),d=n(i),f=a(220),p=n(f),m=(0,s.createStore)(d.default,(0,s.applyMiddleware)(u.default));(0,c.render)(l.default.createElement(p.default,{store:m}),document.getElementById("app"))},250:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case r.RECEIVE_ITEMS:var a=Object.assign({},e);return a.items=t.items,a.updated=Date.now(),t.defaultItems&&(a.defaultItems=t.defaultItems),a;case r.SET_SELECTED_ITEMS:var n=Object.assign({},e);return n.selectedItems=t.items,n.updated=Date.now(),n;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=a(133),l={updated:Date.now(),items:[],selectedItems:[],defaultItems:[]}},316:function(e,t){},317:function(e,t){},318:function(e,t){},81:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=function(e){return e&&e.__esModule?e:{default:e}}(u);a(316);var s=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a.clicked=a.clicked.bind(a),a.clickedLink=a.clickedLink.bind(a),a}return l(t,e),o(t,[{key:"clicked",value:function(){this.props.onValueChange(!this.props.checked,this.props.data)}},{key:"clickedLink",value:function(e){e.stopPropagation()}},{key:"render",value:function(){return c.default.createElement("div",{className:this.props.error?"checkbox-container error":"checkbox-container",onClick:this.clicked},c.default.createElement("div",{className:this.props.checked?"checkbox checked":"checkbox unchecked"},c.default.createElement("i",{className:"fa fa-check"})),c.default.createElement("div",{className:"checkbox-label"},c.default.createElement("p",null,this.props.label," ",c.default.createElement("a",{className:this.props.linkUrl?"":"hidden",href:this.props.linkUrl,target:"_blank",onClick:this.clickedLink},this.props.linkText))))}}]),t}(c.default.Component);s.propTypes={error:u.PropTypes.bool.isRequired,onValueChange:u.PropTypes.func.isRequired,checked:u.PropTypes.bool.isRequired,label:u.PropTypes.string.isRequired,data:u.PropTypes.object,linkUrl:u.PropTypes.string,linkText:u.PropTypes.string},t.default=s}},[249]);