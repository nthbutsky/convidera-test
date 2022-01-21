import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import HighchartsVue from "highcharts-vue";

Vue.config.productionTip = false;

new Vue({
  HighchartsVue,
  render: (h) => h(App),
}).$mount("#app");
