const categoryBlockGames = [
	{_id: "q1", category: "popular-new", poster: "beholder3poster.jpg", alt: "Beholder 3 постер. Глаза следят за всеми.", title: "Beholder 3", tags: ["Симулятор", "Стратегия"], platform: ["windows.svg"], price: 360},
	{_id: "q2", category: "popular-new", poster: "apertureDeskJobPoster.jpg", alt: "apertureDeskJob постер, на планшете название игры.", title: "Aperture Desk Job", tags: ["Приключения"], platform: ["windows.svg"], price: "бесплатно"},
	{_id: "q3", category: "popular-new", poster: "farChangingTidesPoster.jpg", alt: "Логотип FarChangingTides и корабль, стоящий на воде.", title: "FAR: Changing Tides", tags: ["Логическая", "Приключения", "Экшен"], platform: ["windows.svg"], price: 480},
	{_id: "q4", category: "popular-new", poster: "conanChopChopPoster.jpg", alt: "Викинги стоят на горе и логотип Conan Chop Chop.", title: "Conan Chop Chop", tags: ["RPG", "Приключения", "Экшен"], platform: ["windows.svg"], price: 520},
	{_id: "q5", category: "popular-new", poster: "lostArkPoster.jpg", alt: "Персонаж из игры Lost Ark - девушка.", title: "Lost ARK", tags: ["Экшен", "MMORPG"], platform: ["windows.svg"], price: "бесплатно"},
	{_id: "w1", category: "leaders", poster: "csgoPoster.webp", alt: "Два солдата спецназа.", title: "CS:GO PRIME STATUS UPGRADE", tags: ["Шутер", "Экшен"], platform: ["windows.svg", "apple.svg"], price: 1020},
	{_id: "w2", category: "leaders", poster: "monsterHunterRisePoster.jpg", alt: "Воин сражается с монстрами.", title: "Monster Hunter Rise", tags: ["Экшен"], platform: ["windows.svg"], price: 2299},
	{_id: "w3", category: "leaders", poster: "detroitPoster.jpg", alt: "Главный герой Detroit: Become Human", title: "Detroit: Become Human", tags: ["Фантастика", "Приключения", "Экшен"], platform: ["windows.svg"], price: 1628},
	{_id: "w4", category: "leaders", poster: "dayZPoster.jpg", alt: "Девушка-снайпер в мертвом городе", title: "DayZ", tags: ["Выживание", "Шутер", "Экшен", "Постапокалипсис"], platform: ["windows.svg"], price: 877},
	{_id: "w5", category: "leaders", poster: "eldenRingPoster.jpg", alt: "Логотип игры EldenRing на фоне светящейся руны", title: "Elden Ring", tags: ["RPG", "Приключения", "Экшен"], platform: ["windows.svg"], price: 3999},
	{_id: "e1", category: "popular-in-the-future", poster: "madisonPoster.jpg", alt: "Рука чудовища накрывает фотоаппарат", title: "MADiSON", tags: ["Психологический хоррор", "Хоррор", "Хоррор на выживание"], platform: ["windows.svg"], price: "ОЖИДАНИЕ"},
	{_id: "e2", category: "popular-in-the-future", poster: "youngSoulsPoster.jpg", alt: "Героиня young - Souls", title: "Young Souls", tags: ["Экшен", "RPG"], platform: ["windows.svg"], price: "ОЖИДАНИЕ"},
	{_id: "e3", category: "popular-in-the-future", poster: "hyperbolicaPoster.jpg", alt: "Логотип игры. Земля и на ее фоне написано Hyperbolica", title: "HYPERBOLICA", tags: ["Фантастика", "Приключения", "Логическая"], platform: ["windows.svg", "vr.svg"], price: "ОЖИДАНИЕ"},
	{_id: "e4", category: "popular-in-the-future", poster: "distantWorlds2Poster.jpg", alt: "Космические корабли бороздят космос на фоне огромной планеты", title: "Distant Worlds 2", tags: ["Симулятор", "Стратегия"], platform: ["windows.svg"], price: "ОЖИДАНИЕ"},
	{_id: "e5", category: "popular-in-the-future", poster: "ruinPoster.jpg", alt: "Логотип RUiN", title: "RUiN", tags: ["MOBA", "Стратегия"], platform: ["windows.svg"], price: "ОЖИДАНИЕ"},

	{_id: "r1", category: "discounts", poster: "warhammerVermintide2Poster.jpg", alt: "Логотип игры warhammerVermintide2", title: "Warhammer: Vermintide 2", tags: ["Шутер", "Экшен"], platform: ["windows.svg"], price: 515, newPrice: 103, interest: 65}
]

function getCategoryHomeGames() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(categoryBlockGames)
		}, 1000)
	})
}

export default getCategoryHomeGames
