(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{nSQh:function(e,t,n){"use strict";n.r(t);var c=n("fXoL"),i=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),r=n("CcG0"),a=n("aCXV"),d=n("UN3I"),l=n("OaWH"),m=n("C/ya"),g=n("D/9M"),h=n("g+Po"),u=n("LcAk"),f=n("BAfr"),p=n("m6yr"),b=n("47y3"),v=n("5f3J"),_=n("YxBP"),y=n("Xlwt"),w=n("Mj3r"),I=n("rUqb");const O=[1,"container"],C=[1,"select"],k=["mat-button","",3,"tapped"],M=[1,"details"],P=["class","field",4,"ngIf"],x=[4,"ngIf"],z=[3,"system"],T=[3,"touchrelease"],S=[3,"ngModel","readonly"],E=[1,"field"],D=[1,"value"],R=["target","_blank",3,"href"];function $(e,t){if(1&e&&(c.ec(0,"div",E),c.ec(1,"label"),c.Tc(2,"Support URL:"),c.cc(),c.ec(3,"div",D),c.ec(4,"a",R),c.Tc(5),c.cc(),c.cc(),c.cc()),2&e){const e=c.pc();c.Ic(4),c.vc("href",e.item.support_url,c.Hc),c.Ic(5),c.Uc(e.item.support_url)}}function j(e,t){if(1&e&&(c.ec(0,"div",E),c.ec(1,"label"),c.Tc(2,"Bookable Room:"),c.cc(),c.ec(3,"div",D),c.Tc(4),c.cc(),c.cc()),2&e){const e=c.pc();c.Ic(4),c.Uc(e.item.bookable?"Yes":"No")}}const A=["target","_blank",3,"href",4,"ngIf"];function Y(e,t){if(1&e&&(c.ec(0,"a",R),c.Tc(1),c.cc()),2&e){const e=c.pc(2);c.vc("href","mailto:"+e.item.email,c.Hc),c.Ic(1),c.Uc(e.item.email)}}function F(e,t){if(1&e&&(c.ec(0,"div",E),c.ec(1,"label"),c.Tc(2,"Email:\xa0"),c.cc(),c.Rc(3,Y,2,2,"a",A),c.cc()),2&e){const e=c.pc();c.Ic(3),c.vc("ngIf",e.item.email)}}function U(e,t){if(1&e&&(c.ec(0,"div",E),c.ec(1,"label"),c.Tc(2,"Capacity:"),c.cc(),c.ec(3,"div",D),c.Tc(4),c.cc(),c.cc()),2&e){const e=c.pc();c.Ic(4),c.Uc(e.item.capacity)}}function X(e,t){if(1&e&&(c.ec(0,"div",E),c.ec(1,"label"),c.Tc(2,"Installed Touch Panels:"),c.cc(),c.ec(3,"div",D),c.Tc(4),c.cc(),c.cc()),2&e){const e=c.pc();c.Ic(4),c.Uc(e.item.installed_ui_devices)}}function L(e,t){1&e&&(c.ec(0,"header"),c.Tc(1,"Execute command"),c.cc())}const B=(()=>{class e extends v.a{constructor(e,t){super(),this._service=e,this._dialog=t}modules(){return[...this.item.modules]}ngOnChanges(e){e.item&&this.item&&this.loadZones()}start(){const e=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Start system?",content:"Are you sure you want to start this system?<br>All stopped modules within the system will boot up.",icon:{type:"icon",class:"backoffice-controller-play"}}}));this.subscription("confirm_ref",e.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._service.Systems.start(this.item.id).then(e=>null,e=>this._service.notifyError(`Failed to start system: ${e.message||e}`))}))}stop(){const e=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Stop system?",content:"Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.",icon:{type:"icon",class:"backoffice-controller-stop"}}}));this.subscription("confirm_ref",e.componentInstance.event.subscribe(e=>{"done"===e.reason&&this._service.Systems.stop(this.item.id).then(e=>null,e=>this._service.notifyError(`Failed to stop system: ${e.message||e}`))}))}toggleSettings(){this.merged=!1===this.merged,this.updateSettings()}updateSettings(){if(this.item)if(!1!==this.merged){this.settings=Object(_.b)("",this.item.settings.settings_string||"");for(const e of this.zones)this.settings=Object(_.b)(this.settings,e.settings.settings_string||"")}else this.settings=this.item.settings.settings_string||""}loadZones(){this._service.Zones.query({sys_id:this.item.id,offset:0}).then(e=>{e.sort((e,t)=>this.item.zones.indexOf(t.id)-this.item.zones.indexOf(e.id)),this.zones=e,this.updateSettings()},()=>null)}}return e.ngComponentDef=c.Rb({type:e,selectors:[["system-about"]],factory:function(t){return new(t||e)(c.Xb(l.a),c.Xb(u.b))},inputs:{item:"item"},features:[c.Fb,c.Gb()],consts:20,vars:10,template:function(e,t){1&e&&(c.ec(0,"div",O),c.ec(1,"section",C),c.ec(2,"button",k),c.kc("tapped",function(e){return t.start()}),c.Tc(3,"Start System"),c.cc(),c.ec(4,"button",k),c.kc("tapped",function(e){return t.stop()}),c.Tc(5,"Stop System"),c.cc(),c.cc(),c.ec(6,"section",M),c.Rc(7,$,6,2,"div",P),c.Rc(8,j,5,1,"div",P),c.Rc(9,F,4,1,"div",P),c.Rc(10,U,5,1,"div",P),c.Rc(11,X,5,1,"div",P),c.cc(),c.Rc(12,L,2,0,"header",x),c.Yb(13,"system-exec-field",z),c.ec(14,"header"),c.Tc(15,"Settings "),c.ec(16,"span",T),c.kc("touchrelease",function(e){return t.toggleSettings()}),c.Tc(17),c.cc(),c.cc(),c.ec(18,"section"),c.Yb(19,"settings-form-field",S),c.cc(),c.cc()),2&e&&(c.Ic(7),c.vc("ngIf",t.item.support_url),c.Ic(8),c.vc("ngIf",t.item.bookable),c.Ic(9),c.vc("ngIf",t.item.bookable&&t.item.email),c.Ic(10),c.vc("ngIf",t.item.capacity),c.Ic(11),c.vc("ngIf",t.item.installed_ui_devices),c.Ic(12),c.vc("ngIf",t.item&&t.item.id&&t.item.modules),c.Ic(13),c.vc("system",t.item),c.Ic(17),c.Uc(!1===t.merged?"This system":"Merged"),c.Ic(19),c.vc("ngModel",t.settings)("readonly",!0))},directives:[y.b,p.b,i.n,w.a,I.a,s.k,s.n],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;font-size:1.1em}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7em;color:rgba(0,0,0,.6);padding:0 1em;font-weight:300;text-decoration:underline;cursor:pointer;transition:color .2s}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.85)}section[_ngcontent-%COMP%]{padding:.5em .25em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-bottom:.25em}button[_ngcontent-%COMP%]{margin:0 .25em}button[_ngcontent-%COMP%]:first-child{margin-left:0}button[_ngcontent-%COMP%]:last-child{margin-right:0}.field[_ngcontent-%COMP%]{display:flex;align-items:center;margin:.25em 0}.field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:0 .5em}label[_ngcontent-%COMP%]{font-size:.8em;font-weight:500}a[_ngcontent-%COMP%]{font-size:.9em}"]}),e})();var N=n("SxV6"),V=n("DuJs"),Z=n("GrRB"),H=n("EY9O"),q=n("SSqQ"),G=n("1OTw"),J=n("0njA"),Q=n("v26h");const W=[1,"container"],K=[1,"select"],ee=["mat-button","",3,"tapped"],te=[1,"dropdown"],ne=[3,"service","ngModel","ngModelChange"],ce=["mat-button","",3,"disabled","tapped"],ie=[1,"device-list"],se=[4,"ngIf"],oe=["class","info-block",4,"ngIf"],re=["class","terminal",4,"ngIf"],ae=[1,"small"],de=[1,"name"],le=[1,"module"],me=[1,"ip"],ge=["cdkDropList","",3,"cdkDropListDropped"],he=["cdkDrag","",3,"context-menu","offset_y","contextAction",4,"ngFor","ngForOf"],ue=["cdkDrag","",3,"context-menu","offset_y","contextAction"],fe=["cdkDragHandle","",1,"action","grab"],pe=[1,"backoffice-select-arrows"],be=["binding","","bind","connected",3,"model","sys","mod","modelChange",4,"ngIf"],ve=[1,"state",3,"tapped"],_e=["routerLinkActive","router-link-active",3,"routerLink"],ye=[3,"checked","change"],we=[1,"lock"],Ie=["class","backoffice-lock",4,"ngIf"],Oe=[3,"href"],Ce=["touchrelease","",1,"small"],ke=["mat-icon-button","",3,"matMenuTriggerFor"],Me=[3,"icon"],Pe=["menu","matMenu"],xe=["mat-menu-item","",3,"tapped",4,"ngFor","ngForOf"],ze=["class","placeholder","colspan","6",4,"cdkDragPlaceholder"],Te=["binding","","bind","connected",3,"model","sys","mod","modelChange"];function Se(e,t){if(1&e){const e=c.fc();c.ec(0,"i",Te),c.kc("modelChange",function(t){return c.Ec(e),c.pc().$implicit.connected=t}),c.cc()}if(2&e){const e=c.pc().$implicit,t=c.pc(2);c.vc("model",e.connected)("sys",t.item.id)("mod",t.device_classes[e.id])}}const Ee=[1,"backoffice-lock"];function De(e,t){1&e&&c.Yb(0,"i",Ee)}const Re=["mat-menu-item","",3,"tapped"],$e=[1,"text"];function je(e,t){if(1&e){const e=c.fc();c.ec(0,"button",Re),c.kc("tapped",function(n){c.Ec(e);const i=t.$implicit,s=c.pc().$implicit;return c.pc(2).handleContextEvent(i,s)}),c.Yb(1,"app-icon",Me),c.ec(2,"div",$e),c.Tc(3),c.cc(),c.cc()}if(2&e){const e=t.$implicit;c.Ic(1),c.vc("icon",e.icon),c.Ic(3),c.Uc(e.name)}}const Ae=["colspan","6",1,"placeholder"];function Ye(e,t){1&e&&c.Yb(0,"td",Ae)}const Fe=function(e){return["/devices",e]},Ue={class:"backoffice-dots-three-vertical"};function Xe(e,t){if(1&e){const e=c.fc();c.ec(0,"tr",ue),c.kc("contextAction",function(n){c.Ec(e);const i=t.$implicit;return c.pc(2).handleContextEvent(n,i)}),c.ec(1,"td",ae),c.ec(2,"div",fe),c.Yb(3,"i",pe),c.cc(),c.cc(),c.ec(4,"td",ae),c.Rc(5,Se,1,3,"i",be),c.ec(6,"div",ve),c.Pc(),c.kc("tapped",function(n){c.Ec(e);const i=t.$implicit;return c.pc(2).power(i)}),c.cc(),c.cc(),c.ec(7,"td",de),c.ec(8,"a",_e),c.Tc(9),c.cc(),c.cc(),c.ec(10,"td",le),c.ec(11,"mat-checkbox",ye),c.kc("change",function(n){c.Ec(e);const i=t.$implicit,s=c.pc(2);return s.device_listener[i.id]=n.checked,s.toggleDebugEvents(i)}),c.Tc(12),c.cc(),c.cc(),c.ec(13,"td",me),c.ec(14,"div",we),c.Rc(15,De,1,0,"i",Ie),c.cc(),c.ec(16,"a",Oe),c.Tc(17),c.cc(),c.cc(),c.ec(18,"td",Ce),c.ec(19,"button",ke),c.Yb(20,"app-icon",Me),c.cc(),c.ec(21,"mat-menu",null,Pe),c.Rc(23,je,4,2,"button",xe),c.cc(),c.cc(),c.Rc(24,Ye,1,0,"td",ze),c.cc()}if(2&e){const e=t.$implicit,n=c.Bc(22),i=c.pc(2);c.vc("context-menu",n)("offset_y",-64),c.Ic(5),c.vc("ngIf",e&&i.item.id),c.Ic(6),c.Mb("active",e.connected),c.Qc(),c.Ic(8),c.vc("routerLink",c.wc(14,Fe,e.id)),c.Ic(9),c.Uc(e.name),c.Ic(11),c.vc("checked",i.device_listener[e.id]),c.Ic(12),c.Vc(" ",i.device_classes[e.id]," "),c.Ic(15),c.vc("ngIf",e.tls),c.Ic(16),c.vc("href",(e.tls?"https://":"http://")+e.ip,c.Hc),c.Ic(17),c.Uc(e.ip),c.Ic(19),c.vc("matMenuTriggerFor",n),c.Ic(20),c.vc("icon",Ue),c.Ic(23),c.vc("ngForOf",i.menu_options)}}const Le=[];function Be(e,t){if(1&e){const e=c.fc();c.ec(0,"table"),c.ec(1,"thead"),c.Yb(2,"td",ae),c.Yb(3,"td",ae),c.ec(4,"td",de),c.Tc(5,"Name"),c.cc(),c.ec(6,"td",le),c.Tc(7,"Class"),c.cc(),c.ec(8,"td",me),c.Tc(9,"IP"),c.cc(),c.Yb(10,"td",ae),c.cc(),c.ec(11,"tbody",ge),c.kc("cdkDropListDropped",function(t){return c.Ec(e),c.pc().drop(t)}),c.Rc(12,Xe,25,16,"tr",he),c.cc(),c.cc()}if(2&e){const e=c.pc();c.Ic(12),c.vc("ngForOf",e.devices||Le)}}const Ne=[1,"info-block"];function Ve(e,t){1&e&&(c.ec(0,"div",Ne),c.ec(1,"div",$e),c.Tc(2,"No devices for system"),c.cc(),c.cc())}const Ze=[1,"terminal"],He=[3,"content"];function qe(e,t){if(1&e&&(c.ec(0,"section",Ze),c.Yb(1,"a-terminal",He),c.cc()),2&e){const e=c.pc();c.Ic(1),c.vc("content",e.device_logs)}}const Ge=(()=>{class e extends v.a{constructor(e,t,n){super(),this._service=e,this._dialog=t,this._composer=n,this.device_classes={},this.device_listener={},this.device_logs="",this.menu_options=[{id:"power",name:"Toggle Power",icon:{type:"icon",class:"backoffice-power-plug"}},{id:"state",name:"View State",icon:{type:"icon",class:"backoffice-eye"}},{id:"reload",name:"Reload Device",icon:{type:"icon",class:"backoffice-cw"}},{id:"remove",name:"Remove Device",icon:{type:"icon",class:"backoffice-trash"}}]}get module_service(){return this._service.Modules}get is_listening(){for(const e in this.device_listener)if(this.device_listener.hasOwnProperty(e)&&this.device_listener[e])return!0;return!1}ngOnInit(){this.device_logs="",this._service.initialised.pipe(Object(N.a)(e=>e)).subscribe(()=>{this.subscription("debug_events",this._composer.realtime.debug_events.subscribe(e=>{this.item.modules.find(t=>t===e.module)&&(this.device_logs+="\n\n"+e.message)}))})}ngOnChanges(e){e.item&&this.load()}load(e=0){this._service.Modules.query({system_id:this.item.id,offset:e}).then(e=>{e.sort((e,t)=>this.item.modules.indexOf(e.id)-this.item.modules.indexOf(t.id)),this.devices=e,this.generateDeviceBindings()},()=>null)}handleContextEvent(e,t){if(e)switch(e.id){case"power":this.power(t);break;case"state":this.viewState(t);break;case"reload":this.reloadModule(t);break;case"remove":this.remove(t)}}power(e){e.running?e.stop().then(()=>{this._service.notifySuccess("Module successfully stopped"),this.reload(e)},t=>{"string"==typeof t&&t.length<64?this._service.notifyError(t):this._service.notifyError(`Failed to stop device '${e.id}'.\nView Error?`,"View",()=>{})}):e.start().then(()=>{this._service.notifySuccess("Module successfully stopped"),this.reload(e)},t=>{"string"==typeof t&&t.length<64?this._service.notifyError(t):this._service.notifyError(`Failed to stop device '${e.id}'.\nView Error?`,"View",()=>{})})}reload(e){this._service.Modules.show(e.id).then(t=>{for(const n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},()=>null)}viewState(e){this._dialog.open(V.a,{data:{system:this.item,module:e,devices:this.devices}})}reloadModule(e){const t=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Reload module?",content:"New driver code will be loaded and the device settings will be reloaded.",icon:{type:"icon",class:"backoffice-install"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&((e.driver?e.driver.reload():this._service.Drivers.reload(e.dependency_id)).then(e=>this._service.notifySuccess("Driver successfully reloaded."),e=>this._service.notifyError(e.message||e)),t.close(),this.unsub("confirm_ref"))}))}drop(e){if(e&&e.previousIndex!==e.currentIndex){const t=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Change order?",content:"Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.",icon:{type:"icon",class:"backoffice-layers"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{if("done"===n.reason){t.componentInstance.loading="Updating device order...";const n=[...this.item.modules];Object(a.f)(n,e.previousIndex,e.currentIndex),this.item.storePendingChange("modules",n),this.item.save().then(()=>{t.close(),this.unsub("confirm_ref")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error reording devices. Error: ${e.message||e}`)})}}))}}remove(e){const t=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Remove module?",content:`Remove ${e.dependency_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(e=>{"done"===e.reason&&(t.close(),this.unsub("confirm_ref"))}))}newDevice(){this._service.Modules.add({control_system:this.item}).then(e=>{this._service.notifySuccess("Created new device"),this.joinDevice(e.id)},()=>{this._service.notifyError("Error creating new device")})}addDevice(){this.new_module&&(this.joinDevice(this.new_module),this.new_module="")}joinDevice(e){const t=[...this.item.modules];t.indexOf(e)<0&&t.push(e),this.item.storePendingChange("modules",t),this.item.save().then(()=>{this._service.notifySuccess("Successfully added device to system"),this.load()},()=>{this._service.notifyError("Failed to add module to system")})}toggleDebugEvents(e){e&&(console.log("Toggle Device:",e,this.device_listener[e.id]),this.device_listener[e.id]?this.subscription(`debug_${e.id}`,e.debug()):this.unsub(`debug_${e.id}`))}generateDeviceBindings(){const e={};for(const t of this.devices){const n=t.custom_name||(t.driver?t.driver.module_name:"")||"Blank";e[n]||(e[n]=0),this.device_classes[t.id]=`${n}_${++e[n]}`}}}return e.ngComponentDef=c.Rb({type:e,selectors:[["system-devices"]],factory:function(t){return new(t||e)(c.Xb(l.a),c.Xb(u.b),c.Xb(r.c))},inputs:{item:"item"},features:[c.Fb,c.Gb()],consts:12,vars:6,template:function(e,t){1&e&&(c.ec(0,"div",W),c.ec(1,"section",K),c.ec(2,"button",ee),c.kc("tapped",function(e){return t.newDevice()}),c.Tc(3,"Add new"),c.cc(),c.ec(4,"div",te),c.ec(5,"item-search-field",ne),c.kc("ngModelChange",function(e){return t.new_module=e.id}),c.cc(),c.cc(),c.ec(6,"button",ce),c.kc("tapped",function(e){return t.addDevice()}),c.Tc(7," Add existing "),c.cc(),c.cc(),c.ec(8,"section",ie),c.Rc(9,Be,13,1,"table",se),c.Rc(10,Ve,3,0,"div",oe),c.cc(),c.Rc(11,qe,2,1,"section",re),c.cc()),2&e&&(c.Ic(5),c.vc("service",t.module_service)("ngModel",null),c.Ic(6),c.vc("disabled",!t.new_module),c.Ic(9),c.vc("ngIf",t.devices&&t.devices.length>0),c.Ic(10),c.vc("ngIf",!t.devices||t.devices.length<=0),c.Ic(11),c.vc("ngIf",t.is_listening))},directives:[y.b,p.b,Z.a,s.k,s.n,i.n,a.d,i.m,a.a,H.a,a.b,o.f,o.e,q.a,G.c,J.a,G.d,a.c,r.a,G.a,Q.a],styles:[".container[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;top:4em;left:0;right:0;bottom:0;overflow:hidden}.options[_ngcontent-%COMP%]{display:flex;font-size:1.2em;max-width:5em;margin:0}.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{flex:1;width:5em}.table-row[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]{width:10em;min-width:7em}.placeholder[_ngcontent-%COMP%]{background:#ccc;min-height:3em;transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.device-list[_ngcontent-%COMP%]{flex:1;min-height:8em;overflow:auto;padding:1em}.lock[_ngcontent-%COMP%]{height:1.2em;width:1.2em;display:inline-flex;align-items:center;justify-content:center}.state[_ngcontent-%COMP%]{height:16px;width:16px;margin:.25em;background-color:#000;border-radius:.8em;transition:margin 250ms,height 250ms,width 250ms,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:8px;width:8px;margin:8px}.terminal[_ngcontent-%COMP%]{padding-top:.5em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:1em 1em 0}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-left:0}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}.grab[_ngcontent-%COMP%]{cursor:-webkit-grab;cursor:grab}.placeholder[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);border:4px dashed rgba(0,0,0,.6);height:2em}a[_ngcontent-%COMP%]{color:rgba(0,0,0,.85)}.mat-menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:0 1em}.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.2em}.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex:1;min-width:50%;margin-left:.5em}"]}),e})(),Je=[1,"container"],Qe=[1,"settings"],We=[1,"select"],Ke=[1,"dropdown"],et=[3,"service","ngModel","ngModelChange"],tt=["mat-button","",3,"disabled","tapped"],nt=[4,"ngIf"],ct=["class","info-block",4,"ngIf"],it=[1,"small"],st=[1,"name"],ot=[1,"description"],rt=["class","small",4,"ngIf"],at=["cdkDropList","",3,"cdkDropListDropped"],dt=["cdkDrag","",4,"ngFor","ngForOf"];function lt(e,t){1&e&&c.Yb(0,"td",it)}const mt=["cdkDrag",""],gt=["cdkDragHandle","",1,"action","grab"],ht=[1,"backoffice-select-arrows"],ut=["routerLinkActive","router-link-active",3,"routerLink"],ft=["class","placeholder","colspan","6",4,"cdkDragPlaceholder"],pt=["mat-icon-button","",3,"tapped"],bt=[1,"backoffice-publish"];function vt(e,t){if(1&e){const e=c.fc();c.ec(0,"td",it),c.ec(1,"button",pt),c.kc("tapped",function(t){c.Ec(e);const n=c.pc().$implicit;return c.pc(2).removeZone(n)}),c.Yb(2,"i",bt),c.cc(),c.cc()}}const _t=["colspan","6",1,"placeholder"];function yt(e,t){1&e&&c.Yb(0,"td",_t)}const wt=function(e){return["/zones",e]};function It(e,t){if(1&e&&(c.ec(0,"tr",mt),c.ec(1,"td",it),c.ec(2,"div",gt),c.Yb(3,"i",ht),c.cc(),c.cc(),c.ec(4,"td",st),c.ec(5,"a",ut),c.Tc(6),c.cc(),c.cc(),c.ec(7,"td",ot),c.Tc(8),c.cc(),c.Rc(9,vt,3,0,"td",rt),c.Rc(10,yt,1,0,"td",ft),c.cc()),2&e){const e=t.$implicit,n=c.pc(2);c.Ic(5),c.vc("routerLink",c.wc(4,wt,e.id)),c.Ic(6),c.Uc(e.name),c.Ic(8),c.Uc(e.description),c.Ic(9),c.vc("ngIf",n.zones.length>1)}}function Ot(e,t){if(1&e){const e=c.fc();c.ec(0,"table"),c.ec(1,"thead"),c.Yb(2,"td",it),c.ec(3,"td",st),c.Tc(4,"Name"),c.cc(),c.ec(5,"td",ot),c.Tc(6,"Description"),c.cc(),c.Rc(7,lt,1,0,"td",rt),c.cc(),c.ec(8,"tbody",at),c.kc("cdkDropListDropped",function(t){return c.Ec(e),c.pc().drop(t)}),c.Rc(9,It,11,6,"tr",dt),c.cc(),c.cc()}if(2&e){const e=c.pc();c.Ic(7),c.vc("ngIf",e.zones.length>1),c.Ic(9),c.vc("ngForOf",e.zones)}}const Ct=[1,"info-block"],kt=[1,"text"];function Mt(e,t){1&e&&(c.ec(0,"div",Ct),c.ec(1,"div",kt),c.Tc(2,"No zones for system"),c.cc(),c.cc())}const Pt=(()=>{class e extends v.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.loading=new c.s}get zone_service(){return this._service.Zones}ngOnChanges(e){e.item&&this.load()}load(e=0){this._service.Zones.query({sys_id:this.item.id,offset:e}).then(e=>{e.sort((e,t)=>this.item.zones.indexOf(e.id)-this.item.zones.indexOf(t.id)),this.zones=e},()=>null)}drop(e){if(e&&e.previousIndex!==e.currentIndex){const t=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Change order?",content:"Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.",icon:{type:"icon",class:"backoffice-cycle"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{if("done"===n.reason){const n=[...this.item.zones];Object(a.f)(n,e.previousIndex,e.currentIndex),t.componentInstance.loading="Updating zone ordering...",this.item.storePendingChange("zones",n),this.item.save().then(()=>{t.close(),this.unsub("confirm_ref")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error reording zones. Error: ${e.message||e}`)})}}))}}removeZone(e){if(e&&e.id){const t=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Remove zone?",content:`<p>Are you sure you want remove zone "${e.name}" from the system?</p>Configuration will be updated immediately.`,icon:{type:"icon",class:"backoffice-export"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&(this.loading.emit(!0),this.item.removeZone(e.id).then(e=>{this.loading.emit(!1),this.item=e,this._service.notifySuccess(`Remove zone "${this.new_zone}" from system`),t.close(),this.unsub("confirm_ref")},e=>{this.loading.emit(!1),this._service.notifySuccess(`Error removing "${this.new_zone}" from system. Error: ${e}`),t.close(),this.unsub("confirm_ref")}))}))}}joinZone(){if(this.new_zone)if(this.item.zones.indexOf(this.new_zone)<0){const e=[...this.item.zones,this.new_zone].filter(e=>!!e);this.loading.emit(!0);const t=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Add zone",content:`Add zone "${this.new_zone}" to system "${this.item.name}"`,icon:{type:"icon",class:"backoffice-upload-to-cloud"}}}));this.subscription("confirm_ref",t.componentInstance.event.subscribe(n=>{"done"===n.reason?(t.componentInstance.loading="Adding zone to system...",this._service.Systems.update(this.item.id,Object.assign({},this.item,{zones:e})).then(e=>{this.new_zone=null,this.loading.emit(!1),this._service.notifySuccess(`Added zone "${this.new_zone}" to system`),this.item=e,this.load(),t.close(),this.unsub("confirm_ref")},()=>{t.componentInstance.loading=null,this.loading.emit(!1),this._service.notifyError(`Error adding zone "${this.new_zone}"`)})):this.loading.emit(!1)}))}else this._service.notifyInfo("The selected zone is already linked to this system")}}return e.ngComponentDef=c.Rb({type:e,selectors:[["system-zones"]],factory:function(t){return new(t||e)(c.Xb(l.a),c.Xb(u.b))},inputs:{item:"item"},outputs:{loading:"loading"},features:[c.Fb,c.Gb()],consts:10,vars:5,template:function(e,t){1&e&&(c.ec(0,"div",Je),c.ec(1,"div",Qe),c.ec(2,"section",We),c.ec(3,"div",Ke),c.ec(4,"item-search-field",et),c.kc("ngModelChange",function(e){return t.new_zone=e.id}),c.cc(),c.cc(),c.ec(5,"button",tt),c.kc("tapped",function(e){return t.joinZone()}),c.Tc(6,"Join zone"),c.cc(),c.cc(),c.ec(7,"section"),c.Rc(8,Ot,10,2,"table",nt),c.Rc(9,Mt,3,0,"div",ct),c.cc(),c.cc(),c.cc()),2&e&&(c.Ic(4),c.vc("service",t.zone_service)("ngModel",null),c.Ic(5),c.vc("disabled",!t.new_zone),c.Ic(8),c.vc("ngIf",t.zones&&t.zones.length>0),c.Ic(9),c.vc("ngIf",!t.zones||t.zones.length<=0))},directives:[Z.a,s.k,s.n,y.b,p.b,i.n,a.d,i.m,a.a,a.b,o.f,o.e,a.c],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:3em;height:3em;transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.name[_ngcontent-%COMP%]{min-width:10em}.description[_ngcontent-%COMP%]{font-size:.8em;padding:.5em}"]}),e})();var xt=n("uxQG"),zt=n("IRfi"),Tt=n("A2Vd"),St=n("oIn+");const Et=[1,"container"],Dt=[1,"settings"],Rt=[1,"select"],$t=[1,"dropdown"],jt=["mat-button","",3,"tapped"],At=["appearance","outline"],Yt=["matPrefix","",1,"prefix"],Ft=[3,"icon"],Ut=["matInput","","name","search-filter","placeholder","Filter Triggers",3,"ngModel","ngModelChange"],Xt=[1,"list"],Lt=[4,"ngIf","ngIfElse"],Bt=["empty_state",""],Nt=[1,"small"],Vt=[1,"flex"],Zt=[1,"count"],Ht=[1,"added"],qt=[1,"duo"],Gt=[4,"ngFor","ngForOf"],Jt=[1,"state"],Qt=[3,"routerLink"],Wt=[1,"actions"],Kt=["mat-icon-button","",3,"tapped"],en=function(e){return["/triggers",e]},tn={class:"backoffice-edit"},nn={class:"backoffice-trash"};function cn(e,t){if(1&e){const e=c.fc();c.ec(0,"tr"),c.ec(1,"td",Nt),c.ec(2,"div",Jt),c.Pc(),c.cc(),c.cc(),c.ec(3,"td",Vt),c.ec(4,"a",Qt),c.Tc(5),c.cc(),c.cc(),c.ec(6,"td",Zt),c.Tc(7),c.cc(),c.ec(8,"td",Ht),c.Tc(9),c.qc(10,"dateFrom"),c.cc(),c.ec(11,"td",qt),c.ec(12,"div",Wt),c.ec(13,"button",Kt),c.kc("tapped",function(n){c.Ec(e);const i=t.$implicit;return c.pc(2).editTrigger(i)}),c.Yb(14,"app-icon",Ft),c.cc(),c.ec(15,"button",Kt),c.kc("tapped",function(n){c.Ec(e);const i=t.$implicit;return c.pc(2).deleteTrigger(i)}),c.Yb(16,"app-icon",Ft),c.cc(),c.cc(),c.cc(),c.cc()}if(2&e){const e=t.$implicit;c.Ic(2),c.Mb("active",e.enabled),c.Qc(),c.Ic(4),c.vc("routerLink",c.wc(9,en,e.id)),c.Ic(5),c.Uc(e.name),c.Ic(7),c.Uc(e.activated_count||"0"),c.Ic(9),c.Uc(c.rc(10,7,1e3*(e.created_at-0))),c.Ic(14),c.vc("icon",tn),c.Ic(16),c.vc("icon",nn)}}function sn(e,t){if(1&e&&(c.ec(0,"table"),c.ec(1,"thead"),c.Yb(2,"td",Nt),c.ec(3,"td",Vt),c.Tc(4,"Name"),c.cc(),c.ec(5,"td",Zt),c.Tc(6,"Count"),c.cc(),c.ec(7,"td",Ht),c.Tc(8,"Added"),c.cc(),c.Yb(9,"td",qt),c.cc(),c.ec(10,"tbody"),c.Rc(11,cn,17,11,"tr",Gt),c.cc(),c.cc()),2&e){const e=c.pc();c.Ic(11),c.vc("ngForOf",e.trigger_list)}}const on=[1,"info-block"],rn=[1,"text"];function an(e,t){1&e&&(c.ec(0,"div",on),c.ec(1,"div",rn),c.Tc(2,"No triggers for system"),c.cc(),c.cc())}const dn={class:"backoffice-magnifying-glass"},ln=(()=>{class e extends v.a{constructor(e,t,n){super(),this._service=e,this._dialog=t,this._composer=n,this.trigger_list=[]}ngOnChanges(e){e.item&&this.loadSystemTriggers()}loadSystemTriggers(e=0){this._service.SystemTriggers.query({sys_id:this.item.id,offset:e}).then(e=>{this.trigger_list=e},()=>null)}editTrigger(e){if(this.item&&e){const t=this._dialog.open(g.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:e,service:this._service.SystemTriggers,external_save:!0}});this.subscription("delete_confirm",t.componentInstance.event.subscribe(n=>{"action"===n.reason&&(t.componentInstance.loading="Saving trigger settings...",this._composer.http.put(`${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${e.id}`,e.toJSON(!0)).subscribe(()=>null,e=>{t.componentInstance.loading=null,this._service.notifyError(`Error updating trigger settings. Error: ${e.message||e}`)},()=>{this._service.notifySuccess("Successfully updated trigger settings."),t.close(),this.unsub("delete_confirm")}))}))}}deleteTrigger(e){if(this.item&&e){const t=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Remove trigger",content:`<p>Are you sure you want remove trigger "${e.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(n=>{"done"===n.reason&&(t.componentInstance.loading="Removing trigger...",this._composer.http.delete(`${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${e.id}`).subscribe(()=>null,e=>{t.componentInstance.loading=null,this._service.notifyError(`Error removing trigger. Error: ${e.message||e}`)},()=>{this._service.notifySuccess(`Successfully deleted trigger "${this.item.name}".`),t.close(),this.unsub("delete_confirm")}))}))}}selectTriggerToAdd(){const e=this._dialog.open(xt.a,{height:"auto",width:"auto",data:{service_name:"Triggers"}});this.subscription("dialog_events",e.componentInstance.event.subscribe(t=>{const n=e.componentInstance.item;"action"===t.reason&&n&&(this.addTrigger(n),e.close())})),e.afterClosed().subscribe(()=>this.unsub("dialog_events"))}addTrigger(e){this._service.Systems.task(this.item.id,"triggers",{control_system_id:this.item.id,enabled:!0,important:!1,trigger_id:e.id})}}return e.ngComponentDef=c.Rb({type:e,selectors:[["system-triggers"]],factory:function(t){return new(t||e)(c.Xb(l.a),c.Xb(u.b),c.Xb(r.c))},inputs:{item:"item"},features:[c.Fb,c.Gb()],consts:14,vars:4,template:function(e,t){if(1&e&&(c.ec(0,"div",Et),c.ec(1,"div",Dt),c.ec(2,"section",Rt),c.ec(3,"div",$t),c.ec(4,"button",jt),c.kc("tapped",function(e){return t.selectTriggerToAdd()}),c.Tc(5,"Add trigger"),c.cc(),c.cc(),c.ec(6,"mat-form-field",At),c.ec(7,"div",Yt),c.Yb(8,"app-icon",Ft),c.cc(),c.ec(9,"input",Ut),c.kc("ngModelChange",function(e){return t.search_str=e}),c.cc(),c.cc(),c.cc(),c.ec(10,"section",Xt),c.Rc(11,sn,12,1,"table",Lt),c.cc(),c.cc(),c.cc(),c.Rc(12,an,3,0,"ng-template",null,Bt,c.Sc)),2&e){const e=c.Bc(13);c.Ic(8),c.vc("icon",dn),c.Ic(9),c.vc("ngModel",t.search_str),c.Ic(11),c.vc("ngIf",t.trigger_list.length>0)("ngIfElse",e)}},directives:[y.b,p.b,zt.b,zt.e,J.a,Tt.a,s.b,s.k,s.n,i.n,i.m,o.f],pipes:[St.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}.table-row[_ngcontent-%COMP%]   .added[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{width:8em;min-width:8em}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:16px;width:16px;margin:.25em;background-color:#000;border-radius:.8em;transition:margin 250ms,height 250ms,width 250ms,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:8px;width:8px;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1;min-width:50%}.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .25em 1.5em}.select[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.25em}.duo[_ngcontent-%COMP%]{width:6em}.actions[_ngcontent-%COMP%]{display:flex}"]}),e})(),mn=[1,"container"],gn=[1,"sidebar"],hn=["heading","Systems",3,"module","close","searchChange","event"],un=[3,"touchrelease"],fn=["name","system",3,"item","loading","tabs","active","event"],pn=["about",""],bn=["devices",""],vn=["zones",""],_n=["triggers",""],yn=[3,"item"];function wn(e,t){if(1&e&&c.Yb(0,"system-about",yn),2&e){const e=c.pc();c.vc("item",e.item)}}function In(e,t){if(1&e&&c.Yb(0,"system-devices",yn),2&e){const e=c.pc();c.vc("item",e.item)}}function On(e,t){if(1&e&&c.Yb(0,"system-zones",yn),2&e){const e=c.pc();c.vc("item",e.item)}}function Cn(e,t){if(1&e&&c.Yb(0,"system-triggers",yn),2&e){const e=c.pc();c.vc("item",e.item)}}const kn={class:"backoffice-info-with-circle"},Mn=function(e){return{id:"about",name:"About",template:e,icon:kn}},Pn={class:"backoffice-tablet"},xn=function(e,t){return{id:"devices",name:"Devices",count:e,template:t,icon:Pn}},zn={class:"backoffice-layers"},Tn=function(e,t){return{id:"zones",name:"Zones",count:e,template:t,icon:zn}},Sn={class:"backoffice-stopwatch"},En=function(e,t){return{id:"triggers",name:"Triggers",count:e,template:t,icon:Sn}},Dn=function(e,t,n,c){return[e,t,n,c]},Rn=(()=>{class e extends m.a{constructor(e,t,n,c){super(e,t,n),this._service=e,this._route=t,this._router=n,this._dialog=c,this.service=this._service.Systems}loadValues(){this._service.SystemTriggers.query({offset:0,limit:1,sys_id:this.item.id}).then(()=>this.trigger_count=this._service.SystemTriggers.last_total),this.device_count=(this.item.modules||[]).length,this.zone_count=(this.item.zones||[]).length}new(){this._dialog.open(g.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new d.n(this._service.Systems,{}),service:this._service.Systems}})}edit(){this.item&&this._dialog.open(g.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Systems}})}delete(){if(this.item){const e=this._dialog.open(h.b,Object.assign({},h.a,{data:{title:"Delete system",content:"<p>Are you sure you want delete this system?</p><p>Deleting this will <strong>immediately</strong> delete modules that are not in another system</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>{"done"===t.reason&&(e.componentInstance.loading="Deleting system...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted system "${this.item.name}".`),this._router.navigate(["/systems"]),e.close(),this.unsub("delete_confirm")},t=>{e.componentInstance.loading=null,this._service.notifyError(`Error deleting system. Error: ${t}`)}))}))}}}return e.ngComponentDef=c.Rb({type:e,selectors:[["app-systems"]],factory:function(t){return new(t||e)(c.Xb(l.a),c.Xb(o.a),c.Xb(o.c),c.Xb(u.b))},features:[c.Fb],consts:13,vars:23,template:function(e,t){if(1&e&&(c.ec(0,"div",mn),c.Pc(),c.ec(1,"div",gn),c.ec(2,"sidebar",hn),c.kc("searchChange",function(e){return t.search(e)}),c.kc("event",function(e){return t.sidebarEvent(e)}),c.cc(),c.cc(),c.ec(3,"main",un),c.kc("touchrelease",function(e){return t.show_sidebar=!1}),c.ec(4,"item-display",fn),c.kc("event",function(e){return t.itemEvent(e)}),c.Rc(5,wn,1,1,"ng-template",null,pn,c.Sc),c.Rc(7,In,1,1,"ng-template",null,bn,c.Sc),c.Rc(9,On,1,1,"ng-template",null,vn,c.Sc),c.Rc(11,Cn,1,1,"ng-template",null,_n,c.Sc),c.cc(),c.cc(),c.cc()),2&e){const e=c.Bc(6),n=c.Bc(8),i=c.Bc(10),s=c.Bc(12);c.Mb("show",t.show_sidebar),c.Qc(),c.Ic(2),c.vc("module",t.module)("close",t.show_sidebar),c.Ic(4),c.vc("item",t.item)("loading",t.loading_item)("tabs",c.zc(18,Dn,c.wc(7,Mn,e),c.xc(9,xn,t.device_count,n),c.xc(12,Tn,t.zone_count,i),c.xc(15,En,t.trigger_count,s)))("active",t.tab)}},directives:[f.a,p.b,b.a,B,Ge,Pt,ln],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}"]}),e})(),$n=[{path:"",component:Rn,children:[]},{path:":id",component:Rn,children:[]},{path:"**",redirectTo:""}];var jn=n("PCNd");n.d(t,"AppSystemsModule",function(){return An});const An=(()=>{class e{}return e.ngModuleDef=c.Vb({type:e}),e.ngInjectorDef=c.Ub({factory:function(t){return new(t||e)},imports:[[i.c,s.g,r.b,o.g.forChild($n),jn.a,a.e]]}),e})();o.g.forChild($n)}}]);