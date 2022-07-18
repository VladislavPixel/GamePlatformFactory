const arrDiscussions = [
	{_id: "dis1", userId: "456fdgdfgert", hisDiscussionsSub: ["disSub1", "disSub2", "disSub3", "disSub4", "disSub5", "disSub6"], targetComment: "docvbta324234879kjljkmmmmmm", date: 1657829029889, text: "Никогда не понимал таких мазахистов, играть надо в кайф, а не дрочем заниматься"},
	{_id: "dis2", userId: "9098ttyyy43", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1657829029889, text: "Такого же мнения"},
	{_id: "dis3", userId: "9934534fghf", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "хахааххахах, я даже с интонацией прочитал"},
	{_id: "dis4", userId: "hgjhg4353", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "4k? не не слышал..."},
	{_id: "dis5", userId: "6757hgjhg4353", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "тыкаешь короче по экрану и перс ходит, прожимаешь скилы какие-то и вот ты уже сидишь на International и не вдупляешь че ты тут забыл"},
	{_id: "dis6", userId: "vcbcv657989", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "тык тык пкм туды сюды"},
	{_id: "dis7", userId: "jhkhjtyu678", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "Ну что, Родные, ждали? Сегодняшний рецептик -- Оладушки на молоке! 1. Пшеничная муку 200 г, 3 столовые ложки сахара и щепотку соли смешайте. 2. 1 Куриное яйцо взбейте с 200 мл молока, добавьте гашеную уксусом соду. (Уксус 9%-ный - ½ чайные ложки, Сода - ½ чайные ложки). Добавьте муку. Замесите до однородной массы. Тесто должно получиться густым. По необходимости добавьте еще муки. 3. Порциями примерно со столовую ложку вылейте тесто на раскаленную сковороду. Обжарьте оладушки с обеих сторон на среднем огне. Bone appettito"},
	{_id: "dis8", userId: "9009768345gfhfgh", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "Я тоже долго задротил, чтобы разобраться в игре) Красавчик, желаю успехов!"},
	{_id: "dis9", userId: "fdvvbvbvvbvbv8088", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "Орнул с Ваших комментариев, ХД"},
	{_id: "dis10", userId: "fancoDichePeleno123", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "Кто бы что не говорил, игра крутая, и все в ней назадротили кучу времени! Всем котики)"},
	{_id: "dis11", userId: "mubaba34234", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "Дрочем тебе придется много заниматься чувак)"},
	{_id: "dis12", userId: "cloneityuo2134", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1658133040405, text: "Мощная игра, мне она безумно нравится"},
]

function getAllDiscussionsById(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arrDiscussions.filter(disc => disc.targetComment === id))
		}, 500)
	})
}

export default getAllDiscussionsById
