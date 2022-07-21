const usersData = [
	{_id: "456fdgdfgert", rankPoints: 60, hisReviews: [], hisComments: ["66666mnnm", "docvbta324234bnmmmmmm", "shakurdota2vcbv657klkljlj", "shakurdota2vcbv657"], accessPolicy: true, birthDay: "14", country: "RU", email: "russiavbv@mail.ru", loginAccount: "xzxpon879", monthOfBirth: "10", numberPhone: "84567890101", yearOfBirth: "1975", nickName: "Witch-magica", name: "Светлана", surName: "Понркратова", avatar: "khgjhgnbv900909.jpg", regDateOnPlatform: 1497474000000, slogan: "Здесь будет настоящая бойня. Зови друзей."},
	{_id: "9098ttyyy43", rankPoints: 120, hisReviews: [], hisComments: ["shakurdota2vcbv657klkljlj76867867222222", "123tytytyt", "123aaaaaaaaaaaaaabbbbbbbbbvvvv", "123tytytyt45677777777", "123tytytyt45677777777546456", "dotadotadotabnm", "bvnvvbc546578", "546456768989kjjkhklzxc"], accessPolicy: true, birthDay: "10", country: "RU", email: "numebasf@mail.ru", loginAccount: "bomn5546", monthOfBirth: "9", numberPhone: "84534536789", yearOfBirth: "1983", nickName: "PYPS ASAP", name: "Майкл", surName: "Фирсов", avatar: "cvbvcbfdet96546.jpg", regDateOnPlatform: 1497474000000, slogan: "Овладей своими демонами."},
	{_id: "9934534fghf", rankPoints: 60, hisReviews: [], hisComments: ["nbmbm00", "mark2", "mark2324324", "mark2546456"], accessPolicy: true, birthDay: "11", country: "RU", email: "lol456n@mail.ru", loginAccount: "michael777", monthOfBirth: "11", numberPhone: "87776543321", yearOfBirth: "1995", nickName: "Mitchel-DARK", name: "Alex", surName: "Faruch", avatar: "mitchelDarkAvatar000.jpg", regDateOnPlatform: 1497474000000, slogan: "Стань легендой."},
	{_id: "hgjhg4353", rankPoints: 60, hisReviews: [], hisComments: ["fghcvb789", "manual"], accessPolicy: true, birthDay: "20", country: "US", email: "nimb@mail.ru", loginAccount: "darkdark999", monthOfBirth: "5", numberPhone: "88965438877", yearOfBirth: "1999", nickName: "Alex", name: "Николай", surName: "Капралов", avatar: "alex789345.jpg", regDateOnPlatform: 1497474000000, slogan: "Титаны вступают в бой"},
	{_id: "6757hgjhg4353", rankPoints: 30, hisReviews: [], hisComments: ["234324kl", "dotabvnvbmnbmbnm000000"], accessPolicy: true, birthDay: "07", country: "RU", email: "carat@mail.ru", loginAccount: "monjo90", monthOfBirth: "4", numberPhone: "87689055544", yearOfBirth: "2000", nickName: "Lol-snitch", name: "Алексей", surName: "Никифоров", avatar: "loldsf32424.jpg", regDateOnPlatform: 1497474000000, slogan: "Взлом - это наше оружие."},
	{_id: "vcbcv657989", rankPoints: 60, hisReviews: [], hisComments: ["vbnvbn123213op", "dortacxbvv8v8v8v", "b435345fgvbnbv", "vcbvcbfdgtert555555"], accessPolicy: true, birthDay: "17", country: "RU", email: "clonek@mail.ru", loginAccount: "mitch5678", monthOfBirth: "8", numberPhone: "87897765454", yearOfBirth: "1960", nickName: "Mariana", name: "Ксения", surName: "Фролова", avatar: "bybypolo.jpg", regDateOnPlatform: 1497474000000, slogan: "Как ты собираешься выжить?"},
	{_id: "jhkhjtyu678", rankPoints: 45, hisReviews: [], hisComments: ["2323232rtyu", "bvnvvbc546578435345vcbcvfdgter", "bvnvvbc546578435345"], accessPolicy: true, birthDay: "03", country: "RU", email: "byzzy@mail.ru", loginAccount: "moloko546", monthOfBirth: "7", numberPhone: "83335678989", yearOfBirth: "1969", nickName: "Mark", name: "Марк", surName: "Симонов", avatar: "mark3543.jpg", regDateOnPlatform: 1497474000000, slogan: "Trusted Everywhere"},
	{_id: "9009768345gfhfgh", rankPoints: 30, hisReviews: [], hisComments: ["vzxxzcxzxcxzc789", "dota2789089"], accessPolicy: true, birthDay: "27", country: "RU", email: "superman@mail.ru", loginAccount: "lovomon", monthOfBirth: "4", numberPhone: "84569879901", yearOfBirth: "1985", nickName: "Pank-roker", name: "Дмитрий", surName: "Иванов", avatar: "danielRTdfgdf.jpg", regDateOnPlatform: 1497474000000, slogan: "Live in your world, play in ours."},
	{_id: "fdvvbvbvvbvbv8088", rankPoints: 75, hisReviews: [], hisComments: ["docvbta324234879kjljkmmmmmm", "bvnvvbc546578768678678", "docvbta324234", "docvbta32423454676878", "bvnvbmnytuytu5555555"], accessPolicy: true, birthDay: "25", country: "RU", email: "marnagez@mail.ru", loginAccount: "murka322", monthOfBirth: "6", numberPhone: "85678970201", yearOfBirth: "2001", nickName: "Gibrit", name: "Владислав", surName: "Ставрогин", avatar: "fdgert6548789707756756.jpg", regDateOnPlatform: 1497474000000, slogan: "Стань их лидером или погибни."},
	{_id: "fancoDichePeleno123", rankPoints: 0, hisReviews: [], hisComments: [], accessPolicy: true, birthDay: "25", country: "RU", email: "panacole@mail.ru", loginAccount: "markolop", monthOfBirth: "6", numberPhone: "85678975555", yearOfBirth: "2001", nickName: "ArtStyle", name: "Владислав", surName: "Иванов", avatar: "starcraftKot.jpg", regDateOnPlatform: 1497474000000, slogan: "Ниндзя играют бесплатно."},
	{_id: "mubaba34234", rankPoints: 0, hisReviews: [], hisComments: [], accessPolicy: true, birthDay: "25", country: "RU", email: "ttt435bcvb@mail.ru", loginAccount: "FrezZzy", monthOfBirth: "6", numberPhone: "85678975557", yearOfBirth: "2001", nickName: "ARMADA", name: "Владислав", surName: "Семенов", avatar: "mass-effect213123.jpg", regDateOnPlatform: 1497474000000, slogan: "Мы с тобой на правильном пути"},
	{_id: "cloneityuo2134", rankPoints: 0, hisReviews: [], hisComments: ["123tytytyt45677777777435345cvbcvb"], accessPolicy: true, birthDay: "25", country: "RU", email: "capralMira@mail.ru", loginAccount: "IseCat", monthOfBirth: "6", numberPhone: "85678975559", yearOfBirth: "2001", nickName: "FrezZy Lolipop", name: "Владислав", surName: "Евгеньевич", avatar: "ahsoka.jpg", regDateOnPlatform: 1497474000000, slogan: "Сила не в оружии"}
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
