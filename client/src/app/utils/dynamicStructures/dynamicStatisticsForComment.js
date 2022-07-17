import getDateInStringFormat from "../getDateInStringFormat"

class DynamicStatisticsForComment{
	getStructureForStatistics(date=Date.now(), valueFunnyStatus=0, valueAwards=0, valueConsonants=0, valueDisagree=0) {
		return (
			[
				{value: getDateInStringFormat(date), class: "date", text: "Опубликовано: "},
				{value: valueFunnyStatus, class: "funny", text: "Признали смешным: " },
				{value: valueAwards, class: "awards", text: "Наград: "},
				{value: valueConsonants, class: "consonants", text: "Пользователей согласились: "},
				{value: valueDisagree, class: "disagree", text: "Не согласились: "}
			]
		)
	}
	getStructureWithIcons(valueSucks=0, valueLikes=0, valueDislikes=0, parentClass) {
		return (
			[
				{
					icon: <img title="Иконка символизирующая полный bullshit" className={`${parentClass}__poo`} src="/images/icons/poo2.svg" alt="Иконка какашки с глазами" />,
					text: "Посчитали полным отстоем:",
					value: valueSucks,
					class: "sucks"
				},
				{
					icon: <img title="Иконка палец вверх!" className={`${parentClass}__like`} src="/images/icons/heartRead.svg" alt="Иконка сердца в красном круге" />,
					text: "Лайков:",
					value: valueLikes,
					class: "like-block"
				},
				{
					icon: <img title="Палец вниз, дизлайк" className={`${parentClass}__dislike`} src="/images/icons/dislikeRead.svg" alt={`Иконка "Дизлайк" в красном круге`} />,
					text: "Дизлайков:",
					value: valueDislikes,
					class: "dislike-block"
				}
			]
		)
	}
}

const dynamicStatisticsForCommentInstance = new DynamicStatisticsForComment()
export default dynamicStatisticsForCommentInstance
