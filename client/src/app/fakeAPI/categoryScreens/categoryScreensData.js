const categoryScreensData = [
	{
		_id: "q1",
		images: [
			{path: "beholder3sc1.jpg", alt: "Человек стоит в квартире с бутылкой алкоголя"},
			{path: "beholder3sc2.jpg", alt: "Политик сидит на стуле, сзади него горы личных дел на граждан"},
			{path: "beholder3sc3.jpg", alt: "За человеком подглядывают в замочную скважину"},
			{path: "beholder3sc4.jpg", alt: "Злой полицейский с дубинкой и наручниками"}
		]
	},
	{
		_id: "q2",
		images: [
			{path: "apertureDeskJobsc1.jpg", alt: "Механический конвеер собирает технику"},
			{path: "apertureDeskJobsc2.jpg", alt: "Трубы" },
			{path: "apertureDeskJobsc3.jpg", alt: "Приборная панель устройства: кнопки, пульты"},
			{path: "apertureDeskJobsc4.jpg", alt: "Конвеерная лента, по которой едут коробы"}
		]
	},
	{
		_id: "q3",
		images: [
			{path: "farChangingTidessc1.jpg", alt: "Разбитый старый корабль"},
			{path: "farChangingTidessc2.jpg", alt: "Хлам от корабля на песке"},
			{path: "farChangingTidessc3.jpg", alt: "Потрепанный корабль стоит на воде"},
			{path: "farChangingTidessc4.jpg", alt: "Обломки в воде"}
		]
	},
	{
		_id: "q4",
		images: [
			{path: "conanChopChopSc1.jpg", alt: "Воины бегут сражаться"},
			{path: "conanChopChopSc2.jpg", alt: "Воины сражаются против скелетов и больших лесных волков"},
			{path: "conanChopChopSc3.jpg", alt: "Битва в подземелье против монстров"},
			{path: "conanChopChopSc4.jpg", alt: "Воины сражаются с подземельной нечестью"}
		]
	},
	{
		_id: "q5",
		images: [
			{path: "lostArkSc1.jpg", alt: "Красивый город и персонажи"},
			{path: "lostArkSc2.jpg", alt: "Рынок в городе"},
			{path: "lostArkSc3.jpg", alt: "Робот стоит на возвышенности"},
			{path: "lostArkSc4.jpg", alt: "Битва героев против монстров"}
		]
	},
	{
		_id: "w1",
		images: [
			{path: "csgoSC1.jpg", alt: "Перестрелка под мостом. Спецназовец отстреливается."}, 
			{path: "csgoSC2.jpg", alt: "Террорист целится в снайперскую винтовку"},
			{path: "csgoSC3.jpg", alt: "Спецназовец на фоне дома"},
			{path: "csgoSC4.jpg", alt: "Два спецназовца целятся в направлении врагов"}
		]
	},
	{
		_id: "w2",
		images: [
			{path: "monsterHunterRiseSC1.jpg", alt: "Битва против монстров в лесу"}, 
			{path: "monsterHunterRiseSC2.jpg", alt: "Главный герой передвигается на животном"},
			{path: "monsterHunterRiseSC3.jpg", alt: "Китаянка"},
			{path: "monsterHunterRiseSC4.jpg", alt: "Главный герой на блокпосту, рядом воин и собака"}
		]
	},
	{
		_id: "w3",
		images: [
			{path: "detroitSC1.jpg", alt: "Двое героев стоит на крыше"}, 
			{path: "detroitSC2.jpg", alt: "Главный герой и толпа клонов"},
			{path: "detroitSC3.jpg", alt: "Голова клона"},
			{path: "detroitSC4.jpg", alt: "Главный герой на месте преступления"}
		]
	},
	{
		_id: "w4",
		images: [
			{path: "dayZcs1.jpg", alt: "Два выживших на трассе обчищают машину"}, 
			{path: "dayZcs2.jpg", alt: "Выживший с рюкзаком идет по трассе"},
			{path: "dayZcs3.jpg", alt: "Военный в противогазе с оружием"},
			{path: "dayZcs4.jpg", alt: "Выживший с красным рюкзаком идет по двору дома"}
		]
	},
	{
		_id: "w5",
		images: [
			{path: "eldenRingsc1.jpg", alt: "Воин воткнул меч в землю"}, 
			{path: "eldenRingsc2.jpg", alt: "Монстры с секирами на цепях вместо рук"},
			{path: "eldenRingsc3.jpg", alt: "Воин в шлеме"},
			{path: "eldenRingsc4.jpg", alt: "Рыцарь сражается на коне против монстра"}
		]
	},
	{
		_id: "e1",
		images: [
			{path: "madisonSC1.jpg", alt: "Перед гигантским пауком"}, 
			{path: "madisonSC2.jpg", alt: "Герой стоит в комнате и смотрит на свою руку в крови"},
			{path: "madisonSC3.jpg", alt: "В церкви"},
			{path: "madisonSC4.jpg", alt: "Стул сатаны"}
		]
	},
	{
		_id: "e2",
		images: [
			{path: "youngSoulsSC1.jpg", alt: "Город мира youngSouls. Главный герой стоит на пероне с другим персонажем"}, 
			{path: "youngSoulsSC2.jpg", alt: "Героиня поднимает штангу. Игровой процесс"},
			{path: "youngSoulsSC3.jpg", alt: "Битва в подземелье"},
			{path: "youngSoulsSC4.jpg", alt: "Битва с монстрами на арене"}
		]
	},
	{
		_id: "e3",
		images: [
			{path: "hyperbolicaSC1.jpg", alt: "Перед зданием и рядом робот"}, 
			{path: "hyperbolicaSC2.jpg", alt: "Герой смотрит на карту пляжа"},
			{path: "hyperbolicaSC3.jpg", alt: "Во дворе, стоят 2 робота"},
			{path: "hyperbolicaSC4.jpg", alt: "Скульптура, голова человека"}
		]
	},
	{
		_id: "e4",
		images: [
			{path: "distantWorlds2SC1.jpg", alt: "Связи в космосе между планетами и космическими станциями"}, 
			{path: "distantWorlds2SC2.jpg", alt: "Информация о планете"},
			{path: "distantWorlds2SC3.jpg", alt: "Космос"},
			{path: "distantWorlds2SC4.jpg", alt: "Информация о капитане судна"}
		]
	},
	{
		_id: "e5",
		images: [
			{path: "ruinSC1.jpg", alt: "Бой на арене"}, 
			{path: "ruinSC2.jpg", alt: "Герой использует способность выбросить щуп на цепи"},
			{path: "ruinSC3.jpg", alt: "Взрыв на арене"},
			{path: "ruinSC4.jpg", alt: "Радиус взрыва"}
		]
	},
	{
		_id: "r1",
		images: [
			{path: "warhammerVermintide2SC1.jpg", alt: "Два головореза перед главным героем"}, 
			{path: "warhammerVermintide2SC2.jpg", alt: "Гном наносит удар в полете"},
			{path: "warhammerVermintide2SC3.jpg", alt: "Мутанты нападают на героя"},
			{path: "warhammerVermintide2SC4.jpg", alt: "Маг бьет магией"}
		]
	},
	{
		_id: "r2",
		images: [
			{path: "distantWorlds2SC1.jpg", alt: "Связи в космосе между планетами и космическими станциями"}, 
			{path: "distantWorlds2SC2.jpg", alt: "Информация о планете"},
			{path: "distantWorlds2SC3.jpg", alt: "Космос"},
			{path: "distantWorlds2SC4.jpg", alt: "Информация о капитане судна"}
		]
	},
	{
		_id: "r3",
		images: [
			{path: "ruinSC1.jpg", alt: "Бой на арене"}, 
			{path: "ruinSC2.jpg", alt: "Герой использует способность выбросить щуп на цепи"},
			{path: "ruinSC3.jpg", alt: "Взрыв на арене"},
			{path: "ruinSC4.jpg", alt: "Радиус взрыва"}
		]
	}
]

function getCategoryScreensData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(categoryScreensData)
		}, 1100)
	})
}

export default getCategoryScreensData
