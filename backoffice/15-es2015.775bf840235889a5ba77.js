(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5jID":function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),c=n("THE0"),a=n("OaWH"),r=n("C/ya"),d=n("D/9M"),l=n("g+Po"),b=n("fXoL"),h=n("0IaG"),m=n("BAfr"),u=n("m6yr"),g=n("47y3");const p=function(){return{class:"backoffice-info-with-circle"}},f=function(t){return{id:"about",name:"About",icon:t}},w=function(){return{class:"backoffice-list"}},v=function(t){return{id:"history",name:"History",icon:t}},_=function(t,e){return[t,e]};let y=(()=>{class t extends r.a{constructor(t,e,n,i){super(t,e,n),this._service=t,this._route=e,this._router=n,this._dialog=i,this.service=this._service.Users}new(){this._dialog.open(d.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new c.o(this._service.Users,{}),service:this._service.Users}}).componentInstance.event.subscribe(t=>{"done"===t.reason&&this._router.navigate(["/users",t.metadata.item.id])})}edit(){this.item&&this._dialog.open(d.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Users}})}delete(){if(this.item){const t=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Delete user",content:"<p>Are you sure you want delete this user?</p><p>The user will be removed from the system within 24 hours</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",t.componentInstance.event.subscribe(e=>{"done"===e.reason&&(t.componentInstance.loading="Deleting user...",this.item.delete().then(()=>{this._service.notifySuccess(`Successfully deleted user "${this.item.name}".`),this._router.navigate(["/users"]),t.close(),this.unsub("delete_confirm")},e=>{t.componentInstance.loading=null,this._service.notifyError(`Error deleting user. Error: ${e}`)}))}))}}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(a.a),b.Rb(o.a),b.Rb(o.c),b.Rb(h.b))},t.\u0275cmp=b.Lb({type:t,selectors:[["app-users"]],features:[b.Ab],decls:5,vars:16,consts:[[1,"container"],[1,"sidebar"],["heading","Users",3,"module","close","event"],[3,"touchrelease"],["name","user","route","users",3,"item","loading","tabs","event"]],template:function(t,e){1&t&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"sidebar",2),b.fc("event",(function(t){return e.sidebarEvent(t)})),b.Wb(),b.Wb(),b.Xb(3,"main",3),b.fc("touchrelease",(function(){return e.show_sidebar=!1})),b.Xb(4,"item-display",4),b.fc("event",(function(t){return e.itemEvent(t)})),b.Wb(),b.Wb(),b.Wb()),2&t&&(b.Hb("show",e.show_sidebar),b.Db(2),b.pc("module",e.module)("close",e.show_sidebar),b.Db(2),b.pc("item",e.item)("loading",e.loading_item)("tabs",b.sc(13,_,b.rc(8,f,b.qc(7,p)),b.rc(11,v,b.qc(10,w)))))},directives:[m.a,u.b,g.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;-webkit-transition:height .3s;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;-webkit-box-flex:1;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{-webkit-transition:height .3s;transition:height .3s;width:100%}}"]}),t})();var x=n("5f3J");function O(t,e){if(1&t&&(b.Xb(0,"div",1),b.Xb(1,"div",2),b.Xb(2,"header"),b.Jc(3,"Permissions"),b.Wb(),b.Xb(4,"section"),b.Xb(5,"table"),b.Xb(6,"tr"),b.Xb(7,"td",3),b.Jc(8,"Tech Support"),b.Wb(),b.Xb(9,"td",4),b.Jc(10),b.Wb(),b.Wb(),b.Xb(11,"tr"),b.Xb(12,"td",3),b.Jc(13,"System Admin"),b.Wb(),b.Xb(14,"td",4),b.Jc(15),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb()),2&t){const t=b.jc();b.Db(10),b.Kc(!0===t.item.support),b.Db(5),b.Kc(!0===t.item.sys_admin)}}function C(t,e){if(1&t&&(b.Xb(0,"tr"),b.Xb(1,"td",5),b.Jc(2),b.Wb(),b.Xb(3,"td",6),b.Jc(4),b.Wb(),b.Xb(5,"td",7),b.Xb(6,"div"),b.Jc(7),b.Wb(),b.Xb(8,"div"),b.Jc(9,"View"),b.Wb(),b.Wb(),b.Wb()),2&t){const t=e.$implicit;b.Db(2),b.Kc(null==t.display?null:t.display.started),b.Db(2),b.Kc(null==t.display?null:t.display.ended),b.Db(3),b.Kc(t.systems.length)}}function W(t,e){if(1&t&&(b.Xb(0,"div",4),b.Xb(1,"table"),b.Xb(2,"thead"),b.Xb(3,"td",5),b.Jc(4,"Session Start"),b.Wb(),b.Xb(5,"td",6),b.Jc(6,"Ended"),b.Wb(),b.Xb(7,"td",7),b.Jc(8,"Systems Accessed"),b.Wb(),b.Wb(),b.Xb(9,"tbody"),b.Hc(10,C,10,3,"tr",8),b.Wb(),b.Wb(),b.Wb()),2&t){const t=b.jc(2);b.Db(10),b.pc("ngForOf",t.model.logs)}}function X(t,e){1&t&&(b.Xb(0,"div",9),b.Xb(1,"div",10),b.Jc(2,"No logs found"),b.Wb(),b.Wb())}function P(t,e){if(1&t&&(b.Xb(0,"div",1),b.Hc(1,W,11,1,"div",2),b.Hc(2,X,3,0,"div",3),b.Wb()),2&t){const t=b.jc();b.Db(1),b.pc("ngIf",t.model.logs&&t.model.logs.length>0),b.Db(1),b.pc("ngIf",!t.model.logs||t.model.logs.length<=0)}}const M=[{path:"",component:y,children:[]},{path:":id",component:y,children:[{path:"about",component:(()=>{class t extends x.a{constructor(t){super(),this._service=t}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",t=>{this.item=t}))}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(a.a))},t.\u0275cmp=b.Lb({type:t,selectors:[["user-about"]],inputs:{item:"item"},features:[b.Ab],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[1,"field"],[1,"flex"]],template:function(t,e){1&t&&b.Hc(0,O,16,2,"div",0),2&t&&b.pc("ngIf",e.item)},directives:[i.m],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.table-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{width:12em}"]}),t})()},{path:"history",component:(()=>{class t extends x.a{constructor(t){super(),this._service=t,this.model={}}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",t=>{this.item=t,this.ngOnChanges({item:new b.K(null,this.item,!1)})}))}ngOnChanges(t){t.item&&this.item&&this.loadUserLogs()}loadUserLogs(t=0){this._service.Logs.query({offset:t,user_id:this.item.id}).then(e=>{t||(this.model.list=[]);for(const t of e||[]){let e=!1;for(const n of this.model.list)if(n.id===t.id){e=!0;break}e||this.model.list.push(t)}},()=>null)}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(a.a))},t.\u0275cmp=b.Lb({type:t,selectors:[["user-history"]],inputs:{item:"item"},features:[b.Ab,b.Bb()],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],["class","list",4,"ngIf"],["class","info-block",4,"ngIf"],[1,"list"],[1,"start"],[1,"end"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"info-block"],[1,"text"]],template:function(t,e){1&t&&b.Hc(0,P,3,2,"div",0),2&t&&b.pc("ngIf",e.item)},directives:[i.m,i.l],styles:[".container[_ngcontent-%COMP%]{padding:1em}.table-row[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]{width:10em}"]}),t})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:""}];var k=n("PCNd");n.d(e,"AppUsersModule",(function(){return I}));let I=(()=>{class t{}return t.\u0275mod=b.Pb({type:t}),t.\u0275inj=b.Ob({factory:function(e){return new(e||t)},imports:[[i.c,s.g,o.g.forChild(M),k.a]]}),t})()}}]);