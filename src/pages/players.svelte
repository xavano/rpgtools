<script>
	import Players from "../components/Players.svelte";
</script>

<main>
	<div class="intro">
		<p>
			Checking character cards for the basic information in the middle of action
			can be embarassing. Now you can do it without breaking immersion.<br />
			Quick reference sheet comes handy especially when starting new adventure or
			playing with strangers.
		</p>
	</div>

	<Players />
</main>

<style>
	main {
		height: 100%;
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin-top: 20px;
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
		}
	}
</style>
