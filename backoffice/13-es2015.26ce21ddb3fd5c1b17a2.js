(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{nSQh:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),c=n("5+WD"),r=n("THE0"),a=n("OaWH"),d=n("C/ya"),b=n("D/9M"),l=n("g+Po"),m=n("fXoL"),g=n("0IaG"),h=n("BAfr"),u=n("m6yr"),f=n("47y3");const p=function(){return{class:"backoffice-info-with-circle"}},_=function(e){return{id:"about",name:"About",icon:e}},v=function(){return{class:"backoffice-tablet"}},y=function(e,t){return{id:"devices",name:"Devices",count:e,icon:t}},w=function(){return{class:"backoffice-layers"}},k=function(e,t){return{id:"zones",name:"Zones",count:e,icon:t}},x=function(){return{class:"backoffice-stopwatch"}},O=function(e,t){return{id:"triggers",name:"Triggers",count:e,icon:t}},C=function(e,t,n,i){return[e,t,n,i]};let M=(()=>{class e extends d.a{constructor(e,t,n,i){super(e,t,n),this._service=e,this._route=t,this._router=n,this._dialog=i,this.service=this._service.Systems}loadValues(){this._service.SystemTriggers.query({offset:0,limit:1,sys_id:this.item.id}).then(e=>this.trigger_count=this._service.SystemTriggers.last_total||e.length||0),this.device_count=(this.item.modules||[]).length,this.zone_count=(this.item.zones||[]).length}new(){this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new r.m(this._service.Systems,{}),service:this._service.Systems}}).componentInstance.event.subscribe(e=>{console.log("Event:",e),"done"===e.reason&&this._router.navigate(["/systems",e.metadata.item.id])})}edit(){this.item&&this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Systems}})}delete(){if(this.item){const e=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Delete system",content:"<p>Are you sure you want delete this system?</p><p>Deleting this will <strong>immediately</strong> delete modules that are not in another system</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>{"done"===t.reason&&(e.componentInstance.loading="Deleting system...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted system "${this.item.name}".`),this._router.navigate(["/systems"]),e.close(),this.unsub("delete_confirm")},t=>{e.componentInstance.loading=null,this._service.notifyError(`Error deleting system. Error: ${t}`)}))}))}}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(a.a),m.Rb(o.a),m.Rb(o.c),m.Rb(g.b))},e.\u0275cmp=m.Lb({type:e,selectors:[["app-systems"]],features:[m.Ab],decls:5,vars:27,consts:[[1,"container"],[1,"sidebar"],["heading","Systems",3,"module","close","event"],[3,"touchrelease"],["name","system","route","systems",3,"item","loading","tabs","event"]],template:function(e,t){1&e&&(m.Xb(0,"div",0),m.Xb(1,"div",1),m.Xb(2,"sidebar",2),m.fc("event",(function(e){return t.sidebarEvent(e)})),m.Wb(),m.Wb(),m.Xb(3,"main",3),m.fc("touchrelease",(function(){return t.show_sidebar=!1})),m.Xb(4,"item-display",4),m.fc("event",(function(e){return t.itemEvent(e)})),m.Wb(),m.Wb(),m.Wb()),2&e&&(m.Hb("show",t.show_sidebar),m.Db(2),m.pc("module",t.module)("close",t.show_sidebar),m.Db(2),m.pc("item",t.item)("loading",t.loading_item)("tabs",m.uc(22,C,m.rc(8,_,m.qc(7,p)),m.sc(11,y,t.device_count,m.qc(10,v)),m.sc(15,k,t.zone_count,m.qc(14,w)),m.sc(19,O,t.trigger_count,m.qc(18,x)))))},directives:[h.a,u.b,f.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}"]}),e})();var W=n("5f3J"),X=n("YxBP"),P=n("bTqV"),D=n("Mj3r"),z=n("rUqb");function I(e,t){if(1&e&&(m.Xb(0,"div",10),m.Xb(1,"label"),m.Jc(2,"Support URL:"),m.Wb(),m.Xb(3,"div",11),m.Xb(4,"a",12),m.Jc(5),m.Wb(),m.Wb(),m.Wb()),2&e){const e=m.jc(2);m.Db(4),m.pc("href",e.item.support_url,m.Cc),m.Db(1),m.Kc(e.item.support_url)}}function j(e,t){if(1&e&&(m.Xb(0,"div",10),m.Xb(1,"label"),m.Jc(2,"Bookable Room:"),m.Wb(),m.Xb(3,"div",11),m.Jc(4),m.Wb(),m.Wb()),2&e){const e=m.jc(2);m.Db(4),m.Kc(e.item.bookable?"Yes":"No")}}function S(e,t){if(1&e&&(m.Xb(0,"a",12),m.Jc(1),m.Wb()),2&e){const e=m.jc(3);m.pc("href","mailto:"+e.item.email,m.Cc),m.Db(1),m.Kc(e.item.email)}}function E(e,t){if(1&e&&(m.Xb(0,"div",10),m.Xb(1,"label"),m.Jc(2,"Email:\xa0"),m.Wb(),m.Hc(3,S,2,2,"a",13),m.Wb()),2&e){const e=m.jc(2);m.Db(3),m.pc("ngIf",e.item.email)}}function J(e,t){if(1&e&&(m.Xb(0,"div",10),m.Xb(1,"label"),m.Jc(2,"Capacity:"),m.Wb(),m.Xb(3,"div",11),m.Jc(4),m.Wb(),m.Wb()),2&e){const e=m.jc(2);m.Db(4),m.Kc(e.item.capacity)}}function $(e,t){if(1&e&&(m.Xb(0,"div",10),m.Xb(1,"label"),m.Jc(2,"Installed Touch Panels:"),m.Wb(),m.Xb(3,"div",11),m.Jc(4),m.Wb(),m.Wb()),2&e){const e=m.jc(2);m.Db(4),m.Kc(e.item.installed_ui_devices)}}function A(e,t){1&e&&(m.Xb(0,"header"),m.Jc(1,"Execute command"),m.Wb())}function H(e,t){if(1&e){const e=m.Yb();m.Xb(0,"div",1),m.Xb(1,"section",2),m.Xb(2,"button",3),m.fc("tapped",(function(){return m.zc(e),m.jc().start()})),m.Jc(3,"Start System"),m.Wb(),m.Xb(4,"button",3),m.fc("tapped",(function(){return m.zc(e),m.jc().stop()})),m.Jc(5,"Stop System"),m.Wb(),m.Wb(),m.Xb(6,"section",4),m.Hc(7,I,6,2,"div",5),m.Hc(8,j,5,1,"div",5),m.Hc(9,E,4,1,"div",5),m.Hc(10,J,5,1,"div",5),m.Hc(11,$,5,1,"div",5),m.Wb(),m.Hc(12,A,2,0,"header",6),m.Sb(13,"system-exec-field",7),m.Xb(14,"header"),m.Jc(15,"Settings "),m.Xb(16,"span",8),m.fc("touchrelease",(function(){return m.zc(e),m.jc().toggleSettings()})),m.Jc(17),m.Wb(),m.Wb(),m.Xb(18,"section"),m.Sb(19,"settings-form-field",9),m.Wb(),m.Wb()}if(2&e){const e=m.jc();m.Db(7),m.pc("ngIf",e.item.support_url),m.Db(1),m.pc("ngIf",e.item.bookable),m.Db(1),m.pc("ngIf",e.item.bookable&&e.item.email),m.Db(1),m.pc("ngIf",e.item.capacity),m.Db(1),m.pc("ngIf",e.item.installed_ui_devices),m.Db(1),m.pc("ngIf",e.item&&e.item.id&&e.item.modules),m.Db(1),m.pc("system",e.item),m.Db(4),m.Kc(!1===e.merged?"This system":"Merged"),m.Db(2),m.pc("ngModel",e.settings)("readonly",!0)}}let T=(()=>{class e extends W.a{constructor(e,t){super(),this._service=e,this._dialog=t}modules(){return[...this.item.modules]}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadZones()}))}ngOnChanges(e){e.item&&this.item&&this.loadZones()}start(){const e=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Start system?",content:"Are you sure you want to start this system?<br>All stopped modules within the system will boot up.",icon:{type:"icon",class:"backoffice-controller-play"}}}));this.subscription("confirm_ref",e.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._service.Systems.start(this.item.id).then(e=>null,e=>this._service.notifyError(`Failed to start system: ${e.message||e}`))}))}stop(){const e=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Stop system?",content:"Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.",icon:{type:"icon",class:"backoffice-controller-stop"}}}));this.subscription("confirm_ref",e.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._service.Systems.stop(this.item.id).then(e=>null,e=>this._service.notifyError(`Failed to stop system: ${e.message||e}`))}))}toggleSettings(){this.merged=!1===this.merged,this.updateSettings()}updateSettings(){if(this.item)if(!1!==this.merged){this.settings=Object(X.b)("",this.item.settings.settings_string||"");for(const e of this.zones)this.settings=Object(X.b)(this.settings,e.settings.settings_string||"")}else this.settings=this.item.settings.settings_string||""}loadZones(){this.item&&this._service.Zones.query({sys_id:this.item.id,offset:0}).then(e=>{e.sort((e,t)=>this.item.zones.indexOf(t.id)-this.item.zones.indexOf(e.id)),this.zones=e,this.updateSettings()},()=>null)}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(a.a),m.Rb(g.b))},e.\u0275cmp=m.Lb({type:e,selectors:[["system-about"]],inputs:{item:"item"},features:[m.Ab,m.Bb()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"select"],["mat-button","",3,"tapped"],[1,"details"],["class","field",4,"ngIf"],[4,"ngIf"],[3,"system"],[3,"touchrelease"],[3,"ngModel","readonly"],[1,"field"],[1,"value"],["target","_blank",3,"href"],["target","_blank",3,"href",4,"ngIf"]],template:function(e,t){1&e&&m.Hc(0,H,20,10,"div",0),2&e&&m.pc("ngIf",t.item)},directives:[i.m,P.b,u.b,D.a,z.a,s.k,s.n],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.1em}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7em;color:rgba(0,0,0,.6);padding:0 1em;font-weight:300;text-decoration:underline;cursor:pointer;-webkit-transition:color .2s;transition:color .2s}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.85)}section[_ngcontent-%COMP%]{padding:.5em .25em}.select[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-bottom:.25em}button[_ngcontent-%COMP%]{margin:0 .25em}button[_ngcontent-%COMP%]:first-child{margin-left:0}button[_ngcontent-%COMP%]:last-child{margin-right:0}.field[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin:.25em 0}.field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:0 .5em}label[_ngcontent-%COMP%]{font-size:.8em;font-weight:500}a[_ngcontent-%COMP%]{font-size:.9em}"]}),e})();var F=n("DuJs"),R=n("cqYI"),L=n("GrRB"),K=n("EY9O"),q=n("bSwM"),Y=n("STbY"),Z=n("0njA"),B=n("Cvi9");function N(e,t){if(1&e){const e=m.Yb();m.Xb(0,"i",32),m.fc("modelChange",(function(t){return m.zc(e),m.jc().$implicit.connected=t})),m.Wb()}if(2&e){const e=m.jc().$implicit,t=m.jc(3);m.pc("model",e.connected)("sys",t.item.id)("mod",t.device_classes[e.id])}}function V(e,t){1&e&&m.Sb(0,"i",33)}function G(e,t){if(1&e){const e=m.Yb();m.Xb(0,"button",34),m.fc("tapped",(function(){m.zc(e);const n=t.$implicit,i=m.jc().$implicit;return m.jc(3).handleContextEvent(n,i)})),m.Sb(1,"app-icon",28),m.Xb(2,"div",35),m.Jc(3),m.Wb(),m.Wb()}if(2&e){const e=t.$implicit;m.Db(1),m.pc("icon",e.icon),m.Db(2),m.Kc(e.name)}}function U(e,t){1&e&&m.Sb(0,"td",36)}const Q=function(e){return["/devices",e]},ee=function(){return{class:"backoffice-dots-three-vertical"}};function te(e,t){if(1&e){const e=m.Yb();m.Xb(0,"tr",16),m.fc("contextAction",(function(n){m.zc(e);const i=t.$implicit;return m.jc(3).handleContextEvent(n,i)})),m.Xb(1,"td",10),m.Xb(2,"div",17),m.Sb(3,"i",18),m.Wb(),m.Wb(),m.Xb(4,"td",10),m.Hc(5,N,1,3,"i",19),m.Xb(6,"div",20),m.fc("tapped",(function(){m.zc(e);const n=t.$implicit;return m.jc(3).power(n)})),m.Wb(),m.Wb(),m.Xb(7,"td",11),m.Xb(8,"a",21),m.Jc(9),m.Wb(),m.Wb(),m.Xb(10,"td",12),m.Xb(11,"mat-checkbox",22),m.fc("change",(function(){m.zc(e);const n=t.$implicit;return m.jc(3).toggleDebugEvents(n)})),m.Jc(12),m.Wb(),m.Wb(),m.Xb(13,"td",13),m.Xb(14,"div",23),m.Hc(15,V,1,0,"i",24),m.Wb(),m.Xb(16,"a",25),m.Jc(17),m.Wb(),m.Wb(),m.Xb(18,"td",26),m.Xb(19,"button",27),m.Sb(20,"app-icon",28),m.Wb(),m.Xb(21,"mat-menu",null,29),m.Hc(23,G,4,2,"button",30),m.Wb(),m.Wb(),m.Hc(24,U,1,0,"td",31),m.Wb()}if(2&e){const e=t.$implicit,n=m.wc(22),i=m.jc(3);m.pc("context-menu",n)("offset_y",-64),m.Db(5),m.pc("ngIf",e&&i.item.id),m.Db(1),m.Hb("active",e.connected),m.Db(2),m.pc("routerLink",m.rc(15,Q,e.id)),m.Db(1),m.Kc(e.name),m.Db(2),m.pc("checked",i.debugged_modules[e.id]),m.Db(1),m.Lc(" ",i.device_classes[e.id]," "),m.Db(3),m.pc("ngIf",e.tls),m.Db(1),m.pc("href",(e.tls?"https://":"http://")+e.ip,m.Cc),m.Db(1),m.Kc(e.ip),m.Db(2),m.pc("matMenuTriggerFor",n),m.Db(1),m.pc("icon",m.qc(17,ee)),m.Db(3),m.pc("ngForOf",i.menu_options)}}const ne=function(){return[]};function ie(e,t){if(1&e){const e=m.Yb();m.Xb(0,"table"),m.Xb(1,"thead"),m.Sb(2,"td",10),m.Sb(3,"td",10),m.Xb(4,"td",11),m.Jc(5,"Name"),m.Wb(),m.Xb(6,"td",12),m.Jc(7,"Class"),m.Wb(),m.Xb(8,"td",13),m.Jc(9,"IP"),m.Wb(),m.Sb(10,"td",10),m.Wb(),m.Xb(11,"tbody",14),m.fc("cdkDropListDropped",(function(t){return m.zc(e),m.jc(2).drop(t)})),m.Hc(12,te,25,18,"tr",15),m.Wb(),m.Wb()}if(2&e){const e=m.jc(2);m.Db(12),m.pc("ngForOf",e.devices||m.qc(1,ne))}}function se(e,t){1&e&&(m.Xb(0,"div",37),m.Xb(1,"div",35),m.Jc(2,"No devices for system"),m.Wb(),m.Wb())}function oe(e,t){if(1&e){const e=m.Yb();m.Xb(0,"div",1),m.Xb(1,"section",2),m.Xb(2,"button",3),m.fc("tapped",(function(){return m.zc(e),m.jc().newDevice()})),m.Jc(3,"Add new"),m.Wb(),m.Xb(4,"div",4),m.Xb(5,"item-search-field",5),m.fc("ngModelChange",(function(t){return m.zc(e),m.jc().new_module=t.id})),m.Wb(),m.Wb(),m.Xb(6,"button",6),m.fc("tapped",(function(){return m.zc(e),m.jc().addDevice()})),m.Jc(7," Add existing "),m.Wb(),m.Wb(),m.Xb(8,"section",7),m.Hc(9,ie,13,2,"table",8),m.Hc(10,se,3,0,"div",9),m.Wb(),m.Wb()}if(2&e){const e=m.jc();m.Db(5),m.pc("service",e.module_service)("ngModel",null),m.Db(1),m.pc("disabled",!e.new_module),m.Db(3),m.pc("ngIf",e.devices&&e.devices.length>0),m.Db(1),m.pc("ngIf",!e.devices||e.devices.length<=0)}}let ce=(()=>{class e extends W.a{constructor(e,t,n){super(),this._service=e,this._dialog=t,this._debug_service=n,this.device_classes={},this.device_listener={},this.menu_options=[{id:"power",name:"Toggle Power",icon:{type:"icon",class:"backoffice-power-plug"}},{id:"state",name:"View State",icon:{type:"icon",class:"backoffice-eye"}},{id:"reload",name:"Reload Device",icon:{type:"icon",class:"backoffice-cw"}},{id:"remove",name:"Remove Device",icon:{type:"icon",class:"backoffice-trash"}}]}get module_service(){return this._service.Modules}get debugged_modules(){return this.devices.reduce((e,t)=>(e[t.id]=this._debug_service.isListening(t),e),{})}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadDevices()}))}ngOnChanges(e){e.item&&this.loadDevices()}loadDevices(e=0){this.item&&this._service.Modules.query({system_id:this.item.id,offset:e}).then(e=>{e.sort((e,t)=>this.item.modules.indexOf(e.id)-this.item.modules.indexOf(t.id)),this.devices=e,this.generateDeviceBindings()},()=>null)}handleContextEvent(e,t){if(e)switch(e.id){case"power":this.power(t);break;case"state":this.viewState(t);break;case"reload":this.reloadModule(t);break;case"remove":this.remove(t)}}power(e){e.running?e.stop().then(()=>{this._service.notifySuccess("Module successfully stopped"),this.reload(e)},t=>{"string"==typeof t&&t.length<64?this._service.notifyError(t):this._service.notifyError(`Failed to stop device '${e.id}'.\nView Error?`,"View",()=>{})}):e.start().then(()=>{this._service.notifySuccess("Module successfully stopped"),this.reload(e)},t=>{"string"==typeof t&&t.length<64?this._service.notifyError(t):this._service.notifyError(`Failed to stop device '${e.id}'.\nView Error?`,"View",()=>{})})}reload(e){this._service.Modules.show(e.id).then(t=>{for(const n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},()=>null)}viewState(e){this._dialog.open(F.a,{data:{system:this.item,module:e,devices:this.devices}})}reloadModule(e){const t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Reload module?",content:"New driver code will be loaded and the device settings will be reloaded.",icon:{type:"icon",class:"backoffice-install"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&((e.driver?e.driver.reload():this._service.Drivers.reload(e.dependency_id)).then(e=>this._service.notifySuccess("Driver successfully reloaded."),e=>this._service.notifyError(e.message||e)),t.close(),this.unsub("confirm_ref"))}))}drop(e){if(e&&e.previousIndex!==e.currentIndex){const t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Change order?",content:"Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.",icon:{type:"icon",class:"backoffice-layers"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{if("done"===n.reason){t.componentInstance.loading="Updating device order...";const n=[...this.item.modules];Object(c.f)(n,e.previousIndex,e.currentIndex),this.item.storePendingChange("modules",n),this.item.save().then(()=>{t.close(),this.unsub("confirm_ref")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error reording devices. Error: ${e.message||e}`)})}}))}}remove(e){const t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Remove module?",content:`Remove ${e.dependency_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(e=>{"done"===e.reason&&(t.close(),this.unsub("confirm_ref"))}))}newDevice(){this._service.Modules.add({control_system:this.item}).then(e=>{this._service.notifySuccess("Created new device"),this.joinDevice(e.id)},()=>{this._service.notifyError("Error creating new device")})}addDevice(){this.new_module&&(this.joinDevice(this.new_module),this.new_module="")}joinDevice(e){const t=[...this.item.modules];t.indexOf(e)<0&&t.push(e),this.item.storePendingChange("modules",t),this.item.save().then(()=>{this._service.notifySuccess("Successfully added device to system"),this.loadDevices()},()=>{this._service.notifyError("Failed to add module to system")})}toggleDebugEvents(e){e&&(this._debug_service.isListening(e)?this._debug_service.unbind(e):this._debug_service.bind(e,this.device_classes[e.id]))}generateDeviceBindings(){const e={};for(const t of this.devices){const n=t.custom_name||(t.driver?t.driver.module_name:"")||"Blank";e[n]||(e[n]=0),this.device_classes[t.id]=`${n}_${++e[n]}`}}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(a.a),m.Rb(g.b),m.Rb(R.a))},e.\u0275cmp=m.Lb({type:e,selectors:[["system-devices"]],inputs:{item:"item"},features:[m.Ab,m.Bb()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"select"],["mat-button","",3,"tapped"],[1,"dropdown"],[3,"service","ngModel","ngModelChange"],["mat-button","",3,"disabled","tapped"],[1,"device-list"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"name"],[1,"module"],[1,"ip"],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag","",3,"context-menu","offset_y","contextAction",4,"ngFor","ngForOf"],["cdkDrag","",3,"context-menu","offset_y","contextAction"],["cdkDragHandle","",1,"action","grab"],[1,"backoffice-select-arrows"],["binding","","bind","connected",3,"model","sys","mod","modelChange",4,"ngIf"],[1,"state",3,"tapped"],["routerLinkActive","router-link-active",3,"routerLink"],[3,"checked","change"],[1,"lock"],["class","backoffice-lock",4,"ngIf"],[3,"href"],["touchrelease","",1,"small"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"icon"],["menu","matMenu"],["mat-menu-item","",3,"tapped",4,"ngFor","ngForOf"],["class","placeholder","colspan","6",4,"cdkDragPlaceholder"],["binding","","bind","connected",3,"model","sys","mod","modelChange"],[1,"backoffice-lock"],["mat-menu-item","",3,"tapped"],[1,"text"],["colspan","6",1,"placeholder"],[1,"info-block"]],template:function(e,t){1&e&&m.Hc(0,oe,11,5,"div",0),2&e&&m.pc("ngIf",t.item)},directives:[i.m,P.b,u.b,L.a,s.k,s.n,c.d,i.l,c.a,K.a,c.b,o.f,o.e,q.a,Y.c,Z.a,Y.d,c.c,B.a,Y.a],styles:[".container[_ngcontent-%COMP%]{position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;top:4em;left:0;right:0;bottom:0;overflow:hidden}.container[_ngcontent-%COMP%], .options[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.options[_ngcontent-%COMP%]{font-size:1.2em;max-width:5em;margin:0}.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;width:5em}.table-row[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]{width:10em;min-width:7em}.placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:3em;-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.2,1);transition:-webkit-transform .25s cubic-bezier(0,0,.2,1);transition:transform .25s cubic-bezier(0,0,.2,1);transition:transform .25s cubic-bezier(0,0,.2,1),-webkit-transform .25s cubic-bezier(0,0,.2,1)}.device-list[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;min-height:8em;overflow:auto;padding:1em}.lock[_ngcontent-%COMP%]{height:1.2em;width:1.2em;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.state[_ngcontent-%COMP%]{height:16px;width:16px;margin:.25em;background-color:#000;border-radius:.8em;-webkit-transition:margin .25s,height .25s,width .25s,background-color .3s;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:8px;width:8px;margin:8px}.terminal[_ngcontent-%COMP%]{padding-top:.5em}.select[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:1em 1em 0}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-left:0}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}.grab[_ngcontent-%COMP%]{cursor:-webkit-grab;cursor:grab}.placeholder[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);border:4px dashed rgba(0,0,0,.6);height:2em}a[_ngcontent-%COMP%]{color:rgba(0,0,0,.85)}.mat-menu-item[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:0 1em}.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.2em}.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;min-width:50%;margin-left:.5em}"]}),e})();var re=n("uxQG"),ae=n("kmnG"),de=n("qFsG"),be=n("oIn+");const le=function(e){return["/triggers",e]},me=function(){return{class:"backoffice-edit"}},ge=function(){return{class:"backoffice-trash"}};function he(e,t){if(1&e){const e=m.Yb();m.Xb(0,"tr"),m.Xb(1,"td",13),m.Sb(2,"div",19),m.Wb(),m.Xb(3,"td",14),m.Xb(4,"a",20),m.Jc(5),m.Wb(),m.Wb(),m.Xb(6,"td",15),m.Jc(7),m.Wb(),m.Xb(8,"td",16),m.Jc(9),m.kc(10,"dateFrom"),m.Wb(),m.Xb(11,"td",17),m.Xb(12,"div",21),m.Xb(13,"button",22),m.fc("tapped",(function(){m.zc(e);const n=t.$implicit;return m.jc(3).editTrigger(n)})),m.Sb(14,"app-icon",9),m.Wb(),m.Xb(15,"button",22),m.fc("tapped",(function(){m.zc(e);const n=t.$implicit;return m.jc(3).deleteTrigger(n)})),m.Sb(16,"app-icon",9),m.Wb(),m.Wb(),m.Wb(),m.Wb()}if(2&e){const e=t.$implicit;m.Db(2),m.Hb("active",e.enabled),m.Db(2),m.pc("routerLink",m.rc(10,le,e.id)),m.Db(1),m.Kc(e.name),m.Db(2),m.Kc(e.activated_count||"0"),m.Db(2),m.Kc(m.lc(10,8,1e3*(e.created_at-0))),m.Db(5),m.pc("icon",m.qc(12,me)),m.Db(2),m.pc("icon",m.qc(13,ge))}}function ue(e,t){if(1&e&&(m.Xb(0,"table"),m.Xb(1,"thead"),m.Sb(2,"td",13),m.Xb(3,"td",14),m.Jc(4,"Name"),m.Wb(),m.Xb(5,"td",15),m.Jc(6,"Count"),m.Wb(),m.Xb(7,"td",16),m.Jc(8,"Added"),m.Wb(),m.Sb(9,"td",17),m.Wb(),m.Xb(10,"tbody"),m.Hc(11,he,17,14,"tr",18),m.Wb(),m.Wb()),2&e){const e=m.jc(2);m.Db(11),m.pc("ngForOf",e.trigger_list)}}const fe=function(){return{class:"backoffice-magnifying-glass"}};function pe(e,t){if(1&e){const e=m.Yb();m.Xb(0,"div",2),m.Xb(1,"div",3),m.Xb(2,"section",4),m.Xb(3,"div",5),m.Xb(4,"button",6),m.fc("tapped",(function(){return m.zc(e),m.jc().selectTriggerToAdd()})),m.Jc(5,"Add trigger"),m.Wb(),m.Wb(),m.Xb(6,"mat-form-field",7),m.Xb(7,"div",8),m.Sb(8,"app-icon",9),m.Wb(),m.Xb(9,"input",10),m.fc("ngModelChange",(function(t){return m.zc(e),m.jc().search_str=t})),m.Wb(),m.Wb(),m.Wb(),m.Xb(10,"section",11),m.Hc(11,ue,12,1,"table",12),m.Wb(),m.Wb(),m.Wb()}if(2&e){const e=m.jc(),t=m.wc(2);m.Db(8),m.pc("icon",m.qc(4,fe)),m.Db(1),m.pc("ngModel",e.search_str),m.Db(2),m.pc("ngIf",e.trigger_list.length>0)("ngIfElse",t)}}function _e(e,t){1&e&&(m.Xb(0,"div",23),m.Xb(1,"div",24),m.Jc(2,"No triggers for system"),m.Wb(),m.Wb())}function ve(e,t){1&e&&m.Sb(0,"td",9)}function ye(e,t){if(1&e){const e=m.Yb();m.Xb(0,"td",9),m.Xb(1,"button",20),m.fc("tapped",(function(){m.zc(e);const t=m.jc().$implicit;return m.jc(3).removeZone(t)})),m.Sb(2,"i",21),m.Wb(),m.Wb()}}function we(e,t){1&e&&m.Sb(0,"td",22)}const ke=function(e){return["/zones",e]};function xe(e,t){if(1&e&&(m.Xb(0,"tr",15),m.Xb(1,"td",9),m.Xb(2,"div",16),m.Sb(3,"i",17),m.Wb(),m.Wb(),m.Xb(4,"td",10),m.Xb(5,"a",18),m.Jc(6),m.Wb(),m.Wb(),m.Xb(7,"td",11),m.Jc(8),m.Wb(),m.Hc(9,ye,3,0,"td",12),m.Hc(10,we,1,0,"td",19),m.Wb()),2&e){const e=t.$implicit,n=m.jc(3);m.Db(5),m.pc("routerLink",m.rc(4,ke,e.id)),m.Db(1),m.Kc(e.name),m.Db(2),m.Kc(e.description),m.Db(1),m.pc("ngIf",n.zones.length>1)}}function Oe(e,t){if(1&e){const e=m.Yb();m.Xb(0,"table"),m.Xb(1,"thead"),m.Sb(2,"td",9),m.Xb(3,"td",10),m.Jc(4,"Name"),m.Wb(),m.Xb(5,"td",11),m.Jc(6,"Description"),m.Wb(),m.Hc(7,ve,1,0,"td",12),m.Wb(),m.Xb(8,"tbody",13),m.fc("cdkDropListDropped",(function(t){return m.zc(e),m.jc(2).drop(t)})),m.Hc(9,xe,11,6,"tr",14),m.Wb(),m.Wb()}if(2&e){const e=m.jc(2);m.Db(7),m.pc("ngIf",e.zones.length>1),m.Db(2),m.pc("ngForOf",e.zones)}}function Ce(e,t){1&e&&(m.Xb(0,"div",23),m.Xb(1,"div",24),m.Jc(2,"No zones for system"),m.Wb(),m.Wb())}function Me(e,t){if(1&e){const e=m.Yb();m.Xb(0,"div",1),m.Xb(1,"div",2),m.Xb(2,"section",3),m.Xb(3,"div",4),m.Xb(4,"item-search-field",5),m.fc("ngModelChange",(function(t){return m.zc(e),m.jc().new_zone=t.id})),m.Wb(),m.Wb(),m.Xb(5,"button",6),m.fc("tapped",(function(){return m.zc(e),m.jc().joinZone()})),m.Jc(6,"Join zone"),m.Wb(),m.Wb(),m.Xb(7,"section"),m.Hc(8,Oe,10,2,"table",7),m.Hc(9,Ce,3,0,"div",8),m.Wb(),m.Wb(),m.Wb()}if(2&e){const e=m.jc();m.Db(4),m.pc("service",e.zone_service)("ngModel",null),m.Db(1),m.pc("disabled",!e.new_zone),m.Db(3),m.pc("ngIf",e.zones&&e.zones.length>0),m.Db(1),m.pc("ngIf",!e.zones||e.zones.length<=0)}}const We=[{path:"",component:M,children:[]},{path:":id",component:M,children:[{path:"about",component:T},{path:"devices",component:ce},{path:"triggers",component:(()=>{class e extends W.a{constructor(e,t,n){super(),this._service=e,this._dialog=t,this._composer=n,this.trigger_list=[]}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadSystemTriggers()}))}ngOnChanges(e){e.item&&this.loadSystemTriggers()}loadSystemTriggers(e=0){this.item&&this._service.SystemTriggers.query({sys_id:this.item.id,offset:e}).then(e=>{this.trigger_list=e},()=>null)}editTrigger(e){if(this.item&&e){const t=this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:e,service:this._service.SystemTriggers,external_save:!0}});this.subscription("delete_confirm",t.componentInstance.event.subscribe(n=>{"action"===n.reason&&(t.componentInstance.loading="Saving trigger settings...",this._composer.http.put(`${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${e.id}`,e.toJSON(!0)).subscribe(()=>null,e=>{t.componentInstance.loading=null,this._service.notifyError(`Error updating trigger settings. Error: ${e.message||e}`)},()=>{this._service.notifySuccess("Successfully updated trigger settings."),t.close(),this.unsub("delete_confirm")}))}))}}deleteTrigger(e){if(this.item&&e){const t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Remove trigger",content:`<p>Are you sure you want remove trigger "${e.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&(t.componentInstance.loading="Removing trigger...",this._composer.http.delete(`${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${e.id}`).subscribe(()=>null,e=>{t.componentInstance.loading=null,this._service.notifyError(`Error removing trigger. Error: ${e.message||e}`)},()=>{this._service.notifySuccess(`Successfully deleted trigger "${this.item.name}".`),t.close(),this.unsub("delete_confirm")}))}))}}selectTriggerToAdd(){const e=this._dialog.open(re.a,{height:"auto",width:"auto",data:{service_name:"Triggers"}});this.subscription("dialog_events",e.componentInstance.event.subscribe(t=>{const n=e.componentInstance.item;"action"===t.reason&&n&&(this.addTrigger(n),e.close())})),e.afterClosed().subscribe(()=>this.unsub("dialog_events"))}addTrigger(e){this._service.Systems.task(this.item.id,"triggers",{control_system_id:this.item.id,enabled:!0,important:!1,trigger_id:e.id})}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(a.a),m.Rb(g.b),m.Rb(B.c))},e.\u0275cmp=m.Lb({type:e,selectors:[["system-triggers"]],inputs:{item:"item"},features:[m.Ab,m.Bb()],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["empty_state",""],[1,"container"],[1,"settings"],[1,"select"],[1,"dropdown"],["mat-button","",3,"tapped"],["appearance","outline"],["matPrefix","",1,"prefix"],[3,"icon"],["matInput","","name","search-filter","placeholder","Filter Triggers",3,"ngModel","ngModelChange"],[1,"list"],[4,"ngIf","ngIfElse"],[1,"small"],[1,"flex"],[1,"count"],[1,"added"],[1,"duo"],[4,"ngFor","ngForOf"],[1,"state"],[3,"routerLink"],[1,"actions"],["mat-icon-button","",3,"tapped"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&(m.Hc(0,pe,12,5,"div",0),m.Hc(1,_e,3,0,"ng-template",null,1,m.Ic)),2&e&&m.pc("ngIf",t.item)},directives:[i.m,P.b,u.b,ae.b,ae.e,Z.a,de.a,s.b,s.k,s.n,i.l,o.f],pipes:[be.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .added[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{width:8em;min-width:8em}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:16px;width:16px;margin:.25em;background-color:#000;border-radius:.8em;-webkit-transition:margin .25s,height .25s,width .25s,background-color .3s;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:8px;width:8px;margin:.625em}.select[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.select[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;min-width:50%}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.select[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.duo[_ngcontent-%COMP%]{width:6em}.actions[_ngcontent-%COMP%]{display:-webkit-box;display:flex}"]}),e})()},{path:"zones",component:(()=>{class e extends W.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.loading=new m.o}get zone_service(){return this._service.Zones}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.loadZones()}))}ngOnChanges(e){e.item&&this.loadZones()}loadZones(e=0){this.item&&this._service.Zones.query({sys_id:this.item.id,offset:e}).then(e=>{e.sort((e,t)=>this.item.zones.indexOf(e.id)-this.item.zones.indexOf(t.id)),this.zones=e},()=>null)}drop(e){if(e&&e.previousIndex!==e.currentIndex){const t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Change order?",content:"Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.",icon:{type:"icon",class:"backoffice-cycle"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{if("done"===n.reason){const n=[...this.item.zones];Object(c.f)(n,e.previousIndex,e.currentIndex),t.componentInstance.loading="Updating zone ordering...",this.item.storePendingChange("zones",n),this.item.save().then(()=>{t.close(),this.unsub("confirm_ref")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error reording zones. Error: ${e.message||e}`)})}}))}}removeZone(e){if(e&&e.id){const t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Remove zone?",content:`<p>Are you sure you want remove zone "${e.name}" from the system?</p>Configuration will be updated immediately.`,icon:{type:"icon",class:"backoffice-export"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&(this.loading.emit(!0),this.item.removeZone(e.id).then(e=>{this.loading.emit(!1),this.item=e,this._service.notifySuccess(`Remove zone "${this.new_zone}" from system`),t.close(),this.unsub("confirm_ref")},e=>{this.loading.emit(!1),this._service.notifySuccess(`Error removing "${this.new_zone}" from system. Error: ${e}`),t.close(),this.unsub("confirm_ref")}))}))}}joinZone(){if(this.new_zone)if(this.item.zones.indexOf(this.new_zone)<0){const e=[...this.item.zones,this.new_zone].filter(e=>!!e);this.loading.emit(!0);const t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Add zone",content:`Add zone "${this.new_zone}" to system "${this.item.name}"`,icon:{type:"icon",class:"backoffice-upload-to-cloud"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason?(t.componentInstance.loading="Adding zone to system...",this._service.Systems.update(this.item.id,Object.assign(Object.assign({},this.item),{zones:e})).then(e=>{this.new_zone=null,this.loading.emit(!1),this._service.notifySuccess(`Added zone "${this.new_zone}" to system`),this.item=e,this.loadZones(),t.close(),this.unsub("confirm_ref")},()=>{t.componentInstance.loading=null,this.loading.emit(!1),this._service.notifyError(`Error adding zone "${this.new_zone}"`)})):this.loading.emit(!1)}))}else this._service.notifyInfo("The selected zone is already linked to this system")}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(a.a),m.Rb(g.b))},e.\u0275cmp=m.Lb({type:e,selectors:[["system-zones"]],inputs:{item:"item"},outputs:{loading:"loading"},features:[m.Ab,m.Bb()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"select"],[1,"dropdown"],[3,"service","ngModel","ngModelChange"],["mat-button","",3,"disabled","tapped"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"small"],[1,"name"],[1,"description"],["class","small",4,"ngIf"],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag",""],["cdkDragHandle","",1,"action","grab"],[1,"backoffice-select-arrows"],["routerLinkActive","router-link-active",3,"routerLink"],["class","placeholder","colspan","6",4,"cdkDragPlaceholder"],["mat-icon-button","",3,"tapped"],[1,"backoffice-publish"],["colspan","6",1,"placeholder"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&m.Hc(0,Me,10,5,"div",0),2&e&&m.pc("ngIf",t.item)},directives:[i.m,L.a,s.k,s.n,P.b,u.b,c.d,i.l,c.a,c.b,o.f,o.e,c.c],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.select[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:3em;height:3em;-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.2,1);transition:-webkit-transform .25s cubic-bezier(0,0,.2,1);transition:transform .25s cubic-bezier(0,0,.2,1);transition:transform .25s cubic-bezier(0,0,.2,1),-webkit-transform .25s cubic-bezier(0,0,.2,1)}.name[_ngcontent-%COMP%]{min-width:10em}.description[_ngcontent-%COMP%]{font-size:.8em;padding:.5em}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}];var Xe=n("PCNd");n.d(t,"AppSystemsModule",(function(){return Pe}));let Pe=(()=>{class e{}return e.\u0275mod=m.Pb({type:e}),e.\u0275inj=m.Ob({factory:function(t){return new(t||e)},imports:[[i.c,s.g,o.g.forChild(We),Xe.a,c.e]]}),e})()}}]);