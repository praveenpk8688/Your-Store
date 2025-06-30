import React from "react";
import {
  // Ensure all used icons are imported from lucide-react
  Facebook,
  Instagram,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  User,          // Added User icon import
  ShoppingCart,  // Added ShoppingCart icon import
  Heart,         // Added Heart icon import
  LogIn          // Added LogIn icon import
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-white text-dark py-4 rounded-top-4 shadow-lg"
      style={{ fontFamily: "Arial, sans-serif", fontSize: "0.875rem" }}
    >
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="container px-4 pt-4 pb-3 mx-auto">
        <div className="row g-4 justify-content-center">
          {/* Company Info Section (first column) */}
          <div className="col-lg-4 col-md-6 col-12 text-center text-sm-start mb-4 mb-lg-0">
            <div className="d-flex ">
              <img
                src="/images/main_logo.png"
                alt="Company Logo"
                className="img-fluid"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </div>

            <p className="mx-auto mt-3 me-5 text-muted text-center text-sm-start">
              "Style isn’t just worn — it’s lived. Your Store brings you
              clothing that speaks your truth, one stitch at a time."
            </p>

            {/* Social Media Links */}
            <ul className="d-flex justify-content-start gap-5 mt-4 list-unstyled sm:justify-content-start ">
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon text-danger transition hover:opacity-75 p-2 rounded-circle bg-light border border-secondary border-opacity-25 d-inline-flex align-items-center justify-content-center"
                  aria-label="Facebook"
                >
                  <Facebook size={24} /> {/* Lucide React Icon */}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon text-danger transition hover:opacity-75 p-2 rounded-circle bg-light border border-secondary border-opacity-25 d-inline-flex align-items-center justify-content-center"
                  aria-label="Instagram"
                >
                  <Instagram size={24} /> {/* Lucide React Icon */}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon text-danger transition hover:opacity-75 p-2 rounded-circle bg-light border border-secondary border-opacity-25 d-inline-flex align-items-center justify-content-center"
                  aria-label="Twitter"
                >
                  <Twitter size={24} /> {/* Lucide React Icon */}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon text-danger transition hover:opacity-75 p-2 rounded-circle bg-light border border-secondary border-opacity-25 d-inline-flex align-items-center justify-content-center"
                  aria-label="GitHub"
                >
                  <Github size={24} /> {/* Lucide React Icon */}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links (remaining columns) */}
          <div className="col-lg-8 col-md-6 col-12 d-flex justify-content-center justify-content-md-start">
            <div className="row g-4 w-100"> {/* Added w-100 to make row take full width */}
              {/* Quick Links / Policies */}
              <div className="col-sm-6 col-lg-4 text-center text-sm-start">
                <p className="fs-5 fw-semibold text-dark mb-3">Quick Links</p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-dark text-decoration-none transition hover:opacity-75"
                      href="#"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-dark text-decoration-none transition hover:opacity-75"
                      href="#"
                    >
                      Terms & conditions
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-dark text-decoration-none transition hover:opacity-75"
                      href="#"
                    >
                      Shipping policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-dark text-decoration-none transition hover:opacity-75"
                      href="#"
                    >
                      Cancellations & Refunds
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-dark text-decoration-none transition hover:opacity-75"
                      href="#"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="d-flex align-items-center justify-content-center justify-content-sm-start gap-2 text-dark text-decoration-none transition hover:opacity-75"
                      href="#"
                    >
                      <Mail size={20} className="text-dark flex-shrink-0" />
                      <span className="text-dark">Contact us</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Customer Account & Fashion Store Links */}
              <div className="col-sm-6 col-lg-4 text-center text-sm-start">
                <p className="fs-5 fw-semibold text-dark mb-3">Customer Service</p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center justify-content-sm-start gap-2 text-decoration-none text-dark hover-effect"
                    >
                      <User size={18} className="flex-shrink-0" />
                      <span>Account</span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center justify-content-sm-start gap-2 text-decoration-none text-dark hover-effect"
                    >
                      <LogIn size={18} className="flex-shrink-0" />
                      <span>Login / Register</span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center justify-content-sm-start gap-2 text-decoration-none text-dark hover-effect"
                    >
                      <ShoppingCart size={18} className="flex-shrink-0" />
                      <span>Cart</span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center justify-content-sm-start gap-2 text-decoration-none text-dark hover-effect"
                    >
                      <Heart size={18} className="flex-shrink-0" />
                      <span>Wishlist</span>
                    </a>
                  </li>
                   <li className="mb-3">
                    <a
                      className="text-dark text-decoration-none transition hover:opacity-75"
                      href="#"
                    >
                      New Arrivals
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-dark text-decoration-none transition hover:opacity-75"
                      href="#"
                    >
                      Sales & Discounts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-4 mt-5 border-top border-secondary border-opacity-50">
          <div className="text-center text-sm text-muted d-sm-flex justify-content-between align-items-center">
            <p className="mb-2 mb-sm-0">
              <span className="d-block d-sm-inline">All rights reserved.</span>
            </p>

            <p className="mt-3 mt-sm-0 order-sm-first">
              &copy; 2025 Your Store
            </p>
          </div>
        </div>
      </div>
      {/* Custom CSS for ping animation and social icons */}{" "}
      <style>{`
        .social-icon:hover {
          background-color: rgb(233, 11, 29) !important;
          color: black !important;
        }
        @keyframes ping-custom {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .hover-effect {
          transition: color 0.2s ease-in-out;
        }
        .hover-effect:hover {
          color: #dc3545 !important; /* Bootstrap 'danger' red */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
