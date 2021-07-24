(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={list_item:"ContactItem_list_item__1-00j",delete_btn:"ContactItem_delete_btn__2et50"}},28:function(t,e,n){t.exports={filter_label:"Filter_filter_label__1MW0m"}},29:function(t,e,n){t.exports={container:"Container_container__3jlxO"}},30:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__3mpex"}},36:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),u=(n(36),n(11)),i=n(12),s=n(15),b=n(13),l=n(28),j=n.n(l),f=n(6),d=n(2),m=Object(d.b)("contacts/resetFilter"),O=Object(d.b)("contacts/addContactRequest"),h=Object(d.b)("contacts/addContactSuccess"),p=Object(d.b)("contacts/addContactError"),_=Object(d.b)("contacts/deleteContactRequest"),C=Object(d.b)("contacts/deleteContactSuccess"),v=Object(d.b)("contacts/deleteContactError"),x=Object(d.b)("contacts/getContactRequest"),g=Object(d.b)("contacts/getContactSuccess"),y=Object(d.b)("contacts/getContactError"),N={getItems:function(t){return t.contacts.items},getFilter:function(t){return t.contacts.filter}},F=n(1),w=Object(f.b)((function(t){return{value:N.getFilter(t)}}),(function(t){return{onChange:function(e){return t(m(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(F.jsxs)("label",{className:j.a.filter_label,children:["Find contacts by name",Object(F.jsx)("br",{}),Object(F.jsx)("input",{type:"text",value:e,onChange:n})]})})),S=n(29),I=n.n(S),k=function(t){var e=t.children;return Object(F.jsx)("div",{className:I.a.container,children:e})},A=n(4),L=n(7),z=n.n(L),E=n(9),R=n.n(E);R.a.defaults.baseURL="http://localhost:4040/";var q=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:t.props.name,number:t.props.number},t.onInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(A.a)({},c,a))},t.addNoRepeatContact=function(e,n){var c=e.name,a=e.number;n.some((function(t){return t.name.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts")):n.some((function(t){return t.number===a}))?alert("".concat(a," is already in contacts")):(t.props.onSubmit(e),t.reset())},t.onHandleSubmit=function(e){e.preventDefault();var n=t.props.contacts;t.addNoRepeatContact(t.state,n)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(F.jsx)("div",{className:z.a.form_container,children:Object(F.jsxs)("form",{onSubmit:this.onHandleSubmit,children:[Object(F.jsx)("h2",{className:z.a.form_label,children:"Name"}),Object(F.jsx)("input",{className:z.a.input,onChange:this.onInputChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name}),Object(F.jsx)("h2",{className:z.a.form_label,children:"Number"}),Object(F.jsx)("input",{className:z.a.input,onChange:this.onInputChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number}),Object(F.jsx)("br",{}),Object(F.jsxs)("button",{type:"submit",className:z.a.add_button,children:[" ","Add contact"]})]})})}}]),n}(c.Component);q.defaultProps={name:"",number:""};var P,T,B=Object(f.b)((function(t){return{contacts:N.getItems(t)}}),(function(t){return{onSubmit:function(e){var n,c=e.name,a=e.number;return t((n={name:c,number:a},function(t){t(O()),R.a.post("contacts",n).then((function(e){return t(h(e.data))})).catch((function(e){return t(p(e))}))}))}}}))(q),D=n(30),J=n.n(D),M=n(16),Z=n.n(M),H=function(t){var e=t.id,n=t.name,c=t.number,a=t.deleteContact;return Object(F.jsxs)("li",{className:Z.a.list_item,children:[Object(F.jsxs)("span",{className:Z.a.new_item,children:[n,": ",c]}),Object(F.jsx)("button",{className:Z.a.delete_btn,onClick:function(){return a(e)},children:"Delete"})]},e)},K=function(t){var e=t.contacts,n=t.deleteContact,a=t.onContactFetch;return Object(c.useEffect)((function(){a()}),[a]),Object(F.jsx)("ul",{className:J.a.contact_list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(F.jsx)(H,{id:e,name:c,number:a,deleteContact:n},e)}))})},U=Object(f.b)((function(t){var e=t.contacts;return{contacts:function(t,e){if(!e)return t;var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter)}}),(function(t){return{deleteContact:function(e){return t(function(t){return function(e){e(_()),R.a.delete("contacts/"+t).then((function(){return e(C(t))})).catch((function(t){return e(v(t))}))}}(e))},onContactFetch:function(){return t((function(t){t(x()),R.a.get("contacts").then((function(e){return t(g(e.data))})).catch((function(e){return t(y(e))}))}))}}}))(K),W=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[],name:"",filter:""},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(F.jsxs)(k,{children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(B,{}),Object(F.jsx)("h1",{children:"Contacts"}),Object(F.jsx)(w,{}),Object(F.jsx)(U,{})]})}}]),n}(c.Component),$=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))},G=n(14),Q=n(31),V=n.n(Q),X=n(8),Y=n(3),tt=Object(d.c)([],(P={},Object(A.a)(P,h,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(A.a)(P,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(A.a)(P,g,(function(t,e){return e.payload})),P)),et=Object(d.c)("",Object(A.a)({},m,(function(t,e){return e.payload}))),nt=Object(d.c)(!1,(T={},Object(A.a)(T,O,(function(){return!0})),Object(A.a)(T,p,(function(){return!1})),Object(A.a)(T,h,(function(){return!1})),Object(A.a)(T,_,(function(){return!0})),Object(A.a)(T,v,(function(){return!1})),Object(A.a)(T,C,(function(){return!1})),Object(A.a)(T,x,(function(){return!0})),Object(A.a)(T,y,(function(){return!1})),Object(A.a)(T,g,(function(){return!1})),T)),ct=Object(Y.b)({items:tt,filter:et,loading:nt}),at=[].concat(Object(G.a)(Object(d.d)({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}})),[V.a]),rt=Object(d.a)({reducer:{contacts:ct},middleware:at,devTools:!1});o.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(f.a,{store:rt,children:Object(F.jsx)(W,{})})}),document.getElementById("root")),$()},7:function(t,e,n){t.exports={form_container:"ContactForm_form_container__3gEeg",add_button:"ContactForm_add_button__2czcI",input:"ContactForm_input__2L7ta",form_label:"ContactForm_form_label__2687K"}}},[[61,1,2]]]);
//# sourceMappingURL=main.399e5be9.chunk.js.map