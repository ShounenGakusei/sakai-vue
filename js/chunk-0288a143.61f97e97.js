(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0288a143"],{"6d66":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"grid"},l={class:"col-12"},u={class:"card"},a=Object(c["j"])("h5",null,"Tree",-1),o={class:"col-12"},i={class:"card"},s=Object(c["j"])("h5",null,"TreeTable",-1),d=Object(c["m"])(" FileSystem ");function b(e,t,n,b,j,f){var T=Object(c["H"])("Tree"),h=Object(c["H"])("Column"),O=Object(c["H"])("TreeTable");return Object(c["z"])(),Object(c["i"])("div",r,[Object(c["j"])("div",l,[Object(c["j"])("div",u,[a,Object(c["n"])(T,{value:j.treeValue,selectionMode:"checkbox",selectionKeys:j.selectedTreeValue,"onUpdate:selectionKeys":t[0]||(t[0]=function(e){return j.selectedTreeValue=e})},null,8,["value","selectionKeys"])])]),Object(c["j"])("div",o,[Object(c["j"])("div",i,[s,Object(c["n"])(O,{value:j.treeTableValue,selectionMode:"checkbox",selectionKeys:j.selectedTreeTableValue,"onUpdate:selectionKeys":t[1]||(t[1]=function(e){return j.selectedTreeTableValue=e})},{header:Object(c["R"])((function(){return[d]})),default:Object(c["R"])((function(){return[Object(c["n"])(h,{field:"name",header:"Name",expander:!0}),Object(c["n"])(h,{field:"size",header:"Size"}),Object(c["n"])(h,{field:"type",header:"Type"})]})),_:1},8,["value","selectionKeys"])])])])}var j=n("82f4"),f={data:function(){return{treeValue:null,selectedTreeValue:null,treeTableValue:null,selectedTreeTableValue:null}},nodeService:null,created:function(){this.nodeService=new j["a"]},mounted:function(){var e=this;this.nodeService.getTreeNodes().then((function(t){return e.treeValue=t})),this.nodeService.getTreeTableNodes().then((function(t){return e.treeTableValue=t}))}},T=n("6b0d"),h=n.n(T);const O=h()(f,[["render",b]]);t["default"]=O},"82f4":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n("d4ec"),r=n("bee2"),l=(n("d3b7"),function(){function e(){Object(c["a"])(this,e)}return Object(r["a"])(e,[{key:"getTreeTableNodes",value:function(){return fetch("data/treetablenodes.json").then((function(e){return e.json()})).then((function(e){return e.root}))}},{key:"getTreeNodes",value:function(){return fetch("data/treenodes.json").then((function(e){return e.json()})).then((function(e){return e.root}))}}]),e}())}}]);
//# sourceMappingURL=chunk-0288a143.61f97e97.js.map