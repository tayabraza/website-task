import{u as c}from"./composables-0a8c0a69.js";import{r as i,o as t,c as a,u as s,a as o,t as _}from"./index-2f3fbb12.js";const d={class:"page"},r={key:0},u=o("div",{class:"loading"},null,-1),p=[u],m={key:1},h={class:"main-heading"},y={__name:"DonateView",setup(g){let{data:l}=c("page"),n=i(!1),e=i({});return setTimeout(()=>{e.value=l._value.data,n.value=!0},1e3),(f,v)=>(t(),a("div",d,[s(n)?(t(),a("div",m,[o("h1",h,_(s(e).donate_heading[0].text),1),o("p",null,_(s(e).donate_text[0].text),1)])):(t(),a("div",r,p))]))}};export{y as default};