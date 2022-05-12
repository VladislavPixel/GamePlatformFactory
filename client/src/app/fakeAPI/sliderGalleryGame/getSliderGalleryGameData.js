const sliderGalleryGame = [
	{
		titleChief: "Время становиться повелителем",
		titleButton: "Узнать больше",
		gallery: {
			title: "Elden Ring",
			galleryImages: [{path: "gallery1.jpg", alt: "Ведьма с большим количеством рук"}, {path: "gallery2.jpg", alt: "Воин в пещере с большими муравьями"}, {path: "gallery3.jpg", alt: "Всадник перед магическим огромным деревом"}, {path: "gallery4.jpg", alt: "Всадник в лесу сражается со странным гигантским чудовищем"}],
			text: "Уже доступно",
			tags: ["Открытый мир", "RPG", "Ролевой боевик", "Приключения"]
		}
	},
	{
		titleChief: "На пути войны",
		titleButton: "Узнать больше",
		gallery: {
			title: "God OF War",
			galleryImages: [{path: "godOfWar1.jpg", alt: "Кратос стоит в лесу с топором"}, {path: "godOfWar2.jpeg", alt: "Кратос и Атрей идут к дереву"}, {path: "godOfWar3.jpeg", alt: "Кратос и Атрей стоят на вершине горы и любуются пейзажем"}, {path: "godOfWar4.jpeg", alt: "Кратос и Атрей проходят через горные перевалы"}],
			text: "Уже доступно",
			tags: ["Action-adventure", "hack and slash"]
		}
	},
	{
		titleChief: "Двигайся, чтобы выжить",
		titleButton: "Узнать больше",
		gallery: {
			title: "Dying Light 2 Stay Human",
			galleryImages: [{path: "dyingLight2sc1.jpg", alt: "Герой жарит фонарем зомби"}, {path: "dyingLight2sc2.jpg", alt: "Герой смотрит на разрушенный город, охваченный пожаром"}, {path: "dyingLight2sc3.jpg", alt: "Главный герой лежит на полу, а на него замахивается тесаком бандит"}, {path: "dyingLight2sc4.jpg", alt: "Герой стоит на вершине здания с другими людьми"}],
			text: "Уже доступно",
			tags: ["action", "RPG", "survival horror"]
		}
	},
	{
		titleChief: "Сражайся и побеждай",
		titleButton: "Узнать больше",
		gallery: {
			title: "Dota2",
			galleryImages: [{path: "dota2sc1.jpg", alt: "Герой Разор"}, {path: "dota2sc2.jpg", alt: "Герой рубик"}, {path: "dota2sc3.jpg", alt: "Герой Энигма"}, {path: "dota2sc4.jpg", alt: "Лина"}],
			text: "Уже доступно",
			tags: ["MOBA", "Развлечение", "Фэнтези", "action", "RPG", "Спекулятивная фантастика", "Societal"]
		}
	},
	{
		titleChief: "время - ДЕНЬГИ, ДЕНЬГИ - все",
		titleButton: "Узнать больше",
		gallery: {
			title: "Grand Theft Auto V",
			galleryImages: [{path: "gta5sc1.jpg", alt: "Гараж с двумя машинами"}, {path: "gta5sc2.jpg", alt: "3 бандитов за стеной от полицейского"}, {path: "gta5sc3.jpg", alt: "Бандит стоит на горе с M16"}, {path: "gta5sc4.jpg", alt: "Лицо бандита на фоне города"}],
			text: "Уже доступно",
			tags: ["action-adventure"]
		}
	},
	{
		titleChief: "Пора поохотиться",
		titleButton: "Узнать больше",
		gallery: {
			title: "Ведьмак 3: Дикая Охота",
			galleryImages: [{path: "witcher1.jpg", alt: "Ведьмак на китайском празднике"}, {path: "witcher2.jpg", alt: "Ведьмак"}, {path: "witcher3.jpg", alt: "Цири"}, {path: "witcher4.jpg", alt: "Йеннифер, Геральд, Трисс"}],
			text: "Уже доступно",
			tags: ["Открытый мир", "action", "RPG", "Файтинг", "Action-adventure", "Нелинейность", "multi-colophon"]
		}
	},
	{
		titleChief: "Окунись в противоборство",
		titleButton: "Узнать больше",
		gallery: {
			title: "Starcraft 2: Legacy of the Void",
			galleryImages: [{path: "starCraft2sc1.jpg", alt: "Протосы"}, {path: "starCraft2sc2.jpg", alt: "Подбитый корабль"}, {path: "starCraft2sc3.jpg", alt: "Рубка на космическом корабле"}, {path: "starCraft2sc4.jpg", alt: "Протосы"}],
			text: "Уже доступно",
			tags: ["стратегия", "action"]
		}
	}
]

function getSliderGalleryGameData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(sliderGalleryGame)
		}, 1200)
	}) 
}

export default getSliderGalleryGameData

