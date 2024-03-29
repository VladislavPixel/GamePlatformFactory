const usersData = [
	{_id: "9934534fghf", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["nbmbm00"], accessPolicy: true, birthDay: "11", country: "RU", email: "lol456n@mail.ru", loginAccount: "michael777", monthOfBirth: "11", numberPhone: "87776543321", yearOfBirth: "1995", nickName: "Mitchel-DARK", name: "Alex", surName: "Faruch", avatar: "mitchelDarkAvatar000.jpg"},
	{_id: "hgjhg4353", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["fghcvb789", "234324kl"], accessPolicy: true, birthDay: "20", country: "US", email: "nimb@mail.ru", loginAccount: "darkdark999", monthOfBirth: "5", numberPhone: "88965438877", yearOfBirth: "1999", nickName: "Alex", name: "Николай", surName: "Капралов", avatar: "alex789345.jpg"},
	{_id: "6757hgjhg4353", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["234324kl"], accessPolicy: true, birthDay: "07", country: "RU", email: "carat@mail.ru", loginAccount: "monjo90", monthOfBirth: "4", numberPhone: "87689055544", yearOfBirth: "2000", nickName: "Lol-snitch", name: "Алексей", surName: "Никифоров", avatar: "loldsf32424.jpg"},
	{_id: "456fdgdfgert", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["66666mnnm"], accessPolicy: true, birthDay: "14", country: "RU", email: "russiavbv@mail.ru", loginAccount: "xzxpon879", monthOfBirth: "10", numberPhone: "84567890101", yearOfBirth: "1975", nickName: "Witch-magica", name: "Светлана", surName: "Понркратова", avatar: "khgjhgnbv900909.jpg"},
	{_id: "vcbcv657989", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["vbnvbn123213op"], accessPolicy: true, birthDay: "17", country: "RU", email: "clonek@mail.ru", loginAccount: "mitch5678", monthOfBirth: "8", numberPhone: "87897765454", yearOfBirth: "1960", nickName: "Mariana", name: "Ксения", surName: "Фролова", avatar: "bybypolo.jpg"},
	{_id: "jhkhjtyu678", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["2323232rtyu"], accessPolicy: true, birthDay: "03", country: "RU", email: "byzzy@mail.ru", loginAccount: "moloko546", monthOfBirth: "7", numberPhone: "83335678989", yearOfBirth: "1969", nickName: "Mark", name: "Марк", surName: "Симонов", avatar: "mark3543.jpg"},
	{_id: "9009768345gfhfgh", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["vzxxzcxzxcxzc789"], accessPolicy: true, birthDay: "27", country: "RU", email: "superman@mail.ru", loginAccount: "lovomon", monthOfBirth: "4", numberPhone: "84569879901", yearOfBirth: "1985", nickName: "Pank-roker", name: "Дмитрий", surName: "Иванов", avatar: "danielRTdfgdf.jpg"},
	{_id: "9098ttyyy43", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["bvnvvbc546578", "546456768989kjjkhklzxc"], accessPolicy: true, birthDay: "10", country: "RU", email: "numebasf@mail.ru", loginAccount: "bomn5546", monthOfBirth: "9", numberPhone: "84534536789", yearOfBirth: "1983", nickName: "PYPS ASAP", name: "Майкл", surName: "Фирсов", avatar: "cvbvcbfdet96546.jpg"},
	{_id: "fdvvbvbvvbvbv8088", rank: {title: "Пользователь платформы Factory.inc", _id: "level1"}, hisReviews: [], hisComments: ["bvnvbmnytuytu5555555"], accessPolicy: true, birthDay: "25", country: "RU", email: "marnagez@mail.ru", loginAccount: "murka322", monthOfBirth: "6", numberPhone: "85678970201", yearOfBirth: "2001", nickName: "Gibrit", name: "Владислав", surName: "Ставрогин", avatar: "fdgert6548789707756756.jpg"}
]

function getUsersObjectForSliderStoreComments(arrayComments) {
	return new Promise((resolve, reject) => {
		const objectUsers = {}
		for (const comment of arrayComments) {
			for (const user of usersData) {
				if (!(comment.userId in objectUsers)) {
					objectUsers[user._id] = user
				}
			}
		}
		setTimeout(() => {
			resolve(objectUsers)
		}, 500)
	})
}
function getUserById(idUser) {
	return new Promise((resolve, reject) => {
		const targetUser = usersData.find(user => user._id === idUser)
		setTimeout(() => {
			resolve(targetUser)
		}, 1000)
	})
}
function getValueAllUsers() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(usersData.length)
		}, 200)
	})
}

export { usersData, getUserById, getValueAllUsers }
export default getUsersObjectForSliderStoreComments