const homeBlockCategory = [
	{_id: "popular-new", title: "Популярные новинки"},
	{_id: "leaders", title: "Лидеры продаж"},
	{_id: "popular-in-the-future", title: "Популярные будущие продукты"},
	{_id: "discounts", title: "Скидки"}
]

function getHomeCategory() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(homeBlockCategory)
		}, 1000)
	})
}

export default getHomeCategory
