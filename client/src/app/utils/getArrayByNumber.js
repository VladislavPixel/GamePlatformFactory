function getArrayByNumber(value) {
	const someArray = []
	for (let i = 0; i < value; i++) {
		someArray.push({ _id: i, value: i + 1 })
	}
	return someArray
}

export default getArrayByNumber