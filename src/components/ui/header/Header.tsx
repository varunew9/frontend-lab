import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown, Plus, User, ArrowRight } from "lucide-react";

import classes from "./Header.module.scss";
import logo from "../../../assets/logo.svg";

import { Container } from "../container/Container";
import { Button } from "../button/Button";
import { features } from "../../../config/features";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setFeaturesOpen(false);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nbar}>
        <Container>
          <div className={classes.navbarInner}>
            {/* Logo */}
            <Link to="/" className={classes.brand} onClick={closeMenu}>
              <div className={classes.logo}>
                <img src={logo} alt="Varun Verma" />
              </div>
              <span>Varun Verma</span>
            </Link>

            {/* Navigation */}
            <div className={`${classes.navigation} ${menuOpen ? classes.navigationOpen : ""}`}>
              {/* Features Dropdown */}
              <div className={classes.dropdown}>
                <button type="button" className={classes.navLink} onClick={() => setFeaturesOpen((prev) => !prev)} aria-expanded={featuresOpen}>
                  Features
                  <ChevronDown className={`${classes.chevron} ${featuresOpen ? classes.rotate : ""}`} />
                </button>

                <div className={`${classes.dropdownMenu} ${featuresOpen ? classes.dropdownOpen : ""}`}>
                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <Link key={feature.path} to={feature.path} className={classes.featureItem} onClick={closeMenu}>
                        <div className={classes.featureIcon}>
                          <Icon size={20} />
                        </div>

                        <div className={classes.featureContent}>
                          <strong>{feature.title}</strong>
                          <span>{feature.description}</span>
                        </div>
                      </Link>
                    );
                  })}

                  <div className={classes.featureItem}>
                    <div className={classes.featureIcon}>
                      <Plus size={20} />
                    </div>

                    <div className={classes.featureContent}>
                      <strong>More Coming Soon</strong>
                      <span>More projects will be added</span>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/counter" className={classes.navLink} onClick={closeMenu}>
                Counter
              </Link>
              <Link to="/theme-changer" className={classes.navLink} onClick={closeMenu}>
                Theme Changer
              </Link>
              <Link to="#faq" className={classes.navLink} onClick={closeMenu}>
                FAQ
              </Link>
            </div>

            {/* Actions */}
            <div className={classes.actions}>
              <Button className={classes.loginButton}>
                <User size={16} />
                <span>Log in</span>
              </Button>

              <Button className={classes.startedButton}>
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Button>

              {/* Hamburger Toggle */}
              <button
                type="button"
                className={classes.menuButton}
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                  setFeaturesOpen(false);
                }}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
