//mengecek apakah browser support service worker untuk PWA
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js')
		.then(() => {
			console.log('Registrasi service worker berhasil')
		})
		.catch(() => {
			console.log('Registrasi service worker gagal')
		})
	})
}else{
	console.log('Serivce worker belum didukung browser ini')
}