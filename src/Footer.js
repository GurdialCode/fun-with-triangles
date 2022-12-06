import React from "react";
const Footer = () => {
  return (
    <footer>
      <p>&#169;| 2022 | Gurdial Singh</p>
      <div className="d-flex justify-content-center">
        <a
          rel="noreferrer"
          className="ml-1 link"
          href="https://github.com/GurdialCode"
          target="_blank"
        >
          <h5>Github</h5>
        </a>
        <a
          className="ml-1 link"
          rel="noreferrer"
          href="https://twitter.com/Gurdial15977695"
          target="_blank"
        >
          <h5>Twitter</h5>
        </a>
        <a
          className="ml-1 link"
          href="https://www.linkedin.com/in/gurdial-singh-667833b5/"
          target="_blank"
          rel="noreferrer"
        >
          <h5>Linkedin</h5>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
