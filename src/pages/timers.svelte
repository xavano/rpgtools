<script>
	import Timer from "../components/Timer.svelte";
	import Stopwatch from "../components/Stopwatch.svelte";
</script>

<main>
	<div class="intro">
		<p>
			Put some time pressure on your players to force reactions.<br />
			<code
				>An Orc is charging at you! What are you going to do? 5... 4... 3...</code
			><br />
			You got the idea.
		</p>

		<p>
			Stopwatches can help you with timekeeping. Start a timer at the beginning
			of the session, chapter, battle, quest etc. to check how long it actually
			takes, so it's easier to plan your adventures in the future.
		</p>
	</div>

	<div class="content">
		<Timer />
		<div class="stopwatch-container">
			<Stopwatch number="1" />
			<Stopwatch number="2" />
			<Stopwatch number="3" />
			<Stopwatch number="4" />
		</div>
	</div>
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

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.stopwatch-container {
		display: flex;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
		}

		.stopwatch-container {
			width: 90%;
			justify-content: space-between;
		}

		.content {
			flex-direction: column;
		}
	}

	@media (max-width: 1400px) and (min-width: 769px) {
		.content {
			flex-direction: column;
		}
	}
</style>
