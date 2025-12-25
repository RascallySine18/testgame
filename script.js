[cite_start]// Полная база данных из файла [cite: 1-17]
const rawData = {
    secret: [
        {name: "Ла Вакка Сатурно Сатурнита", img: "https://wotpack.ru/wp-content/uploads/2025/08/la_vacca_saturno_saturnita_29-e1755293025817.webp"},
        {name: "Лос Маттеос", img: "https://wotpack.ru/wp-content/uploads/2025/08/losmatteos-e1756661413375.webp"},
        {name: "Бизонте Гуипитере", img: "https://wotpack.ru/wp-content/uploads/2025/09/bisonte_giuppitere_normal-e1757521116356.webp"},
        {name: "Тренострузо Турбо 4000", img: "https://wotpack.ru/wp-content/uploads/2025/09/trenostruzzo4000-e1757521184798.webp"},
        {name: "Джакорилла", img: "https://wotpack.ru/wp-content/uploads/2025/10/jackorilla.png"},
        {name: "Тортугини Драгонфрутини", img: "https://wotpack.ru/wp-content/uploads/2025/08/torrtuginni_dragonfrutini_steal_a_brainrot-e1755293459959.webp"},
        {name: "Дул Дул Дул", img: "https://wotpack.ru/wp-content/uploads/2025/08/dul_dul_dul-e1756665978961.webp"},
        {name: "Чачечи", img: "https://wotpack.ru/wp-content/uploads/2025/09/chachechitransparent-e1757957803137.webp"},
        {name: "Агарини ла Палини", img: "https://wotpack.ru/wp-content/uploads/2025/08/agarrini_la_palini-e1755293603109.webp"},
        {name: "Лос Спайдеринис", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_spyderinis.webp"},
        {name: "Экстинкт Тралалеро", img: "https://wotpack.ru/wp-content/uploads/2025/09/jaws.webp"},
        {name: "Фрагола Ла Ла Ла", img: "https://wotpack.ru/wp-content/uploads/2025/09/sammy_the_strawberry-e1757521259975.webp"},
        {name: "Лос Тралалеритос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los-tralaleritos-1-e1755293130756.webp"},
        {name: "Лос Тортус", img: "https://wotpack.ru/wp-content/uploads/2025/10/los-tortus.png"},
        {name: "Зомби Тралала", img: "https://wotpack.ru/wp-content/uploads/2025/11/zombie-tralala.png"},
        {name: "Боатито Ауратито", img: "https://wotpack.ru/wp-content/uploads/2025/10/boatito-auratito.png"},
        {name: "Гуериро Диджитале", img: "https://wotpack.ru/wp-content/uploads/2025/09/guerriro-digitale.png"},
        {name: "Да мой экзамен", img: "https://wotpack.ru/wp-content/uploads/2025/09/yess-my-examine.png"},
        {name: "Ла Каркеркар Комбинасион", img: "https://wotpack.ru/wp-content/uploads/2025/09/holy_falloff-e1757521338947.webp"},
        {name: "Экстинкт Маттео", img: "https://wotpack.ru/wp-content/uploads/2025/09/man_im_dead-e1757958614235.webp"},
        {name: "Пампкини Спайдерини", img: "https://wotpack.ru/wp-content/uploads/2025/10/pumpkini-spyderini.png"},
        {name: "Лас Тралалеритас", img: "https://wotpack.ru/wp-content/uploads/2025/08/las-tralaleritas-e1755293190861.webp"},
        {name: "Джоб Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/08/job-e1756662798685.webp"},
        {name: "Лас Вакитас Сатурнитас", img: "https://wotpack.ru/wp-content/uploads/2025/08/las_vaquitas_saturnitas_steal_a_brainrot-e1755293525478.webp"},
        {name: "Лос Каркеритос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-karkeritos-1.png"},
        {name: "Триколино", img: "https://wotpack.ru/wp-content/uploads/2025/10/trickolino.png"},
        {name: "Грайпусени Медузини", img: "https://wotpack.ru/wp-content/uploads/2025/08/graipusseni_medussini_steal_a_brainrot-e1755293304918.webp"},
        {name: "1x1x1x1", img: "https://wotpack.ru/wp-content/uploads/2025/11/1x1x1x1.png"},
        {name: "Лос Кукарачас", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-cucarachas.png"},
        {name: "Куадрамат и Пакрахматмамат", img: "https://wotpack.ru/wp-content/uploads/2025/11/cuadramat-and-pakrahmatmamat.png"},
        {name: "Лос Джобситос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-jobcitos.png"},
        {name: "Тун Тун Тун Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/08/tung_tung_tung_sahur-e1755297846897.webp"},
        {name: "Нет мой экзамен", img: "https://wotpack.ru/wp-content/uploads/2025/09/noo-my-examine.png"},
        {name: "Телеморте", img: "https://wotpack.ru/wp-content/uploads/2025/10/telemorte.png"},
        {name: "Ла Сахур Комбинасион", img: "https://wotpack.ru/wp-content/uploads/2025/09/sahuria-e1757521298723.webp"},
        {name: "Ту ту ту Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/09/to-to-to-sahur.png"},
        {name: "Пот Хотспот", img: "https://wotpack.ru/wp-content/uploads/2025/08/pot_hotspot_steal_a_brainrot-e1755293497315.webp"},
        {name: "Пирулитоита Бисиклетейра", img: "https://wotpack.ru/wp-content/uploads/2025/11/pirulitoita-bicicleteira.png"},
        {name: "Хорегини Бум", img: "https://wotpack.ru/wp-content/uploads/2025/10/horegini-boom.png"},
        {name: "Чиклетейра Бисиклетейра", img: "https://wotpack.ru/wp-content/uploads/2025/08/chicleteira-bicicleteira.webp"},
        {name: "Чиклетейрина Бисиклетейрина", img: "https://wotpack.ru/wp-content/uploads/2025/10/chicleteirina-bicicleteirina.png"},
        {name: "Лос Кесадильяс", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-quesadillas.png"},
        {name: "Бурито Бандито", img: "https://wotpack.ru/wp-content/uploads/2025/10/burrito-bandito.png"},
        {name: "Гость 666", img: "https://wotpack.ru/wp-content/uploads/2025/11/guest-666.png"},
        {name: "Ранг Ринг Бас", img: "https://wotpack.ru/wp-content/uploads/2025/10/rang-ring-bus.png"},
        {name: "Лос Буритос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-burritos.png"},
        {name: "Лос Чиклетейрас", img: "https://wotpack.ru/wp-content/uploads/2025/09/los_shitheaditos-e1757958701997.webp"},
        {name: "Брейнрот 67", img: "https://wotpack.ru/wp-content/uploads/2025/09/breynrot-67.png"},
        {name: "Ла Гранде Комбинасион", img: "https://wotpack.ru/wp-content/uploads/2025/08/la_grande_combinasion_steal_a_brainrot-e1755293353133.webp"},
        {name: "Сваэг Сода", img: "https://wotpack.ru/wp-content/uploads/2025/11/swag-soda.png"},
        {name: "Нуклеаро Динозауро", img: "https://wotpack.ru/wp-content/uploads/2025/08/nuclearo_dinossauro_steal_a_brainrot-e1755293383535.webp"},
        {name: "Лос Комбинасионас", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_combinasionas_29-e1755293632368.webp"},
        {name: "Фишино Кловнино", img: "https://wotpack.ru/wp-content/uploads/2025/11/fishino-clownino.png"},
        {name: "Лас Сис", img: "https://wotpack.ru/wp-content/uploads/2025/09/las-sis.png"},
        {name: "Лос Планитос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-planitos.png"},
        {name: "Лос Спуки Комбинасьонас", img: "https://wotpack.ru/wp-content/uploads/2025/10/los-spooky-combinasionas.png"},
        {name: "Лос Хотспотситос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_hotspotsitos2-e1755293676477.webp"},
        {name: "Мани Мани Пагги", img: "https://wotpack.ru/wp-content/uploads/2025/09/money-money-puggy.png"},
        {name: "Лос Сиксевен", img: "https://wotpack.ru/wp-content/uploads/2025/10/los-67.png"},
        {name: "Селуларчини Вициозини", img: "https://wotpack.ru/wp-content/uploads/2025/09/celularcini-viciosini.png"},
        {name: "25", img: "https://wotpack.ru/wp-content/uploads/2025/12/breynrot-25.png"},
        {name: "Миететейра Чиклетейра", img: "https://wotpack.ru/wp-content/uploads/2025/10/mieteteira-chicleteira.png"},
        {name: "Тралаледон", img: "https://wotpack.ru/wp-content/uploads/2025/09/brr_brr_patapem-e1757521387724.webp"},
        {name: "Лос Паггис", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-puggies.png"},
        {name: "Есок Секолах", img: "https://wotpack.ru/wp-content/uploads/2025/08/esok_sekolah-e1755293760773.webp"},
        {name: "Лос Примос", img: "https://wotpack.ru/wp-content/uploads/2025/09/los-primos.png"},
        {name: "Лос Такоритас", img: "https://wotpack.ru/wp-content/uploads/2025/09/los-tacoritas.png"},
        {name: "Кетупат Кепат", img: "https://wotpack.ru/wp-content/uploads/2025/08/ketupatkepat-e1756662458289.webp"},
        {name: "Лос Брос", img: "https://wotpack.ru/wp-content/uploads/2025/09/broooooooo-e1757521421409.webp"},
        {name: "Тиктак Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/09/tictac-sahur.png"},
        {name: "Оркаледон", img: "https://wotpack.ru/wp-content/uploads/2025/11/orcaledon-1.png"},
        {name: "Ла Суприм Комбинасион", img: "https://wotpack.ru/wp-content/uploads/2025/08/supremecombinasion-e1756661029946.webp"},
        {name: "Кетчуру и Мастуру", img: "https://wotpack.ru/wp-content/uploads/2025/09/ketchuru-e1757521475775.webp"},
        {name: "Лавадорито Спинито", img: "https://wotpack.ru/wp-content/uploads/2025/11/lavadorito-spinito.png"},
        {name: "Гарама и Мадундунг", img: "https://wotpack.ru/wp-content/uploads/2025/08/garama_and_mandundung_steal_a_brainrot-e1755293417807.webp"},
        {name: "Спагетти Туалетти", img: "https://wotpack.ru/wp-content/uploads/2025/08/9ff4f5c6-6ad8-41a3-8e19-ffd9261102bc-removebg-preview-e1756660891710.webp"},
        {name: "Лос Спагеттис", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-spaghettis.png"},
        {name: "Фраграма и Чокрама", img: "https://wotpack.ru/wp-content/uploads/2025/11/fragrama-and-chocrama.png"},
        {name: "Ла Каса Бу", img: "https://wotpack.ru/wp-content/uploads/2025/10/la-casa-boo.png"},
        {name: "Ла Сикрет Комбинасьен", img: "https://wotpack.ru/wp-content/uploads/2025/10/la-secret-combinasion.png"},
        {name: "Капитано Моби", img: "https://wotpack.ru/wp-content/uploads/2025/11/capitano-moby.png"},
        {name: "Бургуро и Фруюро", img: "https://wotpack.ru/wp-content/uploads/2025/10/burguro-and-fryuro.png"},
        {name: "Куки и Милки", img: "https://wotpack.ru/wp-content/uploads/2025/12/cooki-and-milki.png"},
        {name: "Всадник без головы", img: "https://wotpack.ru/wp-content/uploads/2025/10/headless-horseman.png"},
        {name: "Драгон Канелони", img: "https://wotpack.ru/wp-content/uploads/2025/08/dragon_cannelloni-1-e1755293731680.webp"}
    ],
    exclusive_og: [
        {name: "Ракуни Джанделини", img: "https://wotpack.ru/wp-content/uploads/2025/08/raccooni-e1756665221917.webp"},
        {name: "Квакула", img: "https://wotpack.ru/wp-content/uploads/2025/10/quackula.png"},
        {name: "Бухо де Фуего", img: "https://wotpack.ru/wp-content/uploads/2025/10/buho-de-fuego.png"},
        {name: "Маги Риббитини", img: "https://wotpack.ru/wp-content/uploads/2025/10/magi-ribbitini.png"},
        {name: "Gattatino Neonino (удален)", img: "https://wotpack.ru/wp-content/uploads/2025/08/gattatino_neonino_29-e1755298190694.webp"},
        {name: "Гататино Нянино", img: "https://wotpack.ru/wp-content/uploads/2025/09/gattatin-e1757522799216.webp"},
        {name: "Чихуанини Таконини", img: "https://wotpack.ru/wp-content/uploads/2025/09/chihuanini-taconini.png"},
        {name: "Маттео (OG)", img: "https://wotpack.ru/wp-content/uploads/2025/08/matteo_steal_a_brainrot-1-e1755298233779.webp"},
        {name: "Анклито Самито", img: "https://wotpack.ru/wp-content/uploads/2025/08/unclito-samito-300x300-1-e1756665883792.webp"},
        {name: "Типи Топи Тако", img: "https://wotpack.ru/wp-content/uploads/2025/08/tipi_topi_taco-1-e1755298309160.webp"},
        {name: "Эспрессо Синьора (OG)", img: "https://wotpack.ru/wp-content/uploads/2025/08/espresso_signora_steal_a_brainrot-1-e1755298255648.webp"},
        {name: "Алессио", img: "https://wotpack.ru/wp-content/uploads/2025/08/alessioo-e1756665670949.webp"},
        {name: "Капи Тако", img: "https://wotpack.ru/wp-content/uploads/2025/09/capi-taco.png"},
        {name: "Гатито Такото", img: "https://wotpack.ru/wp-content/uploads/2025/09/gattito-tacoto.png"},
        {name: "Лос Типи Такос", img: "https://wotpack.ru/wp-content/uploads/2025/09/los-tipi-tacos.png"},
        {name: "Урубини Фламенгини", img: "https://wotpack.ru/wp-content/uploads/2025/08/baseball_urubini_flamenguini.webp"},
        {name: "Джако Джек Джек", img: "https://wotpack.ru/wp-content/uploads/2025/10/jacko-jack-jack.png"},
        {name: "Бомбардини Тортини (OG)", img: "https://wotpack.ru/wp-content/uploads/2025/08/bombardini_tortinii-1-e1755298277537.webp"},
        {name: "Корн Корн Корн Сахур (Exclusive)", img: "https://wotpack.ru/wp-content/uploads/2025/09/corn-corn-corn-sahur.png"},
        {name: "Снейлензо", img: "https://wotpack.ru/wp-content/uploads/2025/10/snailenzo.png"},
        {name: "Каркеркар Куркур", img: "https://wotpack.ru/wp-content/uploads/2025/08/karkerkarkurkur-e1755298213909.webp"},
        {name: "Тентаколо Технико", img: "https://wotpack.ru/wp-content/uploads/2025/10/tentacolo-tecnico.png"},
        {name: "Сэммини Спайдерини", img: "https://wotpack.ru/wp-content/uploads/2025/08/sammyni_spyderini_fr-e1756665927775.webp"},
        {name: "Вултурино Скелетоно", img: "https://wotpack.ru/wp-content/uploads/2025/10/vulturino-skeletono.png"},
        {name: "Кесадила Крокодила", img: "https://wotpack.ru/wp-content/uploads/2025/09/quesadilla-crocodila.png"},
        {name: "Лос Хотспотситос (OG)", img: "https://wotpack.ru/wp-content/uploads/2025/09/los-nooo-my-hotspotsitos.png"},
        {name: "Chimpanzini Spiderini", img: "https://wotpack.ru/wp-content/uploads/2025/08/chimpanzini_spiderini_29-e1755293095521.webp"},
        {name: "Ла Кукарача", img: "https://wotpack.ru/wp-content/uploads/2025/09/la-cucaracha.png"},
        {name: "Коза Черная дыра", img: "https://wotpack.ru/wp-content/uploads/2025/08/blackhole_goat-e1756665818137.webp"},
        {name: "Хотспот", img: "https://wotpack.ru/wp-content/uploads/2025/08/nooo_my_hotspot29-e1755298331180.webp"},
        {name: "Кесадило Вампиро", img: "https://wotpack.ru/wp-content/uploads/2025/10/quesadillo-vampiro.png"},
        {name: "Мариачи Коразони", img: "https://wotpack.ru/wp-content/uploads/2025/09/mariachi-corazoni.png"},
        {name: "Такорита Бисиклета", img: "https://wotpack.ru/wp-content/uploads/2025/09/tacorita-bicicleta.png"},
        {name: "Лос Мобилис", img: "https://wotpack.ru/wp-content/uploads/2025/10/los-mobilis.png"},
        {name: "Ла Экстинкт Гранде", img: "https://wotpack.ru/wp-content/uploads/2025/09/la_extinct_grande-e1757959281920.webp"},
        {name: "Ла Спуки Гранде", img: "https://wotpack.ru/wp-content/uploads/2025/10/la-spooky-grande.png"},
        {name: "Чипсо и Кесо", img: "https://wotpack.ru/wp-content/uploads/2025/10/chipso-and-queso.png"},
        {name: "В или Л", img: "https://wotpack.ru/wp-content/uploads/2025/11/w-or-l.png"},
        {name: "Эвилдон", img: "https://wotpack.ru/wp-content/uploads/2025/10/eviledon.png"},
        {name: "Ла Тако Комбинасьон", img: "https://wotpack.ru/wp-content/uploads/2025/11/la-taco-combinasion.png"},
        {name: "Спуки и Пампки", img: "https://wotpack.ru/wp-content/uploads/2025/10/spooky-and-pumpky.png"},
        {name: "Мявл", img: "https://wotpack.ru/wp-content/uploads/2025/10/meowl.png"},
        {name: "Клубничный слон", img: "https://wotpack.ru/wp-content/uploads/2025/09/strawberryelephant-e1757621873835.webp"}
    ],
    divine: [
        {name: "Кокофанто Элефанто", img: "https://wotpack.ru/wp-content/uploads/2025/08/cocofanto_elefanto_steal_a_brainrot-e1755293928227.webp"},
        {name: "Антонио", img: "https://wotpack.ru/wp-content/uploads/2025/09/antonio.png"},
        {name: "Жирафа Селестре", img: "https://wotpack.ru/wp-content/uploads/2025/08/girafa_celestre_steal_a_brainrot-e1755293973147.webp"},
        {name: "Гататино Неонино", img: "https://wotpack.ru/wp-content/uploads/2025/08/gattatino_neonino_steal_a_brainrot-e1755294061788.webp"},
        {name: "Маттео", img: "https://wotpack.ru/wp-content/uploads/2025/08/matteo_steal_a_brainrot-e1755294109367.webp"},
        {name: "Тралалеро Тралала", img: "https://wotpack.ru/wp-content/uploads/2025/08/tralalero_tralala_steal_a_brainrot-e1755294158390.webp"},
        {name: "Лос Крокодилитос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_crocodillitos-2-e1755294183457.webp"},
        {name: "Тигролигре Фрутонни", img: "https://wotpack.ru/wp-content/uploads/2025/08/tigroligre-frutonni-e1755294986146.webp"},
        {name: "Мани Мани Мен", img: "https://wotpack.ru/wp-content/uploads/2025/11/money-money-man.png"},
        {name: "Эспрессо Синьора", img: "https://wotpack.ru/wp-content/uploads/2025/08/espresso_signora_steal_a_brainrot-e1755294215344.webp"},
        {name: "Один Дин Дин Дун", img: "https://wotpack.ru/wp-content/uploads/2025/08/odin_din_din_dun_steal_a_brainrot-e1755294244201.webp"},
        {name: "Statutino Libertino", img: "https://wotpack.ru/wp-content/uploads/2025/08/statutino_libertino_steal_a_brainrot-e1755294292537.webp"},
        {name: "Туканно Бананно", img: "https://wotpack.ru/wp-content/uploads/2025/08/tukanno_bananno-e1755294371377.webp"},
        {name: "Оркалеро Оркала", img: "https://wotpack.ru/wp-content/uploads/2025/08/orcalero_orcala_steal_a_brainrot-e1755295015126.webp"},
        {name: "Тралалита Тралала", img: "https://wotpack.ru/wp-content/uploads/2025/09/tralalita-e1757522015418.webp"},
        {name: "Экстинкт Балерина", img: "https://wotpack.ru/wp-content/uploads/2025/09/dead_art_form-e1757958789465.webp"},
        {name: "Тренострузо Турбо 3000", img: "https://wotpack.ru/wp-content/uploads/2025/08/trenostruzzo_turbo_3000_steal_a_brainrot-e1755294407899.webp"},
        {name: "Лос Чихуанинис", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-chihuaninis.png"},
        {name: "Трипи Тропи Тропи Трипа", img: "https://wotpack.ru/wp-content/uploads/2025/08/trippi_troppi_troppa_trippa-e1755294439392.webp"},
        {name: "Лас Капучинас", img: "https://wotpack.ru/wp-content/uploads/2025/09/lascapuchinas-e1757522091518.webp"},
        {name: "Балерини Лололо", img: "https://wotpack.ru/wp-content/uploads/2025/08/ballerino_lololo_steal_a_brainrot-e1755294485304.webp"},
        {name: "Булбито Бандито Тракторито", img: "https://wotpack.ru/wp-content/uploads/2025/08/bulbito_bandito_traktorito.webp"},
        {name: "Лос Тунтунтунгситос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_tungtungtungcitos-e1755294720476.webp"},
        {name: "Пакрахматмамат", img: "https://wotpack.ru/wp-content/uploads/2025/08/pencil-e1756662960636.webp"},
        {name: "Лос Бомбинитос", img: "https://wotpack.ru/wp-content/uploads/2025/09/los-bombinitos.png"},
        {name: "Пиционе Мачина", img: "https://wotpack.ru/wp-content/uploads/2025/08/piccione_macchina_steal_a_brainrot-e1755294786161.webp"},
        {name: "Бомбардини Тортини", img: "https://wotpack.ru/wp-content/uploads/2025/08/bombardini_tortinii-e1755294834533.webp"},
        {name: "Пакрахматматина", img: "https://wotpack.ru/wp-content/uploads/2025/10/pakrahmatmatina.png"},
        {name: "Тракторо Динозауро", img: "https://wotpack.ru/wp-content/uploads/2025/09/tractoro-dinosauro.png"},
        {name: "Краббо Лимонетта", img: "https://wotpack.ru/wp-content/uploads/2025/09/crabbo-limonetta.png"},
        {name: "Лос Оркалитос", img: "https://wotpack.ru/wp-content/uploads/2025/08/los_orcalitos-e1755294950333.webp"},
        {name: "Оркалита Оркала", img: "https://wotpack.ru/wp-content/uploads/2025/09/img_2496-e1757522142572.webp"},
        {name: "Какасито Саталито", img: "https://wotpack.ru/wp-content/uploads/2025/09/lebron_james-e1757522175873.webp"},
        {name: "Акванавт", img: "https://wotpack.ru/wp-content/uploads/2025/11/aquanaut.png"},
        {name: "Бр ес Те Патипум", img: "https://wotpack.ru/wp-content/uploads/2025/08/brr_es_teh_patipum-e1756663033257.webp"},
        {name: "Корн Корн Корн Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/12/corn-corn-corn-sahur.png"},
        {name: "Татаруга Цистерна", img: "https://wotpack.ru/wp-content/uploads/2025/08/tartaruga_cisternaaaa-e1756663111257.webp"},
        {name: "Скваланана", img: "https://wotpack.ru/wp-content/uploads/2025/10/squalanana.png"},
        {name: "Дуг дуг дуг", img: "https://wotpack.ru/wp-content/uploads/2025/09/dug-dug-dug.png"},
        {name: "Мумми Амбалабу", img: "https://wotpack.ru/wp-content/uploads/2025/10/mummy-ambalabu.png"},
        {name: "Гранчиэлло Спирител", img: "https://wotpack.ru/wp-content/uploads/2025/11/granchiello-spiritell.png"},
        {name: "Но Ла Полиция", img: "https://wotpack.ru/wp-content/uploads/2025/11/noo-la-polizia.png"},
        {name: "Фрио Ниндзя", img: "https://wotpack.ru/wp-content/uploads/2025/11/frio-ninja.png"},
        {name: "Пиционетта Машина", img: "https://wotpack.ru/wp-content/uploads/2025/09/that_one_pink_bird_from_angry_birds-e1757522213217.webp"},
        {name: "Лос Гаттитос", img: "https://wotpack.ru/wp-content/uploads/2025/11/los-gattitos.png"},
        {name: "Мастодонтико Телепьедоне", img: "https://wotpack.ru/wp-content/uploads/2025/09/clanker-e1757522245551.webp"},
        {name: "Бамбу Бамбу Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/10/bambu-bambu-sahur.png"},
        {name: "Капучино Клоунино", img: "https://wotpack.ru/wp-content/uploads/2025/10/cappuccino-clownino.png"},
        {name: "Анпали Бабель", img: "https://wotpack.ru/wp-content/uploads/2025/09/the_rock-e1757522280970.webp"},
        {name: "Белуга", img: "https://wotpack.ru/wp-content/uploads/2025/09/beluga-e1757958840115.webp"},
        {name: "Крупук Паги Паги", img: "https://wotpack.ru/wp-content/uploads/2025/10/krupuk-pagi-pagi.png"},
        {name: "Поп Поп Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/10/pop-pop-sahur.png"}
    ],
    mythic: [
        {name: "Фриго Камело", img: "https://wotpack.ru/wp-content/uploads/2025/08/frigocamelo.webp"},
        {name: "Орангутини Ананасини", img: "https://wotpack.ru/wp-content/uploads/2025/08/orangutini-ananassini-1-e1755295250608.webp"},
        {name: "Рино Тостерино", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled210_20250808180116-e1755295282108.webp"},
        {name: "Бомбардиро Крокодило", img: "https://wotpack.ru/wp-content/uploads/2025/08/bombardiro_crocodilo_29-e1755295317935.webp"},
        {name: "Бруто Гиалуто", img: "https://wotpack.ru/wp-content/uploads/2025/09/bruto_gialutto-e1757522347906.webp"},
        {name: "Шпиониро Голубиро", img: "https://wotpack.ru/wp-content/uploads/2025/08/spioniro_golubiro_29-e1755295636758.webp"},
        {name: "Бомбомбини Гусини", img: "https://wotpack.ru/wp-content/uploads/2025/08/bombombini_gusini_steal_a_brainrot-e1755295350349.webp"},
        {name: "Зибра Зубра Зибралини", img: "https://wotpack.ru/wp-content/uploads/2025/08/zibra_zubra_zibralini-e1755295667262.webp"},
        {name: "Тигрилини Вотермелини", img: "https://wotpack.ru/wp-content/uploads/2025/08/tigrilini_watermelini-e1755295698448.webp"},
        {name: "Авокадорила", img: "https://wotpack.ru/wp-content/uploads/2025/08/avocadorilla-e1755295390504.webp"},
        {name: "Кавало Виртуозо", img: "https://wotpack.ru/wp-content/uploads/2025/08/cavallo_virtuoso-e1755295420654.webp"},
        {name: "Горило Сабвуфиро", img: "https://wotpack.ru/wp-content/uploads/2025/09/dubstep_boy-e1757522386890.webp"},
        {name: "Горило Вотермелондрило", img: "https://wotpack.ru/wp-content/uploads/2025/08/gorillo-watermelondrillo-e1755295466811.webp"},
        {name: "Стоппо Люминино", img: "https://wotpack.ru/wp-content/uploads/2025/11/stoppo-luminino.png"},
        {name: "Топ Тоби Тоби", img: "https://wotpack.ru/wp-content/uploads/2025/08/tob_tobi_tobi-e1755295498362.webp"},
        {name: "Лерулерулеруле", img: "https://wotpack.ru/wp-content/uploads/2025/08/lerulerulerule_stealy-e1756663829124.webp"},
        {name: "Ганганзели Трулала", img: "https://wotpack.ru/wp-content/uploads/2025/08/ganganzelli_trulala-e1755295529336.webp"},
        {name: "Те Те Те Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/08/te_te_te_sahur-e1755295554584.webp"},
        {name: "Рино Хеликоптерино", img: "https://wotpack.ru/wp-content/uploads/2025/09/rhino-helicopterino.png"},
        {name: "Тракодукотулу Делапеладуструз", img: "https://wotpack.ru/wp-content/uploads/2025/08/tracoducotulu_delapeladustuz-e1756663568280.webp"},
        {name: "Лос Нубинис", img: "https://wotpack.ru/wp-content/uploads/2025/09/noobinis-e1757522428651.webp"},
        {name: "Качорито Мелонито", img: "https://wotpack.ru/wp-content/uploads/2025/10/cachorrito-melonito.png"},
        {name: "Карлу", img: "https://wotpack.ru/wp-content/uploads/2025/08/carlooooo-e1756663714951.webp"},
        {name: "Элефанто Фриго", img: "https://wotpack.ru/wp-content/uploads/2025/09/elefanto-frigo.png"},
        {name: "Карротини Брейнини", img: "https://wotpack.ru/wp-content/uploads/2025/09/carrotini-brainini.png"},
        {name: "Центруччи Нуклуччи", img: "https://wotpack.ru/wp-content/uploads/2025/11/centrucci-nuclucci.png"},
        {name: "Туалетто Фокачино", img: "https://wotpack.ru/wp-content/uploads/2025/09/toilettto-focaccino.png"},
        {name: "Бананито Бандито", img: "https://wotpack.ru/wp-content/uploads/2025/10/bananito-bandito.png"}
    ],
    legendary: [
        {name: "Бурбалони Лолилоли", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled209_20250808173522-e1755295811250.webp"},
        {name: "Шимпанзини Бананини", img: "https://wotpack.ru/wp-content/uploads/2025/08/chimpanzini_bananini_steal_a_brainrot-e1755295841359.webp"},
        {name: "Тириликалика Тириликалако", img: "https://wotpack.ru/wp-content/uploads/2025/09/tirilikalikatirilikalakotransparent-e1757959058700.webp"},
        {name: "Балерина Капучино", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled206_20250808150027-e1755295950324.webp"},
        {name: "Шеф Крабракадабра", img: "https://wotpack.ru/wp-content/uploads/2025/08/chef-crabracadabra-e1755296002988.webp"},
        {name: "Лионели Кактусели", img: "https://wotpack.ru/wp-content/uploads/2025/08/lionel-cactuseli-e1755296039577.webp"},
        {name: "Глорбо Фрутодрило", img: "https://wotpack.ru/wp-content/uploads/2025/08/glorbo_fruttodrillo-removebg-preview-e1755296071745.webp"},
        {name: "Кивиоли Амелеонни", img: "https://wotpack.ru/wp-content/uploads/2025/08/quivioli_ameleonni-e1756664185192.webp"},
        {name: "Блуберини Октопусини", img: "https://wotpack.ru/wp-content/uploads/2025/08/blueberrini_outopusini-e1755296205790.webp"},
        {name: "Кликерино Крабо", img: "https://wotpack.ru/wp-content/uploads/2025/11/clickerino-crabo.png"},
        {name: "Карамело Фильтрело", img: "https://wotpack.ru/wp-content/uploads/2025/09/caramello_filtrello-e1757522503304.webp"},
        {name: "Строберели Фламингели", img: "https://wotpack.ru/wp-content/uploads/2025/08/strawberelli_flamingelli_steal_a_brainrot-e1755296331866.webp"},
        {name: "Пипи Потато", img: "https://wotpack.ru/wp-content/uploads/2025/08/potato-e1756664130147.webp"},
        {name: "Кокосини Мама", img: "https://wotpack.ru/wp-content/uploads/2025/08/cocosini_mama-e1755296401865.webp"},
        {name: "Пандачини Бананини", img: "https://wotpack.ru/wp-content/uploads/2025/08/pandaccini_bananini-e1755296474202.webp"},
        {name: "Пи Пи Арбуз", img: "https://wotpack.ru/wp-content/uploads/2025/08/pi_pi_watermelon-e1755296497112.webp"},
        {name: "Сигма Бой", img: "https://wotpack.ru/wp-content/uploads/2025/08/sigma_boy-e1755296544707.webp"},
        {name: "Синьор Карапасе", img: "https://wotpack.ru/wp-content/uploads/2025/09/teenage_turtle-e1757959097993.webp"},
        {name: "Пуффабол", img: "https://wotpack.ru/wp-content/uploads/2025/11/puffaball-1.png"},
        {name: "Сигма Гёрл", img: "https://wotpack.ru/wp-content/uploads/2025/09/sigma-girl.png"}
    ],
    epic: [
        {name: "Капучино Ассасино", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled212_20250809133414-e1755296604804.webp"},
        {name: "Бр Бр Патапим", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled203_20250808140930-e1755296689957.webp"},
        {name: "Бандито Аксолито", img: "https://wotpack.ru/wp-content/uploads/2025/09/bandito_axolito1-e1757522570613.webp"},
        {name: "Авокадини Антилопини", img: "https://wotpack.ru/wp-content/uploads/2025/08/avocadini_antilopini-e1756664270934.webp"},
        {name: "Трулимеро Труличина", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled211_20250809125319-e1755296735375.webp"},
        {name: "Маламе Амареле", img: "https://wotpack.ru/wp-content/uploads/2025/09/malameamarele-e1757522620979.webp"},
        {name: "Бамбини Кростини", img: "https://wotpack.ru/wp-content/uploads/2025/08/untitled208_20250808152208-e1755296783344.webp"},
        {name: "Бананита Долфинита", img: "https://wotpack.ru/wp-content/uploads/2025/08/bananita_dolphinita29-removebg-preview-e1755296846956.webp"},
        {name: "Перочело Лемончело", img: "https://wotpack.ru/wp-content/uploads/2025/08/perochello-lemonchello-e1755296885241.webp"},
        {name: "Бри Бри Бикус Дикус Бомбикус", img: "https://wotpack.ru/wp-content/uploads/2025/08/brri-brri-bicus-dicus-bombicus-1-e1755296918847.webp"},
        {name: "Авокадини Гуффо", img: "https://wotpack.ru/wp-content/uploads/2025/08/avocadini-guffo-e1755296940395.webp"},
        {name: "Ти Ти Ти Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/08/ti_ti_ti_shaur-e1755296979203.webp"},
        {name: "Манголини Парочини", img: "https://wotpack.ru/wp-content/uploads/2025/09/mangolini_parrocini-e1757522696928.webp"},
        {name: "Фрогато Пирато", img: "https://wotpack.ru/wp-content/uploads/2025/10/frogato-pirato.png"},
        {name: "Саламино Пингвино", img: "https://wotpack.ru/wp-content/uploads/2025/08/salamino-penguino-e1755297256497.webp"},
        {name: "Дои Дои До", img: "https://wotpack.ru/wp-content/uploads/2025/11/doi-doi-do.png"},
        {name: "Вомбо Ролло", img: "https://wotpack.ru/wp-content/uploads/2025/11/wombo-rollo.png"},
        {name: "Пингвино Кокосино", img: "https://wotpack.ru/wp-content/uploads/2025/08/penguino_cocosino29-e1755297280452.webp"},
        {name: "Мумио Рапитто", img: "https://wotpack.ru/wp-content/uploads/2025/10/mummio-rappitto.png"}
    ],
    rare_common: [
        {name: "Нубини Пицанини", img: "https://wotpack.ru/wp-content/uploads/2025/08/noobini_pizzanini_new-e1755298098182.webp"},
        {name: "Лирили Ларила", img: "https://wotpack.ru/wp-content/uploads/2025/08/liliri_lalira-e1755298072558.webp"},
        {name: "Тим Чиз", img: "https://wotpack.ru/wp-content/uploads/2025/08/tim_cheese-e1755298052615.webp"},
        {name: "Флурифлура", img: "https://wotpack.ru/wp-content/uploads/2025/08/fluriflura-e1755298027660.webp"},
        {name: "Талпа Ди Феро", img: "https://wotpack.ru/wp-content/uploads/2025/08/talpa_di_fero-e1755298002242.webp"},
        {name: "Свинина Бомбардино", img: "https://wotpack.ru/wp-content/uploads/2025/08/homicidio_doloso-e1755297970414.webp"},
        {name: "Пипи Киви", img: "https://wotpack.ru/wp-content/uploads/2025/08/pipi_kiwi-e1755297943255.webp"},
        {name: "Тартарагно", img: "https://wotpack.ru/wp-content/uploads/2025/10/tartaragno.png"},
        {name: "Пипи Корни", img: "https://wotpack.ru/wp-content/uploads/2025/08/pipi_corni_29-e1755297906920.webp"},
        {name: "Трипи Тропи", img: "https://wotpack.ru/wp-content/uploads/2025/08/trippi_troppi-e1755297871795.webp"},
        {name: "Гангстер Футера", img: "https://wotpack.ru/wp-content/uploads/2025/08/gangster-footera-e1755297774173.webp"},
        {name: "Бандито Бобрито", img: "https://wotpack.ru/wp-content/uploads/2025/08/bandito-bobritto-4-e1755297732539.webp"},
        {name: "Бонека Амбалабу", img: "https://wotpack.ru/wp-content/uploads/2025/08/boneca_ambalabu-e1755297691100.webp"},
        {name: "Както Хипопотамо", img: "https://wotpack.ru/wp-content/uploads/2025/08/cactohipopotamo-e1756664270934.webp"},
        {name: "Та Та Та Та Сахур", img: "https://wotpack.ru/wp-content/uploads/2025/08/ta-ta-ta-ta-sahur-1-e1755297558873.webp"},
        {name: "Капкейк Коала", img: "https://wotpack.ru/wp-content/uploads/2025/11/cupcake-koala.png"},
        {name: "Трик Трак Барабум", img: "https://wotpack.ru/wp-content/uploads/2025/08/tric-trac-baraboom-5-e1755297529210.webp"},
        {name: "Пипи Авокадо", img: "https://wotpack.ru/wp-content/uploads/2025/08/pipi_avocado-e1755297471201.webp"},
        {name: "Пинеалотто Фруттарино", img: "https://wotpack.ru/wp-content/uploads/2025/10/pinealotto-fruttarino.png"}
    ]
};

[cite_start]// Организация категорий по вашему запросу [cite: 17]
const quizCategories = {
    secret: [...rawData.secret, ...rawData.exclusive_og],
    divine: [...rawData.divine],
    mythic: [...rawData.mythic, ...rawData.legendary],
    epic: [...rawData.epic, ...rawData.rare_common],
    all: [...rawData.secret, ...rawData.exclusive_og, ...rawData.divine, ...rawData.mythic, ...rawData.legendary, ...rawData.epic, ...rawData.rare_common]
};

let currentQuestions = [];
let currentIndex = 0;
let errorsCount = 0;
let correctCount = 0;
let quizTimer;
let answerDuration = 5;

// Запуск теста
function startQuiz() {
    const type = document.getElementById('test-type').value;
    const diff = document.getElementById('difficulty').value;
    
    currentQuestions = [...quizCategories[type]].sort(() => 0.5 - Math.random());
    
    [cite_start]// Установка сложности [cite: 17]
    if(diff === 'easy') answerDuration = 5;
    else if(diff === 'medium') answerDuration = 4;
    else if(diff === 'hard') answerDuration = 3;

    currentIndex = 0;
    errorsCount = 0;
    correctCount = 0;

    showScreen('quiz');
    nextQuestion();
}

// Переход к следующему вопросу
function nextQuestion() {
    if (currentIndex >= currentQuestions.length) {
        finishQuiz();
        return;
    }

    resetTimer();
    const q = currentQuestions[currentIndex];
    
    // Обновление интерфейса
    document.getElementById('question-img').src = q.img;
    document.getElementById('current-q').innerText = currentIndex + 1;
    document.getElementById('total-q').innerText = currentQuestions.length;
    
    // Плавная полоса прогресса ответов
    const progressPercent = (currentIndex / currentQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + '%';

    // Генерация 6 вариантов ответа
    const optionsGrid = document.getElementById('options');
    optionsGrid.innerHTML = '';
    
    let options = [q.name];
    const allNames = quizCategories.all.map(b => b.name);
    
    while(options.length < 6) {
        let randomName = allNames[Math.floor(Math.random() * allNames.length)];
        if(!options.includes(randomName)) options.push(randomName);
    }
    options.sort(() => 0.5 - Math.random());

    options.forEach(name => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = name;
        btn.onclick = () => handleAnswer(name);
        optionsGrid.appendChild(btn);
    });

    startTimer();
}

// Логика таймера (загрузочная полоса сверху)
function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    timerBar.style.transition = 'none';
    timerBar.style.width = '100%';
    
    // Запуск плавной анимации уменьшения
    setTimeout(() => {
        timerBar.style.transition = `width ${answerDuration}s linear`;
        timerBar.style.width = '0%';
    }, 50);

    quizTimer = setTimeout(() => {
        handleAnswer(null); // Автоматический неверный ответ по истечении времени
    }, answerDuration * 1000);
}

function resetTimer() {
    clearTimeout(quizTimer);
    const timerBar = document.getElementById('timer-bar');
    timerBar.style.transition = 'none';
    timerBar.style.width = '100%';
}

// Обработка ответа
function handleAnswer(selectedName) {
    resetTimer();
    const correctName = currentQuestions[currentIndex].name;

    if (selectedName === correctName) {
        correctCount++;
    } else {
        errorsCount++;
    }

    currentIndex++;
    nextQuestion();
}

// Завершение и расчет оценки
function finishQuiz() {
    const type = document.getElementById('test-type').value;
    const diff = document.getElementById('difficulty').value;
    const total = currentQuestions.length;
    const correctPercent = (correctCount / total) * 100;
    let grade = 2;

    if (type === 'all') {
        // Система оценки для общего теста (по количеству ошибок)
        if (diff === 'easy') {
            if (errorsCount === 0) grade = 5;
            else if (errorsCount === 1) grade = 4;
            else if (errorsCount === 2) grade = 3;
            else grade = 2;
        } else if (diff === 'medium') {
            if (errorsCount <= 1) grade = 5;
            else if (errorsCount === 2) grade = 4;
            else if (errorsCount === 3) grade = 3;
            else grade = 2;
        } else if (diff === 'hard') {
            if (errorsCount <= 2) grade = 5;
            else if (errorsCount === 3) grade = 4;
            else if (errorsCount === 4) grade = 3;
            else grade = 2;
        }
    } else {
        // Система оценки для остальных категорий (по процентам)
        if (diff === 'easy') {
            if (correctPercent >= 100) grade = 5;
            else if (correctPercent >= 98) grade = 4;
            else if (correctPercent >= 96) grade = 3;
            else grade = 2;
        } else if (diff === 'medium') {
            if (correctPercent >= 99) grade = 5;
            else if (correctPercent >= 97) grade = 4;
            else if (correctPercent >= 95) grade = 3;
            else grade = 2;
        } else if (diff === 'hard') {
            if (correctPercent >= 98) grade = 5;
            else if (correctPercent >= 96) grade = 4;
            else if (correctPercent >= 94) grade = 3;
            else grade = 2;
        }
    }

    document.getElementById('result-grade').innerText = `Ваша оценка: ${grade}`;
    document.getElementById('res-correct').innerText = correctCount;
    document.getElementById('res-errors').innerText = errorsCount;

    saveToHistory(type, diff, grade, correctCount, total);
    showScreen('result');
}

// Работа с локальным хранилищем (Статистика)
function saveToHistory(type, diff, grade, corr, tot) {
    let history = JSON.parse(localStorage.getItem('brainrot_results') || '[]');
    history.push({
        date: new Date().toLocaleString(),
        type: document.getElementById('test-type').options[document.getElementById('test-type').selectedIndex].text,
        diff,
        grade,
        score: `${corr}/${tot}`
    });
    localStorage.setItem('brainrot_results', JSON.stringify(history));
}

function showStats() {
    const history = JSON.parse(localStorage.getItem('brainrot_results') || '[]');
    const container = document.getElementById('stats-history');
    container.innerHTML = history.reverse().map(item => `
        <div class="history-item">
            <div><b>${item.date}</b></div>
            <div>${item.type} (${item.diff})</div>
            <div>Оценка: <span style="color: ${item.grade > 2 ? '#34C759' : '#FF3B30'}">${item.grade}</span> | Счет: ${item.score}</div>
        </div>
    `).join('');
    showScreen('stats');
}

function clearStats() {
    if(confirm('Очистить всю историю?')) {
        localStorage.removeItem('brainrot_results');
        showStats();
    }
}

// Утилиты экрана
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function hideStats() { showScreen('menu'); }