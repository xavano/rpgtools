<script>
	import Dice from "../components/Dice.svelte";
	import Coin from "../components/Coin.svelte";
	import CloseBtn from "../components/CloseBtn.svelte";

	// let hidden = false;
	let icon = "fas fa-times";
	let opened = true;

	let closeBtn = () => {
		if (opened) {
			opened = false;
			icon = "fas fa-question-circle";
		} else {
			opened = true;
			icon = "fas fa-times";
		}
	};
</script>

<main>
	<div class:hidden={!opened} class="intro">
		<CloseBtn on:click={closeBtn} {icon} />
		<p>
			As we all know, rolling dice is integral part of nearly every RPG. Now you
			can check chances of success with one click.
		</p>

		<p>
			If you need 50% chance or just can't decide, the simplest solution is to
			toss a coin. Or you can do it for the witcher. Witchers love coins.
		</p>
	</div>

	<div class="content">
		<Dice />
		<Coin />
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

	.intro {
		position: relative;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.hidden {
		background: transparent;
		color: transparent;
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
		}

		.content {
			flex-direction: column;
		}
	}
</style>
