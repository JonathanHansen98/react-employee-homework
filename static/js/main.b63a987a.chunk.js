(this["webpackJsonpreact-employee-homework"]=this["webpackJsonpreact-employee-homework"]||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/download.57a3d4b3.jpg"},53:function(e,a,t){e.exports=t(62)},58:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),l=t.n(i),c=(t(58),t(97)),o=t(99),s=t(93),m=t(96),d=t(91),p=function(e){var a=e.src,t=Object(d.a)({header:{width:"100%",padding:0,margin:0}})();return r.a.createElement("div",{className:t.header},r.a.createElement("img",{width:"100%",src:a,alt:"Header Img"}))},u=t(39),f=t.n(u),y=t(40),h=t(41),b=t(44),E=t(43),g=t(95),x=t(100),v=t(101),S=function(e){var a=e.name,t=e.position,n=e.depart,i=e.salary;return r.a.createElement(o.a,{py:1},r.a.createElement(s.a,{style:{borderBottom:"1px solid #ccc"},align:"center",justify:"center",container:!0},r.a.createElement(s.a,{align:"center",item:!0,xs:!0},r.a.createElement(o.a,{display:"flex",height:"100%",alignItems:"center"},r.a.createElement(v.a,{variant:"square",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6995%2F8cac9a3bd39487d8e052fef8bf6f3fc2afdaa314r1-1125-873v2_hq.jpg&f=1&nofb=1"}))),r.a.createElement(s.a,{style:{borderLeft:"1px solid #ccc"},item:!0,xs:!0},a),r.a.createElement(s.a,{style:{borderLeft:"1px solid #ccc"},item:!0,xs:!0},n),r.a.createElement(s.a,{style:{borderLeft:"1px solid #ccc"},item:!0,xs:!0},t),r.a.createElement(s.a,{style:{borderLeft:"1px solid #ccc"},item:!0,xs:!0},"$",i)))},A=[{_id:"5e93b4a43af44260882e33b0",name:"Michael Scott",position:"Regional Manager",department:"Admin",salary:"60,000"},{_id:"5e93b4f03af44260882e33b1",name:"Jim Halpert",position:"Salesman",department:"Sales",salary:"30,000"},{_id:"5e93b4fa3af44260882e33b2",name:"Dwight Schrute",position:"Assistant (to the) Regional Manager",department:"Admin",salary:"45,000"},{_id:"5e93b50a3af44260882e33b3",name:"Pam Beesly",position:"Secretary",department:"Admin",salary:"35,000"},{_id:"5e93b5183af44260882e33b4",name:"Ryan Howard",position:"QA Agent",department:"Customer Relations",salary:"30,000"},{_id:"5e93b51e3af44260882e33b5",name:"Kelly Kapoor",position:"Head of Customer Relations",department:"Customer Relations",salary:"37,500"},{_id:"5e93b52b3af44260882e33b6",name:"Angela Martin",position:"Lead Accountant",department:"Accounting",salary:"40,000"},{_id:"5e93b5323af44260882e33b7",name:"Kevin Malone",position:"Accountant",department:"Accounting",salary:"30,000"},{_id:"5e93b53b3af44260882e33b8",name:"Oscar Martinez",position:"Lead Accountant",department:"Accounting",salary:"40,000"},{_id:"5e93b5453af44260882e33b9",name:"Andy Bernard",position:"Salesman",department:"Sales",salary:"30,000"},{_id:"5e93b54d3af44260882e33ba",name:"Stanley Hudson",position:"Salesman",department:"Sales",salary:"30,000"},{_id:"5e93b5583af44260882e33bb",name:"Phyllis Lapin",position:"Salesman",department:"Sales",salary:"30,000"},{_id:"5e93b55f3af44260882e33bc",name:"Toby Flenderson",position:"Human Resources",department:"Head of HR",salary:"45,000"},{_id:"5e93b56d3af44260882e33be",name:"Gabe Lewis",position:"Corporate",department:"Sabre",salary:"50,000"},{_id:"5e93b5813af44260882e33c0",name:"Creed Bratton",position:"QA Agent",department:"Customer Relations",salary:"35,000"}],_={closed:{x:500,opacity:0},open:{x:0,opacity:1}},k=[{id:"name",text:"Name:"},{id:"department",text:"Department:"},{id:"position",text:"Position:"},{id:"salary",text:"Salary:"}],w=t(42),C=t(98),R=function(e){var a=e.handleSearch;e.value;return r.a.createElement(o.a,{display:"inline",width:"100%",p:1,my:3},r.a.createElement(C.a,{fullWidth:!0,onChange:a,id:"filled-basic",variant:"filled",label:"Search:"}))},L=function(e){Object(b.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(y.a)(this,t),(n=a.call(this,e)).handleSearchUpdate=function(e){var a=n.charArr.filter((function(a){return a.name.toLowerCase().startsWith(e.target.value.toLowerCase())}));n.setState({characters:a})},n.compareProps=function(e){return function(a,t){var n=0;return a[e]>t[e]?n=1:a[e]<t[e]&&(n=-1),n}},n.handleSort=function(e){console.log("On sort func before setState/Sort:",A);var a=e.target.id,t=n.state.characters.slice().sort(n.compareProps(a));n.setState({characters:t})},n.handleReset=function(){console.log("On Reset: ",A),n.setState({characters:A})},n.state={characters:[],search:""},n.charArr=A,n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({characters:A}),console.log("On Mount: ",A)}},{key:"componentDidUpdate",value:function(){console.log("On Updated:",A)}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,null,r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(o.a,null,r.a.createElement(m.a,{align:"center",variant:"h3"},"Current Employees:"))),r.a.createElement(s.a,{item:!0},r.a.createElement(R,{handleSearch:this.handleSearchUpdate})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(o.a,{mb:3,p:1},r.a.createElement(g.a,null,r.a.createElement(s.a,{align:"center",container:!0},r.a.createElement(o.a,{px:1,display:"flex",alignItems:"center"},r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(x.a,{onClick:this.handleReset},"Reset"))),k.map((function(a,t){return r.a.createElement(s.a,{key:t,item:!0,xs:!0},r.a.createElement("p",{style:{fontWeight:"bold",borderLeft:"solid 1px #ccc"},onClick:e.handleSort,key:a.id,id:a.id},a.text))})))))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(o.a,{p:1},r.a.createElement(g.a,{style:{maxHeight:"500px",overflowY:"auto",overflowX:"hidden"},className:"listCard"},r.a.createElement(o.a,{p:1},this.state.characters.map((function(e,a){return r.a.createElement(w.a.div,{key:a,variants:_,initial:"closed",animate:"open",transition:{delay:.125*a,type:"spring",damping:15,ease:[.445,.05,.55,.95]}},r.a.createElement(S,{key:e._id,name:e.name,position:e.position,depart:e.department,salary:e.salary}))}))))))))}}]),t}(n.Component);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{src:f.a}),r.a.createElement(c.a,null,r.a.createElement(o.a,{mt:5},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,sm:12},r.a.createElement(o.a,null,r.a.createElement(m.a,{style:{fontWeight:"500"},align:"center",variant:"h2"},"Dunder Mifflin Employee Directory"))),r.a.createElement(s.a,{item:!0,sm:12},r.a.createElement(o.a,{my:5},r.a.createElement(L,null)))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.b63a987a.chunk.js.map