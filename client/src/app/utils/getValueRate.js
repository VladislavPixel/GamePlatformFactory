function getValueRate(value) {
	if (Number.isInteger(value)) return value + ".0"
	return value
}

export default getValueRate
