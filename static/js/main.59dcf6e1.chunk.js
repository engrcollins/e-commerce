(this["webpackJsonpwoke-library"]=this["webpackJsonpwoke-library"]||[]).push([[0],{100:function(e,a,t){e.exports=t(129)},105:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),o=t.n(r),i=t(9),c=t(11),s=t(164),m=t(182),d=(t(105),t(53)),u=function(){return l.a.createElement("div",{className:""},l.a.createElement(s.a,{item:!0,xs:12,sm:8,lg:9,className:"appContent"},l.a.createElement(d.a,{variant:"h3",component:"h5",gutterBottom:!0},"Welcome to our website...")),l.a.createElement(s.a,{item:!0,xs:12,sm:3,lg:2,className:"rightSide"},l.a.createElement("h4",null)))},p=t(168),E=(t(64),t(79)),g=t.n(E),b=t(170),f=t(169),h=Object(p.a)({root:{padding:0},button:{borderRadius:20},links:{float:"left",color:"rgb(36, 34, 34)",paddingTop:0,fontWeight:"bolder",textAlign:"center",marginTop:0}}),y=function(){var e=h();return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar"},l.a.createElement(d.a,{variant:"h6",component:"h7"},l.a.createElement(i.b,{to:"/",className:e.links},l.a.createElement(f.a,{primary:"HOME",styles:{fontWeight:"bold"}})),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn"},l.a.createElement(i.b,{to:"/category/life",className:e.links},l.a.createElement(f.a,{primary:"CATEGORIES"}))),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement(i.b,{to:"/category/life",className:e.links},l.a.createElement(f.a,{primary:"Life"})),l.a.createElement(i.b,{to:"/category/life"},l.a.createElement(f.a,{primary:"Career & Business"})),l.a.createElement(i.b,{to:"/category/life"},l.a.createElement(f.a,{primary:"Education"})),l.a.createElement(i.b,{to:"/category/life"},l.a.createElement(f.a,{primary:"Health"})),l.a.createElement(i.b,{to:"/category/life"},l.a.createElement(f.a,{primary:"Religion"})))),l.a.createElement(i.b,{to:"/about-us",className:e.links},l.a.createElement(f.a,{primary:"ABOUT US"})),l.a.createElement(i.b,{to:"/contact-us",className:e.links},l.a.createElement(f.a,{primary:"CONTACT US"})),l.a.createElement("div",{className:"article-search"},l.a.createElement(b.a,{variant:"contained",color:"primary",className:e.button},l.a.createElement(g.a,null),"Search"),l.a.createElement("input",{type:"text",id:"article-searcher",className:"searchbox",placeholder:"Search Products/Sellers",onKeyUp:function(){var e=document.getElementById("article-searcher").value;e=e.toLowerCase();for(var a=document.getElementsByClassName("list-group-item"),t=0;t<a.length;t++)a[t].innerHTML.toLowerCase().includes(e)?a[t].parentElement.style.display="block":a[t].parentElement.style.display="none"}})),l.a.createElement("div",null,l.a.createElement("p",null)))))},w=t(17),v=t(171),N=t(172),x=t(173),_=t(174),k=t(80),C=t.n(k),S=t(81),O=t.n(S),P=t(175),j=t(82),B=t.n(j),q=t(83),F=t.n(q),z=t(57),A=t.n(z),L=t(52),T=t.n(L),W=Object(p.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(2)}}})),R=function(){var e=W(),a=l.a.useState(0),t=Object(w.a)(a,2),n=t[0],r=t[1],o=function(e,a){r(a)},c=l.a.useState(!0),s=Object(w.a)(c,2),m=s[0],d=s[1];return l.a.createElement("div",{className:e.root},l.a.createElement(v.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(N.a,{button:!0,selected:0===n,onClick:function(e){return o(0,0)},style:{padding:"1px"}},l.a.createElement(x.a,null,l.a.createElement(C.a,{style:{fontSize:"20px",padding:"1px"}})),l.a.createElement(i.b,{to:"/"},l.a.createElement(f.a,{primary:"Home"}))),l.a.createElement(N.a,{button:!0,selected:1===n,onClick:function(e){return o(0,1)},style:{padding:"1px"}},l.a.createElement(x.a,null,l.a.createElement(T.a,{style:{fontSize:"20px",padding:"1px"}})),l.a.createElement(i.b,{to:"/registration"},l.a.createElement(f.a,{primary:"Registration"}))),l.a.createElement(N.a,{button:!0,selected:1===n,onClick:function(e){return o(0,1)},style:{padding:"1px"}},l.a.createElement(x.a,null,l.a.createElement(T.a,{style:{fontSize:"20px",padding:"1px"}})),l.a.createElement(i.b,{to:"/login"},l.a.createElement(f.a,{primary:"Login"})))),l.a.createElement(_.a,null),l.a.createElement(v.a,{component:"nav","aria-label":"secondary mailbox folder"},l.a.createElement(N.a,{button:!0,selected:3===n,onClick:function(e){return o(0,3)},style:{padding:"1px"}},l.a.createElement(x.a,null,l.a.createElement(O.a,{style:{fontSize:"20px",padding:"1px"}})),l.a.createElement(f.a,{primary:"Products"})),l.a.createElement(N.a,{button:!0,onClick:function(){d(!m)},style:{padding:"1px"}},l.a.createElement(x.a,null,l.a.createElement(T.a,{style:{fontSize:"20px",padding:"1px"}})),l.a.createElement(f.a,{primary:"Archives"}),m?l.a.createElement(B.a,null):l.a.createElement(F.a,null)),l.a.createElement(P.a,{in:m,timeout:"auto",unmountOnExit:!0},l.a.createElement(v.a,{component:"div",disablePadding:!0},l.a.createElement(N.a,{button:!0,className:e.nested},l.a.createElement(x.a,null,l.a.createElement(A.a,{style:{fontSize:"20px",padding:"1px"}})),l.a.createElement(f.a,{primary:"2019"})),l.a.createElement(N.a,{button:!0,className:e.nested},l.a.createElement(x.a,null,l.a.createElement(A.a,{style:{fontSize:"20px",padding:"1px"}})),l.a.createElement(f.a,{primary:"2020"}))))))},I=t(32),U=t(37),D=(t(67),t(41)),H=t.n(D),M=t(58),Z=t.n(M);Z.a.defaults.withCredentials=!0;var $=Z.a.create({baseURL:"http://localhost:3100",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*"}}),G=function(e){return console.log(e),$.post("/reg_form",e)},J=t(183),Y=t(177),K=t(181),V=t(180),Q=t(176),X=t(178),ee=t(179),ae=t(51),te=t.n(ae),ne=t(50),le=t.n(ne),re=t(54),oe=t.n(re),ie=Object(p.a)({root:{width:"100%",minWidth:410},table:{minWidth:360},warnings:{color:"red",padding:0},success:{color:"#004d00"}}),ce=function(){var e={id:null,first_name:"",last_name:"",email:"",gender:"",date_of_birth:"",state:"",country:"",phone:"",bio:"",password:"",confirmPassword:"",createdAt:""},a=Object(n.useState)(e),t=Object(w.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)(!1),s=Object(w.a)(c,2),m=s[0],u=s[1],p=Object(n.useState)(!0),E=Object(w.a)(p,2),g=E[0],b=E[1],f=Object(n.useState)({}),h=Object(w.a)(f,2),y=h[0],v=h[1],N=function(e){var a=e.target,t=a.name,n=a.value;o(Object(U.a)(Object(U.a)({},r),{},Object(I.a)({},t,n)))},x=function(e){var a,t={};return e.first_name||(t.first_name="First name is required"),e.last_name||(t.last_name="Last name is required"),e.gender||(t.gender="Please select your gender"),e.date_of_birth||(t.date_of_birth="Please input your Date of Birth"),e.state||(t.state="State is required"),e.country||(t.country="Country is required"),e.bio||(t.bio="Bio is required"),e.phone||(t.phone="Phone number is required"),e.email?(a=e.email,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())||(t.email="Not a valid email address")):t.email="Email address is required",e.password?e.password===e.state?t.password="Please provide a password different from your state":e.confirmPassword?e.password!==e.confirmPassword&&(t.confirmPassword="Passwords don't match"):t.confirmPassword="Please repeat the password":t.password="Password is required",t},_=ie();return l.a.createElement("div",{className:"library-form"},l.a.createElement("div",{className:"submit-form"},m?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(d.a,{variant:"body1",display:"block",className:_.success,gutterBottom:!0},l.a.createElement(oe.a,{style:{fontSize:"26px",padding:"-2px"}}),"Registration successful!",l.a.createElement("br",null),l.a.createElement(i.b,{to:"/"},l.a.createElement("b",null,"Continue"))," to site or ",l.a.createElement(i.b,{to:"/login"},l.a.createElement("b",null,"login"))," to site")):l.a.createElement("div",{"article-form":"true"},l.a.createElement(Q.a,null,l.a.createElement(Y.a,{className:_.table,"aria-label":"simple table"},l.a.createElement(X.a,null,l.a.createElement(ee.a,null,l.a.createElement(V.a,{colSpan:2,align:"center"},l.a.createElement("strong",null,"Registration Form")))),l.a.createElement(K.a,null,l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"first_name"},"First Name: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:"text",className:"input-field",id:"first_name",required:!0,placeholder:"Type your first name here",value:r.first_name,onChange:N,name:"first_name"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.first_name&&l.a.createElement("p",null,y.first_name)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"last_name"},"Last Name: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:"text",className:"input-field",id:"last_name",required:!0,placeholder:"Type your last name here",value:r.last_name,onChange:N,name:"last_name"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.last_name&&l.a.createElement("p",null,y.last_name)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"email"},"e-mail: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:"text",className:"input-field",id:"email",required:!0,placeholder:"Input your email address",value:r.email||"",onChange:N,name:"email"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.email&&l.a.createElement("p",null,y.email)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"gender"},"Gender: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("select",{id:"gender",required:!0,value:r.gender||"",onChange:N,name:"gender"},l.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Please choose your gender..."),l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female"),l.a.createElement("option",{value:"Undisclosed"},"Prefer not to Disclose")),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.gender&&l.a.createElement("p",null,y.gender)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"date_of_birth"},"Date of Birth: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement(J.a,{id:"date_of_birth",label:"Birthday",type:"date",defaultValue:"2000-01-24",value:r.date_of_birth,onChange:N,name:"date_of_birth",InputLabelProps:{shrink:!0}}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.date_of_birth&&l.a.createElement("p",null,y.date_of_birth)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"state"},"State: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:"text",className:"input-field",id:"state",required:!0,placeholder:"Provide your state",value:r.state||"",onChange:N,name:"state"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.state&&l.a.createElement("p",null,y.state)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"country"},"Country: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:"text",className:"input-field",id:"country",required:!0,placeholder:"Provide your country",value:r.country||"",onChange:N,name:"country"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.state&&l.a.createElement("p",null,y.state)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"bio"},"Bio: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:"text",className:"input-field",id:"bio",required:!0,placeholder:"Provide your bio",value:r.bio||"",onChange:N,name:"bio"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.bio&&l.a.createElement("p",null,y.bio)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"phone"},"Phone: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:"text",className:"input-field",id:"phone",required:!0,placeholder:"Input your business phone number",value:r.phone||"",onChange:N,name:"phone"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.phone&&l.a.createElement("p",null,y.phone)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"password"},"Password: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:g?"password":"text",className:"input-field",id:"password",required:!0,placeholder:"Pick a password(min of 8 characters)",value:r.password||"",onChange:N,name:"password"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.password&&l.a.createElement("p",null,y.password)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"confirmPassword"},"Confirm Password: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:g?"password":"text",className:"input-field",id:"confirmPassword",required:!0,placeholder:"Retype your password here",value:r.confirmPassword||"",onChange:N,name:"confirmPassword"}),"\u2002",l.a.createElement("button",{onClick:function(e){b(!g)}},g?l.a.createElement(le.a,{style:{fontSize:"20px",width:"11px",height:"11px",padding:"-2px"}}):l.a.createElement(te.a,{style:{fontSize:"20px",width:"11px",height:"11px",padding:"-2px"}})),l.a.createElement(d.a,{variant:"caption",display:"block",className:_.warnings,gutterBottom:!0},y.confirmPassword&&l.a.createElement("p",null,y.confirmPassword)))))),l.a.createElement("button",{onClick:function(){var a={first_name:r.first_name,last_name:r.last_name,gender:r.gender,date_of_birth:r.date_of_birth.toLocaleString(),state:r.state,country:r.country,bio:r.bio,phone:r.phone,email:r.email,password:r.password,confirmPassword:r.confirmPassword,createdAt:(new Date).toLocaleString()},t=x(a);v(t),Object.keys(t).length||(G(a).then((function(a){console.log(r.state),console.log(a.data),r.state===a.data&&"string"===typeof a.data?(console.log(r.state),console.log(a.data),window.alert("Your state ".concat(r.state," exists already, please try another state")),o(e)):r.email===a.data&&"string"===typeof a.data?(console.log(r.email),console.log(a.data),window.alert("Your email ".concat(r.email," exists already, please try another email")),o(e)):(o({first_name:a.data.first_name,last_name:a.data.last_name,gender:a.data.gender,date_of_birth:a.data.date_of_birth,state:a.data.state,phone:a.data.phone,email:a.data.email,password:a.data.password,createdAt:a.data.createdAt}),u(!0))})).catch((function(e){console.log(e)})),u(!0))},className:"btn btn-success"},"Submit"),l.a.createElement("br",null)))))},se=function(e){return console.log(e),$.post("/login",e)},me=Object(p.a)({root:{width:"100%",minWidth:410},table:{minWidth:360},active:{backgroundColor:"rgba(255, 255, 255, 0.12)"},warnings:{color:"red",padding:0},success:{color:"#004d00"}}),de=function(){H.a.remove();var e=Object(n.useState)({email:"",password:""}),a=Object(w.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(!1),i=Object(w.a)(o,2),s=(i[0],i[1]),m=Object(n.useState)(!0),u=Object(w.a)(m,2),p=u[0],E=u[1],g=Object(n.useState)({}),b=Object(w.a)(g,2),f=b[0],h=b[1],y=function(e){var a=e.target,n=a.name,l=a.value;r(Object(U.a)(Object(U.a)({},t),{},Object(I.a)({},n,l)))},v=function(e){var a,t={};return e.email?(a=e.email,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())||(t.email="Not a valid email address")):t.email="Email is required",e.password||(t.password="Password is required"),t},N=Object(c.f)(),x=me();return l.a.createElement("div",{className:"library-form"},l.a.createElement("div",{"article-form":"true"},l.a.createElement(Q.a,null,l.a.createElement(Y.a,{className:x.table,"aria-label":"simple table"},l.a.createElement(X.a,null,l.a.createElement(ee.a,null,l.a.createElement(V.a,{colSpan:2,align:"center"},l.a.createElement("strong",null,"Login")))),l.a.createElement(K.a,null,l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"email"},"Email: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:"text",className:"input-field",id:"email",required:!0,placeholder:"Type your email here",value:t.email||"",onChange:y,name:"email"}),l.a.createElement(d.a,{variant:"caption",display:"block",className:x.warnings,gutterBottom:!0},f.email&&l.a.createElement("p",null,f.email)))),l.a.createElement(ee.a,null,l.a.createElement(V.a,{align:"left"},l.a.createElement("label",{className:"labelling",htmlFor:"password"},"Password: ")),l.a.createElement(V.a,{align:"left"},l.a.createElement("input",{type:p?"password":"text",className:"input-field",id:"password",required:!0,placeholder:"Type your password here",value:t.password||"",onChange:y,name:"password"}),"\u2002",l.a.createElement("button",{onClick:function(e){E(!p)}},p?l.a.createElement(le.a,{style:{fontSize:"20px",width:"11px",height:"11px",padding:"-2px"}}):l.a.createElement(te.a,{style:{fontSize:"20px",width:"11px",height:"11px",padding:"-2px"}})),l.a.createElement(d.a,{variant:"caption",display:"block",className:x.warnings,gutterBottom:!0},f.password&&l.a.createElement("p",null,f.password)))))),l.a.createElement("button",{onClick:function(){var e={email:t.email,password:t.password},a=v(e);h(a),Object.keys(a).length||(se(e).then((function(e){r({email:e.data.email,password:e.data.id}),H.a.set("name",t.email,{expires:7}),s(!0),console.log(H.a.get("name")),N.push("/"),window.location.reload(!1)})),s(!0),N.push("/"),window.location.reload(!1))},className:"btn btn-success"},"Login"),l.a.createElement("br",null))))};var ue=function(){return l.a.createElement("div",{id:"appContainer"},l.a.createElement(i.a,null,l.a.createElement(y,null),l.a.createElement(s.a,{container:!0,spacing:3,component:m.a},l.a.createElement(s.a,{item:!0,xs:12,sm:3,lg:2},l.a.createElement(R,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.a,{item:!0,xs:9,sm:9,lg:10},l.a.createElement("div",{className:"appContent",style:{textAlign:"center"}},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/registration",component:ce}),l.a.createElement(c.a,{path:"/login",component:de}),l.a.createElement(c.a,{path:"/",component:u}))))),l.a.createElement("div",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(i.a,null,l.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,a,t){},67:function(e,a,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.59dcf6e1.chunk.js.map