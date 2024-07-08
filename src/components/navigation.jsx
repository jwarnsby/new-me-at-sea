import React, { useState, useEffect, useRef } from "react";

export const Navigation = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navRef = useRef(null);

  const handleNavCollapse = () => {
    setIsNavCollapsed(prevState => !prevState);
  };

  const closeNavCollapse = () => setIsNavCollapsed(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavCollapsed(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle window resize to close navigation on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Adjust this breakpoint as needed
        setIsNavCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll to #portfolio when Gallery link is clicked
  const handleGalleryClick = () => {
    if (!isNavCollapsed) {
      closeNavCollapse(); // Close navigation if not collapsed
    }
    // Scroll to #portfolio section
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" ref={navRef}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle ${isNavCollapsed ? '' : 'collapsed'}`}
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded={!isNavCollapsed}
            onClick={handleNavCollapse}
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" onClick={closeNavCollapse}>
            A New Me @ Sea
          </a>{" "}
        </div>

        <div
          className={(isNavCollapsed ? 'collapse' : '') + " navbar-collapse"}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              {/* Conditional rendering for Gallery link */}
              <a
                href={isNavCollapsed ? "#gallery" : "#portfolio"}
                className="page-scroll"
                onClick={handleGalleryClick}
              >
                Gallery
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll" onClick={closeNavCollapse}>
                Overview
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={closeNavCollapse}>
                Experts
              </a>
            </li>
            <li>
              <a href="#itinerary" className="page-scroll" onClick={closeNavCollapse}>
                Itinerary
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll" onClick={closeNavCollapse}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={closeNavCollapse}>
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
