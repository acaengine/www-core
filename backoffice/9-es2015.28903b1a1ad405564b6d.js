(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Gwc7:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),s=i("3Pt+"),o=i("tyNb"),c=i("THE0"),a=i("C/ya"),r=i("g+Po"),d=i("D/9M"),l=i("fXoL"),m=i("OaWH"),b=i("0IaG"),h=i("BAfr"),u=i("m6yr"),g=i("47y3");const f=function(){return{class:"backoffice-info-with-circle"}},p=function(e){return{id:"about",name:"About",icon:e}},v=function(){return{class:"backoffice-tablet"}},_=function(e,t){return{id:"modules",name:"Modules",count:e,icon:t}},w=function(e,t){return[e,t]};let y=(()=>{class e extends a.a{constructor(e,t,i,n){super(e,t,i),this._service=e,this._route=t,this._router=i,this._dialog=n,this.service=this._service.Drivers}ngOnInit(){super.ngOnInit(),this._service.title="Drivers"}loadValues(){this._service.Modules.query({offset:0,limit:1,driver_id:this.item.id}).then(e=>{this.device_count=this._service.Modules.last_total||e.length||0})}newItem(){this.modal_ref||(this.modal_ref=this._dialog.open(d.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new c.g({name:"",module_name:""}),service:this._service.Drivers}}),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/drivers",e.metadata.item.id])})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}editItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(d.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Drivers}}),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}deleteItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(r.b,Object.assign(Object.assign({},r.a),{data:{title:"Delete driver",content:"<p>Are you sure you want delete this driver?</p><p>All modules that rely on this driver will be <strong>immediately</strong> removed.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.modal_ref.componentInstance.loading="Deleting driver...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted driver "${this.item.name}".`),this._router.navigate(["/drivers"]),this._service.set("BACKOFFICE.removed",this.item.id),this.modal_ref.close()},e=>{this.modal_ref.componentInstance.loading=null,this._service.notifyError(`Error deleting driver. Error: ${JSON.stringify(e.response||e.message||e)}`)}))})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(m.a),l.Rb(o.a),l.Rb(o.c),l.Rb(b.b))},e.\u0275cmp=l.Lb({type:e,selectors:[["app-drivers"]],features:[l.Ab],decls:5,vars:16,consts:[[1,"container"],[1,"sidebar"],["heading","Drivers",3,"module","close","event"],[3,"touchrelease"],["name","module","route","drivers",3,"item","tabs","event"]],template:function(e,t){1&e&&(l.Xb(0,"div",0),l.Xb(1,"div",1),l.Xb(2,"sidebar",2),l.mc("event",(function(e){return t.sidebarEvent(e)})),l.Wb(),l.Wb(),l.Xb(3,"main",3),l.mc("touchrelease",(function(){return t.show_sidebar=!1})),l.Xb(4,"item-display",4),l.mc("event",(function(e){return t.itemEvent(e)})),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Hb("show",t.show_sidebar),l.Db(2),l.wc("module",t.module)("close",t.show_sidebar),l.Db(2),l.wc("item",t.item)("tabs",l.zc(13,w,l.yc(7,p,l.xc(6,f)),l.zc(10,_,t.device_count,l.xc(9,v)))))},directives:[h.a,u.b,g.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),e})();var C,O,M,P,X,W,x,D=i("5f3J"),I=i("bTqV"),S=i("Xa2L"),k=i("+BlP");function $(e,t){1&e&&l.Sb(0,"mat-spinner",9)}function R(e,t){if(1&e&&(l.Xb(0,"section"),l.Sb(1,"a-settings-form",10),l.Wb()),2&e){const e=l.qc(2);l.Db(1),l.wc("merge",!0)("id",e.item.id)("settings",e.item.settings)}}function E(e,t){if(1&e){const e=l.Yb();l.Xb(0,"div",2),l.Xb(1,"section"),l.Xb(2,"div",3),l.Xb(3,"label"),l.bc(4,C),l.Wb(),l.Xb(5,"div",4),l.Rc(6),l.Wb(),l.Pc(7,$,1,0,"mat-spinner",5),l.Wb(),l.Xb(8,"div",3),l.Xb(9,"label"),l.bc(10,O),l.Wb(),l.Xb(11,"div",4),l.Rc(12),l.Wb(),l.Wb(),l.Xb(13,"div",3),l.Xb(14,"label"),l.bc(15,M),l.Wb(),l.Xb(16,"div",4),l.Rc(17),l.Wb(),l.Wb(),l.Xb(18,"div",3),l.Xb(19,"label"),l.bc(20,P),l.Wb(),l.Xb(21,"div",4),l.Rc(22),l.Wb(),l.Wb(),l.Wb(),l.Xb(23,"section"),l.Xb(24,"button",6),l.mc("tapped",(function(){return l.Hc(e),l.qc().recompileDriver()})),l.bc(25,X),l.Wb(),l.Wb(),l.Sb(26,"hr"),l.Xb(27,"header",7),l.bc(28,W),l.Wb(),l.Pc(29,R,2,3,"section",8),l.Wb()}if(2&e){const e=l.qc(),t=l.Ec(2);l.Db(6),l.Sc(e.compiled||"false"),l.Db(1),l.wc("ngIf",!e.compiled),l.Db(5),l.Sc(e.item.commit),l.Db(5),l.Sc(e.item.file_name),l.Db(5),l.Sc(null==e.item?null:e.item.module_name),l.Db(7),l.wc("ngIf",!e.loading_settings)("ngIfElse",t)}}function z(e,t){1&e&&(l.Xb(0,"div",11),l.Xb(1,"div",12),l.Sb(2,"mat-spinner",13),l.Wb(),l.Xb(3,"div",14),l.bc(4,x),l.Wb(),l.Wb())}C=$localize`:@@driverDetailsCompiled␟cf381ca16eaabe3374d51e9f94f2218500c4fa4e␟9153697548218950089:Compiled:`,O=$localize`:@@driverDetailsCommit␟fd8aae50a9e4449f1ca02dd094975918d9a5667b␟1255418805683509654:Commit:`,M=$localize`:@@driverDetailsFileName␟38b21a77c169dc1d573d1959b82ee0d1bc2382a4␟3153886573188541985:File Name:`,P=$localize`:@@driverDetailsModuleName␟30503cc4139d9b80b7ee428e70c83f93018643c3␟2852585380255004131:Module Name:`,X=$localize`:@@driverReloadAction␟f294019fcc688b01a96f44ac24e03c86afb2bd69␟3516507455307228591:Recompile Driver`,W=$localize`:@@settingsLabel␟121cc5391cd2a5115bc2b3160379ee5b36cd7716␟4930506384627295710:Settings`,x=$localize`:@@driverLoadingLabel␟07c312791623a62194aaf1b64cf77ac60427ba34␟1421066576333999335:Loading driver settings...`;let L=(()=>{class e extends D.a{constructor(e,t){super(),this._dialog=e,this._service=t}get loading_settings(){return this._service.get("loading_settings")}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item").subscribe(e=>{this.item=e})),this.checkCompiled()}recompileDriver(){if(this.item){const e=this._dialog.open(r.b,Object.assign(Object.assign({},r.a),{data:{title:"Recompile Driver",content:"<p>Are you sure you want recompile this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>",icon:{type:"icon",class:"backoffice-cycle"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>{"done"===t.reason&&(e.componentInstance.loading="Recompiling driver...",this.item.recompile().then(()=>{this._service.notifySuccess(`Successfully recompiled driver "${this.item.name}".`),e.close(),this.unsub("delete_confirm")},t=>{e.componentInstance.loading=null,this._service.notifyError(`Error recompiling driver. Error: ${JSON.stringify(t.response||t.message||t)}`)}))}))}}checkCompiled(){this._service.Drivers.isCompiled(this.item.id).then(e=>this.compiled=!0,e=>{this.compiled=!1,this.timeout("compiled",()=>this.checkCompiled(),1e3)})}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(b.b),l.Rb(m.a))},e.\u0275cmp=l.Lb({type:e,selectors:[["driver-about"]],inputs:{item:"item"},features:[l.Ab],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["load_state",""],[1,"container"],[1,"field"],[1,"value"],["diameter","32",4,"ngIf"],["mat-button","",3,"tapped"],[1,"settings"],[4,"ngIf","ngIfElse"],["diameter","32"],[3,"merge","id","settings"],[1,"info-block"],[1,"icon"],["diameter","48"],[1,"text"]],template:function(e,t){1&e&&(l.Pc(0,E,30,7,"div",0),l.Pc(1,z,5,0,"ng-template",null,1,l.Qc)),2&e&&l.wc("ngIf",t.item)},directives:[n.m,I.b,u.b,S.b,k.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em;margin-bottom:.5em}header.settings[_ngcontent-%COMP%]{position:relative;top:.75em;margin:0}.table-row[_ngcontent-%COMP%]   .class[_ngcontent-%COMP%]{width:12em;min-width:12em}.field[_ngcontent-%COMP%]{padding:.5em;display:flex;align-items:center}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.9em;font-weight:500;margin-right:1em}.value[_ngcontent-%COMP%]{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),e})();var j,A,q,N=i("XNiG"),F=i("LRne"),H=i("Kj3r"),T=i("/uUt"),J=i("eIep"),B=i("JIr8"),G=i("lJxs"),K=i("kmnG"),Y=i("0njA"),Q=i("qFsG"),V=i("Cvi9"),U=i("Qu3c");j=$localize`:@@moduleTableState␟873b72903b1858a9cd6c8967521030b4d7d1435b␟5911214550882917183:State`,A=$localize`:@@moduleTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,q=$localize`:@@moduleTableSystem␟8011e20c5bbe51602d459a860fbf29b599b55edd␟29832309535656200:System`;const Z=function(e){return["/modules",e]},ee=function(e){return["/systems",e]};function te(e,t){if(1&e){const e=l.Yb();l.Xb(0,"tr"),l.Xb(1,"td",11),l.Sb(2,"div",15),l.Xb(3,"i",16),l.mc("modelChange",(function(i){return l.Hc(e),t.$implicit.connected=i})),l.Wb(),l.Wb(),l.Xb(4,"td",12),l.Xb(5,"a",17),l.Rc(6),l.Wb(),l.Wb(),l.Xb(7,"td",13),l.Xb(8,"a",18),l.Rc(9),l.Xb(10,"span",19),l.Rc(11),l.Wb(),l.Rc(12,") "),l.Wb(),l.Wb(),l.Xb(13,"td",11),l.Xb(14,"button",20),l.mc("tapped",(function(){l.Hc(e);const i=t.$implicit;return l.qc(3).removeModule(i)})),l.Sb(15,"i",21),l.Wb(),l.Wb(),l.Wb()}if(2&e){const e=t.$implicit;l.Db(2),l.Hb("active",e.running&&e.connected)("inactive",e.running&&!e.connected),l.Db(1),l.wc("model",e.connected)("sys",e.system.id)("mod",e.module_name),l.Db(2),l.wc("routerLink",l.yc(13,Z,e.id))("matTooltip",e.id),l.Db(1),l.Sc(e.name),l.Db(2),l.wc("routerLink",l.yc(15,ee,e.control_system_id)),l.Db(1),l.Tc(" ",null==e.system?null:e.system.name," ("),l.Db(2),l.Sc(e.control_system_id)}}function ie(e,t){if(1&e&&(l.Xb(0,"table"),l.Xb(1,"thead"),l.Xb(2,"td",11),l.bc(3,j),l.Wb(),l.Xb(4,"td",12),l.bc(5,A),l.Wb(),l.Xb(6,"td",13),l.bc(7,q),l.Wb(),l.Sb(8,"td",11),l.Wb(),l.Xb(9,"tbody"),l.Pc(10,te,16,17,"tr",14),l.Wb(),l.Wb()),2&e){const e=l.qc(2);l.Db(10),l.wc("ngForOf",e.device_list)}}var ne;function se(e,t){1&e&&(l.Xb(0,"div",22),l.Xb(1,"div",23),l.bc(2,ne),l.Wb(),l.Wb())}ne=$localize`:@@moduleTableEmpty␟3f050af94a38c7c960653939a83508e4582c03a7␟2746343272896859219:No modules with driver`;const oe=function(){return{class:"backoffice-magnifying-glass"}};function ce(e,t){if(1&e){const e=l.Yb();l.Xb(0,"div",1),l.Xb(1,"div",2),l.Xb(2,"section",3),l.Xb(3,"mat-form-field",4),l.Xb(4,"div",5),l.Sb(5,"app-icon",6),l.Wb(),l.Xb(6,"input",7),l.mc("ngModelChange",(function(t){return l.Hc(e),l.qc().search_str=t}))("ngModelChange",(function(t){return l.Hc(e),l.qc().search$.next(t)})),l.Wb(),l.Wb(),l.Wb(),l.Xb(7,"section",8),l.Pc(8,ie,11,1,"table",9),l.Pc(9,se,3,0,"div",10),l.Wb(),l.Wb(),l.Wb()}if(2&e){const e=l.qc();l.Db(5),l.wc("icon",l.xc(4,oe)),l.Db(1),l.wc("ngModel",e.search_str),l.Db(2),l.wc("ngIf",e.device_list&&e.device_list.length>0),l.Db(1),l.wc("ngIf",!e.device_list||e.device_list.length<=0)}}const ae=[{path:":id",component:y,children:[{path:"about",component:L},{path:"modules",component:(()=>{class e extends D.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.device_list=[],this.search$=new N.a}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item").subscribe(e=>{this.item=e,this.loadModules()})),this.search_results$=this.search$.pipe(Object(H.a)(400),Object(T.a)(),Object(J.a)(e=>(this.loading=!0,this._service.Modules.query({q:e,driver_id:this.item.id,complete:!0,offset:0,limit:500}))),Object(B.a)(e=>(console.error(e),Object(F.a)([]))),Object(G.a)(e=>{this.loading=!1;const t=this.search_str.toLowerCase();return e.filter(e=>e.name.toLowerCase().indexOf(t)>=0||(e.email||"").toLowerCase().indexOf(t)>=0)})),this.subscription("search_results",this.search_results$.subscribe(e=>this.device_list=e))}ngOnChanges(e){e.item&&this.loadModules()}loadModules(e=0){this.item&&this._service.Modules.query({driver_id:this.item.id,offset:e,limit:500}).then(e=>this.device_list=e,()=>null)}removeModule(e){if(e){const t=this._dialog.open(r.b,Object.assign(Object.assign({},r.a),{data:{title:"Delete module",content:"<p>Are you sure you want delete this module?</p><p>Deleting this will module <strong>immediately</strong> remove it from any system associated with it</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(i=>{"done"===i.reason&&(t.componentInstance.loading="Deleting module...",e.delete().then(()=>{this._service.notifySuccess(`Successfully deleted module "${e.name}".`),this.loadModules(),t.close(),this.unsub("delete_confirm")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error deleting module. Error: ${JSON.stringify(e.response||e.message||e)}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(m.a),l.Rb(b.b))},e.\u0275cmp=l.Lb({type:e,selectors:[["driver-devices"]],inputs:{item:"item"},features:[l.Ab,l.Bb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"select"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Modules",3,"ngModel","ngModelChange"],[1,"list"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"flex"],[1,"system"],[4,"ngFor","ngForOf"],[1,"state"],["binding","","bind","connected",3,"model","sys","mod","modelChange"],[3,"routerLink","matTooltip"],[3,"routerLink"],[1,"id"],["mat-icon-button","",3,"tapped"],[1,"backoffice-trash"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&l.Pc(0,ce,10,5,"div",0),2&e&&l.wc("ngIf",t.item)},directives:[n.m,K.c,K.f,Y.a,Q.a,s.b,s.l,s.o,n.l,V.a,o.f,U.a,I.b,u.b],styles:[".container[_ngcontent-%COMP%]{padding:1em}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .system[_ngcontent-%COMP%]{width:12em;min-width:12em}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#000;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.inactive[_ngcontent-%COMP%]{background-color:#f44336}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var re=i("PCNd");i.d(t,"AppDriversModule",(function(){return de}));let de=(()=>{class e{}return e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(t){return new(t||e)},imports:[[n.c,s.g,o.g.forChild(ae),re.a]]}),e})()}}]);