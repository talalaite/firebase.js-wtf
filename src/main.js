import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'zurb-foundation-5/scss/normalize.scss';
import 'zurb-foundation-5/scss/foundation.scss';
import './services/firebase';

createApp(App)
  .use(router)
  .mount('#app');
