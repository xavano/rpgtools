<script>
	//STARTING VALUES
	let h = "00"; //hours
	let m = "00"; //minutes
	let s = "00"; //seconds
	let d = "00"; //day
	let mth = "00"; //month
	let y = "0000"; //year

	//FUNCTIONS
	const showTime = () => {
		let date = new Date();
		h = date.getHours();
		m = date.getMinutes();
		s = date.getSeconds();
		d = date.getDate();
		mth = date.getMonth() + 1;
		y = date.getFullYear();

		if (s < 10) {
			s = "0" + s;
		}
		if (m < 10) {
			m = "0" + m;
		}
		if (h < 10) {
			h = "0" + h;
		}
		if (d < 10) {
			d = "0" + d;
		}
		if (mth < 10) {
			mth = "0" + mth;
		}
	};

	setInterval(showTime, 1000);
</script>

<aside>
	<div class="clock-container">
		<div id="clock-display">
			<h4>{d}/{mth}/{y}</h4>
			<h4>{h}:{m}:{s}</h4>
		</div>
	</div>
</aside>

<style>
	aside {
		position: absolute;
		right: 0;
		padding: 10px;
		margin: 10px;
		border: 3px black solid;
		text-align: center;
	}

	@media (max-width: 768px) {
		aside {
			top: 5%;
		}
	}
</style>
