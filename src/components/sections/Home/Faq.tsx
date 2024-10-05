import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import React from "react";

const faq = [
  {
    question: "What services does your company provide?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Eleifend sed eget dui in morbi dui vel quam tempor. Urna sollicitudin commodo pretium vitae nunc. Lorem tortor vel consectetur porta varius consequat quis lectus. Libero in facilisis malesuada quis auctor felis quis.",
  },
  {
    question: " How can I contact your company for inquiries?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Eleifend sed eget dui in morbi dui vel quam tempor. Urna sollicitudin commodo pretium vitae nunc. Lorem tortor vel consectetur porta varius consequat quis lectus. Libero in facilisis malesuada quis auctor felis quis.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Eleifend sed eget dui in morbi dui vel quam tempor. Urna sollicitudin commodo pretium vitae nunc. Lorem tortor vel consectetur porta varius consequat quis lectus. Libero in facilisis malesuada quis auctor felis quis.",
  },
];

const Faq = () => {
  return (
    <section className="py-16 xl:py-24 2xl:py-[130px]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-10 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-[minmax(0,0.67fr)_1fr] 2xl:gap-x-[72px]">
          <div>
            <p className="text-3xl font-normal text-gray-400 mb-2">FAQ</p>

            <h3 className="xl:max-w-2xl text-dark">
              Answers to frequently asked questions
            </h3>

            <p className="text-xl xl:text-3xl font-normal text-gray-400 mt-4 xl:mt-6">
              Still have questions? Feel free to contact us.
            </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((faq, index) => (
                <AccordionItem
                  key={`faq-item-${index}`}
                  value={`faq-item-${index}`}
                  className="border-gray-100"
                >
                  <AccordionTrigger className="p-3 xl:p-6 data-[state=open]:bg-card hover:bg-card ">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="px-3 xl:px-6 pt-2 pb-1 xl:pb-6 overflow-hidden text-gray-400 bg-card text-xl font-normal max-h-[500px] ">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
