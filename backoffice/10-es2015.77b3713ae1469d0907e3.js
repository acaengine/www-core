(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ERYw:function(n,e,t){"use strict";t.r(e);var o,i=t("ofXK"),a=t("3Pt+"),c=t("tyNb"),r=t("5f3J"),d=t("Wgwc"),s=t("fXoL"),l=t("Cvi9"),g=t("OaWH"),p=t("q/DJ");o=$localize`:@@metricsHeader␟447ffd4cbfd3d8c3ca8dd216c0a82ecadc24a7de␟4196232656388343089:Metrics`;let m=(()=>{class n extends r.a{constructor(n,e){super(),this._composer=n,this._service=e}get metrics_url(){const n=this._composer.auth.authority;return n?n.metrics:""}ngOnInit(){this.updateTime(),this.interval("time",()=>this.updateTime(),1e3),this._service.title="Metrics"}updateTime(){const n=d();this.time=n.format("hh:mm A"),this.date=n.format("ddd, MMM D"),this.hour_angle=(n.hour()%12+n.minute()/60)/12*360,this.minute_angle=(n.minute()+n.second()/60)/60*360,this.second_angle=n.second()/60*360}}return n.\u0275fac=function(e){return new(e||n)(s.Rb(l.c),s.Rb(g.a))},n.\u0275cmp=s.Lb({type:n,selectors:[["app-metrics"]],features:[s.Ab],decls:18,vars:14,consts:[[1,"container"],[1,"header"],[1,"heading"],[1,"time-display"],[1,"clock"],[1,"hand","hour"],[1,"hand","minute"],[1,"hand","second"],[1,"center"],[1,"display"],[1,"time"],[1,"day"],[1,"body"],[3,"src"]],template:function(n,e){1&n&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.bc(3,o),s.Wb(),s.Xb(4,"div",3),s.Xb(5,"div",4),s.Sb(6,"div",5),s.Sb(7,"div",6),s.Sb(8,"div",7),s.Sb(9,"div",8),s.Wb(),s.Xb(10,"div",9),s.Xb(11,"div",10),s.Rc(12),s.Wb(),s.Xb(13,"div",11),s.Rc(14),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(15,"div",12),s.Sb(16,"iframe",13),s.rc(17,"safe"),s.Wb(),s.Wb()),2&n&&(s.Hb("fullscreen",e.fullscreen),s.Db(6),s.Oc("transform","translateX(-50%) rotate("+e.hour_angle+"deg)"),s.Db(1),s.Oc("transform","translateX(-50%) rotate("+e.minute_angle+"deg)"),s.Db(1),s.Oc("transform","translateX(-50%) rotate("+e.second_angle+"deg)"),s.Db(4),s.Sc(e.time),s.Db(2),s.Sc(e.date),s.Db(2),s.wc("src",s.tc(17,11,e.metrics_url,"resource"),s.Jc))},pipes:[p.b],styles:[".container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;flex-direction:column}.container.fullscreen[_ngcontent-%COMP%]{position:fixed;z-index:999;top:-3.5em}@media only screen and (orientation:portrait) and (max-width:450px){.container.fullscreen[_ngcontent-%COMP%]{top:-3em}}@media only screen and (orientation:landscape) and (max-width:800px){.container.fullscreen[_ngcontent-%COMP%]{top:-3em}}.container.fullscreen[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%], .container.fullscreen[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]{display:flex;align-items:center;min-height:3.5em;height:3.5em;background-color:#00796b;width:100%;color:#fff;box-shadow:0 2px 6px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 4px 2px -2px rgba(0,0,0,.12);z-index:100}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:.5em}.heading[_ngcontent-%COMP%]{font-size:1.5em;font-weight:400;padding:0 .5em;flex:1;width:50%}.body[_ngcontent-%COMP%]{position:relative;width:100%;display:flex;align-items:center;background-color:#455a64;flex:1;overflow:hidden;z-index:99}@media only screen and (orientation:portrait) and (max-width:800px){.body[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:1048px){.body[_ngcontent-%COMP%]{flex-direction:column}}.no-item[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.54)}.time-display[_ngcontent-%COMP%]{display:flex;margin:0 .5em}.time-display[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]{margin-left:.5em}.device[_ngcontent-%COMP%], .system[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5em}.device[_ngcontent-%COMP%]{font-size:.8em;background-color:rgba(244,67,54,.87);border-bottom:1px solid #455a64}.device[_ngcontent-%COMP%]:last-child{border:none}.device.connected[_ngcontent-%COMP%]{background-color:rgba(76,175,80,.87)}.device[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:0 .25em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.device[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .module-class[_ngcontent-%COMP%]{flex:2}.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%]{flex:3}.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%]{font-family:Fira Code,monospace}.device[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{flex:4}.count[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;top:0;left:0;right:26.666666666em;height:2em;font-size:.75em;padding:0 .5em;background-color:#2c393f;color:#fff;box-shadow:0 2px 6px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 4px 2px -2px rgba(0,0,0,.12)}@media only screen and (orientation:portrait) and (max-width:800px){.count[_ngcontent-%COMP%]{right:0}}@media only screen and (orientation:landscape) and (max-width:1048px){.count[_ngcontent-%COMP%]{right:0}}.issues[_ngcontent-%COMP%]{overflow:auto;padding:2.5em 1em 1em;color:#fff;flex:1;height:100%;width:16em}@media only screen and (orientation:portrait) and (max-width:800px){.issues[_ngcontent-%COMP%]{width:100%}}@media only screen and (orientation:landscape) and (max-width:1048px){.issues[_ngcontent-%COMP%]{width:100%}}.graphs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;height:100%;width:20em;border-left:1px solid rgba(0,0,0,.54)}.graphs[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;width:18em;padding:.5em;display:flex;align-items:center;justify-content:center}@media only screen and (orientation:portrait) and (max-width:450px){.graphs[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:100vw}}@media only screen and (orientation:landscape) and (max-width:800px){.graphs[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:100vw}}@media only screen and (orientation:portrait) and (max-width:800px){.graphs[_ngcontent-%COMP%]{width:100%;height:16em;border:none;border-top:1px solid rgba(0,0,0,.54)}}@media only screen and (orientation:landscape) and (max-width:1048px){.graphs[_ngcontent-%COMP%]{width:100%;height:16em;border:none;border-top:1px solid rgba(0,0,0,.54)}}@media only screen and (orientation:portrait) and (max-width:450px){.graphs[_ngcontent-%COMP%]{overflow-y:scroll;flex-wrap:nowrap}}@media only screen and (orientation:landscape) and (max-width:800px){.graphs[_ngcontent-%COMP%]{overflow-y:scroll;flex-wrap:nowrap}}.item[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.2);margin-bottom:1em}.item[_ngcontent-%COMP%]:hover{box-shadow:0 2px 6px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 4px 2px -2px rgba(0,0,0,.12)}.hover[_ngcontent-%COMP%]:hover{text-decoration:underline}.options[_ngcontent-%COMP%], .options[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:flex;align-items:center}.options[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{justify-content:center;height:1.5em;width:1.5em;font-size:1.2em;cursor:pointer;margin-left:.5em}.options[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%]{padding:0;color:rgba(0,0,0,.87)}.action[_ngcontent-%COMP%]{border:1px solid #fff;border-radius:100%;height:1.2em;width:1.2em;display:flex;align-items:center;justify-content:center}.action[_ngcontent-%COMP%]:hover{background-color:#fff;color:rgba(0,0,0,.87)}.clock[_ngcontent-%COMP%]{position:relative;height:2.5em;width:2.5em;min-width:2.5em;border:2px solid #fff;border-radius:100%}.clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%]{position:absolute;transform-origin:50% 100%;background-color:#fff;left:50%;bottom:50%}.clock[_ngcontent-%COMP%]   .hand.hour[_ngcontent-%COMP%]{height:.8em;width:4px;border-radius:2px}.clock[_ngcontent-%COMP%]   .hand.minute[_ngcontent-%COMP%]{height:1em;width:2px;border-radius:1px}.clock[_ngcontent-%COMP%]   .hand.second[_ngcontent-%COMP%]{height:1em;width:1px}.clock[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{height:6px;width:6px;border-radius:100%;background-color:#fff}.mat-menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:0 1em}.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{font-size:1.2em}.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex:1;min-width:50%;margin-left:.5em}"]}),n})();const h=[{path:"",component:m,children:[]},{path:"dashboard",component:m,children:[]},{path:"dashboard/:period",component:m,children:[]},{path:":period",component:m,children:[]},{path:"**",redirectTo:""}];var f=t("PCNd");t.d(e,"AppMetricsModule",(function(){return b}));let b=(()=>{class n{}return n.\u0275mod=s.Pb({type:n}),n.\u0275inj=s.Ob({factory:function(e){return new(e||n)},imports:[[i.c,a.g,c.g.forChild(h),f.a]]}),n})()}}]);