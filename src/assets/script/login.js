"use strict";
import Vue from 'vue';
import "../css/login.css";
import { Tab, Tabs } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(Tab);
Vue.use(Tabs);
export default {
	data() {
		return {
			active: 2,
			username: '',
			password: '',
			tel: '',
			sms:''
		};
	},
	methods: {
		onSubmit(values) {
			console.log('submit', values);
		},
	},
};