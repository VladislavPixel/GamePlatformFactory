function getArrayByConfigStoreTop5(arr, currentConfig) {
	const sortedArray = (data, { config, target }) => {
		if (config === "maxMin") {
			data.sort((a, b) => {
				if (a[target] < b[target]) return 1
				if (a[target] > b[target]) return -1
				return 0
			})
		}
		if (config === "minMax") data.sort((a, b) => a[target] - b[target])
	}
	let returnedArray
	switch(currentConfig.title) {
		case "Популярное":
			returnedArray = [...arr]
			sortedArray(returnedArray, currentConfig)
		break
		case "Низкая цена":
			const filteredArray = arr.filter(el => {
				if (typeof el[currentConfig.target] === "number" && el.textPrice !== "играй бесплатно") return el
				return null
			})
			returnedArray = filteredArray
			sortedArray(returnedArray, currentConfig)
		break
		case "Бесплатные":
			returnedArray = arr.filter(el => el.textPrice === "играй бесплатно")
			sortedArray(returnedArray, currentConfig)
		break
		case "Топовая скидка":
			returnedArray = arr.filter(el => el.sale)
			sortedArray(returnedArray, currentConfig)
		break
		case "Недооцененные":
			returnedArray = arr.filter(el => el.price !== "ОЖИДАНИЕ")
			sortedArray(returnedArray, currentConfig)
		break
		default:
			returnedArray = arr
		break
	}

	return returnedArray.slice(0, 5)
}

export default getArrayByConfigStoreTop5
