import React, { useState } from "react";
import Slider from "react-slick";
import PCI from "../../assets/img/pci.png";
import Left from "../../assets/img/arrow_left.png";
import rightarrow from "../../assets/img/arrow_right.png";
import locationimg from "../../assets/img/furnished-location.svg";
import bedimg from "../../assets/img/furnished-bed.svg";
import furniture2img from "../../assets/img/furniture2.svg";
import carimg from "../../assets/img/furnished-car.svg";
import furniture4 from "../../assets/img/furniture4.svg";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
const listings = [
  {
    imageSrcs: [PCI, PCI, PCI, PCI, PCI, PCI],
    title: "Well Furnished Apartment1",
    location: "100 Smart Street, LA, USA",
    beds: 3,
    baths: 2,
    cars: 1,
    garage: 0,
  },
  {
    imageSrcs: [PCI, PCI, PCI, PCI, PCI, PCI],
    title: "Well Furnished Apartment 2",
    location: "100 Smart Street, LA, USA",
    beds: 3,
    baths: 2,
    cars: 1,
    garage: 0,
  },
  {
    imageSrcs: [PCI, PCI, PCI, PCI, PCI, PCI],
    title: "Well Furnished Apartment 3",
    location: "100 Smart Street, LA, USA",
    beds: 3,
    baths: 2,
    cars: 1,
    garage: 0,
  },
  {
    imageSrcs: [PCI, PCI, PCI, PCI, PCI, PCI],
    title: "Well Furnished Apartment 4",
    location: "100 Smart Street, LA, USA",
    beds: 3,
    baths: 2,
    cars: 1,
    garage: 0,
  },
];

const ListingCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settingsOuter = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <div className="slider-arrow1 slider-prev">
        <img src={Left} alt="left" className="ar-img shadow" />
      </div>
    ),
    nextArrow: (
      <div className="slider-arrow1 slider-next">
        <img src={rightarrow} alt="right" className="ar-img shadow" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const settingsInner = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentIndex(current),
    prevArrow: (
      <div className="slider-prev2">
        <img src={Left} alt="left" className="ar-img shadow" />
      </div>
    ),
    nextArrow: (
      <div className="slider-next2">
        <img src={rightarrow} alt="right" className="ar-img shadow" />
      </div>
    ),
  };

  return (
    <div className="slides">
      <Slider {...settingsOuter}>
        {listings.map((listing, index) => (
          <div className="col-12 mt-4 mx-auto px-sm-4 px-2 py-5" key={index}>
            <div className="p-3 furnished-shadow inner-slider position-relative rounded-3">
              <Slider {...settingsInner}>
                {listing.imageSrcs.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`furnished-${idx}`}
                    className="w-100"
                  />
                ))}
              </Slider>
              <Link to="#" className="furnishedover-size">
                <FaRegHeart className=" text-black"/>
              </Link>
              <div className="d-flex align-items-center mt-3">
                <p className="mb-0 fs-6 fw-bold ms-2">{listing.title}</p>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div className="">
                  <img src={locationimg} alt="location" className="w-100" />
                </div>
                <p className="mb-0 light-black ms-2 ex-small">
                  {listing.location}
                </p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <div className="furniture-size">
                      <img src={bedimg} alt="bed" className="sm-img" />
                    </div>
                    <p className="mb-0 fw-bold ms-2">{listing.beds}</p>
                  </div>
                  <div className="d-flex align-items-center ms-1">
                    <div className="furniture-size">
                      <img
                        src={furniture2img}
                        alt="Furniture"
                        className="sm-img"
                      />
                    </div>
                    <p className="mb-0 fw-bold ms-2">{listing.baths}</p>
                  </div>
                  <div className="d-flex align-items-center ms-1">
                    <div className="furniture-size">
                      <img src={carimg} alt="car" className="sm-img" />
                    </div>
                    <p className="mb-0 fw-bold ms-2">{listing.cars}</p>
                  </div>
                  <div className="d-flex align-items-center ms-1">
                    <div className="furniture-size">
                      <img
                        src={furniture4}
                        alt="Furniture"
                        className="sm-img"
                      />
                    </div>
                    <p className="mb-0 fw-bold ms-2">{listing.garage}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ListingCard;
