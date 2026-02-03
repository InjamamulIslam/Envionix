import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What contaminants can the Envionix detect?",
        answer: "The Envionix III can detect heavy metals including arsenic, lead, chromium, mercury, cadmium, copper, zinc, and nickel in water, soil, and food samples."
    },
    {
        question: "How accurate are the test results?",
        answer: "Our device provides laboratory-grade accuracy with detection limits in the ppb range, meeting international standards for environmental testing."
    },
    {
        question: "What is the typical delivery time?",
        answer: "Standard delivery is 4-6 weeks from order confirmation. Expedited delivery options are available for urgent requirements."
    },
    {
        question: "Do you provide training and support?",
        answer: "Yes, we provide comprehensive training, technical support, and ongoing maintenance services to ensure optimal performance of your device."
    },
    {
        question: "Can I get a demo before purchasing?",
        answer: "Absolutely! We offer on-site demonstrations and trial periods. Contact us to schedule a demo at your facility."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <p className="text-lg md:text-xl text-gray-600">
                    Common questions about the Envionix III and our services
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-emerald-50/50 shadow-md ring-1 ring-emerald-100' : 'bg-white hover:bg-gray-50'
                            }`}
                    >
                        <button
                            className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                        >
                            <h3 className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-emerald-800' : 'text-gray-900'
                                }`}>
                                {faq.question}
                            </h3>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-100 text-gray-500'
                                }`}>
                                {openIndex === index ? (
                                    <Minus className="w-4 h-4" />
                                ) : (
                                    <Plus className="w-4 h-4" />
                                )}
                            </div>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
