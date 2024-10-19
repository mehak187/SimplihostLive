import React from "react";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "Can I set up alerts for low inventory levels?",
    answer:
      "Simplihost helps you manage your property seamlessly with features like booking management, automated communications, and more.",
  },
  {
    question:
      "Can I manage inventory for multiple properties from a single dashboard?",
    answer:
      "Simplihost offers unique features like customizable booking settings and integration with popular listing platforms.",
  },
  {
    question: "Can I set minimum inventory levels?",
    answer:
      "Our team provides personalized onboarding assistance to ensure you get up and running quickly.",
  },
  {
    question: "Can I categorize inventory items by property or type?",
    answer:
      "Yes, Simplihost offers a mobile application for easy access and management on the go.",
  },
  {
    question:
      "Is it possible to set up templates for common responses in the unified inbox?",
    answer:
      "Yes, we offer various product demos that showcase Simplihost's features. You can find them on our website.",
  },
];

function InventoryManagement() {
  return (
    <section className="accordian-sec w-100">
      <div className="container">
        <div className="rounded-4 py-3 px-3 bg-green">
          <div className="faq-height w-100">
            <div className="pt-2 px-sm-3 pe-2 rounded-4">
              <h3 className="fw-bold">Inventory Management</h3>
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

export default InventoryManagement;
