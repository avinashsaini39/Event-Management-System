import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './Footer.css'; // Import custom CSS for footer styling

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-info">
              <img src="img/logo.png" alt="TheEvent" />
              <p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.</p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links" style={{marginLeft:"10rem"}}>
              <h4>Useful Links</h4>
              <ul>
                <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
              <div className="social-links">
                <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="google-plus"><i className="fab fa-google-plus"></i></a>
                <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="copyright" style={{marginLeft:"25rem"}}>
        &copy; Copyright <strong>TheEvent</strong>. All Rights Reserved
      </div>
      <div class="credits">
       
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
    </footer>
  );
}

export default Footer;