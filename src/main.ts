import { createApp } from 'vue'

// 引入element-plus（vue-cli4项目）
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'; // 默认的

import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')