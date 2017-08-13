import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Posts from '@/pages/Posts';
import Post from '@/pages/Post';
import CreatePost from '@/pages/CreatePost';
import EditPost from '@/pages/EditPost';
import NotFound from '@/pages/NotFound';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Home
		}, {
			path: '/posts',
			component: Posts
		}, {
			path: '/posts/create',
			name: 'createPost',
			component: CreatePost
		}, {
			path: '/post/:id',
			name: 'post',
			component: Post
		}, {
			path: '/post/:id/edit',
			name: 'editPost',
			component: EditPost
		}, {
			path: '*',
			component: NotFound
		}
	]
});
