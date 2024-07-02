// components
import Btn from './Btn';

// style
import './TestimonialCard.css';

// hooks
import { useState } from 'react';
import usePageContent from '../hooks/usePageContent';

export default function TestimonialCard() {
  // a testimonial card with info about the author, the review and buttons to cycle through the testimonials

  const { btns, testimonials } = usePageContent();

  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const [isSwitching, setIsSwitching] = useState(false);


  // switching testimonials
  const handleClick = e => {
    // the previous testimonial is the index of the current testimonial - 1
    // when the index is 0, the previous testimonial is the last one from the array of testimonials
    const prevTestimonial = testimonials && testimonials.indexOf(testimonial) === 0 ? testimonials[testimonials.length - 1] : testimonials[testimonials.indexOf(testimonial) - 1];
    // the next testimonial is the index of the current testimonial + 1
    // when the index is the same as the index of the last testimonial, the next testimonial is the first one from the array of testimonials
    const nextTestinomial = testimonials && testimonials.indexOf(testimonial) === testimonials.length - 1 ? testimonials[0] : testimonials[testimonials.indexOf(testimonial) + 1];

    if (e.target.textContent === btns.prev.text) {
      // when the "<" button is clicked, previous testimonial is displayed
      setIsSwitching(true);
      setTimeout(() => setTestimonial(prevTestimonial), 150);
      setTimeout(() => setIsSwitching(false), 200);
      // setTestimonial(prevTestimonial);
    } else if (e.target.textContent === btns.next.text) {
      // when the ">" button is clicked, next testimonial is displayed
      setIsSwitching(true);
      setTimeout(() => setTestimonial(nextTestinomial), 150);
      setTimeout(() => setIsSwitching(false), 200);
    }
  };

  return (
    <div className="testimonial-card section-content-centered">
      {/* button that appears next to the testimonial card on larger screen sizes */}
      <div className="btn-md">
        <Btn btn={btns && btns.prev} handleClick={e => handleClick(e)} />
      </div>
      <div className="card bg-green">
        <div className={`section-top ${isSwitching ? "switching-content" : ""}`}>
          <div className="section-img-rating">
            <div className="img-frame">
              <img
                className={`
                  img
                  ${testimonials && testimonial.img.alt === "John Smith" ? "img-john-smith" : ""}
                  ${testimonials && testimonial.img.alt === "Jane Peterson" ? "img-jane-peterson" : ""}
                `}
                src={testimonials && testimonial.img.src}
                alt={testimonials && testimonial.img.alt}
              />
            </div>
            <p className="h1 text-yellow rating">{testimonials && testimonial.rating}/10</p>
          </div>
          <p className="p text-white review">"{testimonials && testimonial.review}"</p>
        </div>
        <div className={`section-bottom ${isSwitching ? "switching-content" : ""}`}>
          <div className="section-author-info text-black">
            <h3 className="h3 author">{testimonials && testimonial.author}</h3>
            <p className="h3 job-title">{testimonials && testimonial.jobTitle}</p>
          </div>
        </div>
      </div>
      {/* button that appears next to the testimonial card on larger screen sizes */}
      <div className="btn-md">
        <Btn btn={btns && btns.next} handleClick={e => handleClick(e)} />
      </div>
      {/* buttons that appear below the testimonial card on small screen sizes */}
      <div className="btns-sm">
          <Btn btn={btns && btns.prev} handleClick={e => handleClick(e)} />
          <Btn btn={btns && btns.next} handleClick={e => handleClick(e)} />
      </div>
    </div>
  );
}
