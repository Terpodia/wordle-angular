import './polyfills.server.mjs';
import{A as w,G as M,a as i,b as r,c as o,d as a,e as s,f as m,g as d,h as f,i as c,j as g,k as u,r as y,t as C,u as v,v as b,w as x,x as h}from"./chunk-SPIUWBYK.mjs";var O=(()=>{let e=class e{constructor(){this.state="empty",this.letterState={empty:"empty","non-empty":"non-empty","miss-place":"miss-place","not-belong":"not-belong",success:"success"},this.letter=""}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i({type:e,selectors:[["app-letter-card"]],inputs:{state:"state",letter:"letter"},standalone:!0,features:[c],decls:4,vars:4,consts:[[1,"wrapper",3,"ngClass"],[1,"letter"]],template:function(t,p){t&1&&(a(0,"div",0)(1,"span",1),d(2),g(3,"uppercase"),s()()),t&2&&(o("ngClass",p.letterState[p.state]),r(2),f(u(3,2,p.letter)))},dependencies:[C,v],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100px;height:100px;border-radius:10px}.wrapper.empty[_ngcontent-%COMP%]{background-color:#fff;border:solid 1px lightgray}.wrapper.non-empty[_ngcontent-%COMP%]{background-color:#fff;border:solid 1px rgb(164,158,158)}.wrapper.miss-place[_ngcontent-%COMP%]{background-color:#e9e951;color:#fff}.wrapper.not-belong[_ngcontent-%COMP%]{background-color:#c0bfbf;color:#fff}.wrapper.success[_ngcontent-%COMP%]{background-color:#4bb84b;color:#fff}.wrapper[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]{font-size:2.3rem;font-weight:1000}"]});let n=e;return n})();var P=(()=>{let e=class e{constructor(){this.title="wordle-angular"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i({type:e,selectors:[["app-root"]],standalone:!0,features:[c],decls:6,vars:5,consts:[[2,"display","flex","gap","10px"],[3,"state"],["letter","A",3,"state"],["letter","B",3,"state"],["letter","c",3,"state"],["letter","D",3,"state"]],template:function(t,p){t&1&&(a(0,"div",0),m(1,"app-letter-card",1)(2,"app-letter-card",2)(3,"app-letter-card",3)(4,"app-letter-card",4)(5,"app-letter-card",5),s()),t&2&&(r(),o("state","empty"),r(),o("state","non-empty"),r(),o("state","miss-place"),r(),o("state","not-belong"),r(),o("state","success"))},dependencies:[b,O]});let n=e;return n})();var S=[];var k={providers:[M(S),h()]};var F={providers:[w()]},D=y(k,F);var _=()=>x(P,D),W=_;export{W as a};