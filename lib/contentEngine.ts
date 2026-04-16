import { services as allServices } from './data';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

const dictionaries = {
  ar: {
    fillers: [
      "عندما تعاني من آلام المفاصل المزمنة، فإن الاستلقاء على الأريكة للراحة هو في الغالب أسوأ قرار يمكن أن تتخذه لجسمك. يتركز نهجنا السريري بالكامل على اكتشاف السبب الدقيق لتصلب عضلاتك في المقام الأول، بدلاً من مجرد إعطائك بعض تمارين الإطالة البسيطة. نحن نخصص الوقت لتقييم عاداتك اليومية، وطريقة جلوسك في المكتب، وإصاباتك القديمة، لأن هذه التفاصيل الصغيرة تشير دائماً مباشرة إلى أصل المشكلة.",
      "الألم هو مجرد إشارة إلى أن الأنسجة العميقة لا تتحرك بشكل صحيح. باستخدام العلاج اليدوي الموجه، يقوم كبار المتخصصين لدينا جسدياً بتحرير التوتر المحتجز داخل مفاصلك المتصلبة وعضلاتك المقيدة. هذا النهج اليدوي يقلل التورم فوراً ويساعد الدم على حمل الأكسجين النقي مباشرة إلى المنطقة المتضررة حيث يحدث الشفاء بشكل طبيعي.",
      "إعادتك إلى ممارسة حياتك الطبيعية بسرعة هي أولويتنا القصوى، ولكننا نرفض تماماً تجاهل الأساسيات أثناء رحلة علاجك. الاستعجال يضمن فقط عودة الإصابة بشكل أسوأ في الموسم القادم. بدلاً من ذلك، نقوم تدريجياً بتقديم تمارين تحميل أوزان آمنة بمجرد انخفاض الألم الأولي. بناء قوة حقيقية موضعياً حول مفاصلك المتضررة هو الطريقة الوحيدة والمضمونة لإيقاف الانتكاسات المستقبلية نهائياً.",
      "يأتي الكثير من المرضى مباشرة إلى عياداتنا بعد فشلهم في الحصول على أي نتائج حقيقية من استخدام الكمادات الساخنة والتمارين الرياضية العامة. العلاجات السلبية تبدو جيدة نظرياً، لكنها ببساطة لا تتعمق بما يكفي لتفتيت الأنسجة الندبية المتصلبة وتحرير المفاصل المنغلقة. أنت بحاجة إلى خبير يعرف بالضبط كيفية تطبيق الضغط الجسدي المباشر لتعديل عمودك الفقري ومفاصلك الطرفية وإعادتها إلى مسارها الطبيعي بأمان.",
      "إذا لم تتضمن خطة علاجك جهداً وبناءً للعضلات، فأنت تترك نفسك عرضة لأضرار مستقبلية بصورة كبيرة. تتطلب الأوتار والأربطة المصابة ضغطاً تدريجياً وقوياً للتكيف والشفاء بشكل صحيح. هذا يعني أنه بمجرد إزالة السبب الرئيسي للألم، سيدفعك فريقنا لتحميل المفصل ضمن نطاق حركة كامل وآمن. نحن نبني مرونة حقيقية داخل جسدك.",
      "من المستحيل بصراحة إصلاح سنوات من الوضعيات الخاطئة والأضرار الرياضية في موعد واحد مدته عشرين دقيقة. الانتصار في هذه المعركة يتطلب النظر إلى كيفية جلوسك على كرسي مكتبك، وكيف تنام، وكيف تتعامل مع ضغوط يومك. نجلس معك ونضع نظام تصحيح يومي متكامل لكل مريض لضمان الحفاظ على النتائج التي نحققها في العيادة بسهولة داخل غرفة معيشتك.",
      "نحن لا نكتفي بتقديم جلسات تدليك عابرة. يستخدم فريقنا أحدث الأدوات السريرية مقترنة بمعالجة يدوية دقيقة للمفاصل لتحقيق نتائج سريعة وجادة وحقيقية لكل مريض يعبر من أبوابنا. الهدف النهائي هو التأكد من أنك لن تضطر أبداً للعودة إلى العيادة مرة أخرى بسبب نفس الإصابة. نريد أن نمنحك الاستقلالية الجسدية الكاملة والثقة المطلقة في قدرة جسدك على الحركة.",
      "أثبتت سنوات من العمل مع الحالات المعقدة أن الجلوس والانتظار على أمل أن يختفي الألم من تلقاء نفسه هو أسوأ قرار ممكن أن تتخذه. التدخل المبكر يوقف تدهور العضلات فوراً ويقلل من فترة التعافي الإجمالية بشكل كبير. المبادرة والحصول على تشخيص صحيح في اليوم الأول يضعك مباشرة على مسار واضح لعيش حياة نشطة خالية من الألم تماماً."
    ],
    getAnchorTexts: (svc: string) => [
      `زيارة عيادتنا المخصصة في تقنيات ${svc}`,
      `حجز استشارة متخصصة لتلقي ${svc}`,
      `الحصول على تقييم دقيق عبر خبراء ${svc}`,
      `فهم سبب أهمية ${svc} لضمان التعافي السريع`
    ],
    imgAlt: (token: string, context: string) => `تدخلات عيادية وخبرات في ${token} متوفرة محلياً في ${context}`,
    imgTitle: (token: string, context: string) => `أفضل صور التشخيص لـ ${token} للمرضى في ${context}`,
    imgCaption: (token: string, context: string) => `تشخيص وتأهيل متقدم لـ ${token} مطبق بكفاءة لتلبية متطلبات المرضى في محافظة ${context}.`,
    pModifiers: {
      0: (token: string) => ` من أجلك في مجال ${token}`,
      2: (token: string) => ` تحت إشراف ${token}`,
      10: (token: string) => `خبراء متميزون في تقديم ${token}`,
      11: (token: string) => ` إن العثور على مقدمي خدمة ممتازين في ${token} يثبت فعالية هذا العلاج تماماً.`,
      12: (token: string) => ` ويتفق كل ${token} متخصص مع هذا النهج لتحقيق أقصى استفادة طبية.`,
      13: (token: string) => ` إن سرعة الوصول إلى ${token} تصنع الفارق الحقيقي في نتائج التعافي.`
    }
  },
  en: {
    fillers: [
      "When you are dealing with chronic joint pain, resting on the couch is usually the last thing your body actually needs. Our clinical approach focuses entirely on finding out exactly why your muscles are tightening up in the first place, rather than just handing out basic stretches. We spend the time evaluating your daily habits, desk setup, and old injuries because those small details always point straight to the root of the problem.",
      "Pain is just a signal that something deeper in your tissues is not moving correctly. By using targeted, hands on manual therapy, our senior staff physically release the tension trapped within your stiff joints and restricted muscles. This hands on approach immediately brings down the swelling and helps your blood carry fresh oxygen straight into the damaged area where healing actually takes place natively and naturally.",
      "Getting you back on your feet quickly is our absolute priority, but we refuse to cut corners during your recovery. Rushing the process only guarantees that the injury will come back worse next season. Instead, we slowly introduce safe, heavy load bearing exercises as soon as the initial pain drops off. Building real strength locally around your damaged joints is the only guaranteed way to stop future flare ups permanently.",
      "A lot of patients come straight to our clinics after failing to get any real results with basic heat packs and generic gym routines. Passive treatments look great on paper, but they simply do not dig deep enough to break apart thick scar tissue and locked joints. You need an expert who knows exactly how to apply direct physical pressure to safely manipulate your spine and peripheral joints back into their correct natural alignment.",
      "If your recovery plan does not push you to sweat and build muscle, you are leaving yourself incredibly vulnerable to future damage. Injured tendons and ligaments require serious, progressive stress to adapt and heal correctly. This means that once we clear the painful blocks, our team will force you to load the joint through a full, heavy range of motion safely. We build actual resilience inside your body.",
      "It is honestly impossible to fix years of awful posture and sports damage in a single twenty minute appointment. Winning this battle requires looking at how you sit in your office chair, how you sleep, and how you carry stress. We sit down and outline a complete, day to day habit correction system for every patient to guarantee that the results we get in the clinic are maintained easily in your own living room.",
      "We don't settle for basic massages. Our team uses modern clinical tools combined with aggressive joint manipulation to get serious, fast results for every single patient walking through our doors. The ultimate goal is to make sure you never have to come back to the clinic again for the same injury. We want to give you back total physical independence and complete confidence in your own body's ability to move.",
      "Years of working with severe cases have proven that waiting around hoping the pain goes away is the worst possible decision you can make. Early intervention stops muscle breakdown in its tracks and drastically cuts down your overall recovery time. Reaching out and getting a correct diagnosis on day one puts you immediately on a straightforward path to living a completely pain free, active life again."
    ],
    getAnchorTexts: (svc: string) => [
      `visiting our local ${svc} clinic`,
      `booking a consultation for ${svc}`,
      `getting a proper assessment through ${svc} specialists`,
      `understanding why ${svc} is essential for recovery`
    ],
    imgAlt: (token: string, context: string) => `Exclusive ${token} interventions located within ${context}`,
    imgTitle: (token: string, context: string) => `Top rated ${token} diagnostic imagery for ${context}`,
    imgCaption: (token: string, context: string) => `Advanced ${token} diagnostics applied natively for patients inside the ${context} governorate.`,
    pModifiers: {
      0: (token: string) => ` for ${token}`,
      2: (token: string) => ` with a ${token}`,
      10: (token: string) => `${token} Specialists`,
      11: (token: string) => ` Finding excellent ${token} providers proves this works.`,
      12: (token: string) => ` Every knowledgeable ${token} agrees with this approach.`,
      13: (token: string) => ` Getting fast access to ${token} makes all the difference.`
    }
  }
};

