import React from "react";
import pawashelex from "../../assets/img/pawashelex.svg";
import bookdollar from "../../assets/img/bookdollar.svg";
import superstar from "../../assets/img/superstar.svg";
import Sliderr from "../../Components/Website/Sliderr";
import ListingCard from "../../Components/Website/ListingCard";
import listingImage from "../../assets/img/listingfurnished.svg";
import heartImage from "../../assets/img/furnishedheart.svg";
import leftArrowImage from "../../assets/img/furnished-left.svg";
import rightArrowImage from "../../assets/img/furnishedright.svg";
import flowerImage from "../../assets/img/futnished-flower.svg";
import detailImage from "../../assets/img/furnished-deatil.svg";
import SearchFilter from "../../Components/Website/SearchFilter";

function Listings() {
  return (
    <>
      <section className="listing-color  py-5">
        <div className="container">
          <div className="col-12">
            <h1 className="fw-bold black-color text-center">
              Find Your Perfect Gateway!
            </h1>
            <div className="d-flex justify-content-center">
              <p className="mb-0 mt-3 listinghero-para  text-center">
                Searching for a spot to unwind? Let us help you discover the
                best properties that feel just like home—or maybe even better!
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="mt-5">
           <SearchFilter />
          </div>
        </div>
      </section>
      <section className="listing-second py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="listings-card h-100 rounded-4 d-flex flex-column">
                <div className="p-3">
                  <div className="listing-card-size">
                    <img src={pawashelex} alt="Pawa" className="w-100 p-3" />
                  </div>
                  <p className="mb-0 fw-semi fs-5 mt-2">Paws and Relax</p>
                  <p className="mb-0 black-color">
                    Explore a world where your furry friends are always welcome.
                    Find the paw-fect spot for your whole family to unwind and
                    make memories!
                  </p>
                </div>
                <div className="borderyellow mt-auto" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-4 mt-lg-0">
              <div className="listings-card h-100 rounded-4 d-flex flex-column">
                <div className="p-3">
                  <div className="listing-card-size">
                    <img src={bookdollar} alt="Pawa" className="w-100 p-4" />
                  </div>
                  <p className="mb-0 fw-semi fs-5 mt-2">
                    Book directly and save up to 15%!
                  </p>
                  <p className="mb-0 black-color">
                    Skip the extra fees from other online platforms and keep
                    that cash for more vacation fun!
                  </p>
                </div>
                <div className="borderyellow mt-auto" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-4 mt-xl-0">
              <div className="listings-card h-100 rounded-4 d-flex flex-column">
                <div className="p-3">
                  <div className="listing-card-size">
                    <img src={superstar} alt="Pawa" className="w-100 p-3" />
                  </div>
                  <p className="mb-0 fw-semi fs-5 mt-2">
                    Super Stays with Super Hosts!
                  </p>
                  <p className="mb-0 black-color">
                    Our hosts aren't just great—they're Super and Premier great!
                    With top-tier hosts at the helm, relax knowing every detail
                    is perfectly planned for your fantastic stay.
                  </p>
                </div>
                <div className="borderyellow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="listing-feature py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="fw-bold position-relative featured-border d-inline-block">
              Featured Properties
            </h2>
          </div>
          <div className="row">
            <ListingCard
              imageSrc={listingImage}
              heartSrc={heartImage}
              leftArrowSrc={leftArrowImage}
              rightArrowSrc={rightArrowImage}
              flowerSrc={flowerImage}
              title="Well Furnished Apartment"
              location="100 Smart Street, LA, USA"
              beds="3"
              baths="1"
              cars="2"
              garage="1"
              detailImageSrc={detailImage}
            />
          </div>
        </div>
      </section>
      <Sliderr />
    </>
  );
}

export default Listings;
