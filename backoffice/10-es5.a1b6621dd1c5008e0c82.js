function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Gwc7:function(e,t,n){"use strict";n.r(t);var i,o=n("ofXK"),r=n("3Pt+"),c=n("tyNb"),a=n("THE0"),s=n("OaWH"),d=n("C/ya"),l=n("g+Po"),b=n("D/9M"),u=n("fXoL"),f=n("0IaG"),m=n("BAfr"),h=n("m6yr"),g=n("47y3"),p=function(){return{class:"backoffice-info-with-circle"}},v=function(e){return{id:"about",name:"About",icon:e}},_=function(){return{class:"backoffice-tablet"}},y=function(e,t){return{id:"devices",name:"Devices",count:e,icon:t}},w=function(e,t){return[e,t]},O=((i=function(e){function t(e,n,i,o){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,n,i)))._service=e,r._route=n,r._router=i,r._dialog=o,r.service=r._service.Drivers,r}return _inherits(t,e),_createClass(t,[{key:"loadValues",value:function(){var e=this;this._service.Modules.query({offset:0,limit:1,dependency_id:this.item.id}).then((function(t){e.device_count=e._service.Modules.last_total||t.length||0}))}},{key:"new",value:function(){var e=this;this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new a.e(this._service.Drivers,{name:"",module_name:""}),service:this._service.Drivers}}).componentInstance.event.subscribe((function(t){"done"===t.reason&&e._router.navigate(["/drivers",t.metadata.item.id])}))}},{key:"edit",value:function(){this.item&&this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Drivers}})}},{key:"delete",value:function(){var e=this;if(this.item){var t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Delete driver",content:"<p>Are you sure you want delete this driver?</p><p>All devices that rely on this driver will be <strong>immediately</strong> removed.</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe((function(n){"done"===n.reason&&(t.componentInstance.loading="Deleting driver...",e.item.delete().then((function(){e._service.notifySuccess('Successfully deleted driver "'.concat(e.item.name,'".')),e._router.navigate(["/drivers"]),t.close(),e.unsub("delete_confirm")}),(function(n){t.componentInstance.loading=null,e._service.notifyError("Error deleting driver. Error: ".concat(n))})))})))}}}]),t}(d.a)).\u0275fac=function(e){return new(e||i)(u.Rb(s.a),u.Rb(c.a),u.Rb(c.c),u.Rb(f.b))},i.\u0275cmp=u.Lb({type:i,selectors:[["app-drivers"]],features:[u.Ab],decls:5,vars:16,consts:[[1,"container"],[1,"sidebar"],["heading","Drivers",3,"module","close","event"],[3,"touchrelease"],["name","driver","route","drivers",3,"item","tabs","event"]],template:function(e,t){1&e&&(u.Xb(0,"div",0),u.Xb(1,"div",1),u.Xb(2,"sidebar",2),u.fc("event",(function(e){return t.sidebarEvent(e)})),u.Wb(),u.Wb(),u.Xb(3,"main",3),u.fc("touchrelease",(function(){return t.show_sidebar=!1})),u.Xb(4,"item-display",4),u.fc("event",(function(e){return t.itemEvent(e)})),u.Wb(),u.Wb(),u.Wb()),2&e&&(u.Hb("show",t.show_sidebar),u.Db(2),u.pc("module",t.module)("close",t.show_sidebar),u.Db(2),u.pc("item",t.item)("tabs",u.sc(13,w,u.rc(7,v,u.qc(6,p)),u.sc(10,y,t.device_count,u.qc(9,_)))))},directives:[m.a,h.b,g.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}"]}),i),C=n("5f3J"),k=n("bTqV"),P=n("rUqb");function x(e,t){if(1&e){var n=u.Yb();u.Xb(0,"div",1),u.Xb(1,"section"),u.Xb(2,"table"),u.Xb(3,"thead"),u.Xb(4,"td",2),u.Jc(5,"Module Name"),u.Wb(),u.Xb(6,"td",3),u.Jc(7,"Class"),u.Wb(),u.Wb(),u.Xb(8,"tbody"),u.Xb(9,"tr"),u.Xb(10,"td",2),u.Jc(11),u.Wb(),u.Xb(12,"td",4),u.Jc(13),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Xb(14,"section"),u.Xb(15,"button",5),u.fc("tapped",(function(){return u.zc(n),u.jc().reloadDriver()})),u.Jc(16,"Reload Modules"),u.Wb(),u.Wb(),u.Xb(17,"header"),u.Jc(18,"Settings"),u.Wb(),u.Xb(19,"section"),u.Sb(20,"settings-form-field",6),u.Wb(),u.Wb()}if(2&e){var i=u.jc();u.Db(11),u.Kc(null==i.item?null:i.item.module_name),u.Db(2),u.Kc(null==i.item?null:i.item.class_name),u.Db(7),u.pc("ngModel",i.settings)("readonly",!0)}}var M,W=((M=function(e){function t(e,n){var i;return _classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._dialog=e,i._service=n,i}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(t){e.item=t})))}},{key:"reloadDriver",value:function(){var e=this;if(this.item){var t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Reload Driver",content:"<p>Are you sure you want reload this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>",icon:{type:"icon",class:"backoffice-cycle"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe((function(n){"done"===n.reason&&(t.componentInstance.loading="Reloading driver...",e.item.reload().then((function(){e._service.notifySuccess('Successfully reloaded driver "'.concat(e.item.name,'".')),t.close(),e.unsub("delete_confirm")}),(function(n){t.componentInstance.loading=null,e._service.notifyError("Error reloading driver. Error: ".concat(n))})))})))}}},{key:"settings",get:function(){return this.item.settings.settings_string}}]),t}(C.a)).\u0275fac=function(e){return new(e||M)(u.Rb(f.b),u.Rb(s.a))},M.\u0275cmp=u.Lb({type:M,selectors:[["driver-about"]],inputs:{item:"item"},features:[u.Ab],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"flex"],[1,"class"],[1,"class","mono"],["mat-button","",3,"tapped"],[3,"ngModel","readonly"]],template:function(e,t){1&e&&u.Hc(0,x,21,4,"div",0),2&e&&u.pc("ngIf",t.item)},directives:[o.m,k.b,h.b,P.a,r.k,r.n],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}.table-row[_ngcontent-%COMP%]   .class[_ngcontent-%COMP%]{width:12em;min-width:12em}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),M),X=n("XNiG"),D=n("LRne"),j=n("Kj3r"),I=n("/uUt"),J=n("eIep"),E=n("JIr8"),R=n("lJxs"),S=n("kmnG"),A=n("0njA"),L=n("qFsG"),H=n("Cvi9"),q=function(e){return["/modules",e]},z=function(e){return["/systems",e]};function F(e,t){if(1&e){var n=u.Yb();u.Xb(0,"tr"),u.Xb(1,"td",11),u.Sb(2,"div",15),u.Xb(3,"i",16),u.fc("modelChange",(function(e){return u.zc(n),t.$implicit.enabled=e})),u.Wb(),u.Wb(),u.Xb(4,"td",12),u.Xb(5,"a",17),u.Jc(6),u.Wb(),u.Wb(),u.Xb(7,"td",13),u.Xb(8,"a",17),u.Jc(9),u.Xb(10,"span",18),u.Jc(11),u.Wb(),u.Jc(12,") "),u.Wb(),u.Wb(),u.Xb(13,"td",11),u.Xb(14,"button",19),u.fc("tapped",(function(){u.zc(n);var e=t.$implicit;return u.jc(3).removeDevice(e)})),u.Sb(15,"i",20),u.Wb(),u.Wb(),u.Wb()}if(2&e){var i=t.$implicit;u.Db(2),u.Hb("active",i.enabled),u.Db(1),u.pc("model",i.enabled)("sys",i.system.id)("mod",i.module_name),u.Db(2),u.pc("routerLink",u.rc(10,q,i.id)),u.Db(1),u.Kc(i.name),u.Db(2),u.pc("routerLink",u.rc(12,z,i.system.id)),u.Db(1),u.Lc(" ",null==i.system?null:i.system.name," ("),u.Db(2),u.Kc(null==i.system?null:i.system.id)}}function K(e,t){if(1&e&&(u.Xb(0,"table"),u.Xb(1,"thead"),u.Sb(2,"td",11),u.Xb(3,"td",12),u.Jc(4,"Name"),u.Wb(),u.Xb(5,"td",13),u.Jc(6,"System"),u.Wb(),u.Sb(7,"td",11),u.Wb(),u.Xb(8,"tbody"),u.Hc(9,F,16,14,"tr",14),u.Wb(),u.Wb()),2&e){var n=u.jc(2);u.Db(9),u.pc("ngForOf",n.device_list)}}function T(e,t){1&e&&(u.Xb(0,"div",21),u.Xb(1,"div",22),u.Jc(2,"No devices with driver"),u.Wb(),u.Wb())}var $=function(){return{class:"backoffice-magnifying-glass"}};function N(e,t){if(1&e){var n=u.Yb();u.Xb(0,"div",1),u.Xb(1,"div",2),u.Xb(2,"section",3),u.Xb(3,"mat-form-field",4),u.Xb(4,"div",5),u.Sb(5,"app-icon",6),u.Wb(),u.Xb(6,"input",7),u.fc("ngModelChange",(function(e){return u.zc(n),u.jc().search_str=e}))("ngModelChange",(function(e){return u.zc(n),u.jc().search$.next(e)})),u.Wb(),u.Wb(),u.Wb(),u.Xb(7,"section",8),u.Hc(8,K,10,1,"table",9),u.Hc(9,T,3,0,"div",10),u.Wb(),u.Wb(),u.Wb()}if(2&e){var i=u.jc();u.Db(5),u.pc("icon",u.qc(4,$)),u.Db(1),u.pc("ngModel",i.search_str),u.Db(2),u.pc("ngIf",i.device_list&&i.device_list.length>0),u.Db(1),u.pc("ngIf",!i.device_list||i.device_list.length<=0)}}var G,B=[{path:"",component:O,children:[]},{path:":id",component:O,children:[{path:"about",component:W},{path:"devices",component:(G=function(e){function t(e,n){var i;return _classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._service=e,i._dialog=n,i.device_list=[],i.search$=new X.a,i}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(t){e.item=t,e.loadDevices()}))),this.search_results$=this.search$.pipe(Object(j.a)(400),Object(I.a)(),Object(J.a)((function(t){return e.loading=!0,e._service.Modules.query({q:t,dependency_id:e.item.id,offset:0,limit:500})})),Object(E.a)((function(e){return console.error(e),Object(D.a)([])})),Object(R.a)((function(t){e.loading=!1;var n=e.search_str.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().indexOf(n)>=0||(e.email||"").toLowerCase().indexOf(n)>=0}))}))),this.subscription("search_results",this.search_results$.subscribe((function(t){return e.device_list=t})))}},{key:"ngOnChanges",value:function(e){e.item&&this.loadDevices()}},{key:"loadDevices",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.item&&this._service.Modules.query({dependency_id:this.item.id,offset:t,limit:500}).then((function(t){return e.device_list=t}),(function(){return null}))}},{key:"removeDevice",value:function(e){var t=this;if(e){var n=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Delete device",content:"<p>Are you sure you want delete this device?</p><p>Deleting this will device <strong>immediately</strong> remove it from any system associated with it</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",n.componentInstance.event.subscribe((function(i){"done"===i.reason&&(n.componentInstance.loading="Deleting device...",e.delete().then((function(){t._service.notifySuccess('Successfully deleted device "'.concat(e.name,'".')),t.loadDevices(),n.close(),t.unsub("delete_confirm")}),(function(e){n.componentInstance.loading=null,t._service.notifyError("Error deleting device. Error: ".concat(e))})))})))}}}]),t}(C.a),G.\u0275fac=function(e){return new(e||G)(u.Rb(s.a),u.Rb(f.b))},G.\u0275cmp=u.Lb({type:G,selectors:[["driver-devices"]],inputs:{item:"item"},features:[u.Ab,u.Bb()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"select"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Devices",3,"ngModel","ngModelChange"],[1,"list"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"flex"],[1,"system"],[4,"ngFor","ngForOf"],[1,"state"],["binding","","bind","connected",3,"model","sys","mod","modelChange"],[3,"routerLink"],[1,"id"],["mat-icon-button","",3,"tapped"],[1,"backoffice-trash"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&u.Hc(0,N,10,5,"div",0),2&e&&u.pc("ngIf",t.item)},directives:[o.m,S.b,S.e,A.a,L.a,r.b,r.k,r.n,o.l,H.a,c.f,k.b,h.b],styles:[".container[_ngcontent-%COMP%]{padding:1em}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .system[_ngcontent-%COMP%]{width:12em;min-width:12em}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#000;border-radius:.8em;-webkit-transition:margin .25s,height .25s,width .25s,background-color .3s;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}"]}),G)},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}],Y=n("PCNd");n.d(t,"AppDriversModule",(function(){return V}));var U,V=((U=function e(){_classCallCheck(this,e)}).\u0275mod=u.Pb({type:U}),U.\u0275inj=u.Ob({factory:function(e){return new(e||U)},imports:[[o.c,r.g,c.g.forChild(B),Y.a]]}),U)}}]);