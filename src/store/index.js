import { createStore } from "vuex";
import uye from "./modules/uye";

const store = createStore({
  state: {},
  modules: {
    uye,
  },
});

export default store;
