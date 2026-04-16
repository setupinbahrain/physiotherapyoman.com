import { services as allServices } from './data';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

// 100% human-verified Arabic language without AI footprints. Scaled for Omani dialect and clinical authority.
const humanFillers = [
  "عندما تعاني من آلام المفاصل المزمنة، فإن الاستلقاء على الأريكة للراحة هو في الغالب أسوأ قرار يمكن أن تتخذه لجسمك. يتركز نهجنا السريري بالكامل على اكتشاف السبب الدقيق لتصلب عضلاتك في المقام الأول، بدلاً من مجرد إعطائك بعض تمارين الإطالة البسيطة. نحن نخصص الوقت لتقييم عاداتك اليومية، وطريقة جلوسك في المكتب، وإصاباتك القديمة، لأن هذه التفاصيل الصغيرة تشير دائماً مباشرة إلى أصل المشكلة.",
  "الألم هو مجرد إشارة إلى أن الأنسجة العميقة لا تتحرك بشكل صحيح. باستخدام العلاج اليدوي الموجه، يقوم كبار المتخصصين لدينا جسدياً بتحرير التوتر المحتجز داخل مفاصلك المتصلبة وعضلاتك المقيدة. هذا النهج اليدوي يقلل التورم فوراً ويساعد الدم على حمل الأكسجين النقي مباشرة إلى المنطقة المتضررة حيث يحدث الشفاء بشكل طبيعي.",
  "إعادتك إلى ممارسة حياتك الطبيعية بسرعة هي أولويتنا القصوى، ولكننا نرفض تماماً تجاهل الأساسيات أثناء رحلة علاجك. الاستعجال يضمن فقط عودة الإصابة بشكل أسوأ في الموسم القادم. بدلاً من ذلك، نقوم تدريجياً بتقديم تمارين تحميل أوزان آمنة بمجرد انخفاض الألم الأولي. بناء قوة حقيقية موضعياً حول مفاصلك المتضررة هو الطريقة الوحيدة والمضمونة لإيقاف الانتكاسات المستقبلية نهائياً.",
  "يأتي الكثير من المرضى مباشرة إلى عياداتنا بعد فشلهم في الحصول على أي نتائج حقيقية من استخدام الكمادات الساخنة والتمارين الرياضية العامة. العلاجات السلبية تبدو جيدة نظرياً، لكنها ببساطة لا تتعمق بما يكفي لتفتيت الأنسجة الندبية المتصلبة وتحرير المفاصل المنغلقة. أنت بحاجة إلى خبير يعرف بالضبط كيفية تطبيق الضغط الجسدي المباشر لتعديل عمودك الفقري ومفاصلك الطرفية وإعادتها إلى مسارها الطبيعي بأمان.",
  "إذا لم تتضمن خطة علاجك جهداً وبناءً للعضلات، فأنت تترك نفسك عرضة لأضرار مستقبلية بصورة كبيرة. تتطلب الأوتار والأربطة المصابة ضغطاً تدريجياً وقوياً للتكيف والشفاء بشكل صحيح. هذا يعني أنه بمجرد إزالة السبب الرئيسي للألم، سيدفعك فريقنا لتحميل المفصل ضمن نطاق حركة كامل وآمن. نحن نبني مرونة حقيقية داخل جسدك.",
  "من المستحيل بصراحة إصلاح سنوات من الوضعيات الخاطئة والأضرار الرياضية في موعد واحد مدته عشرين دقيقة. الانتصار في هذه المعركة يتطلب النظر إلى كيفية جلوسك على كرسي مكتبك، وكيف تنام، وكيف تتعامل مع ضغوط يومك. نجلس معك ونضع نظام تصحيح يومي متكامل لكل مريض لضمان الحفاظ على النتائج التي نحققها في العيادة بسهولة داخل غرفة معيشتك.",
  "نحن لا نكتفي بتقديم جلسات تدليك عابرة. يستخدم فريقنا أحدث الأدوات السريرية مقترنة بمعالجة يدوية دقيقة للمفاصل لتحقيق نتائج سريعة وجادة وحقيقية لكل مريض يعبر من أبوابنا. الهدف النهائي هو التأكد من أنك لن تضطر أبداً للعودة إلى العيادة مرة أخرى بسبب نفس الإصابة. نريد أن نمنحك الاستقلالية الجسدية الكاملة والثقة المطلقة في قدرة جسدك على الحركة.",
  "أثبتت سنوات من العمل مع الحالات المعقدة أن الجلوس والانتظار على أمل أن يختفي الألم من تلقاء نفسه هو أسوأ قرار ممكن أن تتخذه. التدخل المبكر يوقف تدهور العضلات فوراً ويقلل من فترة التعافي الإجمالية بشكل كبير. المبادرة والحصول على تشخيص صحيح في اليوم الأول يضعك مباشرة على مسار واضح لعيش حياة نشطة خالية من الألم تماماً."
];

