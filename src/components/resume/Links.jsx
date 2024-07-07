import React from 'react';
import Link from './Link';
import GitHubIcon from '/gitHub.svg';
import PDF from '/pdf.svg';
import Block from './Block';

const Links = () => {
  return (
    <Block title="Links">
      <div className="link-list">
        <Link href="https://github.com/CandaceAhrends">
          <img src={GitHubIcon} alt="github"></img>
          <span>Github Profile</span>
        </Link>
        <Link href="/reactresume/candaceahrends.pdf">
          <img src={PDF} alt="pdf"></img>
          <span>Resume (pdf)</span>
        </Link>
      </div>
    </Block>
  );
};

export default Links;
