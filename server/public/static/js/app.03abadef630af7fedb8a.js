webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("hQE7")},null,null).exports,i=n("/ocq"),o=n("Xxa5"),c=n.n(o),l=n("exGp"),u=n.n(l),p=n("mtWM"),d=n.n(p),h={name:"HelloWorld",data:function(){return{msg:"Testbed"}},methods:{buttonClick:function(){var t=this;return u()(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.create({baseURL:""}).get("api/test");case 2:n=e.sent,t.msg=n.data.hello;case 4:case"end":return e.stop()}},e,t)}))()}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello container"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:this.buttonClick}},[this._v("Click Me")])])},staticRenderFns:[]},v=n("VU/8")(h,m,!1,null,null,null).exports;r.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"HelloWorld",component:v}]}),w=n("7t+N"),_=n.n(w);r.a.config.productionTip=!1,window.$=_.a,window.JQuery=_.a,new r.a({el:"#app",router:f,components:{App:s},template:"<App/>"})},hQE7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.03abadef630af7fedb8a.js.map