(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Gwc7:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),c=n("THE0"),r=n("OaWH"),a=n("C/ya"),d=n("g+Po"),l=n("D/9M"),m=n("fXoL"),b=n("0IaG"),h=n("BAfr"),u=n("m6yr"),g=n("47y3");const f=function(){return{class:"backoffice-info-with-circle"}},p=function(e){return{id:"about",name:"About",icon:e}},v=function(){return{class:"backoffice-tablet"}},_=function(e,t){return{id:"modules",name:"Modules",count:e,icon:t}},y=function(e,t){return[e,t]};let w=(()=>{class e extends a.a{constructor(e,t,n,i){super(e,t,n),this._service=e,this._route=t,this._router=n,this._dialog=i,this.service=this._service.Drivers}ngOnInit(){super.ngOnInit(),this._service.title="Drivers"}loadValues(){this._service.Modules.query({offset:0,limit:1,driver_id:this.item.id}).then(e=>{this.device_count=this._service.Modules.last_total||e.length||0})}newItem(){this.modal_ref||(this.modal_ref=this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new c.e(this._service.Drivers,{name:"",module_name:""}),service:this._service.Drivers}}),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/drivers",e.metadata.item.id])})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}editItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Drivers}}),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}deleteItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Delete driver",content:"<p>Are you sure you want delete this driver?</p><p>All devices that rely on this driver will be <strong>immediately</strong> removed.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.modal_ref.componentInstance.loading="Deleting driver...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted driver "${this.item.name}".`),this._router.navigate(["/drivers"]),this._service.set("BACKOFFICE.removed",this.item.id),this.modal_ref.close()},e=>{this.modal_ref.componentInstance.loading=null,this._service.notifyError(`Error deleting driver. Error: ${e}`)}))})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(r.a),m.Rb(o.a),m.Rb(o.c),m.Rb(b.b))},e.\u0275cmp=m.Lb({type:e,selectors:[["app-drivers"]],features:[m.Ab],decls:5,vars:16,consts:[[1,"container"],[1,"sidebar"],["heading","Drivers",3,"module","close","event"],[3,"touchrelease"],["name","module","route","modules",3,"item","tabs","event"]],template:function(e,t){1&e&&(m.Xb(0,"div",0),m.Xb(1,"div",1),m.Xb(2,"sidebar",2),m.fc("event",(function(e){return t.sidebarEvent(e)})),m.Wb(),m.Wb(),m.Xb(3,"main",3),m.fc("touchrelease",(function(){return t.show_sidebar=!1})),m.Xb(4,"item-display",4),m.fc("event",(function(e){return t.itemEvent(e)})),m.Wb(),m.Wb(),m.Wb()),2&e&&(m.Hb("show",t.show_sidebar),m.Db(2),m.pc("module",t.module)("close",t.show_sidebar),m.Db(2),m.pc("item",t.item)("tabs",m.sc(13,y,m.rc(7,p,m.qc(6,f)),m.sc(10,_,t.device_count,m.qc(9,v)))))},directives:[h.a,u.b,g.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),e})();var O=n("5f3J"),C=n("bTqV"),M=n("+BlP");function W(e,t){if(1&e){const e=m.Yb();m.Xb(0,"div",1),m.Xb(1,"section"),m.Xb(2,"div",2),m.Xb(3,"label"),m.Jc(4,"Commit:"),m.Wb(),m.Xb(5,"div",3),m.Jc(6),m.Wb(),m.Wb(),m.Xb(7,"table"),m.Xb(8,"thead"),m.Xb(9,"td",4),m.Jc(10,"Module Name"),m.Wb(),m.Xb(11,"td",5),m.Jc(12,"Class"),m.Wb(),m.Wb(),m.Xb(13,"tbody"),m.Xb(14,"tr"),m.Xb(15,"td",4),m.Jc(16),m.Wb(),m.Xb(17,"td",6),m.Jc(18),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Xb(19,"section"),m.Xb(20,"button",7),m.fc("tapped",(function(){return m.zc(e),m.jc().reloadDriver()})),m.Jc(21,"Reload Modules"),m.Wb(),m.Wb(),m.Xb(22,"header"),m.Jc(23,"Settings"),m.Wb(),m.Xb(24,"section"),m.Sb(25,"a-settings-form",8),m.Wb(),m.Wb()}if(2&e){const e=m.jc();m.Db(6),m.Kc(e.item.commit),m.Db(10),m.Kc(null==e.item?null:e.item.module_name),m.Db(2),m.Kc(null==e.item?null:e.item.class_name),m.Db(7),m.pc("id",e.item.id)("settings",e.item.settings)}}let X=(()=>{class e extends O.a{constructor(e,t){super(),this._dialog=e,this._service=t,this.encryption_level=c.a.None,this.available_levels=this.levels}get levels(){const e=this._service.Users.user.getValue(),t=[{id:c.a.None,name:"Unencrypted"}];return(e.support||e.sys_admin)&&t.push({id:c.a.Support,name:"Support"}),e.sys_admin&&t.push({id:c.a.Admin,name:"Admin"}),t}get settings(){return(this.item.settings[this.encryption_level]||{}).settings_string||""}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e}))}reloadDriver(){if(this.item){const e=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Reload Driver",content:"<p>Are you sure you want reload this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>",icon:{type:"icon",class:"backoffice-cycle"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>{"done"===t.reason&&(e.componentInstance.loading="Reloading driver...",this.item.reload().then(()=>{this._service.notifySuccess(`Successfully reloaded driver "${this.item.name}".`),e.close(),this.unsub("delete_confirm")},t=>{e.componentInstance.loading=null,this._service.notifyError(`Error reloading driver. Error: ${t}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(b.b),m.Rb(r.a))},e.\u0275cmp=m.Lb({type:e,selectors:[["driver-about"]],inputs:{item:"item"},features:[m.Ab],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"field"],[1,"value"],[1,"flex"],[1,"class"],[1,"class","mono"],["mat-button","",3,"tapped"],[3,"id","settings"]],template:function(e,t){1&e&&m.Hc(0,W,26,5,"div",0),2&e&&m.pc("ngIf",t.item)},directives:[i.m,C.b,u.b,M.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}.table-row[_ngcontent-%COMP%]   .class[_ngcontent-%COMP%]{width:12em;min-width:12em}.field[_ngcontent-%COMP%]{padding:.5em;display:flex;align-items:center}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.9em;font-weight:500;margin-right:1em}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),e})();var P=n("XNiG"),x=n("LRne"),D=n("Kj3r"),I=n("/uUt"),j=n("eIep"),k=n("JIr8"),J=n("lJxs"),A=n("kmnG"),S=n("0njA"),E=n("qFsG"),$=n("Cvi9");const L=function(e){return["/modules",e]},R=function(e){return["/systems",e]};function F(e,t){if(1&e){const e=m.Yb();m.Xb(0,"tr"),m.Xb(1,"td",11),m.Sb(2,"div",15),m.Xb(3,"i",16),m.fc("modelChange",(function(n){return m.zc(e),t.$implicit.enabled=n})),m.Wb(),m.Wb(),m.Xb(4,"td",12),m.Xb(5,"a",17),m.Jc(6),m.Wb(),m.Wb(),m.Xb(7,"td",13),m.Xb(8,"a",17),m.Jc(9),m.Xb(10,"span",18),m.Jc(11),m.Wb(),m.Jc(12,") "),m.Wb(),m.Wb(),m.Xb(13,"td",11),m.Xb(14,"button",19),m.fc("tapped",(function(){m.zc(e);const n=t.$implicit;return m.jc(3).removeModule(n)})),m.Sb(15,"i",20),m.Wb(),m.Wb(),m.Wb()}if(2&e){const e=t.$implicit;m.Db(2),m.Hb("active",e.enabled),m.Db(1),m.pc("model",e.enabled)("sys",e.system.id)("mod",e.module_name),m.Db(2),m.pc("routerLink",m.rc(10,L,e.id)),m.Db(1),m.Kc(e.name),m.Db(2),m.pc("routerLink",m.rc(12,R,e.system.id)),m.Db(1),m.Lc(" ",null==e.system?null:e.system.name," ("),m.Db(2),m.Kc(null==e.system?null:e.system.id)}}function H(e,t){if(1&e&&(m.Xb(0,"table"),m.Xb(1,"thead"),m.Sb(2,"td",11),m.Xb(3,"td",12),m.Jc(4,"Name"),m.Wb(),m.Xb(5,"td",13),m.Jc(6,"System"),m.Wb(),m.Sb(7,"td",11),m.Wb(),m.Xb(8,"tbody"),m.Hc(9,F,16,14,"tr",14),m.Wb(),m.Wb()),2&e){const e=m.jc(2);m.Db(9),m.pc("ngForOf",e.device_list)}}function K(e,t){1&e&&(m.Xb(0,"div",21),m.Xb(1,"div",22),m.Jc(2,"No devices with driver"),m.Wb(),m.Wb())}const q=function(){return{class:"backoffice-magnifying-glass"}};function z(e,t){if(1&e){const e=m.Yb();m.Xb(0,"div",1),m.Xb(1,"div",2),m.Xb(2,"section",3),m.Xb(3,"mat-form-field",4),m.Xb(4,"div",5),m.Sb(5,"app-icon",6),m.Wb(),m.Xb(6,"input",7),m.fc("ngModelChange",(function(t){return m.zc(e),m.jc().search_str=t}))("ngModelChange",(function(t){return m.zc(e),m.jc().search$.next(t)})),m.Wb(),m.Wb(),m.Wb(),m.Xb(7,"section",8),m.Hc(8,H,10,1,"table",9),m.Hc(9,K,3,0,"div",10),m.Wb(),m.Wb(),m.Wb()}if(2&e){const e=m.jc();m.Db(5),m.pc("icon",m.qc(4,q)),m.Db(1),m.pc("ngModel",e.search_str),m.Db(2),m.pc("ngIf",e.device_list&&e.device_list.length>0),m.Db(1),m.pc("ngIf",!e.device_list||e.device_list.length<=0)}}const N=[{path:":id",component:w,children:[{path:"about",component:X},{path:"modules",component:(()=>{class e extends O.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.device_list=[],this.search$=new P.a}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadModules()})),this.search_results$=this.search$.pipe(Object(D.a)(400),Object(I.a)(),Object(j.a)(e=>(this.loading=!0,this._service.Modules.query({q:e,driver_id:this.item.id,offset:0,limit:500}))),Object(k.a)(e=>(console.error(e),Object(x.a)([]))),Object(J.a)(e=>{this.loading=!1;const t=this.search_str.toLowerCase();return e.filter(e=>e.name.toLowerCase().indexOf(t)>=0||(e.email||"").toLowerCase().indexOf(t)>=0)})),this.subscription("search_results",this.search_results$.subscribe(e=>this.device_list=e))}ngOnChanges(e){e.item&&this.loadModules()}loadModules(e=0){this.item&&this._service.Modules.query({driver_id:this.item.id,offset:e,limit:500}).then(e=>this.device_list=e,()=>null)}removeModule(e){if(e){const t=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Delete device",content:"<p>Are you sure you want delete this device?</p><p>Deleting this will device <strong>immediately</strong> remove it from any system associated with it</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&(t.componentInstance.loading="Deleting device...",e.delete().then(()=>{this._service.notifySuccess(`Successfully deleted device "${e.name}".`),this.loadModules(),t.close(),this.unsub("delete_confirm")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error deleting device. Error: ${e}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(r.a),m.Rb(b.b))},e.\u0275cmp=m.Lb({type:e,selectors:[["driver-devices"]],inputs:{item:"item"},features:[m.Ab,m.Bb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"select"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Modules",3,"ngModel","ngModelChange"],[1,"list"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"flex"],[1,"system"],[4,"ngFor","ngForOf"],[1,"state"],["binding","","bind","connected",3,"model","sys","mod","modelChange"],[3,"routerLink"],[1,"id"],["mat-icon-button","",3,"tapped"],[1,"backoffice-trash"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&m.Hc(0,z,10,5,"div",0),2&e&&m.pc("ngIf",t.item)},directives:[i.m,A.b,A.e,S.a,E.a,s.b,s.k,s.n,i.l,$.a,o.f,C.b,u.b],styles:[".container[_ngcontent-%COMP%]{padding:1em}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .system[_ngcontent-%COMP%]{width:12em;min-width:12em}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#d32f2f;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var B=n("PCNd");n.d(t,"AppDriversModule",(function(){return G}));let G=(()=>{class e{}return e.\u0275mod=m.Pb({type:e}),e.\u0275inj=m.Ob({factory:function(t){return new(t||e)},imports:[[i.c,s.g,o.g.forChild(N),B.a]]}),e})()}}]);