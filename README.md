准备工作
- 本次将会使用 react-router  react-redux RTK axios antd-mobile styled-components等库
    npm i react-router-dom react-router react-redux @reduxjs/toolkit axios antd-mobile
    并使用 IconFont 图标字体库
    nmp i react-lazyload 使用 lazyLoad 实现图片懒加载

- 移动端自适应配置 在public/js/adapter.js中配置
    rem 单位
    并在index.html中引入<script src="/public/js/adapter.js"></script>
- 全局样式重置
    reset.css
- 全局样式定义
    global-style.js
- 路径别称配置
    在vite.config.js中添加
    resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
    },

- react-router 的使用
    首先从 react-router-dom 到入 BrowserRouter/HashRouter 置于应用顶层
    路由配置 从react-router 导入Routes和Route 配置路由
    这里 将路由进行统一管理 放在 /routes 下  最后导出RoutesConfig就可以
    性能优化并配合 Lazy 和 Suspense 实现延迟加载 真正需要时才加载该组件的文件 

- 主页面Home搭建



 