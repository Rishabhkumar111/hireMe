import React from "react";
import MyButton from "./MyButton";
import Heading from "./Heading";
import Image from "./Image";
import ButtonWrapper from "../buttonWraper/ButtonWrapper";
import PageWrapper from "../buttonWraper/PageWrapper";
import LinkedInSvg from "../customSvgs/LinkedInSvg";
import GitHubSvg from "../customSvgs/GitHubSvg";
import PortfolioSvg from "../customSvgs/PortfolioSvg";

const LastPage = () => {
  const handleConnect = () => {};

  return (
    <PageWrapper>
      {/* Text */}
      <Heading text={"Yeeyy ! Finally"} />

      {/* gif */}
      <Image imgSrc={"https://media.tenor.com/RO4xfVyooqQAAAAi/cute.gif"} />

      <ButtonWrapper>
        {/* connect button */}
        <a
          href="https://www.linkedin.com/in/rishabh-kumar-2b17251a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyButton
            text={"Let's Connect on LinkedIn!!"}
            handleClick={handleConnect}
            img={<LinkedInSvg />}
          />
        </a>
      </ButtonWrapper>
      <div className=" mt-12 flex lg:gap-16 md:gap-4 sm:gap-2">
        <a
          href="https://personal-portfolio-eight-olive-27.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyButton
            text={"PortFolio web"}
            handleClick={handleConnect}
            img={<PortfolioSvg />}
          />
        </a>
        <a
          href="https://github.com/Rishabhkumar111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyButton
            text={"Git Hub"}
            handleClick={handleConnect}
            img={<GitHubSvg />}
          />
        </a>
      </div>
    </PageWrapper>
  );
};

export default LastPage;
