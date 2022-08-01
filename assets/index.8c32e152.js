import{r as a,m as N,i as F,j as r,w as _,M as j,a as s,x as B,b as P,s as p,c as g,u as L,O as E,_ as C,t as v,P as O,Q as W,T as z,U as D,V as A,W as M,e as R,f as S,F as w,N as T,X as U,Y as y}from"./index.6a57b9ec.js";import{i as V,d as I,T as b,R as H}from"./index.31f3ae4c.js";import{M as Z}from"./index.c40a6943.js";const $=a.exports.createContext(null),q={disabled:!1,defaultValue:[]},Q=e=>{const o=N(q,e),[c,t]=F(o);return r($.Provider,{value:{value:c,disabled:o.disabled,check:i=>{t([...c,i])},uncheck:i=>{t(c.filter(n=>n!==i))}},children:o.children})},X=a.exports.memo(e=>_(e,r("svg",{viewBox:"0 0 40 40",children:r("path",{d:"M31.5541766,15 L28.0892433,15 L28.0892434,15 C27.971052,15 27.8576674,15.044522 27.7740471,15.1239792 L18.2724722,24.1625319 L13.2248725,19.3630279 L13.2248725,19.3630279 C13.1417074,19.2834412 13.0287551,19.2384807 12.9107898,19.2380079 L9.44474455,19.2380079 L9.44474454,19.2380079 C9.19869815,19.2384085 8.99957935,19.4284738 9,19.66253 C9,19.7747587 9.04719253,19.8823283 9.13066188,19.9616418 L17.0907466,27.5338228 C17.4170809,27.8442545 17.8447695,28 18.2713393,28 L18.2980697,28 C18.7168464,27.993643 19.133396,27.8378975 19.4530492,27.5338228 L31.8693384,15.7236361 L31.8693384,15.7236361 C32.0434167,15.5582251 32.0435739,15.2898919 31.8696892,15.1242941 C31.7860402,15.0446329 31.6725052,15 31.5541421,15 L31.5541766,15 Z",fill:"currentColor"})}))),Y=a.exports.memo(e=>_(e,r("svg",{viewBox:"0 0 40 40",children:r("path",{d:"M20,9 C26.0752953,9 31,13.9247047 31,20 C31,26.0752953 26.0752953,31 20,31 C13.9247047,31 9,26.0752953 9,20 C9,13.9247047 13.9247047,9 20,9 Z",fill:"currentColor"})}))),J=e=>{const o=a.exports.useRef(null),c=j(t=>{t.stopPropagation(),t.stopImmediatePropagation();const i=t.target.checked;i!==e.checked&&e.onChange(i)});return a.exports.useEffect(()=>{if(e.disabled||!o.current)return;const t=o.current;return t.addEventListener("click",c),()=>{t.removeEventListener("click",c)}},[e.disabled,e.onChange]),r("input",{ref:o,type:e.type,checked:e.checked,onChange:()=>{},disabled:e.disabled,id:e.id})},u="adm-checkbox",K={defaultChecked:!1,indeterminate:!1},ee=a.exports.forwardRef((e,o)=>{const c=a.exports.useContext($),t=N(K,e);let[i,n]=F({value:t.checked,defaultValue:t.defaultChecked,onChange:t.onChange}),l=t.disabled;const{value:h}=t;c&&h!==void 0&&(V&&(e.checked!==void 0&&I("Checkbox","When used within `Checkbox.Group`, the `checked` prop of `Checkbox` will not work."),e.defaultChecked!==void 0&&I("Checkbox","When used within `Checkbox.Group`, the `defaultChecked` prop of `Checkbox` will not work.")),i=c.value.includes(h),n=m=>{var f;m?c.check(h):c.uncheck(h),(f=t.onChange)===null||f===void 0||f.call(t,m)},l=l||c.disabled),a.exports.useImperativeHandle(o,()=>({check:()=>{n(!0)},uncheck:()=>{n(!1)},toggle:()=>{n(!i)}}));const d=()=>t.icon?r("div",{className:`${u}-custom-icon`,children:t.icon(i,t.indeterminate)}):r("div",{className:`${u}-icon`,children:t.indeterminate?r(Y,{}):i&&r(X,{})});return _(t,s("label",{className:B(u,{[`${u}-checked`]:i&&!t.indeterminate,[`${u}-indeterminate`]:t.indeterminate,[`${u}-disabled`]:l,[`${u}-block`]:t.block}),children:[r(J,{type:"checkbox",checked:i,onChange:n,disabled:l,id:t.id}),d(),t.children&&r("div",{className:`${u}-content`,children:t.children})]}))}),k=P(ee,{Group:Q}),re=p.div`
    .main{
        min-height:100vh; 
    }
    
`,te=p.div`
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f5f5;
    position: sticky;
    top: 0;
    z-index: 999;
`,ie=p.div`
`,ne=p.div`
    position: sticky;
    bottom: 0;
    padding: .8rem .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    .checkbox_wrapper{
        display: flex;
        align-items: center;
        position: relative;
        &:after{
            position: absolute;
            content: '';
            display: block;
            height: .8rem;
            width: 0.075rem;
            background-color: gray;
            top: 50%;
            left: 110%;
            transform: translate(-110%,-50%);
        }
    }
    .footer_buy_wrapper{

        display: flex;
        align-items: center;
        font-size: .8rem;
        height: 2rem;
        .buy_total{
            line-height: 2rem;
            .total{
                font-size: 1.4rem;
                color: ${g["theme-color"]};
            }
        }
        .buy_settle{
            margin-left: .4rem;
            .button_settle{
                border: none;
                width: 5rem;
                height: 2rem;
                background-color: ${g["theme-color"]};
                border-radius: .5rem;
                font-size: 1rem;
                line-height: 2rem;
                color: white;
            }
        }
    }
`,oe=p.div`
    margin-bottom: .8rem;
    background-color: #f5f5f5;
    border-radius: 1rem;
    .checkbox_wrapper{
        margin: 0 .8rem;
    }
`,ce=p.div`
    border-radius: 1rem 1rem 0 0;
    background-color: white;
    margin: 0 .8rem;
    padding: 0.8rem 0;
    display: flex;
    
    .shop_info_wrapper{
        display: flex;
        height: 1rem;
        .shop_img_wrapper{
            width: 1rem;
            height: 1rem;
            .shop_img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .shop_name{
            font-size: .8rem;
            font-weight: bold;
            margin-left: .4rem;
            line-height: 1rem;
        }
    }

`,se=p.div`
    margin: 0 .8rem;
    background-color: white;
    padding: 0 .8rem .8rem 0;
    border-radius: 0 0 1rem 1rem;
    .item_wrapper{
        padding: .4rem 0;
        display: flex;
        align-items: center;
        .item_info_wrapper{
        display: flex;
        flex: 1;
        align-items: center;
        .item_img_wrapper{
            width: 4rem;
            height: 4rem;
            .item_img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .item_detail_wrapper{
            height: 4rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: .8rem;
            .item_name{
                font-size: .8rem;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .item_type{
                font-size: .7rem;
                height: 1rem;
                line-height: 1rem;
                color: gray;
                background-color: #f5f5f5;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .item_price_count_wrapper{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .item_price{
                    color: ${g["theme-color"]};
                    font-size: 1.2rem;
                }
                .item_count_wrapper{
                    display: flex;
                    align-items: center;
                    border: .05rem solid gray;
                    border-radius: .5rem;
                    font-size: .8rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    .item_count_button{
                        border-radius: .5rem;
                        background-color: #f5f5f5;
                        width: 1.6rem;
                        font-weight: bold;
                        text-align: center;
                        border: none;
                    }
                    .item_count{
                        width: 1.6rem;
                        text-align: center;
                        border-left: .05rem solid gray;
                        border-right: .05rem solid gray;

                    }
                }
            }
        }
        
    }
    }
    
`,de=({shop:e,buyGoods:o})=>{const c=L(),t=i=>{const{id:n,name:l,imgUrl:h,type:d,price:m,count:f,checked:G}=i;return s("div",{className:"item_wrapper",children:[r("div",{className:"checkbox_wrapper",onClick:()=>{c(O({id:n}))},children:r(k,{checked:G})}),s("div",{className:"item_info_wrapper",children:[r("div",{className:"item_img_wrapper",children:r(C,{className:"item_img_wrapper",placeholder:r("img",{width:"100%",height:"100%",style:{objectFit:"cover"},src:v}),children:r("img",{src:h,alt:"",className:"item_img"})})}),s("div",{className:"item_detail_wrapper",children:[r("div",{className:"item_name",children:l}),r("div",{className:"item_type",children:d}),s("div",{className:"item_price_count_wrapper",children:[s("div",{className:"item_price",children:["\uFFE5",m]}),s("div",{className:"item_count_wrapper",children:[r("div",{className:"item_count_button item_count_decrease",onClick:()=>{c(W({id:n}))},children:"-"}),r("div",{className:"item_count",children:f}),r("div",{className:"item_count_button item_count_increase",onClick:()=>{c(z({id:n}))},children:"+"})]})]})]})]})]},n)};return s(oe,{children:[s(ce,{children:[r("div",{className:"checkbox_wrapper",onClick:()=>{c(E({shop:e,buyGoods:o}))},children:r(k,{checked:e.buyGoods.length==e.buyGoods.filter(i=>o.byId[i].checked).length})}),s("div",{className:"shop_info_wrapper",children:[r("div",{className:"shop_img_wrapper",children:r(C,{className:"shop_img_wrapper",placeholder:r("img",{width:"100%",height:"100%",style:{objectFit:"cover"},src:v}),children:r("img",{src:e.imgUrl,alt:"",className:"shop_img"})})}),s("div",{className:"shop_name",children:[e.name,">"]})]})]}),r(se,{children:e.buyGoods.map(i=>t(o.byId[i]))})]})},x=D("ordersInfo/getOrdersInfo",async()=>await M()),ae={},le=A({name:"ordersInfo",initialState:ae,reducers:{deleteOrder:(e,{payload:o})=>{Reflect.deleteProperty(e.orders.byId,o.order.id),e.orders.allIds=e.orders.allIds.filter(c=>c!==o.order.id)},addOrder:(e,{payload:o})=>{const t=o.buyGoods.allIds.filter(n=>o.buyGoods.byId[n].checked).map(n=>o.buyGoods.byId[n]);t.map(n=>{e.buyGoods.allIds.push(n.id),e.buyGoods.byId[n.id]=n}),t.map(n=>{e.shops.allIds.includes(n.shopId)||(e.shops.allIds.push(n.shopId),e.shops.byId[n.shopId]={id:o.shops.byId[n.shopId].id,name:o.shops.byId[n.shopId].name,imgUrl:o.shops.byId[n.shopId].imgUrl})});const i={};t.forEach(n=>{n.shopId in i?i[n.shopId]=[...i[n.shopId],n.id]:i[n.shopId]=[n.id]});for(let n in i)e.orders.byId["order"+n]={id:"order"+n,shopId:n,buyGoods:i[n],state:"\u5F85\u652F\u4ED8"},e.orders.allIds.push("order"+n)}},extraReducers(e){e.addCase(x.pending,o=>{console.log("\u8BF7\u6C42\u8BA2\u5355\u6570\u636E\u4E2D\u3002\u3002\u3002")}).addCase(x.fulfilled,(o,{payload:c})=>{o=Object.assign(o,c)})}}),{deleteOrder:fe,addOrder:he}=le.actions;b.config({duration:500,position:"center"});const ge=()=>{const[e,o]=a.exports.useState(!1),c=L(),{shops:t,buyGoods:i}=R(d=>d.cartInfo),n=S(),l=()=>r(w,{children:s(T,{right:r("div",{onClick:()=>o(!e),children:e?"\u5B8C\u6210":"\u7BA1\u7406"}),onBack:()=>{n(-1)},children:["\u8D2D\u7269\u8F66",`(${i.allIds.length})`]})}),h=()=>s(w,{children:[r("div",{className:"checkbox_wrapper",onClick:()=>{c(U({shops:t,buyGoods:i}))},children:r(k,{checked:i.allIds.length==i.allIds.filter(d=>i.byId[d].checked).length&&t.allIds.length,children:"\u5168\u9009"})}),s("div",{className:"footer_buy_wrapper",children:[!e&&s("div",{className:"buy_total",children:[r("span",{children:"\u5408\u8BA1:"}),s("span",{className:"total",children:["\uFFE5",i.allIds.reduce((d,m)=>d+(i.byId[m].checked?parseFloat(i.byId[m].price*i.byId[m].count):0),0)]})]}),r("div",{className:"buy_settle",children:e?r("button",{className:"button_settle",onClick:()=>{c(y({shops:t,buyGoods:i})),b.show({content:"\u5220\u9664\u6210\u529F"})},children:"\u5220\u9664"}):s("button",{className:"button_settle",onClick:()=>{Z.show({title:"\u786E\u5B9A\u8D2D\u4E70\u5546\u54C1?",content:"\u5C06\u524D\u5F80\u8BA2\u5355\u9875\u9762\u652F\u4ED8",closeOnMaskClick:!0,showCloseButton:!0,closeOnAction:!0,actions:[{key:"confirm",text:"\u786E\u8BA4",primary:!0,onClick:()=>{c(he({shops:t,buyGoods:i})),c(y({shops:t,buyGoods:i})),b.show({content:"\u64CD\u4F5C\u6210\u529F"})}}]})},children:["\u7ED3\u7B97",`(${i.allIds.filter(d=>i.byId[d].checked).length})`]})})]})]});return s(re,{children:[r(te,{children:l()}),r("div",{className:"main",children:r(ie,{children:t.allIds.map(d=>r(de,{shop:t.byId[d],buyGoods:i},d))})}),r(H,{}),r(ne,{children:h()})]})};export{ge as default};
