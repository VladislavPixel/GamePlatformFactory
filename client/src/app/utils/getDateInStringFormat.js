function getDateInStringFormat(dateMilliseconds) {
	const dateEntity = new Date(dateMilliseconds)
	const options = { day: "numeric", month: "numeric", year: "numeric" }
	return dateEntity.toLocaleString("RU", options)
}

export default getDateInStringFormat
