(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/shopping.90ca650c.jpg"},31:function(e,t,n){e.exports=n(65)},36:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(7),l=n.n(s),o=(n(36),n(8)),c=n(9),r=n(11),m=n(10),u=n(12),d=(n(20),n(30)),h=n(4),b=n(5),p=n(6),g=function(e){var t={color:"#363535",textDecoration:"line-through"};return i.a.createElement(p.e,{className:"mx-auto mt-5"},e.items.map(function(n){return i.a.createElement(p.f,{className:"border-secondary",style:n.selected?t:null,key:n.itemId},n.itemName,n.itemQuantity&&n.itemQuantity.trim().length>0?" - "+n.itemQuantity:null,i.a.createElement("span",{className:"float-right"},i.a.createElement("button",{className:n.selected?"btn btn-sm btn-outline-secondary align-top mx-2":"btn btn-sm btn-outline-light align-top mx-2",onClick:function(){return e.click(n.itemId)}},i.a.createElement(h.a,{icon:b.a}))))}))},f=n(27),y=n.n(f).a.create({baseURL:"https://react-shopping-list-a5bb8.firebaseio.com/"}),w=n(28),E=n.n(w),I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).nameChangeHandler=function(e){n.setState({newItemName:e.target.value})},n.quantityChangeHandler=function(e){n.setState({newItemQuantity:e.target.value})},n.addItemHandler=function(e){e.preventDefault(),n.state.newItemName&&n.state.newItemName.trim().length>0&&n.setState(function(e){return{items:Object(d.a)(e.items).concat([{itemName:e.newItemName,itemId:E()(),selected:!1,itemQuantity:e.newItemQuantity}]),newItemName:"",newItemQuantity:""}})},n.toggleButtonHandler=function(e){var t=n.state.items.find(function(t){return t.itemId===e});t.selected=!t.selected,n.setState(function(e){return{items:e.items}})},n.deleteItemHandler=function(){var e=n.state.items.filter(function(e){return!e.selected});n.setState({items:e})},n.showItemsHandler=function(){n.setState({showAllItems:!n.state.showAllItems})},n.onDismissHandler=function(){n.setState({showAlert:!1})},n.saveListHandler=function(){y.put("/ShoppingList.json",n.state.items).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),n.setState({showAlert:!0})},n.state={newItemName:"",newItemQuantity:"",items:[],showAllItems:!0,showAlert:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.get("/ShoppingList.json").then(function(t){null!=t.data&&e.setState({items:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.items.filter(function(e){return!e.selected}),t=i.a.createElement("div",null,i.a.createElement(g,{items:this.state.showAllItems?this.state.items:e,click:this.toggleButtonHandler})),n=i.a.createElement(h.a,{icon:b.b,title:"Show all items"}),a=i.a.createElement(h.a,{icon:b.c,title:"Hide checked items"});return i.a.createElement("div",{className:"container ShoppingList mx-auto"},this.state.showAlert?i.a.createElement(p.a,{className:"mx-auto text-center",color:"success",isOpen:this.state.showAlert,toggle:this.onDismissHandler},"Your shopping list has been saved"):null,i.a.createElement(p.b,{inline:!0,onSubmit:this.addItemHandler},i.a.createElement(p.c,{className:"mx-auto"},i.a.createElement(p.d,{className:"mr-2 my-2 border-secondary",type:"text",value:this.state.newItemName,onChange:this.nameChangeHandler,placeholder:"Enter item",required:!0}),i.a.createElement(p.d,{className:"my-2 border-secondary",type:"text",value:this.state.newItemQuantity,onChange:this.quantityChangeHandler,placeholder:"Enter quantity"})),i.a.createElement(p.c,{className:"mx-auto"},i.a.createElement("button",{className:"btn btn-md btn-outline-secondary align-top my-2",disabled:!this.state.newItemName,type:"submit",title:"Add item"},i.a.createElement(h.a,{icon:b.e})),i.a.createElement("button",{className:"btn btn-md btn-outline-secondary align-top ml-2 my-2",disabled:!this.state.items.some(function(e){return e.selected}),type:"button",onClick:this.deleteItemHandler,title:"Delete items"},i.a.createElement(h.a,{icon:b.d})),i.a.createElement("button",{className:"btn btn-md btn-outline-secondary align-top ml-2 my-2",type:"button",onClick:this.showItemsHandler},this.state.showAllItems?a:n),i.a.createElement("button",{className:"btn btn-md btn-outline-secondary align-top ml-2 my-2",type:"button",onClick:this.saveListHandler,title:"Save list"},i.a.createElement(h.a,{icon:b.f})))),t)}}]),t}(a.Component),v=n(29),N={backgroundImage:"url(".concat(n.n(v).a,")"),backgroundSize:"cover",overflow:"hidden"},k=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:N},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Shopping List ",i.a.createElement(h.a,{icon:b.g})," ")),i.a.createElement(I,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(63);l.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.d23c7c20.chunk.js.map