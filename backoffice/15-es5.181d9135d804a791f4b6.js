function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5jID":function(e,t,n){"use strict";n.r(t);var i,o=n("ofXK"),r=n("3Pt+"),s=n("tyNb"),a=n("CcG0"),c=n("UN3I"),l=n("OaWH"),d=n("C/ya"),u=n("D/9M"),b=n("g+Po"),h=n("fXoL"),f=n("0IaG"),m=n("BAfr"),p=n("m6yr"),g=n("47y3"),_=function(){return{class:"backoffice-info-with-circle"}},v=function(e){return{id:"about",name:"About",icon:e}},y=function(){return{class:"backoffice-list"}},w=function(e){return{id:"history",name:"History",icon:e}},C=function(e,t){return[e,t]},O=((i=function(e){function t(e,n,i,o){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,n,i)))._service=e,r._route=n,r._router=i,r._dialog=o,r.service=r._service.Users,r}return _inherits(t,e),_createClass(t,[{key:"new",value:function(){var e=this;this._dialog.open(u.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new c.p(this._service.Users,{}),service:this._service.Users}}).componentInstance.event.subscribe((function(t){"done"===t.reason&&e._router.navigate(["/users",t.metadata.item.id])}))}},{key:"edit",value:function(){this.item&&this._dialog.open(u.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Users}})}},{key:"delete",value:function(){var e=this;if(this.item){var t=this._dialog.open(b.b,Object.assign(Object.assign({},b.a),{data:{title:"Delete user",content:"<p>Are you sure you want delete this user?</p><p>The user will be removed from the system within 24 hours</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe((function(n){"done"===n.reason&&(t.componentInstance.loading="Deleting user...",e.item.delete().then((function(){e._service.notifySuccess('Successfully deleted user "'.concat(e.item.name,'".')),e._router.navigate(["/users"]),t.close(),e.unsub("delete_confirm")}),(function(n){t.componentInstance.loading=null,e._service.notifyError("Error deleting user. Error: ".concat(n))})))})))}}}]),t}(d.a)).\u0275fac=function(e){return new(e||i)(h.Qb(l.a),h.Qb(s.a),h.Qb(s.c),h.Qb(f.b))},i.\u0275cmp=h.Kb({type:i,selectors:[["app-users"]],features:[h.zb],decls:5,vars:16,consts:[[1,"container"],[1,"sidebar"],["heading","Users",3,"module","close","event"],[3,"touchrelease"],["name","user","route","users",3,"item","loading","tabs","event"]],template:function(e,t){1&e&&(h.Wb(0,"div",0),h.Wb(1,"div",1),h.Wb(2,"sidebar",2),h.ec("event",(function(e){return t.sidebarEvent(e)})),h.Vb(),h.Vb(),h.Wb(3,"main",3),h.ec("touchrelease",(function(){return t.show_sidebar=!1})),h.Wb(4,"item-display",4),h.ec("event",(function(e){return t.itemEvent(e)})),h.Vb(),h.Vb(),h.Vb()),2&e&&(h.Gb("show",t.show_sidebar),h.Cb(2),h.oc("module",t.module)("close",t.show_sidebar),h.Cb(2),h.oc("item",t.item)("loading",t.loading_item)("tabs",h.rc(13,C,h.qc(8,v,h.pc(7,_)),h.qc(11,w,h.pc(10,y)))))},directives:[m.a,p.b,g.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}"]}),i),P=n("5f3J");function x(e,t){if(1&e&&(h.Wb(0,"div",1),h.Wb(1,"div",2),h.Wb(2,"header"),h.Ic(3,"Permissions"),h.Vb(),h.Wb(4,"section"),h.Wb(5,"table"),h.Wb(6,"tr"),h.Wb(7,"td",3),h.Ic(8,"Tech Support"),h.Vb(),h.Wb(9,"td",4),h.Ic(10),h.Vb(),h.Vb(),h.Wb(11,"tr"),h.Wb(12,"td",3),h.Ic(13,"System Admin"),h.Vb(),h.Wb(14,"td",4),h.Ic(15),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Vb()),2&e){var n=h.ic();h.Cb(10),h.Jc(!0===n.item.support),h.Cb(5),h.Jc(!0===n.item.sys_admin)}}function W(e,t){if(1&e&&(h.Wb(0,"tr"),h.Wb(1,"td",5),h.Ic(2),h.Vb(),h.Wb(3,"td",6),h.Ic(4),h.Vb(),h.Wb(5,"td",7),h.Wb(6,"div"),h.Ic(7),h.Vb(),h.Wb(8,"div"),h.Ic(9,"View"),h.Vb(),h.Vb(),h.Vb()),2&e){var n=t.$implicit;h.Cb(2),h.Jc(null==n.display?null:n.display.started),h.Cb(2),h.Jc(null==n.display?null:n.display.ended),h.Cb(3),h.Jc(n.systems.length)}}function I(e,t){if(1&e&&(h.Wb(0,"div",4),h.Wb(1,"table"),h.Wb(2,"thead"),h.Wb(3,"td",5),h.Ic(4,"Session Start"),h.Vb(),h.Wb(5,"td",6),h.Ic(6,"Ended"),h.Vb(),h.Wb(7,"td",7),h.Ic(8,"Systems Accessed"),h.Vb(),h.Vb(),h.Wb(9,"tbody"),h.Gc(10,W,10,3,"tr",8),h.Vb(),h.Vb(),h.Vb()),2&e){var n=h.ic(2);h.Cb(10),h.oc("ngForOf",n.model.logs)}}function k(e,t){1&e&&(h.Wb(0,"div",9),h.Wb(1,"div",10),h.Ic(2,"No logs found"),h.Vb(),h.Vb())}function V(e,t){if(1&e&&(h.Wb(0,"div",1),h.Gc(1,I,11,1,"div",2),h.Gc(2,k,3,0,"div",3),h.Vb()),2&e){var n=h.ic();h.Cb(1),h.oc("ngIf",n.model.logs&&n.model.logs.length>0),h.Cb(1),h.oc("ngIf",!n.model.logs||n.model.logs.length<=0)}}var M,j,E=[{path:"",component:O,children:[]},{path:":id",component:O,children:[{path:"about",component:(j=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._service=e,n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(t){e.item=t})))}}]),t}(P.a),j.\u0275fac=function(e){return new(e||j)(h.Qb(l.a))},j.\u0275cmp=h.Kb({type:j,selectors:[["user-about"]],inputs:{item:"item"},features:[h.zb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"field"],[1,"flex"]],template:function(e,t){1&e&&h.Gc(0,x,16,2,"div",0),2&e&&h.oc("ngIf",t.item)},directives:[o.m],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.table-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{width:12em}"]}),j)},{path:"history",component:(M=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._service=e,n.model={},n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(t){e.item=t,e.ngOnChanges({item:new h.J(null,e.item,!1)})})))}},{key:"ngOnChanges",value:function(e){e.item&&this.item&&this.loadUserLogs()}},{key:"loadUserLogs",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this._service.Logs.query({offset:t,user_id:this.item.id}).then((function(n){t||(e.model.list=[]);var i=!0,o=!1,r=void 0;try{for(var s,a=(n||[])[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var c=s.value,l=!1,d=!0,u=!1,b=void 0;try{for(var h,f=e.model.list[Symbol.iterator]();!(d=(h=f.next()).done);d=!0)if(h.value.id===c.id){l=!0;break}}catch(m){u=!0,b=m}finally{try{d||null==f.return||f.return()}finally{if(u)throw b}}l||e.model.list.push(c)}}catch(m){o=!0,r=m}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}}),(function(){return null}))}}]),t}(P.a),M.\u0275fac=function(e){return new(e||M)(h.Qb(l.a))},M.\u0275cmp=h.Kb({type:M,selectors:[["user-history"]],inputs:{item:"item"},features:[h.zb,h.Ab()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],["class","list",4,"ngIf"],["class","info-block",4,"ngIf"],[1,"list"],[1,"start"],[1,"end"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&h.Gc(0,V,3,2,"div",0),2&e&&h.oc("ngIf",t.item)},directives:[o.m,o.l],styles:[".container[_ngcontent-%COMP%]{padding:1em}.table-row[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]{width:10em}"]}),M)},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}],S=n("PCNd");n.d(t,"AppUsersModule",(function(){return J}));var A,J=((A=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ob({type:A}),A.\u0275inj=h.Nb({factory:function(e){return new(e||A)},imports:[[o.c,r.g,a.b,s.g.forChild(E),S.a]]}),A)}}]);