import{m as _}from"./message-dfea8e68.js";import{_ as A,r as s,c as p,b as l,w as o,o as r,e as i,F as y,z as h,B as v,p as B,f as N,d as g}from"./index-858ac1df.js";const O={data(){return{canteen:null,floor:null,window:1,canteens:[{label:"北食堂",value:1},{label:"清真食堂",value:2},{label:"南食堂",value:3},{label:"东食堂",value:4}],floors:Array.from({length:3},(n,e)=>({label:`楼层${e+1}`,value:e+1}))}},methods:{async submit_add(){const n={canteen:this.canteen,floor:this.floor,window:this.window},e=new Headers;e.append("User-Agent","Apifox/1.0.0 (https://apifox.com)"),e.append("Content-Type","application/json");const d={method:"POST",headers:e,body:JSON.stringify(n),redirect:"follow"};try{(await(await fetch("/test/api/admin_page/add_window",d)).json()).code==200?_("成功添加窗口",{type:"success"}):_("添加窗口失败",{type:"error"})}catch{}},async submit_delete(){const n={canteen:this.canteen,floor:this.floor,window:this.window},e=new Headers;e.append("User-Agent","Apifox/1.0.0 (https://apifox.com)"),e.append("Content-Type","application/json");const d={method:"DELETE",headers:e,body:JSON.stringify(n),redirect:"follow"};try{(await(await fetch("/test/api/admin_page/delete_window",d)).json()).code==200?_("窗口已被删除",{type:"success"}):_("删除窗口失败",{type:"error"})}catch{}}}},T=n=>(B("data-v-1bdb320a"),n=n(),N(),n),U={class:"table-container"},j=T(()=>g("div",{class:"card-header"},[g("span",null,"添加或删除窗口")],-1));function E(n,e,d,c,a,m){const V=s("el-tag"),f=s("el-option"),w=s("el-select"),u=s("el-form-item"),x=s("el-input-number"),b=s("el-button"),k=s("el-form"),C=s("el-card"),S=s("el-space");return r(),p("div",U,[l(S,{direction:"vertical",size:"large"},{default:o(()=>[l(V,{class:"custom-tag",size:"large"},{default:o(()=>[i(" 在此处添加或删除营业窗口 ")]),_:1}),l(C,{shadow:"never",class:"custom-card"},{header:o(()=>[j]),default:o(()=>[l(k,{model:n.formData,"label-width":"120px"},{default:o(()=>[l(u,{label:"选择食堂"},{default:o(()=>[l(w,{modelValue:a.canteen,"onUpdate:modelValue":e[0]||(e[0]=t=>a.canteen=t),placeholder:"选择食堂"},{default:o(()=>[(r(!0),p(y,null,h(a.canteens,t=>(r(),v(f,{value:t.value,label:t.label,key:t.value},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"选择楼层"},{default:o(()=>[l(w,{modelValue:a.floor,"onUpdate:modelValue":e[1]||(e[1]=t=>a.floor=t),placeholder:"选择楼层"},{default:o(()=>[(r(!0),p(y,null,h(a.floors,t=>(r(),v(f,{value:t.value,label:t.label,key:t.value},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"窗口号"},{default:o(()=>[l(x,{modelValue:a.window,"onUpdate:modelValue":e[2]||(e[2]=t=>a.window=t),placeholder:"窗口号"},null,8,["modelValue"])]),_:1}),l(u,null,{default:o(()=>[l(b,{onClick:m.submit_add,type:"primary"},{default:o(()=>[i("增加窗口")]),_:1},8,["onClick"]),l(b,{onClick:m.submit_delete,type:"danger"},{default:o(()=>[i("删除窗口")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})])}const z=A(O,[["render",E],["__scopeId","data-v-1bdb320a"]]);export{z as default};
