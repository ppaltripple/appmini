(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(174)},143:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);a(108),a(133);var o=a(0),n=a.n(o),c=a(44),i=a.n(c),l=a(21),r=a(95),s=a(106),p=a(2),u=a(1),d=a(36),y=a(17),O=a.n(y),v={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},b={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},h={forms:[]},j=Object(l.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(u.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(u.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(u.a)({},e,{activeTab:Object(u.a)({},e.activeTab,Object(p.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(u.a)({},e,{componentScroll:Object(u.a)({},e.componentScroll,Object(p.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],o=a.scrollLeft,n=a.scrollTop;return Object(u.a)({},e,{componentScroll:Object(u.a)({},e.componentScroll,Object(p.a)({},t.payload.component,{x:o,y:n}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,o=t.payload.panel;window.history.pushState(null,null);var n=e.panelsHistory[a]||[],c=e.viewsHistory[e.activeStory]||[],i=c.indexOf(a);return-1!==i&&c.splice(i,1),-1===n.indexOf(o)&&(n=[].concat(Object(d.a)(n),[o])),n.length>1&&O.a.send("VKWebAppEnableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(u.a)({},e,{activeView:a,activePanel:o,panelsHistory:Object(u.a)({},e.panelsHistory,Object(p.a)({},a,n)),viewsHistory:Object(u.a)({},e.viewsHistory,Object(p.a)({},e.activeStory,[].concat(Object(d.a)(c),[a]))),scrollPosition:Object(u.a)({},e.scrollPosition,Object(p.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var l=e.viewsHistory[t.payload.story]||[t.payload.story],r=e.storiesHistory,s=l[l.length-1],y=e.panelsHistory[s]||[t.payload.initial_panel],b=y[y.length-1];if(t.payload.story===e.activeStory)if(y.length>1){var h=y.shift();b=(y=[h])[y.length-1]}else if(l.length>1){var j=l.shift();s=(l=[j])[l.length-1],b=(y=e.panelsHistory[s])[y.length-1]}return t.payload.story===e.activeStory&&1===y.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===r.indexOf(t.payload.story)||r[0]===t.payload.story&&r[r.length-1]!==t.payload.story)&&(r=[].concat(Object(d.a)(r),[t.payload.story])),Object(u.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:b,storiesHistory:r,viewsHistory:Object(u.a)({},e.viewsHistory,Object(p.a)({},s,l)),panelsHistory:Object(u.a)({},e.panelsHistory,Object(p.a)({},s,y)),scrollPosition:Object(u.a)({},e.scrollPosition,Object(p.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var m=e.activeView,w=e.activePanel,f=e.activeStory,S=e.popouts;if(S[m])return S[m]=null,Object(u.a)({},e,{popouts:Object(u.a)({},e.popouts,{popoutsData:S})});var g=e.modalHistory[m];if(void 0!==g&&0!==g.length){var H=g[g.length-2]||null;return null===H?g=[]:-1!==g.indexOf(H)?g=g.splice(0,g.indexOf(H)+1):g.push(H),Object(u.a)({},e,{activeModals:Object(u.a)({},e.activeModals,Object(p.a)({},m,H)),modalHistory:Object(u.a)({},e.modalHistory,Object(p.a)({},m,g))})}var E=e.panelsHistory[m]||[],_=e.viewsHistory[e.activeStory]||[],T=e.storiesHistory;if(E.length>1)E.pop(),w=E[E.length-1];else if(_.length>1){_.pop(),m=_[_.length-1];var V=e.panelsHistory[m];w=V[V.length-1]}else if(T.length>1){T.pop(),f=T[T.length-1],m=e.viewsHistory[f][e.viewsHistory[f].length-1];var P=e.panelsHistory[m];w=P.length>1?P[P.length-1]:P[0]}else O.a.send("VKWebAppClose",{status:"success"}).then(function(e){return e}).catch(function(e){return e});return 1===E.length&&O.a.send("VKWebAppDisableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(u.a)({},e,{activeView:m,activePanel:w,activeStory:f,viewsHistory:Object(u.a)({},e.viewsHistory,Object(p.a)({},e.activeView,_)),panelsHistory:Object(u.a)({},e.panelsHistory,Object(p.a)({},e.activeView,E))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(u.a)({},e,{popouts:Object(u.a)({},e.popouts,Object(p.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(u.a)({},e,{popouts:Object(u.a)({},e.popouts,Object(p.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var x=t.payload.id||null,A=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===x?A=[]:-1!==A.indexOf(x)?A=A.splice(0,A.indexOf(x)+1):A.push(x),Object(u.a)({},e,{activeModals:Object(u.a)({},e.activeModals,Object(p.a)({},e.activeView,x)),modalHistory:Object(u.a)({},e.modalHistory,Object(p.a)({},e.activeView,A))});case"CLOSE_MODAL":var C=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,M=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===C?M=[]:-1!==M.indexOf(C)?M=M.splice(0,M.indexOf(C)+1):M.push(C),Object(u.a)({},e,{activeModals:Object(u.a)({},e.activeModals,Object(p.a)({},e.activeView,C)),modalHistory:Object(u.a)({},e.modalHistory,Object(p.a)({},e.activeView,M))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(u.a)({},e,{forms:Object(u.a)({},e.forms,Object(p.a)({},t.payload.form,t.payload.data))});default:return e}}}),m=a(97),w=(a(86),a(143),a(62)),f=a.n(w),S=a(98),g=a(46),H=a(45),E=a.n(H),_=a(59),T=a.n(_),V=a(105),P=a.n(V),x=a(99),A=a.n(x),C=a(100),M=a.n(C),k=a(104),I=a.n(k),L=a(63),B=a.n(L),D=a(101),K=a.n(D),N=a(103),R=a.n(N),U=a(102),W=a.n(U),Y=function(e){var t=e.id,a=e.go,o=e.fetchedUser;return n.a.createElement(A.a,{id:t},n.a.createElement(M.a,null,"Example"),o&&n.a.createElement(B.a,{title:"User Data Fetched with VK Bridge"},n.a.createElement(K.a,{before:o.photo_200?n.a.createElement(W.a,{src:o.photo_200}):null,description:o.city&&o.city.title?o.city.title:""},"".concat(o.first_name," ").concat(o.last_name))),n.a.createElement(B.a,{title:"Navigation Example"},n.a.createElement(R.a,null,n.a.createElement(I.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},z=function(){var e=Object(o.useState)("home"),t=Object(g.a)(e,2),a=t[0],c=t[1],i=Object(o.useState)(null),l=Object(g.a)(i,2),r=l[0],s=l[1],p=Object(o.useState)(n.a.createElement(P.a,{size:"large"})),u=Object(g.a)(p,2),d=u[0],y=u[1];Object(o.useEffect)(function(){function e(){return(e=Object(S.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,s(t),y(null);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}E.a.subscribe(function(e){var t=e.detail,a=t.type,o=t.data;if("VKWebAppUpdateConfig"===a){var n=document.createAttribute("scheme");n.value=o.scheme?o.scheme:"client_light",document.body.attributes.setNamedItem(n)}}),function(){e.apply(this,arguments)}()},[]);return n.a.createElement(T.a,{activePanel:a,popout:d},n.a.createElement(Y,{id:"home",fetchedUser:r,go:function(e){c(e.currentTarget.dataset.to)}}))};a.d(t,"store",function(){return F});var F=Object(l.createStore)(j,Object(m.composeWithDevTools)(Object(l.applyMiddleware)(r.a)));F.dispatch({type:"SET_STORY",payload:{story:"home",initial_panel:"base"}}),i.a.render(n.a.createElement(s.a,{store:F},n.a.createElement(z,null)),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.6cbe5a28.chunk.js.map