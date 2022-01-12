import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { registerIcon } from './plugins/elementUI/icon';
import './styles/index.scss';

const app = createApp(App);

app.use(router).use(store, key).use(ElementPlus);

registerIcon(app);

app.mount('#app');
