const countries = [
	{_id: "1", title: "BL", valueCode: "BL"},
	{_id: "2", title: "BQ", valueCode: "BQ"},
	{_id: "3", title: "CU", valueCode: "CU"},
	{_id: "4", title: "CW", valueCode: "CW"},
	{_id: "5", title: "MF", valueCode: "MF"},
	{_id: "6", title: "SS", valueCode: "SS"},
	{_id: "7", title: "SX", valueCode: "SX"},
	{_id: "8", valueCode: "AU", title: "Австралия"},
	{_id: "9", valueCode: "AT", title: "Австрия"},
	{_id: "10", valueCode: "AZ", title: "Азербайджан"},
	{_id: "11", valueCode: "AX", title: "Аландские острова"},
	{_id: "12", valueCode: "AL", title: "Албания"},
	{_id: "13", valueCode: "DZ", title: "Алжир"},
	{_id: "14", valueCode: "AS", title: "Американское Самоа"},
	{_id: "15", valueCode: "AI", title: "Ангилья"},
	{_id: "16", valueCode: "AO", title: "Ангола"},
	{_id: "17", valueCode: "AD", title: "Андорра"},
	{_id: "18", valueCode: "AQ", title: "Антарктика"},
	{_id: "19", valueCode: "AG", title: "Антигуа-и-Барбуда"},
	{_id: "20", valueCode: "AR", title: "Аргентина"},
	{_id: "21", valueCode: "AM", title: "Армения"},
	{_id: "22", valueCode: "AW", title: "Аруба"},
	{_id: "23", valueCode: "AF", title: "Афганистан"},
	{_id: "24", valueCode: "BS", title: "Багамские острова"},
	{_id: "25", valueCode: "BD", title: "Бангладеш"},
	{_id: "26", valueCode: "BB", title: "Барбадос"},
	{_id: "27", valueCode: "BH", title: "Бахрейн"},
	{_id: "28", valueCode: "BY", title: "Беларусь"},
	{_id: "29", valueCode: "BZ", title: "Белиз"},
	{_id: "30", valueCode: "BE", title: "Бельгия"},
	{_id: "31", valueCode: "BJ", title: "Бенин"},
	{_id: "32", valueCode: "CI", title: "Берег Слоновой Кости"},
	{_id: "33", valueCode: "BM", title: "Бермудские острова"},
	{_id: "34", valueCode: "BG", title: "Болгария"},
	{_id: "35", valueCode: "BO", title: "Боливия"},
	{_id: "36", valueCode: "BA", title: "Босния и Герцеговина"},
	{_id: "37", valueCode: "BW", title: "Ботсвана"},
	{_id: "38", valueCode: "BR", title: "Бразилия"},
	{_id: "39", valueCode: "IO", title: "Британские тер. в Индийском океане"},
	{_id: "40", valueCode: "BN", title: "Бруней-Даруссалам"},
	{_id: "41", valueCode: "BF", title: "Буркина-Фасо"},
	{_id: "42", valueCode: "BI", title: "Бурунди"},
	{_id: "43", valueCode: "BT", title: "Бутан"},
	{_id: "44", valueCode: "MK", title: "Бывш. Югославская Респ. Македония"},
	{_id: "45", valueCode: "VU", title: "Вануату"},
	{_id: "46", valueCode: "VA", title: "Ватикан"},
	{_id: "47", valueCode: "GB", title: "Великобритания"},
	{_id: "48", valueCode: "HU", title: "Венгрия"},
	{_id: "49", valueCode: "VE", title: "Венесуэла"},
	{_id: "50", valueCode: "VG", title: "Виргинские острова (Великобритания)"},
	{_id: "51", valueCode: "VI", title: "Виргинские острова (США)"},
	{_id: "52", valueCode: "UM", title: "Внешние малые острова США"},
	{_id: "53", valueCode: "TL", title: "Восточный Тимор"},
	{_id: "54", valueCode: "VN", title: "Вьетнам"},
	{_id: "55", valueCode: "GA", title: "Габон"},
	{_id: "56", valueCode: "HT", title: "Гаити"},
	{_id: "57", valueCode: "GY", title: "Гайана"},
	{_id: "58", valueCode: "GM", title: "Гамбия"},
	{_id: "59", valueCode: "GH", title: "Гана"},
	{_id: "60", valueCode: "GP", title: "Гваделупа"},
	{_id: "61", valueCode: "GT", title: "Гватемала"},
	{_id: "62", valueCode: "GN", title: "Гвинея"},
	{_id: "63", valueCode: "GW", title: "Гвинея-Бисау"},
	{_id: "64", valueCode: "DE", title: "Германия"},
	{_id: "65", valueCode: "GI", title: "Гибралтар"},
	{_id: "66", valueCode: "HN", title: "Гондурас"},
	{_id: "67", valueCode: "HK", title: "Гонконг"},
	{_id: "68", valueCode: "GD", title: "Гренада"},
	{_id: "69", valueCode: "GL", title: "Гренландия"},
	{_id: "70", valueCode: "GR", title: "Греция"},
	{_id: "71", valueCode: "GE", title: "Грузия"},
	{_id: "72", valueCode: "GU", title: "Гуам"},
	{_id: "73", valueCode: "DK", title: "Дания"},
	{_id: "74", valueCode: "CD", title: "Демократическая Республика Конго"},
	{_id: "75", valueCode: "JE", title: "Джерси"},
	{_id: "76", valueCode: "DJ", title: "Джибути"},
	{_id: "77", valueCode: "DM", title: "Доминика"},
	{_id: "78", valueCode: "DO", title: "Доминиканская Республика"},
	{_id: "79", valueCode: "EG", title: "Египет"},
	{_id: "80", valueCode: "ZM", title: "Замбия"},
	{_id: "81", valueCode: "EH", title: "Западная Сахара"},
	{_id: "82", valueCode: "ZW", title: "Зимбабве"},
	{_id: "83", valueCode: "IL", title: "Израиль"},
	{_id: "84", valueCode: "IN", title: "Индия"},
	{_id: "85", valueCode: "ID", title: "Индонезия"},
	{_id: "86", valueCode: "JO", title: "Иордан"},
	{_id: "87", valueCode: "IQ", title: "Ирак"},
	{_id: "88", valueCode: "IR", title: "Иран"},
	{_id: "89", valueCode: "IE", title: "Ирландия"},
	{_id: "90", valueCode: "IS", title: "Исландия"},
	{_id: "91", valueCode: "ES", title: "Испания"},
	{_id: "92", valueCode: "IT", title: "Италия"},
	{_id: "93", valueCode: "YE", title: "Йемен"},
	{_id: "94", valueCode: "CV", title: "Кабо-Верде"},
	{_id: "95", valueCode: "KZ", title: "Казахстан"},
	{_id: "96", valueCode: "KY", title: "Каймановы острова"},
	{_id: "97", valueCode: "KH", title: "Камбоджа"},
	{_id: "98", valueCode: "CM", title: "Камерун"},
	{_id: "99", valueCode: "CA", title: "Канада"},
	{_id: "100", valueCode: "QA", title: "Катар"},
	{_id: "101", valueCode: "KE", title: "Кения"},
	{_id: "102", valueCode: "CY", title: "Кипр"},
	{_id: "103", valueCode: "KG", title: "Киргизстан"},
	{_id: "104", valueCode: "KI", title: "Кирибати"},
	{_id: "105", valueCode: "CN", title: "Китай"},
	{_id: "106", valueCode: "CO", title: "Колумбия"},
	{_id: "107", valueCode: "KM", title: "Коморы"},
	{_id: "108", valueCode: "CG", title: "Конго"},
	{_id: "109", valueCode: "XK", title: "Косово"},
	{_id: "110", valueCode: "CR", title: "Коста-Рика"},
	{_id: "111", valueCode: "KW", title: "Кувейт"},
	{_id: "112", valueCode: "LA", title: "Лаос"},
	{_id: "113", valueCode: "LV", title: "Латвия"},
	{_id: "114", valueCode: "LS", title: "Лесото"},
	{_id: "115", valueCode: "LB", title: "Ливан"},
	{_id: "116", valueCode: "LR", title: "Ливия"},
	{_id: "117", valueCode: "LY", title: "Ливия"},
	{_id: "118", valueCode: "LT", title: "Литва"},
	{_id: "119", valueCode: "LI", title: "Лихтенштейн"},
	{_id: "120", valueCode: "LU", title: "Люксембург"},
	{_id: "121", valueCode: "MU", title: "Маврикий"},
	{_id: "122", valueCode: "MR", title: "Мавритания"},
	{_id: "123", valueCode: "MG", title: "Мадагаскар"},
	{_id: "124", valueCode: "YT", title: "Майотта"},
	{_id: "125", valueCode: "MO", title: "Макао"},
	{_id: "126", valueCode: "MW", title: "Малави"},
	{_id: "127", valueCode: "MY", title: "Малайзия"},
	{_id: "128", valueCode: "ML", title: "Мали"},
	{_id: "129", valueCode: "MV", title: "Мальдивы"},
	{_id: "130", valueCode: "MT", title: "Мальта"},
	{_id: "131", valueCode: "MP", title: "Марианские острова"},
	{_id: "132", valueCode: "MA", title: "Марокко"},
	{_id: "133", valueCode: "MQ", title: "Мартиника"},
	{_id: "134", valueCode: "MH", title: "Маршалловы острова"},
	{_id: "135", valueCode: "MX", title: "Мексика"},
	{_id: "136", valueCode: "MZ", title: "Мозамбик"},
	{_id: "137", valueCode: "MC", title: "Монако"},
	{_id: "138", valueCode: "MN", title: "Монголия"},
	{_id: "139", valueCode: "MS", title: "Монтсеррат"},
	{_id: "140", valueCode: "MM", title: "Мьянма"},
	{_id: "141", valueCode: "NA", title: "Намибия"},
	{_id: "142", valueCode: "NR", title: "Науру"},
	{_id: "143", valueCode: "NP", title: "Непал"},
	{_id: "144", valueCode: "NE", title: "Нигер"},
	{_id: "145", valueCode: "NG", title: "Нигерия"},
	{_id: "146", valueCode: "NL", title: "Нидерланды"},
	{_id: "147", valueCode: "NI", title: "Никарагуа"},
	{_id: "148", valueCode: "NU", title: "Ниуэ"},
	{_id: "149", valueCode: "NZ", title: "Новая Зеландия"},
	{_id: "150", valueCode: "NC", title: "Новая Каледония"},
	{_id: "151", valueCode: "NO", title: "Норвегия"},
	{_id: "152", valueCode: "NF", title: "Норфолк"},
	{_id: "153", valueCode: "TZ", title: "Объединенная Республика Танзания"},
	{_id: "154", valueCode: "AE", title: "Объединенные Арабские Эмираты"},
	{_id: "155", valueCode: "OM", title: "Оман"},
	{_id: "156", valueCode: "BV", title: "Остров Буве"},
	{_id: "157", valueCode: "GG", title: "Остров Гернси"},
	{_id: "158", valueCode: "CC", title: "Остров Кокос"},
	{_id: "159", valueCode: "IM", title: "Остров Мэн"},
	{_id: "160", valueCode: "CX", title: "Остров Рождества"},
	{_id: "161", valueCode: "SH", title: "Остров Святой Елены"},
	{_id: "162", valueCode: "HM", title: "Остров Херд и острова Макдональд"},
	{_id: "163", valueCode: "CK", title: "Острова Кука"},
	{_id: "164", valueCode: "PN", title: "Острова Питкэрн"},
	{_id: "165", valueCode: "TC", title: "Острова Туркс и Кайкос"},
	{_id: "166", valueCode: "WF", title: "Острова Уоллис и Футуна"},
	{_id: "167", valueCode: "SJ", title: "Острова Шпицберген и Ян-Майен"},
	{_id: "168", valueCode: "PK", title: "Пакистан"},
	{_id: "169", valueCode: "PW", title: "Палау"},
	{_id: "170", valueCode: "PA", title: "Панама"},
	{_id: "171", valueCode: "PG", title: "Папуа — Новая Гвинея"},
	{_id: "172", valueCode: "PY", title: "Парагвай"},
	{_id: "173", valueCode: "PE", title: "Перу"},
	{_id: "174", valueCode: "PL", title: "Польша"},
	{_id: "175", valueCode: "PT", title: "Португалия"},
	{_id: "176", valueCode: "PR", title: "Пуэрто-Рико"},
	{_id: "177", valueCode: "KR", title: "Республика Корея"},
	{_id: "178", valueCode: "MD", title: "Республика Молдова"},
	{_id: "179", valueCode: "RE", title: "Реюньон"},
	{_id: "180", valueCode: "RU", title: "Россия"},
	{_id: "181", valueCode: "RW", title: "Руанда"},
	{_id: "182", valueCode: "RO", title: "Румыния"},
	{_id: "183", valueCode: "US", title: "США"},
	{_id: "184", valueCode: "SV", title: "Сальвадор"},
	{_id: "185", valueCode: "WS", title: "Самоа"},
	{_id: "186", valueCode: "SM", title: "Сан-Марино"},
	{_id: "187", valueCode: "ST", title: "Сан-Томе и Принсипи"},
	{_id: "188", valueCode: "SA", title: "Саудовская Аравия"},
	{_id: "189", valueCode: "SC", title: "Сейшельские острова"},
	{_id: "190", valueCode: "PM", title: "Сен-Пьер и Микелон"},
	{_id: "191", valueCode: "SN", title: "Сенегал"},
	{_id: "192", valueCode: "VC", title: "Сент-Винсент и Гренадины"},
	{_id: "193", valueCode: "KN", title: "Сент-Китс и Невис"},
	{_id: "194", valueCode: "LC", title: "Сент-Люсия"},
	{_id: "195", valueCode: "RS", title: "Сербия"},
	{_id: "196", valueCode: "SG", title: "Сингапур"},
	{_id: "197", valueCode: "SY", title: "Сирия"},
	{_id: "198", valueCode: "SK", title: "Словакия"},
	{_id: "199", valueCode: "SI", title: "Словения"},
	{_id: "200", valueCode: "SB", title: "Соломоновы острова"},
	{_id: "201", valueCode: "SO", title: "Сомали"},
	{_id: "202", valueCode: "SD", title: "Судан"},
	{_id: "203", valueCode: "SR", title: "Суринам"},
	{_id: "204", valueCode: "SL", title: "Сьерра-Леоне"},
	{_id: "205", valueCode: "TJ", title: "Таджикистан"},
	{_id: "206", valueCode: "TH", title: "Таиланд"},
	{_id: "207", valueCode: "TW", title: "Тайвань"},
	{_id: "208", valueCode: "PS", title: "Территория Палестины"},
	{_id: "209", valueCode: "TG", title: "Того"},
	{_id: "210", valueCode: "TK", title: "Токелау"},
	{_id: "211", valueCode: "TO", title: "Тонга"},
	{_id: "212", valueCode: "TT", title: "Тринидад-и-Тобаго"},
	{_id: "213", valueCode: "TV", title: "Тувалу"},
	{_id: "214", valueCode: "TN", title: "Тунис"},
	{_id: "215", valueCode: "TM", title: "Туркменистан"},
	{_id: "216", valueCode: "TR", title: "Турция"},
	{_id: "217", valueCode: "UG", title: "Уганда"},
	{_id: "218", valueCode: "UZ", title: "Узбекистан"},
	{_id: "219", valueCode: "UA", title: "Украина"},
	{_id: "220", valueCode: "UY", title: "Уругвай"},
	{_id: "221", valueCode: "FO", title: "Фарерские острова"},
	{_id: "222", valueCode: "FM", title: "Федеративные Штаты Микронезии"},
	{_id: "223", valueCode: "FJ", title: "Фиджи"},
	{_id: "224", valueCode: "PH", title: "Филиппины"},
	{_id: "225", valueCode: "FI", title: "Финляндия"},
	{_id: "226", valueCode: "FK", title: "Фолклендские острова"},
	{_id: "227", valueCode: "FR", title: "Франция"},
	{_id: "228", valueCode: "GF", title: "Французская Гвиана"},
	{_id: "229", valueCode: "PF", title: "Французская Полинезия"},
	{_id: "230", valueCode: "HR", title: "Хорватия"},
	{_id: "231", valueCode: "CF", title: "Центральная Африканская Респ."},
	{_id: "232", valueCode: "TD", title: "Чад"},
	{_id: "233", valueCode: "ME", title: "Черногория"},
	{_id: "234", valueCode: "CZ", title: "Чешская Республика"},
	{_id: "235", valueCode: "CL", title: "Чили"},
	{_id: "236", valueCode: "CH", title: "Швейцария"},
	{_id: "237", valueCode: "SE", title: "Швеция"},
	{_id: "238", valueCode: "LK", title: "Шри-Ланка"},
	{_id: "239", valueCode: "EC", title: "Эквадор"},
	{_id: "240", valueCode: "GQ", title: "Экваториальная Гвинея"},
	{_id: "241", valueCode: "ER", title: "Эритрея"},
	{_id: "242", valueCode: "SZ", title: "Эсватини"},
	{_id: "243", valueCode: "EE", title: "Эстония"},
	{_id: "244", valueCode: "ET", title: "Эфиопия"},
	{_id: "245", valueCode: "ZA", title: "Южная Африка"},
	{_id: "246", valueCode: "GS", title: "Ю. Георгия и Ю. Сандвичевы Ост."},
	{_id: "247", valueCode: "TF", title: "Южные территории Франции"},
	{_id: "248", valueCode: "JM", title: "Ямайка"},
	{_id: "249", valueCode: "JP", title: "Япония"}
]

function getCountries() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(countries)
		}, 1000)
	})
}

export default getCountries
