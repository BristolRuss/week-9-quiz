(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),i=(n(28),n(29),n(14)),o=n(11),u=n(2),s=n(3),m=n(5),h=n(4),p=n(6),d=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,n=e.y,a=t*n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Question 1"),r.a.createElement("p",null,t," multiplied by ",n," is ",a))}}]),t}(a.Component),b=n(9),E=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={counter:0},e.handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){var e=this.state.counter;this.setState({counter:e+1})}},{key:"render",value:function(){var e=this.state.counter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Question 2"),r.a.createElement("p",{onClick:this.handleClick},e%2===0?"Even":"Odd"))}}]),t}(a.Component),v=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={counter:0},e.handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){var e=this.state.counter,t=this.props.step;this.setState({counter:e+ +t})}},{key:"render",value:function(){var e=this.state.counter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Question 3"),r.a.createElement("p",{onClick:this.handleClick},e))}}]),t}(a.Component),g=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={visible:!0},e.handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var e=this.props.children,t=this.state.visible;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Question 4"),!0===t?r.a.createElement("p",{onClick:this.handleClick},e):null)}}]),t}(a.Component),f=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={input:""},e.handleInput=e.handleInput.bind(Object(b.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleInput",value:function(e){this.setState({input:e.currentTarget.value})}},{key:"render",value:function(){var e=this.state.input.length<this.props.length?"Too short!":"Bingo!";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Question 5"),r.a.createElement("input",{onInput:this.handleInput}),r.a.createElement("p",null,e),"Bingo!"===e?r.a.createElement("img",{src:"https://thumbs.gfycat.com/ImpartialGoldenCattle-size_restricted.gif",alt:"Christoph Waltz saying bingo"}):null)}}]),t}(a.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{zIndex:1}},"Ruh ro. You dun goofed"),r.a.createElement("p",{style:{zIndex:1}},"This is a 404 message. Please navigate back to a valid page"),r.a.createElement("img",{className:"disappointed",src:"https://i.pinimg.com/originals/73/66/73/736673e0c1533cad6cee86d867ee5c92.jpg",alt:"a kitty error"}))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={components:[["/","Home"],["/multiplier","Multiplier"],["/even-clicks","Even Clicks"],["/count-by","Count By"],["/hide-me","Hide Me"],["/minimum-length","Minimum Length"]]},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.components;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dropdown show"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown"},"Select"),r.a.createElement("div",{className:"dropdown-menu"},e.map((function(e,t){return r.a.createElement(i.b,{className:"dropdown-item",to:e[0],key:t},e[1])})))))}}]),t}(a.Component),k=function(){return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement("p",null,"Please select a question using the dropdown")),r.a.createElement(o.a,{exact:!0,path:"/multiplier"},r.a.createElement(d,{x:5,y:7})),r.a.createElement(o.a,{path:"/multiplier/:x/:y",render:function(e){var t=e.match;return r.a.createElement(d,{x:t.params.x,y:t.params.y})}}),r.a.createElement(o.a,{exact:!0,path:"/even-clicks",component:E}),r.a.createElement(o.a,{exact:!0,path:"/count-by/"},r.a.createElement(v,{step:5})),r.a.createElement(o.a,{path:"/count-by/:step",render:function(e){var t=e.match;return r.a.createElement(v,{step:t.params.step})}}),r.a.createElement(o.a,{exact:!0,path:"/hide-me"},r.a.createElement(g,null,"blah blah blah")),r.a.createElement(o.a,{exact:!0,path:"/minimum-length"},r.a.createElement(f,{length:30})),r.a.createElement(o.a,{path:"/minimum-length/:length",render:function(e){var t=e.match;return r.a.createElement(f,{length:t.params.length})}}),r.a.createElement("p",null,"test"),r.a.createElement(o.a,{component:j})),r.a.createElement(O,null))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Friday quiz"),r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d97afe61.chunk.js.map