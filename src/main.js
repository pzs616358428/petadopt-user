// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入ueditor需要的文件
import '../static/ueditor/ueditor.config';
import '../static/ueditor/ueditor.all.min';
import '../static/ueditor/lang/zh-cn/zh-cn';
import '../static/ueditor/ueditor.parse.min';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