function buildSiloLink(cityContext: string, lang: 'en' | 'ar'): string {
  const targetService = allServices[Math.floor(Math.random() * allServices.length)];
  const linkPath = `/${lang}/${cityContext.toLowerCase()}/${targetService}`;
  const svcClean = targetService.replace(/-/g, ' ');

  const texts = dictionaries[lang].getAnchorTexts(svcClean);
  const anchorText = texts[Math.floor(Math.random() * texts.length)];
  return ` <a href="${linkPath}" style="color:var(--brand);text-decoration:underline;font-weight:600;">${anchorText}</a> `;
}

function buildSemanticImage(cityContext: string, primaryToken: string, lang: 'en' | 'ar'): string {
   const cleanToken = primaryToken.replace(/-/g, ' ');
   const rawSvc = primaryToken.split(" ")[0] || ""; // Extracted fallback from strings
   const cleanCity = cityContext.toLowerCase();
   
   // We will construct the dynamic image path. 
   // The DALL-E generation script uses: {city}-{service}.png
   // Since primaryToken here might be "sports-rehabilitation treatment in oman", we use raw metadata if possible.
   // For now, we will link the direct src and let the front-end handle fallback if 404s.
   
   const dynamicImgName = `${cleanCity}-${primaryToken.replace(/ /g, '-').replace(/-(treatment-oman|oman|في-عمان|treatment|تأهيل|علاج)/g, '')}.png`;
   const imgUrl = `/assets/generated/${dynamicImgName}`;
   
   // Using a JS fallback (onerror="this.src='/assets/clinical-rehab.png'") to guarantee no broken images while DALL-E script propagates.
   return `
    <figure class="seo-semantic-image" style="margin: 3.5rem 0; text-align: center; border-radius: 12px; overflow: hidden; background: var(--bg-color); border: 1px solid var(--glass-border); padding: 1.5rem; box-shadow: 0 10px 40px rgba(0,0,0,0.05);">
      <img src="${imgUrl}" onerror="this.onerror=null; this.src='/assets/clinical-rehab.png'" alt="${dictionaries[lang].imgAlt(cleanToken, cityContext)}" title="${dictionaries[lang].imgTitle(cleanToken, cityContext)}" loading="lazy" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; box-shadow: 0 8px 30px rgba(0,0,0,0.2);" />
      <figcaption style="padding-top: 1.5rem; font-size: 1rem; color: var(--text-muted); font-style: italic; font-weight: 500;">${dictionaries[lang].imgCaption(cleanToken, cityContext)}</figcaption>
    </figure>
   `;
}

