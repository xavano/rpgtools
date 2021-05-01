<script>
	import Clock from "./Clock.svelte";
	import Navbar from "./Navbar.svelte";
	export let visitorName;
	visitorName = "Adventurer";
</script>

<header>
	<h1>Welcome to RPG Tools, {visitorName}!</h1>
	<Clock />
	<Navbar />
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--mainDark);
		/* height: 120px; */
		min-height: 13vh;
		width: 100%;
	}

	h1 {
		padding: 0;
	}

	@media (max-width: 600px) {
		h1 {
			width: 60%;
			align-self: flex-start;
			padding: 20px 0 0 20px;
		}
	}
</style>
