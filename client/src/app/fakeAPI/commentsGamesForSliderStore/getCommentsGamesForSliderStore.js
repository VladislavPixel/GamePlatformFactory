import { usersData } from "../users"
import { oneDayInMilliseconds, midnightForCurrentTime, prevYearStart, currentYearStart, currentNumberMonth } from "../../utils/constants"

const commentsGames = [
	// ForToDay (за сегодня)
	{_id: "docvbta324234879kjljkmmmmmm", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "fdvvbvbvvbvbv8088", date: 1656968400000, status: "negative", text: "Сложный макроконтроллинг перса, но мне нравится дроч."},
	{_id: "docvbta324234bnmmmmmm", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "456fdgdfgert", date: 1656998700000, status: "positive", text: "Мне нравится то, что через эту игру можно построить киберспортивную карьеру."},
	//======================================
	// PerDay (сутки)
	{_id: "shakurdota2vcbv657klkljlj76867867222222", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9098ttyyy43", date: 1656961800000, status: "neutral", text: "Слишком скучно. Мое мнение LOL круче, но пару каток сгонять можно."},
	//======================================
	// InAWeek (за неделю)
	{_id: "123tytytyt", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9098ttyyy43", date: 1656447000000, status: "positive", text: "Игра достойна внимания, история у нее богатая."},
	//======================================
	// PerMouth (за текущий месяц)
	{_id: "123aaaaaaaaaaaaaabbbbbbbbbvvvv", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9098ttyyy43", date: 1656622800000, status: "neutral", text: "Неплохо играется!"},
	//======================================
	// perYear (за 1 предыдущий год)
	{_id: "123tytytyt45677777777", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9098ttyyy43", date: 1609448400000, status: "positive", text: "Мы играем как это не странно всей семьей)ахахаха"},
	{_id: "123tytytyt45677777777546456", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9098ttyyy43", date: 1640984300000, status: "positive", text: "Лол я пишу коммент о Dote на Factory.inc"},
	//======================================
	// All Time (за все время)
	{_id: "bvnvvbc546578768678678", funnyStatus: [], awards: [], consonants: ["consonant6", "consonant7"], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "fdvvbvbvvbvbv8088", date: 1649581200000, status: "positive", text: "Спасибо разработчикам за патч 7.23... Такого приятного подарка мнне давно никто не делал. У меня почти 5к часов в доте и я страдал от этой зависимости. Благодаря этому чудесному патчу я наконец таки нажал заветную кнопку удалить. Спустя года я наконец то познакомился с семьёй и прогулялся по улице! Это лучшее, что они могли сделать для меня и для таких же как я) Выписываю огромную благодарность ребятам-работягам. Вот так и нужно патчить свои продукты. Просто конвеер по зомбированию людей, вот что это за игра и не более того, поэтому не рекомендую начинать в нее играть, если вы хотите познакомиться с Dota 2. Жизнь так и пройдет мимо и все что у вас останется - это часы проведенные в игре. Я полюбил эту игру, когда она называлась Dota Allstars, и в нее было откровенно интересно играть. Каждый матч вызывал положительные эмоции, даже если ты проиграл, потому что ты старался прежде всего для себя. Сегодня же дота - это огромная система по выманиванию денег из эгоистичных, противных людей, которые хотят чем-то выделяться на фоне других таких же людей. И шестеренки, которые двигают эту систему - это психически неуравновешенные люди, готовые целыми сутками самоутверждаться за счет других. Спасибо за внимание."},
	{_id: "bvnvvbc546578", funnyStatus: [], awards: [], consonants: ["consonant1", "consonant2", "consonant3", "consonant4", "consonant5"], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9098ttyyy43", date: 1649581200000, status: "positive", text: "однажды зайдя сюда ты пожалеешь, но тебе понравится"},
	{_id: "docvbta324234", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "fdvvbvbvvbvbv8088", date: 1652542200000, status: "positive", text: "Прикольно но надо понимать перса."},
	{_id: "mark2", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9934534fghf", date: 1652443200000, status: "negative", text: "Так получается, что я играю в доту, когда у меня в жизни всё не очень здорово, не считая периода, когда я только начинал. Эта игра давно уже мне не приносит эмоций, ни положительных, ни отрицательных, после серии каток остаётся только опустошение. Я даже не могу вспомнить, за кого я играл 2 катки назад. Когда я играю с друзьями, ситуация чуть лучше, там хоть пообщаться можно, но в целом дота-просто бессмысленная трата моего времени. И всё бы ничего, но я подсел на эту херь, вопреки всем доводам логики. Дота не дала мне ничего, разве только стрессоустойчивость в жизни, мне стало искренне ♥♥♥♥♥♥♥♥♥♥♥♥♥♥ на токсичность в реальной жизни, на оскорбления и т.д. Я честно не рекомендую катать в эту ♥♥♥♥♥♥♥♥♥♥ без друзей или без коммерческих целей (стримеры, киберспорт). Она точно не сделает вас умнее, смешнее, круче. Пацаны, не надо, мб так только у меня, но играя в доту я деградирую, бросаю читать, учиться, общаться. Превращаюсь в тупое животное. Попробую бросить (снова) хотя ♥♥♥♥♥♥♥♥ так и тянет каточку-другую сыграть."},
	{_id: "shakurdota2vcbv657klkljlj", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "456fdgdfgert", date: 1653058800000, status: "positive", text: "Обожаем с друзьями зарубиться вечерком, рекомендую!"},
	{_id: "dortacxbvv8v8v8v", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "vcbcv657989", date: 1651352400000, status: "positive", text: "Игра очень достойная, затягивает сильно. Убежать от проблем рекомендую."},
	{_id: "bvnvvbc546578435345vcbcvfdgter", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "jhkhjtyu678", date: 1653048000000, status: "positive", text: "Спасибо разработчикам за игру)"},
	{_id: "mark2324324", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9934534fghf", date: 1653558300000, status: "neutral", text: "Даже не думай сынок, оно того не стоит."},
	{_id: "docvbta32423454676878", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "fdvvbvbvvbvbv8088", date: 1653636120000, status: "negative", text: "Игра полный отстой"},
	{_id: "dotadotadotabnm", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9098ttyyy43", date: 1652518800000, status: "positive", text: "Регулярно пишу сюда, потому что игра ну просто космос. Обожаю ее, считаю уже достоянием человечества, АХАХАХА"},
	{_id: "dota2789089", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9009768345gfhfgh", date: 1652443200000, status: "positive", text: "Гениальная игра, гениальные люди ставлю 11/10 , пишу этот отзыв вместе с отцом, второй отец на работе но когда он вернётся мы вместе будем проводить время в этой прекрасной игре"},
	{_id: "bvnvvbc546578435345", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "jhkhjtyu678", date: 1652216400000, status: "positive", text: "Написано что игра бесплатная,но она стоила мне жизни"},
	{_id: "b435345fgvbnbv", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "vcbcv657989", date: 1652216400000, status: "positive", text: "По началу кажется что играешь с 9 даунами, но позже оказывается что их 10"},
	{_id: "shakurdota2vcbv657", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "456fdgdfgert", date: 1652443200000, status: "positive", text: "Около 3 тысяч часов я мог потратить на изучение математики, иностранных языков, физики, химии, биологии и многого другого, но, увы, я провёл их здесь. 125 суток - достаточно много, чтобы изучить матанализ, но не достаточно, чтобы понять, какой ботинок тебе лучше собрать в этой игре"},
	{_id: "dotabvnvbmnbmbnm000000", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "6757hgjhg4353", date: 1652443200000, status: "neutral", text: "Позволяет убить не только время, но и своё будущее"},
	{_id: "manual", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "hgjhg4353", date: 1652443200000, status: "negative", text: "С 2013 года я потерял на текущий момент 255 суток потраченных на эту срань. Эта игра заставит вас ненавидеть врагов, союзников. Принимать стадии отрицания, принятия, гнева и депрессии каждые 40 минут в попытках получить очки ммра. Победы со временем перестанут приносить удовольствие, вы будете заходить сюда только чтобы отбить ММР потерянный на лузстриках. Одумайтесь и потратьте свои сутки, недели, месяцы и годы жизни на саморазвитие. За этот потраченный почти год можно было бы выучить любой язык программирования и зарабатывать деньги, а не клянчить у мамы на аркану в день рождения."},
	{_id: "vcbvcbfdgtert555555", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "vcbcv657989", date: 1652556600000, status: "neutral", text: "Пожалуй напишу еще один комментарий этой игре. Dota 2 невозможно описать словами , но можно цифрами 0/10... После скачивания этой замечательной игры мой друг , борющийся за жизнь со смертельной болезнью , нашёл в себе силы прекратить борьбу... Dota 2 настолько цепляется к тебе с первым запуском , что хочется стереть себе память и насладиться моментом , когда я её не скачивал... Раньше в детстве я боялся клоунов , но теперь благодаря этой игре я сам стал им... Пока скачивал Dota 2 я открывал мегаящик в Brawl Stars и у меня выпал батя с окна... Помни , Dota 2 может стоять перед тобой и кем ты можешь стать. Спасибо , стал инвалидом... Благодаря этой прекрасной игре ко мне спустя 20 лет вернулся отец , бросивший семью , чтобы бросить еще раз , но меня на прогиб... Спасибо , третий день не мог проблеваться , но после первого захода в Dota 2 я стал брандспойтом... Как же я давно не видел хороших игр , но благодаря Dota 2 я их так и не увидел... В детстве боялся высоты , после установки игры спрыгнул с 9 этажа..."},
	{_id: "nbmbm00", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "16alloda54646mbn", userId: "9934534fghf", date: 1645770600000, status: "positive", text: "Настало время поднимать отечественный игропром, работяги. Подписочный сервер играется отлично, донат только на косметики, цена на подписку адекватная и бьет по кошельку не так сильно как вов. Онлайн неплохой. Играла с релиза и ушла из игры где-то в 2015, сейчас вернулась и не жалею."},
	{_id: "fghcvb789", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "16alloda54646mbn", userId: "hgjhg4353", date: 1642260300000, status: "positive", text: "Что же, все прекрасно знают, как Близзарды покинули российский рынок, тем самым лишив нас, простых игроков, возможности не только покупать их игры, но и оплачивать подписку на Варкрафт. С того моменты я искала, куда бы приткнуться, чтобы и поиграть не напряженно, но приятно, чтобы мир был красивый и понятный, чтобы подписка (если таковая есть), не сильно кусалась. Вот тут мне посоветовали присмотреться к Аллодам. И знаете, мне так понравилось! Как варкрафторский задрот любитель с 15-летним стажем, могу сказать, что Аллоды и похожи на творение близзов, но при этом своим истинно-русским колоритом очень отличаются."},
	{_id: "234324kl", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "16alloda54646mbn", userId: "6757hgjhg4353", date: 1637757803000, status: "negative", text: "Аллоды Онлайн... Некогда любимая игра детства, в которой было проведено почти 14к часов. С патча 2.2 и до самого 8.0. Чудные времена 3.0 и 4.0, когда онлайна было примерно столько же, сколько сейчас из-за известной всем причины. Время, когда в пвп решали руки, статы (старые, а не нынешние казуальные) и знание таймингов кд скиллов своего оппонента, а не кол-во доната в рунах, броньке, маунте и прочего чуда. После ребалансировки классов и характеристик в 5.0 игра стала умирать на глазах. Актив в ней заметно падал, что в последствии привело к объединению серверов, которых сейчас лишь 3 (раньше было около 10, если память не изменяет), но при этом кол-во вводимого нового доната неустанно стремилось вверх."},
	{_id: "66666mnnm", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "16alloda54646mbn", userId: "456fdgdfgert", date: 1617805980000, status: "positive", text: "Игра шикарная. Кто еще не успел поиграть - присоединяйтесь. Я не играл в варкрафт, а в аллодах провел всего 45 часов, но и этого времени хватило, чтобы проникнуться, а поэтому опишу свои впечатления. Шикарная атмосфера (тут и банька-парилка и русская березка в лиге и пионерлагерь и другое в империи). Музыка порой очень классная, на разные мотивы."},
	{_id: "vbnvbn123213op", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "17warface54646mbn", userId: "vcbcv657989", date: 1643710870000, status: "neutral", text: "да я посоветую потому что игра не плохая но донат тут очень сильно влияет .Но спасибо стиму что он создает паки с донатными пушками поэтому я и советую."},
	{_id: "2323232rtyu", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "17warface54646mbn", userId: "jhkhjtyu678", date: 1645114200000, status: "positive", text: "Warface доживает свои последние дни Многие сваливают, новички не приходят, не смотря на рекламные кампании и заказные ролики, а разработчики тем временем пытаются вытащить последние монеты из кошельков преданных фанатов. Вся игра сплошной баг - пытаются исправить одну ошибку, появляется другая, некоторые проблемы висят по полгода, да что там говорить, если даже на официальном турнире происходили телепорты. На ютуб канале Warface каждый ролик с анонсом забит дизами и просьбами починить игру, но зачем? Все силы брошены на новый донат."},
	{_id: "vzxxzcxzxcxzc789", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "1eldenRingMiddle77", userId: "9009768345gfhfgh", date: 1648403100000, status: "positive", text: "Очень люблю все серию Souls и эта игра не является исключением. В игре есть сломанные механики, оружие и противники, но это ничуть не мешает прохождению. Всё как всегда, только новее. Рекомендую."},
	{_id: "546456768989kjjkhklzxc", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "1eldenRingMiddle77", userId: "9098ttyyy43", date: 1648191720000, status: "positive", text: "Dark Souls 4 в открытом мире и прыжками, мир очень красивый (дизайн) и на удивление его интересно изучать. Кстати игра стала сильно щадящей к новым игрокам, появилась возможность призывать мобов, которые будут танковать, а вы будете накидывать боссу за щеку, ещё респауны перед боссами завезли. Итог - это вкусно, но не то чтобы по вкусу вкусно, но по сути вкусно! P.S. Анимации из Demon's Souls и лок на 60 fps идут в комплекте."},
	{_id: "bvnvbmnytuytu5555555", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "1eldenRingMiddle77", userId: "fdvvbvbvvbvbv8088", date: 1648043640000, status: "positive", text: "Это все о чем я мечтал, фантастическая игра. Окежуаленый дарк солус в открытом мире, хотя хардкорности ни капли не меньше, я хз что это за магия. По ощущениям это буквально релиз десятилетия. Ты прям растворяешься в этом мире, тупо улетаешь в сказку, я такое последний раз чувствовал когда лет в 12 первый раз в скайриме вылез из пещеры и топал к ривервуду. Вот это чувство чего-то родного и сказачного не передать словами. Оно тут есть. Абсолютные 10 из 10. Единственное только я не оч желтый и оранжевый цвет люблю."},
	{_id: "mark2546456", funnyStatus: [], awards: [], consonants: [], disagree: [], sucks: [], likes: [], dislikes: [], hisDiscussions: [], idGame: "2dota2lol56", userId: "9934534fghf", date: 1652559480000, status: "negative", text: "Не буду использовать маты и прочую грязь, которая сейчас так популярна. Хочу предупредить всех новичков, которые собираются поставить себе эту депрессивно-азартную психологическую игру, НЕ СТАВЬТЕ! Она погубит ваше время и психику. Если вам интересно, что такое Moba, зайдите в хотс (от близард), но даже не связывайтесь с этой машиной по порче людей. Все комьюнити здесь прогнило до основания, включая разработчиков, которые к каждой значимой дате выпускают новый дорогой сундук со старым, но невероятно ценным хламом. Система рейтинга и подбора противника худшая среди всех подобных игр, поверьте, у меня есть 6000 часов опыта, на который я опираюсь. Я полюбил эту игру, когда она называлась Dota Allstars, и в нее было откровенно интересно играть. Каждый матч вызывал положительные эмоции, даже если ты проиграл, потому что ты старался прежде всего для себя. Сегодня же дота - это огромная система по выманиванию денег из эгоистичных, противных людей, которые хотят чем-то выделяться на фоне других таких же людей. И шестеренки, которые двигают эту систему - это психически неуравновешенные люди, готовые целыми сутками самоутверждаться за счет других. Спасибо за внимание."},
]

class HashSortDataComments{
	constructor() {
		this.dataSort = {}
	}

	getDataByIdGameSorted(idGame) {
		if (idGame in this.dataSort) return this.dataSort[idGame]
		const filteredById = commentsGames.filter(comment => comment.idGame === idGame)
		this.dataSort[idGame] = filteredById
		if (!filteredById.length) return filteredById
		filteredById.sort((commentA, commentB) => commentB.date - commentA.date)

		return filteredById
	}
}

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
function isInScopeDate(dateMilliseconds) {
	const millisecondsInSevenDays = oneDayInMilliseconds * 7
	const startScopeMilliseconds = midnightForCurrentTime - millisecondsInSevenDays

	return (dateMilliseconds >= startScopeMilliseconds && dateMilliseconds < midnightForCurrentTime)
}
function getArrayCommentsWithUsersData(commentsArr) {
	const array = commentsArr.map(comment => {
		const user = usersData.find(item => item._id === comment.userId)
		const updateUser = {...user}
		delete updateUser._id

		return {...comment, ...updateUser}
	})
	return array
}
// =====================================================================
function getCommentsGamesForSliderStore(arrayTop12) {
	return new Promise((resolve, reject) => {
		const arr = []
		for (const game of arrayTop12) {
			for (let i = 0; i < commentsGames.length - 1; i++) {
				if (game._id === commentsGames[i].idGame) arr.push(commentsGames[i])
			}
		}

		setTimeout(() => {
			resolve(arr)
		}, 1200)
	})
}
export function getCommentsForTheLastWeek(idGame) {
	return new Promise((resolve, reject) => {
		const result = commentsGames.filter(comment => {
			if (comment.idGame === idGame && isInScopeDate(comment.date)) return comment
			return null
		})
		const sliceResult = result.length > 10 ? result.slice(0, 10) : result
		const updateSliceReqult = getArrayCommentsWithUsersData(sliceResult)
		if (updateSliceReqult.length) {
			updateSliceReqult.sort((commentA, commentB) => {
				if (commentA.date < commentB.date) return 1
				if (commentA.date > commentB.date) return -1
				return 0
			})
		}

		setTimeout(() => {
			resolve(updateSliceReqult)
		}, 1000)
	})
}
export function getCommentsForTheMainWallByIdNoLastWeek(idGame) {
	return new Promise((resolve, reject) => {
		const result = commentsGames.filter(item => {
			if (idGame === item.idGame && !isInScopeDate(item.date)) return item
			return null
		})
		const resultWithCorrectLength = (result.length > 15 ? result.slice(0, 15) : result)
		if (resultWithCorrectLength.length) {
			resultWithCorrectLength.sort((commentA, commentB) => {
				if (commentA.consonants.length > commentB.consonants.length) return -1
				if (commentA.consonants.length < commentB.consonants.length) return 1
				return 0
			})
		}
		const updateResult = resultWithCorrectLength.map(comment => {
			const user = usersData.find(item => item._id === comment.userId)
			const updateUser = {...user}
			delete updateUser._id

			return {...comment, ...updateUser}
		})

		setTimeout(() => {
			resolve(updateResult)
		}, 1000)
	})
}
const hashData = new HashSortDataComments()
export function fetchCommentsForCommentsPage(config, idGame, group) {
	return new Promise((resolve, reject) => {
		const commentsByIdGame = hashData.getDataByIdGameSorted(idGame)

		//commentsGames.filter(item => idGame === item.idGame) // Отбираем комментарии для конкретной игры
		if (!commentsByIdGame.length) {
			resolve(commentsByIdGame)
			return
		}

		//commentsByIdGame.sort((commentA, commentB) => commentB.date - commentA.date)
		// Сортировка по временному (постоянному фильтру)
		let filterCommentsByDate
		function getArrayForMonthFilter(value) {
			// для фильтрации за 3 месяца, за 6
			const triggerValueForMonth = currentNumberMonth - value
			if (triggerValueForMonth >= 0) return commentsByIdGame.filter( comment => comment.date >= new Date(new Date().getFullYear(), triggerValueForMonth, 1).getTime() && comment.date < new Date(new Date().getFullYear(), currentNumberMonth, 1).getTime() )
			return commentsByIdGame.filter( comment => comment.date >= new Date(new Date().getFullYear() - 1, 12 - Math.abs(triggerValueForMonth), 1).getTime() && comment.date < new Date(new Date().getFullYear(), currentNumberMonth, 1).getTime() )
		}
		switch(config.timeFilter.key) { // Фильтр по дате
			case "allTime":
				filterCommentsByDate = commentsByIdGame
			break
			case "forToDay":
				filterCommentsByDate = commentsByIdGame.filter( comment => comment.date >= midnightForCurrentTime )
			break
			case "perDay":
				filterCommentsByDate = commentsByIdGame.filter( comment => comment.date >= (Date.now() - oneDayInMilliseconds) )
			break
			case "inAWeek":
				filterCommentsByDate = commentsByIdGame.filter( comment => comment.date >= (Date.now() - oneDayInMilliseconds * 7) )
			break
			case "perMouth":
				filterCommentsByDate = commentsByIdGame.filter( comment => comment.date >= new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime() )
			break
			case "inThreeMonths":
				filterCommentsByDate = getArrayForMonthFilter(3)
			break
			case "inSixMonths":
				filterCommentsByDate = getArrayForMonthFilter(6)
			break
			case "perYear":
				filterCommentsByDate = commentsByIdGame.filter( comment => comment.date >= prevYearStart && comment.date < currentYearStart )
			break
			default:
				filterCommentsByDate = commentsByIdGame
			break
		}
		if (!filterCommentsByDate.length) {
			resolve(filterCommentsByDate)
			return
		}

		const MAX_GROUP_ELEMENTS = 15
		const KEY = config.indicatorFilter.key
		filterCommentsByDate.sort((commentA, commentB) => commentB[KEY].length - commentA[KEY].length) // Сортировка по критериям (постоянный фильтр)
		const maxBorder = group * MAX_GROUP_ELEMENTS
		const minBorder = maxBorder - MAX_GROUP_ELEMENTS
		if (!config.statusFilter) {
			resolve(getArrayCommentsWithUsersData(filterCommentsByDate.slice(minBorder, maxBorder)))
			return
		}

		const filterCommentsByStatus = filterCommentsByDate.filter(comment => comment.status === config.statusFilter.key) // Фильтруем по посылу комментария
		if (!filterCommentsByStatus.length) {
			resolve(filterCommentsByStatus)
			return
		}

		resolve(getArrayCommentsWithUsersData(filterCommentsByStatus.slice(minBorder, maxBorder)))
	})
}

export default getCommentsGamesForSliderStore
