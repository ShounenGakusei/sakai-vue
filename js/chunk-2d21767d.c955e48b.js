(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21767d"],{c71d:function(e,l,i){"use strict";i.r(l);var t=i("7a23"),a={class:"grid p-fluid"},n={class:"col-12"},p={class:"card card-w-title"},c=Object(t["j"])("h5",null,"Menubar",-1),o={class:"p-input-icon-left"},b=Object(t["j"])("i",{class:"pi pi-search"},null,-1),s={class:"col-12"},m={class:"card card-w-title"},r=Object(t["j"])("h5",null,"Breadcrumb",-1),u={class:"col-12 md:col-6"},d={class:"card card-w-title"},j=Object(t["j"])("h5",null,"Steps",-1),f=Object(t["j"])("p",null,"Steps and TabMenu are integrated with the same child routes.",-1),w={class:"col-12 md:col-6"},O={class:"card card-w-title"},h=Object(t["j"])("h5",null,"TabMenu",-1),g=Object(t["j"])("p",null,"Steps and TabMenu are integrated with the same child routes.",-1),I={class:"col-12 md:col-4"},M={class:"card"},v=Object(t["j"])("h5",null,"Tiered Menu",-1),C={class:"col-12 md:col-4"},k={class:"card"},S=Object(t["j"])("h5",null,"Plain Menu",-1),H={class:"col-12 md:col-4"},T={class:"card"},y=Object(t["j"])("h5",null,"Overlay Menu",-1),B=Object(t["j"])("h5",null,"ContextMenu",-1),x=Object(t["m"])(" Right click to display. "),R={class:"col-12 md:col-6"},P={class:"card"},V=Object(t["j"])("h5",null,"MegaMenu - Horizontal",-1),K=Object(t["j"])("h5",{style:{"margin-top":"1.55em"}},"MegaMenu - Vertical",-1),L={class:"col-12 md:col-6"},F={class:"card"},A=Object(t["j"])("h5",null,"PanelMenu",-1);function D(e,l,i,D,E,N){var W=Object(t["H"])("InputText"),z=Object(t["H"])("Menubar"),J=Object(t["H"])("Breadcrumb"),Q=Object(t["H"])("Steps"),U=Object(t["H"])("router-view"),$=Object(t["H"])("TabMenu"),_=Object(t["H"])("TieredMenu"),q=Object(t["H"])("Menu"),G=Object(t["H"])("Button"),X=Object(t["H"])("ContextMenu"),Y=Object(t["H"])("MegaMenu"),Z=Object(t["H"])("PanelMenu");return Object(t["z"])(),Object(t["i"])("div",a,[Object(t["j"])("div",n,[Object(t["j"])("div",p,[c,Object(t["n"])(z,{model:E.nestedMenuitems},{end:Object(t["R"])((function(){return[Object(t["j"])("span",o,[b,Object(t["n"])(W,{type:"text",placeholder:"Search"})])]})),_:1},8,["model"])])]),Object(t["j"])("div",s,[Object(t["j"])("div",m,[r,Object(t["n"])(J,{home:E.breadcrumbHome,model:E.breadcrumbItems},null,8,["home","model"])])]),Object(t["j"])("div",u,[Object(t["j"])("div",d,[j,f,Object(t["n"])(Q,{model:E.nestedRouteItems,readonly:!1},null,8,["model"]),Object(t["n"])(U)])]),Object(t["j"])("div",w,[Object(t["j"])("div",O,[h,g,Object(t["n"])($,{model:E.nestedRouteItems},null,8,["model"]),Object(t["n"])(U)])]),Object(t["j"])("div",I,[Object(t["j"])("div",M,[v,Object(t["n"])(_,{model:E.tieredMenuItems},null,8,["model"])])]),Object(t["j"])("div",C,[Object(t["j"])("div",k,[S,Object(t["n"])(q,{model:E.menuitems},null,8,["model"])])]),Object(t["j"])("div",H,[Object(t["j"])("div",T,[y,Object(t["n"])(q,{ref:"menu",model:E.overlayMenuItems,popup:!0},null,8,["model"]),Object(t["n"])(G,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:N.toggleMenu,style:{width:"auto"}},null,8,["onClick"])]),Object(t["j"])("div",{class:"card",onContextmenu:l[0]||(l[0]=function(){return N.onContextRightClick&&N.onContextRightClick.apply(N,arguments)})},[B,x,Object(t["n"])(X,{ref:"contextMenu",model:E.contextMenuItems},null,8,["model"])],32)]),Object(t["j"])("div",R,[Object(t["j"])("div",P,[V,Object(t["n"])(Y,{model:E.megamenuItems},null,8,["model"]),K,Object(t["n"])(Y,{model:E.megamenuItems,orientation:"vertical"},null,8,["model"])])]),Object(t["j"])("div",L,[Object(t["j"])("div",F,[A,Object(t["n"])(Z,{model:E.panelMenuitems},null,8,["model"])])])])}var E={data:function(){return{nestedMenuitems:[{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}],breadcrumbHome:{icon:"pi pi-home",to:"/"},breadcrumbItems:[{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}],nestedRouteItems:[{label:"Personal",to:"/menu"},{label:"Seat",to:"/menu/seat"},{label:"Payment",to:"/menu/payment"},{label:"Confirmation",to:"/menu/confirmation"}],tieredMenuItems:[{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}],overlayMenuItems:[{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}],menuitems:[{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}],contextMenuItems:[{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}],megamenuItems:[{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}],panelMenuitems:[{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]}},methods:{toggleMenu:function(e){this.$refs.menu.toggle(e)},onContextRightClick:function(e){this.$refs.contextMenu.show(e)}}},N=i("6b0d"),W=i.n(N);const z=W()(E,[["render",D]]);l["default"]=z}}]);
//# sourceMappingURL=chunk-2d21767d.c955e48b.js.map