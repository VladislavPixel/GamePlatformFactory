function getArrayByDelimiter(delimiterIndex, maxElements, arrayData) {
	const startIndex = delimiterIndex * maxElements
	const endIndex = startIndex + maxElements
	return arrayData.slice(startIndex, endIndex)
}

export default getArrayByDelimiter