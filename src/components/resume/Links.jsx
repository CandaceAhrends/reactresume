import React from "react";
import Link from "./Link";
import GitHubIcon from "/gitHub.svg";
import PDF from "/pdf.svg";

const Links = () => {
  return (
    <section>
      <h4>Links</h4>
      <Link href="https://github.com/CandaceAhrends">
        <img src={GitHubIcon} alt="github"></img>
        <span>Github Profile</span>
      </Link>
      <Link href="/reactresume/candaceahrends.pdf">
        <img src={PDF} alt="pdf"></img>
        <span>Resume (pdf)</span>
      </Link>
    </section>
  );
};

export default Links;
