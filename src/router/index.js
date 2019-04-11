import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
    base: '/host/',
	routes: [
		{
            path: '/',
            redirect: '/common/index'
        },{
	    	path: '/common',
	    	name: "common",
	    	component: r => require.ensure([], () => (require('@/common.vue'))),
	    	children: [{
		    	path: 'index',
		    	name: "index",
		    	component: r => require.ensure([], () => (require('@/components/index/index.vue')))
		    },{
		    	path: 'easy_go',
		    	name: "easy_go",
		    	component: r => require.ensure([], () => (require('@/components/easy_go/index.vue')))
		    },{
		    	path: 'my',
		    	name: "my",
		    	component: r => require.ensure([], () => (require('@/components/my/index.vue')))
		    }]
	    },
	    {
	    	path: '/index/city',
	    	name: "city",
	    	component: r => require.ensure([], () => (require('@/components/index/components/selectedCity.vue')))
	    },
	    {
	    	path: '/index/search',
	    	name: "search",
	    	component: r => require.ensure([], () => (require('@/components/index/components/searchPage.vue')))
	    }
	]
})
