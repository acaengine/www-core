function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=_superPropBase(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5jID":function(e,t,n){"use strict";n.r(t);var i,o=n("ofXK"),r=n("3Pt+"),s=n("tyNb"),a=n("THE0"),c=n("OaWH"),l=n("C/ya"),d=n("D/9M"),u=n("g+Po"),f=n("fXoL"),h=n("0IaG"),b=n("BAfr"),m=n("m6yr"),p=n("47y3"),g=function(){return{class:"backoffice-info-with-circle"}},_=function(e){return{id:"about",name:"About",icon:e}},v=function(){return{class:"backoffice-list"}},y=function(e){return{id:"history",name:"History",icon:e}},O=function(e,t){return[e,t]},w=((i=function(e){function t(e,n,i,o){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,n,i)))._service=e,r._route=n,r._router=i,r._dialog=o,r.service=r._service.Users,r}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(t.prototype),"ngOnInit",this).call(this),this._service.title="Users"}},{key:"newItem",value:function(){var e=this;this.modal_ref||(this.modal_ref=this._dialog.open(d.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new a.p(this._service.Users,{}),service:this._service.Users}}),this.modal_ref.componentInstance.event.subscribe((function(t){"done"===t.reason&&e._router.navigate(["/users",t.metadata.item.id])})),this.modal_ref.afterClosed().subscribe((function(){e.unsub("modal_events"),e.modal_ref=null})))}},{key:"editItem",value:function(){var e=this;this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(d.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Users}}),this.modal_ref.afterClosed().subscribe((function(){e.unsub("modal_events"),e.modal_ref=null})))}},{key:"deleteItem",value:function(){var e=this;this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(u.b,Object.assign(Object.assign({},u.a),{data:{title:"Delete user",content:"<p>Are you sure you want delete this user?</p><p>The user will be removed from the system within 24 hours</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.modal_ref.componentInstance.event.subscribe((function(t){"done"===t.reason&&(e.modal_ref.componentInstance.loading="Deleting user...",e.item.delete().then((function(){e._service.notifySuccess('Successfully deleted user "'.concat(e.item.name,'".')),e._router.navigate(["/users"]),e._service.set("BACKOFFICE.removed",e.item.id),e.modal_ref.close()}),(function(t){e.modal_ref.componentInstance.loading=null,e._service.notifyError("Error deleting user. Error: ".concat(t))})))}))),this.modal_ref.afterClosed().subscribe((function(){e.unsub("modal_events"),e.modal_ref=null})))}}]),t}(l.a)).\u0275fac=function(e){return new(e||i)(f.Rb(c.a),f.Rb(s.a),f.Rb(s.c),f.Rb(h.b))},i.\u0275cmp=f.Lb({type:i,selectors:[["app-users"]],features:[f.Ab],decls:5,vars:16,consts:[[1,"container"],[1,"sidebar"],["heading","Users",3,"module","close","event"],[3,"touchrelease"],["name","user","route","users",3,"item","loading","tabs","event"]],template:function(e,t){1&e&&(f.Xb(0,"div",0),f.Xb(1,"div",1),f.Xb(2,"sidebar",2),f.fc("event",(function(e){return t.sidebarEvent(e)})),f.Wb(),f.Wb(),f.Xb(3,"main",3),f.fc("touchrelease",(function(){return t.show_sidebar=!1})),f.Xb(4,"item-display",4),f.fc("event",(function(e){return t.itemEvent(e)})),f.Wb(),f.Wb(),f.Wb()),2&e&&(f.Hb("show",t.show_sidebar),f.Db(2),f.pc("module",t.module)("close",t.show_sidebar),f.Db(2),f.pc("item",t.item)("loading",t.loading_item)("tabs",f.sc(13,O,f.rc(8,_,f.qc(7,g)),f.rc(11,y,f.qc(10,v)))))},directives:[b.a,m.b,p.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),i),C=n("5f3J");function P(e,t){if(1&e&&(f.Xb(0,"div",1),f.Xb(1,"div",2),f.Xb(2,"header"),f.Jc(3,"Permissions"),f.Wb(),f.Xb(4,"section"),f.Xb(5,"table"),f.Xb(6,"tr"),f.Xb(7,"td",3),f.Jc(8,"Tech Support"),f.Wb(),f.Xb(9,"td",4),f.Jc(10),f.Wb(),f.Wb(),f.Xb(11,"tr"),f.Xb(12,"td",3),f.Jc(13,"System Admin"),f.Wb(),f.Xb(14,"td",4),f.Jc(15),f.Wb(),f.Wb(),f.Wb(),f.Wb(),f.Wb(),f.Wb()),2&e){var n=f.jc();f.Db(10),f.Kc(!0===n.item.support),f.Db(5),f.Kc(!0===n.item.sys_admin)}}function W(e,t){if(1&e&&(f.Xb(0,"tr"),f.Xb(1,"td",5),f.Jc(2),f.Wb(),f.Xb(3,"td",6),f.Jc(4),f.Wb(),f.Xb(5,"td",7),f.Xb(6,"div"),f.Jc(7),f.Wb(),f.Xb(8,"div"),f.Jc(9,"View"),f.Wb(),f.Wb(),f.Wb()),2&e){var n=t.$implicit;f.Db(2),f.Kc(null==n.display?null:n.display.started),f.Db(2),f.Kc(null==n.display?null:n.display.ended),f.Db(3),f.Kc(n.systems.length)}}function x(e,t){if(1&e&&(f.Xb(0,"div",4),f.Xb(1,"table"),f.Xb(2,"thead"),f.Xb(3,"td",5),f.Jc(4,"Session Start"),f.Wb(),f.Xb(5,"td",6),f.Jc(6,"Ended"),f.Wb(),f.Xb(7,"td",7),f.Jc(8,"Systems Accessed"),f.Wb(),f.Wb(),f.Xb(9,"tbody"),f.Hc(10,W,10,3,"tr",8),f.Wb(),f.Wb(),f.Wb()),2&e){var n=f.jc(2);f.Db(10),f.pc("ngForOf",n.model.logs)}}function X(e,t){1&e&&(f.Xb(0,"div",9),f.Xb(1,"div",10),f.Jc(2,"No logs found"),f.Wb(),f.Wb())}function M(e,t){if(1&e&&(f.Xb(0,"div",1),f.Hc(1,x,11,1,"div",2),f.Hc(2,X,3,0,"div",3),f.Wb()),2&e){var n=f.jc();f.Db(1),f.pc("ngIf",n.model.logs&&n.model.logs.length>0),f.Db(1),f.pc("ngIf",!n.model.logs||n.model.logs.length<=0)}}var I,k,j=[{path:":id",component:w,children:[{path:"about",component:(k=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._service=e,n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(t){e.item=t})))}}]),t}(C.a),k.\u0275fac=function(e){return new(e||k)(f.Rb(c.a))},k.\u0275cmp=f.Lb({type:k,selectors:[["user-about"]],inputs:{item:"item"},features:[f.Ab],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"field"],[1,"flex"]],template:function(e,t){1&e&&f.Hc(0,P,16,2,"div",0),2&e&&f.pc("ngIf",t.item)},directives:[o.m],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.table-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{width:12em}"]}),k)},{path:"history",component:(I=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._service=e,n.model={},n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(t){e.item=t,e.ngOnChanges({item:new f.K(null,e.item,!1)})})))}},{key:"ngOnChanges",value:function(e){e.item&&this.item&&this.loadUserLogs()}},{key:"loadUserLogs",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this._service.Logs.query({offset:t,user_id:this.item.id}).then((function(n){t||(e.model.list=[]);var i=!0,o=!1,r=void 0;try{for(var s,a=(n||[])[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var c=s.value,l=!1,d=!0,u=!1,f=void 0;try{for(var h,b=e.model.list[Symbol.iterator]();!(d=(h=b.next()).done);d=!0)if(h.value.id===c.id){l=!0;break}}catch(m){u=!0,f=m}finally{try{d||null==b.return||b.return()}finally{if(u)throw f}}l||e.model.list.push(c)}}catch(m){o=!0,r=m}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}}),(function(){return null}))}}]),t}(C.a),I.\u0275fac=function(e){return new(e||I)(f.Rb(c.a))},I.\u0275cmp=f.Lb({type:I,selectors:[["user-history"]],inputs:{item:"item"},features:[f.Ab,f.Bb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],["class","list",4,"ngIf"],["class","info-block",4,"ngIf"],[1,"list"],[1,"start"],[1,"end"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&f.Hc(0,M,3,2,"div",0),2&e&&f.pc("ngIf",t.item)},directives:[o.m,o.l],styles:[".container[_ngcontent-%COMP%]{padding:1em}.table-row[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]{width:10em}"]}),I)},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}],J=n("PCNd");n.d(t,"AppUsersModule",(function(){return R}));var D,R=((D=function e(){_classCallCheck(this,e)}).\u0275mod=f.Pb({type:D}),D.\u0275inj=f.Ob({factory:function(e){return new(e||D)},imports:[[o.c,r.g,s.g.forChild(j),J.a]]}),D)}}]);