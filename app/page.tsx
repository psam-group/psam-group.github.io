"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const copy = {
  en: {
    nav: ["About", "Research", "People", "Projects", "Publications", "Contact"],
    eyebrow: "Plant science · Data · Modeling",
    title: <>Reading the signals<br />plants send under stress.</>,
    intro: "We combine plant physiology, advanced phenotyping and computational modeling to understand — and predict — how plants respond to a changing environment.",
    cta: "Explore our research",
    aff: "Institute of Plant Physiology and Genetics · Bulgarian Academy of Sciences",
    city: "Sofia, Bulgaria",
    aboutLabel: "About PSAM",
    aboutTitle: "Experimental insight meets computational power.",
    aboutText: "At the PSAM-Group, we investigate the complex mechanisms of abiotic stress in plants by combining experimental biophysics with advanced computational methods. Our goal is to understand, model, and predict plant responses to environmental challenges.",
    rl: "Core research areas",
    rt: "From plant response to predictive insight.",
    ri: "Four connected directions shape our work — from controlled experiments and physiological measurements to mathematical and data-driven prediction.",
    areas: [
      ["01", "Drought Stress Physiology in Plants", "We study the biophysical and physiological impacts of water deficit on wheat crops. By analyzing photosynthetic activity and stress markers, we aim to uncover the underlying mechanisms of drought tolerance and plant adaptation."],
      ["02", "Nutrient Deficiency Analysis", "Our experimental work extends to investigating plant responses to the lack of essential macro- and micronutrients. We assess how nutrient deprivation affects overall plant health, metabolism, and photosynthetic efficiency."],
      ["03", "Mathematical Modeling of Plant Stress", "We develop comprehensive mathematical models to simulate and quantify drought stress dynamics. These models translate biological processes into mathematical equations, enabling a deeper understanding of plant–environment interactions."],
      ["04", "AI and Predictive Analytics", "Leveraging Artificial Intelligence and Machine Learning, we build predictive models to estimate the severity and physiological effects of drought on wheat. This data-driven approach enables early stress detection, accurate forecasting, and improved agricultural decision-making."],
    ],
    pl: "People", pt: "A focused, interdisciplinary team.",
    roles: ["Plant physiology · Fluorescence · AI", "Plant stress physiology", "Photosynthesis · Stress biology", "Research associate"],
    ct: "Let’s study plant stress together.",
    cp: "We welcome research collaborations, shared experiments and conversations across plant physiology, phenotyping and data science.",
    write: "Contact the group",
    learnMore: "Learn more",
    detailLabel: "Drought stress physiology",
    detailTitle: "Drought tolerance and recovery in wheat",
    detailText: "In our most recent studies, we investigate the physiological and biophysical responses of different wheat varieties to severe drought and subsequent recovery. Using advanced methods such as chlorophyll a fluorescence analysis (OJIP transients) and thermoluminescence, we identified key biophysical markers of drought tolerance. We found that tolerant varieties, such as Katya, successfully preserve the functional and structural integrity of Photosystem II (PSII), maintain reaction-centre stability, and exhibit a rapid capacity for recovery. In contrast, sensitive varieties, such as Zora, experience persistent depletion of active reaction centres and impaired electron transport even after rehydration. Our analyses demonstrated that varietal differences under drought stress are localized in the earliest phase of photochemistry — the O–J phase. These findings provide valuable selection criteria for developing crops resilient to climate change.",
    detail2Label: "Nutrient deficiency analysis",
    detail2Title: "Non-invasive detection of nutrient limitations",
    detail2Text: "Our research investigates the impact of macro- and micronutrient deficiencies on crop performance using rapid, non-invasive biophysical techniques. By employing prompt chlorophyll a fluorescence (OJIP transients) and modulated reflection (MR820), we assess the functional integrity of Photosystems I and II in key agricultural plants such as maize, tomato, and bean. We have successfully identified element-specific fluorescence signatures; for example, manganese deficiency severely disrupts the oxygen-evolving complex, while copper limitation impairs downstream electron transport. Furthermore, by integrating JIP-test parameters with multivariate statistical models such as Principal Component Analysis (PCA), we have developed robust frameworks capable of differentiating specific nutrient limitations based on their distinct photosynthetic impairments. This combined approach serves as a powerful early-detection diagnostic tool for precision nutrient management and high-throughput stress phenotyping.",
    detail4Label: "AI and predictive analytics",
    detail4Title: "Identifying nutrient deficiency from fluorescence signals",
    detail4Text: "We developed a supervised feed-forward artificial neural network that uses prompt chlorophyll a fluorescence transients and JIP-test parameters to identify mineral nutrient deficiency in bean plants (Phaseolus vulgaris). Plants were grown hydroponically under controlled deficiencies of nitrogen, phosphorus, potassium, calcium, or iron. The recorded OJIP signals captured element-specific changes across the photosynthetic electron transport chain and provided a rapid, non-destructive fluorescence phenotype for machine learning.",
    detail4Result: "The network used backpropagation with Bayesian regularization, eight hidden neurons, and an optimal training duration of 800 epochs; 75% of the data were used for training and 25% for testing. When each deficiency was classified separately against control plants, total error ranged from 0% for phosphorus to 3.5% for iron — equivalent to 96.5–100% accuracy. A single six-class model produced substantially higher error (51.9%), showing that dedicated one-deficiency classifiers were the more reliable strategy in this dataset. The study demonstrates the potential of combining OJIP fluorescence and AI for fast, in vivo nutrient monitoring.",
  },
  bg: {
    nav: ["За нас", "Изследвания", "Екип", "Проекти", "Публикации", "Контакти"],
    eyebrow: "Растителна наука · Данни · Моделиране",
    title: <>Разчитаме сигналите,<br />които растенията изпращат при стрес.</>,
    intro: "Съчетаваме растителна физиология, съвременно фенотипиране и компютърно моделиране, за да разберем — и предвидим — реакциите на растенията към променящата се среда.",
    cta: "Вижте нашите изследвания",
    aff: "Институт по физиология на растенията и генетика · Българска академия на науките",
    city: "София, България",
    aboutLabel: "За PSAM",
    aboutTitle: "Експерименталният подход среща силата на изчислителните методи.",
    aboutText: "В PSAM-Group изследваме сложните механизми на абиотичния стрес при растенията, като съчетаваме експериментална биофизика със съвременни изчислителни методи. Нашата цел е да разбираме, моделираме и предвиждаме реакциите на растенията към предизвикателствата на околната среда.",
    rl: "Основни научни направления",
    rt: "От реакцията на растението до прогнозния модел.",
    ri: "Работата ни обединява четири свързани направления — от контролирани експерименти и физиологични измервания до математическо и основано на данни прогнозиране.",
    areas: [
      ["01", "Физиология на засушаването при растенията", "Изследваме биофизичните и физиологичните ефекти на водния дефицит при пшеница. Чрез анализ на фотосинтетичната активност и маркерите за стрес се стремим да разкрием механизмите на сухоустойчивостта и растителната адаптация."],
      ["02", "Анализ на хранителни дефицити", "Експерименталната ни работа включва реакциите на растенията при недостиг на основни макро- и микроелементи. Оценяваме как дефицитите влияят върху общото състояние, метаболизма и ефективността на фотосинтезата."],
      ["03", "Математическо моделиране на растителния стрес", "Разработваме цялостни математически модели за симулиране и количествено описание на динамиката на стреса от засушаване. Те превеждат биологичните процеси на езика на математическите уравнения и задълбочават разбирането за взаимодействията растение–среда."],
      ["04", "Изкуствен интелект и прогнозен анализ", "Използваме изкуствен интелект и машинно обучение за създаване на модели, които оценяват степента и физиологичните ефекти на засушаването при пшеница. Подходът позволява ранно откриване на стрес, надеждно прогнозиране и по-добри земеделски решения."],
    ],
    pl: "Екип", pt: "Фокусиран интердисциплинарен екип.",
    roles: ["Растителна физиология · Флуоресценция · AI", "Физиология на растителния стрес", "Фотосинтеза · Стресова биология", "Изследовател"],
    ct: "Нека изследваме растителния стрес заедно.",
    cp: "Отворени сме за научно сътрудничество, съвместни експерименти и обмен на идеи в растителната физиология, фенотипирането и анализа на данни.",
    write: "Свържете се с групата",
    learnMore: "Научете повече",
    detailLabel: "Физиология на засушаването",
    detailTitle: "Толерантност към засушаване и възстановяване при пшеница",
    detailText: "В нашите най-нови изследвания проучваме физиологичните и биофизичните реакции на различни сортове пшеница към тежко засушаване и последващо възстановяване. Използвайки съвременни методи като анализ на флуоресценцията на хлорофил a (OJIP транзиенти) и термолуминесценция, ние идентифицирахме ключови биофизични маркери за толерантност към суша. Установихме, че толерантните сортове, като Катя, успешно запазват функционалната и структурната цялост на Фотосистема II (PSII), поддържат стабилността на реакционните центрове и показват бърз капацитет за възстановяване. За разлика от тях, чувствителните сортове, като Зора, страдат от трайно изчерпване на активните реакционни центрове и нарушен електронен транспорт дори след рехидратация. Нашите анализи доказаха, че сортовите различия при стрес от засушаване са локализирани в най-ранната фаза на фотохимията — O–J фазата. Тези резултати предоставят ценни критерии за селекция на устойчиви на климатичните промени култури.",
    detail2Label: "Анализ на хранителни дефицити",
    detail2Title: "Неинвазивно разпознаване на хранителни ограничения",
    detail2Text: "Нашите изследвания проучват влиянието на дефицитите на макро- и микроелементи върху развитието на земеделските култури чрез бързи, неинвазивни биофизични методи. Посредством бърза флуоресценция на хлорофил a (OJIP транзиенти) и модулирано отражение (MR820) оценяваме функционалната цялост на Фотосистема I и Фотосистема II при важни култури като царевица, домати и фасул. Успешно идентифицирахме специфични за отделните елементи флуоресцентни сигнатури — например дефицитът на манган силно нарушава кислород-отделящия комплекс, докато ограниченото снабдяване с мед уврежда последващия електронен транспорт. Чрез интегриране на JIP-test параметри с многомерни статистически модели, като анализ на главните компоненти (PCA), разработихме устойчиви аналитични рамки, способни да разграничават конкретни хранителни дефицити въз основа на характерните им нарушения във фотосинтезата. Този комбиниран подход представлява мощен инструмент за ранна диагностика, прецизно управление на минералното хранене и високопроизводително фенотипиране на стреса.",
    detail4Label: "Изкуствен интелект и прогнозен анализ",
    detail4Title: "Разпознаване на хранителни дефицити чрез флуоресцентни сигнали",
    detail4Text: "Разработихме изкуствена невронна мрежа с обучение под надзор и право разпространение на сигнала, която използва бързи транзиенти на флуоресценцията на хлорофил a и JIP-test параметри за разпознаване на минерални дефицити при фасул (Phaseolus vulgaris). Растенията бяха отглеждани хидропонно при контролиран недостиг на азот, фосфор, калий, калций или желязо. Регистрираните OJIP сигнали отразиха специфични за отделните елементи промени във фотосинтетичната електрон-транспортна верига и осигуриха бърз, неразрушителен флуоресцентен фенотип за машинно обучение.",
    detail4Result: "Мрежата използва обратно разпространение на грешката с Байесова регуляризация, осем неврона в скрития слой и оптимална продължителност на обучението от 800 епохи; 75% от данните бяха използвани за обучение, а 25% — за тестване. При отделно разграничаване на всеки дефицит спрямо контролните растения общата грешка варира от 0% за фосфора до 3,5% за желязото, което съответства на точност 96,5–100%. Единният шесткласов модел показа значително по-висока грешка (51,9%), което доказва, че специализираните класификатори за отделните дефицити са по-надеждната стратегия за този набор от данни. Изследването показва потенциала на съчетаването на OJIP флуоресценция и AI за бърз in vivo мониторинг на минералното хранене.",
  },
};

