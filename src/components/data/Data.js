// TEAM IMAGES
import team1 from "../images/team-1.jpg";
import team2 from "../images/team-2.jpg";
import team3 from "../images/team-3.jpg";
import team4 from "../images/team-4.jpg";

// TESTIMONAILS IMAGES
import customer1 from "../images/customer-1.jpg";
import customer2 from "../images/customer-2.jpg";
import customer3 from "../images/customer-3.jpg";

// Icons
import {
  faHandHoldingDroplet,
  faFilter,
  faRecycle,
  faMicroscope,
  faDumpsterFire,
  faEarListen,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

export const nav = [
  { id: 1, name: "الصفحة الرئيسية", to: "/home", en: "home" },
  { id: 2, name: "من نحن", to: "/about", en: "about" },
  { id: 3, name: "خدماتنا", to: "/service", en: "service" },
  { id: 4, name: "المدونة", to: "/blog", en: "blog" },
  { id: 5, name: "التواصل", to: "/contact", en: "contact" },
];

export const featureItems = [
  {
    id: 1,
    title: "فحص الجودة",
    description:
      "فحص جودة المياه هو عملية تحليل خصائص المياه للتأكد من مطابقتها للمعايير الصحية والبيئية، مما يضمن سلامتها للاستهلاك والاستخدام.",
    icon: faHandHoldingDroplet,
  },
  {
    id: 2,
    title: "5 خطوات للترشيح",
    description:
      "تُستخدم الفلترة في معامل المياه لإزالة الشوائب وتحسين جودتها، مما يجعلها صالحة للاستهلاك وفق المعايير الصحية.",
    icon: faFilter,
  },
  {
    id: 3,
    title: "التركيب",
    description:
      "إعادة تدوير المياه هي عملية معالجة المياه المستخدمة لجعلها صالحة للاستخدام مرة أخرى، مما يساعد في الحفاظ على الموارد المائية وتقليل الهدر.",
    icon: faRecycle,
  },
  {
    id: 4,
    title: "مراقبة المختبر",
    description:
      "تُستخدم المختبرات في معامل المياه لتحليل جودتها والتأكد من خلوها من الملوثات، مما يضمن سلامتها للاستهلاك.",
    icon: faMicroscope,
  },
];

export const serviceItems = [
  {
    id: 1,
    title: "المياه السكنية",
    description: "المياه السكنية لحلول إمداد وتنقية المياه للمنازل.",
    icon: faHandHoldingDroplet,
  },
  {
    id: 2,
    title: "المياه التجارية",
    description: "المياه التجارية لحلول موثوقة لإمداد وتنقية مياه المنشآت.",
    icon: faDumpsterFire,
  },
  {
    id: 3,
    title: "محطات الترشيح",
    description: "محطات الترشيح لتنقية المياه بكفاءة عالية.",
    icon: faFilter,
  },
];

export const serviceItemsTwo = [
  {
    id: 1,
    title: "تنقية المياه",
    description: "تنقية المياه لضمان مياه نقية وصحية بجودة عالية.",
    icon: faEarListen,
  },
  {
    id: 2,
    title: "أبحاث السوق",
    description: "أبحاث السوق لتحليل البيانات وفهم احتياجات العملاء.",
    icon: faRecycle,
  },
  {
    id: 3,
    title: "تخطيط المشروع",
    description:
      "تخطيط المشروع لوضع استراتيجيات وتنظيم الموارد لتحقيق أهداف المشروع بكفاءة. ",
    icon: faDiagramProject,
  },
];

export const teamMembers = [
  { id: 1, name: "محمد الحربي", job: "المدير التنفيذي", img: team1 },
  { id: 2, name: "تركي العتيبي", job: "مدير التسويق", img: team2 },
  { id: 3, name: "نواف المطيري", job: "مدير الموارد البشرية", img: team3 },
  { id: 4, name: "سعود القحطاني", job: "مدير المبيعات", img: team4 },
];

export const testimonialsCustomers = [
  {
    id: 1,
    comment: `تجربة رائعة! المياه كانت طازجة وبطعم رائع، والتوصيل كان سريعًا.
            أحببت أيضًا العبوة المتينة التي تحافظ على المياه باردة لفترة طويلة.
            بالتأكيد سأعيد الطلب مرة أخرى!`,
    img: customer1,
    name: "محمد العصيمي",
    stars: 5,
  },
  {
    id: 2,
    comment: `تعامل راقٍ وتوصيل في الوقت المحدد. المياه نظيفة وطعمها نقي جدًا، حسيت بفرق عن باقي الشركات. أنصح بالتعامل معهم وبقوة.`,
    img: customer2,
    name: "تركي احمد",
    stars: 5,
  },
  {
    id: 3,
    comment: `صراحة ارتحت كثير بعد ما جربت مويتهم، نظيفة وباردة وطعمها ممتاز، والتوصيل دايم في وقته. شكراً لكم على الاحترافية.`,
    img: customer3,
    name: "موسى الغامدي",
    stars: 4,
  },
];
