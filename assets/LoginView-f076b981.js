import{_ as d,o as u,c,a as p,d as e,h as l,i,F as m}from"./index-7d12fa0a.js";const{VITE_APP_URL:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"aaronshih04263test",BASE_URL:"/week6-gh-pages/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${_}admin/signin`,this.user).then(s=>{console.log(s),console.log(s.data.token);const{expired:o,token:n}=s.data;document.cookie=`aarontoken=${n}; expires=${o}`,this.$router.push("/admin/products")}).catch(s=>{console.log(s)})}}},h={id:"form",class:"form-signin"},g={class:"form-floating mb-3"},w=e("label",{for:"username"},"Email address",-1),P={class:"form-floating"},x=e("label",{for:"password"},"Password",-1);function V(s,o,n,b,r,a){return u(),c(m,null,[p(" 這是登入頁面 "),e("form",h,[e("div",g,[l(e("input",{type:"email",class:"form-control",id:"username","onUpdate:modelValue":o[0]||(o[0]=t=>r.user.username=t),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[i,r.user.username]]),w]),e("div",P,[l(e("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":o[1]||(o[1]=t=>r.user.password=t),placeholder:"Password",required:""},null,512),[[i,r.user.password]]),x]),e("button",{id:"loginBtn",class:"btn btn-lg btn-primary w-100 mt-3",type:"button",onClick:o[2]||(o[2]=(...t)=>a.login&&a.login(...t))}," 登入 ")])],64)}const E=d(f,[["render",V]]);export{E as default};