const publications = [
  {
    year: "2026",
    month: "June",
    monthBg: "Юни",
    type: "Research article",
    typeBg: "Научна статия",
    title: "Non-invasive functional assessment of micronutrient deficiency stress in maize using chlorophyll a fluorescence and JIP-test analysis",
    source: "Agricultural Sciences 18(49), 57–73",
    doi: "10.22620/agrisci.2026.49.006",
    url: "https://doi.org/10.22620/agrisci.2026.49.006",
  },
  {
    year: "2026",
    month: "May",
    monthBg: "Май",
    type: "Research article",
    typeBg: "Научна статия",
    title: "Evaluating Photochemical Efficiency and Recovery Potential in Wheat Varieties with Divergent Drought Tolerance",
    source: "Agronomy 16(10), 944",
    doi: "10.3390/agronomy16100944",
    url: "https://doi.org/10.3390/agronomy16100944",
  },
  {
    year: "2024",
    month: "February",
    monthBg: "Февруари",
    type: "Book chapter",
    typeBg: "Глава от книга",
    title: "Nanoremediation: A New and Emerging Technology",
    source: "Phytoremediation and Biofortification: Strategies for Sustainable Environmental and Health Management · Chapter 2 · Apple Academic Press",
    doi: "10.1201/9781003402084-2",
    url: "https://doi.org/10.1201/9781003402084-2",
  },
  {
    year: "2022",
    month: "January",
    monthBg: "Януари",
    type: "Research article",
    typeBg: "Научна статия",
    title: "Identification of nutrient deficiency in plants by artificial intelligence",
    source: "Acta Physiologiae Plantarum 44(3) · Springer Nature",
    doi: "10.1007/s11738-022-03363-0",
    url: "https://doi.org/10.1007/s11738-022-03363-0",
  },
  {
    year: "2014",
    month: "November",
    monthBg: "Ноември",
    type: "Research article",
    typeBg: "Научна статия",
    title: "Deficiency of Some Nutrient Elements in Bean and Maize Plants Analyzed by Luminescent Method",
    source: "Bulgarian Journal of Agricultural Science 20(1)",
  },
];

