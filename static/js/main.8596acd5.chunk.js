(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/horsegif.73abf012.gif"},23:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/priyansh.49b2d248.jpeg"},42:function(e,t,a){e.exports=a.p+"static/media/undercon.61cbe553.png"},44:function(e,t,a){e.exports=a(91)},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),o=a(2),c=a(3),i=a(5),m=a(4),u=(a(23),a(14)),h=a.n(u),d=a(15),p=a(16),g=a.n(p),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.summary,a=e.currentDate,n=new Intl.NumberFormat;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"NewConfirmed"},r.a.createElement("h3",null,"New Confirmed"),r.a.createElement("h2",null,n.format(t.NewConfirmed)),r.a.createElement("h4",null,new Date(a).toDateString())),r.a.createElement("div",{className:"TotalConfirmed"},r.a.createElement("h3",null,"Total Confirmed"),r.a.createElement("h2",null,n.format(t.TotalConfirmed)),r.a.createElement("h4",null,new Date(a).toDateString())),r.a.createElement("div",{className:"NewDeaths"},r.a.createElement("h3",null,"New Deaths"),r.a.createElement("h2",null,n.format(t.NewDeaths)),r.a.createElement("h4",null,new Date(a).toDateString())),r.a.createElement("div",{className:"TotalDeaths"},r.a.createElement("h3",null,"New Recovered"),r.a.createElement("h2",null,n.format(t.TotalDeaths)),r.a.createElement("h4",null,new Date(a).toDateString())),r.a.createElement("div",{className:"TotalRecovered"},r.a.createElement("h3",null,"Total Recovered"),r.a.createElement("h2",null,n.format(t.TotalRecovered)),r.a.createElement("h4",null,new Date(a).toDateString())))}}]),a}(r.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.countries,t=new Intl.NumberFormat;return r.a.createElement("tr",null,r.a.createElement("td",null,e.Country),r.a.createElement("td",null,t.format(e.NewConfirmed)),r.a.createElement("td",null,t.format(e.TotalRecovered)),r.a.createElement("td",null,t.format(e.TotalDeaths)))}}]),a}(r.a.Component),v=(r.a.Component,a(17)),b=a.n(v),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={countries:[],global:[],currentdate:null,loading:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.covid19api.com/summary");case 2:t=e.sent,console.log(t),this.setState({countries:t.data.Countries}),this.setState({global:t.data.Global}),this.setState({currentdate:t.data.Date}),this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("h2",null,r.a.createElement("img",{src:b.a,className:"img",alt:"Loading...",width:"auto"})):r.a.createElement("div",null,r.a.createElement(f,{summary:this.state.global,currentDate:this.state.currentdate}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"New Confirmed"),r.a.createElement("th",null,"Total Recovered"),r.a.createElement("th",null,"Total Deaths"))),r.a.createElement("tbody",null,this.state.countries.map((function(e){return r.a.createElement(E,{countries:e,key:e.Country})})))))}}]),a}(r.a.Component),w=a(40),O=(n.Component,new(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("h2",null,"Hello covid contact")}}]),a}(r.a.Component)),a(41)),C=a.n(O),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"card"},r.a.createElement("img",{class:"img-circle",src:C.a,height:"300px"}),r.a.createElement("h1",null,"Priyansh"),r.a.createElement("p",{class:"title"}),r.a.createElement("p",null,"priyansh0008@gmail.com"),r.a.createElement("div",null,r.a.createElement("a",{className:"anh",href:"#"},r.a.createElement("i",{class:"fa fa-dribbble"})),r.a.createElement("a",{className:"anh",href:"twitter.com"},r.a.createElement("i",{class:"fa fa-twitter"})),r.a.createElement("a",{className:"anh",href:"linkedin.com"},r.a.createElement("i",{class:"fa fa-linkedin"})),r.a.createElement("a",{className:"anh",href:"facebook.com"},r.a.createElement("i",{class:"fa fa-facebook"}))),r.a.createElement("p",null,r.a.createElement("button",{className:"buttoncls"},"Contact"))))}}]),a}(r.a.Component),j=a(42),D=a.n(j),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={countries:[],global:[],currentdate:null,loading:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://corona.lmao.ninja/v2/countries");case 2:t=e.sent,console.log(t),this.setState({countries:t.data.Countries}),this.setState({global:t.data.Global}),this.setState({currentdate:t.data.Date}),this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("h2",null,r.a.createElement("img",{src:b.a,className:"img",alt:"Loading...",width:"auto"})):r.a.createElement(r.a.Fragment,null)}}]),a}(r.a.Component);function x(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Chart"},r.a.createElement("div",{id:"piechart"})))}var T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Comming Soon"),r.a.createElement("img",{src:D.a,alt:"Comming Soon",height:"200px"}),r.a.createElement(N,null),r.a.createElement(x,null))}}]),a}(r.a.Component);function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"footer w3-myfont"},r.a.createElement("p",{className:"w3-jumbo "},"\xa9 All rights reserved 2019 | Created by Priyansh")))}function I(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"HOW TO PROTECT YOURSELF AND OTHERS"),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"list-group"},r.a.createElement("a",{href:"#",class:"list-group-item active"},r.a.createElement("h4",{class:"list-group-item-heading"}),r.a.createElement("p",{class:"list-group-item-text"})),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Wash your hands often "),r.a.createElement("p",{class:"list-group-item-text"}," with soap and water for at least 20 seconds, especially after being in a public place, or after blowing your nose, coughing or sneezing. If soap and water are not readily available, use a hand sanitizer with at least 60% alcohol.Avoid touching your eyes, nose and mouth with unwashed hands.")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Avoid close contact "),r.a.createElement("p",{class:"list-group-item-text"}," with people who are sick. Some people without symptoms may be able to spread the virus.Stay home as much as possible and avoid non-essential travel.Practice social distancing by keeping at least 6 feet \u2014 about two arm lengths \u2014 away from others if you must go out in public.Stay connected with loved ones through video and phone calls, texts and social media.")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Cover your mouth and nose with a cloth face cover "),r.a.createElement("p",{class:"list-group-item-text"}," when around others and when you must go out in public, such as to a grocery store. The cloth face cover is meant to protect other people in case you are infected.However, do NOT place cloth face coverings on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance.In addition, do NOT use a facemask meant for a health care worker.Continue to keep about 6 feet between yourself and others. The cloth face cover is not a substitute for social distancing.")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Cover your coughs and sneezes.  "),r.a.createElement("p",{class:"list-group-item-text"}," Use a tissue to cover your nose and mouth, and throw used tissues in a lined trash can. If a tissue isn\u2019t available, cough or sneeze into your elbow \u2014 not your hands. Wash your hands immediately.")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Clean and disinfect frequently touched surfaces daily."),r.a.createElement("p",{class:"list-group-item-text"},"  This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets and sinks. Follow CDC guidance.")),r.a.createElement("a",{href:"#",class:"list-group-item active"},r.a.createElement("h4",{class:"list-group-item-heading"},"WHO IS AT A HIGHER RISK?"),r.a.createElement("p",{class:"list-group-item-text"},"According to the CDC, early information shows that older adults, people who live in a nursing home or long-term care facility, and individuals of any age with the conditions below are at higher risk of getting very sick from COVID-19:")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Have serious underlying medical conditions,"),r.a.createElement("p",{class:"list-group-item-text"},"   particularly if not well controlled, such as heart, lung or liver disease; diabetes; moderate to severe asthma; severe obesity; and chronic kidney disease undergoing dialysis.")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Have a weakened immune system,"),r.a.createElement("p",{class:"list-group-item-text"},"   including those undergoing cancer treatment, smoking and having other immunocompromised conditions.")),r.a.createElement("a",{href:"#",class:"list-group-item active"},r.a.createElement("h4",{class:"list-group-item-heading"},"IF YOU ARE SICK"),r.a.createElement("p",{class:"list-group-item-text"},"COVID-19 symptoms include fever, coughing and shortness of breath, plus additional ones listed on the CDC website. Keep track of your symptoms, which may appear two to 14 days after exposure, and call to seek medical attention if your symptoms worsen, such as difficulty breathing. If you think you may have been exposed to COVID-19, contact your health care provider immediately.")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"}," Wear acloth face cover"),r.a.createElement("p",{class:"list-group-item-text"},"  if you are around other people (e.g., sharing a room or vehicle) and before you enter a health care provider\u2019s office. See CDC guidelines.")),r.a.createElement("a",{href:"#",class:"list-group-item active"},r.a.createElement("h4",{class:"list-group-item-heading"},"Mild Illness"),r.a.createElement("p",{class:"list-group-item-text"},"Most people have mild illness and are able to recover at home. If you think you are sick:")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Stay home and call your doctor"),r.a.createElement("p",{class:"list-group-item-text"},"   for medical advice and before visiting a medical office. Older adults and people of any age with serious underlying medical conditions should call a health care provider as soon as symptoms start.")),r.a.createElement("a",{href:"#",class:"list-group-item"},r.a.createElement("h4",{class:"list-group-item-heading"},"Separate yourself from other people "),r.a.createElement("p",{class:"list-group-item-text"},"   Avoid sharing personal household items, such as dishes, drinking glasses, cups, eating utensils, towels or bedding. Wash items thoroughly after using them with soap and hot water.On your own, clean and disinfect high-touch surfaces daily in your sick room and designated bathroom. Have a healthy household member do the same for surfaces in other parts of the home. If you are sharing a bathroom, clean and disinfect it after each use.")))))}var R=a(11),A=a(1);function H(){return r.a.createElement("div",null,r.a.createElement(R.a,null,r.a.createElement("div",{class:"header"},r.a.createElement("nav",{class:"navbar navbar-inverse"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{className:"headercus"},r.a.createElement("div",{class:"navbar-header"},r.a.createElement(R.b,{class:"navbar-brand",to:"/"},"COVID-19 Dashboard")),r.a.createElement("ul",{class:"nav navbar-nav"},r.a.createElement("li",{class:"active"},r.a.createElement(R.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(R.b,{to:"/Tips"},"Tips")),r.a.createElement("li",null,r.a.createElement(R.b,{to:"/Map"},"Covid-map")),r.a.createElement("li",null,r.a.createElement(R.b,{to:"/Team"},"Team"))),r.a.createElement("h1",null,"COVID-19"),r.a.createElement("div",{className:"w3-myfont"},r.a.createElement("p",{className:"w3-xxxlarge"},"Information on Coronavirus disease (COVID-19) pandemic"))),r.a.createElement("hr",null),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(A.a,{path:"/Tips"},r.a.createElement(I,null)),r.a.createElement(A.a,{path:"/Map"},r.a.createElement(T,null)),r.a.createElement(A.a,{path:"/Team"},r.a.createElement(k,null))),r.a.createElement(S,null))))))}var F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(H,null)}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8596acd5.chunk.js.map