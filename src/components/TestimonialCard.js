// style
import { useState } from 'react';
import Btn from './Btn';
import './TestimonialCard.css';

export default function TestimonialCard({ props }) {
  const [testimonial, setTestimonial] = useState(props[0]);
  const [isSwitching, setIsSwitching] = useState(false);

  const btns = {
    reserveATable: { text: 'Reserve a table' },
    seeMenu: { text: 'See menu' },
    next: { text: '>' },
    prev: { text: '<' },
    add: { text: '+' },
    remove: { text: '-' },
    submit: { text: 'Reserve a table' }
  };

  // switching testimonials
  const handleClick = e => {
    // the previous testimonial is the index of the current testimonial - 1
    // when the index is 0, the previous testimonial is the last one from the array of testimonials
    const prevTestimonial = props.indexOf(testimonial) === 0 ? props[props.length - 1] : props[props.indexOf(testimonial) - 1];
    // the next testimonial is the index of the current testimonial + 1
    // when the index is the same as the index of the last testimonial, the next testimonial is the first one from the array of testimonials
    const nextTestinomial = props.indexOf(testimonial) === props.length - 1 ? props[0] : props[props.indexOf(testimonial) + 1];

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
    <div className="testimonial-card">
      {/* button that appears next to the testimonial card on larger screen sizes */}
      <div className="btn-md">
        <Btn props={btns.prev} handleClick={e => handleClick(e)} />
      </div>
      <div className="card bg-green">
        <div className={`section-top ${isSwitching ? "switching-content" : ""}`}>
          <div className="section-img-rating">
            <div className="img-frame">
              <img
                className={`
                  img
                  ${testimonial.img.alt === "John Smith" ? "img-john-smith" : ""}
                  ${testimonial.img.alt === "Jane Peterson" ? "img-jane-peterson" : ""}
                `}
                src={testimonial.img.src}
                alt={testimonial.img.alt}
              />
            </div>
            <p className="h1 text-yellow rating">{testimonial.rating}/10</p>
          </div>
          <p className="p text-white review">"{testimonial.review}"</p>
        </div>
        <div className={`section-bottom ${isSwitching ? "switching-content" : ""}`}>
          <div className="section-author-info text-black">
            <h3 className="h3 author">{testimonial.author}</h3>
            <p className="h3 job-title">{testimonial.jobTitle}</p>
          </div>
        </div>
      </div>
      {/* button that appears next to the testimonial card on larger screen sizes */}
      <div className="btn-md">
        <Btn props={btns.next} handleClick={e => handleClick(e)} />
      </div>
      {/* buttons that appear below the testimonial card on small screen sizes */}
      <div className="btns-sm">
          <Btn props={btns.prev} handleClick={e => handleClick(e)} />
          <Btn props={btns.next} handleClick={e => handleClick(e)} />
      </div>
    </div>
  );
}
