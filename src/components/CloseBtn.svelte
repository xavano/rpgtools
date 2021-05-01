<script>
	export let icon;
</script>

<button on:click class="close-btn">
	<i class={icon} />
</button>

<style>
	.close-btn {
		font-size: 1.2em;
		position: absolute;
		right: 5px;
		top: 5px;
		padding: 5px;
		background: transparent;
	}
</style>
