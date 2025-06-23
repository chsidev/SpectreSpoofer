import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Does this app offer a free trial period?",
      answer: "Yes, all users can access a 2-day free trial to experience the full power of SpectreSpoofer. No commitments, no questions — just pure stealth in action."
    },
    {
      question: "What payment methods do you offer?",
      answer: "We accept credit cards and PayPal for standard purchases. For advanced deployments, automation, and fully personalized stealth setups, we exclusively support cryptocurrency & the before mentioned methods of payment."
    },
    {
      question: "How do I give access to a VA?",
      answer: "SpectreSpoofer makes it simple: you can add your virtual assistant through our Telegram bot interface or directly within the EXE application. In the EXE, you’ll generate a VA key tied to your license, with limits depending on your package. Total control, seamless delegation."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service. Simply contact our support team for a full refund."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[#15202b] font-medium text-sm uppercase tracking-wide mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We've got you covered
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="bg-gray-50 rounded-lg px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg transition-colors font-medium"
          >
            Browse complete FAQs
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
