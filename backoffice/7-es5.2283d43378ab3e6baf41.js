function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jtLk:function(e,t,n){"use strict";n.r(t);var i,o=n("ofXK"),s=n("3Pt+"),c=n("tyNb"),r=n("CcG0"),a=n("UN3I"),d=n("OaWH"),l=n("C/ya"),u=n("D/9M"),b=n("g+Po"),h=n("fXoL"),m=n("0IaG"),f=n("BAfr"),g=n("1jcm"),p=n("m6yr"),_=n("47y3"),y=function(){return{connected:!1,running:!0}},v=function(){return{}},C=function(){return{class:"backoffice-info-with-circle"}},w=function(e){return{id:"about",name:"About",icon:e}},O=function(){return{class:"backoffice-documents"}},P=function(e,t){return{id:"systems",name:"Systems",count:e,icon:t}},x=function(e,t){return[e,t]},k=((i=function(e){function t(e,n,i,o){var s;return _classCallCheck(this,t),(s=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,n,i)))._service=e,s._route=n,s._router=i,s._dialog=o,s.service=s._service.Modules,s}return _inherits(t,e),_createClass(t,[{key:"loadValues",value:function(){var e=this;this._service.Systems.query({offset:0,limit:1,module_id:this.item.id}).then((function(){e.system_count=e._service.Systems.last_total}))}},{key:"new",value:function(){var e=this;this._dialog.open(u.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new a.h(this._service.Modules,{}),service:this._service.Modules}}).componentInstance.event.subscribe((function(t){"done"===t.reason&&e._router.navigate(["/devices",t.metadata.item.id])}))}},{key:"edit",value:function(){this.item&&this._dialog.open(u.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Modules}})}},{key:"delete",value:function(){var e=this;if(this.item){var t=this._dialog.open(b.b,Object.assign(Object.assign({},b.a),{data:{title:"Delete device",content:"<p>Are you sure you want delete this device?</p><p>Deleting this will device <strong>immediately</strong> remove it from any system associated with it</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe((function(n){"done"===n.reason&&(t.componentInstance.loading="Deleting device...",e.item.delete().then((function(){e._service.notifySuccess('Successfully deleted device "'.concat(e.item.name,'".')),e._router.navigate(["/modules"]),t.close(),e.unsub("delete_confirm")}),(function(n){t.componentInstance.loading=null,e._service.notifyError("Error deleting device. Error: ".concat(n))})))})))}}}]),t}(l.a)).\u0275fac=function(e){return new(e||i)(h.Qb(d.a),h.Qb(c.a),h.Qb(c.c),h.Qb(m.b))},i.\u0275cmp=h.Kb({type:i,selectors:[["app-devices"]],features:[h.zb],decls:8,vars:20,consts:[[1,"container"],[1,"sidebar"],["heading","Devices",3,"module","close","queryParams","event"],[1,"toggle"],["labelPosition","before",3,"ngModel","ngModelChange"],[3,"touchrelease"],["name","device","route","modules",3,"item","tabs","event"]],template:function(e,t){1&e&&(h.Wb(0,"div",0),h.Wb(1,"div",1),h.Wb(2,"sidebar",2),h.ec("event",(function(e){return t.sidebarEvent(e)})),h.Wb(3,"div",3),h.Wb(4,"mat-slide-toggle",4),h.ec("ngModelChange",(function(e){return t.only_disconnected=e})),h.Ic(5," Only Disconnected "),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Wb(6,"main",5),h.ec("touchrelease",(function(){return t.show_sidebar=!1})),h.Wb(7,"item-display",6),h.ec("event",(function(e){return t.itemEvent(e)})),h.Vb(),h.Vb(),h.Vb()),2&e&&(h.Gb("show",t.show_sidebar),h.Cb(2),h.oc("module",t.module)("close",t.show_sidebar)("queryParams",t.only_disconnected?h.pc(8,y):h.pc(9,v)),h.Cb(2),h.oc("ngModel",t.only_disconnected),h.Cb(3),h.oc("item",t.item)("tabs",h.rc(17,x,h.qc(11,w,h.pc(10,C)),h.rc(14,P,t.system_count,h.pc(13,O)))))},directives:[f.a,g.a,s.k,s.n,p.b,_.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}.toggle[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;padding-right:1em}"]}),i),M=n("5f3J"),W=n("YxBP"),V=n("bTqV"),I=n("rUqb");function S(e,t){if(1&e){var n=h.Xb();h.Wb(0,"div",1),h.Wb(1,"div",2),h.Wb(2,"header"),h.Ic(3,"Logic for system:\xa0"),h.Wb(4,"span"),h.Ic(5),h.Vb(),h.Vb(),h.Wb(6,"section"),h.Wb(7,"button",3),h.Ic(8,"Stop Device"),h.Vb(),h.Vb(),h.Wb(9,"header"),h.Ic(10,"Settings "),h.Wb(11,"span",4),h.ec("touchrelease",(function(){return h.yc(n),h.ic().toggleSettings()})),h.Ic(12),h.Vb(),h.Vb(),h.Wb(13,"section"),h.Rb(14,"settings-form-field",5),h.Vb(),h.Vb(),h.Vb()}if(2&e){var i=h.ic();h.Cb(5),h.Jc(null==i.system?null:i.system.name),h.Cb(7),h.Jc(!1===i.merged?"This module":"Merged"),h.Cb(2),h.oc("ngModel",i.settings)("readonly",!0)}}var j,D=((j=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._service=e,n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(t){e.item=t,e.loadDependency(),e.loadSystem()})))}},{key:"ngOnChanges",value:function(e){e.item&&(this.loadDependency(),this.loadSystem())}},{key:"loadDependency",value:function(){var e=this;this.item&&this.item.dependency_id&&this._service.Drivers.show(this.item.dependency_id).then((function(t){e.dependency=t,e.updateSettings()}))}},{key:"loadSystem",value:function(){var e=this;this.item&&this.item.system_id&&this._service.Systems.show(this.item.system_id).then((function(t){e.system=t,e.updateSettings()}))}},{key:"toggleSettings",value:function(){this.merged=!1===this.merged,this.updateSettings()}},{key:"updateSettings",value:function(){this.item&&(!1!==this.merged?(this.settings=Object(W.b)("",this.item.settings.settings_string||""),this.dependency&&(this.settings=Object(W.b)(this.settings,this.dependency.settings.settings_string||""))):this.settings=this.item.settings.settings_string||"")}}]),t}(M.a)).\u0275fac=function(e){return new(e||j)(h.Qb(d.a))},j.\u0275cmp=h.Kb({type:j,selectors:[["device-about"]],inputs:{item:"item"},features:[h.zb,h.Ab()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],["mat-button",""],[3,"touchrelease"],[3,"ngModel","readonly"]],template:function(e,t){1&e&&h.Gc(0,S,15,4,"div",0),2&e&&h.oc("ngIf",t.item)},directives:[o.m,V.b,p.b,I.a,s.k,s.n],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.1em}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7em;color:rgba(0,0,0,.6);padding:0 1em;font-weight:300;text-decoration:underline;cursor:pointer;-webkit-transition:color .2s;transition:color .2s}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.85)}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),j),E=n("XNiG"),q=n("LRne"),A=n("Kj3r"),G=n("/uUt"),J=n("eIep"),L=n("JIr8"),F=n("lJxs"),z=n("kmnG"),K=n("0njA"),N=n("qFsG"),R=function(e){return["/systems",e]};function T(e,t){if(1&e&&(h.Wb(0,"tr"),h.Wb(1,"td",9),h.Wb(2,"a",13),h.Ic(3),h.Wb(4,"span",14),h.Ic(5),h.Vb(),h.Ic(6,") "),h.Vb(),h.Vb(),h.Wb(7,"td",10),h.Ic(8),h.Vb(),h.Wb(9,"td",11),h.Ic(10),h.Vb(),h.Vb()),2&e){var n=t.$implicit;h.Cb(2),h.oc("routerLink",h.qc(5,R,n.id)),h.Cb(1),h.Kc(" ",n.name," ("),h.Cb(2),h.Jc(n.id),h.Cb(3),h.Jc(n.installed_ui_devices),h.Cb(2),h.Jc(null==n.display?null:n.display.created)}}function Q(e,t){if(1&e&&(h.Wb(0,"div",8),h.Wb(1,"table"),h.Wb(2,"thead"),h.Wb(3,"td",9),h.Ic(4,"Name"),h.Vb(),h.Wb(5,"td",10),h.Ic(6,"No. Devices"),h.Vb(),h.Wb(7,"td",11),h.Ic(8,"Created"),h.Vb(),h.Vb(),h.Wb(9,"tbody"),h.Gc(10,T,11,7,"tr",12),h.Vb(),h.Vb(),h.Vb()),2&e){var n=h.ic();h.Cb(10),h.oc("ngForOf",n.system_list)}}function $(e,t){1&e&&(h.Wb(0,"div",15),h.Wb(1,"div",16),h.Ic(2,"No matching systems found"),h.Vb(),h.Vb())}var B,H=function(){return{class:"backoffice-magnifying-glass"}},X=[{path:"",component:k,children:[]},{path:":id",component:k,children:[{path:"about",component:D},{path:"systems",component:(B=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._service=e,n.search$=new E.a,n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(t){e.item=t,e.loadSystems()}))),this.search_results$=this.search$.pipe(Object(A.a)(400),Object(G.a)(),Object(J.a)((function(t){return e.loading=!0,e._service.Systems.query({q:t,module_id:e.item.id,offset:0})})),Object(L.a)((function(e){return console.error(e),Object(q.a)([])})),Object(F.a)((function(t){e.loading=!1;var n=e.search_str.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().indexOf(n)>=0||(e.email||"").toLowerCase().indexOf(n)>=0}))}))),this.subscription("search_results",this.search_results$.subscribe((function(t){return e.system_list=t})))}},{key:"ngOnChanges",value:function(e){e.item&&this.loadSystems()}},{key:"loadSystems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.item&&this._service.Systems.query({module_id:this.item.id,offset:t}).then((function(t){e.system_list=t}),(function(){return null}))}}]),t}(M.a),B.\u0275fac=function(e){return new(e||B)(h.Qb(d.a))},B.\u0275cmp=h.Kb({type:B,selectors:[["device-systems"]],inputs:{item:"item"},features:[h.zb,h.Ab()],decls:9,vars:5,consts:[[1,"container"],[1,"btn"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Systems",3,"ngModel","ngModelChange"],["class","list",4,"ngIf","ngIfElse"],["empty_state",""],[1,"list"],[1,"flex"],[1,"devices"],[1,"created"],[4,"ngFor","ngForOf"],["routerLinkActive","router-link-active",3,"routerLink"],[1,"id"],[1,"info-block"],[1,"text"]],template:function(e,t){if(1&e&&(h.Wb(0,"div",0),h.Wb(1,"div",1),h.Wb(2,"mat-form-field",2),h.Wb(3,"div",3),h.Rb(4,"app-icon",4),h.Vb(),h.Wb(5,"input",5),h.ec("ngModelChange",(function(e){return t.search_str=e}))("ngModelChange",(function(e){return t.search$.next(e)})),h.Vb(),h.Vb(),h.Vb(),h.Gc(6,Q,11,1,"div",6),h.Vb(),h.Gc(7,$,3,0,"ng-template",null,7,h.Hc)),2&e){var n=h.vc(8);h.Cb(4),h.oc("icon",h.pc(4,H)),h.Cb(1),h.oc("ngModel",t.search_str),h.Cb(1),h.oc("ngIf",t.system_list&&t.system_list.length>0)("ngIfElse",n)}},directives:[z.b,z.e,K.a,N.a,s.b,s.k,s.n,o.m,o.l,c.f,c.e],styles:[".container[_ngcontent-%COMP%]{padding:1em}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .devices[_ngcontent-%COMP%]{width:8em;min-width:8em}"]}),B)},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}],U=n("PCNd");n.d(t,"AppDevicesModule",(function(){return Z}));var Y,Z=((Y=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ob({type:Y}),Y.\u0275inj=h.Nb({factory:function(e){return new(e||Y)},imports:[[o.c,s.g,r.b,c.g.forChild(X),U.a]]}),Y)}}]);