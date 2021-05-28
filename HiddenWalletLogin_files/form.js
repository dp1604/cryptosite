!function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(t){var i,r=e(this),a=r.selector||"",o=(new Date).getTime(),s=[],l=arguments[0],u=arguments[1],c="string"==typeof l,d=[].slice.call(arguments,1);return r.each(function(){var f,p,m,g,h,v,b,y,x,k,E,w,C,V,R,S,F,A,T,D=e(this),O=this,j=[],$=!1;T={initialize:function(){T.get.settings(),c?(void 0===A&&T.instantiate(),T.invoke(l)):(void 0!==A&&A.invoke("destroy"),T.verbose("Initializing form validation",D,y),T.bindEvents(),T.set.defaults(),T.instantiate())},instantiate:function(){T.verbose("Storing instance of module",T),A=T,D.data(S,T)},destroy:function(){T.verbose("Destroying previous module",A),T.removeEvents(),D.removeData(S)},refresh:function(){T.verbose("Refreshing selector cache"),f=D.find(E.field),p=D.find(E.group),m=D.find(E.message),g=D.find(E.prompt),h=D.find(E.submit),v=D.find(E.clear),b=D.find(E.reset)},submit:function(){T.verbose("Submitting form",D),D.submit()},attachEvents:function(t,n){n=n||"submit",e(t).on("click"+F,function(e){T[n](),e.preventDefault()})},bindEvents:function(){T.verbose("Attaching form events"),D.on("submit"+F,T.validate.form).on("blur"+F,E.field,T.event.field.blur).on("click"+F,E.submit,T.submit).on("click"+F,E.reset,T.reset).on("click"+F,E.clear,T.clear),y.keyboardShortcuts&&D.on("keydown"+F,E.field,T.event.field.keydown),f.each(function(){var t=e(this),n=t.prop("type"),i=T.get.changeEvent(n,t);e(this).on(i+F,T.event.field.change)})},clear:function(){f.each(function(){var t=e(this),n=t.parent(),i=t.closest(p),r=i.find(E.prompt),a=t.data(k.defaultValue)||"",o=n.is(E.uiCheckbox),s=n.is(E.uiDropdown);i.hasClass(w.error)&&(T.verbose("Resetting error on field",i),i.removeClass(w.error),r.remove()),s?(T.verbose("Resetting dropdown value",n,a),n.dropdown("clear")):o?t.prop("checked",!1):(T.verbose("Resetting field value",t,a),t.val(""))})},reset:function(){f.each(function(){var t=e(this),n=t.parent(),i=t.closest(p),r=i.find(E.prompt),a=t.data(k.defaultValue),o=n.is(E.uiCheckbox),s=n.is(E.uiDropdown),l=i.hasClass(w.error);void 0!==a&&(l&&(T.verbose("Resetting error on field",i),i.removeClass(w.error),r.remove()),s?(T.verbose("Resetting dropdown value",n,a),n.dropdown("restore defaults")):o?(T.verbose("Resetting checkbox value",n,a),t.prop("checked",a)):(T.verbose("Resetting field value",t,a),t.val(a)))})},determine:{isValid:function(){var t=!0;return e.each(x,function(e,n){T.validate.field(n,e,!0)||(t=!1)}),t}},is:{bracketedRule:function(e){return e.type&&e.type.match(y.regExp.bracket)},shorthandFields:function(e){var t=Object.keys(e),n=e[t[0]];return T.is.shorthandRules(n)},shorthandRules:function(t){return"string"==typeof t||e.isArray(t)},empty:function(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):T.is.blank(e))},blank:function(t){return""===e.trim(t.val())},valid:function(t){var n=!0;return t?(T.verbose("Checking if field is valid",t),T.validate.field(x[t],t,!1)):(T.verbose("Checking if form is valid"),e.each(x,function(e,t){T.is.valid(e)||(n=!1)}),n)}},removeEvents:function(){D.off(F),f.off(F),h.off(F),f.off(F)},event:{field:{keydown:function(t){var n=e(this),i=t.which,r=n.is(E.input),a=n.is(E.checkbox),o=n.closest(E.uiDropdown).length>0,s={enter:13,escape:27};i==s.escape&&(T.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||i!=s.enter||!r||o||a||($||(n.one("keyup"+F,T.event.field.keyup),T.submit(),T.debug("Enter pressed on input submitting form")),$=!0)},keyup:function(){$=!1},blur:function(t){var n=e(this),i=n.closest(p),r=T.get.validation(n);i.hasClass(w.error)?(T.debug("Revalidating field",n,r),r&&T.validate.field(r)):"blur"!=y.on&&"change"!=y.on||r&&T.validate.field(r)},change:function(t){var n=e(this),i=n.closest(p),r=T.get.validation(n);r&&("change"==y.on||i.hasClass(w.error)&&y.revalidate)&&(clearTimeout(T.timer),T.timer=setTimeout(function(){T.debug("Revalidating field",n,T.get.validation(n)),T.validate.field(r)},y.delay))}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!T.is.bracketedRule(e))&&(void 0!==e.value?e.value:e.type.match(y.regExp.bracket)[1]+"")},ruleName:function(e){return T.is.bracketedRule(e)?e.type.replace(e.type.match(y.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":T.get.inputEvent()},inputEvent:function(){return void 0!==n.createElement("input").oninput?"input":void 0!==n.createElement("input").onpropertychange?"propertychange":"keyup"},fieldsFromShorthand:function(t){var n={};return e.each(t,function(t,i){"string"==typeof i&&(i=[i]),n[t]={rules:[]},e.each(i,function(e,i){n[t].rules.push({type:i})})}),n},prompt:function(e,t){var n,i,r,a=T.get.ruleName(e),o=T.get.ancillaryValue(e),s=e.prompt||y.prompt[a]||y.text.unspecifiedRule,l=-1!==s.search("{value}"),u=-1!==s.search("{name}");return(u||l)&&(i=T.get.field(t.identifier)),l&&(s=s.replace("{value}",i.val())),u&&(n=i.closest(E.group).find("label").eq(0),r=1==n.length?n.text():i.prop("placeholder")||y.text.unspecifiedField,s=s.replace("{name}",r)),s=s.replace("{identifier}",t.identifier),s=s.replace("{ruleValue}",o),e.prompt||T.verbose("Using default validation prompt for type",s,a),s},settings:function(){if(e.isPlainObject(t)){var n=Object.keys(t),i=n.length>0&&(void 0!==t[n[0]].identifier&&void 0!==t[n[0]].rules);i?(y=e.extend(!0,{},e.fn.form.settings,u),x=e.extend({},e.fn.form.settings.defaults,t),T.error(y.error.oldSyntax,O),T.verbose("Extending settings from legacy parameters",x,y)):(t.fields&&T.is.shorthandFields(t.fields)&&(t.fields=T.get.fieldsFromShorthand(t.fields)),y=e.extend(!0,{},e.fn.form.settings,t),x=e.extend({},e.fn.form.settings.defaults,y.fields),T.verbose("Extending settings",x,y))}else y=e.fn.form.settings,x=e.fn.form.settings.defaults,T.verbose("Using default form validation",x,y);R=y.namespace,k=y.metadata,E=y.selector,w=y.className,C=y.regExp,V=y.error,S="module-"+R,F="."+R,A=D.data(S),T.refresh()},field:function(t){return T.verbose("Finding field with identifier",t),t=T.escape.string(t),f.filter("#"+t).length>0?f.filter("#"+t):f.filter('[name="'+t+'"]').length>0?f.filter('[name="'+t+'"]'):f.filter('[name="'+t+'[]"]').length>0?f.filter('[name="'+t+'[]"]'):f.filter("[data-"+k.validate+'="'+t+'"]').length>0?f.filter("[data-"+k.validate+'="'+t+'"]'):e("<input/>")},fields:function(t){var n=e();return e.each(t,function(e,t){n=n.add(T.get.field(t))}),n},validation:function(t){var n,i;return!!x&&(e.each(x,function(e,r){i=r.identifier||e,T.get.field(i)[0]==t[0]&&(r.identifier=i,n=r)}),n||!1)},value:function(e){var t,n=[];return n.push(e),t=T.get.values.call(O,n),t[e]},values:function(t){var n=e.isArray(t)?T.get.fields(t):f,i={};return n.each(function(t,n){var r=e(n),a=(r.prop("type"),r.prop("name")),o=r.val(),s=r.is(E.checkbox),l=r.is(E.radio),u=-1!==a.indexOf("[]"),c=!!s&&r.is(":checked");a&&(u?(a=a.replace("[]",""),i[a]||(i[a]=[]),s?c?i[a].push(o||!0):i[a].push(!1):i[a].push(o)):l?void 0===i[a]&&(i[a]=!!c):i[a]=s?!!c&&(o||!0):o)}),i}},has:{field:function(e){return T.verbose("Checking for existence of a field with identifier",e),e=T.escape.string(e),"string"!=typeof e&&T.error(V.identifier,e),f.filter("#"+e).length>0||(f.filter('[name="'+e+'"]').length>0||f.filter("[data-"+k.validate+'="'+e+'"]').length>0)}},escape:{string:function(e){return e=String(e),e.replace(C.escape,"\\$&")}},add:{rule:function(e,t){T.add.field(e,t)},field:function(t,n){var i={};T.is.shorthandRules(n)?(n=e.isArray(n)?n:[n],i[t]={rules:[]},e.each(n,function(e,n){i[t].rules.push({type:n})})):i[t]=n,x=e.extend({},x,i),T.debug("Adding rules",i,x)},fields:function(t){var n;n=t&&T.is.shorthandFields(t)?T.get.fieldsFromShorthand(t):t,x=e.extend({},x,n)},prompt:function(t,n){var i=T.get.field(t),r=i.closest(p),a=r.children(E.prompt),o=0!==a.length;n="string"==typeof n?[n]:n,T.verbose("Adding field error state",t),r.addClass(w.error),y.inline&&(o||(a=y.templates.prompt(n),a.appendTo(r)),a.html(n[0]),o?T.verbose("Inline errors are disabled, no inline error added",t):y.transition&&void 0!==e.fn.transition&&D.transition("is supported")?(T.verbose("Displaying error with css transition",y.transition),a.transition(y.transition+" in",y.duration)):(T.verbose("Displaying error with fallback javascript animation"),a.fadeIn(y.duration)))},errors:function(e){T.debug("Adding form error messages",e),T.set.error(),m.html(y.templates.error(e))}},remove:{rule:function(t,n){var i=e.isArray(n)?n:[n];if(void 0==n)return T.debug("Removed all rules"),void(x[t].rules=[]);void 0!=x[t]&&e.isArray(x[t].rules)&&e.each(x[t].rules,function(e,n){-1!==i.indexOf(n.type)&&(T.debug("Removed rule",n.type),x[t].rules.splice(e,1))})},field:function(t){var n=e.isArray(t)?t:[t];e.each(n,function(e,t){T.remove.rule(t)})},rules:function(t,n){e.isArray(t)?e.each(fields,function(e,t){T.remove.rule(t,n)}):T.remove.rule(t,n)},fields:function(e){T.remove.field(e)},prompt:function(t){var n=T.get.field(t),i=n.closest(p),r=i.children(E.prompt);i.removeClass(w.error),y.inline&&r.is(":visible")&&(T.verbose("Removing prompt for field",t),y.transition&&void 0!==e.fn.transition&&D.transition("is supported")?r.transition(y.transition+" out",y.duration,function(){r.remove()}):r.fadeOut(y.duration,function(){r.remove()}))}},set:{success:function(){D.removeClass(w.error).addClass(w.success)},defaults:function(){f.each(function(){var t=e(this),n=t.filter(E.checkbox).length>0,i=n?t.is(":checked"):t.val();t.data(k.defaultValue,i)})},error:function(){D.removeClass(w.success).addClass(w.error)},value:function(e,t){var n={};return n[e]=t,T.set.values.call(O,n)},values:function(t){e.isEmptyObject(t)||e.each(t,function(t,n){var i,r=T.get.field(t),a=r.parent(),o=e.isArray(n),s=a.is(E.uiCheckbox),l=a.is(E.uiDropdown),u=r.is(E.radio)&&s,c=r.length>0;c&&(o&&s?(T.verbose("Selecting multiple",n,r),a.checkbox("uncheck"),e.each(n,function(e,t){i=r.filter('[value="'+t+'"]'),a=i.parent(),i.length>0&&a.checkbox("check")})):u?(T.verbose("Selecting radio value",n,r),r.filter('[value="'+n+'"]').parent(E.uiCheckbox).checkbox("check")):s?(T.verbose("Setting checkbox value",n,a),!0===n?a.checkbox("check"):a.checkbox("uncheck")):l?(T.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):(T.verbose("Setting field value",n,r),r.val(n)))})}},validate:{form:function(e,t){var n=T.get.values();if($)return!1;if(j=[],T.determine.isValid()){if(T.debug("Form has no validation errors, submitting"),T.set.success(),!0!==t)return y.onSuccess.call(O,e,n)}else if(T.debug("Form has errors"),T.set.error(),y.inline||T.add.errors(j),void 0!==D.data("moduleApi")&&e.stopImmediatePropagation(),!0!==t)return y.onFailure.call(O,j,n)},field:function(t,n,i){i=void 0===i||i,"string"==typeof t&&(T.verbose("Validating field",t),n=t,t=x[t]);var r=t.identifier||n,a=T.get.field(r),o=!!t.depends&&T.get.field(t.depends),s=!0,l=[];return t.identifier||(T.debug("Using field name as identifier",r),t.identifier=r),a.prop("disabled")?(T.debug("Field is disabled. Skipping",r),s=!0):t.optional&&T.is.blank(a)?(T.debug("Field is optional and blank. Skipping",r),s=!0):t.depends&&T.is.empty(o)?(T.debug("Field depends on another value that is not present or empty. Skipping",o),s=!0):void 0!==t.rules&&e.each(t.rules,function(e,n){T.has.field(r)&&!T.validate.rule(t,n)&&(T.debug("Field is invalid",r,n.type),l.push(T.get.prompt(n,t)),s=!1)}),s?(i&&(T.remove.prompt(r,l),y.onValid.call(a)),!0):(i&&(j=j.concat(l),T.add.prompt(r,l),y.onInvalid.call(a,l)),!1)},rule:function(t,n){var i=T.get.field(t.identifier),r=(n.type,i.val()),a=T.get.ancillaryValue(n),o=T.get.ruleName(n),s=y.rules[o];return e.isFunction(s)?(r=void 0===r||""===r||null===r?"":e.trim(r+""),s.call(i,r,a)):void T.error(V.noRule,o)}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===n)return y[t];y[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,T,t);else{if(void 0===n)return T[t];T[t]=n}},debug:function(){!y.silent&&y.debug&&(y.performance?T.performance.log(arguments):(T.debug=Function.prototype.bind.call(console.info,console,y.name+":"),T.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?T.performance.log(arguments):(T.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),T.verbose.apply(console,arguments)))},error:function(){y.silent||(T.error=Function.prototype.bind.call(console.error,console,y.name+":"),T.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;y.performance&&(t=(new Date).getTime(),i=o||t,n=t-i,o=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":n})),clearTimeout(T.performance.timer),T.performance.timer=setTimeout(T.performance.display,500)},display:function(){var t=y.name+":",n=0;o=!1,clearTimeout(T.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),r.length>1&&(t+=" ("+r.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,r){var a,o,s,l=A;return n=n||d,r=O||r,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var r=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[r])&&n!=a)l=l[r];else{if(void 0!==l[r])return o=l[r],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(o=l[i],!1);l=l[i]}})),e.isFunction(o)?s=o.apply(r,n):void 0!==o&&(s=o),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),o}},T.initialize()}),void 0!==i?i:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} cannot contain "{ruleValue}"',containExactly:'{name} cannot contain exactly "{ruleValue}"',doesntContain:'{name} must contain  "{ruleValue}"',doesntContainExactly:'{name} must contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t){return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])}},rules:{empty:function(t){return!(void 0===t||""===t||e.isArray(t)&&0===t.length)},checked:function(){return e(this).filter(":checked").length>0},email:function(t){return e.fn.form.settings.regExp.email.test(t)},url:function(t){return e.fn.form.settings.regExp.url.test(t)},regExp:function(t,n){if(n instanceof RegExp)return t.match(n);var i,r=n.match(e.fn.form.settings.regExp.flags);return r&&(n=r.length>=2?r[1]:n,i=r.length>=3?r[2]:""),t.match(new RegExp(n,i))},integer:function(t,n){var i,r,a,o=e.fn.form.settings.regExp.integer;return n&&-1===["",".."].indexOf(n)&&(-1==n.indexOf("..")?o.test(n)&&(i=r=n-0):(a=n.split("..",2),o.test(a[0])&&(i=a[0]-0),o.test(a[1])&&(r=a[1]-0))),o.test(t)&&(void 0===i||t>=i)&&(void 0===r||t<=r)},decimal:function(t){return e.fn.form.settings.regExp.decimal.test(t)},number:function(t){return e.fn.form.settings.regExp.number.test(t)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},contains:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n,"i"))},containsExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n))},doesntContain:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n,"i"))},doesntContainExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n))},minLength:function(e,t){return void 0!==e&&e.length>=t},length:function(e,t){return void 0!==e&&e.length>=t},exactLength:function(e,t){return void 0!==e&&e.length==t},maxLength:function(e,t){return void 0!==e&&e.length<=t},match:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),void 0!==i&&t.toString()==i.toString()},different:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),void 0!==i&&t.toString()!==i.toString()},creditCard:function(t,n){var i,r,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},o={},s=!1,l="string"==typeof n&&n.split(",");if("string"==typeof t&&0!==t.length){if(t=t.replace(/[\-]/g,""),l&&(e.each(l,function(n,i){(r=a[i])&&(o={length:-1!==e.inArray(t.length,r.length),pattern:-1!==t.search(r.pattern)},o.length&&o.pattern&&(s=!0))}),!s))return!1;if(i={number:-1!==e.inArray(t.length,a.unionPay.length),pattern:-1!==t.search(a.unionPay.pattern)},i.number&&i.pattern)return!0;for(var u=t.length,c=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],f=0;u--;)f+=d[c][parseInt(t.charAt(u),10)],c^=1;return f%10==0&&f>0}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document);