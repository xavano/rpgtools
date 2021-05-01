<!-- routify:options preload="proximity" -->
<script>
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<div class="wrapper">
	<Header />

	<div class="content-container">
		<slot />
	</div>

	<Footer />
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-height: 100vh;
	}

	.content-container {
		min-height: 77vh;
		width: 100%;
		height: 100%;
		background-image: url("./img/2.jpg");
		background-repeat: no-repeat;
		background-position: 20% 65%;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 768px) {
		.content-container {
			background-position: 90% 15%;
			min-height: 100vh;
		}
	}
</style>
