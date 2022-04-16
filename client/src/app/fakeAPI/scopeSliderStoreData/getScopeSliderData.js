const scopeData = [
	{ _id: "firstscope423536", minScope: 1000, maxScope: 2000},
	{ _id: "secondscope04564123", minScope: 3000, maxScope: 4000 }
]

function getScopeSliderData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(scopeData)
		}, 500)
	})
}

export default getScopeSliderData
