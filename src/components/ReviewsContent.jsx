export function ReviewsContent() {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-desc">Read real reviews from our gorgeous patrons detailing their experience with fitting and fabric quality.</p>
                </div>

                <div className="testimonials-grid">
                    {/* Review 1 */}
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"I ordered the Royal Jaipur Tassel Kurti Set and requested custom alteration for my waist. The fit was absolutely flawless! The colors are incredibly vibrant and the fabric is incredibly soft. I received so many compliments at a family lunch. Highly recommend Label Harsha!"</p>
                        <div className="review-author">
                            <div className="author-avatar">A</div>
                            <div className="author-info">
                                <h4>Ananya Patel</h4>
                                <span>Verified Patron, Google Review</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"The Banarasi silk saree is a masterpiece! The gold zari embroidery glows and the pink is so rich and vibrant. I consulted with the designer on WhatsApp for style suggestions, and she was so helpful. Absolute luxury experience at a very reasonable price."</p>
                        <div className="review-author">
                            <div className="author-avatar">P</div>
                            <div className="author-info">
                                <h4>Pooja Shah</h4>
                                <span>Local Guide, Nadiad Business Review</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Label Harsha has completely solved my search for premium readymade fusion outfits. Their gowns and tunics are styled so uniquely with lovely, vibrant color palettes. The block prints are beautiful and the tailored stitch holds up perfectly after multiple washes!"</p>
                        <div className="review-author">
                            <div className="author-avatar">R</div>
                            <div className="author-info">
                                <h4>Riya Vaghela</h4>
                                <span>Fashion Influencer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
