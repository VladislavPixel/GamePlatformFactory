const category = [
	{
		_id: "theme71",
		titleCategory: "Темы",
		elements: [
			{_id: "qw1", name: "Открытый мир"},
			{_id: "qw2", name: "survival horror"},
			{_id: "qw3", name: "Развлечение"},
			{_id: "qw4", name: "Фэнтези"},
			{_id: "qw5", name: "Спекулятивная фантастика"},
			{_id: "qw6", name: "Логическая"},
			{_id: "qw7", name: "Выживание"},
			{_id: "qw8", name: "Постапокалипсис"},
			{_id: "qw9", name: "Психологический хоррор"},
			{_id: "qw10", name: "Хоррор"},
			{_id: "qw11", name: "Хоррор на выживание"}
		]
	},
	{
		_id: "genres71",
		titleCategory: "Жанры",
		subGenres:[
			{
				_id: "role71",
				subTitleCategory: "Ролевые игры",
				elements: [
					{_id: "ww1", name: "Ролевой боевик"},
					{_id: "ww2", name: "RPG"},
					{_id: "ww3", name: "Ролевая игра"}
				]
			},
			{
				_id: "adventure71",
				subTitleCategory: "Приключенческая казуальная игра",
				elements: [
					{_id: "rr1", name: "Приключения"},
					{_id: "rr2", name: "Action-adventure"}
				]
			},
			{
				_id: "simulator71",
				subTitleCategory: "Симулятор",
				elements: [
					{_id: "sim1", name: "Симулятор"}
				]
			},
			{
				_id: "action71",
				subTitleCategory: "Экшен",
				elements: [
					{_id: "vmn1", name: "hack and slash"},
					{_id: "vmn2", name: "action"},
					{_id: "vmn3", name: "Файтинг"},
					{_id: "vmn4", name: "Шутер"}
				]
			},
			{
				_id: "strategy71",
				subTitleCategory: "Стратегия",
				elements: [
					{_id: "minimbv1", name: "MOBA"},
					{_id: "minimbv2", name: "стратегия"}
				]
			}
		]
	},
	{
		_id: "special71",
		titleCategory: "Особый раздел",
		elements: [
			{_id: "spec1", name: "Бесплатно"},
			{_id: "spec2", name: "Демоверсии"},
			{_id: "spec3", name: "Alpha/Beta"},
			{_id: "spec4", name: "Нелинейность"},
			{_id: "spec5", name: "multi-colophon"},
			{_id: "spec6", name: "Ожидание"},
			{_id: "spec7", name: "Продукты Российских разработчиков"}
		]
	},
	{
		_id: "numberOfPlayers71",
		titleCategory: "Число игроков",
		elements: [
			{_id: "numb1", name: "Societal"},
			{_id: "numb2", name: "MMORPG"}
		]
	}
]

const getCategoryStore = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(category)
		}, 5000)
	})
}

export default getCategoryStore
