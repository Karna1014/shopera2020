(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{17:function(e,a){},21:function(e,a){},22:function(e,a){},23:function(e,a){},24:function(e,a){},27:function(e,a,t){e.exports=t(40)},32:function(e,a,t){},38:function(e,a){},39:function(e,a){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=(t(32),{products:[{_id:"1",name:"High Heel Shoe1",Category:"Shoes",image:"/images/highheel1.png",price:600,brand:"Shopera",rating:4.5,numReviews:15},{_id:"2",name:"High Heel Shoe2",Category:"Shoes",image:"/images/highheel2.png",price:500,brand:"Shopera",rating:4.2,numReviews:10},{_id:"3",name:"High Heel Shoe3",Category:"Shoes",image:"/images/highheel3.png",price:400,brand:"Shopera",rating:4,numReviews:17},{_id:"4",name:"Boot 1",Category:"Shoes",image:"/images/boot1.png",price:700,brand:"Shopera",rating:4.5,numReviews:15},{_id:"5",name:"Boot 2",Category:"Shoes",image:"/images/boot2.png",price:500,brand:"Shopera",rating:4.2,numReviews:10},{_id:"6",name:"Boot 3",Category:"Shoes",image:"/images/boot3.png",price:800,brand:"Shopera",rating:4,numReviews:17},{_id:"7",name:"Lip Stick1",Category:"Beauty",image:"/images/lip1.png",price:50,brand:"Shopera",rating:4.5,numReviews:15},{_id:"8",name:"Lip Stick2",Category:"Beauty",image:"/images/lip2.png",price:90,brand:"Shopera",rating:4.2,numReviews:10},{_id:"9",name:"Lip Stick3",Category:"Beauty",image:"/images/lip3.png",price:100,brand:"Shopera",rating:4,numReviews:17},{_id:"10",name:"Necklace 1",Category:"Jewelry",image:"/images/jewelry1.png",price:1050,brand:"Shopera",rating:4.5,numReviews:15},{_id:"11",name:"Necklace 2",Category:"Jewelry",image:"/images/jewelry2.png",price:680,brand:"Shopera",rating:4.2,numReviews:10},{_id:"12",name:"Necklace 3",Category:"Jewelry",image:"/images/jewelry3.png",price:2700,brand:"Shopera",rating:4,numReviews:17}],cart:[{_id:"1",qty:"1",image:"/images/jewelry3.png",name:"Necklace 3",price:2700},{_id:"2",qty:"2",image:"/images/lip2.png",name:"Lip Stick2",price:90},{_id:"3",image:"/images/highheel3.png",name:"High Heel Shoe3",price:400}],user:[{_id:"1",firstName:"Lisa",lastName:"Smith"}]}),m=t(3),o=t(1);var s=function(e){return r.a.createElement("ul",{className:"products"},i.products.map((function(e){return r.a.createElement("li",null,r.a.createElement("div",{className:"product"},r.a.createElement(m.b,{to:"/product/"+e._id},r.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),r.a.createElement("div",{className:"product-name"},r.a.createElement(m.b,{to:"/product/"+e._id},e.name)),r.a.createElement("div",{className:"product-brand"},e.brand),r.a.createElement("div",{className:"product-price"},"$",e.price),r.a.createElement("div",{className:"product-rating"},e.rating," Stars (",e.numReiews," Reviews)")))})))};var p=function(e){console.log(e.match.params.id);var a=i.products.find((function(a){return a._id===e.match.params.id}));return r.a.createElement("div",null,r.a.createElement("div",{className:"back-to-result"},r.a.createElement(m.b,{to:"/"},"Back to result")),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"details-image"},r.a.createElement("img",{src:a.image,alt:"product"})),r.a.createElement("div",{className:"details-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,a.name)),r.a.createElement("li",null,a.rating," Stars (",a.numReviews," Reviews)"),r.a.createElement("li",null,"Price: ",r.a.createElement("b",null,"$",a.price)),r.a.createElement("li",null,"Description:",r.a.createElement("div",null,a.description)))),r.a.createElement("div",{className:"details-action"},r.a.createElement("ul",null,r.a.createElement("li",null,"Price: ",a.price),r.a.createElement("li",null,"Status: ",a.status),r.a.createElement("li",null,"Qty: ",r.a.createElement("select",null,r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement("li",null,r.a.createElement("button",{className:"button primary",id:"atc"},"Add to Cart"))))))};function u(){return r.a.createElement("div",null)}var d=t(17),g=t.n(d),E=t(18),h=t(19),v=t(20),b=t(9),y=t(26),S=t(25),N=function(e){Object(y.a)(t,e);var a=Object(S.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,e)).image=n.props.image,n.name=n.props.name,n.price=n.props.price,n.removeCartItem=n.removeCartItem.bind(Object(b.a)(n)),n}return Object(v.a)(t,[{key:"removeCartItem",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"cart-item-image"},r.a.createElement("img",{alt:"no pic",src:this.image})),r.a.createElement("li",{className:"cart-item-name"},this.name),r.a.createElement("li",{className:"cart-item-price"},this.price))))}}]),t}(r.a.Component),f=function(e){Object(E.a)(e);var a=i.cart;return r.a.createElement("div",null,r.a.createElement("h2",null,"Shopping Cart"),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-body"},a.length>0&&r.a.createElement("div",{className:"cart__body"},a.map((function(e){return r.a.createElement(N,Object.assign({key:e.id},e))}))),0===a.length&&r.a.createElement("div",{className:"alert alert-info"},"Cart is empty"),r.a.createElement("div",{className:"cart__total"},"Total: 3000 ")))))},w=t(21),C=t.n(w),_=t(22),k=t.n(_);function R(){return r.a.createElement("div",null,"Beauty here")}function B(){return r.a.createElement("div",null,"Jewelry page")}function j(){return r.a.createElement("div",null,"Shoes here")}function J(){return r.a.createElement("div",null,"Sign in here")}var H=t(23),O=t.n(H),L=t(24),I=t.n(L);function q(){return r.a.createElement("div",null,"Shipping Address")}t(38),t(39);var A=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"brand"},r.a.createElement("button",{onClick:function(){document.querySelector(".sidebar").classList.add("open")}},"\u2630"),r.a.createElement(m.b,{to:"/"},"Shopera")),r.a.createElement("div",{className:"header-links"},r.a.createElement(m.b,{to:"/cart"},"Cart"),r.a.createElement(m.b,{to:"/signin"},"Sign In"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{href:"#"},"Admin"),r.a.createElement("ul",{className:"dropdown-content"},r.a.createElement("li",null,r.a.createElement(m.b,{to:"/orders"},"Orders"),r.a.createElement(m.b,{to:"/products"},"Products")))))),r.a.createElement("aside",{className:"sidebar"},r.a.createElement("h3",null,"Shopping Categories"),r.a.createElement("button",{className:"sidebar-close-button",onClick:function(){document.querySelector(".sidebar").classList.remove("open")}},"x"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/category/Shoes"},"Shoes")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/category/Beauty"},"Beauty")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/category/Jewelry"},"Jewelry")))),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement(o.a,{path:"/product/:id",component:p}),r.a.createElement(o.a,{path:"/productcrud",component:u}),r.a.createElement(o.a,{path:"/category/Shoes",component:j}),r.a.createElement(o.a,{path:"/category/Beauty",component:R}),r.a.createElement(o.a,{path:"/category/Jewelry",component:B}),r.a.createElement(o.a,{path:"/cart",component:f}),r.a.createElement(o.a,{path:"/shipping",component:q}),r.a.createElement(o.a,{path:"/order/:id",component:g.a}),r.a.createElement(o.a,{path:"/payment",component:C.a}),r.a.createElement(o.a,{path:"/placeorder",component:k.a}),r.a.createElement(o.a,{path:"/profile",component:I.a}),r.a.createElement(o.a,{path:"/register",component:O.a}),r.a.createElement(o.a,{path:"/signin",component:J}),r.a.createElement(o.a,{path:"/category/:id",component:s}),r.a.createElement(o.a,{path:"/",exact:!0,component:s}))),r.a.createElement("footer",{className:"footer"},"CodingBootCamp UNC Project Team 3 All Rights Reserved!")))};c.a.render(r.a.createElement(m.a,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.37241839.chunk.js.map