import './polyfills.server.mjs';
import{G as D,I as z,J as G,K as Q,L as $,M as H,N as K,O as N,P as U,S as V,Y as W,a as M,b as _,c as C,d as I,e as m,f as O,g as a,h as c,i as f,j as u,k as g,l as h,m as s,n as p,o as d,p as P,q as A,r as T,s as E,t as S,u as F,v as L,w as l,x as j,y as R,z as B}from"./chunk-SCTOTN5W.mjs";var oe={empty:"empty","non-empty":"non-empty","miss-place":"miss-place","not-belong":"not-belong",success:"success"},Z=(()=>{let e=class e{constructor(){this.letter={value:"",state:"empty"},this.letterState=oe}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-letter-card"]],inputs:{letter:"letter"},standalone:!0,features:[l],decls:4,vars:4,consts:[[1,"wrapper",3,"ngClass"],[1,"letter"]],template:function(i,n){i&1&&(s(0,"div",0)(1,"span",1),S(2),R(3,"uppercase"),p()()),i&2&&(f("ngClass",n.letterState[n.letter.state]),a(2),F(B(3,2,n.letter.value)))},dependencies:[z,G],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;border-radius:10px}.wrapper.empty[_ngcontent-%COMP%]{background-color:#fff;border:solid 1px lightgray}.wrapper.non-empty[_ngcontent-%COMP%]{background-color:#fff;border:solid 1px rgb(164,158,158)}.wrapper.miss-place[_ngcontent-%COMP%]{background-color:#e9e951;color:#fff}.wrapper.not-belong[_ngcontent-%COMP%]{background-color:#c0bfbf;color:#fff}.wrapper.success[_ngcontent-%COMP%]{background-color:#4bb84b;color:#fff}.wrapper[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:1000}@media (min-width: 961px){.wrapper[_ngcontent-%COMP%]{width:80px;height:80px}.wrapper[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]{font-size:2.3rem}}"]});let r=e;return r})();var q=(r,e)=>{let o={};for(let t=0;t<e.length;t++)o[e[t]]?o[e[t]]++:o[e[t]]=1,e[t]===r[t].value&&(r[t].state="success",o[e[t]]--);for(let t=0;t<e.length;t++)e[t]!==r[t].value&&(o[r[t].value]>0?(o[r[t].value]--,r[t].state="miss-place"):r[t].state="not-belong");return r};var y=(()=>{let e=class e{constructor(){this.wordSize=5,this.tries=6,this.currentRow=0,this.currentCol=0,this.hasEnded=!1,this.secretWord="",this.rows=[]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();function ae(r,e){if(r&1&&d(0,"app-letter-card",1),r&2){let o=e.$implicit;f("letter",o)}}var k=(()=>{let e=class e{constructor(t){this.gameState=t,this.letters=[]}ngOnInit(){this.wordSize=this.gameState.wordSize;for(let t=0;t<this.wordSize;t++)this.letters[t]={value:"",state:"empty"}}get(){return this.letters.map(t=>t.value).join("")}put(t){this.letters[this.gameState.currentCol]={value:t,state:"non-empty"}}delete(){this.letters[this.gameState.currentCol-1]={value:"",state:"empty"}}changeLettersState(){this.letters=q(this.letters,this.gameState.secretWord)}};e.\u0275fac=function(i){return new(i||e)(c(y))},e.\u0275cmp=m({type:e,selectors:[["app-row-letter"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[2,"display","flex","gap","5px"],[3,"letter"]],template:function(i,n){i&1&&(s(0,"div",0),g(1,ae,1,1,"app-letter-card",1,u),p()),i&2&&(a(),h(n.letters))},dependencies:[Z]});let r=e;return r})();var w=(()=>{let e=class e{constructor(t){this.gameState=t}submitWord(){if(this.gameState.hasEnded||this.gameState.currentCol<this.gameState.wordSize)return;let t=this.gameState.currentRow>=this.gameState.tries,i=this.gameState.secretWord===this.gameState.rows[this.gameState.currentRow].get();this.gameState.hasEnded=t||i,this.gameState.rows[this.gameState.currentRow].changeLettersState(),this.gameState.currentCol=0,this.gameState.currentRow++}deleteLetter(){this.gameState.hasEnded||this.gameState.currentCol!=0&&(this.gameState.rows[this.gameState.currentRow].delete(),this.gameState.currentCol--)}putLetter(t){this.gameState.hasEnded||this.gameState.currentCol>=this.gameState.wordSize||(this.gameState.rows[this.gameState.currentRow].put(t),this.gameState.currentCol++)}};e.\u0275fac=function(i){return new(i||e)(I(y))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();function se(r,e){r&1&&d(0,"app-row-letter")}var pe=()=>[],X=(()=>{let e=class e{constructor(t,i,n){this.gameState=t,this.gameActions=i,this.platformId=n,this.tries=0}ngOnInit(){this.tries=this.gameState.tries,this.listenerEvents()}ngAfterViewInit(){this.gameState.rows=this.rows.toArray()}listenerEvents(){$(this.platformId)&&_(document,"keydown").subscribe(t=>{t.key==="Enter"?this.gameActions.submitWord():t.key==="Backspace"?this.gameActions.deleteLetter():this.isAlphabetLetter(t.key)&&this.gameActions.putLetter(t.key)})}isAlphabetLetter(t){return/^[a-zA-Zñ]$/.test(t)}};e.\u0275fac=function(i){return new(i||e)(c(y),c(w),c(O))},e.\u0275cmp=m({type:e,selectors:[["app-grid"]],viewQuery:function(i,n){if(i&1&&A(k,5),i&2){let x;T(x=E())&&(n.rows=x)}},standalone:!0,features:[l],decls:3,vars:1,consts:[[1,"wrapper"]],template:function(i,n){i&1&&(s(0,"div",0),g(1,se,1,0,"app-row-letter",null,u),p()),i&2&&(a(),h(j(0,pe).constructor(n.tries)))},dependencies:[k],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px;justify-content:center;align-items:center}"]});let r=e;return r})();var Y=(()=>{let e=class e{constructor(t){this.gameActions=t,this.value=""}handleClick(){this.value==="Enter"?this.gameActions.submitWord():this.value==="Backspace"?this.gameActions.deleteLetter():this.gameActions.putLetter(this.value)}};e.\u0275fac=function(i){return new(i||e)(c(w))},e.\u0275cmp=m({type:e,selectors:[["app-btn-keyboard"]],inputs:{value:"value"},standalone:!0,features:[l],decls:2,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(s(0,"button",0),P("click",function(){return n.handleClick()}),S(1),p()),i&2&&(a(),L(`
`,n.value,`
`))},styles:["button[_ngcontent-%COMP%]{background-color:#f4f4f4;min-width:10px;min-height:10px;padding:10px;border-radius:10px;font-size:.875rem;border:none}button[_ngcontent-%COMP%]:hover{background-color:#e3e2e2}@media (min-width: 961px){button[_ngcontent-%COMP%]{min-width:50px;min-height:50px;font-size:1.2rem}}"]});let r=e;return r})();var ee=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L","\xD1"],["Backspace","Z","X","C","V","B","N","M","Enter"]];function ce(r,e){if(r&1&&d(0,"app-btn-keyboard",2),r&2){let o=e.$implicit;f("value",o)}}function me(r,e){if(r&1&&d(0,"app-btn-keyboard",2),r&2){let o=e.$implicit;f("value",o)}}function le(r,e){if(r&1&&d(0,"app-btn-keyboard",2),r&2){let o=e.$implicit;f("value",o)}}var de="https://random-word-api.herokuapp.com/word?lang=es&",te=(()=>{let e=class e{constructor(t,i){this.httpClient=t,this.gameState=i,this.title="wordle-angular",this.keyboard=ee}ngOnInit(){this.httpClient.get(de+"length=5").pipe(M(t=>t[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase())).subscribe(t=>{this.gameState.secretWord=t,console.log(t)})}};e.\u0275fac=function(i){return new(i||e)(c(H),c(y))},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[l],decls:11,vars:0,consts:[[1,"keyboard"],[1,"row"],[3,"value"]],template:function(i,n){i&1&&(d(0,"app-grid"),s(1,"div",0)(2,"div",1),g(3,ce,1,1,"app-btn-keyboard",2,u),p(),s(5,"div",1),g(6,me,1,1,"app-btn-keyboard",2,u),p(),s(8,"div",1),g(9,le,1,1,"app-btn-keyboard",2,u),p()()),i&2&&(a(3),h(n.keyboard[0]),a(3),h(n.keyboard[1]),a(3),h(n.keyboard[2]))},dependencies:[Q,X,Y],styles:["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.keyboard[_ngcontent-%COMP%]{margin-top:30px;display:flex;flex-direction:column;gap:8px}.keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:4px}@media (min-width: 961px){.keyboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{gap:8px}}"]});let r=e;return r})();var re=[];var ie={providers:[W(re),U(),K()]};var fe={providers:[V()]},ne=D(ie,fe);var ue=()=>N(te,ne),Je=ue;export{Je as a};
