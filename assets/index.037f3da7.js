import{m as j,x as I,r as p,l as M,k as O,w as _,R as E,j as e,v as L,S as V,z as G,b as U,i as K,a as r,s as g,c as R,u as H,J as q,f as J,K as Y,e as T,q as Q,F as A,N as X,L as Z,B as ee}from"./index.6a57b9ec.js";import{a as D,T as z,b as te}from"./swiper.38259ec8.js";import{a as se,b as ne,u as ie,c as re,w as oe,M as ce,C as ae,r as le,t as $,S as de,R as me,T as ue}from"./index.31f3ae4c.js";const S="adm-popup",he=Object.assign(Object.assign({},se),{position:"bottom"}),pe=s=>{const t=j(he,s),o=I(`${S}-body`,t.bodyClassName,`${S}-body-position-${t.position}`),[m,f]=p.exports.useState(t.visible);M(()=>{t.visible&&f(!0)},[t.visible]);const n=p.exports.useRef(null);ne(n,t.disableBodyScroll&&m);const c=ie(),{percent:u}=O({percent:t.visible?0:100,config:{precision:.1,mass:.4,tension:300,friction:30},onRest:()=>{var i,d;c.current||(f(t.visible),t.visible?(i=t.afterShow)===null||i===void 0||i.call(t):(d=t.afterClose)===null||d===void 0||d.call(t))}}),l=re(m&&t.visible),b=oe(t.stopPropagation,_(t,E.createElement("div",{className:S,onClick:t.onClick,style:{display:m?void 0:"none"}},t.mask&&e(ce,{visible:l,forceRender:t.forceRender,destroyOnClose:t.destroyOnClose,onMaskClick:i=>{var d,y;(d=t.onMaskClick)===null||d===void 0||d.call(t,i),t.closeOnMaskClick&&((y=t.onClose)===null||y===void 0||y.call(t))},className:t.maskClassName,style:t.maskStyle,disableBodyScroll:!1,stopPropagation:t.stopPropagation}),E.createElement(L.div,{className:o,style:Object.assign(Object.assign({},t.bodyStyle),{transform:u.to(i=>t.position==="bottom"?`translate(0, ${i}%)`:t.position==="top"?`translate(0, -${i}%)`:t.position==="left"?`translate(-${i}%, 0)`:t.position==="right"?`translate(${i}%, 0)`:"none")}),ref:n},t.showCloseButton&&e("a",{className:I(`${S}-close-icon`,"adm-plain-anchor"),onClick:()=>{var i;(i=t.onClose)===null||i===void 0||i.call(t)},children:e(ae,{})}),t.children))));return e(V,{active:m,forceRender:t.forceRender,destroyOnClose:t.destroyOnClose,children:le(t.getContainer,b)})},ge=pe;let N=null,x=null;G&&(N=document.createElement("div"),N.className="adm-px-tester",N.style.setProperty("--size","10"),document.body.appendChild(N),x=document.createElement("div"),x.className="adm-px-tester",document.body.appendChild(x));function fe(s){return N===null||x===null||N.getBoundingClientRect().height===10?s:(x.style.setProperty("--size",s.toString()),x.getBoundingClientRect().height)}const W="adm-grid",ve=s=>{const t={"--columns":s.columns.toString()},{gap:o}=s;return o!==void 0&&(Array.isArray(o)?(t["--gap-horizontal"]=$(o[0]),t["--gap-vertical"]=$(o[1])):t["--gap"]=$(o)),_(s,e("div",{className:W,style:t,children:s.children}))},be=s=>{const t=j({span:1},s),o={"--item-span":t.span};return _(t,e("div",{className:`${W}-item`,style:o,onClick:t.onClick,children:t.children}))},ye=U(ve,{Item:be});const ke=p.exports.memo(()=>e("svg",{width:"17px",height:"13px",viewBox:"0 0 17 13",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:e("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",children:e("g",{transform:"translate(-2832.000000, -1103.000000)",stroke:"#FFFFFF",strokeWidth:"3",children:e("g",{transform:"translate(2610.000000, 955.000000)",children:e("g",{transform:"translate(24.000000, 91.000000)",children:e("g",{transform:"translate(179.177408, 36.687816)",children:e("polyline",{points:"34.2767388 22 24.797043 31.4796958 21 27.6826527"})})})})})})})),w="adm-selector",we={multiple:!1,defaultValue:[],showCheckMark:!0},Ce=s=>{const t=j(we,s),[o,m]=K({value:t.value,defaultValue:t.defaultValue,onChange:n=>{var c;const u={get items(){return t.options.filter(l=>n.includes(l.value))}};(c=t.onChange)===null||c===void 0||c.call(t,n,u)}}),f=t.options.map(n=>{const c=(o||[]).includes(n.value),u=n.disabled||t.disabled,l=I(`${w}-item`,{[`${w}-item-active`]:c&&!t.multiple,[`${w}-item-multiple-active`]:c&&t.multiple,[`${w}-item-disabled`]:u});return r("div",{className:l,onClick:()=>{if(!u)if(t.multiple){const b=c?o.filter(i=>i!==n.value):[...o,n.value];m(b)}else{const b=c?[]:[n.value];m(b)}},children:[n.label,n.description&&e("div",{className:`${w}-item-description`,children:n.description}),c&&t.showCheckMark&&e("div",{className:`${w}-check-mark-wrapper`,children:e(ke,{})})]},n.value)});return _(t,r("div",{className:w,children:[!t.columns&&e(de,{wrap:!0,children:f}),t.columns&&e(ye,{columns:t.columns,gap:fe(8),children:f})]}))},Ne=Ce,xe=g.div`

`,Be=g.div`
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: white;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .adm-nav-bar-title{
        padding: 0; 
    }
    .search_wrapper{
        height: 1.75rem;
        width: 13rem;
        border-radius: 0.85rem;
        background-color: #F4F4F4;
        display: flex;
        align-items: center;
        color: gray;
        .search_icon{
            margin: 0 .8rem;
            font-size: 1.2rem;
        }
    }
    
`,Se=g.div`
    display: flex;
    align-items: center;
    position: sticky;
    bottom: 0;
    z-index: 999;
    background-color: white;
    padding: .4rem .4rem;
    .icons_wrapper{
        display: flex;
        align-items: center;
        width: 8rem;
        justify-content: space-around;
        .icons_item_wrapper{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon{
                width: 1.4rem;
                height: 1.4rem;
            }
            .img_icon{
                width: 1.4rem;
                height: 1.4rem;
            }
        }
    }
    .btn_wrapper{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .btn{
            text-align: center;
            width: 5rem;
            height: 2.5rem;
            line-height: 2.5rem;
        }
        .btn_cart{
            color: ${R["theme-color"]};
            background-color: #FFF4F6; 
        }
        .btn_buy{
            color: white;
            background-color: ${R["theme-color"]};
        }
    }
`,_e=g.div`
    background-color: white;
    position: sticky;
    top: 2.25rem;
    z-index: 999;
`,Fe=g.div`
    min-height: 32rem;
    margin-bottom: 2rem;
`,$e=g.div`
    /* height: 50rem; */
    div{
        width: 100%;
        height: auto;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`,Ie="/assets/5.3e9cf09c.jpg",je=()=>e($e,{children:e("div",{children:e("img",{src:Ie,alt:""})})}),Pe=g.div`
    /* height: 50rem; */
    /* margin-top:2.5rem; */
    /* padding-top: 4.5rem; */
    .img-wrapper-t{
        width: 100%;
        height: auto;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`,Ee=g.div`
   .img-wrapper{
        width: 100%;
        height: 18.75rem;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
   }

`,Re="/assets/1.fba45bfd.jpg",Te="/assets/2.419e62b9.jpg",Ae="/assets/3.6ec3582c.jpg",De="/assets/4.d9eee81b.jpg",ze=()=>{const t=[Re,Te,Ae].map((o,m)=>e(D.Item,{children:e("div",{className:"img-wrapper",children:e("img",{src:o,alt:""})})},m));return r(Pe,{children:[e(Ee,{children:e(D,{autoplay:!0,loop:!0,children:t})}),e("div",{className:"img-wrapper-t",children:e("img",{src:De,alt:""})})]})},We=g.div`
height: 50rem;
`,Me=()=>e(We,{children:"GoodsDetailBanner"}),Oe=g.div`
height: 50rem;
`,Le=()=>e(Oe,{children:e(me,{})}),Ve=g.div`
        height: 75vh;
        display: flex;
        margin: .5rem 0.5rem;
        justify-content: space-between;
        flex-direction: column;
        .buy-info{
            display: flex;
            .buy-choose{
                margin-top: 1rem;
                margin-left: .5rem;
                .price{
                    color: red;
                }
                .stock{
                    color: gray;
                    font-size: .6rem;
                    margin: .4rem 0;
                }
                .chosen-info{
                    font-size: .7rem;
                    .chosen{
                        margin: 0 .2rem;
                    }
                }
            }   
        }
        .buy-count{
            display: flex;
            font-size: .8rem;
            align-items:center;
            justify-content: space-between;
            .chosen-count{
                align-items: center;
                button{
                    width: 1.5rem;
                    height: 1.5rem;
                    font-size: 1rem;
                    border: 0;
                    background-color: #f5f5f5;
                }
                .count{
                    margin: 0 .5rem;
                }
            }
        }
        .btn-buy{
            height: 2.5rem;
            width: 100%;
            background-color: red;
            color: white;
            font-size: 1rem;
            border: 0;
        }
`,Ge=({tagertGoodsInfo:s,targetShopInfo:t,onSetVisible:o})=>{const{imgUrl:m,price:f,types:n}=s,[c,u]=p.exports.useState(1),[l,b]=p.exports.useState([]),[i,d]=p.exports.useState({shopId:s.shopId,name:s.name,imgUrl:s.imgUrl,price:s.price,checked:!1}),y=l,C=h=>{u(c+h>0?c+h:1)},F=(h,v)=>{y[v]=h,b([...y])},B=H();return p.exports.useEffect(()=>{d({...i,id:s.id+l.join(" / "),count:c,type:l.join(" / ")})},[c,l]),r(Ve,{children:[r("div",{className:"buy-info",children:[e("div",{className:"img",style:{width:"4rem",height:"4rem"},children:e("img",{src:m,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}),r("div",{className:"buy-choose",children:[r("div",{className:"price",children:["\uFFE5",f]}),e("div",{className:"stock",children:"\u5E93\u5B58896\u4EF6"}),r("div",{className:"chosen-info",children:[e("span",{children:"\u8BF7\u9009\u62E9"}),n.allTypes.map((h,v)=>e("span",{className:"chosen",children:l[v]?l[v]:h},v))]})]})]}),e("div",{className:"type_chosen_wrapper",children:n.allTypes.map((h,v)=>r("div",{className:"type_chosen",children:[e("div",{className:"type",children:h}),e(Ne,{onChange:a=>{F(a[0],v)},options:n[h].map(a=>({label:a,value:a})),showCheckMark:!1,style:{"--checked-text-color":"red","--checked-color":"pink"}})]},v))}),r("div",{className:"buy-count",children:[e("span",{children:"\u8D2D\u4E70\u6570\u91CF"}),r("span",{className:"chosen-count",children:[e("button",{className:"btn-reduce",onClick:()=>C(-1),children:"-"}),e("span",{className:"count",children:c}),e("button",{className:"btn-add",onClick:()=>C(1),children:"+"})]})]}),e("div",{className:"btn-buy-container",children:e("button",{className:"btn-buy",onClick:()=>{B(q({targetShopInfo:t,buyGoodsInfo:i})),o(),ue.show({content:"\u52A0\u5165\u8D2D\u7269\u8F66\u6210\u529F!"})},children:"\u786E\u8BA4"})})]})},Ue="/assets/shopIcon.4893e2ff.svg",Ke="/assets/collected.0ae2efd9.svg",Qe=()=>{const s=J(),t=Y(),{goods:o,shops:m}=T(a=>a.goodsInfo),f=o.byId[t.id],n=m.byId[f.shopId],[c,u]=p.exports.useState("goods"),[l,b]=p.exports.useState(!1),[i,d]=p.exports.useState(!1),y=()=>{d(!1)},C=[{key:"goods",title:"\u5546\u54C1"},{key:"comment",title:"\u8BC4\u4EF7"},{key:"detail",title:"\u8BE6\u60C5"},{key:"recommend",title:"\u63A8\u8350"}],F=95,{run:B}=Q(()=>{let a=C[0].key;for(const k of C){const P=document.getElementById(`anchor-${k.key}`);if(!P)continue;if(P.getBoundingClientRect().top<=F)a=k.key;else break}u(a)},{leading:!0,trailing:!0,wait:100});p.exports.useEffect(()=>(window.addEventListener("scroll",B),()=>{window.removeEventListener("scroll",B)}),[]);const h=()=>{const{buyGoods:a}=T(k=>k.cartInfo);return e(A,{children:e(X,{right:e(Z,{to:"/cart",children:e(ee,{content:a.allIds.length?a.allIds.length:"",color:"#FF2C57",children:e("i",{className:"iconfont icon-gouwuche "})})}),onBack:()=>{s(-1)},children:r("div",{className:"search_wrapper",children:[e("div",{className:"search_icon",children:e(te,{})}),e("span",{className:"search_tips",children:"\u641C\u7D22\u6211\u7684\u8BA2\u5355"})]})})})},v=()=>r(A,{children:[r("div",{className:"icons_wrapper",children:[r("div",{className:"icons_item_wrapper",children:[e("div",{className:"icon",children:e("img",{className:"img_icon",src:Ue})}),e("div",{className:"name",children:"\u5E97\u94FA"})]}),r("div",{className:"icons_item_wrapper",children:[e("div",{className:"icon",children:e("i",{className:"iconfont icon-kefu"})}),e("div",{className:"name",children:"\u5BA2\u670D"})]}),r("div",{className:"icons_item_wrapper",onClick:()=>b(!l),children:[e("div",{className:"icon",children:l?e("img",{className:"img_icon",src:Ke}):e("i",{className:"iconfont icon-shoucang1"})}),e("div",{className:"name",children:"\u6536\u85CF"})]})]}),r("div",{className:"btn_wrapper",children:[e("div",{className:"btn btn_cart",onClick:()=>{d(!0)},children:"\u52A0\u5165\u8D2D\u7269\u8F66"}),e("div",{className:"btn btn_buy",onClick:()=>{d(!0)},children:"\u7ACB\u5373\u8D2D\u4E70"})]})]});return r(xe,{children:[e(Be,{children:h()}),e(_e,{children:e(z,{activeKey:c,onChange:a=>{var k;(k=document.getElementById(`anchor-${a}`))==null||k.scrollIntoView(),window.scrollTo({top:window.scrollY-90}),u(a)},children:C.map(a=>e(z.Tab,{title:a.title},a.key))})}),r(Fe,{children:[e("div",{id:"anchor-goods",children:e(ze,{})}),e("div",{id:"anchor-comment",children:e(je,{})}),e("div",{id:"anchor-detail",children:e(Me,{})}),e("div",{id:"anchor-recommend",children:e(Le,{})})]}),e(Se,{children:v()}),e(ge,{visible:i,showCloseButton:!0,onClose:()=>{d(!1)},onMaskClick:()=>{d(!1)},children:e(Ge,{tagertGoodsInfo:f,targetShopInfo:n,onSetVisible:y})})]})};export{Qe as default};
