<template>
	<div v-if="posts.length">
		<h2>Posts</h2>
		<router-link to="/">Go home</router-link>

		<div>
			<input type="text" name="filter" placeholder="Filter posts..." v-model="postsFilter">
		</div>

		<div v-if="filteredPosts.length" v-for="(post, index) in filteredPosts" :key="index" :data-index="index">
			<router-link :to="{name: 'post', params: {id: post.id}}">#{{ index + 1 }} {{ post.title }}</router-link>
		</div>
	</div>
	<div v-else>Loading posts...</div>
</template>

<script>
	import { postsResource } from '@/utilities/resources';

	export default {
		name: 'posts',

		data() {
			return {
				postsFilter: '',
				posts: []
			};
		},

		computed: {
			filteredPosts() {
				return this.posts.filter((post) => post.title.toLowerCase().indexOf(this.postsFilter.toLowerCase()) !== -1);
			}
		},

		created() {
			this.fetchPosts();
		},

		methods: {
			fetchPosts() {
				return postsResource.get('/')
					.then((response) => {
						console.log('RESPONSE:', response); // eslint-disable-line
						this.posts = response.data;
					}).catch((error) => {
						console.log('API responded with:', error); // eslint-disable-line
					});
			}
		}
	};
</script>

