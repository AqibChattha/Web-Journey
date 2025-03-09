import React from 'react';

interface Link {
  text: string;
  href: string;
}

interface Section {
  title: string;
  links: Link[];
}

interface FooterProps {
  sections: Section[];
  newsletterText: string;
  companyInfo: string;
  socialLinks: Link[];
}

const Footer: React.FC<FooterProps> = ({ sections, newsletterText, companyInfo, socialLinks }) => {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          {sections.map((section, index) => (
            <div key={index} className="col-6 col-md-2 mb-3">
              <h5>{section.title}</h5>
              <ul className="nav flex-column">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="nav-item mb-2">
                    <a href={link.href} className="nav-link p-0 text-body-secondary">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>{newsletterText}</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© {new Date().getFullYear()} {companyInfo}. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            {socialLinks.map((link, index) => (
              <li key={index} className="ms-3">
                <a className="link-body-emphasis" href={link.href}>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref={link.href}></use>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;