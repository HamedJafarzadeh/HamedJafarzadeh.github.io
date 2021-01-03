(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{310:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(296),c=function(){for(var t=arguments,e={},o=0,r=arguments.length;o<r;++o){var u=t[o];if(u)for(var a in u)u.hasOwnProperty(a)&&u[a]&&("[object Object]"!==Object.prototype.toString.call(u[a])?e[a]=u[a]:e[a]=c(e[a],u[a]))}return e},l={full:n.DateTime.DATETIME_FULL,fulls:n.DateTime.DATETIME_FULL_WITH_SECONDS,huge:n.DateTime.DATETIME_HUGE,huges:n.DateTime.DATETIME_HUGE_WITH_SECONDS,med:n.DateTime.DATETIME_MED,meds:n.DateTime.DATETIME_MED_WITH_SECONDS,short:n.DateTime.DATETIME_SHORT,shorts:n.DateTime.DATETIME_SHORT_WITH_SECONDS,date_full:n.DateTime.DATE_FULL,date_huge:n.DateTime.DATE_HUGE,date_med:n.DateTime.DATE_MED,date_medd:n.DateTime.DATE_MED_WITH_WEEKDAY,date_short:n.DateTime.DATE_SHORT,time24:n.DateTime.TIME_24_SIMPLE,time24longoffset:n.DateTime.TIME_24_WITH_LONG_OFFSET,time24s:n.DateTime.TIME_24_WITH_SECONDS,time:n.DateTime.TIME_SIMPLE,times:n.DateTime.TIME_WITH_SECONDS},f={relative:{format:"relative"},server:{zone:"utc",format:"iso"},client:{zone:"local",format:"med"},inputdate:{zone:"client",format:"yyyy-MM-dd"}};Object.keys(l).forEach((function(t){f[t]={format:l[t]}}));var m={templates:{},input:{zone:"utc",format:"iso"},output:{zone:"local",format:{year:"numeric",month:"long",day:"numeric"},locale:null,relative:{round:!0,unit:null}},parse:!1};var d={vueluxon:function(t){return function(e,a,i){if(e&&"object"==typeof e){if(a=e,!e.value)throw"The first parameter should be a string, or the object should contain a `value` property";e=e.value}return"string"==typeof a&&(a={output:{format:a}}),function(t,e){if("object"!=typeof e.input)throw"`input` is not an object, but: "+e.input;if("object"!=typeof e.output)throw"`output` is not an object, but: "+e.output;var o=function(t,e,o){if(!t)return"never";var r=t,u=e,a=o;switch(u.toLowerCase()){case"sql":return n.DateTime.fromSQL(r,{zone:a});case"iso":return n.DateTime.fromISO(r,{zone:a});case"http":return n.DateTime.fromHTTP(r,{zone:a});case"jsdate":return n.DateTime.fromJSDate(r,{zone:a});case"rfc2822":return n.DateTime.fromRFC2822(r,{zone:a});case"millis":return n.DateTime.fromMillis(r,{zone:a});case"seconds":case"unix":return n.DateTime.fromSeconds(r,{zone:a});default:return n.DateTime.fromFormat(r,u,{zone:a})}}(t,e.input.format,e.input.zone);if(0==o.isValid)throw o.invalidReason;var r,c=t,u=e.output.format,a=e.output.zone,i=(r=e.output.locale?e.output.locale:null)&&"locale"!=r&&"local"!=r?r:null;if("never"==o)return null;if(e.parse&&(o=e.parse.call(o)),o=(o="locale"!=a&&"local"!=a?o.setZone(a):o.setZone("local")).setLocale(i),"object"==typeof u)return o.toLocaleString(u);switch(u.toLowerCase()){case"relative":return o.toRelative(e.output.relative);case"sql":return o.toSQL(c);case"iso":return o.toISO(c);case"http":return o.toHTTP(c);case"jsdate":return o.toJSDate(c);case"rfc":case"rfc2822":return o.toRFC2822(c);case"millis":return o.toMillis(c);case"unix":case"seconds":return o.toSeconds(c);default:return o.toFormat(u)}}(e,function(t){if("object"!=typeof t)throw"formatSettings.js: `settings` is not an object";var e=c(f,t.templates);if("string"==typeof t.input){var u=t.input.toLowerCase();e[u]?t.input=e[u]:t.input={format:t.input}}if("string"==typeof t.output){var a=t.output.toLowerCase();e[a]?t.output=e[a]:t.output={format:t.output}}t.relative&&(t.output.relative=t.relative),t.locale&&(t.output.locale=t.locale);var i=function(t){if("object"==typeof t)return t;var o=t.toLowerCase();return e[o]?e[o].format:t},o=function(t){var o=t.toLowerCase();return e[o]?e[o].zone:t};return(t=c(m,t)).input.format=i(t.input.format),t.output.format=i(t.output.format),t.input.zone=o(t.input.zone),t.output.zone=o(t.output.zone),t.output.relative=function(t){if("object"==typeof t)return t;var o=t.toLowerCase();return e[o]?e[o].relative:t}(t.output.relative),t}(c(t,a,i)))}},install:function(t,e){var o=this.vueluxon(e),r=e&&e.methodName?e.methodName:"$luxon";t.prototype[r]=o,t.filter("luxon",(function(){return"string"==typeof arguments[1]?o(arguments[0],arguments[2],{output:{format:arguments[1]}}):o(arguments[0],arguments[1])})),t.filter("luxonRelative",(function(){return o(arguments[0],arguments[2],{output:{format:"relative",relative:arguments[1]}})}))}};r.default.use(d);var v=r.default.extend({}),T=o(59),component=Object(T.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex ",staticStyle:{"margin-top":"0","min-height":"90vh"}},[o("div",{staticClass:"container-fluid no-gutters my-auto"},[o("div",{staticClass:"container-fluid",staticStyle:{"max-width":"65rem"}},[o("div",{staticClass:"row text-center justify-content-center mt-5"},[o("div",{staticClass:"card"},[o("b-row",{staticClass:"no-gutters"},[o("div",{staticClass:"col-sm-3"},[o("img",{staticClass:"card-img",attrs:{src:"imgs/blogPicture.jpg"}})]),t._v(" "),o("div",{staticClass:"col-sm-9 my-auto"},[o("div",{staticClass:"card-body "},[o("h5",{staticClass:"card-title text-left"},[t._v("Welcome 😍")]),t._v(" "),o("hr"),t._v(" "),o("p",{staticClass:"card-text my-auto",staticStyle:{"font-size":"min(1.5vw,15px)"},attrs:{align:"justify"}},[t._v("\n                    My name is Hamed. I am computer and electronics engineer with over 5 years of software and hardware\n                    programming\n                    experiences in industry and academic projects. "),o("br"),t._v(" Recently I watched the Big Bang theory series\n                    and I realized how much I have in common with Sheldon 🤓\n                    You know why? I started programming at age of 11 👶 and I released a serious software at age of 15\n                    😅, my life is all around computers, electronics and sciences 😂\n                    I also feel deeply connected with Robots 🤖\n                  ")])])])])],1)])]),t._v(" "),o("div",{staticClass:"row mt-4 justify-content-center text-center",staticStyle:{"font-size":"xx-large"}},[o("b-col",{staticClass:"col-5"},[o("b-row",[o("b-col",[o("a",{attrs:{href:"https://github.com/HamedJafarzadeh"}},[o("fa",{staticClass:"navicon",attrs:{icon:["fab","github"]}})],1)]),t._v(" "),o("b-col",[o("a",{attrs:{href:"https://www.linkedin.com/in/hjafarzadeh/"}},[o("fa",{staticClass:"navicon",attrs:{icon:["fab","linkedin"]}})],1)]),t._v(" "),o("b-col",[o("a",{attrs:{href:"https://t.me/hamedjafarzadeh"}},[o("fa",{staticClass:"navicon",attrs:{icon:["fab","telegram"]}})],1)]),t._v(" "),o("b-col",[o("a",{attrs:{href:"https://twitter.com/HJafarzadeh511"}},[o("fa",{staticClass:"navicon",attrs:{icon:["fab","twitter"]}})],1)]),t._v(" "),o("b-col",[o("a",{attrs:{href:"https://www.instagram.com/hamedjafarzadeh/"}},[o("fa",{staticClass:"navicon",attrs:{icon:["fab","instagram"]}})],1)])],1)],1)],1),t._v(" "),o("b-row",[o("b-col",{staticClass:"text-center mt-2 mb-2 fixed-bottom",staticStyle:{"font-size":"small"}},[t._v("\n          Built with NuxtJS framework\n        ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);