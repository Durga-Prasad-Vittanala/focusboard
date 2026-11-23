
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

import "./FocusNotes.css";

const slides = [
  {
    title: "Make today count.",
    description: "A little focus goes a long way.",
    number: "01"
  },
  {
    title: "Small steps, big progress.",
    description: "Keep your priorities in view.",
    number: "02"
  },
  {
    title: "Celebrate the wins.",
    description: "Every completed task moves you forward.",
    number: "03"
  }
];

function FocusNotes() {
  const [activeSlide, setActiveSlide] = useState(0);

  const previousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="focus-notes">

      <div className="focus-content">

        <div className="focus-text">
          <span className="focus-label">
            FOCUS NOTES · {currentSlide.number} OF 03
          </span>

          <h2>{currentSlide.title}</h2>

          <p>{currentSlide.description}</p>

          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.number}
                className={activeSlide === index ? "indicator active" : "indicator"}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <div className="focus-preview">
          <div className="preview-card">
            <div className="preview-header">
              <span>Today's focus</span>
              <span className="preview-count">2/4</span>
            </div>

            <div className="preview-task">
              <span className="check-circle">
                <Check size={12} />
              </span>
              <span>Review priorities</span>
            </div>

            <div className="preview-task">
              <span className="check-circle">
                <Check size={12} />
              </span>
              <span>Plan your day</span>
            </div>

            <div className="preview-progress">
              <div className="progress-fill" />
            </div>

            <small>50% completed</small>
          </div>
        </div>

      </div>

      <div className="carousel-controls">
        <button onClick={previousSlide} aria-label="Previous slide">
          <ChevronLeft size={18} />
        </button>

        <button onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={18} />
        </button>
      </div>

    </section>
  );
}

export default FocusNotes;

