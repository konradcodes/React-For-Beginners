(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a(27),l=a(29),i=a(28),o=a(3),u=a(4),m=a(6),h=a(5),f=a(7);function p(e){return e[Math.floor(Math.random()*e.length)]}function d(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(p(e),"-").concat(p(e),"-").concat(p(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:d()}),r.a.createElement("button",{type:"submit"},"Visit store ->"))}}]),t}(r.a.Component),b=a(13),y=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"order"},"Order")}}]),t}(r.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"Add Fish"))}}]),t}(r.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory!!"),r.a.createElement(g,{addFish:this.props.addFish}))}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(b.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(y,{tagline:"Fresh Seafood Market"})),r.a.createElement(E,null),r.a.createElement(O,{addFish:this.addFish}))}}]),t}(r.a.Component),R=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found!?!?"))},w=function(){return r.a.createElement(s.a,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:v}),r.a.createElement(i.a,{path:"/store/:storeId",component:j}),r.a.createElement(i.a,{component:R})))};a(23);Object(c.render)(r.a.createElement(w,null),document.querySelector("#main"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bdc9d447.chunk.js.map