const people = [
  {
    name: "Vladimir Aleksandrov",
    degree: "Assistant Professor, PhD",
    degreeBg: "Главен асистент, д-р",
    interests: "Phenotyping, photosynthesis, chlorophyll fluorescence, abiotic stress, photobiophysics, mathematical models of biological systems, nanobiology and bioinformatics.",
    interestsBg: "Фенотипиране, фотосинтеза, хлорофилна флуоресценция, абиотичен стрес, фотобиофизика, математически модели на биологични системи, нанобиология и биоинформатика.",
    link: "http://www.bio21.bas.bg/ippg/en/?page_id=1871",
  },
  {
    name: "Dilyana Doneva",
    degree: "Assistant Professor, PhD",
    degreeBg: "Главен асистент, д-р",
    interests: "Photosynthetic gas exchange, oxidative stress, antioxidant enzymes, and the effects of light quality on plant growth and development.",
    interestsBg: "Фотосинтетичен газообмен, оксидативен стрес, антиоксидантни ензими и влияние на качеството на светлината върху растежа и развитието на растенията.",
  },
  {
    name: "Violeta Peeva",
    degree: "Assistant Professor, PhD",
    degreeBg: "Главен асистент, д-р",
    interests: "Photosynthesis, photosynthetic electron transport, thermoluminescence, oxygen evolution, abiotic stress, its effects on photosynthetic processes, and biochemical and biophysical stress markers.",
    interestsBg: "Фотосинтеза, фотосинтетичен електронен транспорт, термолуминесценция, отделяне на кислород, абиотичен стрес и влиянието му върху фотосинтетичните процеси, биохимични и биофизични маркери за стрес.",
  },
  {
    name: "Alexander Angelov",
    degree: "Researcher",
    degreeBg: "Изследовател",
    interests: "Impact of stress-related factors on model systems, metabolomics, informatics methods implemented in biology, and analysis of biological data.",
    interestsBg: "Влияние на фактори, свързани със стреса, върху моделни системи, метаболомика, приложение на информатични методи в биологията и анализ на биологични данни.",
  },
];
function Mark(){return <div className="mark"><svg viewBox="0 0 48 48"><path d="M8 38C9 20 17 9 36 7c0 19-9 30-28 31Z"/><path d="M10 35c8-8 15-14 25-23M24 23l6 2M19 28l-1-7"/></svg><span><b>PSAM</b><small>GROUP</small></span></div>}

