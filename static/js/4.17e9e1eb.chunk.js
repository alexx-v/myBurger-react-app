(this.webpackJsonpmyburger=this.webpackJsonpmyburger||[]).push([[4],{100:function(e,t,n){"use strict";n.r(t);var a=n(22),i=n(1),r=n(10),u=n(11),l=n(13),o=n(12),c=n(0),s=n.n(c),h=n(16),d=n(4),p=n(96),m=n.n(p),g=n(17),v=n(93),f=n(94),b=n(32),E=n(25),j=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var u=arguments.length,l=new Array(u),o=0;o<u;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var r=Object(i.a)(Object(i.a)({},e.state.controls),{},Object(a.a)({},n,Object(i.a)(Object(i.a)({},e.state.controls[n]),{},{value:t.target.value,valid:Object(v.a)(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:r})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return s.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(a=s.a.createElement(E.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null,this.props.error.message));var r=null;return this.props.isAuthenticated&&(r=s.a.createElement(d.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:m.a.Auth},r,i,s.a.createElement("form",{onSubmit:this.submitHandler},a,s.a.createElement(b.a,{btnType:"Success"},"SUBMIT")),s.a.createElement(b.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"Switch to ",this.state.isSignup?"SIGN IN":"SIGN UP"))}}]),n}(c.Component);t.default=Object(h.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(g.b(t,n,a))},onSetAuthRedirectPath:function(){return e(g.j("/"))}}}))(j)},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},94:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(95),u=n.n(r);t.a=function(e){var t=null,n=[u.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(u.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:u.a.Input},i.a.createElement("label",{className:u.a.Label},e.label),t)}},95:function(e,t,n){e.exports={Input:"Input_Input__3yG8h",Label:"Input_Label__31xmm",InputElement:"Input_InputElement__3J30Z",Invalid:"Input_Invalid__I3wgN"}},96:function(e,t,n){e.exports={Auth:"Auth_Auth__1c6SW"}}}]);
//# sourceMappingURL=4.17e9e1eb.chunk.js.map