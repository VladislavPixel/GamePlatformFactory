const categoryBlockGames = [
	{_id: "q1", category: "popular-new", poster: "beholder3poster.jpg", alt: "Beholder 3 постер. Глаза следят за всеми.", title: "Beholder 3", tags: ["Симулятор", "стратегия"], platform: ["windows.svg"], price: 360},
	{_id: "q2", category: "popular-new", poster: "apertureDeskJobPoster.jpg", alt: "apertureDeskJob постер, на планшете название игры.", title: "Aperture Desk Job", tags: ["Приключения"], platform: ["windows.svg"], price: "бесплатно"},
	{_id: "q3", category: "popular-new", poster: "farChangingTidesPoster.jpg", alt: "Логотип FarChangingTides и корабль, стоящий на воде.", title: "FAR: Changing Tides", tags: ["Логическая", "Приключения", "action"], platform: ["windows.svg"], price: 480},
	{_id: "q4", category: "popular-new", poster: "conanChopChopPoster.jpg", alt: "Викинги стоят на горе и логотип Conan Chop Chop.", title: "Conan Chop Chop", tags: ["RPG", "Приключения", "action"], platform: ["windows.svg"], price: 520},
	{_id: "q5", category: "popular-new", poster: "lostArkPoster.jpg", alt: "Персонаж из игры Lost Ark - девушка.", title: "Lost ARK", tags: ["action", "MMORPG"], platform: ["windows.svg"], price: "бесплатно"},
	{_id: "w1", category: "leaders", poster: "csgoPoster.webp", alt: "Два солдата спецназа.", title: "CS:GO PRIME STATUS UPGRADE", tags: ["Шутер", "action"], platform: ["windows.svg", "apple.svg"], price: 1020},
	{_id: "w2", category: "leaders", poster: "monsterHunterRisePoster.jpg", alt: "Воин сражается с монстрами.", title: "Monster Hunter Rise", tags: ["action"], platform: ["windows.svg"], price: 2299},
	{_id: "w3", category: "leaders", poster: "detroitPoster.jpg", alt: "Главный герой Detroit: Become Human", title: "Detroit: Become Human", tags: ["Фэнтези", "Приключения", "action"], platform: ["windows.svg"], price: 1628},
	{_id: "w4", category: "leaders", poster: "dayZPoster.jpg", alt: "Девушка-снайпер в мертвом городе", title: "DayZ", tags: ["Выживание", "Шутер", "action", "Постапокалипсис"], platform: ["windows.svg"], price: 877},
	{_id: "w5", category: "leaders", poster: "eldenRingPoster.jpg", alt: "Логотип игры EldenRing на фоне светящейся руны", title: "Elden Ring", tags: ["RPG", "Приключения", "action"], platform: ["windows.svg"], price: 3999},
	{_id: "e1", category: "popular-in-the-future", poster: "madisonPoster.jpg", alt: "Рука чудовища накрывает фотоаппарат", title: "MADiSON", tags: ["Психологический хоррор", "Хоррор", "Хоррор на выживание"], platform: ["windows.svg"], price: "ОЖИДАНИЕ"},
	{_id: "e2", category: "popular-in-the-future", poster: "youngSoulsPoster.jpg", alt: "Героиня young - Souls", title: "Young Souls", tags: ["action", "RPG"], platform: ["windows.svg"], price: "ОЖИДАНИЕ"},
	{_id: "e3", category: "popular-in-the-future", poster: "hyperbolicaPoster.jpg", alt: "Логотип игры. Земля и на ее фоне написано Hyperbolica", title: "HYPERBOLICA", tags: ["Фэнтези", "Приключения", "Логическая"], platform: ["windows.svg", "vr.svg"], price: "ОЖИДАНИЕ"},
	{_id: "e4", category: "popular-in-the-future", poster: "distantWorlds2Poster.jpg", alt: "Космические корабли бороздят космос на фоне огромной планеты", title: "Distant Worlds 2", tags: ["Симулятор", "стратегия"], platform: ["windows.svg"], price: "ОЖИДАНИЕ"},
	{_id: "e5", category: "popular-in-the-future", poster: "ruinPoster.jpg", alt: "Логотип RUiN", title: "RUiN", tags: ["MOBA", "стратегия"], platform: ["windows.svg"], price: "ОЖИДАНИЕ"},
	{_id: "r1", category: "discounts", poster: "warhammerVermintide2Poster.jpg", alt: "Логотип игры warhammerVermintide2", title: "Warhammer: Vermintide 2", tags: ["Шутер", "action"], platform: ["windows.svg"], price: 515, newPrice: 103, interest: 65},
	{_id: "r2", category: "discounts", poster: "remnantFromTheAshesPoster.jpg", alt: "Логотип Remnant: From The Ashes. Люди сражаются с монстрами.", title: "Remnant: From The Ashes", tags: ["Шутер", "action", "Приключения"], platform: ["windows.svg", "xboxOne.svg", "playstation.svg"], price: 1297, newPrice: 518, interest: 60},
	{_id: "r3", category: "discounts", poster: "pathfinderWrathOfTheRighteousPoster.jpg", alt: "Монстры", title: "Pathfinder: Wrath of the Righteous", tags: ["Ролевая игра", "RPG"], platform: ["windows.svg", "apple.svg"], price: 1499, newPrice: 1124, interest: 25},
	{_id: "r4", category: "discounts", poster: "battleBrothersPoster.jpg", alt: "Battle Brothers воины в битве", title: "Battle Brothers", tags: ["RPG", "стратегия"], platform: ["windows.svg"], price: 499, newPrice: 164, interest: 67},
	{_id: "r5", category: "discounts", poster: "gamedecPoster.jpg", alt: "Gamedec", title: "Gamedec", tags: ["RPG", "Приключения"], platform: ["windows.svg"], price: 1249, newPrice: 936, interest: 25},
	{_id: "r6", category: "discounts", poster: "magicka2Poster.jpg", alt: "magicka2 герои", title: "Magicka 2", tags: ["Приключения", "action"], platform: ["windows.svg", "apple.svg", "linux.svg"], price: 349, newPrice: 87, interest: 75}
]

function getCategoryHomeGames() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(categoryBlockGames)
		}, 1000)
	})
}

export default getCategoryHomeGames
