(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{wKJ7:function(t,e,i){"use strict";i.r(e);var n=i("ofXK"),o=i("3Pt+"),c=i("tyNb"),s=i("5+WD"),r=i("mrSG"),a=i("THE0"),d=i("OaWH"),b=i("C/ya"),g=i("0IXN"),m=i("g+Po"),l=i("D/9M"),p=i("fXoL"),h=i("0IaG"),f=i("BAfr"),u=i("m6yr"),_=i("47y3");const v=function(){return{class:"backoffice-info-with-circle"}},y=function(t){return{id:"about",name:"About",icon:t}},w=function(){return{class:"backoffice-documents"}},O=function(t,e){return{id:"systems",name:"Systems",count:t,icon:e}},C=function(t,e){return[t,e]};let x=(()=>{class t extends b.a{constructor(t,e,i,n){super(t,e,i),this._service=t,this._route=e,this._router=i,this._dialog=n,this.service=this._service.Triggers}loadValues(){const t={offset:0,limit:1,trigger_id:this.item.id};Object(g.b)(t),this._service.SystemTriggers.query(t).then(t=>this.system_count=this._service.SystemTriggers.last_total||t.length||0)}new(){this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new a.n(this._service.Triggers,{}),service:this._service.Triggers}}).componentInstance.event.subscribe(t=>{"done"===t.reason&&this._router.navigate(["/triggers",t.metadata.item.id])})}edit(){this.item&&this._dialog.open(l.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Triggers}})}delete(){if(this.item){const t=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Delete trigger",content:"<p>Are you sure you want delete this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove it from all associated systems and zones</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(e=>Object(r.b)(this,void 0,void 0,(function*(){"done"===e.reason&&(t.componentInstance.loading="Deleting trigger...",yield this.item.delete().catch(e=>{throw t.componentInstance.loading=null,this._service.notifyError(`Error deleting trigger. Error: ${e.message||e}`),e}),this._router.navigate(["/triggers"]),t.close(),this.unsub("delete_confirm"))}))))}}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(d.a),p.Rb(c.a),p.Rb(c.c),p.Rb(h.b))},t.\u0275cmp=p.Lb({type:t,selectors:[["app-triggers"]],features:[p.Ab],decls:5,vars:17,consts:[[1,"container"],[1,"sidebar"],["heading","Triggers",3,"module","close","event"],[3,"touchrelease"],["name","trigger","route","triggers",3,"item","loading","tabs","event"]],template:function(t,e){1&t&&(p.Xb(0,"div",0),p.Xb(1,"div",1),p.Xb(2,"sidebar",2),p.fc("event",(function(t){return e.sidebarEvent(t)})),p.Wb(),p.Wb(),p.Xb(3,"main",3),p.fc("touchrelease",(function(){return e.show_sidebar=!1})),p.Xb(4,"item-display",4),p.fc("event",(function(t){return e.itemEvent(t)})),p.Wb(),p.Wb(),p.Wb()),2&t&&(p.Hb("show",e.show_sidebar),p.Db(2),p.pc("module",e.module)("close",e.show_sidebar),p.Db(2),p.pc("item",e.item)("loading",e.loading_item)("tabs",p.sc(14,C,p.rc(8,y,p.qc(7,v)),p.sc(11,O,e.system_count,p.qc(10,w)))))},directives:[f.a,u.b,_.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}"]}),t})();var k=i("5f3J"),P=i("xQV9"),M=i("mrP1"),W=i("Qu3c"),X=i("GrRB"),D=i("bTqV"),S=i("0njA"),j=i("8r66");const I=function(){return{class:"backoffice-edit"}},A=function(){return{class:"backoffice-trash"}};function J(t,e){if(1&t){const t=p.Yb();p.Xb(0,"div",18),p.Sb(1,"div",19),p.Xb(2,"div",20),p.Jc(3),p.kc(4,"json"),p.kc(5,"json"),p.Wb(),p.Xb(6,"button",9),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).editCondition(i)})),p.Sb(7,"app-icon",10),p.Wb(),p.Xb(8,"button",21),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).confirmRemoveCondition(i)})),p.Sb(9,"app-icon",10),p.Wb(),p.Wb()}if(2&t){const t=e.$implicit,i=p.jc(3);p.Db(3),p.Nc(" ",p.lc(4,6,t.left)," ",t.operator," ",p.lc(5,8,t.right)," "),p.Db(3),p.pc("disabled",!i.template_system),p.Db(1),p.pc("icon",p.qc(10,I)),p.Db(2),p.pc("icon",p.qc(11,A))}}function T(t,e){if(1&t){const t=p.Yb();p.Xb(0,"div",18),p.Sb(1,"div",19),p.Xb(2,"div",20),p.Jc(3),p.Wb(),p.Xb(4,"button",9),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).editCondition(i)})),p.Sb(5,"app-icon",10),p.Wb(),p.Xb(6,"button",21),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).confirmRemoveCondition(i)})),p.Sb(7,"app-icon",10),p.Wb(),p.Wb()}if(2&t){const t=e.$implicit,i=p.jc(3);p.Db(3),p.Mc(" ","at"===t.type?"At time":"CRON"," ","at"===t.type?t.time:t.cron," "),p.Db(1),p.pc("disabled",!i.template_system),p.Db(1),p.pc("icon",p.qc(5,I)),p.Db(2),p.pc("icon",p.qc(6,A))}}function R(t,e){if(1&t&&(p.Xb(0,"div",13),p.Xb(1,"div",14),p.Jc(2,"Variable Comparison Condtions"),p.Wb(),p.Xb(3,"div",15),p.Hc(4,J,10,12,"div",16),p.Wb(),p.Xb(5,"div",14),p.Jc(6,"Time Dependent Conditions"),p.Wb(),p.Xb(7,"div",17),p.Hc(8,T,8,7,"div",16),p.Wb(),p.Wb()),2&t){const t=p.jc(2);p.Db(4),p.pc("ngForOf",t.comparisons)("ngForTrackBy",t.i),p.Db(4),p.pc("ngForOf",t.time_dependents)("ngForTrackBy",t.i)}}function $(t,e){1&t&&p.Sb(0,"div",28)}const E=function(){return{class:"backoffice-select-arrows"}};function F(t,e){if(1&t){const t=p.Yb();p.Xb(0,"div",25),p.Xb(1,"div",26),p.Sb(2,"app-icon",10),p.Wb(),p.Xb(3,"div",20),p.Jc(4),p.kc(5,"json"),p.Wb(),p.Xb(6,"button",9),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).editAction(i)})),p.Sb(7,"app-icon",10),p.Wb(),p.Xb(8,"button",21),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).confirmRemoveAction(i)})),p.Sb(9,"app-icon",10),p.Wb(),p.Hc(10,$,1,0,"div",27),p.Wb()}if(2&t){const t=e.$implicit,i=p.jc(3);p.Db(2),p.pc("icon",p.qc(9,E)),p.Db(2),p.Nc(" ",t.mod,", ",t.method,"(",p.lc(5,7,t.args),") "),p.Db(2),p.pc("disabled",!i.template_system),p.Db(1),p.pc("icon",p.qc(10,I)),p.Db(2),p.pc("icon",p.qc(11,A))}}function H(t,e){1&t&&p.Sb(0,"div",28)}function z(t,e){if(1&t){const t=p.Yb();p.Xb(0,"div",25),p.Xb(1,"div",26),p.Sb(2,"app-icon",10),p.Wb(),p.Xb(3,"div",20),p.Xb(4,"span",29),p.kc(5,"formatList"),p.Jc(6),p.Wb(),p.Jc(7),p.Wb(),p.Xb(8,"button",9),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).editAction(i)})),p.Sb(9,"app-icon",10),p.Wb(),p.Xb(10,"button",21),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).confirmRemoveAction(i)})),p.Sb(11,"app-icon",10),p.Wb(),p.Hc(12,H,1,0,"div",27),p.Wb()}if(2&t){const t=e.$implicit,i=p.jc(3);p.Db(2),p.pc("icon",p.qc(10,E)),p.Db(2),p.pc("matTooltip",p.lc(5,8,t.emails)),p.Db(2),p.Mc("",t.emails.length," Address",1===t.emails.length?"":"es",""),p.Db(1),p.Lc(" | Body Length: ",t.content.length," "),p.Db(1),p.pc("disabled",!i.template_system),p.Db(1),p.pc("icon",p.qc(11,I)),p.Db(2),p.pc("icon",p.qc(12,A))}}function N(t,e){if(1&t){const t=p.Yb();p.Xb(0,"div",13),p.Xb(1,"div",14),p.Jc(2,"Function Call Actions"),p.Wb(),p.Xb(3,"div",22),p.fc("cdkDropListDropped",(function(e){return p.zc(t),p.jc(2).confirmReorder("function",e)})),p.Hc(4,F,11,12,"div",23),p.Wb(),p.Xb(5,"div",14),p.Jc(6,"Email Actions"),p.Wb(),p.Xb(7,"div",24),p.fc("cdkDropListDropped",(function(e){return p.zc(t),p.jc(2).confirmReorder("mailer",e)})),p.Hc(8,z,13,13,"div",23),p.Wb(),p.Wb()}if(2&t){const t=p.jc(2);p.Db(4),p.pc("ngForOf",t.functions)("ngForTrackBy",t.i),p.Db(4),p.pc("ngForOf",t.mailers)("ngForTrackBy",t.i)}}const q=function(){return{class:"backoffice-plus"}};function L(t,e){if(1&t){const t=p.Yb();p.Xb(0,"div",3),p.Xb(1,"div",4),p.Xb(2,"section"),p.Xb(3,"div",5),p.Xb(4,"label",6),p.Jc(5,"Template System: "),p.Wb(),p.Xb(6,"item-search-field",7),p.fc("ngModelChange",(function(e){return p.zc(t),p.jc().template_system=e})),p.Wb(),p.Wb(),p.Wb(),p.Xb(7,"header"),p.Xb(8,"div",8),p.Xb(9,"button",9),p.fc("tapped",(function(){return p.zc(t),p.jc().addCondition()})),p.Sb(10,"app-icon",10),p.Wb(),p.Wb(),p.Xb(11,"div",11),p.Jc(12,"Conditions"),p.Wb(),p.Wb(),p.Xb(13,"section"),p.Hc(14,R,9,4,"div",12),p.Wb(),p.Xb(15,"header"),p.Xb(16,"div",8),p.Xb(17,"button",9),p.fc("tapped",(function(){return p.zc(t),p.jc().addAction()})),p.Sb(18,"app-icon",10),p.Wb(),p.Wb(),p.Xb(19,"div",11),p.Jc(20,"Actions"),p.Wb(),p.Wb(),p.Xb(21,"section"),p.Hc(22,N,9,4,"div",12),p.Wb(),p.Wb(),p.Wb()}if(2&t){const t=p.jc(),e=p.wc(2),i=p.wc(4);p.Db(6),p.pc("service",t.system_service)("ngModel",t.template_system),p.Db(3),p.pc("disabled",!t.template_system),p.Db(1),p.pc("icon",p.qc(10,q)),p.Db(4),p.pc("ngIf",t.comparisons.length||t.time_dependents.length)("ngIfElse",e),p.Db(3),p.pc("disabled",!t.template_system),p.Db(1),p.pc("icon",p.qc(11,q)),p.Db(4),p.pc("ngIf",t.functions.length||t.mailers.length)("ngIfElse",i)}}function B(t,e){1&t&&(p.Xb(0,"div",30),p.Xb(1,"div",11),p.Jc(2,"No condtions for trigger"),p.Wb(),p.Wb())}function K(t,e){1&t&&(p.Xb(0,"div",30),p.Xb(1,"div",11),p.Jc(2,"No actions for trigger"),p.Wb(),p.Wb())}let Y=(()=>{class t extends k.a{constructor(t,e){super(),this._service=t,this._dialog=e,this.comparisons=[],this.time_dependents=[],this.functions=[],this.mailers=[]}get system_service(){return this._service.Systems}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",t=>{this.item=t,this.ngOnChanges({item:new p.K(null,this.item,!1)})}))}ngOnChanges(t){t.item&&(this.item&&this.item.conditions&&(this.comparisons=this.item.conditions.comparisons||[],this.time_dependents=this.item.conditions.time_dependents||[],this.functions=this.item.actions.functions||[],this.mailers=this.item.actions.mailers||[]),this.confirm_ref&&(this.confirm_ref.close(),this.confirm_ref=null,this.unsub("delete_confirm")))}addCondition(){this._dialog.open(M.a,{width:"auto",height:"auto",data:{trigger:this.item,system:this.template_system}})}editCondition(t){this._dialog.open(M.a,{width:"auto",height:"auto",data:{trigger:this.item,condition:JSON.parse(JSON.stringify(t)),system:this.template_system}})}addAction(){this._dialog.open(P.a,{data:{trigger:this.item,system:this.template_system}})}editAction(t){this._dialog.open(P.a,{data:{trigger:this.item,action:t,system:this.template_system}})}confirmRemoveCondition(t){this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger condition",content:"<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.confirm_ref.componentInstance.loading="Removing trigger condition...",this.removeCondition(t))}))}removeCondition(t){const e={comparisons:[...this.comparisons],time_dependents:[...this.time_dependents]};if(t.type){const i=this.time_dependents.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.time_dependents.splice(i,1)}else{const i=this.comparisons.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.comparisons.splice(i,1)}this.item.storePendingChange("conditions",e),this.item.save().then(()=>this._service.notifySuccess("Successfully removed trigger condition."),t=>this._service.notifyError(`Error removing trigger condition. Error: ${t.message||t}`))}confirmRemoveAction(t){this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger action",content:"<p>Are you sure you want remove this trigger action?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(e=>{"done"===e.reason&&(this.confirm_ref.componentInstance.loading="Removing trigger action...",this.removeAction(t))}))}removeAction(t){const e={functions:[...this.item.actions.functions],mailers:[...this.item.actions.mailers]};if(t.emails){const i=this.mailers.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.mailers.splice(i,1)}else{const i=this.functions.findIndex(e=>JSON.stringify(e)===JSON.stringify(t));e.functions.splice(i,1)}this.item.storePendingChange("actions",e),this.item.save().then(()=>this._service.notifySuccess("Successfully removed trigger action."),t=>this._service.notifyError(`Error removing trigger action. Error: ${t.message||t}`))}confirmReorder(t,e){this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:`Reoreder trigger ${t} action`,content:"<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe(i=>{"done"===i.reason&&(this.confirm_ref.componentInstance.loading=`Reordering trigger ${t} action...`,this.reorderAction(t,e))}))}reorderAction(t,e){const i=[..."function"===t?this.functions:this.mailers];Object(s.f)(i,e.previousIndex,e.currentIndex),this.item.storePendingChange("actions",{functions:"function"===t?i:this.functions,mailers:"function"===t?this.mailers:i}),this.item.save().then(()=>this._service.notifySuccess(`Successfully re-ordered trigger ${t} action.`),e=>this._service.notifyError(`Error re-ordered trigger ${t} action. Error: ${e.message||e}`))}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(d.a),p.Rb(h.b))},t.\u0275cmp=p.Lb({type:t,selectors:[["trigger-about"]],inputs:{item:"item"},features:[p.Ab,p.Bb()],decls:5,vars:1,consts:[["class","container",4,"ngIf"],["no_conditions",""],["no_actions",""],[1,"container"],[1,"settings"],[1,"field"],["for","dependency","matTooltip","System to use for available status variables and function calls"],[3,"service","ngModel","ngModelChange"],[1,"action"],["mat-icon-button","",3,"disabled","tapped"],[3,"icon"],[1,"text"],["class","list",4,"ngIf","ngIfElse"],[1,"list"],[1,"header"],[1,"group","comparisons"],["class","item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"group","time-dependents"],[1,"item"],[1,"handle"],[1,"details"],["mat-icon-button","",3,"tapped"],["cdkDropList","",1,"group","functions",3,"cdkDropListDropped"],["class","item","cdkDrag","",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDropList","",1,"group","emails",3,"cdkDropListDropped"],["cdkDrag","",1,"item"],["cdkDragHandle","",1,"handle"],["class","placeholder",4,"cdkDragPlaceholder"],[1,"placeholder"],[3,"matTooltip"],[1,"info-block"]],template:function(t,e){1&t&&(p.Hc(0,L,23,12,"div",0),p.Hc(1,B,3,0,"ng-template",null,1,p.Ic),p.Hc(3,K,3,0,"ng-template",null,2,p.Ic)),2&t&&p.pc("ngIf",e.item)},directives:[n.m,W.a,X.a,o.k,o.n,D.b,u.b,S.a,n.l,s.d,s.a,s.b,s.c],pipes:[n.g,j.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.no-item[_ngcontent-%COMP%]{font-size:.75em}.group[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.group[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.item[_ngcontent-%COMP%]{border-radius:4px;margin:2px 0}.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:2.5rem;width:2.5rem}.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{cursor:-webkit-grab;cursor:grab}.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;min-width:50%;white-space:nowrap;font-size:.6em;padding:0 .5rem;overflow:hidden;text-overflow:ellipsis}.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Fira Code,monospace}.item[_ngcontent-%COMP%]:nth-child(2n){background-color:#f0f0f0}.item[_ngcontent-%COMP%]:hover{background-color:#ccc}button[_ngcontent-%COMP%]{margin:.25em}header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .5em 0 0;border:1px solid rgba(0,0,0,.85)}header[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{border-color:#ccc}.header[_ngcontent-%COMP%]{padding:1em;font-size:1em;font-weight:500}.cdk-drag-preview[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}.placeholder[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);border:4px dashed rgba(0,0,0,.6);height:3em;width:100%;border-radius:4px}"]}),t})();var V=i("Cvi9"),G=i("oIn+");const Q=function(t){return["/systems",t]};function U(t,e){if(1&t&&(p.Xb(0,"a",12),p.Jc(1),p.Xb(2,"span",13),p.Jc(3),p.Wb(),p.Jc(4,") "),p.Wb()),2&t){const t=p.jc().$implicit;p.pc("routerLink",p.rc(3,Q,t.system_id)),p.Db(1),p.Lc(" ",t.system_name," ("),p.Db(2),p.Kc(t.system_id)}}const Z=function(){return{class:"backoffice-trash"}};function tt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"tr"),p.Xb(1,"td",5),p.Sb(2,"div",8),p.Wb(),p.Xb(3,"td",6),p.Hc(4,U,5,5,"a",9),p.Wb(),p.Xb(5,"td"),p.Jc(6),p.kc(7,"dateFrom"),p.Wb(),p.Xb(8,"td",5),p.Xb(9,"button",10),p.fc("tapped",(function(){p.zc(t);const i=e.$implicit;return p.jc(3).delete(i)})),p.Sb(10,"app-icon",11),p.Wb(),p.Wb(),p.Wb()}if(2&t){const t=e.$implicit;p.Db(2),p.Hb("active",t.enabled),p.Db(2),p.pc("ngIf",t.system_id),p.Db(2),p.Kc(p.lc(7,5,1e3*(t.created_at-0))),p.Db(4),p.pc("icon",p.qc(7,Z))}}function et(t,e){if(1&t&&(p.Xb(0,"table"),p.Xb(1,"thead"),p.Sb(2,"td",5),p.Xb(3,"td",6),p.Jc(4,"Name"),p.Wb(),p.Xb(5,"td",6),p.Jc(6,"Added"),p.Wb(),p.Sb(7,"td",5),p.Wb(),p.Xb(8,"tbody"),p.Hc(9,tt,11,8,"tr",7),p.Wb(),p.Wb()),2&t){const t=p.jc(2);p.Db(9),p.pc("ngForOf",t.system_trigger_list)}}function it(t,e){if(1&t&&(p.Xb(0,"div",2),p.Xb(1,"div",3),p.Hc(2,et,10,1,"table",4),p.Wb(),p.Wb()),2&t){const t=p.jc(),e=p.wc(2);p.Db(2),p.pc("ngIf",t.system_trigger_list.length>0)("ngIfElse",e)}}function nt(t,e){1&t&&(p.Xb(0,"div",14),p.Xb(1,"div",15),p.Jc(2,"No systems with trigger"),p.Wb(),p.Wb())}const ot=[{path:"",component:x,children:[]},{path:":id",component:x,children:[{path:"about",component:Y},{path:"systems",component:(()=>{class t extends k.a{constructor(t,e,i){super(),this._service=t,this._dialog=e,this._composer=i,this.system_trigger_list=[],this.connected={}}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",t=>{this.item=t,this.ngOnChanges({item:new p.K(null,this.item,!1)})}))}ngOnChanges(t){t.item&&this.item&&this.loadSystemTriggers()}loadSystemTriggers(t=0){this._service.SystemTriggers.query({trigger_id:this.item.id,offset:t}).then(t=>this.system_trigger_list=t||[],()=>null)}delete(t){if(t){const e=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger",content:`<p>Are you sure you want remove this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove from the system "${t.system_name||""}"</p>`,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(i=>Object(r.b)(this,void 0,void 0,(function*(){"done"===i.reason&&(e.componentInstance.loading="Removing trigger...",yield this.deleteTrigger(t).catch(t=>{throw e.componentInstance.loading=null,this._service.notifyError(`Error removing trigger. Error: ${t.message||t}`),t}),this.loadSystemTriggers(),e.close(),this.unsub("delete_confirm"))}))))}}deleteTrigger(t){return new Promise((e,i)=>{this._composer.http.delete(`${this._composer.auth.api_endpoint}/systems/${t.system_id}/triggers/${t.id}`).subscribe(t=>null,t=>i(t),()=>e())})}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(d.a),p.Rb(h.b),p.Rb(V.c))},t.\u0275cmp=p.Lb({type:t,selectors:[["trigger-systems"]],inputs:{item:"item"},features:[p.Ab,p.Bb()],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["empty_state",""],[1,"container"],[1,"settings"],[4,"ngIf","ngIfElse"],[1,"small"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"state"],[3,"routerLink",4,"ngIf"],["mat-icon-button","",3,"tapped"],[3,"icon"],[3,"routerLink"],[1,"id"],[1,"info-block"],[1,"text"]],template:function(t,e){1&t&&(p.Hc(0,it,3,2,"div",0),p.Hc(1,nt,3,0,"ng-template",null,1,p.Ic)),2&t&&p.pc("ngIf",e.item)},directives:[n.m,n.l,D.b,u.b,S.a,c.f],pipes:[G.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}tbody[_ngcontent-%COMP%]{font-size:.9em}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap}div[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{width:2em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]{width:4em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#000;border-radius:.8em;-webkit-transition:margin .25s,height .25s,width .25s,background-color .3s;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}"]}),t})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}];var ct=i("PCNd");i.d(e,"AppTriggersModule",(function(){return st}));let st=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(e){return new(e||t)},imports:[[n.c,o.g,c.g.forChild(ot),ct.a,s.e]]}),t})()}}]);