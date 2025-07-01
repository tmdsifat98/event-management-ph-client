import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data);
      });
  }, []);
  return (
    <Fade>
      <div className="w-11/12 lg:w-7/12 mx-auto my-16" id="faq">
        <h1 className="text-center text-5xl dark:text-white font-semibold mb-10 font-playfair">
          Frequently Asked Question
        </h1>

        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="collapse my-1 collapse-plus bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-800"
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold dark:text-gray-200">
              {index + 1}. {faq.question}
            </div>
            <div className="collapse-content text-sm dark:text-gray-300">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default Faq;
