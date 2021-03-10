import 'vant/lib/index.css';
import Vue from 'vue';
import VueResource from 'vue-resource';
import {Tabbar} from "../../assets/script/";
import '@/assets/css/my.css';
import { NavBar } from 'vant';
import { Image as VanImage } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Divider } from 'vant';
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Divider);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(VanImage);
Vue.use(NavBar);
Vue.use(VueResource);
export default {
  name: 'appcation',
  components: {
		Tabbar
  },
	data() {
	  return {
	    
	  };
	},
	methods: {
		
	},
	created () {
	  
	}
}