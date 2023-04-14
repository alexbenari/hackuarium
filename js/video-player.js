		const videos = document.querySelectorAll('video');
		let playing = true;

		document.addEventListener('click', () => {
			if (playing) {
				videos.forEach(video => video.pause());
				playing = false;
			} else {
				videos.forEach(video => video.play());
				playing = true;
			}
		});