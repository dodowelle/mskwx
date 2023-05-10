// stores/counter.js
import { defineStore } from 'pinia';

export const useAppStore = defineStore('counter', {
	state: () => {
		return { 
			clickedNav: '', // 点击的一级导航
			activeItem: '', // 点击的二级导航
			
		};
	},
	actions: {
		setClickedNav (val) {
			this.clickedNav = val
		},
		setActiveItem(val) {
			this.activeItem = val;
		},
	},
});
