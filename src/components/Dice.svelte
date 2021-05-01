<script>
	//starting numbers
	let selected = 6;
	let dices = [6, 10, 12, 20, 100];
	let diceRoll = 1;

	//to make queryselector work in svelte
	let wrapper;

	//functions
	const rollDie = (num = 6) => {
		// clear all the messages from new-roll class
		let last = wrapper.querySelectorAll("p");
		last.forEach((p) => {
			if (p) {
				p.classList.remove("new-roll");
			}
		});

		//maths
		diceRoll = Math.floor(Math.random() * num) + 1;

		//add messages in the feed
		const result = document.createElement("p");
		result.innerHTML = `You've rolled ${diceRoll} on ${selected} side dice`;
		result.classList.add("new-roll");

		const element = document.getElementById("dice-feed");
		element.appendChild(result);

		//make sure window is scrolled to last message
		wrapper.lastChild.scrollIntoViewIfNeeded();
	};

	const clearFeed = () => {
		//clear all the messages in the feed
		let messages = wrapper.querySelectorAll("p");
		messages.forEach((p) => p.remove());
	};
</script>

<section>
	<h2>Choose a dice or provide number of sides</h2>

	<div class="dice-selection" id="dice-select">
		<select bind:value={selected}>
			{#each dices as dice}
				<option value={dice}>
					{dice}
				</option>
			{/each}
		</select>

		<input
			type="range"
			min="2"
			max="100"
			bind:value={selected}
			id="dice-number"
		/>

		<button id="dice-btn" on:click={() => rollDie(selected)}
			>Roll d{selected}</button
		>
	</div>

	<div id="dice-feed" bind:this={wrapper}>
		<!-- <p class="new">You've rolled {diceRoll} on {selected} side dice</p> -->
		<button id="clear-dice-feed-btn" on:click={clearFeed}>Clear</button>
	</div>
</section>

<style>
	section {
		position: relative;
		background: var(--mainDark);
		min-height: 400px;
		width: 560px;
		border: 5px black solid;
		margin: 20px;
		padding: 10px;
	}

	h2 {
		text-align: center;
		padding: 10px;
	}

	.dice-selection {
		display: flex;
		justify-content: space-between;
	}

	#dice-btn {
		width: 100px;
	}

	#dice-number {
		width: 70px;
		-webkit-appearance: none;
		width: 20%;
		height: 10px;
		align-self: center;
		border-radius: 5px;
		margin: 0;
		padding: 0;
	}

	#dice-number::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 18px;
		height: 18px;
		cursor: pointer;
		z-index: 3;
		position: relative;
		background-color: var(--lightBlue);
		border-radius: 50%;
	}

	#dice-number::-webkit-slider-thumb:focus,
	#dice-number::-webkit-slider-thumb:hover {
		background-color: var(--mainBlue);
	}

	#dice-feed {
		background: var(--lightDark);
		margin-top: 20px;
		height: 255px;
		padding: 5px 10px;
		overflow-y: scroll;
	}

	#clear-dice-feed-btn {
		background: var(--mainDark);
		position: absolute;
		bottom: 25px;
		right: 35px;
		min-width: 90px;
	}

	:global(.new-roll) {
		color: var(--lightBlue);
	}

	@media (max-width: 768px) {
		section {
			width: 90%;
		}

		h2 {
			font-size: 1.2em;
		}

		#clear-dice-feed-btn {
			width: 50px;
			right: 20px;
			bottom: 20px;
		}
	}
</style>
