<template>
	<div>
		<header>
			<div>Vue.js PWA</div>
			<div>
				<router-link to="posts">
					<a title="View all posts.">Posts</a>
				</router-link>
				<router-link to="posts/create">
					<a title="Create a new post.">New</a>
				</router-link>
			</div>
		</header>
		<main>
			<img src="../assets/logo.png" alt="Vue.js PWA">
			<h1>{{ msg }}</h1>
			<h2>Essential Links</h2>
			<ul>
				<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
				<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
				<li><a href="https://gitter.im/vuejs/vue" target="_blank" rel="noopener">Gitter Chat</a></li>
				<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
				<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a></li>
			</ul>
			<h2>Ecosystem</h2>
			<ul>
				<li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
				<li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
				<li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
				<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
			</ul>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data () {
			return {
				msg: 'Welcome to Your Vue.js PWA'
			};
		}
	};
</script>

<!-- htmllint spec-char-escape="false" -->
<style lang="scss">
	body {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin: 0;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #35495E;
	}
</style>
<style lang="scss" scoped>
	main {
		text-align: center;
		margin-top: 40px;
	}

	header {
		margin: 0;
		height: 56px;
		padding: 0 24px;
		background-color: #35495E;
		color: #ffffff;
		display: flex;
		align-items: center;

		div {
			&:nth-child(1) {
				flex-grow: 1;
				display: block;
				position: relative;
				font-size: 20px;
				line-height: 1;
				letter-spacing: .02em;
				font-weight: 400;
				box-sizing: border-box;
			}
		}

		a {
			color: #fff;
			margin-left: 10px;
			margin-right: 10px;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}

			div:last-child & {
				margin-right: 0;
			}
		}
	}
</style>
