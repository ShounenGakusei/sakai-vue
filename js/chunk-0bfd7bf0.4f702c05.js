(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bfd7bf0"],{"159b":function(e,t,n){var a=n("da84"),r=n("fdbc"),l=n("785a"),c=n("17c2"),o=n("9112"),i=function(e){if(e&&e.forEach!==c)try{o(e,"forEach",c)}catch(t){e.forEach=c}};for(var u in r)r[u]&&i(a[u]&&a[u].prototype);i(l)},"17c2":function(e,t,n){"use strict";var a=n("b727").forEach,r=n("a640"),l=r("forEach");e.exports=l?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"2d05":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAeAQMAAABt+G7kAAAAA1BMVEVMaXFNx9g6AAAAAXRSTlMAQObYZgAAAAtJREFUeF5jGHYAAADSAAEzF5gpAAAAAElFTkSuQmCC"},6669:function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),r=n("2d05"),l=n.n(r),c=function(e){return Object(a["C"])("data-v-7b24f958"),e=e(),Object(a["A"])(),e},o={class:"grid"},i={class:"col-12"},u={class:"card"},s=c((function(){return Object(a["j"])("h5",null,"Filter Menu",-1)})),d={class:"flex justify-content-between flex-column sm:flex-row"},b={class:"p-input-icon-left mb-2"},m=c((function(){return Object(a["j"])("i",{class:"pi pi-search"},null,-1)})),j=Object(a["m"])(" No customers found. "),f=Object(a["m"])(" Loading customers data. Please wait. "),O=["alt"],p={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},h=["alt","src"],v={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},y=c((function(){return Object(a["j"])("div",{class:"mb-3 text-bold"},"Agent Picker",-1)})),g={class:"p-multiselect-representative-option"},w=["alt","src"],R={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},A={key:1},x={class:"flex align-items-center justify-content-between px-2"},S={class:"col-12"},C={class:"card"},L=c((function(){return Object(a["j"])("h5",null,"Frozen Columns",-1)})),V={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},_=["alt","src"],M={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},U={class:"text-bold"},k={class:"col-12"},F={class:"card"},E=c((function(){return Object(a["j"])("h5",null,"Row Expand",-1)})),T=["src","alt"],D={class:"p-3"},I={class:"col-12"},H={class:"card"},N=c((function(){return Object(a["j"])("h5",null,"Subheader Grouping",-1)})),z={class:"image-text ml-2"},B=["alt","src"],Q={class:"image-text"},G={style:{"text-align":"right"},class:"text-bold pr-6"};function P(e,t,n,r,c,P){var X=Object(a["H"])("Button"),J=Object(a["H"])("InputText"),K=Object(a["H"])("Column"),W=Object(a["H"])("MultiSelect"),q=Object(a["H"])("Calendar"),Y=Object(a["H"])("InputNumber"),Z=Object(a["H"])("Dropdown"),$=Object(a["H"])("ProgressBar"),ee=Object(a["H"])("Slider"),te=Object(a["H"])("TriStateCheckbox"),ne=Object(a["H"])("DataTable"),ae=Object(a["H"])("ToggleButton"),re=Object(a["H"])("Rating");return Object(a["z"])(),Object(a["i"])("div",o,[Object(a["j"])("div",i,[Object(a["j"])("div",u,[s,Object(a["n"])(ne,{value:c.customer1,paginator:!0,class:"p-datatable-gridlines",rows:10,dataKey:"id",rowHover:!0,filters:c.filters1,"onUpdate:filters":t[2]||(t[2]=function(e){return c.filters1=e}),filterDisplay:"menu",loading:c.loading1,responsiveLayout:"scroll",globalFilterFields:["name","country.name","representative.name","balance","status"]},{header:Object(a["R"])((function(){return[Object(a["j"])("div",d,[Object(a["n"])(X,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined mb-2",onClick:t[0]||(t[0]=function(e){return P.clearFilter1()})}),Object(a["j"])("span",b,[m,Object(a["n"])(J,{modelValue:c.filters1["global"].value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.filters1["global"].value=e}),placeholder:"Keyword Search",style:{width:"100%"}},null,8,["modelValue"])])])]})),empty:Object(a["R"])((function(){return[j]})),loading:Object(a["R"])((function(){return[f]})),default:Object(a["R"])((function(){return[Object(a["n"])(K,{field:"name",header:"Name",style:{"min-width":"12rem"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["m"])(Object(a["L"])(t.name),1)]})),filter:Object(a["R"])((function(e){var t=e.filterModel;return[Object(a["n"])(J,{type:"text",modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["n"])(K,{header:"Country",filterField:"country.name",style:{"min-width":"12rem"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["j"])("img",{src:l.a,alt:t.country.name,class:Object(a["u"])("flag flag-"+t.country.code),width:"30"},null,10,O),Object(a["j"])("span",p,Object(a["L"])(t.country.name),1)]})),filter:Object(a["R"])((function(e){var t=e.filterModel;return[Object(a["n"])(J,{type:"text",modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]})),filterclear:Object(a["R"])((function(e){var t=e.filterCallback;return[Object(a["n"])(X,{type:"button",icon:"pi pi-times",onClick:function(e){return t()},class:"p-button-secondary"},null,8,["onClick"])]})),filterapply:Object(a["R"])((function(e){var t=e.filterCallback;return[Object(a["n"])(X,{type:"button",icon:"pi pi-check",onClick:function(e){return t()},class:"p-button-success"},null,8,["onClick"])]})),_:1}),Object(a["n"])(K,{header:"Agent",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["j"])("img",{alt:t.representative.name,src:"images/avatar/"+t.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,h),Object(a["j"])("span",v,Object(a["L"])(t.representative.name),1)]})),filter:Object(a["R"])((function(e){var t=e.filterModel;return[y,Object(a["n"])(W,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},options:c.representatives,optionLabel:"name",placeholder:"Any",class:"p-column-filter"},{option:Object(a["R"])((function(e){return[Object(a["j"])("div",g,[Object(a["j"])("img",{alt:e.option.name,src:"images/avatar/"+e.option.image,width:"32",style:{"vertical-align":"middle"}},null,8,w),Object(a["j"])("span",R,Object(a["L"])(e.option.name),1)])]})),_:2},1032,["modelValue","onUpdate:modelValue","options"])]})),_:1}),Object(a["n"])(K,{header:"Date",filterField:"date",dataType:"date",style:{"min-width":"10rem"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["m"])(Object(a["L"])(P.formatDate(t.date)),1)]})),filter:Object(a["R"])((function(e){var t=e.filterModel;return[Object(a["n"])(q,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["n"])(K,{header:"Balance",filterField:"balance",dataType:"numeric",style:{"min-width":"10rem"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["m"])(Object(a["L"])(P.formatCurrency(t.balance)),1)]})),filter:Object(a["R"])((function(e){var t=e.filterModel;return[Object(a["n"])(Y,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["n"])(K,{field:"status",header:"Status",filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["j"])("span",{class:Object(a["u"])("customer-badge status-"+t.status)},Object(a["L"])(t.status),3)]})),filter:Object(a["R"])((function(e){var t=e.filterModel;return[Object(a["n"])(Z,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},options:c.statuses,placeholder:"Any",class:"p-column-filter",showClear:!0},{value:Object(a["R"])((function(e){return[e.value?(Object(a["z"])(),Object(a["i"])("span",{key:0,class:Object(a["u"])("customer-badge status-"+e.value)},Object(a["L"])(e.value),3)):(Object(a["z"])(),Object(a["i"])("span",A,Object(a["L"])(e.placeholder),1))]})),option:Object(a["R"])((function(e){return[Object(a["j"])("span",{class:Object(a["u"])("customer-badge status-"+e.option)},Object(a["L"])(e.option),3)]})),_:2},1032,["modelValue","onUpdate:modelValue","options"])]})),_:1}),Object(a["n"])(K,{field:"activity",header:"Activity",showFilterMatchModes:!1,style:{"min-width":"12rem"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["n"])($,{value:t.activity,showValue:!1,style:{height:".5rem"}},null,8,["value"])]})),filter:Object(a["R"])((function(e){var t=e.filterModel;return[Object(a["n"])(ee,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},range:"",class:"m-3"},null,8,["modelValue","onUpdate:modelValue"]),Object(a["j"])("div",x,[Object(a["j"])("span",null,Object(a["L"])(t.value?t.value[0]:0),1),Object(a["j"])("span",null,Object(a["L"])(t.value?t.value[1]:100),1)])]})),_:1}),Object(a["n"])(K,{field:"verified",header:"Verified",dataType:"boolean",bodyClass:"text-center",style:{"min-width":"8rem"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["j"])("i",{class:Object(a["u"])(["pi",{"text-green-500 pi-check-circle":t.verified,"text-pink-500 pi-times-circle":!t.verified}])},null,2)]})),filter:Object(a["R"])((function(e){var t=e.filterModel;return[Object(a["n"])(te,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["value","filters","loading","globalFilterFields"])])]),Object(a["j"])("div",S,[Object(a["j"])("div",C,[L,Object(a["n"])(ae,{modelValue:c.idFrozen,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.idFrozen=e}),onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Unfreeze Id",offLabel:"Freeze Id",style:{width:"10rem"}},null,8,["modelValue"]),Object(a["n"])(ne,{value:c.customer2,scrollable:!0,scrollHeight:"400px",loading:c.loading2,scrollDirection:"both",class:"mt-3"},{default:Object(a["R"])((function(){return[Object(a["n"])(K,{field:"name",header:"Name",style:{width:"150px"},frozen:""}),Object(a["n"])(K,{field:"id",header:"Id",style:{width:"100px"},frozen:c.idFrozen},null,8,["frozen"]),Object(a["n"])(K,{field:"name",header:"Name",style:{width:"200px"}}),Object(a["n"])(K,{field:"country.name",header:"Country",style:{width:"200px"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["j"])("img",{src:l.a,class:Object(a["u"])("flag flag-"+t.country.code),width:"30"},null,2),Object(a["j"])("span",V,Object(a["L"])(t.country.name),1)]})),_:1}),Object(a["n"])(K,{field:"date",header:"Date",style:{width:"200px"}}),Object(a["n"])(K,{field:"company",header:"Company",style:{width:"200px"}}),Object(a["n"])(K,{field:"status",header:"Status",style:{width:"200px"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["j"])("span",{class:Object(a["u"])("customer-badge status-"+t.status)},Object(a["L"])(t.status),3)]})),_:1}),Object(a["n"])(K,{field:"activity",header:"Activity",style:{width:"200px"}}),Object(a["n"])(K,{field:"representative.name",header:"Representative",style:{width:"200px"}},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["j"])("img",{alt:t.representative.name,src:"images/avatar/"+t.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,_),Object(a["j"])("span",M,Object(a["L"])(t.representative.name),1)]})),_:1}),Object(a["n"])(K,{field:"balance",header:"Balance",style:{width:"150px"},frozen:"",alignFrozen:"right"},{body:Object(a["R"])((function(e){var t=e.data;return[Object(a["j"])("span",U,Object(a["L"])(P.formatCurrency(t.balance)),1)]})),_:1})]})),_:1},8,["value","loading"])])]),Object(a["j"])("div",k,[Object(a["j"])("div",F,[E,Object(a["n"])(ne,{value:c.products,expandedRows:c.expandedRows,"onUpdate:expandedRows":t[4]||(t[4]=function(e){return c.expandedRows=e}),dataKey:"id",responsiveLayout:"scroll"},{header:Object(a["R"])((function(){return[Object(a["j"])("div",null,[Object(a["n"])(X,{icon:"pi pi-plus",label:"Expand All",onClick:P.expandAll,class:"mr-2 mb-2"},null,8,["onClick"]),Object(a["n"])(X,{icon:"pi pi-minus",label:"Collapse All",onClick:P.collapseAll,class:"mb-2"},null,8,["onClick"])])]})),expansion:Object(a["R"])((function(e){return[Object(a["j"])("div",D,[Object(a["j"])("h5",null,"Orders for "+Object(a["L"])(e.data.name),1),Object(a["n"])(ne,{value:e.data.orders,responsiveLayout:"scroll"},{default:Object(a["R"])((function(){return[Object(a["n"])(K,{field:"id",header:"Id",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["m"])(Object(a["L"])(e.data.id),1)]})),_:2},1024),Object(a["n"])(K,{field:"customer",header:"Customer",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["m"])(Object(a["L"])(e.data.customer),1)]})),_:2},1024),Object(a["n"])(K,{field:"date",header:"Date",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["m"])(Object(a["L"])(e.data.date),1)]})),_:2},1024),Object(a["n"])(K,{field:"amount",header:"Amount",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["m"])(Object(a["L"])(P.formatCurrency(e.data.amount)),1)]})),_:2},1024),Object(a["n"])(K,{field:"status",header:"Status",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["j"])("span",{class:Object(a["u"])("order-badge order-"+(e.data.status?e.data.status.toLowerCase():""))},Object(a["L"])(e.data.status),3)]})),_:2},1024),Object(a["n"])(K,{headerStyle:"width:4rem"},{body:Object(a["R"])((function(){return[Object(a["n"])(X,{icon:"pi pi-search"})]})),_:1})]})),_:2},1032,["value"])])]})),default:Object(a["R"])((function(){return[Object(a["n"])(K,{expander:!0,headerStyle:"width: 3rem"}),Object(a["n"])(K,{field:"name",header:"Name",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["m"])(Object(a["L"])(e.data.name),1)]})),_:1}),Object(a["n"])(K,{header:"Image"},{body:Object(a["R"])((function(e){return[Object(a["j"])("img",{src:"images/product/"+e.data.image,alt:e.data.image,class:"shadow-2",width:"100"},null,8,T)]})),_:1}),Object(a["n"])(K,{field:"price",header:"Price",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["m"])(Object(a["L"])(P.formatCurrency(e.data.price)),1)]})),_:1}),Object(a["n"])(K,{field:"category",header:"Category",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["m"])(Object(a["L"])(P.formatCurrency(e.data.category)),1)]})),_:1}),Object(a["n"])(K,{field:"rating",header:"Reviews",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["n"])(re,{modelValue:e.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]})),_:1}),Object(a["n"])(K,{field:"inventoryStatus",header:"Status",sortable:!0},{body:Object(a["R"])((function(e){return[Object(a["j"])("span",{class:Object(a["u"])("product-badge status-"+(e.data.inventoryStatus?e.data.inventoryStatus.toLowerCase():""))},Object(a["L"])(e.data.inventoryStatus),3)]})),_:1})]})),_:1},8,["value","expandedRows"])])]),Object(a["j"])("div",I,[Object(a["j"])("div",H,[N,Object(a["n"])(ne,{value:c.customer3,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,scrollable:"",scrollHeight:"400px"},{groupheader:Object(a["R"])((function(e){return[Object(a["j"])("img",{alt:e.data.representative.name,src:"images/avatar/"+e.data.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,B),Object(a["j"])("span",Q,Object(a["L"])(e.data.representative.name),1)]})),groupfooter:Object(a["R"])((function(e){return[Object(a["j"])("td",G,"Total Customers: "+Object(a["L"])(P.calculateCustomerTotal(e.data.representative.name)),1)]})),default:Object(a["R"])((function(){return[Object(a["n"])(K,{field:"representative.name",header:"Representative"}),Object(a["n"])(K,{field:"name",header:"Name",style:{"min-width":"200px"}}),Object(a["n"])(K,{field:"country",header:"Country",style:{"min-width":"200px"}},{body:Object(a["R"])((function(e){return[Object(a["j"])("img",{src:l.a,class:Object(a["u"])("flag flag-"+e.data.country.code),width:"30"},null,2),Object(a["j"])("span",z,Object(a["L"])(e.data.country.name),1)]})),_:1}),Object(a["n"])(K,{field:"company",header:"Company",style:{"min-width":"200px"}}),Object(a["n"])(K,{field:"status",header:"Status",style:{"min-width":"200px"}},{body:Object(a["R"])((function(e){return[Object(a["j"])("span",{class:Object(a["u"])("customer-badge status-"+e.data.status)},Object(a["L"])(e.data.status),3)]})),_:1}),Object(a["n"])(K,{field:"date",header:"Date",style:{"min-width":"200px"}})]})),_:1},8,["value"])])])])}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");var X=n("06c5");function J(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(X["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,l=e},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}}}n("159b"),n("4de4");var K=n("0393"),W=n("d4ec"),q=n("bee2"),Y=(n("a15b"),n("d81d"),n("b64b"),function(){function e(){Object(W["a"])(this,e)}return Object(q["a"])(e,[{key:"getCustomersSmall",value:function(){return fetch("data/customers-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getCustomersMedium",value:function(){return fetch("data/customers-medium.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getCustomersLarge",value:function(){return fetch("data/customers-large.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getCustomersXLarge",value:function(){return fetch("data/customers-xlarge.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getCustomers",value:function(e){var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");return fetch("https://www.primefaces.org/data/customers?"+t).then((function(e){return e.json()}))}}]),e}()),Z=n("e9c0"),$={data:function(){return{customer1:null,customer2:null,customer3:null,filters1:null,filters2:{},loading1:!0,loading2:!0,idFrozen:!1,products:null,expandedRows:[],statuses:["unqualified","qualified","new","negotiation","renewal","proposal"],representatives:[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}]}},customerService:null,productService:null,created:function(){this.customerService=new Y,this.productService=new Z["a"],this.initFilters1()},mounted:function(){var e=this;this.productService.getProductsWithOrdersSmall().then((function(t){return e.products=t})),this.customerService.getCustomersLarge().then((function(t){e.customer1=t,e.loading1=!1,e.customer1.forEach((function(e){return e.date=new Date(e.date)}))})),this.customerService.getCustomersLarge().then((function(t){return e.customer2=t})),this.customerService.getCustomersMedium().then((function(t){return e.customer3=t})),this.loading2=!1},methods:{initFilters1:function(){this.filters1={global:{value:null,matchMode:K["a"].CONTAINS},name:{operator:K["b"].AND,constraints:[{value:null,matchMode:K["a"].STARTS_WITH}]},"country.name":{operator:K["b"].AND,constraints:[{value:null,matchMode:K["a"].STARTS_WITH}]},representative:{value:null,matchMode:K["a"].IN},date:{operator:K["b"].AND,constraints:[{value:null,matchMode:K["a"].DATE_IS}]},balance:{operator:K["b"].AND,constraints:[{value:null,matchMode:K["a"].EQUALS}]},status:{operator:K["b"].OR,constraints:[{value:null,matchMode:K["a"].EQUALS}]},activity:{value:null,matchMode:K["a"].BETWEEN},verified:{value:null,matchMode:K["a"].EQUALS}}},clearFilter1:function(){this.initFilters1()},expandAll:function(){this.expandedRows=this.products.filter((function(e){return e.id}))},collapseAll:function(){this.expandedRows=null},formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},formatDate:function(e){return e.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})},calculateCustomerTotal:function(e){var t=0;if(this.customer3){var n,a=J(this.customer3);try{for(a.s();!(n=a.n()).done;){var r=n.value;r.representative.name===e&&t++}}catch(l){a.e(l)}finally{a.f()}}return t}}},ee=(n("b098"),n("6b0d")),te=n.n(ee);const ne=te()($,[["render",P],["__scopeId","data-v-7b24f958"]]);t["default"]=ne},"84a9":function(e,t,n){},b098:function(e,t,n){"use strict";n("84a9")},b64b:function(e,t,n){var a=n("23e7"),r=n("7b0b"),l=n("df75"),c=n("d039"),o=c((function(){l(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(e){return l(r(e))}})},d81d:function(e,t,n){"use strict";var a=n("23e7"),r=n("b727").map,l=n("1dde"),c=l("map");a({target:"Array",proto:!0,forced:!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-0bfd7bf0.4f702c05.js.map