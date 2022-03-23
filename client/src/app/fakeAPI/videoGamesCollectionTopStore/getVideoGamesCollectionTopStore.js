import { videoGamesCollectionMiddle } from "../videoGamesCollectionMiddle"

const middleDataVideoGames = [...videoGamesCollectionMiddle]

middleDataVideoGames.sort((a, b) => {
	if (a.rate > b.rate) return -1
	if (a.rate < b.rate) return 1
	return 0
})

let arrayTop18 = null

if (middleDataVideoGames.length <= 18) {
	arrayTop18 = middleDataVideoGames
} else {
	arrayTop18 = middleDataVideoGames.filter((item, index) => index <= 17)
}

function getTopGames() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arrayTop18)
		}, 2000)
	})
}

export default getTopGames
