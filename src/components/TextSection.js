import React from 'react';

const TextSection = () => {
  return (
    <div className="text-section">
      {/* Name and tagline */}
      <div className="info">
        <h1 className='kalam-regular'>Aman Gupta</h1>
        <h2 className='rokkitt-regular'>Talk me anything about Engineering</h2>
      </div>
      {/* Description */}
      <h3 className='rokkitt-regular'>Passionate in solving problems with technology.</h3>
      {/* Social media links */}
      <div className="social-links">

      <a href="https://www.linkedin.com/in/yourengineerbro/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/yourengineerbro" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:guptaaman9981@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://topmate.io/yourengineerbro" target="_blank" rel="noopener noreferrer">
      <img src="https://topmate.io/favicon.svg" alt="Topmate" class="social-icon" />
    </a>
        {/* <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="social-icon" />
        </a> */}
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a> */}
        {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a> */}
        {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a> */}
        {/* <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer">
          <img src="https://sta.codeforces.com/s/32203/images/codeforces-logo-with-telegram.png" alt="Codeforces" className="social-icon" />
        </a> */}
        {/* <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-reddit"></i>
        </a>
        <a href="https://quora.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-quora"></i>
        </a> */}
      </div>
      {/* Footer */}
      <footer>All rights reserved © 2024</footer>
    </div>
  );
};

export default TextSection;
