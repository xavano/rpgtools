<script>
	import { metatags } from "@roxi/routify";
	metatags.title = "RPG Tools || Game Master Helper";
	metatags.description = "Description coming soon...";
</script>

<div class="home-wrapper">
	<p>
		Idea for this app is to help Game Masters in creating and leading
		adventures.
		<br />
		Have you lost all of your dices? Don't want to switch between multiple apps in
		your phone? What was the name of Andrew's warrior again?
		<br />
		We got you covered! Everything you need as GM in one place, so you can focus
		on your story.
	</p>
</div>

<style>
	.home-wrapper {
		width: 45%;
		height: 100%;
		display: grid;
		place-items: center;
	}

	p {
		padding: 50px;
		background-color: var(--mainDark);
		text-align: center;
		width: 80%;
	}

	@media (max-width: 768px) {
		.home-wrapper {
			width: 90%;
		}

		p {
			padding: 20px;
			margin-top: 50px;
		}
	}
</style>
