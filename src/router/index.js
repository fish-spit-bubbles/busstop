import Vue from 'vue';
import Router from 'vue-router';
import FromHeader from '@/components/FromHeader';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'FromHeader',
			component: FromHeader
		}
	]
});
