(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jtLk:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),c=n("CcG0"),a=n("UN3I"),r=n("OaWH"),d=n("C/ya"),l=n("D/9M"),h=n("g+Po"),b=n("fXoL"),m=n("0IaG"),g=n("BAfr"),u=n("1jcm"),p=n("m6yr"),f=n("47y3");const _=function(){return{connected:!1,running:!0}},y=function(){return{}},v=function(){return{class:"backoffice-info-with-circle"}},w=function(e){return{id:"about",name:"About",icon:e}},C=function(){return{class:"backoffice-documents"}},x=function(e,t){return{id:"systems",name:"Systems",count:e,icon:t}},O=function(e,t){return[e,t]};let M=(()=>{class e extends d.a{constructor(e,t,n,i){super(e,t,n),this._service=e,this._route=t,this._router=n,this._dialog=i,this.service=this._service.Modules}loadValues(){this._service.Systems.query({offset:0,limit:1,module_id:this.item.id}).then(()=>{this.system_count=this._service.Systems.last_total})}new(){this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new a.h(this._service.Modules,{}),service:this._service.Modules}}).componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/devices",e.metadata.item.id])})}edit(){this.item&&this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Modules}})}delete(){if(this.item){const e=this._dialog.open(h.b,Object.assign(Object.assign({},h.a),{data:{title:"Delete device",content:"<p>Are you sure you want delete this device?</p><p>Deleting this will device <strong>immediately</strong> remove it from any system associated with it</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>{"done"===t.reason&&(e.componentInstance.loading="Deleting device...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted device "${this.item.name}".`),this._router.navigate(["/modules"]),e.close(),this.unsub("delete_confirm")},t=>{e.componentInstance.loading=null,this._service.notifyError(`Error deleting device. Error: ${t}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(r.a),b.Qb(o.a),b.Qb(o.c),b.Qb(m.b))},e.\u0275cmp=b.Kb({type:e,selectors:[["app-devices"]],features:[b.zb],decls:8,vars:20,consts:[[1,"container"],[1,"sidebar"],["heading","Devices",3,"module","close","queryParams","event"],[1,"toggle"],["labelPosition","before",3,"ngModel","ngModelChange"],[3,"touchrelease"],["name","device","route","modules",3,"item","tabs","event"]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Wb(1,"div",1),b.Wb(2,"sidebar",2),b.ec("event",(function(e){return t.sidebarEvent(e)})),b.Wb(3,"div",3),b.Wb(4,"mat-slide-toggle",4),b.ec("ngModelChange",(function(e){return t.only_disconnected=e})),b.Ic(5," Only Disconnected "),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Wb(6,"main",5),b.ec("touchrelease",(function(){return t.show_sidebar=!1})),b.Wb(7,"item-display",6),b.ec("event",(function(e){return t.itemEvent(e)})),b.Vb(),b.Vb(),b.Vb()),2&e&&(b.Gb("show",t.show_sidebar),b.Cb(2),b.oc("module",t.module)("close",t.show_sidebar)("queryParams",t.only_disconnected?b.pc(8,_):b.pc(9,y)),b.Cb(2),b.oc("ngModel",t.only_disconnected),b.Cb(3),b.oc("item",t.item)("tabs",b.rc(17,O,b.qc(11,w,b.pc(10,v)),b.rc(14,x,t.system_count,b.pc(13,C)))))},directives:[g.a,u.a,s.k,s.n,p.b,f.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}.toggle[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;padding-right:1em}"]}),e})();var P=n("5f3J"),W=n("YxBP"),V=n("bTqV"),k=n("rUqb");function I(e,t){if(1&e){const e=b.Xb();b.Wb(0,"div",1),b.Wb(1,"div",2),b.Wb(2,"header"),b.Ic(3,"Logic for system:\xa0"),b.Wb(4,"span"),b.Ic(5),b.Vb(),b.Vb(),b.Wb(6,"section"),b.Wb(7,"button",3),b.Ic(8,"Stop Device"),b.Vb(),b.Vb(),b.Wb(9,"header"),b.Ic(10,"Settings "),b.Wb(11,"span",4),b.ec("touchrelease",(function(){return b.yc(e),b.ic().toggleSettings()})),b.Ic(12),b.Vb(),b.Vb(),b.Wb(13,"section"),b.Rb(14,"settings-form-field",5),b.Vb(),b.Vb(),b.Vb()}if(2&e){const e=b.ic();b.Cb(5),b.Jc(null==e.system?null:e.system.name),b.Cb(7),b.Jc(!1===e.merged?"This module":"Merged"),b.Cb(2),b.oc("ngModel",e.settings)("readonly",!0)}}let S=(()=>{class e extends P.a{constructor(e){super(),this._service=e}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadDependency(),this.loadSystem()}))}ngOnChanges(e){e.item&&(this.loadDependency(),this.loadSystem())}loadDependency(){this.item&&this.item.dependency_id&&this._service.Drivers.show(this.item.dependency_id).then(e=>{this.dependency=e,this.updateSettings()})}loadSystem(){this.item&&this.item.system_id&&this._service.Systems.show(this.item.system_id).then(e=>{this.system=e,this.updateSettings()})}toggleSettings(){this.merged=!1===this.merged,this.updateSettings()}updateSettings(){this.item&&(!1!==this.merged?(this.settings=Object(W.b)("",this.item.settings.settings_string||""),this.dependency&&(this.settings=Object(W.b)(this.settings,this.dependency.settings.settings_string||""))):this.settings=this.item.settings.settings_string||"")}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(r.a))},e.\u0275cmp=b.Kb({type:e,selectors:[["device-about"]],inputs:{item:"item"},features:[b.zb,b.Ab()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],["mat-button",""],[3,"touchrelease"],[3,"ngModel","readonly"]],template:function(e,t){1&e&&b.Gc(0,I,15,4,"div",0),2&e&&b.oc("ngIf",t.item)},directives:[i.m,V.b,p.b,k.a,s.k,s.n],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.1em}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7em;color:rgba(0,0,0,.6);padding:0 1em;font-weight:300;text-decoration:underline;cursor:pointer;-webkit-transition:color .2s;transition:color .2s}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.85)}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),e})();var j=n("XNiG"),D=n("LRne"),q=n("Kj3r"),A=n("/uUt"),G=n("eIep"),J=n("JIr8"),L=n("lJxs"),E=n("kmnG"),F=n("0njA"),K=n("qFsG");const N=function(e){return["/systems",e]};function $(e,t){if(1&e&&(b.Wb(0,"tr"),b.Wb(1,"td",9),b.Wb(2,"a",13),b.Ic(3),b.Wb(4,"span",14),b.Ic(5),b.Vb(),b.Ic(6,") "),b.Vb(),b.Vb(),b.Wb(7,"td",10),b.Ic(8),b.Vb(),b.Wb(9,"td",11),b.Ic(10),b.Vb(),b.Vb()),2&e){const e=t.$implicit;b.Cb(2),b.oc("routerLink",b.qc(5,N,e.id)),b.Cb(1),b.Kc(" ",e.name," ("),b.Cb(2),b.Jc(e.id),b.Cb(3),b.Jc(e.installed_ui_devices),b.Cb(2),b.Jc(null==e.display?null:e.display.created)}}function z(e,t){if(1&e&&(b.Wb(0,"div",8),b.Wb(1,"table"),b.Wb(2,"thead"),b.Wb(3,"td",9),b.Ic(4,"Name"),b.Vb(),b.Wb(5,"td",10),b.Ic(6,"No. Devices"),b.Vb(),b.Wb(7,"td",11),b.Ic(8,"Created"),b.Vb(),b.Vb(),b.Wb(9,"tbody"),b.Gc(10,$,11,7,"tr",12),b.Vb(),b.Vb(),b.Vb()),2&e){const e=b.ic();b.Cb(10),b.oc("ngForOf",e.system_list)}}function Q(e,t){1&e&&(b.Wb(0,"div",15),b.Wb(1,"div",16),b.Ic(2,"No matching systems found"),b.Vb(),b.Vb())}const B=function(){return{class:"backoffice-magnifying-glass"}},H=[{path:"",component:M,children:[]},{path:":id",component:M,children:[{path:"about",component:S},{path:"systems",component:(()=>{class e extends P.a{constructor(e){super(),this._service=e,this.search$=new j.a}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadSystems()})),this.search_results$=this.search$.pipe(Object(q.a)(400),Object(A.a)(),Object(G.a)(e=>(this.loading=!0,this._service.Systems.query({q:e,module_id:this.item.id,offset:0}))),Object(J.a)(e=>(console.error(e),Object(D.a)([]))),Object(L.a)(e=>{this.loading=!1;const t=this.search_str.toLowerCase();return e.filter(e=>e.name.toLowerCase().indexOf(t)>=0||(e.email||"").toLowerCase().indexOf(t)>=0)})),this.subscription("search_results",this.search_results$.subscribe(e=>this.system_list=e))}ngOnChanges(e){e.item&&this.loadSystems()}loadSystems(e=0){this.item&&this._service.Systems.query({module_id:this.item.id,offset:e}).then(e=>{this.system_list=e},()=>null)}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(r.a))},e.\u0275cmp=b.Kb({type:e,selectors:[["device-systems"]],inputs:{item:"item"},features:[b.zb,b.Ab()],decls:9,vars:5,consts:[[1,"container"],[1,"btn"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Systems",3,"ngModel","ngModelChange"],["class","list",4,"ngIf","ngIfElse"],["empty_state",""],[1,"list"],[1,"flex"],[1,"devices"],[1,"created"],[4,"ngFor","ngForOf"],["routerLinkActive","router-link-active",3,"routerLink"],[1,"id"],[1,"info-block"],[1,"text"]],template:function(e,t){if(1&e&&(b.Wb(0,"div",0),b.Wb(1,"div",1),b.Wb(2,"mat-form-field",2),b.Wb(3,"div",3),b.Rb(4,"app-icon",4),b.Vb(),b.Wb(5,"input",5),b.ec("ngModelChange",(function(e){return t.search_str=e}))("ngModelChange",(function(e){return t.search$.next(e)})),b.Vb(),b.Vb(),b.Vb(),b.Gc(6,z,11,1,"div",6),b.Vb(),b.Gc(7,Q,3,0,"ng-template",null,7,b.Hc)),2&e){const e=b.vc(8);b.Cb(4),b.oc("icon",b.pc(4,B)),b.Cb(1),b.oc("ngModel",t.search_str),b.Cb(1),b.oc("ngIf",t.system_list&&t.system_list.length>0)("ngIfElse",e)}},directives:[E.b,E.e,F.a,K.a,s.b,s.k,s.n,i.m,i.l,o.f,o.e],styles:[".container[_ngcontent-%COMP%]{padding:1em}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .devices[_ngcontent-%COMP%]{width:8em;min-width:8em}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}];var T=n("PCNd");n.d(t,"AppDevicesModule",(function(){return X}));let X=(()=>{class e{}return e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({factory:function(t){return new(t||e)},imports:[[i.c,s.g,c.b,o.g.forChild(H),T.a]]}),e})()}}]);