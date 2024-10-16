import React from "react";
import heroimg from "../../assets/img/hero-img.png";
import feature1 from "../../assets/img/feature1.svg";
import smartdevice from "../../assets/img/smartdevice.svg";
import task from "../../assets/img/task.svg";
import automatedguest from "../../assets/img/automatedguest.svg";
import maintance from "../../assets/img/maintance.svg";
import inventery from "../../assets/img/inventery.svg";
import automation from "../../assets/img/automation.svg";
import directbooking from "../../assets/img/directbooking.svg";
import featureproperty from "../../assets/img/featureproperty.png";
import guestmessage from "../../assets/img/guestmessage.svg";
import cleaningtourner from "../../assets/img/cleaningtourner.svg";
import maintanceitem from "../../assets/img/maintanceitem.svg";
import smartdevice2 from "../../assets/img/smartdevice2.svg";
import WhySimplihost from "../../Components/Website/WhySimplihost";
import Sliderr from "../../Components/Website/Sliderr";
import { Link } from "react-router-dom";
import PricingMadeSimple from "../../Components/Website/PricingMadeSimple";

function Home() {
  const features = [
    {
      id: 1,
      title: "Unified Inbox",
      image: feature1,
      alt: "Unified Inbox",
    },
    {
      id: 2,
      title: "Smart Devices Integration",
      image: smartdevice,
      alt: "Smart Devices Integration",
    },
    {
      id: 3,
      title: "Tasks and Checklists",
      image: task,
      alt: "Tasks and Checklists",
    },
    {
      id: 4,
      title: "Automated Guest Messaging",
      image: automatedguest,
      alt: "Automated Guest Messaging",
    },
    {
      id: 5,
      title: "Maintenance Tracking",
      image: maintance,
      alt: "Maintenance Tracking",
    },
    {
      id: 6,
      title: "Inventory Management",
      image: inventery,
      alt: "Inventory Management",
    },
    {
      id: 7,
      title: "Automations",
      image: automation,
      alt: "Automations",
    },
    {
      id: 8,
      title: "Direct Booking",
      image: directbooking,
      alt: "Direct Booking",
    },
  ];
  return (
    <>
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div>
                <h1 className="fw-bold hero-text">
                  <span className="green-color">Simplify</span> Your Rental
                  Game! All-In-One, from Messaging to Sparkling Homes!
                </h1>
                <p className="mb-0 hero-text">
                  Say goodbye to chaos and hello to simplicity! With SimpliHost,
                  managing guests, cleaners, maintenance, and everything in
                  between is a breeze. Seamlessly automate your rental
                  operations and get back to doing what you love!{" "}
                </p>
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  className="hero-btn text-black opacity-hover text-decoration-none d-inline-block fw-semi mt-3"
                >
                  Try for free!
                </Link>
                <p className="mb-0 mt-3">
                  Try SimpliHost for free for 30 days. No credit card required.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-0 mt-lg-0">
              <div className="hero-main-pic position-relative">
                <img src={heroimg} alt="hero-pic" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature py-5">
        <div className="container">
          <div className="row">
            <h3 className="blue-color fw-bold text-center">Features</h3>

            {features.map((feature) => (
              <div
                key={feature.id}
                className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5"
              >
                <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                  <div className="featurecard-img">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="p-3 w-100"
                    />
                  </div>
                  <p className="mb-0 fs-5 fw-semi text-center mt-3">
                    {feature.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature2 custom-feature position-relative py-5">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-xl-5 col-md-6 mx-auto">
              <div>
                <img
                  src={featureproperty}
                  alt="Property"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-7 mt-3 mt-xl-0">
              <div className="row">
                <div className="col-xl-5 col-sm-6">
                  <div className="featurecard-main2 position-relative d-flex align-items-center  py-2 px-3 rounded-3 h-100">
                    <div className="featurecard-img2">
                      <img
                        src={guestmessage}
                        alt="Guest message"
                        className="w-100 p-2"
                      />
                    </div>
                    <p className="mb-0 ms-2 fw-semi fs-5">Guest Messaging</p>
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 mt-3 mt-sm-0">
                  <div className="featurecard-main2 position-relative d-flex align-items-center py-2 px-3 rounded-3 h-100">
                    <div className="featurecard-img2">
                      <img
                        src={cleaningtourner}
                        alt="cleaning tour"
                        className="w-100 p-2"
                      />
                    </div>
                    <p className="mb-0 ms-2 fw-semi fs-5">Cleaning Turnovers</p>
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 mt-sm-5 mt-3 ms-0 ms-xl-4">
                  <div className="featurecard-main2 position-relative d-flex align-items-center py-2 px-3 rounded-3 h-100">
                    <div className="featurecard-img2">
                      <img
                        src={maintanceitem}
                        alt="maintenance"
                        className="w-100 p-2"
                      />
                    </div>
                    <p className="mb-0 ms-2 fw-semi fs-5">Maintenance Items</p>
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 mt-sm-5 mt-3">
                  <div className="featurecard-main2 position-relative d-flex align-items-center py-2 px-3 rounded-3 h-100">
                    <div className="featurecard-img2">
                      <img
                        src={smartdevice2}
                        alt="smart device"
                        className="w-100 p-2"
                      />
                    </div>
                    <p className="mb-0 ms-2 fw-semi fs-5">Smart Devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingMadeSimple />
      <WhySimplihost />
      <Sliderr />
    </>
  );
}

export default Home;
