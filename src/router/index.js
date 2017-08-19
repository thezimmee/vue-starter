import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Posts from '@/components/Posts';
import Post from '@/components/Post';
import CreatePost from '@/components/CreatePost';
import EditPost from '@/components/EditPost';
import NotFound from '@/components/NotFound';

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
