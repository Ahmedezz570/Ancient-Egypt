"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.timeline": "Timeline",
    "nav.ancientEgypt": "Ancient Egypt",
    
    // Hero
    "hero.title": "Ancient Egyptian Civilization",
    "hero.subtitle": "Journey through 3,000 years of magnificent history, art, and the legacy of the pharaohs",
    "hero.exploreHistory": "Explore History",
    "hero.sites": "Archaeological Sites",
    
    // History Section
    "history.title": "The History of Ancient Egypt",
    "history.subtitle": "One of the world's oldest and most influential civilizations",
    "history.kingdom.title": "The Kingdom of the Nile",
    "history.kingdom.text": "Ancient Egypt thrived along the Nile River for over 3,000 years, from approximately 3100 BCE to 30 BCE. The civilization was divided into three major periods: the Old Kingdom (known for pyramid construction), the Middle Kingdom (a period of cultural renaissance), and the New Kingdom (the era of greatest expansion and power).",
    "history.legacy.title": "Achievements & Legacy",
    "history.legacy.text": "The ancient Egyptians developed one of the first writing systems, created monumental architecture that still stands today, and made significant advances in mathematics, medicine, and engineering. Their religious beliefs and burial practices, including mummification, reveal a sophisticated culture deeply concerned with the afterlife.",
    
    // Art Section
    "art.title": "Egyptian Art & Culture",
    "art.hieroglyphics.title": "Hieroglyphics: The Sacred Script",
    "art.hieroglyphics.text": "Ancient Egyptian writing combined logographic and alphabetic elements, with over 700 distinct characters. These beautiful symbols adorned temple walls, tombs, and papyrus scrolls, recording everything from religious texts to daily accounts.",
    "art.architecture.title": "Art & Architecture",
    "art.architecture.text": "Egyptian art followed strict conventions for over 3,000 years, depicting figures in a distinctive style that combined profile and frontal views. Their architecture—from massive pyramids to intricate temples—demonstrated advanced engineering knowledge and an obsession with permanence and the divine.",
    "art.religion.title": "Religious Beliefs",
    "art.religion.text": "Ancient Egyptians believed in a complex pantheon of gods and goddesses, with Ra (the sun god), Osiris (god of the afterlife), and Isis (goddess of magic) among the most important. Their elaborate burial practices and construction of monumental tombs reflected their strong belief in the afterlife.",
    
    // Pharaohs
    "pharaohs.title": "Famous Pharaohs",
    "pharaohs.subtitle": "The divine rulers who shaped one of history's greatest civilizations",
    "pharaohs.tutankhamun.title": "The Boy King",
    "pharaohs.tutankhamun.reign": "c. 1332–1323 BCE",
    "pharaohs.tutankhamun.text": "Famous for his intact tomb discovered in 1922, revealing treasures that captivated the world. Though his reign was short, his golden death mask became an iconic symbol of Ancient Egypt.",
    "pharaohs.cleopatra.title": "The Last Pharaoh",
    "pharaohs.cleopatra.reign": "51–30 BCE",
    "pharaohs.cleopatra.text": "The final ruler of Ptolemaic Egypt, known for her intelligence, political acumen, and relationships with Julius Caesar and Mark Antony. Her death marked the end of Ancient Egyptian independence.",
    "pharaohs.ramesses.title": "The Great Builder",
    "pharaohs.ramesses.reign": "c. 1279–1213 BCE",
    "pharaohs.ramesses.text": "One of Egypt's most powerful pharaohs, known for his military campaigns, extensive building projects including Abu Simbel, and extraordinarily long reign of 66 years.",
    "pharaohs.reign": "Reign:",
    
    // Sites
    "sites.title": "Archaeological Sites",
    "sites.subtitle": "Explore the magnificent monuments that have survived millennia",
    "sites.giza.name": "Pyramids of Giza",
    "sites.giza.location": "Giza Plateau",
    "sites.giza.text": "The last surviving wonder of the ancient world, including the Great Pyramid of Khufu, one of the most iconic structures ever built. These magnificent tombs have stood for over 4,500 years.",
    "sites.karnak.name": "Karnak Temple Complex",
    "sites.karnak.location": "Luxor",
    "sites.karnak.text": "One of the largest religious complexes ever constructed, dedicated primarily to Amun-Ra. The massive hypostyle hall with 134 enormous columns is a breathtaking example of ancient engineering.",
    "sites.abuSimbel.name": "Abu Simbel Temples",
    "sites.abuSimbel.location": "Aswan",
    "sites.abuSimbel.text": "Carved into a mountainside by Ramesses II, featuring four colossal 20-meter statues of the pharaoh. The temples were relocated in the 1960s to save them from flooding by Lake Nasser.",
    
    // Footer
    "footer.tagline": "Exploring the magnificent legacy of one of humanity's greatest civilizations",
    "footer.rights": "Ancient Egyptian Civilization. Educational Resource.",
    
    // Timeline
    "timeline.title": "Timeline of Ancient Egypt",
    "timeline.subtitle": "Journey through 3,000 years of Egyptian civilization, from the unification of the kingdoms to the age of the Ptolemies",
    "timeline.highlights": "Key Highlights:",
    "timeline.summary": "Over three millennia, Ancient Egypt rose from a collection of settlements along the Nile to become one of history's most powerful and culturally rich civilizations. From the monumental pyramids of the Old Kingdom to the cosmopolitan splendor of Ptolemaic Alexandria, Egyptian civilization left an indelible mark on human history that continues to fascinate us today.",
    
    // Timeline periods
    "period.earlyDynastic": "Early Dynastic Period",
    "period.earlyDynastic.years": "c. 3100–2686 BCE",
    "period.earlyDynastic.dynasties": "Dynasties 1–2",
    "period.earlyDynastic.h1": "Unification of Upper and Lower Egypt under King Narmer",
    "period.earlyDynastic.h2": "Establishment of Memphis as the capital",
    "period.earlyDynastic.h3": "Development of hieroglyphic writing",
    "period.earlyDynastic.h4": "First mastaba tombs constructed",
    
    "period.oldKingdom": "Old Kingdom",
    "period.oldKingdom.years": "c. 2686–2181 BCE",
    "period.oldKingdom.dynasties": "Dynasties 3–6",
    "period.oldKingdom.h1": "The 'Age of the Pyramids' - construction of the Great Pyramids at Giza",
    "period.oldKingdom.h2": "Reign of Khufu, Khafre, and Menkaure",
    "period.oldKingdom.h3": "Development of sun worship and the cult of Ra",
    "period.oldKingdom.h4": "Peak of pyramid construction techniques",
    
    "period.firstIntermediate": "First Intermediate Period",
    "period.firstIntermediate.years": "c. 2181–2055 BCE",
    "period.firstIntermediate.dynasties": "Dynasties 7–11",
    "period.firstIntermediate.h1": "Political fragmentation and civil strife",
    "period.firstIntermediate.h2": "Decline of centralized power",
    "period.firstIntermediate.h3": "Regional rulers (nomarchs) gain independence",
    "period.firstIntermediate.h4": "Economic hardship and cultural disruption",
    
    "period.middleKingdom": "Middle Kingdom",
    "period.middleKingdom.years": "c. 2055–1650 BCE",
    "period.middleKingdom.dynasties": "Dynasties 11–13",
    "period.middleKingdom.h1": "Reunification under Mentuhotep II",
    "period.middleKingdom.h2": "Classical period of Egyptian literature and art",
    "period.middleKingdom.h3": "Expansion into Nubia",
    "period.middleKingdom.h4": "Construction of fortresses and irrigation systems",
    
    "period.secondIntermediate": "Second Intermediate Period",
    "period.secondIntermediate.years": "c. 1650–1550 BCE",
    "period.secondIntermediate.dynasties": "Dynasties 13–17",
    "period.secondIntermediate.h1": "Hyksos invasion and rule of Lower Egypt",
    "period.secondIntermediate.h2": "Introduction of new military technology (horse-drawn chariots)",
    "period.secondIntermediate.h3": "Theban dynasty maintains control in Upper Egypt",
    "period.secondIntermediate.h4": "Cultural exchange with Near Eastern civilizations",
    
    "period.newKingdom": "New Kingdom",
    "period.newKingdom.years": "c. 1550–1077 BCE",
    "period.newKingdom.dynasties": "Dynasties 18–20",
    "period.newKingdom.h1": "Egypt's imperial age - greatest territorial expansion",
    "period.newKingdom.h2": "Reign of famous pharaohs: Hatshepsut, Akhenaten, Tutankhamun, Ramesses II",
    "period.newKingdom.h3": "Construction of Valley of the Kings and Queens",
    "period.newKingdom.h4": "Peak of Egyptian power and wealth",
    "period.newKingdom.h5": "Amarna Period and religious revolution",
    
    "period.thirdIntermediate": "Third Intermediate Period",
    "period.thirdIntermediate.years": "c. 1077–664 BCE",
    "period.thirdIntermediate.dynasties": "Dynasties 21–25",
    "period.thirdIntermediate.h1": "Political fragmentation with multiple rulers",
    "period.thirdIntermediate.h2": "Libyan and Nubian dynasties",
    "period.thirdIntermediate.h3": "Decline of centralized authority",
    "period.thirdIntermediate.h4": "Brief cultural renaissance under Nubian pharaohs",
    
    "period.late": "Late Period",
    "period.late.years": "c. 664–332 BCE",
    "period.late.dynasties": "Dynasties 26–31",
    "period.late.h1": "Saite Renaissance - revival of Old Kingdom art and culture",
    "period.late.h2": "Persian conquests and occupations",
    "period.late.h3": "Last native Egyptian dynasties",
    "period.late.h4": "Increasing Greek influence and settlements",
    
    "period.ptolemaic": "Ptolemaic Period",
    "period.ptolemaic.years": "332–30 BCE",
    "period.ptolemaic.dynasties": "Macedonian/Ptolemaic Dynasty",
    "period.ptolemaic.h1": "Greek rule following Alexander the Great's conquest",
    "period.ptolemaic.h2": "Foundation of Alexandria and its Great Library",
    "period.ptolemaic.h3": "Fusion of Greek and Egyptian cultures",
    "period.ptolemaic.h4": "Reign of Cleopatra VII, the last pharaoh",
    "period.ptolemaic.h5": "Roman conquest ends Egyptian independence",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.timeline": "الخط الزمني",
    "nav.ancientEgypt": "مصر القديمة",
    
    // Hero
    "hero.title": "الحضارة المصرية القديمة",
    "hero.subtitle": "رحلة عبر 3000 عام من التاريخ العظيم والفن وإرث الفراعنة",
    "hero.exploreHistory": "استكشف التاريخ",
    "hero.sites": "المواقع الأثرية",
    
    // History Section
    "history.title": "تاريخ مصر القديمة",
    "history.subtitle": "واحدة من أقدم وأعظم حضارات العالم تأثيراً",
    "history.kingdom.title": "مملكة النيل",
    "history.kingdom.text": "ازدهرت مصر القديمة على ضفاف نهر النيل لأكثر من 3000 عام، من حوالي 3100 قبل الميلاد إلى 30 قبل الميلاد. انقسمت الحضارة إلى ثلاث فترات رئيسية: المملكة القديمة (المعروفة ببناء الأهرامات)، والمملكة الوسطى (فترة النهضة الثقافية)، والمملكة الحديثة (عصر أعظم توسع وقوة).",
    "history.legacy.title": "الإنجازات والإرث",
    "history.legacy.text": "طور المصريون القدماء أحد أول أنظمة الكتابة، وأنشأوا عمارة ضخمة لا تزال قائمة حتى اليوم، وحققوا تقدماً كبيراً في الرياضيات والطب والهندسة. كشفت معتقداتهم الدينية وممارسات الدفن، بما في ذلك التحنيط، عن ثقافة متطورة مهتمة بشدة بالحياة الآخرة.",
    
    // Art Section
    "art.title": "الفن والثقافة المصرية",
    "art.hieroglyphics.title": "الهيروغليفية: الكتابة المقدسة",
    "art.hieroglyphics.text": "جمعت الكتابة المصرية القديمة بين العناصر التصويرية والأبجدية، مع أكثر من 700 حرف مميز. زينت هذه الرموز الجميلة جدران المعابد والمقابر ولفائف البردي، وسجلت كل شيء من النصوص الدينية إلى الحسابات اليومية.",
    "art.architecture.title": "الفن والعمارة",
    "art.architecture.text": "اتبع الفن المصري قواعد صارمة لأكثر من 3000 عام، حيث صور الشخصيات بأسلوب مميز يجمع بين المنظر الجانبي والأمامي. أظهرت عمارتهم - من الأهرامات الضخمة إلى المعابد المعقدة - معرفة هندسية متقدمة وهوساً بالخلود والإلهي.",
    "art.religion.title": "المعتقدات الدينية",
    "art.religion.text": "آمن المصريون القدماء بمجموعة معقدة من الآلهة والإلهات، مع رع (إله الشمس) وأوزيريس (إله الحياة الآخرة) وإيزيس (إلهة السحر) من بين الأكثر أهمية. عكست ممارسات الدفن المتقنة وبناء المقابر الضخمة إيمانهم القوي بالحياة الآخرة.",
    
    // Pharaohs
    "pharaohs.title": "الفراعنة المشهورون",
    "pharaohs.subtitle": "الحكام الإلهيون الذين شكلوا واحدة من أعظم حضارات التاريخ",
    "pharaohs.tutankhamun.title": "الملك الصبي",
    "pharaohs.tutankhamun.reign": "حوالي 1332-1323 قبل الميلاد",
    "pharaohs.tutankhamun.text": "مشهور بمقبرته السليمة التي اكتشفت عام 1922، كاشفة عن كنوز أسرت العالم. على الرغم من أن حكمه كان قصيراً، إلا أن قناعه الذهبي أصبح رمزاً شهيراً لمصر القديمة.",
    "pharaohs.cleopatra.title": "آخر الفراعنة",
    "pharaohs.cleopatra.reign": "51-30 قبل الميلاد",
    "pharaohs.cleopatra.text": "آخر حاكمة لمصر البطلمية، معروفة بذكائها وفطنتها السياسية وعلاقاتها مع يوليوس قيصر ومارك أنطونيو. كانت وفاتها نهاية استقلال مصر القديمة.",
    "pharaohs.ramesses.title": "البناء العظيم",
    "pharaohs.ramesses.reign": "حوالي 1279-1213 قبل الميلاد",
    "pharaohs.ramesses.text": "أحد أقوى فراعنة مصر، معروف بحملاته العسكرية ومشاريع البناء الواسعة بما في ذلك أبو سمبل، وحكمه الطويل بشكل استثنائي لمدة 66 عاماً.",
    "pharaohs.reign": "فترة الحكم:",
    
    // Sites
    "sites.title": "المواقع الأثرية",
    "sites.subtitle": "استكشف الآثار العظيمة التي نجت عبر آلاف السنين",
    "sites.giza.name": "أهرامات الجيزة",
    "sites.giza.location": "هضبة الجيزة",
    "sites.giza.text": "آخر عجائب الدنيا القديمة الباقية، بما في ذلك هرم خوفو الأكبر، أحد أكثر المباني شهرة على الإطلاق. وقفت هذه المقابر الرائعة لأكثر من 4500 عام.",
    "sites.karnak.name": "معبد الكرنك",
    "sites.karnak.location": "الأقصر",
    "sites.karnak.text": "واحد من أكبر المجمعات الدينية المبنية على الإطلاق، مكرس بشكل أساسي لآمون رع. القاعة الضخمة ذات الأعمدة مع 134 عموداً هائلاً هي مثال مذهل على الهندسة القديمة.",
    "sites.abuSimbel.name": "معابد أبو سمبل",
    "sites.abuSimbel.location": "أسوان",
    "sites.abuSimbel.text": "منحوتة في جبل بواسطة رمسيس الثاني، تضم أربعة تماثيل ضخمة بارتفاع 20 متراً للفرعون. نُقلت المعابد في الستينيات لإنقاذها من الغرق ببحيرة ناصر.",
    
    // Footer
    "footer.tagline": "استكشاف الإرث الرائع لواحدة من أعظم حضارات البشرية",
    "footer.rights": "الحضارة المصرية القديمة. مورد تعليمي.",
    
    // Timeline
    "timeline.title": "الخط الزمني لمصر القديمة",
    "timeline.subtitle": "رحلة عبر 3000 عام من الحضارة المصرية، من توحيد الممالك إلى عصر البطالمة",
    "timeline.highlights": "أبرز الأحداث:",
    "timeline.summary": "على مدى ثلاثة آلاف عام، نهضت مصر القديمة من مجموعة من المستوطنات على طول نهر النيل لتصبح واحدة من أقوى الحضارات وأكثرها ثراءً ثقافياً في التاريخ. من أهرامات المملكة القديمة الضخمة إلى روعة الإسكندرية البطلمية الكوزموبوليتانية، تركت الحضارة المصرية علامة لا تمحى على التاريخ البشري تستمر في إبهارنا حتى اليوم.",
    
    // Timeline periods
    "period.earlyDynastic": "العصر الأسري المبكر",
    "period.earlyDynastic.years": "حوالي 3100-2686 قبل الميلاد",
    "period.earlyDynastic.dynasties": "الأسرات 1-2",
    "period.earlyDynastic.h1": "توحيد مصر العليا والسفلى تحت حكم الملك نارمر",
    "period.earlyDynastic.h2": "تأسيس منف كعاصمة",
    "period.earlyDynastic.h3": "تطوير الكتابة الهيروغليفية",
    "period.earlyDynastic.h4": "بناء أول مقابر المصاطب",
    
    "period.oldKingdom": "المملكة القديمة",
    "period.oldKingdom.years": "حوالي 2686-2181 قبل الميلاد",
    "period.oldKingdom.dynasties": "الأسرات 3-6",
    "period.oldKingdom.h1": "عصر الأهرامات - بناء الأهرامات العظيمة في الجيزة",
    "period.oldKingdom.h2": "حكم خوفو وخفرع ومنقرع",
    "period.oldKingdom.h3": "تطور عبادة الشمس وعبادة رع",
    "period.oldKingdom.h4": "ذروة تقنيات بناء الأهرامات",
    
    "period.firstIntermediate": "الفترة الانتقالية الأولى",
    "period.firstIntermediate.years": "حوالي 2181-2055 قبل الميلاد",
    "period.firstIntermediate.dynasties": "الأسرات 7-11",
    "period.firstIntermediate.h1": "التفتت السياسي والصراعات الأهلية",
    "period.firstIntermediate.h2": "تراجع السلطة المركزية",
    "period.firstIntermediate.h3": "الحكام الإقليميون يكتسبون الاستقلال",
    "period.firstIntermediate.h4": "الصعوبات الاقتصادية والاضطرابات الثقافية",
    
    "period.middleKingdom": "المملكة الوسطى",
    "period.middleKingdom.years": "حوالي 2055-1650 قبل الميلاد",
    "period.middleKingdom.dynasties": "الأسرات 11-13",
    "period.middleKingdom.h1": "إعادة التوحيد تحت منتوحتب الثاني",
    "period.middleKingdom.h2": "الفترة الكلاسيكية للأدب والفن المصري",
    "period.middleKingdom.h3": "التوسع في النوبة",
    "period.middleKingdom.h4": "بناء الحصون وأنظمة الري",
    
    "period.secondIntermediate": "الفترة الانتقالية الثانية",
    "period.secondIntermediate.years": "حوالي 1650-1550 قبل الميلاد",
    "period.secondIntermediate.dynasties": "الأسرات 13-17",
    "period.secondIntermediate.h1": "غزو الهكسوس وحكم مصر السفلى",
    "period.secondIntermediate.h2": "إدخال تقنيات عسكرية جديدة (العربات التي تجرها الخيول)",
    "period.secondIntermediate.h3": "الأسرة الطيبية تحافظ على السيطرة في مصر العليا",
    "period.secondIntermediate.h4": "التبادل الثقافي مع حضارات الشرق الأدنى",
    
    "period.newKingdom": "المملكة الحديثة",
    "period.newKingdom.years": "حوالي 1550-1077 قبل الميلاد",
    "period.newKingdom.dynasties": "الأسرات 18-20",
    "period.newKingdom.h1": "العصر الإمبراطوري لمصر - أعظم توسع إقليمي",
    "period.newKingdom.h2": "حكم الفراعنة المشهورين: حتشبسوت وأخناتون وتوت عنخ آمون ورمسيس الثاني",
    "period.newKingdom.h3": "بناء وادي الملوك والملكات",
    "period.newKingdom.h4": "ذروة القوة والثروة المصرية",
    "period.newKingdom.h5": "فترة العمارنة والثورة الدينية",
    
    "period.thirdIntermediate": "الفترة الانتقالية الثالثة",
    "period.thirdIntermediate.years": "حوالي 1077-664 قبل الميلاد",
    "period.thirdIntermediate.dynasties": "الأسرات 21-25",
    "period.thirdIntermediate.h1": "التفتت السياسي مع حكام متعددين",
    "period.thirdIntermediate.h2": "الأسرات الليبية والنوبية",
    "period.thirdIntermediate.h3": "تراجع السلطة المركزية",
    "period.thirdIntermediate.h4": "نهضة ثقافية قصيرة تحت الفراعنة النوبيين",
    
    "period.late": "العصر المتأخر",
    "period.late.years": "حوالي 664-332 قبل الميلاد",
    "period.late.dynasties": "الأسرات 26-31",
    "period.late.h1": "نهضة سايس - إحياء فن وثقافة المملكة القديمة",
    "period.late.h2": "الفتوحات والاحتلالات الفارسية",
    "period.late.h3": "آخر الأسرات المصرية الأصلية",
    "period.late.h4": "تزايد النفوذ اليوناني والمستوطنات",
    
    "period.ptolemaic": "العصر البطلمي",
    "period.ptolemaic.years": "332-30 قبل الميلاد",
    "period.ptolemaic.dynasties": "الأسرة المقدونية/البطلمية",
    "period.ptolemaic.h1": "الحكم اليوناني بعد غزو الإسكندر الأكبر",
    "period.ptolemaic.h2": "تأسيس الإسكندرية ومكتبتها العظيمة",
    "period.ptolemaic.h3": "اندماج الثقافتين اليونانية والمصرية",
    "period.ptolemaic.h4": "حكم كليوباترا السابعة، آخر فرعون",
    "period.ptolemaic.h5": "الفتح الروماني ينهي استقلال مصر",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};