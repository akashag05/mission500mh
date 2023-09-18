import Link from "next/link";
import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const MapsSwiper = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 3,
      },

      991: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 2,
      },

      575: {
        slidesPerView: 2,
      },
    },
  };

  const images = [
    {
      src: "/images/flow1.jpg",
      alt: "Step 1",
      description: "Village Identification",
    },
    {
      src: "/images/flow2.jpg",
      alt: "Step 2",
      description: "Farmer Group Formation",
    },
    {
      src: "/images/flow3.jpg",
      alt: "Step 3",
      description: "Benificary Identification",
    },
    {
      src: "/images/flow4.jpg",
      alt: "Step 4",
      description: "Work Break Down Structure",
    },
    {
      src: "/images/flow5.jpg",
      alt: "Step 5",
      description: "Demand Letter & Approval",
    },
    {
      src: "/images/flow6.jpg",
      alt: "Step 6",
      description: "Work Commencement",
    },
    {
      src: "/images/flow7.jpg",
      alt: "Step 7",
      description: "Recommendation Letter",
    },
    {
      src: "/images/flow8.jpg",
      alt: "Step 8",
      description: "Social Audit",
    },
    // Add more image objects here
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageClick = (imageSrc, imageDescription) => {
    setSelectedImage(imageSrc);
    setDescription(imageDescription);
  };
  return (
    <section className="clientlogo-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="client-logo mt-5">
              <ul className="step-menu">
                <Swiper {...params}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <li
                        role="button"
                        className="current"
                        onClick={() =>
                          handleImageClick(image.src, image.description)
                        }
                        style={{ width: "inherit" }}
                      >
                        <p>Step {index + 1}</p>
                        <p>{image.description}</p>
                        <div className="image-container">
                          <img src={image.src} alt={image.alt} />
                        </div>
                      </li>
                    </div>
                  ))}
                  {/* <Link href="https://www.rotarypunecamp.com/">
                    <div className="client-logo-item">
                      <img
                        src="/images/client-logo2.jpg"
                        width={200}
                        height={170}
                        alt="brand image"
                      />
                    </div>
                  </Link>
                  <Link href="https://naammh.org/">
                    <div className="client-logo-item">
                      <img
                        src="/images/client-logo3.jpg"
                        width={200}
                        height={170}
                        alt="brand image"
                      />
                    </div>
                  </Link>
                  <Link href="https://www.credaipune.org/">
                    <div className="client-logo-item">
                      <img
                        src="/images/credai.jpeg"
                        width={400}
                        height={130}
                        alt="brand image"
                      />
                    </div>
                  </Link>
                  <Link href="https://bjsindia.org/">
                    <div className="client-logo-item">
                      <img
                        src="/images/client-logo4.jpg"
                        width={200}
                        height={170}
                        alt="brand image"
                      />
                    </div>
                  </Link>
                  <Link href="https://www.dorfketal.com/">
                    <div className="client-logo-item">
                      <img
                        src="/images/client_logo5.jpg"
                        width={400}
                        height={130}
                        alt="brand image"
                      />
                    </div>
                  </Link> */}
                </Swiper>
              </ul>
            </div>
            <p style={{ fontSize: "12px", color: "red" }} className="container">
              <i>Note* - Click on Image to view enlarge form</i>
            </p>
            <div className="container">
              {selectedImage && (
                <div className="enlarge_image">
                  <p className="d-flex justify-content-center">{description}</p>
                  <img
                    src={selectedImage}
                    alt={description}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsSwiper;
