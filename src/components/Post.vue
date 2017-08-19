<template>
	<div v-if="post.title">
		<div>
			<h2>{{ post.title }}</h2>
			<p>{{ post.body }}</p>
		</div>
		<hr>
		<router-link :to="{name: 'editPost', params: {id: post.id}}">Edit</router-link>
		<router-link to="/posts">Back to posts</router-link>
	</div>
	<div v-else>Loading post...</div>
</template>

<script>
	import { postsResource } from '@/utilities/resources';

	export default {
		name: 'post',

		data() {
			return {
				post: {}
			};
		},

		created() {
			this.fetchPost();
		},

		methods: {
			fetchPost() {
				const id = this.$route.params.id;

				return postsResource.get(`${id}`)
					.then((response) => {
						this.post = response.data;
					}).catch((error) => {
						console.error('API responded with:', error); // eslint-disable-line
					});
			}
		}
	};
</script>