function generateMassiveContent(
  titles: string[],
  primaryToken: string,
  primaryCount: number,
  physioToken: string,
  physioCount: number,
  nearMeToken: string,
  nearMeCount: number,
  cityContext: string,
  lang: 'en' | 'ar'
): ContentSection[] {
  let pInjected = 0;
  let phInjected = 0;
  let nmInjected = 0;
  const d = dictionaries[lang];

  return titles.map((headingText, index) => {
    let finalHeading = headingText;
    if (index === 0 || index === 4 || index === 8) {
      if (pInjected < primaryCount) { finalHeading += d.pModifiers[0](primaryToken); pInjected++; }
    } else if (index === 2 || index === 6) {
      if (phInjected < physioCount) { finalHeading += d.pModifiers[2](physioToken); phInjected++; }
    } else if (index === 10) {
      if (nmInjected < nearMeCount) { finalHeading = d.pModifiers[10](nearMeToken); nmInjected++; }
    }

    const pars = [0, 1, 2, 3].map(pIndex => {
      let base = d.fillers[(index * 4 + pIndex) % d.fillers.length];
      
      if (pIndex === 1 && pInjected < primaryCount) { base += d.pModifiers[11](primaryToken); pInjected++; }
      if (pIndex === 2 && phInjected < physioCount) { base += d.pModifiers[12](physioToken); phInjected++; }
      if (pIndex === 3 && nmInjected < nearMeCount) { base += d.pModifiers[13](nearMeToken); nmInjected++; }

      if (pIndex === 0 || pIndex === 2) {
        if (Math.random() > 0.6) {
           base += buildSiloLink(cityContext, lang);
        }
      }
      return base;
    });

    if (index === 3 || index === 7) {
       pars.push(buildSemanticImage(cityContext, primaryToken, lang));
    }

    return { heading: finalHeading, paragraphs: pars };
  });
}

