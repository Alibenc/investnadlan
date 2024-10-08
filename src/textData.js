import avatar1 from "./assets/Reviews/1.jpeg";
import avatar2 from "./assets/Reviews/2.jpeg";
import avatar3 from "./assets/Reviews/3.jpeg";
import avatar4 from "./assets/Reviews/4.webp";
import avatar5 from "./assets/Reviews/5.webp";
import avatar6 from "./assets/Reviews/6.jpeg";

const textData = {
  rus: {
    header: {
      menu: [
        ["#home" ,"Главная"], 
        ["#how-work","Как это работает"], 
        ["#steps", "Пошаговый план"],
        ["#feedback", "Консультация"],
        ["#about", "О нас"],
        ["#portfolio", "Примеры объектов"],
      ]
    },

    mainSection: ["ИНВЕСТИЦИИ В", "НЕДВИЖИМОСТЬ ХАЙФЫ"],

    adventages: ["Активные инвесторы", "Действующие проекты", "Необходимый капитал", "Рентабельность"],
    
    textBlock: {
      title: "Почему Хайфа лучший город для инвестиций",
      list: [
        ["Экономическое развитие:", " Экономическое развитие: Хайфа является третьим по величине городом в Израиле и важным экономическим центром. Здесь расположены высокотехнологичные компании, университеты и научные центры. Это привлекает профессионалов и студентов, создавая стабильный спрос на жилье. За последние несколько лет цены на недвижимость в Хайфе ростут на 5-7% ежегодно, что свидетельствует о привлекательности города для инвесторов."],
        ["Инфраструктура и транспорт:", " Город имеет развитую инфраструктуру, включая порты, железнодорожные и автобусные маршруты, которые обеспечивают удобное сообщение с другими частями страны. Планируемое расширение линий железной дороги и улучшение дорог, дополнительно увеличит привлекательность региона. Средняя цена за квадратный метр жилья в Хайфе составляет примерно 15,000-20,000 шекелей (около 4,500-6,000 долларов США), Для сравнения, в Тель-Авиве цены могут быть значительно выше, достигая 30,000-40,000 шекелей за квадратный метр."],
        ["Культура и туризм:", " Хайфа известна своими культурными и историческими достопримечательностями, такими как Бахайские сады, музеи и культурные мероприятия. Это привлекает туристов и поддерживает спрос на краткосрочную аренду жилья. Средняя цена аренды квартиры для туристов через платформы вроде Айфль составляет около 100-150 долларов за ночь."],
        ["Разнообразие и мультикультурализм:", " Хайфа славится своим мультикультурным обществом, где мирно сосуществуют люди разных национальностей и религий. Это делает город привлекательным для разных групп населения и инвесторов."],
        ["Близость к морю:", " Хайфа расположена на побережье Средиземного моря, что делает его привлекательным местом для жизни. Наличие пляжей и морских видов повышает ценность недвижимости в приморских районах."],
        
        ["Высокая доходность рынка недвижимости:", " В последние годы рынок недвижимости в Хайфе демонстрирует стабильный рост. Спрос на жилье поддерживается не только местными жителями, но и иностранными инвесторами, что способствует повышению стоимости недвижимости. Уровень вакантности жилья в Хайфе составляет около 2-3%, что говорит о высоком спросе на арендуемую недвижимость."],
      ]
    },

    howWork: {
      title: "Как это работает?",
      button: "Заказать консультацию",
      content: {
        title: "Параметры для расчета",
        text: "Давайте возьмем пример, что вы купили трехкомнатную квартиру стоимостью 850 000 шек с целью разделить ее на 3 однокомнатные квартиры. В этом случае, ипотека может составлять 75% от стоимости квартиры — 637 500 шек, ваше личное участие при взятии машканты — 25% от стоимости квартиры — 212 500 шек. По нашему опыту, затраты на переоборудование квартиры на 3 отдельных включая мебель, необходимая сантехника и бытовые приборы — 220 000 шек"
      },
      statistic: {
        title: "Квартира 3 комнаты — 850 000 шек",
        percents: ["Доля инвестора 25 % от стоимости 212.500 шек", "Ипотека 75% от стоимости 637.500 шек"]
      }
    },

    profitability: {
      title: "Ваша доходность",
      subTitle: "После деления квартиры на три, каждая квартира сдается посуточно",
      button: "Заказать консультацию",
      rent: [
        ["1. Аренда первой квартиры", "Прибыль с аренды первой квартиры: 3200 шек в месяц"],
        ["2. Аренда второй квартиры", "Прибыль с аренды второй квартиры: 3000 шек в месяц"],
        ["3. Аренда третьей квартиры.", "Прибыль с аренды третьей квартиры: 2800 шек в месяц"],
        ["4. Расходы в месяц:", "Комунальные услуги 500 шек и возврат ипотеки 3500 шек"],
      ],
      profit: {
        title: "Сумма чистой прибыли",
        list: [
          "1. 212.500 шек личное участие в покупке + 220.000шек (переоборудование квартиры, покупка техники) =432.500 шек",
          "2. Доход от сдачи трех квартир в аренду = 3200+3000+2800= 9000 шек",
          "3. Вычет расходов на комунальные услуги 500 и 3500 возврат ипотеки 9000-500-3500 = 5000 шек сумма чистой прибыли в месяц.",
          "4. 5000 шек*12 (год)=60.000шек в год"
        ]
      },
      attachment: [
        "Вложение 432.500 шек принесет 13.8% прибыли в год!",
        "212.500 шек покупка + 250000 переоборудование",
      ]
    },

    steps: {
      title: "Пошаговый план действий"
    },

    objects: {
      title: "Примеры наших объектов",
      items: [
        {
          title: "Хайфа", 
          text: ["Стоимость квартиры — 850 000 шек", "Размер машканты — 637 500 шек", "Личное участие — 362 500 шек", "Стоимость ремонта для разделения на 2 жилых единицы + мебель и электротовары — 180 000 шек", "Стоимость аренды (посуточно) за месяц — 6800 шек", "Средняя рентабельность — 10.5%"]
        },
        {
          title: "Хайфа", 
          text: ["Стоимость квартиры — 700 000 шек", "Размер машканты — 525 500 шек", "Личное участие — 325 000 шек", "Стоимость ремонта для разделения на 2 жилых единицы + мебель и электротовары — 180 000 шек", "Стоимость аренды (посуточно) в месяц — 6200 шек", "Средняя рентабельность — 15.9%"]
        },
        {
          title: "Хайфа", 
          text: ["Стоимость квартиры — 1 000 000 шек", "Размер машканты — 1 000 000 шек", "Личное участие — 450 000 шек", "Стоимость ремонта для разделения на 3 жилых единицы + мебель и электротовары — 250 000 шек", "Стоимость аренды (посуточно) в месяц — 8700 шек", "Средняя рентабельность — 10.4%"]
        },

        {
          title: "Хайфа", 
          text: ["Цена недвижимости: 850 000 (ниже рыночной цены 70 000)", "Реновация разделения на 2:200 000", "Аренда: 5800", "Cобственный капитал 412 500 (ипотека 637 500) ", "Рентабельность капитала: 8,2%", "Доходность от аренды: 6,6%", "Ежемесячный положительный поток 2800 шекелей в месяц", "Освобождение от налога на покупку и повышение стоимости. Ожидаемая прибыль 200 000 шекелей."]
        },
        {
          title: "Хайфа", 
          text: ["Цена недвижимости: 820 000 (ниже рыночной цены 50 000)", "Реновация разделения на 2:200 000", "Аренда: 5600", "Собственный капитал 405 000 (ипотека 615 000)", "Рентабельность капитала: 8%", "Доходность от аренды: 6,6%", "Ежемесячный положительный поток 2700 шекелей в месяц ", "Освобождение от налога на покупку и повышение стоимости. Ожидаемая прибыль 200 000 шекелей."]
        },
      ],
    },

    reviews: {
      title: "Отзывы",
      list: [
        {name: "Ицхак", photo: avatar1, status: "Ришон-ле-Цион", text: "Работа с компанией была настоящим удовольствием! В течение двух недель они нашли идеальную квартиру для инвестиций. С их помощью удалось существенно снизить цену, и мы купили квартиру значительно ниже рыночной стоимости. После ремонта и разделения на несколько единиц жилья, доход от аренды стал очень высоким. Профессионализм и эффективность компании впечатляют. Рекомендую всем!"},
        {name: "Давид", photo: avatar2, status: "Хайфа", text: "Купил квартиру у компании для инвестиций и не пожалел. Ремонт выполнен идеально, квартиру разделили на несколько маленьких квартир, которые теперь приносят отличный доход. Ребята знают своё дело, всё на высшем уровне. Рекомендую!"},
        {name: "Алекс", photo: avatar5, status: "Тель-Авив", text: "Я купил квартиру для инвестиций у компании , и это было лучшее решение. Ремонт был выполнен на высоком уровне, и квартиру разделили на несколько единиц жилья. Теперь я сдаю их в аренду и получаю стабильный доход. Очень доволен профессионализмом и оперативностью компании!"},
        {name: "Сара", photo: avatar4, status: "Хайфа", text: "Компания превзошла все мои ожидания! Купила у них квартиру для инвестиций, и они сделали шикарный ремонт. Разделили квартиру на несколько студий, которые я теперь сдаю в аренду. Доход значительно превысил мои прогнозы. Рекомендую всем инвесторам!"},
        {name: "Моше", photo: avatar3, status: "Иерусалим", text: "Инвестировал в квартиру через компанию , и это был великолепный выбор. После ремонта и разделения квартиры на несколько единиц жилья, доход от аренды превысил все мои ожидания. Работа выполнена качественно и в срок. Отличная компания для инвестиций!"},
        {name: "Леа", photo: avatar6, status: "Нетания", text: 'С помощью компании нашла абсолютно "убитую" квартиру для инвестиций. Они мне сделали потрясающий ремонт в моей инвестиционной квартире. Разделили на несколько единиц жилья, это позволило сдавать каждую в аренду отдельно, что дало возможность значительно увеличить мой доход. Очень довольна профессиональным подходом и вниманием к деталям.'},
      ]
    },

    about: {
      title: "Почему мы",
      text: "Наша компания начала свой путь 12 лет назад, когда мы впервые вложили свои средства в недвижимость. Этот шаг стал началом успешного пути в мире инвестиций. Мы не просто покупаем недвижимость — мы делаем это умно. Мы изучили рынок, нашли самые выгодные предложения и выбрали районы, где сдача в аренду приносит максимальную прибыль. Мы научились покупать объекты по ценам ниже рыночных, и этот подход принес нам заслуженный успех. Теперь мы делимся своим опытом с другими. Наша компания стала надежным партнером для тех, кто хочет выгодно инвестировать в недвижимость. Мы берем на себя все заботы: от поиска и покупки до сдачи в аренду. Мы уверены в успехе и доказываем это делом. Пока ваша недвижимость не сдана, мы выплачиваем вам арендную плату, что гарантирует вам стабильный доход и уверенность в завтрашнем дне. Присоединяйтесь к нам и сделайте первый шаг к успешным инвестициям вместе с нами - вашим надежным партнером. Генеральный директор компании Илан Чеботарь. Компания является франшизой всемирно известной сети Римакс и занимает ведущее место среди риэлторских агентств Хайфы.",
    },

    feedback: {
      title: ["У вас еще остались", "вопросы?"],
      placeholderName: "Введите имя",
      placeholderPhone: "Телефон",
      text: "Заполните форму, и наш специалист вернется к вам в ближайщее время! Так же, можете позвонить нам по номеру: ",
      close: "Закрыть",
      success: "Ваше обращение отправлено",
      sendError: "Произошла ошибка. Попробуйте позже",
      error: "Заполните все поля!",
      send: "Отправить",
    }
  },
  israel: {
    header: {
      menu: [
        ["#home" , "עמוד הבית"], 
        ["#how-work", "איך זה עובד"], 
        ["#steps", "תוכנית רב-שלבית"],
        ["#feedback", "ייעוץ"],
        ["#about", "אודותינו"],
        ["#portfolio", "נכסים לדוגמה"],
      ]
    },

    mainSection: ["השקעות", `בנדל"ן בחיפה`],

    adventages: ["משקיעים פעילים", "פרויקטים שוטפים", "הון נדרש", "הון נדרש"],
    
    textBlock: {
      title: `מדוע חיפה היא העיר הטובה ביותר להשקעות`,
      list: [
        ["התפתחות כלכלית:", ` חיפה הנה העיר השלישית בגודלה בישראל ומרכז כלכלי חשוב. כאן ממוקמות חברות High-Tech, אוניברסיטאות ומוסדות מחקר. לאור זאת העיר מושכת אליה מומחים וסטודנטים כאחד ונוצר ביקוש קבוע לנדל"ן. במהלך מספר השנים האחרונות עלו מחירי הדיור בחיפה ב 5-7% לשנה, מה שמעיד על אטרקטיביות העיר בעיני המשקיעים.`],
        ["תשתיות ותחבורה:", ` לעיר תשתית מפותחת, שכוללת את הנמל, נתיבי אוטובוסים ורכבת, מה שמבטיח תחבורה נוחה לכל חלקי הארץ. ההרחבה המתוכננת של מסלולי הרכבת ושדרוג הכבישים צפויים לעלות את הביקוש באזור. עלות ממוצעת למ"ר דיור בחיפה הנה 15000-20000 ₪ למ"ר (כ4500-6000 דולר ארה"ב). לשם השוואה, המחירים בתל אביב יכולים להיות אף גבוהים יותר ולהגיע ל30000-40000 ₪ למ"ר.`],
        ["תיירות ותרבות:", ` חיפה ידועה באתרי היסטוריה ומוסדות תרבות, כגון הגנים הבהאיים, מוזיאונים ואירועי תרבות שונים. זה מושך לעיר תיירים ובונה את הביקוש להשכרת דיור לתקופות קצרות. שכר הדירה הממוצע לתיירים באתרים כגון Airbnb הנו 100-*150 דולר ללילה.`],
        ["מגוון ורב-תרבותיות:", ` חיפה מתאפיינת בחברה רב תרבותית בה חיים בדו-קיום בני דתות שונות ממוצא שונה. בשל כך העיר מהווה מוקד משיכה עבור קבוצות אוכלוסייה שונות וכן עבור משקיעים.`],
        ["הקרבה לים:", ` חיפה נמצאת על חוף הים התיכון, מה שהופך אותה למקום טוב להתגורר בו. גישה לחוף הים והנוף הימי מעלים את שווי הנדל"ן באזורים שקרובים לים.`],
        [`רווחיות גבוהה בשוק הנדל"ן:`, ` בשנים האחרונות שוק הנדל"ן בחיפה מתאפיין בשיעור צמיחה יציב. הביקוש לדיור נובע לא רק מתושבי המקום אלא גם ממשקיעים מחו"ל, מה שתורם לצמיחת מחירי הנדל"ן. שיעור זמינות הדיור בחיפה הנו כ2-3%, מה שמעיד על ביקוש גבוה להשכרת נכסים.`],
      ]
    },

    howWork: {
      title: "איך זה עובד",
      button: "הזמנת ייעוץ",
      content: {
        title: "נתוני החישוב",
        text: "נניח לדוגמא כי רכשתם דירה בת 3 חדרים במחיר 850000 ₪ בכוונה לחלקה ל3 דירות חדר. במקרה כזה המשכנתא יכולה להוות 75% מהעלות הדירה - 637500 ₪, הון עצמי במעמד לקיחת משכנתא מסתכם ב25% מסך העלות - 212500 ₪. לפי ניסיוננו עלויות אבזור הדירה לצורך הפיכתה ל3 יח' דיור נפרדות, כולל ריהוט, אינסטלציה ומכשירים ביתיים מסתכמת ב250000 ₪."
      },
      statistic: {
        title: "דירה 3 חדרים - 850000 ₪",
        percents: ["השתתפות המשקיע הנה 25% מסך העלות - 212500 ₪", "המשכנתא 75% מהעלות - 637500 ₪"]
      }
    },

    profitability: {
      title: "הרווח שלכם",
      subTitle: "לאחר החלוקה לשלוש יחידות, כל יחידת דיור מושכרת על בסיס יומי",
      button: "הזמנת ייעוץ",
      rent: [
        ["1. השכרת הדירה הראשונ", "הרווח מהשכרת הדירה הראשונה: 3200 ₪ לחודש"],
        ["2. השכרת הדירה השנייה", "הרווח מהשכרת הדירה השנייה: 3000 ₪ לחודש"],
        ["3. השכרת הדירה השלישית", "הרווח מהשכרת הדירה שלישית: 2800 ₪ לחודש"],
        ["4. הוצאות חודשיות", "הוצאות החזקה 500 ₪ והחזר משכנתא 3500 ₪"],
      ],
      profit: {
        title: "סך רווח נקי",
        list: [
          "1. 212500 – השתתפות אישית בקנייה+220000 ₪ (אבזור מחדש של הדירה, רכישת מכשור ביתי) = 432500 ₪.",
          "2. הכנסות מהשכרת שלושת הדירות 3200+3000+2800=9000 ₪.",
          '3. הפחתת עלויות החזקה (500 ₪) והחזר משכנתא (3500 ₪) 9000-500-3500=5000. סה"כ 5000 ₪ רווח נקי בחודש.',
          "4. 5000 ₪ כפול 12 (חודשים בשנה) = 60000 ₪ לשנה"
        ]
      },
      attachment: [
        "השקעה בת 432500 ₪ מובילה ל13.8% רווח שנתי!",
        "212500 ₪ קנייה+250000 ₪ אבזור מחדש.",
      ]
    },

    steps: {
      title: "תוכנית רב-שלבית"
    },

    objects: {
      title: "דוגמאות לחפצים שלנו",
      items: [
        {
          title: "חיפה", 
          text: ["עלות הדירה – 850.000  ₪", "סך המשכנתא – 637.500   ₪", "הון אישי – 362.500   ₪ ", "עלות השיפוץ וחלוקה ל2 יח' דיור – 180.000   ₪", "מחיר שכירות (על בסיס יומי) לחודש – 6.800 ₪", "רווחיות ממוצעת 10.5%"]
        },
        {
          title: "חיפה", 
          text: ["עלות הדירה – 700.000 ₪", "סך המשכנתא – 525.500 ₪", "הון אישי – 325.000 ₪", "עלות השיפוץ וחלוקה ל2 יח' דיור – 180.000 ₪ ", "מחיר שכירות (על בסיס יומי) לחודש – 6.200 ₪ ", "רווחיות ממוצעת 15.9%"]
        },
        {
          title: "חיפה", 
          text: ["עלות הדירה – 1.000.000 ₪", "עלות הדירה – 1.000.000 ₪", "הון אישי – 450.000 ₪ ", "עלות השיפוץ וחלוקה ל3 יח' דיור – 250.000 ₪ ", "מחיר שכירות (על בסיס יומי) לחודש – 8.700 ₪ ", "רווחיות ממוצעת 10.4%"]
        },

        {
          title: "חיפה", 
          text: ["דירה להשקעה בחיפה !!!", "מחיר הנכס : -850,000 (מתחת למחיר שוק 70,000 ) ", "שיפוץ חלוקה ל-2: 200,000", "שכירות:5800", "הון עצמי 412,500 (משכנתא 637,500)", "תשואה על ההון העצמי : 8.2%", "תשואה על ההשכרה : 6.6%", "תזרים חיובי חודשי של 2800 שח בחודש ", "פטור ממס רכישה ושבח . רווח צפוי 200,000 שח."]
        },
        {
          title: "חיפה", 
          text: ["דירה להשקעה בחיפה !!!", "מחיר הנכס : -820,000 (מתחת למחיר שוק 50,000 )", "שיפוץ חלוקה ל-2: 200,000", "שכירות:5600", "הון עצמי 405,000 (משכנתא 615,000)", "תשואה על ההון העצמי : 8%", "תשואה על ההשכרה : 6.6%", "תזרים חיובי חודשי של 2700 שח בחודש ", "פטור ממס רכישה ושבח . רווח צפוי 200,000 שח."]
        },
      ],
    },

    reviews: {
      title: "ביקורות",
      list: [
        {name: "יצחק", photo: avatar1, status: "ראשון לציון", text: "העבודה עם החברה הייתה תענוג אמיתי! תוך שבועיים הם מצאו דירה מושלמת להשקעה. בעזרתם הצלחנו להוריד משמעותית את המחיר וקנינו את הדירה במחיר נמוך בהרבה מהמחירים בשוק. לאחר השיפוץ והחלוקה למספר יחידות דיור ההכנסה מהשכירות הייתה גבוהה מאד. המקצוענות והיעילות של החברה מרשימות מאד. ממליץ לכולם!"},
        {name: "דוד", photo: avatar2, status: "חיפה", text: "קניתי דירה להשקעה דרך החברה ואני לא מתחרט. השיפוץ מושלם, הדירה מחולקת למספר יחידות קטנות שעכשיו מניבות הכנסה מצוינת. החברה' יודעים את העבודה, הכול ברמה הכי גבוהה. ממליץ!"},
        {name: "אלכס", photo: avatar5, status: "תל אביב", text: "קניתי דירה להשקעה דרך החברה וזו הייתה החלטה הטובה ביותר. השיפוץ בוצע ברמה גבוהה, את הדירה חילקנו למספר יחידות. כיום אני משכיר אותן ומקבל הכנסה יציבה. מאד מרוצה מהמקצועיות והיעילות של החברה!"},
        {name: "שרה", photo: avatar4, status: "חיפה", text:  "החברה עלתה על כל ציפיותיי! קניתי דרכם דירה להשקעה והם עשו שיפוץ מדהים. חילקו את הדירה לכמה דירות סטודיו שאני משכירה עכשיו. ההכנסה עולה משמעותית על הציפיות שלי. ממליצה לכל המשקיעים!"},
        {name: "משה", photo: avatar3, status: "ירושלים", text:"השקעתי בדירה דרך החברה וזו הייתה החלטה מצוינת. לאחר השיפוץ וחלוקת הדירה לכמה יחידות דיור ההכנסה עלתה על כל הציפיות. העבודה בוצעה באיכות ותזמון מושלמים. חברה מצוינת להשקעות!"},
        {name: "לאה", photo: avatar6, status: "נתניה", text: 'בעזרת החברה מצאתי דירה "גמורה" לחלוטין להשקעה. הם עשו לי שיפוץ מדהים בדירה להשקעה וחילקו אותה לכמה יחידות דיור. זה מאפשר להשכיר כל דירה בנפרד ולהגדיל משמעותית את ההכנסה שלי. מאד מרוצה מהגישה המקצועית ותשומת לב לפרטים.'},
      ]
    },

    about: {
      title: "למה אנחנו?",
      text: `החברה שלנו החלה את דרכה לפני 12 שנה כשלראשונה השקענו בנדל"ן. צעד זה היה הראשון בדרכנו להצלחה בעולם ההשקעות. אנו לא רק רוכשים נדל"ן – אנו עושים זאת באופן מושכל. למדנו את השוק, איתרנו את ההצעות הכדאיות ביותר, בחרנו את האזורים בהם השכרת הנדל"ן מניבה את הרווח המקסימלי. למדנו לרכוש נכסים במחיר שנמוך ממחיר השוק הודות לגישה זו זכינו להצלחה. כיום אנו חולקים את ניסיוננו עם אחרים. החברה שלנו הפכה לשותפה אמינה עבור אלו שמעוניינים בהשקעה כדאית בנדל"ן. אנו לוקחים על עצמנו את כל הטרחה: החל מחיפוש ורכישת הנכס וכלה בהשכרתו. אנו בטוחים בהצלחתנו ומוכיחים זאת הלכה למעשה. כל עוד הנכס שלכם לא מושכר, אנו משלמים את שכר הדירה, מה שיעניק לכם הכנסה קבועה ובטחון בעתידכם הכלכלי. הצטרפו אלינו ועשו את הצעד הראשון להשקעה כדאית איתנו – שותפיכם הנאמנים. מנכ"ל החברה, הוא אילן צ'בוטר. החברה הנה זכיינית של הרשת הכלל עולמית RE/MAX ונמנית על הסוכנויות נדל"ן המובילות בחיפה.`,
    },

    feedback: {
      title: ["נותרו לכם", "שאלות?"],
      placeholderName: "הזינו שם",
      placeholderPhone: "טלפון",
      text: "מלאו את הטופס והמומחה שלנו יחזור אליכם בקרוב! ניתן גם להתקשר למספר: ",
      close: "סגור",
      success: "תודה על פנייתך",
      sendError: "שגיאה!  נסה מאוחר יותר",
      error: "אין פרטים לעדכון",
      send: "שלח",
    }
  },
}

export default textData;