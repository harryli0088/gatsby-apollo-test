"use strict";(self.webpackChunkgatsby_apollo_test=self.webpackChunkgatsby_apollo_test||[]).push([[691],{7213:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var i=n(7294),r=n(7345);var a=function(){return a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)};Object.create;Object.create;function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var o=n(3889);function c(e,t){for(var n,i=/\r\n|[\n\r]/g,r=1,a=t+1;(n=i.exec(e.body))&&n.index<t;)r+=1,a=t+1-(n.index+n[0].length);return{line:r,column:a}}function l(e){return u(e.source,c(e.source,e.start))}function u(e,t){var n=e.locationOffset.column-1,i=h(n)+e.body,r=t.line-1,a=e.locationOffset.line-1,s=t.line+a,o=1===t.line?n:0,c=t.column+o,l="".concat(e.name,":").concat(s,":").concat(c,"\n"),u=i.split(/\r\n|[\n\r]/g),f=u[r];if(f.length>120){for(var d=Math.floor(c/80),E=c%80,N=[],T=0;T<f.length;T+=80)N.push(f.slice(T,T+80));return l+p([["".concat(s),N[0]]].concat(N.slice(1,d+1).map((function(e){return["",e]})),[[" ",h(E-1)+"^"],["",N[d+1]]]))}return l+p([["".concat(s-1),u[r-1]],["".concat(s),f],["",h(c-1)+"^"],["".concat(s+1),u[r+1]]])}function p(e){var t=e.filter((function(e){e[0];return void 0!==e[1]})),n=Math.max.apply(Math,t.map((function(e){return e[0].length})));return t.map((function(e){var t,i=e[0],r=e[1];return h(n-(t=i).length)+t+(r?" | "+r:" |")})).join("\n")}function h(e){return Array(e+1).join(" ")}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function E(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){var t="function"==typeof Map?new Map:void 0;return T=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return v(e,arguments,y(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),I(i,e)},T(e)}function v(e,t,n){return v=m()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&I(r,n.prototype),r},v.apply(null,arguments)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(h,e);var t,n,i,r,a,p=(t=h,n=m(),function(){var e,i=y(t);if(n){var r=y(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return E(this,e)});function h(e,t,n,i,r,a,o){var l,u,f,d,T;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),T=p.call(this,e);var v,m=Array.isArray(t)?0!==t.length?t:void 0:t?[t]:void 0,I=n;!I&&m&&(I=null===(v=m[0].loc)||void 0===v?void 0:v.source);var y,_=i;!_&&m&&(_=m.reduce((function(e,t){return t.loc&&e.push(t.loc.start),e}),[])),_&&0===_.length&&(_=void 0),i&&n?y=i.map((function(e){return c(n,e)})):m&&(y=m.reduce((function(e,t){return t.loc&&e.push(c(t.loc.source,t.loc.start)),e}),[]));var O,A=o;if(null==A&&null!=a){var D=a.extensions;"object"==s(O=D)&&null!==O&&(A=D)}return Object.defineProperties(N(T),{name:{value:"GraphQLError"},message:{value:e,enumerable:!0,writable:!0},locations:{value:null!==(l=y)&&void 0!==l?l:void 0,enumerable:null!=y},path:{value:null!=r?r:void 0,enumerable:null!=r},nodes:{value:null!=m?m:void 0},source:{value:null!==(u=I)&&void 0!==u?u:void 0},positions:{value:null!==(f=_)&&void 0!==f?f:void 0},originalError:{value:a},extensions:{value:null!==(d=A)&&void 0!==d?d:void 0,enumerable:null!=A}}),null!=a&&a.stack?(Object.defineProperty(N(T),"stack",{value:a.stack,writable:!0,configurable:!0}),E(T)):(Error.captureStackTrace?Error.captureStackTrace(N(T),h):Object.defineProperty(N(T),"stack",{value:Error().stack,writable:!0,configurable:!0}),T)}return i=h,(r=[{key:"toString",value:function(){return function(e){var t=e.message;if(e.nodes)for(var n=0,i=e.nodes;n<i.length;n++){var r=i[n];r.loc&&(t+="\n\n"+l(r.loc))}else if(e.source&&e.locations)for(var a=0,s=e.locations;a<s.length;a++){var o=s[a];t+="\n\n"+u(e.source,o)}return t}(this)}},{key:o.YF,get:function(){return"Object"}}])&&d(i.prototype,r),a&&d(i,a),h}(T(Error));function O(e,t,n){return new _("Syntax Error: ".concat(n),void 0,e,[t])}var A=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),D=n(6205),k=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),x=n(8026),R=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),b=n(1708),C=function(){function e(e){var t=new D.WU(k.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==k.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=w(this,e)}while(e.kind===k.COMMENT);return e},e}();function S(e){return isNaN(e)?k.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function w(e,t){for(var n=e.source,i=n.body,r=i.length,a=t.end;a<r;){var s=i.charCodeAt(a),o=e.line,c=1+a-e.lineStart;switch(s){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++e.line,e.lineStart=a;continue;case 13:10===i.charCodeAt(a+1)?a+=2:++a,++e.line,e.lineStart=a;continue;case 33:return new D.WU(k.BANG,a,a+1,o,c,t);case 35:return L(n,a,o,c,t);case 36:return new D.WU(k.DOLLAR,a,a+1,o,c,t);case 38:return new D.WU(k.AMP,a,a+1,o,c,t);case 40:return new D.WU(k.PAREN_L,a,a+1,o,c,t);case 41:return new D.WU(k.PAREN_R,a,a+1,o,c,t);case 46:if(46===i.charCodeAt(a+1)&&46===i.charCodeAt(a+2))return new D.WU(k.SPREAD,a,a+3,o,c,t);break;case 58:return new D.WU(k.COLON,a,a+1,o,c,t);case 61:return new D.WU(k.EQUALS,a,a+1,o,c,t);case 64:return new D.WU(k.AT,a,a+1,o,c,t);case 91:return new D.WU(k.BRACKET_L,a,a+1,o,c,t);case 93:return new D.WU(k.BRACKET_R,a,a+1,o,c,t);case 123:return new D.WU(k.BRACE_L,a,a+1,o,c,t);case 124:return new D.WU(k.PIPE,a,a+1,o,c,t);case 125:return new D.WU(k.BRACE_R,a,a+1,o,c,t);case 34:return 34===i.charCodeAt(a+1)&&34===i.charCodeAt(a+2)?U(n,a,o,c,t,e):M(n,a,o,c,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return F(n,a,s,o,c,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return V(n,a,o,c,t)}throw O(n,a,g(s))}var l=e.line,u=1+a-e.lineStart;return new D.WU(k.EOF,r,r,l,u,t)}function g(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(S(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(S(e),".")}function L(e,t,n,i,r){var a,s=e.body,o=t;do{a=s.charCodeAt(++o)}while(!isNaN(a)&&(a>31||9===a));return new D.WU(k.COMMENT,t,o,n,i,r,s.slice(t+1,o))}function F(e,t,n,i,r,a){var s=e.body,o=n,c=t,l=!1;if(45===o&&(o=s.charCodeAt(++c)),48===o){if((o=s.charCodeAt(++c))>=48&&o<=57)throw O(e,c,"Invalid number, unexpected digit after 0: ".concat(S(o),"."))}else c=P(e,c,o),o=s.charCodeAt(c);if(46===o&&(l=!0,o=s.charCodeAt(++c),c=P(e,c,o),o=s.charCodeAt(c)),69!==o&&101!==o||(l=!0,43!==(o=s.charCodeAt(++c))&&45!==o||(o=s.charCodeAt(++c)),c=P(e,c,o),o=s.charCodeAt(c)),46===o||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(o))throw O(e,c,"Invalid number, expected digit but got: ".concat(S(o),"."));return new D.WU(l?k.FLOAT:k.INT,t,c,i,r,a,s.slice(t,c))}function P(e,t,n){var i=e.body,r=t,a=n;if(a>=48&&a<=57){do{a=i.charCodeAt(++r)}while(a>=48&&a<=57);return r}throw O(e,r,"Invalid number, expected digit but got: ".concat(S(a),"."))}function M(e,t,n,i,r){for(var a,s,o,c,l=e.body,u=t+1,p=u,h=0,f="";u<l.length&&!isNaN(h=l.charCodeAt(u))&&10!==h&&13!==h;){if(34===h)return f+=l.slice(p,u),new D.WU(k.STRING,t,u+1,n,i,r,f);if(h<32&&9!==h)throw O(e,u,"Invalid character within String: ".concat(S(h),"."));if(++u,92===h){switch(f+=l.slice(p,u-1),h=l.charCodeAt(u)){case 34:f+='"';break;case 47:f+="/";break;case 92:f+="\\";break;case 98:f+="\b";break;case 102:f+="\f";break;case 110:f+="\n";break;case 114:f+="\r";break;case 116:f+="\t";break;case 117:var d=(a=l.charCodeAt(u+1),s=l.charCodeAt(u+2),o=l.charCodeAt(u+3),c=l.charCodeAt(u+4),B(a)<<12|B(s)<<8|B(o)<<4|B(c));if(d<0){var E=l.slice(u+1,u+5);throw O(e,u,"Invalid character escape sequence: \\u".concat(E,"."))}f+=String.fromCharCode(d),u+=4;break;default:throw O(e,u,"Invalid character escape sequence: \\".concat(String.fromCharCode(h),"."))}p=++u}}throw O(e,u,"Unterminated string.")}function U(e,t,n,i,r,a){for(var s=e.body,o=t+3,c=o,l=0,u="";o<s.length&&!isNaN(l=s.charCodeAt(o));){if(34===l&&34===s.charCodeAt(o+1)&&34===s.charCodeAt(o+2))return u+=s.slice(c,o),new D.WU(k.BLOCK_STRING,t,o+3,n,i,r,(0,b.W7)(u));if(l<32&&9!==l&&10!==l&&13!==l)throw O(e,o,"Invalid character within String: ".concat(S(l),"."));10===l?(++o,++a.line,a.lineStart=o):13===l?(10===s.charCodeAt(o+1)?o+=2:++o,++a.line,a.lineStart=o):92===l&&34===s.charCodeAt(o+1)&&34===s.charCodeAt(o+2)&&34===s.charCodeAt(o+3)?(u+=s.slice(c,o)+'"""',c=o+=4):++o}throw O(e,o,"Unterminated string.")}function B(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function V(e,t,n,i,r){for(var a=e.body,s=a.length,o=t+1,c=0;o!==s&&!isNaN(c=a.charCodeAt(o))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++o;return new D.WU(k.NAME,t,o,n,i,r,a.slice(t,o))}var K=function(){function e(e,t){var n=(0,x.T)(e)?e:new x.H(e);this._lexer=new C(n),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(k.NAME);return{kind:A.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:A.DOCUMENT,definitions:this.many(k.SOF,this.parseDefinition,k.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(k.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(k.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(k.BRACE_L))return{kind:A.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek(k.NAME)&&(t=this.parseName()),{kind:A.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(k.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(k.PAREN_L,this.parseVariableDefinition,k.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:A.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(k.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(k.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(k.DOLLAR),{kind:A.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:A.SELECTION_SET,selections:this.many(k.BRACE_L,this.parseSelection,k.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(k.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,i=this.parseName();return this.expectOptionalToken(k.COLON)?(e=i,t=this.parseName()):t=i,{kind:A.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(k.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){var t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(k.PAREN_L,t,k.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(k.COLON),{kind:A.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:A.ARGUMENT,name:this.parseName(),value:(this.expectToken(k.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(k.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(k.NAME)?{kind:A.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:A.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:A.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:A.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case k.BRACKET_L:return this.parseList(e);case k.BRACE_L:return this.parseObject(e);case k.INT:return this._lexer.advance(),{kind:A.INT,value:t.value,loc:this.loc(t)};case k.FLOAT:return this._lexer.advance(),{kind:A.FLOAT,value:t.value,loc:this.loc(t)};case k.STRING:case k.BLOCK_STRING:return this.parseStringLiteral();case k.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:A.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:A.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:A.NULL,loc:this.loc(t)};default:return{kind:A.ENUM,value:t.value,loc:this.loc(t)}}case k.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:A.STRING,value:e.value,block:e.kind===k.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:A.LIST,values:this.any(k.BRACKET_L,(function(){return t.parseValueLiteral(e)}),k.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:A.OBJECT,fields:this.any(k.BRACE_L,(function(){return t.parseObjectField(e)}),k.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken(k.COLON),{kind:A.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(k.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(k.AT),{kind:A.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(k.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(k.BRACKET_R),e={kind:A.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(k.BANG)?{kind:A.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:A.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===k.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(k.STRING)||this.peek(k.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var n=this.parseDirectives(!0),i=this.many(k.BRACE_L,this.parseOperationTypeDefinition,k.BRACE_R);return{kind:A.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(k.COLON);var n=this.parseNamedType();return{kind:A.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),i=this.parseDirectives(!0);return{kind:A.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),a=this.parseFieldsDefinition();return{kind:A.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:a,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLImplementsInterfaces)){var t=[];this.expectOptionalToken(k.AMP);do{t.push(this.parseNamedType())}while(this.expectOptionalToken(k.AMP)||this.peek(k.NAME));return t}return this.delimitedMany(k.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek(k.BRACE_L)&&this._lexer.lookahead().kind===k.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(k.BRACE_L,this.parseFieldDefinition,k.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(k.COLON);var r=this.parseTypeReference(),a=this.parseDirectives(!0);return{kind:A.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:a,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(k.PAREN_L,this.parseInputValueDef,k.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(k.COLON);var i,r=this.parseTypeReference();this.expectOptionalToken(k.EQUALS)&&(i=this.parseValueLiteral(!0));var a=this.parseDirectives(!0);return{kind:A.INPUT_VALUE_DEFINITION,description:t,name:n,type:r,defaultValue:i,directives:a,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),a=this.parseFieldsDefinition();return{kind:A.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:a,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:A.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(k.EQUALS)?this.delimitedMany(k.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:A.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(k.BRACE_L,this.parseEnumValueDefinition,k.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseDirectives(!0);return{kind:A.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:A.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(k.BRACE_L,this.parseInputValueDef,k.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===k.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany(k.BRACE_L,this.parseOperationTypeDefinition,k.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:A.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:A.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:A.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:A.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:A.UNION_TYPE_EXTENSION,name:t,directives:n,types:i,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:A.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:A.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(k.AT);var n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var a=this.parseDirectiveLocations();return{kind:A.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:a,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany(k.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==R[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new D.Ye(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw O(this._lexer.source,t.start,"Expected ".concat(G(e),", found ").concat(j(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==k.NAME||t.value!==e)throw O(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(j(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===k.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!=e?e:this._lexer.token;return O(this._lexer.source,t.start,"Unexpected ".concat(j(t),"."))},t.any=function(e,t,n){this.expectToken(e);for(var i=[];!this.expectOptionalToken(n);)i.push(t.call(this));return i},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}return[]},t.many=function(e,t,n){this.expectToken(e);var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i},t.delimitedMany=function(e,t){this.expectOptionalToken(e);var n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n},e}();function j(e){var t=e.value;return G(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function G(e){return function(e){return e===k.BANG||e===k.DOLLAR||e===k.AMP||e===k.PAREN_L||e===k.PAREN_R||e===k.SPREAD||e===k.COLON||e===k.EQUALS||e===k.AT||e===k.BRACKET_L||e===k.BRACKET_R||e===k.BRACE_L||e===k.PIPE||e===k.BRACE_R}(e)?'"'.concat(e,'"'):e}var Y=new Map,W=new Map,J=!0,q=!1;function X(e){return e.replace(/[\s,]+/g," ").trim()}function Q(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var i=e.name.value,r=X((s=e.loc).source.body.substring(s.start,s.end)),a=W.get(i);a&&!a.has(r)?J&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):a||W.set(i,a=new Set),a.add(r),t.has(r)||(t.add(r),n.push(e))}else n.push(e);var s})),a(a({},e),{definitions:n})}function H(e){var t=X(e);if(!Y.has(t)){var n=function(e,t){return new K(e,t).parseDocument()}(e,{experimentalFragmentVariables:q});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");Y.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var i=e[n];i&&"object"==typeof i&&t.add(i)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(Q(n)))}return Y.get(t)}function z(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var i=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?i+=t.loc.source.body:i+=t,i+=e[n+1]})),H(i)}var $,Z=z,ee=function(){Y.clear(),W.clear()},te=function(){J=!1},ne=function(){q=!0},ie=function(){q=!1};($=z||(z={})).gql=Z,$.resetCaches=ee,$.disableFragmentWarnings=te,$.enableExperimentalFragmentVariables=ne,$.disableExperimentalFragmentVariables=ie,z.default=z;var re,ae,se,oe=z(re||(ae=['\n  query {\n    getCityByName(name: "New York") {\n      name\n      weather {\n        clouds {\n          humidity\n        }\n        summary {\n          title,\n          description,\n          icon,\n        }\n        temperature {\n          actual\n        }\n        wind {\n          speed\n        }\n      }\n    }\n  }\n'],se||(se=ae.slice(0)),ae.raw=se,re=ae)),ce={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"},le={marginTop:0,marginBottom:64,maxWidth:320},ue={marginBottom:48},pe=(0,r.l)((function(e){var t=(0,i.useState)(null),n=t[0],r=t[1];return(0,i.useEffect)((function(){e.client.query({query:oe}).then((function(e){if(!e.data)throw Error(e.errors[0].message);return e.data})).then((function(e){return r(e.getCityByName)})).catch(r)}),[]),console.log(n),i.createElement("main",{style:ce},i.createElement("title",null,"Home Page"),i.createElement("h1",{style:le},"Gatsby v3, Apollo v3 GraphQL Test"),i.createElement("p",{style:ue},"I've been having a lot of trouble getting Gatsby v3 and Apollo v3 to work together. This is a test site for me to iron out the deploy issues."),i.createElement("p",null,"This app using a free ",i.createElement("a",{href:"https://graphql-weather-api.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"weather GraphQL API")," as a proof-of-concept."),n&&i.createElement(he,{data:n}),i.createElement("br",null),i.createElement("br",null),i.createElement("img",{alt:"Gatsby G Logo",src:"data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"}))})),he=function(e){return e.data instanceof Error?i.createElement("section",null,i.createElement("b",null,"Error: ")," ",e.data.message):i.createElement("section",null,i.createElement("h3",null,e.data.name),i.createElement("p",null,i.createElement("b",null,"Humidity: ")," ",e.data.weather.clouds.humidity),i.createElement("p",null,i.createElement("b",null,"Summary: ")," ",e.data.weather.summary.title),i.createElement("p",null,i.createElement("b",null,"Temperature: ")," ",e.data.weather.temperature.actual),i.createElement("p",null,i.createElement("b",null,"Wind: ")," ",e.data.weather.wind.speed))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-82bc54ba840606488aa2.js.map