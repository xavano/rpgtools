<script>
	import { v4 as uuidv4 } from "uuid";
	import { onMount } from "svelte";
	import { players } from "../stores/players";
	import PlayersAPI from "../PlayersAPI";
	import Player from "./Player.svelte";

	const handleUpdate = (e) => {
		const index = $players.findIndex((player) => player.id === e.detail.id);
		$players[index] = e.detail;
		console.log(e.detail);
		PlayersAPI.save($players);
	};

	const handleDelete = (e) => {
		$players = $players.filter((player) => player.id !== e.detail);
		PlayersAPI.save($players);
	};

	//add player
	const addPlayer = () => {
		$players = [
			{
				id: uuidv4(),
				src: "/avatars/default-avatar.png",
				player: "Player Name",
				character: "Character Name",
				race: "Race",
				archetype: "Class",
			},
			...$players,
		];

		PlayersAPI.save($players);
	};

	// get data from localstorage
	onMount(async () => {
		//fetch from api
		$players = await PlayersAPI.getAll();
		// console.log($players);
		//to clear players
		// $players = [];
	});
</script>

<section>
	<h2>Players</h2>
	<button id="add-player" on:click={addPlayer}>Add player</button>
	<div class="players-showcase">
		{#each $players as player (player)}
			<!-- {JSON.stringify(player)} -->
			<Player {...player} on:update={handleUpdate} on:delete={handleDelete} />
		{:else}
			<p class="playerlist-status">
				No players found! Click add player to start gathering a team.
			</p>
		{/each}
	</div>
</section>

<style>
	section {
		position: relative;
		background: var(--mainDark);
		min-height: 440px;
		width: 90%;
		border: 5px black solid;
		margin: 20px;
		padding: 10px;
	}

	h2 {
		text-align: center;
		padding: 5px;
	}

	#add-player {
		position: absolute;
		top: 20px;
		right: 20px;
	}

	.players-showcase {
		display: flex;
		padding-top: 5px;
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 600px) {
		h2 {
			text-align: left;
			margin-left: 20px;
		}
	}
</style>
