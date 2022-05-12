const sliderGalleryPostersGame = [
	{pathView: "elderRingView.jpg", alt: "Два воина сражаются"},
	{pathView: "godOfWarView.jpg", alt: "Кратос демонстрирует голову убитого воина змее"},
	{pathView: "dyingLight2View.jpg", alt: "Ближний бой с бандитами"},
	{pathView: "dota2View.jpg", alt: "Иконка Dota2 и падающие кометы"},
	{pathView: "gta5View.jpg", alt: "Постер GTA5"},
	{pathView: "witcherView.jpg", alt: "Ведьмак перед огромной жабой в лесу"},
	{pathView: "starCraft2View.jpg", alt: "Королева"}
]

function getSliderGalleryGamePosters() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(sliderGalleryPostersGame)
		}, 2000)
	})
}

export default getSliderGalleryGamePosters
