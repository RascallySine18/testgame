/**
 * Brainrot Elite Quiz - Liquid Glass Edition
 * Полная база данных и логика приложения
 */

const brainrotDB = {
    // [cite: 1, 2, 3]
    secret: [
        { name: "Ла Вакка Сатурно Сатурнита", img: "https://wotpack.ru/wp-content/uploads/2025/08/la_vacca_saturno_saturnita_29-e1755293025817.webp" },
        { name: "Лос Маттеос", img: "https://wotpack.ru/wp-content/uploads/2025/08/losmatteos-e1756661413375.webp" },
        { name: "Бизонте Гуипитере", img: "https://wotpack.ru/wp-content/uploads/2025/09/bisonte_giuppitere_normal-e1757521116356.webp" },
        { name: "Тренострузо Турбо 4000", img: "https://wotpack.ru/wp-content/uploads/2025/09/trenostruzzo4000-e1757521184798.webp" },
        { name: "Джакорилла", img: "https://wotpack.ru/wp-content/uploads/2025/10/jackorilla.png" },
        { name: "Тортугини Драгонфрутини", img: "https://wotpack.ru/wp-content/uploads/2025/08/torrtuginni_dragonfrutini_steal_a_brainrot-e1755293459959.webp" },
        { name: "Дул Дул Дул", img: "https://wotpack.ru/wp-content/uploads/2025/08/dul_dul_dul-e1756665978961.webp" },
        { name: "Чачечи", img: "https://wotpack.ru/wp-content/uploads/2025/09/chachechitransparent-e1757957803137.webp" },
        { name: "Агарини ла Палини", img: "https://wotpack.ru/wp-content/uploads/2025/08/agarrini_la_palini-e1755293603109.webp" },
        { name: "Лос Спайдеринис", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_spyderinis.webp" },
        { name: "Экстинкт Тралалеро", img: "https://wotpack.ru/wp-content/uploads/2025/09/jaws.webp" },
        { name: "Фрагола Ла Ла Ла", img: "https://wotpack.ru/wp-content/uploads/2025/09/sammy_the_strawberry-e1757521259975.webp" },
        { name: "Лос Тралалеритос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los-tralaleritos-1-e1755293130756.webp" },
        { name: "Лос Тортус", img: "https://wotpack.ru/wp-content/uploads/2025/10/los-tortus.png" },
        { name: "Зомби Тралала", img: "https://wotpack.ru/wp-content/uploads/2025/11/zombie-tralala.png" },
        { name: "Боатито Ауратито", img: "https://wotpack.ru/wp-content/uploads/2025/10/boatito-auratito.png" },
        { name: "Гуериро Диджитале", img: "https://wotpack.ru/wp-content/uploads/2025/09/guerriro-digitale.png" },
        { name: "Да мой экзамен", img: "https://wotpack.ru/wp-content/uploads/2025/09/yess-my-examine.png" },
        { name: "Ла Каркеркар Комбинасион", img: "https://wotpack.ru/wp-content/uploads/2025/09/holy_falloff-e1757521338947.webp" },
        { name: "Экстинкт Маттео", img: "https://wotpack.ru/wp-content/uploads/2025/09/man_im_dead-e1757958614235.webp" },
        { name: "Пампкини Спайдерини", img: "https://wotpack.ru/wp-content/uploads/2025/10/pumpkini-spyderini.png" },
        { name: "Лас Тралалеритас", img: "https://wotpack.ru/wp-content/uploads/2025/08/las-tralaleritas-e1755293190861.webp" },
        { name: "Джоб Сахур", "img": "https://wotpack.ru/wp-content/uploads/2025/08/job-e1756662798685.webp" },
        { name: "Лас Вакитас Сатурнитас", img: "https://wotpack.ru/wp-content/uploads/2025/08/las_vaquitas_saturnitas_steal_a_brainrot-e1755293525478.webp" },
        { name: "Лос Каркеритос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-karkeritos-1.png" },
        { name: "Триколино", img: "https://wotpack.ru/wp-content/uploads/2025/10/trickolino.png" },
        { name: "Грайпусени Медузини", img: "https://wotpack.ru/wp-content/uploads/2025/08/graipusseni_medussini_steal_a_brainrot-e1755293304918.webp" },
        { name: "1x1x1x1", img: "https://wotpack.ru/wp-content/uploads/2025/11/1x1x1x1.png" },
        { name: "Лос Кукарачас", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-cucarachas.png" },
        { name: "Куадрамат и Пакрахматмамат", img: "https://wotpack.ru/wp-content/uploads/2025/11/cuadramat-and-pakrahmatmamat.png" },
        { name: "Лос Джобситос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-jobcitos.png" },
        { name: "Тун Тун Тун Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/08/tung_tung_tung_sahur-e1755297846897.webp" },
        { name: "Нет мой экзамен", img: "https://wotpack.ru/wp-content/uploads/2025/09/noo-my-examine.png" },
        { name: "Телеморте", img: "https://wotpack.ru/wp-content/uploads/2025/10/telemorte.png" },
        { name: "Ла Сахур Комбинасион", img: "https://wotpack.ru/wp-content/uploads/2025/09/sahuria-e1757521298723.webp" },
        { name: "Ту ту ту Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/09/to-to-to-sahur.png" },
        { name: "Пот Хотспот", img: "https://wotpack.ru/wp-content/uploads/2025/08/pot_hotspot_steal_a_brainrot-e1755293497315.webp" },
        { name: "Пирулитоита Бисиклетейра", img: "https://wotpack.ru/wp-content/uploads/2025/11/pirulitoita-bicicleteira.png" },
        { name: "Хорегини Бум", img: "https://wotpack.ru/wp-content/uploads/2025/10/horegini-boom.png" },
        { name: "Чиклетейра Бисиклетейра", img: "https://wotpack.ru/wp-content/uploads/2025/08/chicleteira-bicicleteira.webp" },
        { name: "Чиклетейрина Бисиклетейрина", img: "https://wotpack.ru/wp-content/uploads/2025/10/chicleteirina-bicicleteirina.png" },
        { name: "Лос Кесадильяс", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-quesadillas.png" },
        { name: "Бурито Бандито", img: "https://wotpack.ru/wp-content/uploads/2025/10/burrito-bandito.png" },
        { name: "Гость 666", img: "https://wotpack.ru/wp-content/uploads/2025/11/guest-666.png" },
        { name: "Ранг Ринг Бас", img: "https://wotpack.ru/wp-content/uploads/2025/10/rang-ring-bus.png" },
        { name: "Лос Буритос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-burritos.png" },
        { name: "Лос Чиклетейрас", img: "https://wotpack.ru/wp-content/uploads/2025/09/los_shitheaditos-e1757958701997.webp" },
        { name: "Брейнрот 67", img: "https://wotpack.ru/wp-content/uploads/2025/09/breynrot-67.png" },
        { name: "Ла Гранде Комбинасион", img: "https://wotpack.ru/wp-content/uploads/2025/08/la_grande_combinasion_steal_a_brainrot-e1755293353133.webp" },
        { name: "Сваэг Сода", img: "https://wotpack.ru/wp-content/uploads/2025/11/swag-soda.png" },
        { name: "Нуклеаро Динозауро", img: "https://wotpack.ru/wp-content/uploads/2025/08/nuclearo_dinossauro_steal_a_brainrot-e1755293383535.webp" },
        { name: "Лос Комбинасионас", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_combinasionas_29-e1755293632368.webp" },
        { name: "Фишино Кловнино", img: "https://wotpack.ru/wp-content/uploads/2025/11/fishino-clownino.png" },
        { name: "Лас Сис", img: "https://wotpack.ru/wp-content/uploads/2025/09/las-sis.png" },
        { name: "Лос Планитос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-planitos.png" },
        { name: "Лос Спуки Комбинасьонас", img: "https://wotpack.ru/wp-content/uploads/2025/10/los-spooky-combinasionas.png" },
        { name: "Лос Хотспотситос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_hotspotsitos2-e1755293676477.webp" },
        { name: "Мани Мани Пагги", img: "https://wotpack.ru/wp-content/uploads/2025/09/money-money-puggy.png" },
        { name: "Лос Сиксевен", img: "https://wotpack.ru/wp-content/uploads/2025/10/los-67.png" },
        { name: "Селуларчини Вициозини", img: "https://wotpack.ru/wp-content/uploads/2025/09/celularcini-viciosini.png" },
        { name: "25", img: "https://wotpack.ru/wp-content/uploads/2025/12/breynrot-25.png" },
        { name: "Миететейра Чиклетейра", img: "https://wotpack.ru/wp-content/uploads/2025/10/mieteteira-chicleteira.png" },
        { name: "Тралаледон", img: "https://wotpack.ru/wp-content/uploads/2025/09/brr_brr_patapem-e1757521387724.webp" },
        { name: "Лос Паггис", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-puggies.png" },
        { name: "Есок Секолах", img: "https://wotpack.ru/wp-content/uploads/2025/08/esok_sekolah-e1755293760773.webp" },
        { name: "Лос Примос", img: "https://wotpack.ru/wp-content/uploads/2025/09/los-primos.png" },
        { name: "Лос Такоритас", img: "https://wotpack.ru/wp-content/uploads/2025/09/los-tacoritas.png" },
        { name: "Кетупат Кепат", img: "https://wotpack.ru/wp-content/uploads/2025/08/ketupatkepat-e1756662458289.webp" },
        { name: "Лос Брос", img: "https://wotpack.ru/wp-content/uploads/2025/09/broooooooo-e1757521421409.webp" },
        { name: "Тиктак Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/09/tictac-sahur.png" },
        { name: "Оркаледон", img: "https://wotpack.ru/wp-content/uploads/2025/11/orcaledon-1.png" },
        { name: "Ла Суприм Комбинасион", img: "https://wotpack.ru/wp-content/uploads/2025/08/supremecombinasion-e1756661029946.webp" },
        { name: "Кетчуру и Мастуру", img: "https://wotpack.ru/wp-content/uploads/2025/09/ketchuru-e1757521475775.webp" },
        { name: "Лавадорито Спинито", img: "https://wotpack.ru/wp-content/uploads/2025/11/lavadorito-spinito.png" },
        { name: "Гарама и Мадундунг", img: "https://wotpack.ru/wp-content/uploads/2025/08/garama_and_mandundung_steal_a_brainrot-e1755293417807.webp" },
        { name: "Спагетти Туалетти", img: "https://wotpack.ru/wp-content/uploads/2025/08/9ff4f5c6-6ad8-41a3-8e19-ffd9261102bc-removebg-preview-e1756660891710.webp" },
        { name: "Лос Спагеттис", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-spaghettis.png" },
        { name: "Фраграма и Чокрама", img: "https://wotpack.ru/wp-content/uploads/2025/11/fragrama-and-chocrama.png" },
        { name: "Ла Каса Бу", img: "https://wotpack.ru/wp-content/uploads/2025/10/la-casa-boo.png" },
        { name: "Ла Сикрет Комбинасьен", img: "https://wotpack.ru/wp-content/uploads/2025/10/la-secret-combinasion.png" },
        { name: "Капитано Моби", img: "https://wotpack.ru/wp-content/uploads/2025/11/capitano-moby.png" },
        { name: "Бургуро и Фруюро", img: "https://wotpack.ru/wp-content/uploads/2025/10/burguro-and-fryuro.png" },
        { name: "Куки и Милки", img: "https://wotpack.ru/wp-content/uploads/2025/12/cooki-and-milki.png" },
        { name: "Всадник без головы", img: "https://wotpack.ru/wp-content/uploads/2025/10/headless-horseman.png" },
        { name: "Драгон Канелони", img: "https://wotpack.ru/wp-content/uploads/2025/08/dragon_cannelloni-1-e1755293731680.webp" }
    ],

    // [cite: 4, 5]
    divine: [
        { name: "Кокофанто Элефанто", img: "https://wotpack.ru/wp-content/uploads/2025/08/cocofanto_elefanto_steal_a_brainrot-e1755293928227.webp" },
        { name: "Антонио", img: "https://wotpack.ru/wp-content/uploads/2025/09/antonio.png" },
        { name: "Жирафа Селестре", img: "https://wotpack.ru/wp-content/uploads/2025/08/girafa_celestre_steal_a_brainrot-e1755293973147.webp" },
        { name: "Гататино Неонино", img: "https://wotpack.ru/wp-content/uploads/2025/08/gattatino_neonino_steal_a_brainrot-e1755294061788.webp" },
        { name: "Маттео", img: "https://wotpack.ru/wp-content/uploads/2025/08/matteo_steal_a_brainrot-e1755294109367.webp" },
        { name: "Тралалеро Тралала", img: "https://wotpack.ru/wp-content/uploads/2025/08/tralalero_tralala_steal_a_brainrot-e1755294158390.webp" },
        { name: "Лос Крокодилитос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_crocodillitos-2-e1755294183457.webp" },
        { name: "Тигролигре Фрутонни", img: "https://wotpack.ru/wp-content/uploads/2025/08/tigroligre-frutonni-e1755294986146.webp" },
        { name: "Мани Мани Мен", img: "https://wotpack.ru/wp-content/uploads/2025/11/money-money-man.png" },
        { name: "Эспрессо Синьора", img: "https://wotpack.ru/wp-content/uploads/2025/08/espresso_signora_steal_a_brainrot-e1755294215344.webp" },
        { name: "Один Дин Дин Дун", img: "https://wotpack.ru/wp-content/uploads/2025/08/odin_din_din_dun_steal_a_brainrot-e1755294244201.webp" },
        { name: "Statutino Libertino", img: "https://wotpack.ru/wp-content/uploads/2025/08/statutino_libertino_steal_a_brainrot-e1755294292537.webp" },
        { name: "Туканно Бананно", img: "https://wotpack.ru/wp-content/uploads/2025/08/tukanno_bananno-e1755294371377.webp" },
        { name: "Оркалеро Оркала", img: "https://wotpack.ru/wp-content/uploads/2025/08/orcalero_orcala_steal_a_brainrot-e1755295015126.webp" },
        { name: "Тралалита Тралала", img: "https://wotpack.ru/wp-content/uploads/2025/09/tralalita-e1757522015418.webp" },
        { name: "Экстинкт Балерина", img: "https://wotpack.ru/wp-content/uploads/2025/09/dead_art_form-e1757958789465.webp" },
        { name: "Тренострузо Турбо 3000", img: "https://wotpack.ru/wp-content/uploads/2025/08/trenostruzzo_turbo_3000_steal_a_brainrot-e1755294407899.webp" },
        { name: "Лос Чихуанинис", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-chihuaninis.png" },
        { name: "Трипи Тропи Тропи Трипа", img: "https://wotpack.ru/wp-content/uploads/2025/08/trippi_troppi_troppa_trippa-e1755294439392.webp" },
        { name: "Лас Капучинас", img: "https://wotpack.ru/wp-content/uploads/2025/09/lascapuchinas-e1757522091518.webp" },
        { name: "Балерини Лололо", img: "https://wotpack.ru/wp-content/uploads/2025/08/ballerino_lololo_steal_a_brainrot-e1755294485304.webp" },
        { name: "Булбито Бандито Тракторито", img: "https://wotpack.ru/wp-content/uploads/2025/08/bulbito_bandito_traktorito.webp" },
        { name: "Лос Тунтунтунгситос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_tungtungtungcitos-e1755294720476.webp" },
        { name: "Пакрахматмамат", img: "https://wotpack.ru/wp-content/uploads/2025/08/pencil-e1756662960636.webp" },
        { name: "Лос Бомбинитос", img: "https://wotpack.ru/wp-content/uploads/2025/09/los-bombinitos.png" },
        { name: "Пиционе Мачина", img: "https://wotpack.ru/wp-content/uploads/2025/08/piccione_macchina_steal_a_brainrot-e1755294786161.webp" },
        { name: "Бомбардини Тортини", img: "https://wotpack.ru/wp-content/uploads/2025/08/bombardini_tortinii-e1755294834533.webp" },
        { name: "Пакрахматматина", img: "https://wotpack.ru/wp-content/uploads/2025/10/pakrahmatmatina.png" },
        { name: "Тракторо Динозауро", img: "https://wotpack.ru/wp-content/uploads/2025/09/tractoro-dinosauro.png" },
        { name: "Краббо Лимонетта", img: "https://wotpack.ru/wp-content/uploads/2025/09/crabbo-limonetta.png" },
        { name: "Лос Оркалитос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_orcalitos-e1755294950333.webp" },
        { name: "Оркалита Оркала", img: "https://wotpack.ru/wp-content/uploads/2025/09/img_2496-e1757522142572.webp" },
        { name: "Какасито Саталито", img: "https://wotpack.ru/wp-content/uploads/2025/09/lebron_james-e1757522175873.webp" },
        { name: "Акванавт", img: "https://wotpack.ru/wp-content/uploads/2025/11/aquanaut.png" },
        { name: "Бр ес Те Патипум", img: "https://wotpack.ru/wp-content/uploads/2025/08/brr_es_teh_patipum-e1756663033257.webp" },
        { name: "Корн Корн Корн Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/12/corn-corn-corn-sahur.png" },
        { name: "Татаруга Цистерна", img: "https://wotpack.ru/wp-content/uploads/2025/08/tartaruga_cisternaaaa-e1756663111257.webp" },
        { name: "Скваланана", img: "https://wotpack.ru/wp-content/uploads/2025/10/squalanana.png" },
        { name: "Дуг дуг дуг", img: "https://wotpack.ru/wp-content/uploads/2025/09/dug-dug-dug.png" },
        { name: "Мумми Амбалабу", img: "https://wotpack.ru/wp-content/uploads/2025/10/mummy-ambalabu.png" },
        { name: "Гранчиэлло Спирител", img: "https://wotpack.ru/wp-content/uploads/2025/11/granchiello-spiritell.png" },
        { name: "Но Ла Полиция", img: "https://wotpack.ru/wp-content/uploads/2025/11/noo-la-polizia.png" },
        { name: "Фрио Ниндзя", img: "https://wotpack.ru/wp-content/uploads/2025/11/frio-ninja.png" },
        { name: "Пиционетта Машина", img: "https://wotpack.ru/wp-content/uploads/2025/09/that_one_pink_bird_from_angry_birds-e1757522213217.webp" },
        { name: "Лос Гаттитос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-gattitos.png" },
        { name: "Мастодонтико Телепьедоне", img: "https://wotpack.ru/wp-content/uploads/2025/09/clanker-e1757522245551.webp" },
        { name: "Бамбу Бамбу Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/10/bambu-bambu-sahur.png" },
        { name: "Капучино Клоунино", img: "https://wotpack.ru/wp-content/uploads/2025/10/cappuccino-clownino.png" },
        { name: "Анпали Бабель", img: "https://wotpack.ru/wp-content/uploads/2025/09/the_rock-e1757522280970.webp" },
        { name: "Белуга", img: "https://wotpack.ru/wp-content/uploads/2025/09/beluga-e1757958840115.webp" },
        { name: "Крупук Паги Паги", img: "https://wotpack.ru/wp-content/uploads/2025/10/krupuk-pagi-pagi.png" },
        { name: "Поп Поп Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/10/pop-pop-sahur.png" }
    ],

    // [cite: 5, 6]
    mythic: [
        { name: "Фриго Камело", img: "https://wotpack.ru/wp-content/uploads/2025/08/frigocamelo.webp" },
        { name: "Орангутини Ананасини", img: "https://wotpack.ru/wp-content/uploads/2025/08/orangutini-ananassini-1-e1755295250608.webp" },
        { name: "Рино Тостерино", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled210_20250808180116-e1755295282108.webp" },
        { name: "Бомбардиро Крокодило", img: "https://wotpack.ru/wp-content/uploads/2025/08/bombardiro_crocodilo_29-e1755295317935.webp" },
        { name: "Бруто Гиалуто", img: "https://wotpack.ru/wp-content/uploads/2025/09/bruto_gialutto-e1757522347906.webp" },
        { name: "Шпиониро Голубиро", img: "https://wotpack.ru/wp-content/uploads/2025/08/spioniro_golubiro_29-e1755295636758.webp" },
        { name: "Бомбомбини Гусини", img: "https://wotpack.ru/wp-content/uploads/2025/08/bombombini_gusini_steal_a_brainrot-e1755295350349.webp" },
        { name: "Зибра Зубра Зибралини", img: "https://wotpack.ru/wp-content/uploads/2025/08/zibra_zubra_zibralini-e1755295667262.webp" },
        { name: "Тигрилини Вотермелини", img: "https://wotpack.ru/wp-content/uploads/2025/08/tigrilini_watermelini-e1755295698448.webp" },
        { name: "Авокадорила", img: "https://wotpack.ru/wp-content/uploads/2025/08/avocadorilla-e1755295390504.webp" },
        { name: "Кавало Виртуозо", img: "https://wotpack.ru/wp-content/uploads/2025/08/cavallo_virtuoso-e1755295420654.webp" },
        { name: "Горило Сабвуфиро", img: "https://wotpack.ru/wp-content/uploads/2025/09/dubstep_boy-e1757522386890.webp" },
        { name: "Горило Вотермелондрило", img: "https://wotpack.ru/wp-content/uploads/2025/08/gorillo-watermelondrillo-e1755295466811.webp" },
        { name: "Стоппо Люминино", img: "https://wotpack.ru/wp-content/uploads/2025/11/stoppo-luminino.png" },
        { name: "Топ Тоби Тоби", img: "https://wotpack.ru/wp-content/uploads/2025/08/tob_tobi_tobi-e1755295498362.webp" },
        { name: "Лерулерулеруле", img: "https://wotpack.ru/wp-content/uploads/2025/08/lerulerulerule_stealy-e1756663829124.webp" },
        { name: "Ганганзели Трулала", img: "https://wotpack.ru/wp-content/uploads/2025/08/ganganzelli_trulala-e1755295529336.webp" },
        { name: "Те Те Те Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/08/te_te_te_sahur-e1755295554584.webp" },
        { name: "Рино Хеликоптерино", img: "https://wotpack.ru/wp-content/uploads/2025/09/rhino-helicopterino.png" },
        { name: "Тракодукотулу Делапеладуструз", img: "https://wotpack.ru/wp-content/uploads/2025/08/tracoducotulu_delapeladustuz-e1756663568280.webp" },
        { name: "Лос Нубинис", img: "https://wotpack.ru/wp-content/uploads/2025/09/noobinis-e1757522428651.webp" },
        { name: "Качорито Мелонито", img: "https://wotpack.ru/wp-content/uploads/2025/10/cachorrito-melonito.png" },
        { name: "Карлу", img: "https://wotpack.ru/wp-content/uploads/2025/08/carlooooo-e1756663714951.webp" },
        { name: "Элефанто Фриго", img: "https://wotpack.ru/wp-content/uploads/2025/09/elefanto-frigo.png" },
        { name: "Карротини Брейнини", img: "https://wotpack.ru/wp-content/uploads/2025/09/carrotini-brainini.png" },
        { name: "Центруччи Нуклуччи", img: "https://wotpack.ru/wp-content/uploads/2025/11/centrucci-nuclucci.png" },
        { name: "Туалетто Фокачино", img: "https://wotpack.ru/wp-content/uploads/2025/09/toilettto-focaccino.png" },
        { name: "Бананито Бандито", img: "https://wotpack.ru/wp-content/uploads/2025/10/bananito-bandito.png" }
    ],

    // [cite: 6, 7]
    epic: [
        { name: "Капучино Ассасино", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled212_20250809133414-e1755296604804.webp" },
        { name: "Бр Бр Патапим", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled203_20250808140930-e1755296689957.webp" },
        { name: "Бандито Аксолито", img: "https://wotpack.ru/wp-content/uploads/2025/09/bandito_axolito1-e1757522570613.webp" },
        { name: "Авокадини Антилопини", img: "https://wotpack.ru/wp-content/uploads/2025/08/avocadini_antilopini-e1756664270934.webp" },
        { name: "Трулимеро Труличина", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled211_20250809125319-e1755296735375.webp" },
        { name: "Маламе Амареле", img: "https://wotpack.ru/wp-content/uploads/2025/09/malameamarele-e1757522620979.webp" },
        { name: "Бамбини Кростини", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled208_20250808152208-e1755296783344.webp" },
        { name: "Бананита Долфинита", img: "https://wotpack.ru/wp-content/uploads/2025/08/bananita_dolphinita29-removebg-preview-e1755296846956.webp" },
        { name: "Перочело Лемончело", img: "https://wotpack.ru/wp-content/uploads/2025/08/perochello-lemonchello-e1755296885241.webp" },
        { name: "Бри Бри Бикус Дикус Бомбикус", img: "https://wotpack.ru/wp-content/uploads/2025/08/brri-brri-bicus-dicus-bombicus-1-e1755296918847.webp" },
        { name: "Авокадини Гуффо", img: "https://wotpack.ru/wp-content/uploads/2025/08/avocadini-guffo-e1755296940395.webp" },
        { name: "Ти Ти Ти Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/08/ti_ti_ti_shaur-e1755296979203.webp" },
        { name: "Манголини Парочини", img: "https://wotpack.ru/wp-content/uploads/2025/09/mangolini_parrocini-e1757522696928.webp" },
        { name: "Фрогато Пирато", img: "https://wotpack.ru/wp-content/uploads/2025/10/frogato-pirato.png" },
        { name: "Саламино Пингвино", img: "https://wotpack.ru/wp-content/uploads/2025/08/salamino-penguino-e1755297256497.webp" },
        { name: "Дои Дои До", img: "https://wotpack.ru/wp-content/uploads/2025/11/doi-doi-do.png" },
        { name: "Вомбо Ролло", img: "https://wotpack.ru/wp-content/uploads/2025/11/wombo-rollo.png" },
        { name: "Пингвино Кокосино", img: "https://wotpack.ru/wp-content/uploads/2025/08/penguino_cocosino29-e1755297280452.webp" },
        { name: "Мумио Рапитто", img: "https://wotpack.ru/wp-content/uploads/2025/10/mummio-rappitto.png" }
    ],

    // Общий список для перемешивания и выбора фейковых ответов
    all: []
};

// Инициализация общей базы
function setupDB() {
    brainrotDB.all = [
        ...brainrotDB.secret,
        ...brainrotDB.divine,
        ...brainrotDB.mythic,
        ...brainrotDB.epic
    ];
}
setupDB();

/** ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ **/
let selectedType = 'secret';
let currentSet = [];
let currentIndex = 0;
let score = { correct: 0, errors: 0 };
let timerObj = null;
let timeLimit = 5;

/** ИНИЦИАЛИЗАЦИЯ ИНТЕРФЕЙСА **/
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedType = card.dataset.type;
    });
});

/** ЛОГИКА ТЕСТА **/
function startQuiz() {
    const diff = document.querySelector('input[name="diff"]:checked').value;
    
    // Настройка времени [cite: 5]
    if (diff === 'easy') timeLimit = 5;
    else if (diff === 'medium') timeLimit = 4;
    else timeLimit = 3;

    // Подготовка вопросов
    currentSet = [...brainrotDB[selectedType]].sort(() => Math.random() - 0.5);
    
    currentIndex = 0;
    score.correct = 0;
    score.errors = 0;

    switchScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    if (currentIndex >= currentSet.length) {
        endQuiz();
        return;
    }

    const question = currentSet[currentIndex];
    
    // UI Update
    document.getElementById('q-img').src = question.img;
    document.getElementById('curr').innerText = currentIndex + 1;
    document.getElementById('total').innerText = currentSet.length;
    document.getElementById('progress-bar').style.width = `${(currentIndex / currentSet.length) * 100}%`;

    // Генерация кнопок
    const optionsBox = document.getElementById('options');
    optionsBox.innerHTML = '';

    const choices = generateChoices(question.name);
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = choice;
        btn.onclick = () => handleAnswer(choice === question.name);
        optionsBox.appendChild(btn);
    });

    startTimer();
}

function generateChoices(correctName) {
    let pool = brainrotDB.all.map(b => b.name).filter(n => n !== correctName);
    let result = [correctName];
    
    while (result.length < 6) {
        let randomName = pool[Math.floor(Math.random() * pool.length)];
        if (!result.includes(randomName)) result.push(randomName);
    }
    return result.sort(() => Math.random() - 0.5);
}

function startTimer() {
    if (timerObj) clearTimeout(timerObj);
    
    const bar = document.getElementById('timer-bar');
    bar.style.transition = 'none';
    bar.style.width = '100%';

    setTimeout(() => {
        bar.style.transition = `width ${timeLimit}s linear`;
        bar.style.width = '0%';
    }, 50);

    timerObj = setTimeout(() => handleAnswer(false), timeLimit * 1000);
}

function handleAnswer(isCorrect) {
    clearTimeout(timerObj);
    if (isCorrect) score.correct++;
    else score.errors++;

    currentIndex++;
    loadQuestion();
}

/** ФИНАЛ И СТАТИСТИКА **/
function endQuiz() {
    const total = currentSet.length;
    const errors = score.errors;
    const diff = document.querySelector('input[name="diff"]:checked').value;
    let finalGrade = 2;

    // Логика оценки [cite: 5, 6]
    if (selectedType === 'all') {
        if (diff === 'easy') {
            if (errors === 0) finalGrade = 5; else if (errors === 1) finalGrade = 4; else if (errors === 2) finalGrade = 3;
        } else if (diff === 'medium') {
            if (errors <= 1) finalGrade = 5; else if (errors === 2) finalGrade = 4; else if (errors === 3) finalGrade = 3;
        } else {
            if (errors <= 2) finalGrade = 5; else if (errors === 3) finalGrade = 4; else if (errors <= 4) finalGrade = 3;
        }
    } else {
        const pct = (score.correct / total) * 100;
        if (pct >= 98) finalGrade = 5;
        else if (pct >= 95) finalGrade = 4;
        else if (pct >= 90) finalGrade = 3;
    }

    document.getElementById('res-grade-val').innerText = finalGrade;
    document.getElementById('res-c').innerText = score.correct;
    document.getElementById('res-e').innerText = score.errors;
    
    saveToHistory(finalGrade, score.correct, total);
    switchScreen('result');
}

function saveToHistory(grade, c, t) {
    let history = JSON.parse(localStorage.getItem('br_stats_v2') || '[]');
    history.unshift({
        date: new Date().toLocaleDateString(),
        grade,
        score: `${c}/${t}`
    });
    localStorage.setItem('br_stats_v2', JSON.stringify(history.slice(0, 10)));
}

function showStats() {
    const history = JSON.parse(localStorage.getItem('br_stats_v2') || '[]');
    const list = document.getElementById('stats-list');
    list.innerHTML = history.map(item => `
        <div class="card" style="min-width: 100%; height: auto; margin-bottom: 10px; flex-direction: row; justify-content: space-between; padding: 15px;">
            <span>${item.date}</span>
            <b style="color: #34C759">Оценка: ${item.grade}</b>
            <span>${item.score}</span>
        </div>
    `).join('') || '<p style="text-align:center; opacity: 0.5;">Истории пока нет</p>';
    switchScreen('stats');
}

function switchScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function hideStats() { switchScreen('menu'); }
