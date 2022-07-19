const ranks = [
	{ title: "Пользователь платформы Factory.inc", achievementBoundary: 0, text: "level 1", color: "#9fb4c9", messageDevelopmentTeamFactory: "Рады приветствовать в нашей тихой игровой гавани." },
	{ title: "Комментатор Factory.inc", achievementBoundary: 165, text: "level 2", color: "#5e98d9", messageDevelopmentTeamFactory: "Дорогу осилит идущий." },
	{ title: "Советник Factory.inc", achievementBoundary: 465, text: "level 3", color: "#4b69ff", messageDevelopmentTeamFactory: "Поздравляем с достижение нового ранга, рады, что Вы проявляете активность на нашей платформе." },
	{ title: "Уважаемый советник Factory.inc", achievementBoundary: 915, text: "level 4", color: "#8847ff", messageDevelopmentTeamFactory: "От всего коллектива Factory.inc поздравляем с достижением новой ступени, так держать!)" },
	{ title: "Почетный комментатор Factory.inc", achievementBoundary: 1215, text: "level 5", color: "#d32ce6", messageDevelopmentTeamFactory: "Чувствуй то, что у тебя внутри! Команда разработчиков поздравляет с достижением ранга)" },
	{ title: "Игровой рецензент 1 уровня", achievementBoundary: 2430, text: "level 6", color: "#b28a33", messageDevelopmentTeamFactory: "Ценим то, что Вы остаетесь в активе нашей платформы! Вы большой молодец, это говорит нам, о том, что мы движемся в правильном направлении. Поздравляем)" },
	{ title: "Игровой рецензент 2 уровня", achievementBoundary: 4860, text: "level 7", color: "#ade55c", messageDevelopmentTeamFactory: "Вы переступили очередную ранговую черту, с чем мы Вас и поздравляем, спасибо за то, что остаетесь с нами! Команда Factory.inc" },
	{ title: "Игровой рецензент 3 уровня", achievementBoundary: 9720, text: "level 8", color: "#eb4b4b", messageDevelopmentTeamFactory: "Тебя приветствует Мастер Йода! Сегодня день важный, ранг ты переступил новый. Поздравить с этим праздником хочу тебя я. Напутственное слово мое послушай... Сила человека кроется в мире вокруг. Энергией волшебной переполнены мы. Всегда она придет тебе на помощь - тебе почувствовать ее лишь нужно. Ничего бояться не должен ты. Страх рождает гнев, гнев рождает ненависть, ненависть рождает агрессию. Агрессия - прямой путь на Темную сторону. Да прибудет с тобой сила света!" },
	{ title: "Профессиональный рецензент", achievementBoundary: 19440, text: "level 9", color: "#fff34f", messageDevelopmentTeamFactory: "Слова ничего не значат, пока не превратишь их в поступки. Но Вы доказали свою силу действиями! Команда Factory.inc поздравляет с достижением нового ранга." },
	{ title: "Топовый игровой критик сообщества", achievementBoundary: 38880, text: "level 10", color: "#ffb400", messageDevelopmentTeamFactory: "Высокий статус - это прежде всего ответственность помни об этом! Ну а мы поздравляем с новой очивкой) Желаем удачи! Играйте и веселитесь. Команда разработчиков." },
]

function getRankByPoints(numberPoints) {
	return new Promise ((resolve, reject) => {
		let m
		for (m = 0; m < ranks.length; m++) {
			if (numberPoints < ranks[m].achievementBoundary) {
				m = m - 1
				break
			}
			if (m === ranks.length - 1) break
		}
		resolve(ranks[m])
	})
}

export default getRankByPoints
