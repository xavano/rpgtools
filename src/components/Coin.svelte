<script>
	//coin visuals
	let src = "/img/head.jpg";
	let alt = "head of the coin";

	//starting numbers
	let coin = 0;

	//to make queryselector work in svelte
	let wrapper;

	//functions
	const tossCoin = () => {
		// clear all the messages from new-roll class
		let last = wrapper.querySelectorAll("p");
		last.forEach((p) => {
			if (p) {
				p.classList.remove("new-roll");
			}
		});

		coin = Math.random() * 2;

		//feed
		const result = document.createElement("p");
		if (coin > 1) {
			result.innerHTML = `You tossed a head`;
			src = "/img/head.jpg";
			alt = "head of the coin";
		} else {
			result.innerHTML = `You tossed a tail`;
			src = "/img/tail.jpg";
			alt = "tail of the coin";
		}
		result.classList.add("new-roll");

		const element = document.getElementById("coin-feed");
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
	<h2>Head or tail?</h2>

	<img {src} {alt} />

	<button on:click={() => tossCoin()}>Toss a coin</button>

	<div id="coin-feed" bind:this={wrapper}>
		<button id="clear-coin-feed-btn" on:click={clearFeed}>Clear</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		background: var(--mainDark);
		height: 400px;
		width: 560px;
		border: 5px black solid;
		margin: 20px;
		padding: 10px;
	}

	img {
		position: absolute;
		right: 40px;
		top: 150px;
		width: 150px;
		clip-path: circle(48% at 50% 50%);
	}

	button {
		min-width: 150px;
	}

	h2 {
		text-align: center;
		padding: 10px;
	}

	#coin-feed {
		background: var(--lightDark);
		margin-top: 20px;
		height: 255px;
		padding: 5px 10px;
		overflow-y: scroll;
		align-self: stretch;
	}

	#clear-coin-feed-btn {
		background: var(--mainDark);
		position: absolute;
		bottom: 25px;
		right: 35px;
		min-width: 90px;
	}

	@media (max-width: 768px) {
		section {
			width: 90%;
		}

		section button {
			width: 90px;
		}

		img {
			right: 20px;
			top: 120px;
			width: 100px;
		}

		h2 {
			font-size: 1.2em;
		}

		#clear-coin-feed-btn {
			width: 50px;
			right: 20px;
			bottom: 30px;
		}
	}
</style>
