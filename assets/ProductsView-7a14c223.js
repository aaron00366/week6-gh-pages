import{_ as h,e as P,r as m,o as s,c as n,a as c,d as t,F as l,f as g,t as $,b,w as f}from"./index-7d12fa0a.js";const{VITE_APP_URL:d,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"aaronshih04263test",BASE_URL:"/week6-gh-pages/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{products:[]}},methods:{getProducts(){this.$http.get(`${d}/v2/api/${i}/products/all`).then(o=>{this.products=o.data.products})},addToCart(o){const a={product_id:o,qty:1};this.$http.post(`${d}/v2/api/${i}/cart`,{data:a}).then(r=>{console.log(r)})}},components:{RouterLink:P},mounted(){this.getProducts()}},T=["src"],V=["onClick"];function E(o,a,r,y,u,_){const p=m("RouterLink");return s(),n(l,null,[c(" 這是前台產品列表 "),t("table",null,[t("tbody",null,[(s(!0),n(l,null,g(u.products,e=>(s(),n("tr",{key:e.id},[t("td",null,$(e.title),1),t("td",null,[t("img",{src:e.imageUrl,width:"200",alt:""},null,8,T)]),t("td",null,[b(p,{to:`/product/${e.id}`,class:"btn btn-outline-secondary"},{default:f(()=>[c(" 產品細節")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:A=>_.addToCart(e.id)},"加入購物車",8,V)])]))),128))])])],64)}const R=h(k,[["render",E]]);export{R as default};
