(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{271:function(t,e,c){var content=c(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(56).default)("e6459b78",content,!0,{sourceMap:!1})},275:function(t,e,c){"use strict";c(271)},276:function(t,e,c){var o=c(55)(!1);o.push([t.i,".ProjContent[data-v-c5b8cce2]{padding:.5em 1em}.fade-enter-active[data-v-c5b8cce2],.fade-leave-active[data-v-c5b8cce2]{transition:opacity .5s}.fade-enter[data-v-c5b8cce2],.fade-leave-to[data-v-c5b8cce2]{opacity:0}#titleCol[data-v-c5b8cce2]{transition:color .1s}#titleCol[data-v-c5b8cce2]:hover{color:#559953;cursor:pointer}",""]),t.exports=o},282:function(t,e,c){"use strict";c.r(e);var o={name:"project-item",props:{proj_title:String,proj_role:String,proj_date:String},methods:{},data:function(){return{showDesc:!1}}},n=(c(275),c(62)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("b-row",{attrs:{id:"titleCol"},on:{click:function(e){t.showDesc=!t.showDesc}}},[c("b-col",{attrs:{cols:"10"}},[c("h6",{staticStyle:{"font-weight":"bold",display:"inline"}},[c("fa",{attrs:{icon:"angle-right"}}),t._v("\n        "+t._s(t.proj_title)+"\n      ")],1),t._v("\n      | "+t._s(t.proj_role)+"\n    ")]),t._v(" "),c("b-col",{attrs:{cols:"2"}},[c("fa",{attrs:{icon:"calendar"}}),t._v("\n      "+t._s(t.proj_date)+"\n    ")],1),t._v(" "),c("hr")],1),t._v(" "),c("transition",{attrs:{name:"fade"}},[t.showDesc?c("div",{staticClass:"ProjContent"},[t._t("default")],2):t._e()]),t._v(" "),c("hr")],1)}),[],!1,null,"c5b8cce2",null);e.default=component.exports}}]);