// ==========================================
// 1. CONDITION PAGES 
// ==========================================
export function generateConditionContent(condition: string, lang: 'en' | 'ar'): ContentSection[] {
  const cleanStr = condition.replace(/-/g, ' ').toLowerCase();
  
  if (lang === 'ar') {
    return generateMassiveContent([
      `تحديد السبب الكامن والدقيق وراء ألمك المستمر`, `كيف تؤدي التشنجات العضلية إلى تفاقم وضعك بشكل أكبر`, `لماذا يؤدي الجلوس لفترات طويلة على الأريكة إلى نتائج عكسية`, `خطة التعافي المكونة من أربع خطوات واضحة ومبسطة`, `الحصول على علاج يدوي مباشر من كبار المتخصصين`, `لماذا يحدث الشفاء بشكل أسرع مع تحسين تدفق الدم`, `بناء قوة حقيقية ومستدامة لضمان عدم التعرض للإصابة مجدداً`, `إصلاح عادات النوم الخاطئة والوضعية السيئة أثناء العمل`, `طرق فعالة وحقيقية لضمان عدم عودة هذا الألم مرة أخرى`, `سجلنا الحافل والموثوق في التعامل مع تلف المفاصل الصعب`, `نظرة أعمق على فعالية جلسات العلاج بالموجات التصادمية`, `ترتيب إجراء تقييم شامل وكامل للجسم اليوم`
    ], `علاج ${cleanStr} في عمان`, 8, `أخصائي علاج طبيعي معتمد في ${cleanStr}`, 5, `جلسات علاج ${cleanStr} قريبة مني`, 2, "muscat", lang);
  } else {
    return generateMassiveContent([
      `Pinpointing the Exact Cause of Your Constant Pain`, `How Muscle Spasms Make Your Situation So Much Worse`, `Why Sitting Still on the Couch Usually Backfires`, `Our Simple, Four Step Recovery Plan Explained`, `Getting Hands-on Treatment from Senior Specialists`, `Why Healing Happens Faster With Better Blood Flow`, `Building Real Strength So You Don't Get Hurt Again`, `Fixing Bad Sleep Habits and Awful Desk Posture`, `Ways to Make Sure This Pain Never Comes Back`, `Our Proven Track Record Dealing With Bad Joints`, `Looking Closer at Intense Shockwave Treatments`, `Setting Up Your First Full Body Diagnosis Today`
    ], `${cleanStr} treatment oman`, 8, `physiotherapist specializing in ${cleanStr}`, 5, `${cleanStr} therapy near me`, 2, "muscat", lang);
  }
}

