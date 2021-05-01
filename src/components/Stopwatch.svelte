<script>
	//STARTING VALUES
	export let seconds, minutes, hours, stopped, label, number;

	number;
	seconds = 0;
	minutes = 0;
	hours = 0;
	let displaySeconds = "00";
	let displayMinutes = "00";
	let displayHours = "00";
	let interval = null;
	stopped = true;
	let startStopBtn = "Start";
	label = "What's this for?";
	let isDisabled = true;
	let disableBtn = "on";

	//FUNCTIONS

	//handle counter
	const stopWatch = () => {
		seconds++;

		if (seconds / 60 === 1) {
			seconds = 0;
			minutes++;

			if (minutes / 60 === 1) {
				minutes = 0;
				hours++;
			}
		}

		//handle display
		if (seconds < 10) {
			displaySeconds = "0" + seconds.toString();
		} else {
			displaySeconds = seconds;
		}

		if (minutes < 10) {
			displayMinutes = "0" + minutes.toString();
		} else {
			displayMinutes = minutes;
		}

		if (hours < 10) {
			displayHours = "0" + hours.toString();
		} else {
			displayHours = hours;
		}
	};

	// window.setInterval(stopWatch, 1000);

	// start/stop button
	const startStop = () => {
		if (stopped) {
			interval = window.setInterval(stopWatch, 1000);
			stopped = false;
			startStopBtn = "Pause";
		} else {
			window.clearInterval(interval);
			stopped = true;
			startStopBtn = "Resume";
		}
	};

	// reset button
	const resetCounter = () => {
		window.clearInterval(interval);
		seconds = 0;
		minutes = 0;
		hours = 0;
		displaySeconds = "00";
		displayMinutes = "00";
		displayHours = "00";
		stopped = true;
		startStopBtn = "Start";
	};

	//write label button
	const writeLabel = () => {
		if (isDisabled) {
			isDisabled = false;
			disableBtn = "off";
		} else {
			isDisabled = true;
			disableBtn = "on";
		}
	};
</script>

<section>
	<!-- <h2>Stop and watch</h2> -->

	<div class="stopwatch-container">
		<div class="name-input">
			<input type="text" value={label} class="label" disabled={isDisabled} />
			<button
				title={isDisabled ? "Enable edit" : "Disable edit"}
				class={disableBtn === "on" ? "disabled-color" : ""}
				on:click={writeLabel}><i class="fas fa-edit" /></button
			>
		</div>

		<div class="stopwatch-display">
			<h4>{displayHours}:{displayMinutes}:{displaySeconds}</h4>
		</div>

		<div class="stopwatch-btns">
			<button on:click={startStop}>{startStopBtn}</button>
			<button on:click={resetCounter}>Reset</button>
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		background: var(--mainDark);
		border: 5px black solid;
		margin: 20px;
		min-height: 160px;
		width: 40%;
		padding: 10px 5px;
	}

	.stopwatch-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.name-input {
		width: 90%;
	}

	.name-input button {
		margin-left: 5px;
	}

	:global(.disabled-color) {
		color: var(--mainBlue);
	}

	.label {
		width: 85%;
		text-align: center;
	}

	.stopwatch-display {
		margin-bottom: 5px;
	}

	.stopwatch-display h4 {
		font-size: 2rem;
	}

	.stopwatch-btns button {
		margin: 0 8px;
		width: 82px;
	}

	@media (max-width: 600px) {
		section {
			margin: 10px 0;
			width: 48%;
			min-height: 150px;
		}

		.stopwatch-display h4 {
			font-size: 1.5rem;
		}

		.stopwatch-btns {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			width: 100%;
		}

		.stopwatch-btns button {
			margin-top: 8px;
		}

		.label {
			width: 100%;
		}

		.name-input button {
			margin: 0;
			position: absolute;
			bottom: 20%;
			right: 10px;
			font-size: 0.8em;
		}
	}

	@media (max-width: 1024px) and (min-width: 600px) {
		.label {
			width: 80%;
		}

		.name-input button {
			margin: 0;
		}
	}
</style>
