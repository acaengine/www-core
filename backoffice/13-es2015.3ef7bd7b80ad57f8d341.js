(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{nSQh:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),c=n("5+WD"),r=n("THE0"),a=n("OaWH"),d=n("C/ya"),l=n("D/9M"),m=n("g+Po"),b=n("fXoL"),g=n("0IaG"),u=n("BAfr"),h=n("m6yr"),f=n("47y3");const p=function(){return{class:"backoffice-info-with-circle"}},_=function(e){return{id:"about",name:"About",icon:e}},v=function(){return{class:"backoffice-tablet"}},y=function(e,t){return{id:"modules",name:"Modules",count:e,icon:t}},w=function(){return{class:"backoffice-layers"}},O=function(e,t){return{id:"zones",name:"Zones",count:e,icon:t}},C=function(){return{class:"backoffice-stopwatch"}},M=function(e,t){return{id:"triggers",name:"Triggers",count:e,icon:t}},W=function(e,t,n,i){return[e,t,n,i]};let x=(()=>{class e extends d.a{constructor(e,t,n,i){super(e,t,n),this._service=e,this._route=t,this._router=n,this._dialog=i,this.service=this._service.Systems}ngOnInit(){super.ngOnInit(),this._service.title="Systems"}loadValues(){this._service.Systems.task(this.item.id,"triggers").then(e=>this.trigger_count=e.length||0),this.device_count=(this.item.modules||[]).length,this.zone_count=(this.item.zones||[]).length}newItem(){this.modal_ref||(this.modal_ref=this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new r.n(this._service.Systems,{}),service:this._service.Systems}}),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/systems",e.metadata.item.id])})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}editItem(){console.log("Edit"),this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Systems}}),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}deleteItem(){this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Delete system",content:"<p>Are you sure you want delete this system?</p><p>Deleting this will <strong>immediately</strong> delete modules that are not in another system</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.modal_ref.componentInstance.loading="Deleting system...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted system "${this.item.name}".`),this._service.set("BACKOFFICE.removed",this.item.id),this._router.navigate(["/systems"]),this.modal_ref.close()},e=>{this.modal_ref.componentInstance.loading=null,this._service.notifyError(`Error deleting system. Error: ${e}`)}))})),this.modal_ref.afterClosed().subscribe(()=>{this.unsub("modal_events"),this.modal_ref=null}))}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a),b.Rb(o.a),b.Rb(o.c),b.Rb(g.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["app-systems"]],features:[b.Ab],decls:5,vars:27,consts:[[1,"container"],[1,"sidebar"],["heading","Systems",3,"module","close","event"],[3,"touchrelease"],["name","system","route","systems",3,"item","loading","tabs","event"]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"sidebar",2),b.fc("event",(function(e){return t.sidebarEvent(e)})),b.Wb(),b.Wb(),b.Xb(3,"main",3),b.fc("touchrelease",(function(){return t.show_sidebar=!1})),b.Xb(4,"item-display",4),b.fc("event",(function(e){return t.itemEvent(e)})),b.Wb(),b.Wb(),b.Wb()),2&e&&(b.Hb("show",t.show_sidebar),b.Db(2),b.pc("module",t.module)("close",t.show_sidebar),b.Db(2),b.pc("item",t.item)("loading",t.loading_item)("tabs",b.uc(22,W,b.rc(8,_,b.qc(7,p)),b.sc(11,y,t.device_count,b.qc(10,v)),b.sc(15,O,t.zone_count,b.qc(14,w)),b.sc(19,M,t.trigger_count,b.qc(18,C)))))},directives:[u.a,h.b,f.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),e})();var X=n("mrSG"),P=n("5f3J"),k=(n("OZ/3"),n("bTqV")),I=n("Mj3r"),D=n("+BlP"),z=n("Xa2L");function S(e,t){if(1&e&&(b.Xb(0,"div",9),b.Xb(1,"label"),b.Jc(2,"Support URL:"),b.Wb(),b.Xb(3,"div",10),b.Xb(4,"a",11),b.Jc(5),b.Wb(),b.Wb(),b.Wb()),2&e){const e=b.jc(2);b.Db(4),b.pc("href",e.item.support_url,b.Cc),b.Db(1),b.Kc(e.item.support_url)}}function j(e,t){if(1&e&&(b.Xb(0,"div",9),b.Xb(1,"label"),b.Jc(2,"Bookable Room:"),b.Wb(),b.Xb(3,"div",10),b.Jc(4),b.Wb(),b.Wb()),2&e){const e=b.jc(2);b.Db(4),b.Kc(e.item.bookable?"Yes":"No")}}function E(e,t){if(1&e&&(b.Xb(0,"a",11),b.Jc(1),b.Wb()),2&e){const e=b.jc(3);b.pc("href","mailto:"+e.item.email,b.Cc),b.Db(1),b.Kc(e.item.email)}}function J(e,t){if(1&e&&(b.Xb(0,"div",9),b.Xb(1,"label"),b.Jc(2,"Email:\xa0"),b.Wb(),b.Hc(3,E,2,2,"a",12),b.Wb()),2&e){const e=b.jc(2);b.Db(3),b.pc("ngIf",e.item.email)}}function $(e,t){if(1&e&&(b.Xb(0,"div",9),b.Xb(1,"label"),b.Jc(2,"Capacity:"),b.Wb(),b.Xb(3,"div",10),b.Jc(4),b.Wb(),b.Wb()),2&e){const e=b.jc(2);b.Db(4),b.Kc(e.item.capacity)}}function H(e,t){if(1&e&&(b.Xb(0,"div",9),b.Xb(1,"label"),b.Jc(2,"Installed Touch Panels:"),b.Wb(),b.Xb(3,"div",10),b.Jc(4),b.Wb(),b.Wb()),2&e){const e=b.jc(2);b.Db(4),b.Kc(e.item.installed_ui_devices)}}function A(e,t){if(1&e&&(b.Vb(0),b.Xb(1,"header"),b.Jc(2,"Execute command"),b.Wb(),b.Sb(3,"system-exec-field",13),b.Ub()),2&e){const e=b.jc(2);b.Db(3),b.pc("system",e.item)}}const F=function(){return[]};function T(e,t){if(1&e&&(b.Xb(0,"section"),b.Sb(1,"a-settings-form",14),b.Wb()),2&e){const e=b.jc(2);b.Db(1),b.pc("id",e.item.id)("merge",!0)("settings",e.item.settings)("merge_settings",e.other_settings||b.qc(4,F))}}function L(e,t){if(1&e){const e=b.Yb();b.Xb(0,"div",2),b.Xb(1,"section",3),b.Xb(2,"button",4),b.fc("tapped",(function(){return b.zc(e),b.jc().start()})),b.Jc(3,"Start System"),b.Wb(),b.Xb(4,"button",4),b.fc("tapped",(function(){return b.zc(e),b.jc().stop()})),b.Jc(5,"Stop System"),b.Wb(),b.Wb(),b.Xb(6,"section",5),b.Hc(7,S,6,2,"div",6),b.Hc(8,j,5,1,"div",6),b.Hc(9,J,4,1,"div",6),b.Hc(10,$,5,1,"div",6),b.Hc(11,H,5,1,"div",6),b.Wb(),b.Hc(12,A,4,1,"ng-container",7),b.Xb(13,"header"),b.Jc(14,"Settings"),b.Wb(),b.Hc(15,T,2,5,"section",8),b.Wb()}if(2&e){const e=b.jc(),t=b.wc(2);b.Db(7),b.pc("ngIf",e.item.support_url),b.Db(1),b.pc("ngIf",e.item.bookable),b.Db(1),b.pc("ngIf",e.item.bookable&&e.item.email),b.Db(1),b.pc("ngIf",e.item.capacity),b.Db(1),b.pc("ngIf",e.item.installed_ui_devices),b.Db(1),b.pc("ngIf",e.item.id&&e.item.modules),b.Db(3),b.pc("ngIf",!e.loading_settings)("ngIfElse",t)}}function R(e,t){1&e&&(b.Xb(0,"div",15),b.Xb(1,"div",16),b.Sb(2,"mat-spinner",17),b.Wb(),b.Xb(3,"div",18),b.Jc(4,"Loading system settings..."),b.Wb(),b.Wb())}let K=(()=>{class e extends P.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.other_settings=[]}modules(){return[...this.item.modules]}get loading_settings(){return this._service.get("loading_settings")}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadZones(),this.loadSettings()}))}ngOnChanges(e){e.item&&this.item&&(this.loadZones(),this.loadSettings())}start(){const e=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Start system?",content:"Are you sure you want to start this system?<br>All stopped modules within the system will boot up.",icon:{type:"icon",class:"backoffice-controller-play"}}}));this.subscription("confirm_ref",e.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._service.Systems.startSystem(this.item.id).then(e=>null,e=>this._service.notifyError(`Failed to start system: ${e.message||e}`))}))}stop(){const e=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Stop system?",content:"Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.",icon:{type:"icon",class:"backoffice-controller-stop"}}}));this.subscription("confirm_ref",e.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._service.Systems.stopSystem(this.item.id).then(e=>null,e=>this._service.notifyError(`Failed to stop system: ${e.message||e}`))}))}loadZones(){this.item&&this._service.Zones.query({control_system_id:this.item.id,offset:0}).then(e=>{e.sort((e,t)=>this.item.zones.indexOf(t.id)-this.item.zones.indexOf(e.id)),this.zones=e},()=>null)}loadSettings(){return Object(X.b)(this,void 0,void 0,(function*(){this.item&&(this.other_settings=yield this._service.Systems.settings(this.item.id))}))}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a),b.Rb(g.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["system-about"]],inputs:{item:"item"},features:[b.Ab,b.Bb],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["load_state",""],[1,"container"],[1,"select"],["mat-button","",3,"tapped"],[1,"details"],["class","field",4,"ngIf"],[4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"field"],[1,"value"],["target","_blank",3,"href"],["target","_blank",3,"href",4,"ngIf"],[3,"system"],[3,"id","merge","settings","merge_settings"],[1,"info-block"],[1,"icon"],["diameter","48"],[1,"text"]],template:function(e,t){1&e&&(b.Hc(0,L,16,8,"div",0),b.Hc(1,R,5,0,"ng-template",null,1,b.Ic)),2&e&&b.pc("ngIf",t.item)},directives:[i.m,k.b,h.b,I.a,D.a,z.b],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;font-size:1.1em}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7em;color:rgba(0,0,0,.6);padding:0 1em;font-weight:300;text-decoration:underline;cursor:pointer;transition:color .2s}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.85)}section[_ngcontent-%COMP%]{padding:.5em .25em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-bottom:.25em}button[_ngcontent-%COMP%]{margin:0 .25em}button[_ngcontent-%COMP%]:first-child{margin-left:0}button[_ngcontent-%COMP%]:last-child{margin-right:0}.field[_ngcontent-%COMP%]{display:flex;align-items:center;margin:.25em 0}.field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:0 .5em}label[_ngcontent-%COMP%]{font-size:.8em;font-weight:500}a[_ngcontent-%COMP%]{font-size:.9em}"]}),e})();var Z=n("DuJs"),q=n("cqYI"),B=n("av/m"),Y=n("GrRB"),N=n("EY9O"),V=n("bSwM"),G=n("STbY"),U=n("0njA"),Q=n("Cvi9");function ee(e,t){if(1&e){const e=b.Yb();b.Xb(0,"i",32),b.fc("modelChange",(function(t){return b.zc(e),b.jc().$implicit.connected=t})),b.Wb()}if(2&e){const e=b.jc().$implicit,t=b.jc(3);b.pc("model",e.connected)("sys",t.item.id)("mod",t.device_classes[e.id])}}function te(e,t){1&e&&b.Sb(0,"i",33)}function ne(e,t){if(1&e){const e=b.Yb();b.Xb(0,"button",34),b.fc("tapped",(function(){b.zc(e);const n=t.$implicit,i=b.jc().$implicit;return b.jc(3).handleContextEvent(n,i)})),b.Sb(1,"app-icon",28),b.Xb(2,"div",35),b.Jc(3),b.Wb(),b.Wb()}if(2&e){const e=t.$implicit;b.Db(1),b.pc("icon",e.icon),b.Db(2),b.Kc(e.name)}}function ie(e,t){1&e&&b.Sb(0,"td",36)}const se=function(e){return["/modules",e]},oe=function(){return{class:"backoffice-dots-three-vertical"}};function ce(e,t){if(1&e){const e=b.Yb();b.Xb(0,"tr",16),b.fc("contextAction",(function(n){b.zc(e);const i=t.$implicit;return b.jc(3).handleContextEvent(n,i)})),b.Xb(1,"td",10),b.Xb(2,"div",17),b.Sb(3,"i",18),b.Wb(),b.Wb(),b.Xb(4,"td",10),b.Hc(5,ee,1,3,"i",19),b.Xb(6,"div",20),b.fc("tapped",(function(){b.zc(e);const n=t.$implicit;return b.jc(3).power(n)})),b.Wb(),b.Wb(),b.Xb(7,"td",11),b.Xb(8,"a",21),b.Jc(9),b.Wb(),b.Wb(),b.Xb(10,"td",12),b.Xb(11,"mat-checkbox",22),b.fc("change",(function(){b.zc(e);const n=t.$implicit;return b.jc(3).toggleDebugEvents(n)})),b.Jc(12),b.Wb(),b.Wb(),b.Xb(13,"td",13),b.Xb(14,"div",23),b.Hc(15,te,1,0,"i",24),b.Wb(),b.Xb(16,"a",25),b.Jc(17),b.Wb(),b.Wb(),b.Xb(18,"td",26),b.Xb(19,"button",27),b.Sb(20,"app-icon",28),b.Wb(),b.Xb(21,"mat-menu",null,29),b.Hc(23,ne,4,2,"button",30),b.Wb(),b.Wb(),b.Hc(24,ie,1,0,"td",31),b.Wb()}if(2&e){const e=t.$implicit,n=b.wc(22),i=b.jc(3);b.pc("context-menu",n)("offset_y",-64),b.Db(5),b.pc("ngIf",e&&i.item.id),b.Db(1),b.Hb("active",e.running&&e.connected)("inactive",e.running&&!e.connected),b.Db(2),b.pc("routerLink",b.rc(17,se,e.id)),b.Db(1),b.Kc((null==e.driver?null:e.driver.name)||"<Unnamed>"),b.Db(2),b.pc("checked",i.debugged_modules[e.id]),b.Db(1),b.Lc(" ",i.device_classes[e.id]," "),b.Db(3),b.pc("ngIf",e.tls),b.Db(1),b.pc("href",(e.tls?"https://":"http://")+e.ip,b.Cc),b.Db(1),b.Kc(e.ip),b.Db(2),b.pc("matMenuTriggerFor",n),b.Db(1),b.pc("icon",b.qc(19,oe)),b.Db(3),b.pc("ngForOf",e.running?i.menu_options:i.offline_options)}}const re=function(){return[]};function ae(e,t){if(1&e){const e=b.Yb();b.Xb(0,"table"),b.Xb(1,"thead"),b.Sb(2,"td",10),b.Xb(3,"td",10),b.Jc(4,"State"),b.Wb(),b.Xb(5,"td",11),b.Jc(6,"Name"),b.Wb(),b.Xb(7,"td",12),b.Jc(8,"Class"),b.Wb(),b.Xb(9,"td",13),b.Jc(10,"IP"),b.Wb(),b.Sb(11,"td",10),b.Wb(),b.Xb(12,"tbody",14),b.fc("cdkDropListDropped",(function(t){return b.zc(e),b.jc(2).drop(t)})),b.Hc(13,ce,25,20,"tr",15),b.Wb(),b.Wb()}if(2&e){const e=b.jc(2);b.Db(13),b.pc("ngForOf",e.devices||b.qc(1,re))}}function de(e,t){1&e&&(b.Xb(0,"div",37),b.Xb(1,"div",35),b.Jc(2,"No devices for system"),b.Wb(),b.Wb())}function le(e,t){if(1&e){const e=b.Yb();b.Xb(0,"div",1),b.Xb(1,"section",2),b.Xb(2,"div",3),b.Xb(3,"item-search-field",4),b.fc("ngModelChange",(function(t){return b.zc(e),b.jc().new_module=t.id})),b.Wb(),b.Wb(),b.Xb(4,"button",5),b.fc("tapped",(function(){return b.zc(e),b.jc().addModule()})),b.Jc(5," Add existing "),b.Wb(),b.Xb(6,"button",6),b.fc("tapped",(function(){return b.zc(e),b.jc().newModule()})),b.Jc(7,"Add new"),b.Wb(),b.Wb(),b.Xb(8,"section",7),b.Hc(9,ae,14,2,"table",8),b.Hc(10,de,3,0,"div",9),b.Wb(),b.Wb()}if(2&e){const e=b.jc();b.Db(3),b.pc("service",e.module_service)("exclude",e.exclude_fn)("ngModel",null),b.Db(1),b.pc("disabled",!e.new_module),b.Db(5),b.pc("ngIf",e.devices&&e.devices.length>0),b.Db(1),b.pc("ngIf",!e.devices||e.devices.length<=0)}}let me=(()=>{class e extends P.a{constructor(e,t,n){super(),this._service=e,this._dialog=t,this._debug_service=n,this.device_classes={},this.device_listener={},this.menu_options=[{id:"power",name:"Toggle Power",icon:{type:"icon",class:"backoffice-power-plug"}},{id:"state",name:"View State",icon:{type:"icon",class:"backoffice-eye"}},{id:"reload",name:"Reload Module",icon:{type:"icon",class:"backoffice-cw"}},{id:"remove",name:"Remove Module",icon:{type:"icon",class:"backoffice-trash"}}],this.offline_options=[{id:"power",name:"Toggle Power",icon:{type:"icon",class:"backoffice-power-plug"}},{id:"remove",name:"Remove Module",icon:{type:"icon",class:"backoffice-trash"}}],this.exclude_fn=e=>e.control_system_id===this.item.id||e.role===r.f.Logic}get module_service(){return this._service.Modules}get debugged_modules(){return this.devices.reduce((e,t)=>(e[t.id]=this._debug_service.isListening(t),e),{})}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadModules()}))}ngOnChanges(e){e.item&&this.loadModules()}loadModules(e=0){this.item&&this._service.Modules.query({control_system_id:this.item.id,complete:!0,offset:e}).then(e=>{e.sort((e,t)=>this.item.modules.indexOf(e.id)-this.item.modules.indexOf(t.id)),this.devices=e,this.generateModuleBindings()},()=>null)}handleContextEvent(e,t){if(e)switch(e.id){case"power":this.power(t);break;case"state":this.viewState(t);break;case"reload":this.reloadModule(t);break;case"remove":this.remove(t)}}power(e){e.running?e.stop().then(()=>{this._service.notifySuccess("Module successfully stopped"),e.running=!1},t=>{"string"==typeof t&&t.length<64?this._service.notifyError(t):this._service.notifyError(`Failed to stop device '${e.id}'.\nView Error?`,"View",()=>this.viewDetails(t))}):e.start().then(()=>{this._service.notifySuccess("Module successfully stopped"),e.running=!0},t=>{"string"==typeof t&&t.length<64?this._service.notifyError(t):this._service.notifyError(`Failed to stop device '${e.id}'.\nView Error?`,"View",()=>this.viewDetails(t))})}reload(e){this._service.Modules.show(e.id).then(t=>{for(const n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},()=>null)}viewState(e){this._dialog.open(Z.a,{data:{system:this.item,module:e,devices:this.devices}})}reloadModule(e){const t=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Reload module?",content:"New driver code will be loaded and the device settings will be reloaded.",icon:{type:"icon",class:"backoffice-install"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&((e.driver?e.driver.reload():this._service.Drivers.reload(e.driver_id)).then(e=>this._service.notifySuccess("Driver successfully reloaded."),e=>this._service.notifyError(e.message||e)),t.close(),this.unsub("confirm_ref"))}))}viewDetails(e){this._dialog.open(B.a,{data:{content:e}})}drop(e){if(e&&e.previousIndex!==e.currentIndex){const t=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Change order?",content:"Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.",icon:{type:"icon",class:"backoffice-layers"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{if("done"===n.reason){t.componentInstance.loading="Updating device order...";const n=[...this.item.modules];Object(c.f)(n,e.previousIndex,e.currentIndex),this.item.storePendingChange("modules",n),this.item.save().then(()=>{t.close(),this.unsub("confirm_ref")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error reording devices. Error: ${e.message||e}`)})}}))}}remove(e){const t=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove module?",content:`Remove ${e.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&this.item.removeModule(e.id).then(()=>{this._service.notifySuccess("Succefully removed module."),this.devices.splice(this.devices.indexOf(e),1),t.close(),this.unsub("confirm_ref")},e=>{this._service.notifyError(`Error removing module. Error: ${e.message||e}`),t.close(),this.unsub("confirm_ref")})}))}newModule(){const e=this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new r.h(this._service.Modules,{control_system_id:this.item.id,control_system:this.item}),service:this._service.Modules,readonly:!0}});this.subscription("modal_events",e.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._service.Systems.addModule(this.item.id,e.metadata.item.id).then(()=>{this.timeout("reload_module_list",()=>this.loadModules(),1e3)})})),e.afterClosed().subscribe(()=>{this.unsub("modal_events")})}addModule(){this.new_module&&(this.joinModule(this.new_module),this.new_module="")}joinModule(e){const t=[...this.item.modules];t.indexOf(e)<0&&t.push(e),this.item.storePendingChange("modules",t),this.item.save().then(()=>{this._service.notifySuccess("Successfully added device to system"),this.loadModules()},()=>{this._service.notifyError("Failed to add module to system")})}toggleDebugEvents(e){e&&(this._debug_service.isListening(e)?this._debug_service.unbind(e):this._debug_service.bind(e,this.device_classes[e.id]))}generateModuleBindings(){const e={};for(const t of this.devices){const n=t.custom_name||t.name||"Blank";e[n]||(e[n]=0),this.device_classes[t.id]=`${n}_${++e[n]}`}}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a),b.Rb(g.b),b.Rb(q.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["system-modules"]],inputs:{item:"item"},features:[b.Ab,b.Bb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"select"],[1,"dropdown"],[3,"service","exclude","ngModel","ngModelChange"],["mat-button","",3,"disabled","tapped"],["mat-button","",3,"tapped"],[1,"device-list"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"name"],[1,"module"],[1,"ip"],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag","",3,"context-menu","offset_y","contextAction",4,"ngFor","ngForOf"],["cdkDrag","",3,"context-menu","offset_y","contextAction"],["cdkDragHandle","",1,"action","grab"],[1,"backoffice-select-arrows"],["binding","","bind","connected",3,"model","sys","mod","modelChange",4,"ngIf"],[1,"state",3,"tapped"],["routerLinkActive","router-link-active",3,"routerLink"],[3,"checked","change"],[1,"lock"],["class","backoffice-lock",4,"ngIf"],[3,"href"],["touchrelease","",1,"small"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"icon"],["menu","matMenu"],["mat-menu-item","",3,"tapped",4,"ngFor","ngForOf"],["class","placeholder","colspan","6",4,"cdkDragPlaceholder"],["binding","","bind","connected",3,"model","sys","mod","modelChange"],[1,"backoffice-lock"],["mat-menu-item","",3,"tapped"],[1,"text"],["colspan","6",1,"placeholder"],[1,"info-block"]],template:function(e,t){1&e&&b.Hc(0,le,11,6,"div",0),2&e&&b.pc("ngIf",t.item)},directives:[i.m,Y.a,s.k,s.n,k.b,h.b,c.d,i.l,c.a,N.a,c.b,o.f,o.e,V.a,G.c,U.a,G.d,c.c,Q.a,G.a],styles:[".container[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;top:4em;left:0;right:0;bottom:0;overflow:hidden}.options[_ngcontent-%COMP%]{display:flex;font-size:1.2em;max-width:5em;margin:0}.dropdown[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{flex:1}.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{flex:1;width:5em}.table-row[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]{width:10em;min-width:7em}.placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:3em;transition:transform .25s cubic-bezier(0,0,.2,1)}.device-list[_ngcontent-%COMP%]{flex:1;min-height:8em;overflow:auto;padding:1em}.lock[_ngcontent-%COMP%]{height:1.2em;width:1.2em;display:inline-flex;align-items:center;justify-content:center}.state[_ngcontent-%COMP%]{height:16px;width:16px;margin:.25em;background-color:#000;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.inactive[_ngcontent-%COMP%]{background-color:#f44336}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:8px;width:8px;margin:8px}.terminal[_ngcontent-%COMP%]{padding-top:.5em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:1em 1em 0}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-left:0}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}.grab[_ngcontent-%COMP%]{cursor:-webkit-grab;cursor:grab}.placeholder[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);border:4px dashed rgba(0,0,0,.6);height:2em}.mat-menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:0 1em}.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.2em}.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex:1;min-width:50%;margin-left:.5em}"]}),e})();var be=n("uxQG"),ge=n("kmnG"),ue=n("qFsG"),he=n("oIn+");const fe=function(e){return["/triggers",e]},pe=function(){return{class:"backoffice-edit"}},_e=function(){return{class:"backoffice-trash"}};function ve(e,t){if(1&e){const e=b.Yb();b.Xb(0,"tr"),b.Xb(1,"td",13),b.Sb(2,"div",19),b.Wb(),b.Xb(3,"td",14),b.Xb(4,"a",20),b.Jc(5),b.Wb(),b.Wb(),b.Xb(6,"td",15),b.Jc(7),b.Wb(),b.Xb(8,"td",16),b.Jc(9),b.kc(10,"dateFrom"),b.Wb(),b.Xb(11,"td",17),b.Xb(12,"div",21),b.Xb(13,"button",22),b.fc("tapped",(function(){b.zc(e);const n=t.$implicit;return b.jc(3).editTrigger(n)})),b.Sb(14,"app-icon",9),b.Wb(),b.Xb(15,"button",22),b.fc("tapped",(function(){b.zc(e);const n=t.$implicit;return b.jc(3).deleteTrigger(n)})),b.Sb(16,"app-icon",9),b.Wb(),b.Wb(),b.Wb(),b.Wb()}if(2&e){const e=t.$implicit;b.Db(2),b.Hb("active",e.enabled),b.Db(2),b.pc("routerLink",b.rc(10,fe,e.id)),b.Db(1),b.Kc(e.name),b.Db(2),b.Kc(e.activated_count||"0"),b.Db(2),b.Kc(b.lc(10,8,1e3*(e.created_at-0))),b.Db(5),b.pc("icon",b.qc(12,pe)),b.Db(2),b.pc("icon",b.qc(13,_e))}}function ye(e,t){if(1&e&&(b.Xb(0,"table"),b.Xb(1,"thead"),b.Sb(2,"td",13),b.Xb(3,"td",14),b.Jc(4,"Name"),b.Wb(),b.Xb(5,"td",15),b.Jc(6,"Count"),b.Wb(),b.Xb(7,"td",16),b.Jc(8,"Added"),b.Wb(),b.Sb(9,"td",17),b.Wb(),b.Xb(10,"tbody"),b.Hc(11,ve,17,14,"tr",18),b.Wb(),b.Wb()),2&e){const e=b.jc(2);b.Db(11),b.pc("ngForOf",e.trigger_list)}}const we=function(){return{class:"backoffice-magnifying-glass"}};function Oe(e,t){if(1&e){const e=b.Yb();b.Xb(0,"div",2),b.Xb(1,"div",3),b.Xb(2,"section",4),b.Xb(3,"div",5),b.Xb(4,"button",6),b.fc("tapped",(function(){return b.zc(e),b.jc().selectTriggerToAdd()})),b.Jc(5,"Add trigger"),b.Wb(),b.Wb(),b.Xb(6,"mat-form-field",7),b.Xb(7,"div",8),b.Sb(8,"app-icon",9),b.Wb(),b.Xb(9,"input",10),b.fc("ngModelChange",(function(t){return b.zc(e),b.jc().search_str=t})),b.Wb(),b.Wb(),b.Wb(),b.Xb(10,"section",11),b.Hc(11,ye,12,1,"table",12),b.Wb(),b.Wb(),b.Wb()}if(2&e){const e=b.jc(),t=b.wc(2);b.Db(8),b.pc("icon",b.qc(4,we)),b.Db(1),b.pc("ngModel",e.search_str),b.Db(2),b.pc("ngIf",e.trigger_list.length>0)("ngIfElse",t)}}function Ce(e,t){1&e&&(b.Xb(0,"div",23),b.Xb(1,"div",24),b.Jc(2,"No triggers for system"),b.Wb(),b.Wb())}function Me(e,t){1&e&&b.Sb(0,"td",9)}function We(e,t){if(1&e){const e=b.Yb();b.Xb(0,"td",9),b.Xb(1,"button",20),b.fc("tapped",(function(){b.zc(e);const t=b.jc().$implicit;return b.jc(3).removeZone(t)})),b.Sb(2,"i",21),b.Wb(),b.Wb()}}function xe(e,t){1&e&&b.Sb(0,"td",22)}const Xe=function(e){return["/zones",e]};function Pe(e,t){if(1&e&&(b.Xb(0,"tr",15),b.Xb(1,"td",9),b.Xb(2,"div",16),b.Sb(3,"i",17),b.Wb(),b.Wb(),b.Xb(4,"td",10),b.Xb(5,"a",18),b.Jc(6),b.Wb(),b.Wb(),b.Xb(7,"td",11),b.Jc(8),b.Wb(),b.Hc(9,We,3,0,"td",12),b.Hc(10,xe,1,0,"td",19),b.Wb()),2&e){const e=t.$implicit,n=b.jc(3);b.Db(5),b.pc("routerLink",b.rc(4,Xe,e.id)),b.Db(1),b.Kc(e.name),b.Db(2),b.Kc(e.description),b.Db(1),b.pc("ngIf",n.zones.length>1)}}function ke(e,t){if(1&e){const e=b.Yb();b.Xb(0,"table"),b.Xb(1,"thead"),b.Sb(2,"td",9),b.Xb(3,"td",10),b.Jc(4,"Name"),b.Wb(),b.Xb(5,"td",11),b.Jc(6,"Description"),b.Wb(),b.Hc(7,Me,1,0,"td",12),b.Wb(),b.Xb(8,"tbody",13),b.fc("cdkDropListDropped",(function(t){return b.zc(e),b.jc(2).drop(t)})),b.Hc(9,Pe,11,6,"tr",14),b.Wb(),b.Wb()}if(2&e){const e=b.jc(2);b.Db(7),b.pc("ngIf",e.zones.length>1),b.Db(2),b.pc("ngForOf",e.zones)}}function Ie(e,t){1&e&&(b.Xb(0,"div",23),b.Xb(1,"div",24),b.Jc(2,"No zones for system"),b.Wb(),b.Wb())}function De(e,t){if(1&e){const e=b.Yb();b.Xb(0,"div",1),b.Xb(1,"div",2),b.Xb(2,"section",3),b.Xb(3,"div",4),b.Xb(4,"item-search-field",5),b.fc("ngModelChange",(function(t){return b.zc(e),b.jc().new_zone=t.id})),b.Wb(),b.Wb(),b.Xb(5,"button",6),b.fc("tapped",(function(){return b.zc(e),b.jc().joinZone()})),b.Jc(6,"Join zone"),b.Wb(),b.Wb(),b.Xb(7,"section"),b.Hc(8,ke,10,2,"table",7),b.Hc(9,Ie,3,0,"div",8),b.Wb(),b.Wb(),b.Wb()}if(2&e){const e=b.jc();b.Db(4),b.pc("service",e.zone_service)("exclude",e.exclude_fn)("ngModel",null),b.Db(1),b.pc("disabled",!e.new_zone),b.Db(3),b.pc("ngIf",e.zones&&e.zones.length>0),b.Db(1),b.pc("ngIf",!e.zones||e.zones.length<=0)}}const ze=[{path:":id",component:x,children:[{path:"about",component:K},{path:"modules",component:me},{path:"triggers",component:(()=>{class e extends P.a{constructor(e,t,n){super(),this._service=e,this._dialog=t,this._composer=n,this.trigger_list=[]}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadSystemTriggers()}))}ngOnChanges(e){e.item&&this.loadSystemTriggers()}loadSystemTriggers(e=0){this.item&&this._service.Systems.task(this.item.id,"triggers",{offset:e}).then(e=>{this.trigger_list=e},()=>null)}editTrigger(e){if(this.item&&e){const t=this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:e,service:this._service.Triggers,external_save:!0}});this.subscription("delete_confirm",t.componentInstance.event.subscribe(n=>{"action"===n.reason&&(t.componentInstance.loading="Saving trigger settings...",this._composer.http.put(`${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${e.id}`,e.toJSON(!0)).subscribe(()=>null,e=>{t.componentInstance.loading=null,this._service.notifyError(`Error updating trigger settings. Error: ${e.message||e}`)},()=>{this._service.notifySuccess("Successfully updated trigger settings."),t.close(),this.unsub("delete_confirm")}))}))}}deleteTrigger(e){if(this.item&&e){const t=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger",content:`<p>Are you sure you want remove trigger "${e.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&(t.componentInstance.loading="Removing trigger...",this._composer.http.delete(`${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${e.id}`).subscribe(()=>null,e=>{t.componentInstance.loading=null,this._service.notifyError(`Error removing trigger. Error: ${e.message||e}`)},()=>{this._service.notifySuccess(`Successfully deleted trigger "${this.item.name}".`),t.close(),this.unsub("delete_confirm")}))}))}}selectTriggerToAdd(){const e=this._dialog.open(be.a,{height:"auto",width:"auto",data:{service_name:"Triggers"}});this.subscription("dialog_events",e.componentInstance.event.subscribe(t=>{const n=e.componentInstance.item;"action"===t.reason&&n&&(this.addTrigger(n),e.close())})),e.afterClosed().subscribe(()=>this.unsub("dialog_events"))}addTrigger(e){this._service.Systems.task(this.item.id,"triggers",{control_system_id:this.item.id,enabled:!0,important:!1,trigger_id:e.id})}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a),b.Rb(g.b),b.Rb(Q.c))},e.\u0275cmp=b.Lb({type:e,selectors:[["system-triggers"]],inputs:{item:"item"},features:[b.Ab,b.Bb],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["empty_state",""],[1,"container"],[1,"settings"],[1,"select"],[1,"dropdown"],["mat-button","",3,"tapped"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Triggers",3,"ngModel","ngModelChange"],[1,"list"],[4,"ngIf","ngIfElse"],[1,"small"],[1,"flex"],[1,"count"],[1,"added"],[1,"duo"],[4,"ngFor","ngForOf"],[1,"state"],[3,"routerLink"],[1,"actions"],["mat-icon-button","",3,"tapped"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&(b.Hc(0,Oe,12,5,"div",0),b.Hc(1,Ce,3,0,"ng-template",null,1,b.Ic)),2&e&&b.pc("ngIf",t.item)},directives:[i.m,k.b,h.b,ge.c,ge.f,U.a,ue.a,s.b,s.k,s.n,i.l,o.f],pipes:[he.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .added[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{width:8em;min-width:8em}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:16px;width:16px;margin:.25em;background-color:#d32f2f;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:8px;width:8px;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1;min-width:50%}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.select[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.duo[_ngcontent-%COMP%]{width:6em}.actions[_ngcontent-%COMP%]{display:flex}"]}),e})()},{path:"zones",component:(()=>{class e extends P.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.loading=new b.o,this.exclude_fn=e=>this.item.zones.indexOf(e.id)>=0}get zone_service(){return this._service.Zones}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadZones()}))}ngOnChanges(e){e.item&&this.loadZones()}loadZones(e=0){this.item&&this._service.Zones.query({control_system_id:this.item.id,offset:e}).then(e=>{e.sort((e,t)=>this.item.zones.indexOf(e.id)-this.item.zones.indexOf(t.id)),this.zones=e},()=>null)}drop(e){if(e&&e.previousIndex!==e.currentIndex){const t=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Change order?",content:"Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.",icon:{type:"icon",class:"backoffice-cycle"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{if("done"===n.reason){const n=[...this.item.zones];Object(c.f)(n,e.previousIndex,e.currentIndex),t.componentInstance.loading="Updating zone ordering...",this.item.storePendingChange("zones",n),this.item.save().then(()=>{t.close(),this.unsub("confirm_ref")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error reording zones. Error: ${e.message||e}`)})}}))}}removeZone(e){if(e&&e.id){const t=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove zone?",content:`<p>Are you sure you want remove zone "${e.name}" from the system?</p>Configuration will be updated immediately.`,icon:{type:"icon",class:"backoffice-export"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&(this.loading.emit(!0),this.item.removeZone(e.id).then(e=>{this.loading.emit(!1),this.item=e,this._service.notifySuccess(`Remove zone "${this.new_zone}" from system`),t.close(),this.unsub("confirm_ref")},e=>{this.loading.emit(!1),this._service.notifySuccess(`Error removing "${this.new_zone}" from system. Error: ${e}`),t.close(),this.unsub("confirm_ref")}))}))}}joinZone(){if(this.new_zone)if(this.item.zones.indexOf(this.new_zone)<0){const e=[...this.item.zones,this.new_zone].filter(e=>!!e);this.loading.emit(!0);const t=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Add zone",content:`Add zone "${this.new_zone}" to system "${this.item.name}"`,icon:{type:"icon",class:"backoffice-upload-to-cloud"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason?(t.componentInstance.loading="Adding zone to system...",this._service.Systems.update(this.item.id,Object.assign(Object.assign({},this.item),{zones:e})).then(e=>{this.new_zone=null,this.loading.emit(!1),this._service.notifySuccess(`Added zone "${this.new_zone}" to system`),this.item=e,this.loadZones(),t.close(),this.unsub("confirm_ref")},()=>{t.componentInstance.loading=null,this.loading.emit(!1),this._service.notifyError(`Error adding zone "${this.new_zone}"`)})):this.loading.emit(!1)}))}else this._service.notifyInfo("The selected zone is already linked to this system")}}return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a),b.Rb(g.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["system-zones"]],inputs:{item:"item"},outputs:{loading:"loading"},features:[b.Ab,b.Bb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"select"],[1,"dropdown"],[3,"service","exclude","ngModel","ngModelChange"],["mat-button","",3,"disabled","tapped"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"name"],[1,"description"],["class","small",4,"ngIf"],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag",""],["cdkDragHandle","",1,"action","grab"],[1,"backoffice-select-arrows"],["routerLinkActive","router-link-active",3,"routerLink"],["class","placeholder","colspan","6",4,"cdkDragPlaceholder"],["mat-icon-button","",3,"tapped"],[1,"backoffice-publish"],["colspan","6",1,"placeholder"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&b.Hc(0,De,10,6,"div",0),2&e&&b.pc("ngIf",t.item)},directives:[i.m,Y.a,s.k,s.n,k.b,h.b,c.d,i.l,c.a,c.b,o.f,o.e,c.c],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.dropdown[_ngcontent-%COMP%]{flex:1}.placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:3em;height:3em;transition:transform .25s cubic-bezier(0,0,.2,1)}.name[_ngcontent-%COMP%]{min-width:10em}.description[_ngcontent-%COMP%]{font-size:.8em;padding:.5em}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var Se=n("PCNd");n.d(t,"AppSystemsModule",(function(){return je}));let je=(()=>{class e{}return e.\u0275mod=b.Pb({type:e}),e.\u0275inj=b.Ob({factory:function(t){return new(t||e)},imports:[[i.c,s.g,o.g.forChild(ze),Se.a,c.e]]}),e})()}}]);