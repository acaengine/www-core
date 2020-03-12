(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{wKJ7:function(t,e,i){"use strict";i.r(e);var n=i("ofXK"),o=i("3Pt+"),c=i("tyNb"),s=i("5+WD"),r=i("mrSG"),a=i("THE0"),d=i("OaWH"),b=i("C/ya"),g=i("g+Po"),m=i("D/9M"),l=i("fXoL"),p=i("0IaG"),h=i("BAfr"),f=i("m6yr"),u=i("47y3");const _=function(){return{class:"backoffice-info-with-circle"}},v=function(t){return{id:"about",name:"About",icon:t}},y=function(){return{class:"backoffice-documents"}},w=function(t,e){return{id:"systems",name:"Systems",count:t,icon:e}},O=function(t,e){return[t,e]};let C=(()=>{class t extends b.a{constructor(t,e,i,n){super(t,e,i),this._service=t,this._route=e,this._router=i,this._dialog=n,this.service=this._service.Triggers}loadValues(){this._service.SystemTriggers.query({offset:0,limit:1,trigger_id:this.item.id}).then(t=>this.system_count=this._service.SystemTriggers.last_total||t.length||0)}new(){this._dialog.open(m.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new a.n(this._service.Triggers,{}),service:this._service.Triggers}}).componentInstance.event.subscribe(t=>{"done"===t.reason&&this._router.navigate(["/triggers",t.metadata.item.id])})}edit(){this.item&&this._dialog.open(m.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Triggers}})}delete(){if(this.item){const t=this._dialog.open(g.b,Object.assign(Object.assign({},g.a),{data:{title:"Delete trigger",content:"<p>Are you sure you want delete this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove it from all associated systems and zones</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(e=>Object(r.b)(this,void 0,void 0,(function*(){"done"===e.reason&&(t.componentInstance.loading="Deleting trigger...",yield this.item.delete().catch(e=>{throw t.componentInstance.loading=null,this._service.notifyError(`Error deleting trigger. Error: ${e.message||e}`),e}),this._router.navigate(["/triggers"]),t.close(),this.unsub("delete_confirm"))}))))}}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(d.a),l.Rb(c.a),l.Rb(c.c),l.Rb(p.b))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-triggers"]],features:[l.Ab],decls:5,vars:17,consts:[[1,"container"],[1,"sidebar"],["heading","Triggers",3,"module","close","event"],[3,"touchrelease"],["name","trigger","route","triggers",3,"item","loading","tabs","event"]],template:function(t,e){1&t&&(l.Xb(0,"div",0),l.Xb(1,"div",1),l.Xb(2,"sidebar",2),l.fc("event",(function(t){return e.sidebarEvent(t)})),l.Wb(),l.Wb(),l.Xb(3,"main",3),l.fc("touchrelease",(function(){return e.show_sidebar=!1})),l.Xb(4,"item-display",4),l.fc("event",(function(t){return e.itemEvent(t)})),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.Hb("show",e.show_sidebar),l.Db(2),l.pc("module",e.module)("close",e.show_sidebar),l.Db(2),l.pc("item",e.item)("loading",e.loading_item)("tabs",l.sc(14,O,l.rc(8,v,l.qc(7,_)),l.sc(11,w,e.system_count,l.qc(10,y)))))},directives:[h.a,f.b,u.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}"]}),t})();var x=i("5f3J"),k=i("xQV9"),P=i("mrP1"),M=i("Qu3c"),W=i("GrRB"),X=i("bTqV"),D=i("0njA"),S=i("8r66");const j=function(){return{class:"backoffice-edit"}},I=function(){return{class:"backoffice-trash"}};function A(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",18),l.Sb(1,"div",19),l.Xb(2,"div",20),l.Jc(3),l.kc(4,"json"),l.kc(5,"json"),l.Wb(),l.Xb(6,"button",9),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).editCondition(i)})),l.Sb(7,"app-icon",10),l.Wb(),l.Xb(8,"button",21),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).confirmRemoveCondition(i)})),l.Sb(9,"app-icon",10),l.Wb(),l.Wb()}if(2&t){const t=e.$implicit,i=l.jc(3);l.Db(3),l.Nc(" ",l.lc(4,6,t.left)," ",t.operator," ",l.lc(5,8,t.right)," "),l.Db(3),l.pc("disabled",!i.template_system),l.Db(1),l.pc("icon",l.qc(10,j)),l.Db(2),l.pc("icon",l.qc(11,I))}}function J(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",18),l.Sb(1,"div",19),l.Xb(2,"div",20),l.Jc(3),l.Wb(),l.Xb(4,"button",9),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).editCondition(i)})),l.Sb(5,"app-icon",10),l.Wb(),l.Xb(6,"button",21),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).confirmRemoveCondition(i)})),l.Sb(7,"app-icon",10),l.Wb(),l.Wb()}if(2&t){const t=e.$implicit,i=l.jc(3);l.Db(3),l.Mc(" ","at"===t.type?"At time":"CRON"," ","at"===t.type?t.time:t.cron," "),l.Db(1),l.pc("disabled",!i.template_system),l.Db(1),l.pc("icon",l.qc(5,j)),l.Db(2),l.pc("icon",l.qc(6,I))}}function T(t,e){if(1&t&&(l.Xb(0,"div",13),l.Xb(1,"div",14),l.Jc(2,"Variable Comparison Condtions"),l.Wb(),l.Xb(3,"div",15),l.Hc(4,A,10,12,"div",16),l.Wb(),l.Xb(5,"div",14),l.Jc(6,"Time Dependent Conditions"),l.Wb(),l.Xb(7,"div",17),l.Hc(8,J,8,7,"div",16),l.Wb(),l.Wb()),2&t){const t=l.jc(2);l.Db(4),l.pc("ngForOf",t.comparisons)("ngForTrackBy",t.i),l.Db(4),l.pc("ngForOf",t.time_dependents)("ngForTrackBy",t.i)}}function R(t,e){1&t&&l.Sb(0,"div",28)}const $=function(){return{class:"backoffice-select-arrows"}};function E(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",25),l.Xb(1,"div",26),l.Sb(2,"app-icon",10),l.Wb(),l.Xb(3,"div",20),l.Jc(4),l.kc(5,"json"),l.Wb(),l.Xb(6,"button",9),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).editAction(i)})),l.Sb(7,"app-icon",10),l.Wb(),l.Xb(8,"button",21),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).confirmRemoveAction(i)})),l.Sb(9,"app-icon",10),l.Wb(),l.Hc(10,R,1,0,"div",27),l.Wb()}if(2&t){const t=e.$implicit,i=l.jc(3);l.Db(2),l.pc("icon",l.qc(9,$)),l.Db(2),l.Nc(" ",t.mod,", ",t.method,"(",l.lc(5,7,t.args),") "),l.Db(2),l.pc("disabled",!i.template_system),l.Db(1),l.pc("icon",l.qc(10,j)),l.Db(2),l.pc("icon",l.qc(11,I))}}function F(t,e){1&t&&l.Sb(0,"div",28)}function H(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",25),l.Xb(1,"div",26),l.Sb(2,"app-icon",10),l.Wb(),l.Xb(3,"div",20),l.Xb(4,"span",29),l.kc(5,"formatList"),l.Jc(6),l.Wb(),l.Jc(7),l.Wb(),l.Xb(8,"button",9),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).editAction(i)})),l.Sb(9,"app-icon",10),l.Wb(),l.Xb(10,"button",21),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).confirmRemoveAction(i)})),l.Sb(11,"app-icon",10),l.Wb(),l.Hc(12,F,1,0,"div",27),l.Wb()}if(2&t){const t=e.$implicit,i=l.jc(3);l.Db(2),l.pc("icon",l.qc(10,$)),l.Db(2),l.pc("matTooltip",l.lc(5,8,t.emails)),l.Db(2),l.Mc("",t.emails.length," Address",1===t.emails.length?"":"es",""),l.Db(1),l.Lc(" | Body Length: ",t.content.length," "),l.Db(1),l.pc("disabled",!i.template_system),l.Db(1),l.pc("icon",l.qc(11,j)),l.Db(2),l.pc("icon",l.qc(12,I))}}function z(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",13),l.Xb(1,"div",14),l.Jc(2,"Function Call Actions"),l.Wb(),l.Xb(3,"div",22),l.fc("cdkDropListDropped",(function(e){return l.zc(t),l.jc(2).confirmReorder("function",e)})),l.Hc(4,E,11,12,"div",23),l.Wb(),l.Xb(5,"div",14),l.Jc(6,"Email Actions"),l.Wb(),l.Xb(7,"div",24),l.fc("cdkDropListDropped",(function(e){return l.zc(t),l.jc(2).confirmReorder("mailer",e)})),l.Hc(8,H,13,13,"div",23),l.Wb(),l.Wb()}if(2&t){const t=l.jc(2);l.Db(4),l.pc("ngForOf",t.functions)("ngForTrackBy",t.i),l.Db(4),l.pc("ngForOf",t.mailers)("ngForTrackBy",t.i)}}const N=function(){return{class:"backoffice-plus"}};function q(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",3),l.Xb(1,"div",4),l.Xb(2,"section"),l.Xb(3,"div",5),l.Xb(4,"label",6),l.Jc(5,"Template System: "),l.Wb(),l.Xb(6,"item-search-field",7),l.fc("ngModelChange",(function(e){return l.zc(t),l.jc().template_system=e})),l.Wb(),l.Wb(),l.Wb(),l.Xb(7,"header"),l.Xb(8,"div",8),l.Xb(9,"button",9),l.fc("tapped",(function(){return l.zc(t),l.jc().addCondition()})),l.Sb(10,"app-icon",10),l.Wb(),l.Wb(),l.Xb(11,"div",11),l.Jc(12,"Conditions"),l.Wb(),l.Wb(),l.Xb(13,"section"),l.Hc(14,T,9,4,"div",12),l.Wb(),l.Xb(15,"header"),l.Xb(16,"div",8),l.Xb(17,"button",9),l.fc("tapped",(function(){return l.zc(t),l.jc().addAction()})),l.Sb(18,"app-icon",10),l.Wb(),l.Wb(),l.Xb(19,"div",11),l.Jc(20,"Actions"),l.Wb(),l.Wb(),l.Xb(21,"section"),l.Hc(22,z,9,4,"div",12),l.Wb(),l.Wb(),l.Wb()}if(2&t){const t=l.jc(),e=l.wc(2),i=l.wc(4);l.Db(6),l.pc("service",t.system_service)("ngModel",t.template_system),l.Db(3),l.pc("disabled",!t.template_system),l.Db(1),l.pc("icon",l.qc(10,N)),l.Db(4),l.pc("ngIf",t.comparisons.length||t.time_dependents.length)("ngIfElse",e),l.Db(3),l.pc("disabled",!t.template_system),l.Db(1),l.pc("icon",l.qc(11,N)),l.Db(4),l.pc("ngIf",t.functions.length||t.mailers.length)("ngIfElse",i)}}function L(t,e){1&t&&(l.Xb(0,"div",30),l.Xb(1,"div",11),l.Jc(2,"No condtions for trigger"),l.Wb(),l.Wb())}function B(t,e){1&t&&(l.Xb(0,"div",30),l.Xb(1,"div",11),l.Jc(2,"No actions for trigger"),l.Wb(),l.Wb())}let K=(()=>{class t extends x.a{constructor(t,e){super(),this._service=t,this._dialog=e,this.comparisons=[],this.time_dependents=[],this.functions=[],this.mailers=[]}get system_service(){return this._service.Systems}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",t=>{this.item=t,this.ngOnChanges({item:new l.K(null,this.item,!1)})}))}ngOnChanges(t){t.item&&(this.item&&this.item.conditions&&(this.comparisons=this.item.conditions.comparisons||[],this.time_dependents=this.item.conditions.time_dependents||[],this.functions=this.item.actions.functions||[],this.mailers=this.item.actions.mailers||[]),this.confirm_ref&&(this.confirm_ref.close(),this.confirm_ref=null,this.unsub("delete_confirm")))}addCondition(){this._dialog.open(P.a,{width:"auto",height:"auto",data:{trigger:this.item,system:this.template_system}})}editCondition(t){this._dialog.open(P.a,{width:"auto",height:"auto",data:{trigger:this.item,condition:JSON.parse(JSON.stringify(t)),system:this.template_system}})}addAction(){this._dialog.open(k.a,{data:{trigger:this.item,system:this.template_system}})}editAction(t){this._dialog.open(k.a,{data:{trigger:this.item,action:t,system:this.template_system}})}confirmRemoveCondition(t){this.confirm_ref=this._dialog.open(g.b,Object.assign(Object.assign({},g.a),{data:{title:"Remove trigger condition",content:"<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.confirm_ref.componentInstance.loading="Removing trigger condition...",this.removeCondition(t))}))}removeCondition(t){const e={comparisons:[...this.comparisons],time_dependents:[...this.time_dependents]};if(t.type){const i=this.time_dependents.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.time_dependents.splice(i,1)}else{const i=this.comparisons.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.comparisons.splice(i,1)}this.item.storePendingChange("conditions",e),this.item.save().then(()=>this._service.notifySuccess("Successfully removed trigger condition."),t=>this._service.notifyError(`Error removing trigger condition. Error: ${t.message||t}`))}confirmRemoveAction(t){this.confirm_ref=this._dialog.open(g.b,Object.assign(Object.assign({},g.a),{data:{title:"Remove trigger action",content:"<p>Are you sure you want remove this trigger action?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.confirm_ref.componentInstance.loading="Removing trigger action...",this.removeAction(t))}))}removeAction(t){const e={functions:[...this.item.actions.functions],mailers:[...this.item.actions.mailers]};if(t.emails){const i=this.mailers.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.mailers.splice(i,1)}else{const i=this.functions.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.functions.splice(i,1)}this.item.storePendingChange("actions",e),this.item.save().then(()=>this._service.notifySuccess("Successfully removed trigger action."),t=>this._service.notifyError(`Error removing trigger action. Error: ${t.message||t}`))}confirmReorder(t,e){this.confirm_ref=this._dialog.open(g.b,Object.assign(Object.assign({},g.a),{data:{title:`Reoreder trigger ${t} action`,content:"<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(i=>{"done"===i.reason&&(this.confirm_ref.componentInstance.loading=`Reordering trigger ${t} action...`,this.reorderAction(t,e))}))}reorderAction(t,e){const i=[..."function"===t?this.functions:this.mailers];Object(s.f)(i,e.previousIndex,e.currentIndex),this.item.storePendingChange("actions",{functions:"function"===t?i:this.functions,mailers:"function"===t?this.mailers:i}),this.item.save().then(()=>this._service.notifySuccess(`Successfully re-ordered trigger ${t} action.`),e=>this._service.notifyError(`Error re-ordered trigger ${t} action. Error: ${e.message||e}`))}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(d.a),l.Rb(p.b))},t.\u0275cmp=l.Lb({type:t,selectors:[["trigger-about"]],inputs:{item:"item"},features:[l.Ab,l.Bb()],decls:5,vars:1,consts:[["class","container",4,"ngIf"],["no_conditions",""],["no_actions",""],[1,"container"],[1,"settings"],[1,"field"],["for","dependency","matTooltip","System to use for available status variables and function calls"],[3,"service","ngModel","ngModelChange"],[1,"action"],["mat-icon-button","",3,"disabled","tapped"],[3,"icon"],[1,"text"],["class","list",4,"ngIf","ngIfElse"],[1,"list"],[1,"header"],[1,"group","comparisons"],["class","item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"group","time-dependents"],[1,"item"],[1,"handle"],[1,"details"],["mat-icon-button","",3,"tapped"],["cdkDropList","",1,"group","functions",3,"cdkDropListDropped"],["class","item","cdkDrag","",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDropList","",1,"group","emails",3,"cdkDropListDropped"],["cdkDrag","",1,"item"],["cdkDragHandle","",1,"handle"],["class","placeholder",4,"cdkDragPlaceholder"],[1,"placeholder"],[3,"matTooltip"],[1,"info-block"]],template:function(t,e){1&t&&(l.Hc(0,q,23,12,"div",0),l.Hc(1,L,3,0,"ng-template",null,1,l.Ic),l.Hc(3,B,3,0,"ng-template",null,2,l.Ic)),2&t&&l.pc("ngIf",e.item)},directives:[n.m,M.a,W.a,o.k,o.n,X.b,f.b,D.a,n.l,s.d,s.a,s.b,s.c],pipes:[n.g,S.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.no-item[_ngcontent-%COMP%]{font-size:.75em}.group[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.group[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.item[_ngcontent-%COMP%]{border-radius:4px;margin:2px 0}.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:2.5rem;width:2.5rem}.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{cursor:-webkit-grab;cursor:grab}.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;min-width:50%;white-space:nowrap;font-size:.6em;padding:0 .5rem;overflow:hidden;text-overflow:ellipsis}.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Fira Code,monospace}.item[_ngcontent-%COMP%]:nth-child(2n){background-color:#f0f0f0}.item[_ngcontent-%COMP%]:hover{background-color:#ccc}button[_ngcontent-%COMP%]{margin:.25em}header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .5em 0 0;border:1px solid rgba(0,0,0,.85)}header[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{border-color:#ccc}.header[_ngcontent-%COMP%]{padding:1em;font-size:1em;font-weight:500}.cdk-drag-preview[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}.placeholder[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);border:4px dashed rgba(0,0,0,.6);height:3em;width:100%;border-radius:4px}"]}),t})();var Y=i("Cvi9"),V=i("oIn+");const G=function(t){return["/systems",t]};function Q(t,e){if(1&t&&(l.Xb(0,"a",12),l.Jc(1),l.Xb(2,"span",13),l.Jc(3),l.Wb(),l.Jc(4,") "),l.Wb()),2&t){const t=l.jc().$implicit;l.pc("routerLink",l.rc(3,G,t.system_id)),l.Db(1),l.Lc(" ",t.system_name," ("),l.Db(2),l.Kc(t.system_id)}}const U=function(){return{class:"backoffice-trash"}};function Z(t,e){if(1&t){const t=l.Yb();l.Xb(0,"tr"),l.Xb(1,"td",5),l.Sb(2,"div",8),l.Wb(),l.Xb(3,"td",6),l.Hc(4,Q,5,5,"a",9),l.Wb(),l.Xb(5,"td"),l.Jc(6),l.kc(7,"dateFrom"),l.Wb(),l.Xb(8,"td",5),l.Xb(9,"button",10),l.fc("tapped",(function(){l.zc(t);const i=e.$implicit;return l.jc(3).delete(i)})),l.Sb(10,"app-icon",11),l.Wb(),l.Wb(),l.Wb()}if(2&t){const t=e.$implicit;l.Db(2),l.Hb("active",t.enabled),l.Db(2),l.pc("ngIf",t.system_id),l.Db(2),l.Kc(l.lc(7,5,1e3*(t.created_at-0))),l.Db(4),l.pc("icon",l.qc(7,U))}}function tt(t,e){if(1&t&&(l.Xb(0,"table"),l.Xb(1,"thead"),l.Sb(2,"td",5),l.Xb(3,"td",6),l.Jc(4,"Name"),l.Wb(),l.Xb(5,"td",6),l.Jc(6,"Added"),l.Wb(),l.Sb(7,"td",5),l.Wb(),l.Xb(8,"tbody"),l.Hc(9,Z,11,8,"tr",7),l.Wb(),l.Wb()),2&t){const t=l.jc(2);l.Db(9),l.pc("ngForOf",t.system_trigger_list)}}function et(t,e){if(1&t&&(l.Xb(0,"div",2),l.Xb(1,"div",3),l.Hc(2,tt,10,1,"table",4),l.Wb(),l.Wb()),2&t){const t=l.jc(),e=l.wc(2);l.Db(2),l.pc("ngIf",t.system_trigger_list.length>0)("ngIfElse",e)}}function it(t,e){1&t&&(l.Xb(0,"div",14),l.Xb(1,"div",15),l.Jc(2,"No systems with trigger"),l.Wb(),l.Wb())}const nt=[{path:"",component:C,children:[]},{path:":id",component:C,children:[{path:"about",component:K},{path:"systems",component:(()=>{class t extends x.a{constructor(t,e,i){super(),this._service=t,this._dialog=e,this._composer=i,this.system_trigger_list=[],this.connected={}}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",t=>{this.item=t,this.ngOnChanges({item:new l.K(null,this.item,!1)})}))}ngOnChanges(t){t.item&&this.item&&this.loadSystemTriggers()}loadSystemTriggers(t=0){this._service.SystemTriggers.query({trigger_id:this.item.id,offset:t}).then(t=>this.system_trigger_list=t||[],()=>null)}delete(t){if(t){const e=this._dialog.open(g.b,Object.assign(Object.assign({},g.a),{data:{title:"Remove trigger",content:`<p>Are you sure you want remove this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove from the system "${t.system_name||""}"</p>`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(i=>Object(r.b)(this,void 0,void 0,(function*(){"done"===i.reason&&(e.componentInstance.loading="Removing trigger...",yield this.deleteTrigger(t).catch(t=>{throw e.componentInstance.loading=null,this._service.notifyError(`Error removing trigger. Error: ${t.message||t}`),t}),this.loadSystemTriggers(),e.close(),this.unsub("delete_confirm"))}))))}}deleteTrigger(t){return new Promise((e,i)=>{this._composer.http.delete(`${this._composer.auth.api_endpoint}/systems/${t.system_id}/triggers/${t.id}`).subscribe(t=>null,t=>i(t),()=>e())})}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(d.a),l.Rb(p.b),l.Rb(Y.c))},t.\u0275cmp=l.Lb({type:t,selectors:[["trigger-systems"]],inputs:{item:"item"},features:[l.Ab,l.Bb()],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["empty_state",""],[1,"container"],[1,"settings"],[4,"ngIf","ngIfElse"],[1,"small"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"state"],[3,"routerLink",4,"ngIf"],["mat-icon-button","",3,"tapped"],[3,"icon"],[3,"routerLink"],[1,"id"],[1,"info-block"],[1,"text"]],template:function(t,e){1&t&&(l.Hc(0,et,3,2,"div",0),l.Hc(1,it,3,0,"ng-template",null,1,l.Ic)),2&t&&l.pc("ngIf",e.item)},directives:[n.m,n.l,X.b,f.b,D.a,c.f],pipes:[V.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}tbody[_ngcontent-%COMP%]{font-size:.9em}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap}div[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{width:2em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]{width:4em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#000;border-radius:.8em;-webkit-transition:margin .25s,height .25s,width .25s,background-color .3s;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}"]}),t})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}];var ot=i("PCNd");i.d(e,"AppTriggersModule",(function(){return ct}));let ct=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(e){return new(e||t)},imports:[[n.c,o.g,c.g.forChild(nt),ot.a,s.e]]}),t})()}}]);