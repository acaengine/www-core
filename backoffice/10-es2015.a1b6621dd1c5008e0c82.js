(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Gwc7:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),c=n("THE0"),r=n("OaWH"),a=n("C/ya"),d=n("g+Po"),l=n("D/9M"),b=n("fXoL"),h=n("0IaG"),m=n("BAfr"),u=n("m6yr"),g=n("47y3");const p=function(){return{class:"backoffice-info-with-circle"}},f=function(e){return{id:"about",name:"About",icon:e}},v=function(){return{class:"backoffice-tablet"}},_=function(e,t){return{id:"devices",name:"Devices",count:e,icon:t}},w=function(e,t){return[e,t]};let y=(()=>{class e extends a.a{constructor(e,t,n,i){super(e,t,n),this._service=e,this._route=t,this._router=n,this._dialog=i,this.service=this._service.Drivers}loadValues(){this._service.Modules.query({offset:0,limit:1,dependency_id:this.item.id}).then(e=>{this.device_count=this._service.Modules.last_total||e.length||0})}new(){this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new c.e(this._service.Drivers,{name:"",module_name:""}),service:this._service.Drivers}}).componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/drivers",e.metadata.item.id])})}edit(){this.item&&this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Drivers}})}delete(){if(this.item){const e=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Delete driver",content:"<p>Are you sure you want delete this driver?</p><p>All devices that rely on this driver will be <strong>immediately</strong> removed.</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>{"done"===t.reason&&(e.componentInstance.loading="Deleting driver...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted driver "${this.item.name}".`),this._router.navigate(["/drivers"]),e.close(),this.unsub("delete_confirm")},t=>{e.componentInstance.loading=null,this._service.notifyError(`Error deleting driver. Error: ${t}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(r.a),b.Rb(o.a),b.Rb(o.c),b.Rb(h.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["app-drivers"]],features:[b.Ab],decls:5,vars:16,consts:[[1,"container"],[1,"sidebar"],["heading","Drivers",3,"module","close","event"],[3,"touchrelease"],["name","driver","route","drivers",3,"item","tabs","event"]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"sidebar",2),b.fc("event",(function(e){return t.sidebarEvent(e)})),b.Wb(),b.Wb(),b.Xb(3,"main",3),b.fc("touchrelease",(function(){return t.show_sidebar=!1})),b.Xb(4,"item-display",4),b.fc("event",(function(e){return t.itemEvent(e)})),b.Wb(),b.Wb(),b.Wb()),2&e&&(b.Hb("show",t.show_sidebar),b.Db(2),b.pc("module",t.module)("close",t.show_sidebar),b.Db(2),b.pc("item",t.item)("tabs",b.sc(13,w,b.rc(7,f,b.qc(6,p)),b.sc(10,_,t.device_count,b.qc(9,v)))))},directives:[m.a,u.b,g.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}"]}),e})();var O=n("5f3J"),x=n("bTqV"),C=n("rUqb");function M(e,t){if(1&e){const e=b.Yb();b.Xb(0,"div",1),b.Xb(1,"section"),b.Xb(2,"table"),b.Xb(3,"thead"),b.Xb(4,"td",2),b.Jc(5,"Module Name"),b.Wb(),b.Xb(6,"td",3),b.Jc(7,"Class"),b.Wb(),b.Wb(),b.Xb(8,"tbody"),b.Xb(9,"tr"),b.Xb(10,"td",2),b.Jc(11),b.Wb(),b.Xb(12,"td",4),b.Jc(13),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(14,"section"),b.Xb(15,"button",5),b.fc("tapped",(function(){return b.zc(e),b.jc().reloadDriver()})),b.Jc(16,"Reload Modules"),b.Wb(),b.Wb(),b.Xb(17,"header"),b.Jc(18,"Settings"),b.Wb(),b.Xb(19,"section"),b.Sb(20,"settings-form-field",6),b.Wb(),b.Wb()}if(2&e){const e=b.jc();b.Db(11),b.Kc(null==e.item?null:e.item.module_name),b.Db(2),b.Kc(null==e.item?null:e.item.class_name),b.Db(7),b.pc("ngModel",e.settings)("readonly",!0)}}let W=(()=>{class e extends O.a{constructor(e,t){super(),this._dialog=e,this._service=t}get settings(){return this.item.settings.settings_string}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e}))}reloadDriver(){if(this.item){const e=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Reload Driver",content:"<p>Are you sure you want reload this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>",icon:{type:"icon",class:"backoffice-cycle"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>{"done"===t.reason&&(e.componentInstance.loading="Reloading driver...",this.item.reload().then(()=>{this._service.notifySuccess(`Successfully reloaded driver "${this.item.name}".`),e.close(),this.unsub("delete_confirm")},t=>{e.componentInstance.loading=null,this._service.notifyError(`Error reloading driver. Error: ${t}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(h.b),b.Rb(r.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["driver-about"]],inputs:{item:"item"},features:[b.Ab],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"flex"],[1,"class"],[1,"class","mono"],["mat-button","",3,"tapped"],[3,"ngModel","readonly"]],template:function(e,t){1&e&&b.Hc(0,M,21,4,"div",0),2&e&&b.pc("ngIf",t.item)},directives:[i.m,x.b,u.b,C.a,s.k,s.n],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}.table-row[_ngcontent-%COMP%]   .class[_ngcontent-%COMP%]{width:12em;min-width:12em}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),e})();var X=n("XNiG"),k=n("LRne"),P=n("Kj3r"),D=n("/uUt"),I=n("eIep"),j=n("JIr8"),J=n("lJxs"),E=n("kmnG"),S=n("0njA"),$=n("qFsG"),A=n("Cvi9");const L=function(e){return["/modules",e]},R=function(e){return["/systems",e]};function H(e,t){if(1&e){const e=b.Yb();b.Xb(0,"tr"),b.Xb(1,"td",11),b.Sb(2,"div",15),b.Xb(3,"i",16),b.fc("modelChange",(function(n){return b.zc(e),t.$implicit.enabled=n})),b.Wb(),b.Wb(),b.Xb(4,"td",12),b.Xb(5,"a",17),b.Jc(6),b.Wb(),b.Wb(),b.Xb(7,"td",13),b.Xb(8,"a",17),b.Jc(9),b.Xb(10,"span",18),b.Jc(11),b.Wb(),b.Jc(12,") "),b.Wb(),b.Wb(),b.Xb(13,"td",11),b.Xb(14,"button",19),b.fc("tapped",(function(){b.zc(e);const n=t.$implicit;return b.jc(3).removeDevice(n)})),b.Sb(15,"i",20),b.Wb(),b.Wb(),b.Wb()}if(2&e){const e=t.$implicit;b.Db(2),b.Hb("active",e.enabled),b.Db(1),b.pc("model",e.enabled)("sys",e.system.id)("mod",e.module_name),b.Db(2),b.pc("routerLink",b.rc(10,L,e.id)),b.Db(1),b.Kc(e.name),b.Db(2),b.pc("routerLink",b.rc(12,R,e.system.id)),b.Db(1),b.Lc(" ",null==e.system?null:e.system.name," ("),b.Db(2),b.Kc(null==e.system?null:e.system.id)}}function q(e,t){if(1&e&&(b.Xb(0,"table"),b.Xb(1,"thead"),b.Sb(2,"td",11),b.Xb(3,"td",12),b.Jc(4,"Name"),b.Wb(),b.Xb(5,"td",13),b.Jc(6,"System"),b.Wb(),b.Sb(7,"td",11),b.Wb(),b.Xb(8,"tbody"),b.Hc(9,H,16,14,"tr",14),b.Wb(),b.Wb()),2&e){const e=b.jc(2);b.Db(9),b.pc("ngForOf",e.device_list)}}function F(e,t){1&e&&(b.Xb(0,"div",21),b.Xb(1,"div",22),b.Jc(2,"No devices with driver"),b.Wb(),b.Wb())}const z=function(){return{class:"backoffice-magnifying-glass"}};function K(e,t){if(1&e){const e=b.Yb();b.Xb(0,"div",1),b.Xb(1,"div",2),b.Xb(2,"section",3),b.Xb(3,"mat-form-field",4),b.Xb(4,"div",5),b.Sb(5,"app-icon",6),b.Wb(),b.Xb(6,"input",7),b.fc("ngModelChange",(function(t){return b.zc(e),b.jc().search_str=t}))("ngModelChange",(function(t){return b.zc(e),b.jc().search$.next(t)})),b.Wb(),b.Wb(),b.Wb(),b.Xb(7,"section",8),b.Hc(8,q,10,1,"table",9),b.Hc(9,F,3,0,"div",10),b.Wb(),b.Wb(),b.Wb()}if(2&e){const e=b.jc();b.Db(5),b.pc("icon",b.qc(4,z)),b.Db(1),b.pc("ngModel",e.search_str),b.Db(2),b.pc("ngIf",e.device_list&&e.device_list.length>0),b.Db(1),b.pc("ngIf",!e.device_list||e.device_list.length<=0)}}const N=[{path:"",component:y,children:[]},{path:":id",component:y,children:[{path:"about",component:W},{path:"devices",component:(()=>{class e extends O.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.device_list=[],this.search$=new X.a}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadDevices()})),this.search_results$=this.search$.pipe(Object(P.a)(400),Object(D.a)(),Object(I.a)(e=>(this.loading=!0,this._service.Modules.query({q:e,dependency_id:this.item.id,offset:0,limit:500}))),Object(j.a)(e=>(console.error(e),Object(k.a)([]))),Object(J.a)(e=>{this.loading=!1;const t=this.search_str.toLowerCase();return e.filter(e=>e.name.toLowerCase().indexOf(t)>=0||(e.email||"").toLowerCase().indexOf(t)>=0)})),this.subscription("search_results",this.search_results$.subscribe(e=>this.device_list=e))}ngOnChanges(e){e.item&&this.loadDevices()}loadDevices(e=0){this.item&&this._service.Modules.query({dependency_id:this.item.id,offset:e,limit:500}).then(e=>this.device_list=e,()=>null)}removeDevice(e){if(e){const t=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Delete device",content:"<p>Are you sure you want delete this device?</p><p>Deleting this will device <strong>immediately</strong> remove it from any system associated with it</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&(t.componentInstance.loading="Deleting device...",e.delete().then(()=>{this._service.notifySuccess(`Successfully deleted device "${e.name}".`),this.loadDevices(),t.close(),this.unsub("delete_confirm")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error deleting device. Error: ${e}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(r.a),b.Rb(h.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["driver-devices"]],inputs:{item:"item"},features:[b.Ab,b.Bb()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"select"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Devices",3,"ngModel","ngModelChange"],[1,"list"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"flex"],[1,"system"],[4,"ngFor","ngForOf"],[1,"state"],["binding","","bind","connected",3,"model","sys","mod","modelChange"],[3,"routerLink"],[1,"id"],["mat-icon-button","",3,"tapped"],[1,"backoffice-trash"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&b.Hc(0,K,10,5,"div",0),2&e&&b.pc("ngIf",t.item)},directives:[i.m,E.b,E.e,S.a,$.a,s.b,s.k,s.n,i.l,A.a,o.f,x.b,u.b],styles:[".container[_ngcontent-%COMP%]{padding:1em}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .system[_ngcontent-%COMP%]{width:12em;min-width:12em}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#000;border-radius:.8em;-webkit-transition:margin .25s,height .25s,width .25s,background-color .3s;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}];var G=n("PCNd");n.d(t,"AppDriversModule",(function(){return B}));let B=(()=>{class e{}return e.\u0275mod=b.Pb({type:e}),e.\u0275inj=b.Ob({factory:function(t){return new(t||e)},imports:[[i.c,s.g,o.g.forChild(N),G.a]]}),e})()}}]);