const arrDiscussions = [
	{_id: "dis1", userId: "456fdgdfgert", hisDiscussionsSub: ["disSub1", "disSub2", "disSub3", "disSub4", "disSub5"], targetComment: "docvbta324234879kjljkmmmmmm", date: 1657829029889, text: "Никогда не понимал таких мазахистов, играть надо в кайф, а не дрочем заниматься"},
	{_id: "dis2", userId: "9098ttyyy43", hisDiscussionsSub: [], targetComment: "docvbta324234879kjljkmmmmmm", date: 1657829029889, text: "Такого же мнения"}
]

function getAllDiscussionsById(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arrDiscussions.filter(disc => disc.targetComment === id))
		}, 500)
	})
}

export default getAllDiscussionsById
