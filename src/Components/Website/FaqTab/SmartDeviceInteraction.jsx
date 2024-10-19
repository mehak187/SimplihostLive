import React from "react";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "Which smart devices does the software integrate with?",
    answer:
      "Simplihost helps you manage your property seamlessly with features like booking management, automated communications, and more.",
  },
  {
    question:
      "Can I control smart locks and thermostats remotely through the software?",
    answer:
      "Simplihost offers unique features like customizable booking settings and integration with popular listing platforms.",
  },
  {
    question: "Are there notifications if a smart device malfunctions?",
    answer:
      "Our team provides personalized onboarding assistance to ensure you get up and running quickly.",
  },
  {
    question:
      "Are there any limitations on the number of smart devices that can be integrated?",
    answer:
      "Yes, Simplihost offers a mobile application for easy access and management on the go.",
  },
  {
    question:
      "Is there a way to automate smart device settings based on guest check-in/out?",
    answer:
      "Yes, we offer various product demos that showcase Simplihost's features. You can find them on our website.",
  },
];

function SmartDeviceInteraction() {
  return (
    <section className="accordian-sec w-100">
      <div className="container">
        <div className="rounded-4 py-3 px-3 bg-green">
          <div className="faq-height w-100">
            <div className="pt-2 px-sm-3 pe-2 rounded-4">
              <h3 className="fw-bold">Smart Device Interaction</h3>
              <p className="mb-4 fw-semi">
                About Simplihost Property Management Platform
              </p>
              <div
                className="accordion accordion-flush custom-accordion"
                id="accordionFlushExample"
              >
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button px-3 px-md-4 collapsed fw-semi"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${index}`}
                      >
                        {faq.question}
                        <FaPlus className="icon text-black fs-5 ms-auto" />
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body px-3 px-md-4 pt-0">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmartDeviceInteraction;