// ==========================================
// 2. CITY x SERVICE MATRIX PAGES 
// ==========================================
export function generateMatrixContent(city: string, service: string, lang: 'en' | 'ar'): ContentSection[] {
  const cleanSvc = service.replace(/-/g, ' ').toLowerCase();
  const cLow = city.toLowerCase();
  
  if (lang === 'ar') {
    return generateMassiveContent([
      `رعاية طبية فائقة وخطوات تشخيص دقيقة للغاية`, `لماذا لا يمكن التسرع في عملية شفاء الأنسجة العميقة أبداً`, `طرق الفحص المحددة لدينا قادرة على كشف المشاكل الخفية`, `نجلب أفضل الأجهزة والمعدات الطبية العالمية إلى عيادتنا القياسية`, `مراجعة نسب نجاحنا المذهلة عبر مختلف مناطق المحافظة`, `توعيتك بشكل متقدم حول آليات عمل مفاصلك وحركة جسمك`, `وضع قواعد صارمة لتفادي احتمالات الانهيار المفصلي مستقبلاً`, `تسهيل الوصول إلى عيادتنا المحلية وجعل العملية سلسلة بالكامل لك`, `لماذا يوفر الاستثمار في نصيحة طبية حقيقية أموالك على المدى البعيد`, `بدء فحوصات الحركة المبدئية ونطاق مرونة العضلات الخاص بك`, `الحفاظ على جسمك قوياً وآمناً مع التقدم في العمر`, `تأمين وصولك إلى ذروة صحتك لبقية سنوات حياتك الطبيعية`
    ], `${cleanSvc} في ${cLow}`, 8, `أخصائي علاج طبيعي في ${cLow}`, 5, `${cleanSvc} قريب مني في ${cLow}`, 2, city, lang);
  } else {
    return generateMassiveContent([
      `Great Medical Care and Accurate Testing Steps`, `Why Deep Tissue Healing Cannot Be Rushed Past`, `Our Specific Testing Methods Find the Hidden Problems`, `We Bring World Class Medical Tools to Our Local Clinic`, `Checking Our Amazing Success Rates Across the Region`, `Teaching You About Your Own Joints and Body Mechanics`, `Setting Up Strong Rules to Prevent Future Pain Breakdowns`, `Making Local Clinic Access Easy and Completely Simple for You`, `Why Investing in Real Medical Advice Saves Money Long Term`, `Starting Your Initial Mobility Testing and Range Checks`, `Keeping Your Body Strong and Safe as You Get Older`, `Locking Down Peak Health for the Rest of Your Natural Life`
    ], `${cleanSvc} ${cLow}`, 8, `physiotherapist ${cLow}`, 5, `${cleanSvc} near me ${cLow}`, 2, city, lang);
  }
}

// ==========================================
// 3. TIER 2 CITY PAGES 
// ==========================================
export function generateCityContent(city: string, lang: 'en' | 'ar'): ContentSection[] {
  const cLow = city.toLowerCase();

  if (lang === 'ar') {
    return generateMassiveContent([
      `تقييم شامل لكامل الجسم عبر جميع مكاتبنا الإقليمية`, `تأمين أعلى مستويات الدقة لعلاج مشاكل المفاصل لديك`, `تنفيذ خطط تعافي إقليمية شديدة التركيز ومباشرة`, `لماذا تحتاج بالضرورة لنصائح ممتازة بعد الجراحة بالقرب من منزلك`, `العمل بشكل وثيق مع أفضل شركات التأمين الصحي الإقليمية`, `التخلص من العقد العضلية الناتجة عن الضغط العالي بسرعة وأمان`, `بناء عادات رياضية وأداء أفضل للرياضيين المحليين بفعالية`, `التعامل مع خطوات شفاء الأعصاب المعقدة بشكل علمي وصحيح`, `تعليمك كيفية البقاء خالياً من الألم وأنت تجلس في غرفة معيشتك`, `تحديد موعد لفحص حركتك بكل أمانة وثقة فوراً`, `الفوائد الضخمة طويلة المدى للحصول على رعاية حقيقية لأنسجتك`, `الالتحكم الكامل بصحتك دون الاعتماد المفرط على الأدوية المسكنة`
    ], `علاج طبيعي في ${cLow}`, 8, `أفضل أخصائي علاج طبيعي في ${cLow}`, 5, `مركز علاج طبيعي قريب مني في ${cLow}`, 2, city, lang);
  } else {
    return generateMassiveContent([
      `Full Body Testing Across All Our Regional Offices`, `Securing Top Notch Precision for Your Joint Problems`, `Running Highly Focused Regional Recovery Plans Easily`, `Why You Absolutely Need Good Post-Surgery Advice Near Home`, `Working Closely With The Top Regional Health Insurances`, `Fixing High Stress Muscle Knots Quickly and Safely`, `Building Better Performance Habits for Local Athletes`, `Dealing With Complex Nerve Healing Steps Properly`, `Teaching You How to Stay Pain Free in Your Own Living Room`, `Setting Up Your First Honest Mobility Check Immediately`, `The Huge Long Term Benefits of Getting Real Tissue Care`, `Owning Your Health Without Relying Heavy Medications`
    ], `physiotherapy ${cLow}`, 8, `physiotherapist ${cLow}`, 5, `physiotherapy near me ${cLow}`, 2, city, lang);
  }
}
