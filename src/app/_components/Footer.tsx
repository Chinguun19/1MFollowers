import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Би яагаад дагагч худалдаж авах ёстой вэ?",
    answer:
      "Таны профайл руу ороход хүн бүр хамгийн түрүүнд хардаг зүйл бол таны дагагчдын тоо юм. Илүү олон дагагчтай бол та шинэ дагагчдыг татах илүү сайн боломжтoй байна.",
  },
  {
    question: "Санал болгож буй хэмжээ байна уу?",
    answer:
      "Үгүй ээ, энэ нь танаас бүрэн хамаарна. Та хүссэнээрээ олон дагагч худалдаж авах боломжтой.",
  },
  {
    question: "Би нууц үгээ өгөх шаардлагатай юу?",
    answer:
      "Таны захиалгыг дуусгахын тулд бидэнд таны нууц үг хэрэггүй. Нууц үг шаарддаг үйлчилгээнд хэзээ ч бүү итгэ.",
  },
  {
    question: "Дагагчид худалдаж авах нь хууль ёсных уу?",
    answer:
      '"Дагагчид худалдаж авах нь бүрэн хууль ёсны бөгөөд үүнийг эсэргүүцэх ямар ч хууль байхгүй. Хэрэв хууль бус байсан бол алдартнууд аль хэдийн Ban-дуулсан байх байсан."',
  },
  {
    question: "Дагагчид захиалахад хэр хугацаа шаардагдах вэ?",
    answer: "Захиалгын 99% нь 24 цагийн дотор бүрэн хийгддэг.",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Байнга асуудаг асуултууд
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Хамгийн түгээмэл асуулт ба хариултууд
          </p>
          <div className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-pulse" />
        </div>

        <div className="mx-auto max-w-xl grid gap-6 grid-cols-1">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl min-h-[70px] flex items-center"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger className="flex items-start gap-3 px-6 py-6 text-left text-gray-900 font-semibold hover:bg-gray-50 transition rounded-t-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-gray-500 text-sm">
          <p>© 2025 Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-5 text-xs">
            {["Үйлчилгээний нөхцөл", "Нууцлалын бодлого", "Холбоо барих"].map(
              (label, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-500 hover:text-blue-500 hover:underline underline-offset-4 transition"
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
