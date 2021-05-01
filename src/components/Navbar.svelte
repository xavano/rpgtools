<script>
	import { isActive } from "@roxi/routify";

	const links = [
		["./index", "Home"],
		["./dices", "Dices"],
		["./timers", "Timers"],
		["./players", "Players"],
	];
</script>

<ul>
	{#each links as [path, name]}
		<li><a class:active={$isActive(path)} href={path}>{name}</a></li>
	{/each}
</ul>

<style>
	ul {
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: var(--mainDark);
	}

	li {
		list-style: none;
	}

	a {
		position: relative;
		display: block;
		padding: 5px;
		margin: 20px;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--mainBlue);
		transition: 0.5s;
		z-index: 5;
	}

	a:hover {
		/* color: var(--lightBlue); */
		color: var(--mainDark);
		z-index: 5;
	}

	a::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-top: 1px var(--lightBlue) solid;
		border-bottom: 1px var(--lightBlue) solid;
		transform: scaleY(2);
		opacity: 0;
		transition: 0.5s;
		z-index: 2;
	}

	a:hover::before {
		transform: scaleY(1);
		opacity: 1;
	}

	a::after {
		content: "";
		position: absolute;
		left: 0;
		top: 1px;
		width: 100%;
		height: 100%;
		background-color: var(--lightBlue);
		transform: scale(0);
		transition: 0.5s;
		z-index: -1;
	}

	a:hover::after {
		transform: scale(1);
	}

	.active {
		font-weight: bold;
		color: var(--lightBlue);
	}

	@media (max-width: 768px) {
		a {
			margin: 20px 10px;
		}
	}
</style>
