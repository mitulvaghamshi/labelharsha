const reviews = [
    {
        id: 1,
        stars: "★★★★★",
        text: "I ordered the Royal Jaipur Tassel Kurti Set and requested custom alteration for my waist. The fit was absolutely flawless! The colors are incredibly vibrant and the fabric is incredibly soft. I received so many compliments at a family lunch. Highly recommend Label Harsha!",
        authorName: "Ananya Patel",
        badge: "Verified Patron, Google Review",
        avatar: "A"
    },
    {
        id: 2,
        stars: "★★★★★",
        text: "The Banarasi silk saree is a masterpiece! The gold zari embroidery glows and the pink is so rich and vibrant. I consulted with the designer on WhatsApp for style suggestions, and she was so helpful. Absolute luxury experience at a very reasonable price.",
        authorName: "Pooja Shah",
        badge: "Local Guide, Nadiad Business Review",
        avatar: "P"
    },
    {
        id: 3,
        stars: "★★★★★",
        text: "Label Harsha has completely solved my search for premium readymade fusion outfits. Their gowns and tunics are styled so uniquely with lovely, vibrant color palettes. The block prints are beautiful and the tailored stitch holds up perfectly after multiple washes!",
        authorName: "Riya Vaghela",
        badge: "Fashion Influencer",
        avatar: "R"
    },
];

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

export function ReviewsContent() {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-desc">
                        Read real reviews from our gorgeous patrons detailing their experience with fitting and fabric quality.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {reviews.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
