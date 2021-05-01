<script>
	import { createEventDispatcher } from "svelte";
	export let id, player, character, race, archetype, src;
	let isDisabled = true;

	const dispatch = createEventDispatcher();

	const triggerUpdate = () => {
		dispatch("update", { id, player, character, race, archetype, src });
		console.log("updated");
	};

	//delete player
	const deletePlayer = () => {
		const yes = confirm("Are sure you want to delete this player?");
		if (yes) {
			dispatch("delete", id);
		}
	};

	const editAvatar = () => {
		let newsrc = prompt("Add new avatar url");
		if (newsrc != null && newsrc != "") {
			src = newsrc;
			dispatch("update", { id, player, character, race, archetype, src });
		}
	};

	const lockEdit = () => {
		if (isDisabled) {
			isDisabled = false;
		} else {
			isDisabled = true;
			triggerUpdate();
		}
	};
</script>

<div class="player-profile">
	<label class="player-name-label" for="player">
		<input
			type="text"
			name="player"
			bind:value={player}
			class="player-input player-name"
			disabled={isDisabled}
		/>
	</label>

	<div class="top-container">
		<div class="avatar-container">
			<img {src} alt="Player avatar" />
		</div>

		<div class="edit-btns">
			<button title="Delete player" on:click={deletePlayer}>
				<i class="fas fa-user-slash" />
			</button>
			<button title="Edit player's avatar" on:click={editAvatar}>
				<i class="fas fa-user-circle" />
			</button>
			<button
				title={isDisabled ? "Enable edit" : "Save changes"}
				on:click={lockEdit}
			>
				<i class:dark={isDisabled} class="fas fa-edit" />
			</button>
		</div>
	</div>

	<div class="player-data">
		<label for="name"
			>Name:
			<input
				type="text"
				name="name"
				bind:value={character}
				class="player-input"
				disabled={isDisabled}
			/></label
		>

		<label for="race"
			>Race:
			<input
				type="text"
				name="race"
				bind:value={race}
				class="player-input"
				disabled={isDisabled}
			/></label
		>

		<label for="archetype"
			>Class:
			<input
				type="text"
				name="archetype"
				bind:value={archetype}
				class="player-input"
				disabled={isDisabled}
			/></label
		>
	</div>
</div>

<style>
	.player-profile {
		background-color: var(--lightDark);
		padding: 20px;
		margin: 0 5px 10px 5px;
		width: 250px;
		display: grid;
		place-items: center;
	}

	.top-container {
		background-color: var(--mainDark);
		display: flex;
		justify-content: center;
		width: 80%;
		margin-bottom: 10px;
	}

	.avatar-container {
		display: grid;
		place-items: center;
		background-color: var(--mainDark);
		width: 120px;
		height: 120px;
		clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
	}

	.avatar-container img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}

	.edit-btns {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.edit-btns button {
		display: grid;
		place-items: center;
		margin: 5px;
		width: 30px;
		height: 30px;
	}

	.edit-btns i {
		font-size: 1rem;
	}

	.fa-user-slash {
		font-size: 0.9rem;
	}

	.player-data {
		width: 80%;
	}

	label {
		background-color: var(--mainDark);
		font-size: 1rem;
		padding: 3px;
		text-align: center;
		font-size: 0.8rem;
	}

	.player-input {
		font-size: 0.9rem;
		width: 100%;
		padding: 3px;
		margin-top: 3px;
	}

	.player-name-label {
		width: 80%;
		margin-bottom: 10px;
	}

	.player-name {
		text-align: center;
		font-size: 1rem;
		margin: 0;
	}

	.dark {
		color: var(--mainBlue);
	}
</style>
