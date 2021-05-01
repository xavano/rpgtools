<script>
	import { onMount } from "svelte";
	// import { createEventDispatcher } from "svelte";
	import { timer } from "../stores/timers";
	import TimersAPI from "../TimersAPI";

	// const dispatch = createEventDispatcher();

	//starting numbers
	export let setTimer = 3;
	export let timeLeft = setTimer;
	let interval = null;

	// get data from localstorage
	onMount(async () => {
		//fetch from api
		$timer = await TimersAPI.getAll();
		console.log($timer);
		//to clear timer
		// $timer = [];
	});

	// const timerUpdate = () => {
	// 	dispatch("timer", { setTimer, timeLeft });
	// 	console.log("timer updated");
	// };

	//functions
	const startCounter = () => {
		clearInterval(interval);
		interval = setInterval(() => {
			if (timeLeft <= 0) {
				clearInterval(interval);
				console.log("done");
				return;
			}
			timeLeft -= 1;
			console.log("tick");
		}, 1000);
	};

	const resetCounter = () => {
		timeLeft = setTimer;
		clearInterval(interval);
	};

	const addSecond = () => {
		setTimer++;
	};

	const subSecond = () => {
		setTimer--;
	};
</script>

<section>
	<h2>Time is ticking</h2>

	<div class="timer-controls">
		<h3>Set timer:</h3>

		<div class="set-timer">
			<button class="set-button" on:click={subSecond}
				><i class="fas fa-angle-left" /></button
			>
			<input type="number" max="999" bind:value={setTimer} />
			<button class="set-button" on:click={addSecond}
				><i class="fas fa-angle-right" /></button
			>
		</div>

		<div class="start-reset">
			<button class="control-button" on:click={startCounter}>Start</button>
			<button class="control-button" on:click={resetCounter}>Reset</button>
		</div>
	</div>

	<div class="time-left-display">
		{timeLeft}
	</div>
</section>

<style>
	section {
		position: relative;
		background: var(--mainDark);
		height: 250px;
		width: 400px;
		border: 5px black solid;
		margin: 20px;
		padding: 50px 20px;
	}

	h2 {
		text-align: center;
		margin-bottom: 30px;
		margin-top: -30px;
	}

	.timer-controls {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.set-timer {
		margin-top: 20px;
	}

	.set-button {
		margin: 0;
		padding: 5px 10px;
	}

	.control-button {
		margin-top: 20px;
		margin-right: 10px;
		width: 62px;
	}

	input[type="number"] {
		width: 50px;
		padding: 5px 10px;
		text-align: center;
		margin: 0 10px;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.time-left-display {
		font-size: 90px;
		background-color: var(--lightDark);
		width: 150px;
		text-align: center;
		position: absolute;
		right: 20px;
		bottom: 20px;
	}

	@media (max-width: 768px) {
		section {
			width: 90%;
			height: 200px;
		}

		h2 {
			font-size: 1.2em;
		}

		h3 {
			font-size: 1em;
		}

		.set-timer {
			margin-top: 10px;
		}

		.control-button {
			margin-top: 10px;
		}

		.timer-controls {
			padding: 10px 0;
		}

		.time-left-display {
			font-size: 70px;
			width: 100px;
			right: 10px;
			bottom: 10px;
		}
	}

	@media (max-width: 1024px) and (min-width: 600px) {
		section {
			width: 60%;
		}

		h2 {
			margin-bottom: 10px;
		}
	}
</style>