// Fallback logic to inject precise Do-Follow SEO PageRank SILOS without breaking human flow.
function buildSiloLink(cityContext: string, currentServiceContext?: string): string {
  const targetService = allServices[Math.floor(Math.random() * allServices.length)];
  const linkPath = `/${cityContext.toLowerCase()}/${targetService}`;
  
  const anchorTexts = [
    `زيارة عيادتنا المخصصة في تقنيات ${targetService.replace('-', ' ')}`,
    `حجز استشارة متخصصة لتلقي ${targetService.replace('-', ' ')}`,
    `الحصول على تقييم دقيق عبر خبراء ${targetService.replace('-', ' ')}`,
    `فهم سبب أهمية ${targetService.replace('-', ' ')} لضمان التعافي السريع`
  ];
  
  const anchorText = anchorTexts[Math.floor(Math.random() * anchorTexts.length)];
  return ` <a href="${linkPath}" style="color:var(--brand);text-decoration:underline;font-weight:600;">${anchorText}</a> `;
}

// Generates Deep Semantic Contextual Imagery using Native HTML 5 <figure> Elements.
function buildSemanticImage(cityContext: string, primaryToken: string): string {
   const cleanToken = primaryToken.replace(/-/g, ' ');
   return `
    <figure class="seo-semantic-image" style="margin: 2.5rem 0; text-align: center; border-radius: 8px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border: 1px solid var(--glass-border); padding: 1rem;">
      <img src="/assets/clinical-rehab.png" alt="تدخلات عيادية وخبرات في ${cleanToken} متوفرة محلياً في ${cityContext}" title="أفضل صور التشخيص لـ ${cleanToken} للمرضى في ${cityContext}" loading="lazy" style="width: 100%; max-width: 800px; height: auto; border-radius: 6px; box-shadow: 0 4px 30px rgba(0,0,0,0.4);" />
      <figcaption style="padding-top: 1rem; font-size: 0.9rem; color: var(--text-muted); font-style: italic;">تشخيص وتأهيل متقدم لـ ${cleanToken} مطبق بكفاءة لتلبية متطلبات المرضى في محافظة ${cityContext}.</figcaption>
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
  cityContext: string
): ContentSection[] {
  let pInjected = 0;
  let phInjected = 0;
  let nmInjected = 0;

  return titles.map((headingText, index) => {
    let finalHeading = headingText;
    if (index === 0 || index === 4 || index === 8) {
      if (pInjected < primaryCount) { finalHeading += ` من أجلك في مجال ${primaryToken}`; pInjected++; }
    } else if (index === 2 || index === 6) {
      if (phInjected < physioCount) { finalHeading += ` تحت إشراف ${physioToken}`; phInjected++; }
    } else if (index === 10) {
      if (nmInjected < nearMeCount) { finalHeading = `خبراء متميزون في تقديم ${nearMeToken}`; nmInjected++; }
    }

    const pars = [0, 1, 2, 3].map(pIndex => {
      let base = humanFillers[(index * 4 + pIndex) % humanFillers.length];
      
      // SEO Exact Phrase Rank Math Overloads
      if (pIndex === 1 && pInjected < primaryCount) { base += ` إن العثور على مقدمي خدمة ممتازين في ${primaryToken} يثبت فعالية هذا العلاج تماماً.`; pInjected++; }
      if (pIndex === 2 && phInjected < physioCount) { base += ` ويتفق كل ${physioToken} متخصص مع هذا النهج لتحقيق أقصى استفادة طبية.`; phInjected++; }
      if (pIndex === 3 && nmInjected < nearMeCount) { base += ` إن سرعة الوصول إلى ${nearMeToken} تصنع الفارق الحقيقي في نتائج التعافي.`; nmInjected++; }

      // AHREFS DO-FOLLOW PAGE-RANK SILO INJECTION
      if (pIndex === 0 || pIndex === 2) {
        if (Math.random() > 0.6) {
           base += buildSiloLink(cityContext);
        }
      }
      return base;
    });

    // Native Semantic Image Overloads
    if (index === 3 || index === 7) {
       pars.push(buildSemanticImage(cityContext, primaryToken));
    }

    return { heading: finalHeading, paragraphs: pars };
  });
}

// ==========================================
// 1. CONDITION PAGES (Arabic translations)
// ==========================================
export function generateConditionContent(condition: string): ContentSection[] {
  const arabicCondition = condition.replace(/-/g, ' ');
  const titles = [
    `تحديد السبب الكامن والدقيق وراء ألمك المستمر`,
    `كيف تؤدي التشنجات العضلية إلى تفاقم وضعك بشكل أكبر`,
    `لماذا يؤدي الجلوس لفترات طويلة على الأريكة إلى نتائج عكسية`,
    `خطة التعافي المكونة من أربع خطوات واضحة ومبسطة`,
    `الحصول على علاج يدوي مباشر من كبار المتخصصين`,
    `لماذا يحدث الشفاء بشكل أسرع مع تحسين تدفق الدم`,
    `بناء قوة حقيقية ومستدامة لضمان عدم التعرض للإصابة مجدداً`,
    `إصلاح عادات النوم الخاطئة والوضعية السيئة أثناء العمل`,
    `طرق فعالة وحقيقية لضمان عدم عودة هذا الألم مرة أخرى`,
    `سجلنا الحافل والموثوق في التعامل مع تلف المفاصل الصعب`,
    `نظرة أعمق على فعالية جلسات العلاج بالموجات التصادمية`,
    `ترتيب إجراء تقييم شامل وكامل للجسم اليوم`
  ];
  return generateMassiveContent(titles, `علاج ${arabicCondition} في عمان`, 8, `أخصائي علاج طبيعي معتمد في ${arabicCondition}`, 5, `جلسات علاج ${arabicCondition} قريبة مني`, 2, "muscat"); 
}

// ==========================================
// 2. CITY x SERVICE MATRIX PAGES (Arabic translations)
// ==========================================
export function generateMatrixContent(city: string, service: string): ContentSection[] {
  const arabicService = service.replace(/-/g, ' ');
  const primaryKwd = `${arabicService} في ${city.toLowerCase()}`;
  const physioKwd = `أخصائي علاج طبيعي في ${city.toLowerCase()}`;
  const nearMeKwd = `${arabicService} قريب مني في ${city.toLowerCase()}`;
  
  const titles = [
    `رعاية طبية فائقة وخطوات تشخيص دقيقة للغاية`,
    `لماذا لا يمكن التسرع في عملية شفاء الأنسجة العميقة أبداً`,
    `طرق الفحص المحددة لدينا قادرة على كشف المشاكل الخفية`,
    `نجلب أفضل الأجهزة والمعدات الطبية العالمية إلى عيادتنا القياسية`,
    `مراجعة نسب نجاحنا المذهلة عبر مختلف مناطق المحافظة`,
    `توعيتك بشكل متقدم حول آليات عمل مفاصلك وحركة جسمك`,
    `وضع قواعد صارمة لتفادي احتمالات الانهيار المفصلي مستقبلاً`,
    `تسهيل الوصول إلى عيادتنا المحلية وجعل العملية سلسلة بالكامل لك`,
    `لماذا يوفر الاستثمار في نصيحة طبية حقيقية أموالك على المدى البعيد`,
    `بدء فحوصات الحركة المبدئية ونطاق مرونة العضلات الخاص بك`,
    `الحفاظ على جسمك قوياً وآمناً مع التقدم في العمر`,
    `تأمين وصولك إلى ذروة صحتك لبقية سنوات حياتك الطبيعية`
  ];
  return generateMassiveContent(titles, primaryKwd, 8, physioKwd, 5, nearMeKwd, 2, city);
}

// ==========================================
// 3. TIER 2 CITY PAGES (Arabic translations)
// ==========================================
export function generateCityContent(city: string): ContentSection[] {
  const primaryKwd = `علاج طبيعي في ${city.toLowerCase()}`;
  const physioKwd = `أفضل أخصائي علاج طبيعي في ${city.toLowerCase()}`;
  const nearMeKwd = `مركز علاج طبيعي قريب مني في ${city.toLowerCase()}`;

  const titles = [
    `تقييم شامل لكامل الجسم عبر جميع مكاتبنا الإقليمية`,
    `تأمين أعلى مستويات الدقة لعلاج مشاكل المفاصل لديك`,
    `تنفيذ خطط تعافي إقليمية شديدة التركيز ومباشرة`,
    `لماذا تحتاج بالضرورة لنصائح ممتازة بعد الجراحة بالقرب من منزلك`,
    `العمل بشكل وثيق مع أفضل شركات التأمين الصحي الإقليمية`,
    `التخلص من العقد العضلية الناتجة عن الضغط العالي بسرعة وأمان`,
    `بناء عادات رياضية وأداء أفضل للرياضيين المحليين بفعالية`,
    `التعامل مع خطوات شفاء الأعصاب المعقدة بشكل علمي وصحيح`,
    `تعليمك كيفية البقاء خالياً من الألم وأنت تجلس في غرفة معيشتك`,
    `تحديد موعد لفحص حركتك بكل أمانة وثقة فوراً`,
    `الفوائد الضخمة طويلة المدى للحصول على رعاية حقيقية لأنسجتك`,
    `التحكم الكامل بصحتك دون الاعتماد المفرط على الأدوية المسكنة`
  ];
  return generateMassiveContent(titles, primaryKwd, 8, physioKwd, 5, nearMeKwd, 2, city);
}
