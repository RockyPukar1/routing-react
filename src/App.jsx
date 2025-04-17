import { useState } from "react";

const faqs = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

function App() {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <div className="flex justify-center items-center">
      <div className="flex-col w-72 text-xs">
        {faqs.map((faq, index) => (
          <div className="bg-gray-300 my-2 p-2">
            <p className="font-semibold flex gap-1 items-center">
              <img
                onClick={() => {
                  if (index === showIndex) {
                    setShowIndex("");
                  } else {
                    setShowIndex(index);
                  }
                }}
                className={`w-5 h-2 ${index === showIndex && "rotate-90"}`}
                src="/src/assets/chevron.svg"
                alt="Chevron"
              />
              {faq.question}
            </p>
            {index === showIndex && (
              <p className="font-normal ml-6">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
