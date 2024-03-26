import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/all";

const Testimonials = ({ testimonials }) => {


  let root = useRef();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  
  useGSAP(() => {


    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-testimonials",
        start: "top 80%",
        end: "bottom 20%", // Adjust end position as needed
      },
    });

    tl.from('.testimonials', {
      yPercent: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
    })
   
    
  },{ scope: root })

  
  return (
    <section ref={root}>
      <div className="container trigger-testimonials ">
        <div className="bg-primary text-background  rounded-[var(--radius-l)] p-10 testimonials">
          <div className="flex flex-col items-center mt-10 ">
            <div className="flex *:font-medium ">
              <h3>
                What <span className="italic">people </span> say
              </h3>
            </div>

            <p className="mt-4 text-center">
              Discover the experiences that shape my story. Straight from those
              who inspire my best work
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination]} // Add the modules
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              832: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30} // Space between slides
            className="mySwiper"
          >
            {testimonials
              ?.filter((testimonial) => testimonial.enabled)
              .map((testimonial) => (
                <SwiperSlide className="h-full mt-10 " key={testimonial?._id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}

            <div className="flex justify-between">
              <span className="swiper-button-prev"></span>
              <span className="swiper-button-next"></span>
            </div>

            <div className=" swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
