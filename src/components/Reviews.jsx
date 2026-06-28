import { REVIEWS } from "../utils/review-list";

import "../styles/Reviews.css";

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <div className="review-stars">{review.stars}</div>
    <p className="review-text">"{review.text}"</p>
    <div className="review-author">
      <div className="author-avatar">{review.avatar}</div>
      <div className="author-info">
        <h4>{review.authorName}</h4>
        <span>{review.badge}</span>
      </div>
    </div>
  </div>
);

export function Reviews() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-desc">
            Read real reviews from our gorgeous patrons detailing their
            experience with fitting and fabric quality.
          </p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
