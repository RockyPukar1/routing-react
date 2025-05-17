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
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

function App() {
  const [showIndexes, setShowIndexes] = useState([]);
  console.log(showIndexes);
  return (
    <div className="flex justify-center items-center">
      <div className="flex-col w-72 text-xs">
        {faqs.map((faq, index) => (
          <div className="border border-1 my-2 p-2" key={index}>
            <p className="font-semibold flex gap-1 items-center">
              Index: {index}
              <img
                onClick={() => {
                  if (showIndexes.includes(index)) {
                    setShowIndexes((prev) => prev.filter((i) => i !== index));
                  } else {
                    setShowIndexes((prev) => [...prev, index]);
                  }
                }}
                className={`w-5 h-2 ${
                  showIndexes.includes(index) && "rotate-90"
                }`}
                src="/src/assets/chevron.svg"
                alt="Chevron"
              />
              {faq.question}
            </p>
            {showIndexes.includes(index) && (
              <p className="font-normal ml-6">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
