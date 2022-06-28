// const keyArray=[];
// export const isRequest=(requestKey,key)=>{
//     if(!requestKey.includes(key)){
//         return true;
//     }
//     return false;
// }

// 检查元素是否出现在可视区域
export function checkImgs(){
    const imgs = Array.from(document.querySelectorAll(".img"));
    imgs.forEach(item => io.observe(item));
}

function loadImg(el){
    const source=el.dataset.src;
    el.src=source;
}

function callback_ioes(ioes){
    ioes.forEach(ioe=>{
      const el = ioe.target;//被观察的目标元素，是一个 DOM 节点对象
      // 目标元素的可见比例，即intersectionRect占boundingClientRect的比例，
      // 完全可见时为1，完全不可见时小于等于0
      const intersectionRatio=ioe.intersectionRatio;
      // 进入可视区域加载图片
      if (intersectionRatio > 0 && intersectionRatio <= 1) {
        loadImg(el);
      }
      el.onload = el.onerror = () => io.unobserve(el);//停止对其的观察
    })
}

// 定义观察器实例
const io = new IntersectionObserver(callback_ioes)

export function throttle(fn, mustRun = 200){
    const timer = null;
    let previous = null;
    return function() {
      const now = new Date();
      const context = this;
      const args = arguments;
      if (!previous) {
        previous = now;
      }
      const remaining = now - previous;
      if (mustRun && remaining >= mustRun) {
        fn.apply(context, args);
        previous = now;
      }
    }
}
// 生成hashcode
export function createHash (hashLength) {
    // 默认长度 24
    return Array.from(Array(Number(hashLength) || 24), 
                () => Math.floor(Math.random() * 36).toString(36)).join('');
}
