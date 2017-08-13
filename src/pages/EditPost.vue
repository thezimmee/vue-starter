<template src="./EditPost.html"></template>

<script>
	import Vue from 'vue';
	import VeeValidate from 'vee-validate';
	import { postsResource } from '@/utilities/resources';

	Vue.use(VeeValidate);

	export default {
		name: 'edit-post',

		data() {
			return {
				post: {},
				message: null,
				id: this.$route.params.id
			};
		},

		computed: {
			isDirty() {
				return Object.keys(this.fields).some(key => this.fields[key].dirty);
			}
		},

		created() {
			this.fetchPost();
		},

		methods: {
			handleSubmit(){
				this.$validator.validateAll().then((success) => {
					if (success) {
						return this.savePost();
					}

					return this;
				});
			},

			showMessage(message = {}, timeout = 2000){
				this.message = message;
				setTimeout(() => {
					this.message = null;
				}, timeout);
			},

			savePost(){
				return postsResource.put(`${this.id}`, this.post)
				.then((response) => {
					this.post = response.data;

					this.showMessage({
						type: 'success',
						text: 'Post updated!'
					});

					// We need to reset the fields after successful request
					// this.fields.reset();
				}).catch((error) => {
					// Handle error...
					this.showMessage({
						type: 'danger',
						text: error
					});
					console.error('API responded with:', error); // eslint-disable-line
				});
			},

			fetchPost(){
				return postsResource.get(`${this.id}`)
				.then((response) => {
					this.post = response.data;
				}).catch((error) => {
					console.error('API responded with:', error); // eslint-disable-line
				});
			}

		}
	};
</script>

