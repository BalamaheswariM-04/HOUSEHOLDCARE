import React from 'react';
import './CustomerReview.css';
// import Navbar from './Navbar';

const CustomerReview = () => {
  return (
    <div>
    <div className="customer-review-container">
      <div className="customer-review-card">
        <h2>Customer <span>Review</span></h2>
        <div className="review-container">
          <div className="review">
            <img src="https://picture.lk/files/preview/960x1713/11710951720eawrl3tpm0jetkvzni2cs6dn2nq98ny8zrllecbnvouwvhtrbm9haiagpkteqls2ti3ofjxz2sri1ciemzvyrvbqgjxrhe7lb6vi.jpg" alt="Reviewer 1" className="reviewer-img" />
            <p>
              <span className="stars">★★★★★</span>
              <br />
              "The quality of the products is next level. I will definitely be purchasing again."
            </p>
          </div>
          <div className="review">
            <img src="https://wallpapers.com/images/hd/pretty-profile-pictures-k1qebyviiyl0wx0x.jpg" alt="Reviewer 2" className="reviewer-img" />
            <p>
              <span className="stars">★★★★★</span>
              <br />
              "I can't believe I didn't discover this sooner. This product has simplified my life and made a noticeable difference."
            </p>
          </div>
        </div>
        <div className="social-handle">
          @reallygreatsite
        </div>
      </div>
    </div>
    </div>
  );
}

export default CustomerReview;