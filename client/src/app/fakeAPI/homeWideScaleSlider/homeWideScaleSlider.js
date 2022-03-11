const homeWideScaleSlider = [
	{
		title: "В бой",
		slider1: {path: "atomicHeartBig.jpg", alt: "Главный герой демонстрирует в руке часть робота"},
		slider2: [
			{path: "atomicHeartSC1.jpg", alt: "Битва с чудовищем у которого половина головы разбита"},
			{path: "atomicHeartSC2.jpg", alt: "Главный герой нажимает кнопки приборной панели"},
			{path: "atomicHeartSC3.jpg", alt: "Главный герой поражает роботов при помощи электричества"},
			{path: "atomicHeartSC4.jpg", alt: "Главный герой целится из пестолета Макарова в монстра"}
		],
		slider2Title: "Atomic Heart"
	},
	{
		title: "Двигаться, чтобы выжить",
		slider1: {path: "theDayDeforeBig.jpeg", alt: "Выжившие бродят по городу призраку"},
		slider2: [
			{path: "theDayBeforeSC1.webp", alt: "Выжившие идут в тонель"},
			{path: "theDayBeforeSC2.webp", alt: "Выжившие у костра с гитарой жарят мясо"},
			{path: "theDayBeforeSC3.webp", alt: "Битва с монстрами в полицейском участке"},
			{path: "theDayBeforeSC4.webp", alt: "Выжившие идут в дом. На улице снежная пурга."}
		],
		slider2Title: "The Day Before"
	},
	{
		title: "Все на фронт!",
		slider1: {path: "enlistedBig.jpg", alt: "Солдаты красной армии сдерживаю немецкие танки"},
		slider2: [
			{path: "enlistedSC1.jpg", alt: "Солдат открыл огонь из ППШ по врагам"},
			{path: "enlistedSC2.jpg", alt: "Солдаты наступают при поддержке танка"},
			{path: "enlistedSC3.jpg", alt: "Взвод немецких солдат"},
			{path: "enlistedSC4.jpeg", alt: "Солдаты красной армии в наступлении"}
		],
		slider2Title: "Enlisted"
	}
]

function getHomeWideScaleSliderData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(homeWideScaleSlider)
		}, 1000)
	})
}

export default getHomeWideScaleSliderData