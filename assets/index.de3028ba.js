import{j as e,a as i,b as C,s as c,c as E,u as B,_ as b,t as v,d as D,e as O,r as x,f as j,B as z,F as M,N as A}from"./index.6a57b9ec.js";import{S,a as T,T as I,b as W}from"./swiper.38259ec8.js";import{M as R}from"./index.c40a6943.js";import{T as N,R as G}from"./index.31f3ae4c.js";function $(t){return e("svg",{...Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["antd-mobile-icon",t.className].filter(Boolean).join(" ")}),children:e("g",{id:"MoreOutline-MoreOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",children:i("g",{id:"MoreOutline-\u7F16\u7EC4",children:[e("rect",{id:"MoreOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),e("path",{d:"M12,21 C13.6568542,21 15,22.3431458 15,24 C15,25.6568542 13.6568542,27 12,27 C10.3431458,27 9,25.6568542 9,24 C9,22.3431458 10.3431458,21 12,21 Z M24,21 C25.6568542,21 27,22.3431458 27,24 C27,25.6568542 25.6568542,27 24,27 C22.3431458,27 21,25.6568542 21,24 C21,22.3431458 22.3431458,21 24,21 Z M36,21 C37.6568542,21 39,22.3431458 39,24 C39,25.6568542 37.6568542,27 36,27 C34.3431458,27 33,25.6568542 33,24 C33,22.3431458 34.3431458,21 36,21 Z",id:"MoreOutline-\u5F62\u72B6\u7ED3\u5408",fill:"currentColor",fillRule:"nonzero"})]})})})}const o=C(T,{Item:S}),H=c.div`

`,L=c.div`
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
    
`,Z=c.div`
    position: sticky;
    top: 2.5rem;
    z-index: 999;
    background-color: white;
`,U=c.div`
`,K=c.div`
    margin-bottom:.8rem 
`,P=c.div`
    border-radius: 1rem 1rem 0 0;
    background-color: white;
    margin: 0 .8rem;
    padding: 0.8rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .shop_info_wrapper{
        display: flex;
        height: 1rem;
        padding-left: .8rem;
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
    .order_state{
        font-size: .8rem;
        font-weight: bold;
        margin-right: .8rem;
        line-height: 1rem;
        color: ${E["theme-color"]};
    }
`,X=c.div`
    margin: 0 .8rem;
    background-color: white;
    padding-bottom: .8rem;
    border-radius: 0 0 1rem 1rem;
    .item_wrapper{
        padding: .4rem 0;
        display: flex;
        align-items: center;
        .item_info_wrapper{
            display: flex;
            align-items: center;
            padding: 0 .8rem;
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
                margin-left: .4rem;
                .flex_wrapper{
                    display: flex;
                    align-items: center;
                }
                .item_name_price_wrapper{
                    justify-content: space-between;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    .item_name{
                        font-size: 1rem;
                        max-width: 8rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .item_price{
                        font-size: .8rem;
                        color: gray;
                        max-width: 3rem;
                    }
                }
                .item_type_count_wrapper{
                    justify-content: space-between;
                    font-size: .8rem;
                    color: gray;
                }
                .item_tag_wrapper{
                    font-size: .6rem;
                    color: gray;
                    .item_tag{
                        height: 1rem;
                        line-height: 1rem;
                        padding: 0 .2rem;
                        border: .05rem solid gray;
                        border-radius: .3rem;
                    }
                }
            }
        }
    }
    .item_total_action_wrapper{
        padding: 0 .8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        .item_total{
            font-size: 1rem;
            margin: .8rem 0;
        }
        .item_action{
            display: flex;
            .button{
                width: 4rem;
                height: 1.6rem;
                font-size: .8rem;
                border: .1rem solid gray;
                border-radius: .5rem;
                margin-left: .4rem;
                text-align: center;
                line-height: 1.6rem;   
            }
        }
    }
`;N.config({duration:500,position:"center"});const F=({order:t,shop:s,buyGoods:l})=>{const _=B(),h=n=>{const{id:d,name:u,imgUrl:f,type:w,price:p,count:r}=n;return e("div",{className:"item_wrapper",children:i("div",{className:"item_info_wrapper",children:[e("div",{className:"item_img_wrapper",children:e(b,{className:"item_img_wrapper",placeholder:e("img",{width:"100%",height:"100%",style:{objectFit:"cover"},src:v}),children:e("img",{src:f,alt:"",className:"item_img"})})}),i("div",{className:"item_detail_wrapper",children:[i("div",{className:"item_name_price_wrapper flex_wrapper",children:[e("div",{className:"item_name",children:u}),i("div",{className:"item_price",children:["\uFFE5",p]})]}),i("div",{className:"item_type_count_wrapper flex_wrapper",children:[e("div",{className:"item_type",children:w}),i("div",{className:"item_count",children:["x",r]})]}),e("div",{className:"item_tag_wrapper flex_wrapper",children:e("div",{className:"item_tag",children:"7\u5929\u65E0\u7406\u7531\u9000\u8D27"})})]})]})},d)};return i(K,{children:[i(P,{children:[i("div",{className:"shop_info_wrapper",children:[e("div",{className:"shop_img_wrapper",children:e(b,{className:"shop_img_wrapper",placeholder:e("img",{width:"100%",height:"100%",style:{objectFit:"cover"},src:v}),children:e("img",{src:s.imgUrl,alt:"",className:"shop_img"})})}),i("div",{className:"shop_name",children:[s.name,">"]})]}),e("div",{className:"order_state",children:t.state})]}),i(X,{children:[l.map(n=>h(n)),i("div",{className:"item_total_action_wrapper",children:[i("div",{className:"item_total",children:["\u5408\u8BA1:",i("span",{className:"prcie",children:["\uFFE5",l.reduce((n,d)=>n+d.price*d.count,0)]})]}),i("div",{className:"item_action",children:[e("div",{className:"button_del button",onClick:()=>{R.show({title:"\u786E\u5B9A\u5220\u9664\u8BA2\u5355?",content:"\u5220\u9664\u8BA2\u5355\u540E\u4E0D\u53EF\u6062\u590D",closeOnMaskClick:!0,showCloseButton:!0,closeOnAction:!0,actions:[{key:"confirm",text:"\u786E\u8BA4",primary:!0,onClick:()=>{_(D({order:t})),N.show({content:"\u5220\u9664\u6210\u529F"})}}]})},children:"\u5220\u9664\u8BA2\u5355"}),e("div",{className:"button_buyagain button",children:"\u518D\u6B21\u8D2D\u4E70"})]})]})]})]})},ee=()=>{const{orders:t,shops:s,buyGoods:l,state:_}=O(r=>r.ordersInfo),h=x.exports.useRef(),[n,d]=x.exports.useState(0),u=[{key:"all",title:"\u5168\u90E8"},{key:"bepaid",title:"\u5F85\u652F\u4ED8"},{key:"beshipped",title:"\u5F85\u53D1\u8D27"},{key:"bereceived",title:"\u5F85\u6536\u8D27"},{key:"comment",title:"\u8BC4\u4EF7"},{key:"refund",title:"\u9000\u6B3E/\u552E\u540E"}],f=j(),w=()=>e(M,{children:e(A,{right:e("div",{style:{fontSize:32},children:e($,{})}),onBack:()=>{f(-1)},children:i("div",{className:"search_wrapper",children:[e("div",{className:"search_icon",children:e(W,{})}),e("span",{className:"search_tips",children:"\u641C\u7D22\u6211\u7684\u8BA2\u5355"})]})})}),p=(r,a,g,y)=>r.allIds.filter(m=>r.byId[m].state==a).map(m=>e(F,{order:r.byId[m],shop:g.byId[r.byId[m].shopId],buyGoods:r.byId[m].buyGoods.map(k=>y.byId[k])},m));return i(H,{children:[e(L,{children:w()}),e(Z,{children:e(I,{activeKey:u[n].key,onChange:r=>{var g;const a=u.findIndex(y=>y.key===r);d(a),(g=h.current)==null||g.swipeTo(a)},children:u.map(r=>e(I.Tab,{title:e(z,{color:"#FF2C57",content:_.includes(r.title)&&t.allIds.filter(a=>t.byId[a]&&t.byId[a].state==r.title).length?t.allIds.filter(a=>t.byId[a]&&t.byId[a].state==r.title).length:"",children:r.title})},r.key))})}),i(U,{children:[i(o,{direction:"horizontal",loop:!0,indicator:()=>null,ref:h,defaultIndex:n,onIndexChange:r=>{d(r)},children:[e(o.Item,{children:t.allIds.map(r=>e(F,{order:t.byId[r],shop:s.byId[t.byId[r].shopId],buyGoods:t.byId[r].buyGoods.map(a=>l.byId[a])},r))}),e(o.Item,{children:p(t,"\u5F85\u652F\u4ED8",s,l)}),e(o.Item,{children:p(t,"\u5F85\u53D1\u8D27",s,l)}),e(o.Item,{children:p(t,"\u5F85\u6536\u8D27",s,l)}),e(o.Item,{children:e("div",{children:"\u8BC4\u4EF7"})}),e(o.Item,{children:e("div",{children:"\u9000\u6B3E"})})]}),e(G,{})]})]})};export{ee as default};
