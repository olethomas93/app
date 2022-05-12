import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Card from 'primevue/card';
import Button from 'primevue/button'
import Tabmenu from 'primevue/tabmenu'
import App from "@/App.vue";
import router from "./router";
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMap,faWater,faMountain,faCloudSun,faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BootstrapVue3 from 'bootstrap-vue-3'
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


library.add(faMap);
library.add(faWater);
library.add(faMountain);
library.add(faCloudSun);
library.add(faCloud);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(BootstrapVue3)
app.component('Card', Card);
app.component('Button', Button);
app.component('TabMenu',Tabmenu)
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('font-awesome',FontAwesomeIcon)
app.mount("#app");
