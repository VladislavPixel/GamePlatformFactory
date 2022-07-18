const arrDiscussionsSub = [
	{_id: "disSub1", userId: "6757hgjhg4353", targetDiscussion: "dis1", date: 1658067126015, text: "Каждый имеет право на своих тараканов в голове"},
	{_id: "disSub2", userId: "hgjhg4353", targetDiscussion: "dis1", date: 1658067126015, text: "Согласен"},
	{_id: "disSub3", userId: "9934534fghf", targetDiscussion: "dis1", date: 1658067126015, text: "Фигню ляпнул и доволен"},
	{_id: "disSub4", userId: "vcbcv657989", targetDiscussion: "dis1", date: 1658067126015, text: "Да блин ну нравится челу задротить, прет его с этого, сидит день и ночью оттачивает свои навыки. Что ты до него докапался токсик?"},
	{_id: "disSub5", userId: "jhkhjtyu678", targetDiscussion: "dis1", date: 1658067126015, text: "Ну и не играй тогда в Dota 2 делов то)"},
	{_id: "disSub6", userId: "9098ttyyy43", targetDiscussion: "dis1", date: 1658067126015, text: "Как по мне, дота 2 самая крутая игра. Отличная многопользовательская MOBA, огромнейшая фан-база, турниры от Valve, механики игры. Чел красава, что познаешь мастерство)"}
]

function getAllDiscussionsSubById(idDis) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arrDiscussionsSub.filter(item => item.targetDiscussion === idDis))
		}, 200)
	})
}

export default getAllDiscussionsSubById
