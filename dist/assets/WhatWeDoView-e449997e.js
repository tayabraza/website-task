import{r as l,o,c as i,u as t,a as s,t as r}from"./index-ea004558.js";const c={class:"page"},d={key:0},u=s("div",{class:"loading"},null,-1),g=[u],h={key:1},p={class:"main-heading"},f=["src"],x={__name:"WhatWeDoView",setup(m){let e=l({}),a=l(!1),_=200;sessionStorage.page&&(e.value=JSON.parse(sessionStorage.page),a.value=!0);function n(){setTimeout(()=>{sessionStorage.page?(e.value=JSON.parse(sessionStorage.page),a.value=!0):(_+=200,n())},_)}return n(),(v,w)=>(o(),i("div",c,[t(a)?(o(),i("div",h,[s("h1",p,r(t(e).what_we_do_heading[0].text),1),s("p",null,r(t(e).what_we_do_text[0].text),1),s("img",{src:t(e).what_we_do_image.url,alt:"What we do"},null,8,f)])):(o(),i("div",d,g))]))}};export{x as default};
