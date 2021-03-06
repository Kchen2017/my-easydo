import Vue from 'vue'
import Router from 'vue-router'
var localStore = require('store');
import VueCookie from 'vue-cookie'

Vue.use(Router)

const routerlist =  new Router({
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
		    },{
		    	path: 'gogo',
		    	name: "gogo",
		    	component: r => require.ensure([], () => (require('@/components/go/index.vue')))
		    },{
		    	path: 'playGroud',
		    	name: "playGroud",
		    	component: r => require.ensure([], () => (require('@/components/playGroud/index.vue')))
		    }]
	    },
	    {
	    	path: '/common/index/city',
	    	name: "city",
	    	component: r => require.ensure([], () => (require('@/components/index/components/selectedCity.vue')))
	    },
	    {
	    	path: '/common/index/search',
	    	name: "search",
	    	component: r => require.ensure([], () => (require('@/components/index/components/search/searchPage.vue')))
	    },
	    {
	    	path: '/common/index/filter',
	    	name: "filter",
	    	component: r => require.ensure([], () => (require('@/components/index/components/whereWhoFilter.vue')))
	    },
	    {
	    	path: '/common/index/where_detail/:id',
	    	name: "whereDetail",
	    	component: r => require.ensure([], () => (require('@/components/index/components/where/whereDetail.vue')))
	    },
	    {
	    	path: '/common/index/zugeju',
	    	name: "zugeju",
	    	component: r => require.ensure([], () => (require('@/components/index/components/where/zugejuCom.vue')))
	    },
	    {
	    	path: '/common/index/who_detail',
	    	name: "whoDetail",
	    	component: r => require.ensure([], () => (require('@/components/index/components/who/whoDetail.vue')))
	    },
	    {
	    	path: '/common/index/imagePre',
	    	name: "imagePre",
	    	component: r => require.ensure([], () => (require('@/components/index/components/common/imagePre.vue')))
	    },
	    {
	    	path: '/common/my/myCollection',
	    	name: "my_collection",
	    	component: r => require.ensure([], () => (require('@/components/my/components/myCollection.vue')))
	    },
	    {
	    	path: '/common/my/myInfo',
	    	name: "my_info",
	    	component: r => require.ensure([], () => (require('@/components/my/components/myInfo.vue')))
	    },
	    {
	    	path: '/common/easy_do/myInfo',
	    	name: "Easy_talk",
	    	component: r => require.ensure([], () => (require('@/components/easy_go/components/EasyTalk.vue')))
		},
		{
			path: '/login',
			name: 'login',
			component: r => require.ensure([], () => (require('@/components/login/login.vue')))
		},
		{
			path: '/setup',
			name: 'setup',
			component: r => require.ensure([], () => (require('@/components/login/setup.vue')))
		},
		{
			path: '/common/index/king',
			name: 'kingDetail',
			component: r => require.ensure([], () => (require('@/components/index/components/where/kingDetail.vue')))
		},
		{
			path: '/common/my/setConfig',
			name: 'setConfig',
			component: r => require.ensure([], () => (require('@/components/my/components/setConfig.vue')))
		},
		{
			path: '/common/my/switch',
			name: 'switch',
			component: r => require.ensure([], () => (require('@/components/my/components/swithId.vue')))
		}
	]
})

routerlist.beforeResolve((to, from, next) => {
	console.log(to.path)
	if(to.path === "/login" || to.path === "/setup"){
		return next()
	}
	var islogined = VueCookie.get("loginflag")||true
	if(islogined){
		next()
	}else{
		next("/login")
	}
})

export default routerlist