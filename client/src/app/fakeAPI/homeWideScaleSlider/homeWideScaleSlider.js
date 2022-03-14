const homeWideScaleSlider = [
	{
		_id: "A1",
		title: "В бой",
		slides: {path: "atomicHeartBig.jpg", alt: "Главный герой демонстрирует в руке часть робота"}
	},
	{
		_id: "A2",
		title: "Atomic Heart",
		slides: [
			{path: "atomicHeartSC1.jpg", alt: "Битва с чудовищем у которого половина головы разбита"},
			{path: "atomicHeartSC2.jpg", alt: "Главный герой нажимает кнопки приборной панели"},
			{path: "atomicHeartSC3.jpg", alt: "Главный герой поражает роботов при помощи электричества"},
			{path: "atomicHeartSC4.jpg", alt: "Главный герой целится из пестолета Макарова в монстра"}
		]
	},
	{
		_id: "A3",
		title: "Двигаться, чтобы выжить",
		slides: {path: "theDayDeforeBig.jpeg", alt: "Выжившие бродят по городу призраку"}
	},
	{
		_id: "A4",
		title: "The Day Before",
		slides: [
			{path: "theDayBeforeSC1.webp", alt: "Выжившие идут в тонель"},
			{path: "theDayBeforeSC2.webp", alt: "Выжившие у костра с гитарой жарят мясо"},
			{path: "theDayBeforeSC3.webp", alt: "Битва с монстрами в полицейском участке"},
			{path: "theDayBeforeSC4.webp", alt: "Выжившие идут в дом. На улице снежная пурга."}
		]
	},
	{
		_id: "A5",
		title: "Все на фронт!",
		slides: {path: "enlistedBig.jpg", alt: "Солдаты красной армии сдерживаю немецкие танки"}
	},
	{
		_id: "A6",
		title: "Enlisted",
		slides: [
			{path: "enlistedSC1.jpg", alt: "Солдат открыл огонь из ППШ по врагам"},
			{path: "enlistedSC2.jpg", alt: "Солдаты наступают при поддержке танка"},
			{path: "enlistedSC3.jpg", alt: "Взвод немецких солдат"},
			{path: "enlistedSC4.jpeg", alt: "Солдаты красной армии в наступлении"}
		]
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