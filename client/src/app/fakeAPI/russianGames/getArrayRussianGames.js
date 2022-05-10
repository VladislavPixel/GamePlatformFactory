const array = [
	{ _id: "all42343cvbvcb", idMiddleParent: "16alloda54646mbn", rate: 9.6 },
	{ _id: "at234234", idMiddleParent: "3atomicHeart564", rate: 9.5 },
	{ _id: "warfdgvcbmn76867", idMiddleParent: "17warface54646mbn", rate: 9.5 },
	{ _id: "pi043599", idMiddleParent: "19pioner54646mbn", rate: 9.4 },
	{ _id: "ill546456xxcv", idMiddleParent: "18ill54646mbn", rate: 9.2 },
	{ _id: "bex345546vbnbnm", idMiddleParent: "6beholder3lfdg8776", rate: 8.8 },
	{ _id: "spark345in435435the4353dark", idMiddleParent: "21spark567gfhfg", rate: 8.8 },
	{ _id: "tdb2345vcbcvb", idMiddleParent: "4theDayBefore9567", rate: 8.5 },
	{ _id: "la214435bnmxcv", idMiddleParent: "7lostArk8776", rate: 8.3 },
	{ _id: "en132123lghgh", idMiddleParent: "5enlisted8776", rate: 8.0 },
	{ _id: "tb789789vnvbn", idMiddleParent: "20tbunny567567", rate: 7.6 },
	{ _id: "pat3423cvcb", idMiddleParent: "21spark567patfinderdfgdfg435345", rate: 5.2 }
]

function getArrayRussianGames() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(array)
		}, 1000)
	})
}

export default getArrayRussianGames