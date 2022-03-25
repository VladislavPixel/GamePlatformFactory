const getValuePrice = (value) => {
	if (typeof value === "number") return `${value} pуб.`
	return value
}

export default getValuePrice