export default function Home(){
  const [lang,setLang]=useState<"en"|"bg">("en"); const t=copy[lang];
  const links=["#about","#research","#people","#projects","#publications","#contact"];
  return <main>
    <header><a href="#top"><Mark/></a><nav>{t.nav.map((n,i)=><a key={n} href={links[i]}>{n}</a>)}</nav><div className="lang"><button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>EN</button><span>/</span><button className={lang==="bg"?"active":""} onClick={()=>setLang("bg")}>BG</button></div></header>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="intro">{t.intro}</p><a className="cta" href="#about">{t.cta}<span>↘</span></a></div><div className="science-art"><span className="axis y">FLUORESCENCE INTENSITY</span><span className="axis x">TIME →</span><svg viewBox="0 0 620 520"><defs><linearGradient id="leaf"><stop stopColor="#c3ff55"/><stop offset="1" stopColor="#26a95b"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="8"/></filter></defs><path className="glow" d="M35 435C100 432 104 420 121 377S149 247 168 293 194 390 215 323 255 112 288 169 308 326 344 246 386 68 428 87 443 207 480 141 526 57 589 46"/><path className="curve" d="M35 435C100 432 104 420 121 377S149 247 168 293 194 390 215 323 255 112 288 169 308 326 344 246 386 68 428 87 443 207 480 141 526 57 589 46"/><path className="leaf" d="M319 427C351 295 435 232 578 219c-3 127-83 206-259 208Z"/><path className="vein" d="M331 415c58-60 119-113 229-176M424 323l72 10M386 359l-7-66"/></svg><div className="signal"><b>O–J–I–P</b><span>fast fluorescence transient</span></div></div><p className="affiliation">{t.aff}<br/>{t.city}</p></section>
    <section className="about" id="about"><p className="eyebrow">{t.aboutLabel}</p><div><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p></div></section>
    <section className="research" id="research"><div className="section-head"><p className="eyebrow">{t.rl}</p><h2>{t.rt}</h2><p>{t.ri}</p></div><div className="areas">{t.areas.map((a,index)=>{
      const detail = index === 0
        ? { label: t.detailLabel, title: t.detailTitle, text: t.detailText, result: null, tags: ["OJIP", "PSII", lang === "en" ? "Thermoluminescence" : "Термолуминесценция", lang === "en" ? "Rehydration" : "Рехидратация"] }
        : index === 1
          ? { label: t.detail2Label, title: t.detail2Title, text: t.detail2Text, result: null, tags: ["OJIP", "MR820", "JIP-test", "PCA", "PSI / PSII"] }
          : index === 3
            ? { label: t.detail4Label, title: t.detail4Title, text: t.detail4Text, result: t.detail4Result, tags: ["ANN", "OJIP", "JIP-test", "800 epochs", "8 hidden neurons"] }
            : null;
      return <article key={a[0]}><span>{a[0]}</span><h3>{a[1]}</h3><p>{a[2]}</p>{detail ? <Dialog><DialogTrigger asChild><button className="area-button">{t.learnMore}<span>↗</span></button></DialogTrigger><DialogContent className="research-dialog sm:max-w-4xl max-h-[85vh] overflow-y-auto rounded-none border-0 bg-[#f4f7f1] p-0"><div className="dialog-inner"><DialogHeader><DialogDescription className="dialog-label">{detail.label}</DialogDescription><DialogTitle className="dialog-title">{detail.title}</DialogTitle></DialogHeader><div className="detail-copy"><div className="detail-body"><p>{detail.text}</p>{detail.result && <p>{detail.result}</p>}{index === 3 && <a className="detail-source" href="https://doi.org/10.1007/s11738-022-03363-0" target="_blank" rel="noreferrer">{lang === "en" ? "Read the publication" : "Вижте публикацията"} ↗</a>}</div><div className="detail-methods">{detail.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></div></DialogContent></Dialog> : <i>↗</i>}</article>
    })}</div></section>
    <section className="team" id="people"><p className="eyebrow">{t.pl}</p><h2>{t.pt}</h2><div className="people">{people.map((p)=><article key={p.name}><div className="portrait"><span>{p.name.split(" ").map(x=>x[0]).join("")}</span></div><h3>{p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.name} ↗</a> : p.name}</h3><p className="position">{lang === "en" ? p.degree : p.degreeBg}</p><p className="interest-label">{lang === "en" ? "Professional interests" : "Професионални интереси"}</p><p className="interests">{lang === "en" ? p.interests : p.interestsBg}</p></article>)}</div></section>
    <section className="projects" id="projects"><div className="projects-head"><p className="eyebrow">{lang === "en" ? "Current project" : "Текущ проект"}</p><h2>{lang === "en" ? "Research in progress." : "Изследвания в развитие."}</h2><p>{lang === "en" ? "Our current funded work connects experimental plant physiology with mathematical modeling and artificial intelligence." : "Настоящата ни проектна работа свързва експерименталната растителна физиология с математическото моделиране и изкуствения интелект."}</p></div><article className="project-card"><div className="project-number"><span>{lang === "en" ? "Project No." : "Проект №"}</span><b>КП-06-Н81/1</b></div><div className="project-main"><span className="project-status">{lang === "en" ? "Funded research · Since December 2024" : "Финансиран научен проект · От декември 2024 г."}</span><h3>{lang === "en" ? "Mathematical models and the use of artificial intelligence for analysis of the photosynthetic apparatus of wheat plants under conditions of stress as a result of drought and lack of nutrients" : "Математически модели и използване на изкуствен интелект за анализ на фотосинтетичния апарат на пшенични растения при условия на стрес в резултат на засушаване и недостиг на хранителни елементи"}</h3><div className="project-meta"><div><span>{lang === "en" ? "Funding organisation" : "Финансираща организация"}</span><b>{lang === "en" ? "Bulgarian National Science Fund" : "Фонд „Научни изследвания“"}</b></div><div><span>{lang === "en" ? "Project leader" : "Ръководител"}</span><b>{lang === "en" ? "Vladimir Aleksandrov, PhD" : "д-р Владимир Александров"}</b></div></div></div></article></section>
    <section className="publications" id="publications"><div className="publications-head"><p className="eyebrow">{lang === "en" ? "Selected publications" : "Избрани публикации"}</p><h2>{lang === "en" ? "Research, published." : "Публикувани изследвания."}</h2><p>{lang === "en" ? "A selection of work spanning plant stress physiology, fluorescence-based diagnostics, artificial intelligence and environmental applications." : "Подбрани разработки в областта на растителния стрес, флуоресцентната диагностика, изкуствения интелект и приложенията за околната среда."}</p></div><div className="publication-list">{publications.map((p)=><article key={p.title}><div className="pub-date"><b>{p.year}</b><span>{lang === "en" ? p.month : p.monthBg}</span></div><div className="pub-copy"><span className="pub-type">{lang === "en" ? p.type : p.typeBg}</span><h3>{p.title}</h3><p>{p.source}</p>{p.doi && <small>DOI: {p.doi}</small>}</div>{p.url ? <a className="pub-link" href={p.url} target="_blank" rel="noreferrer" aria-label={"Open " + p.title}>↗</a> : <span className="pub-link muted">—</span>}</article>)}</div></section>
    <section className="contact" id="contact"><div><p className="eyebrow">PSAM × COLLABORATION</p><h2>{t.ct}</h2><p className="contact-intro">{t.cp}</p></div><div className="contact-details"><div><span>{lang === "en" ? "Institution" : "Институция"}</span><p>{lang === "en" ? "Institute of Plant Physiology and Genetics, Bulgarian Academy of Sciences" : "Институт по физиология на растенията и генетика, Българска академия на науките"}</p></div><div><span>{lang === "en" ? "Address" : "Адрес"}</span><a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x40aa85d0722fffff:0x625154d7eb32ad37?sa=X&ved=1t:8290&ictx=111" target="_blank" rel="noreferrer">{lang === "en" ? 'Block 21, Geo Milev, ul. "Akad. Georgi Bonchev", 1113 Sofia, Bulgaria' : 'Блок 21, кв. Гео Милев, ул. „Акад. Георги Бончев“, 1113 София, България'} ↗</a></div><div><span>{lang === "en" ? "Email" : "Електронна поща"}</span><a href="mailto:aleksandrov@gbg.bg">aleksandrov@gbg.bg ↗</a></div></div></section><footer><Mark/><p>© 2026 PSAM-Group<br/>IPPG · BAS</p><a href="#top">Back to top ↑</a></footer>
  </main>
}
