(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));var i=function(e){return e.alert&&Object(o.jsxs)("div",{className:'alert alert-danger alert-dismissible fade show" role="alert"',children:[Object(o.jsx)("strong",{children:e.alert.type}),":",e.alert.msg,Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})};function d(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat("danger"===e.mode||"dark"===e.mode?"dark":"light"," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch mx-2",children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleRedMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"success":"light"),htmlFor:"flexSwitchCheckDefault",children:"Red Mode"})]}),Object(o.jsxs)("div",{className:"form-check form-switch mx-2",children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault2"}),Object(o.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault2",children:"Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:{color:"danger"===e.mode||"dark"===e.mode?"white":"black"},children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode||"danger"===e.mode?"grey":"white",color:"dark"===e.mode||"danger"===e.mode?"white":"black"},placeholder:"Enter your text",id:"myBox",rows:"10"})}),Object(o.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var e=n.toUpperCase();r(e)},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var e=n.toLowerCase();r(e)},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){navigator.clipboard.writeText(n)},children:"Copy text"}),Object(o.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var e=n.replace(/\s+/g," ").trim();r(e)},children:"Trim Extra Spaces"}),Object(o.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){r("")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-4",children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[function(e){var t=e.split(" ");return t.forEach((function(e){if(""===e){var a=t.indexOf(e);t.pop(a)}})),t.length}(n)," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[n.split("\n").length," sentences"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes to read this text"]}),Object(o.jsx)("h3",{children:"Text Preview"}),Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:n.length>0?n:"Enter something in textbox to preview here"})})]})]})})}d.defaultProps={title:"No title provided",aboutText:"No about text provided"};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),h=s[0],j=s[1],m=function(e,t){j({msg:e,type:t})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#00235c",m("Dark Mode has been Enabled","danger")):"danger"===a?(n("light"),document.body.style.backgroundColor="#00235c",m("Dark Mode has been Enabled","danger")):(n("light"),document.body.style.backgroundColor="white",m("Light Mode has been Enabled","success"))},toggleRedMode:function(){"light"===a||"dark"===a?(n("danger"),document.body.style.backgroundColor="#c9003c",m("Green Mode has been Enabled","success")):(n("light"),document.body.style.backgroundColor="white",m("Light Mode has been Enabled","success"))}}),Object(o.jsx)(i,{alert:h}),Object(o.jsx)("div",{className:"container mt-5",children:Object(o.jsx)(b,{heading:"Enter the text to analyze",showAlert:m,mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.b362b6f5.chunk.js.map