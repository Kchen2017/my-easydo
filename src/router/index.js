import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
    base: '/host/',
	routes: [
		{
            path: '/',
            redirect: '/go'
        },{
	    	path: '/go',
	    	name: "go",
	    	component: r => require.ensure([], () => (require('@/components/gowhere/index.vue')))
	    },{
	    	path: '/who',
	    	name: "who",
	    	component: r => require.ensure([], () => (require('@/components/withWho/index.vue')))
	    },{
	    	path: '/news',
	    	name: "news",
	    	component: r => require.ensure([], () => (require('@/components/news/index.vue')))
	    },{
	    	path: '/my',
	    	name: "my",
	    	component: r => require.ensure([], () => (require('@/components/my/index.vue')))
	    }
	]
})
