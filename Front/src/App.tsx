// import './App.css';
import React from 'react';


type NavbarProps = {
    title: string;
    navItems: string[];
  };
  
  type StepProps = {
    stepNumber: number;
    description: string;
    imageSrc: string;
    alt: string;
  };
  

const visuallyHidden: React.CSSProperties = {
  border: 0,
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
};


const Navbar: React.FC<NavbarProps> = ({ title, navItems }) => {
  return (
  <header className="navbar">
    <div className="navbar-logo">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d5d8419b2c7b248d565c3edc7df218ee162404f7c3088b95d09ca6229d78e87?apiKey=7df86384d0c5443ba675164a0485c4a7&" alt="" className="logo-image" />
      <h1>{title}</h1>
    </div>
    <nav className="nav-menu">
      {navItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="nav-divider" />}
          <div className="nav-item">{item}</div>
        </React.Fragment>
      ))}
    </nav>
    <div className="auth-buttons">
      <div className="login-container">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bda78136e74ce02f855e9cc595a161c7d879a44fc79c9ba19d3c928f77503f1f?apiKey=7df86384d0c5443ba675164a0485c4a7&" alt="" className="login-image" />
        <div className="login-text">Login</div>
      </div>
      <div className="signup-text">SignUp</div>
    </div>
  </header>
)
};

const StepCard: React.FC<StepProps> = ({ stepNumber, description, imageSrc, alt }) => (
  <article className="step-card">
    <section className="step-header">
      <div className="step-circle">{stepNumber}</div>
      <div className="step-label">Step</div>
    </section>
    <section className="step-body">
      <p className="step-description">{description}</p>
      <img loading="lazy" src={imageSrc} alt={alt} className="step-image" />
    </section>
  </article>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="search-container">
        <button type="button" className="search-button">
          <span>Search</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/430aaf299ec2fd12a9e776ad7d665556bcf2a778fda203c1e02179f1462a3252?apiKey=7df86384d0c5443ba675164a0485c4a7&" alt="" className="search-icon" />
        </button>
        <label className="postal-code-label" htmlFor="postalCode">Postal code</label>
        <input className="postal-code-input" type="text" id="postalCode" />
      </div>
      <div className="branding">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3548677afc77ba0b2ac8c93e8fc9cbcc8c820947831dd4490985c2295dbc14b8?apiKey=7df86384d0c5443ba675164a0485c4a7&" alt="" className="footer-logo" />
        <h2>SuperClean</h2>
        <div className="social-media-icons">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/653cf1145e510beb898bd33b5e37ef0c355d4f9eed980cd478ff49aed6566a32?apiKey=7df86384d0c5443ba675164a0485c4a7&" alt="" className="social-icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4205d10261062e55a9011eedf98875f539c8b1094f61127644101ff51034b632?apiKey=7df86384d0c5443ba675164a0485c4a7&" alt="" className="social-icon" />
        </div>
      </div>
      <p className="footer-rights">All rights reserved - Data protection - Imprint ©2024 SuperClean</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const navItems = ["Home", "Find Cleaner", "About", "Find Job"];
  const steps = [
    {
      stepNumber: 1,
      description: "Click on “Find Cleaner” and define the filters like “range search” and location restricts.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/61b29beec3bb5a4765b2f8529f526a2656e0ac8e9dc5b2453c21283c0ede5b66?apiKey=7df86384d0c5443ba675164a0485c4a7&",
      alt: "Step 1 Image",
    },
    {
      stepNumber: 2,
      description: "Your cleans request will be show on your profile.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/98973ff71de86c9a5ddda7f6da2e3b2c8f64c6f582036b2d617c53a462fb5b0d?apiKey=7df86384d0c5443ba675164a0485c4a7&",
      alt: "Step 2 Image",
    },
    {
      stepNumber: 3,
      description: "When You receive an Invite, you can accept, refuse or click on notification for more details.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4edf98898b11f6885aa28c0255ccdf988f58f22bf5a2111135754d265d912cbe?apiKey=7df86384d0c5443ba675164a0485c4a7&",
      alt: "Step 3 Image",
    },
  ];

  return (
    <>
      <Navbar title="SuperClean" navItems={navItems} />
      <main className="main-content">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
