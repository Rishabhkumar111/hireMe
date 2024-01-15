import { useState, useEffect } from "react";
import LastPage from "./components/LastPage";
import MyButton from "./components/MyButton";
import RunningButton from "./components/RunningButton";
import Heading from "./components/Heading";
import Image from "./components/Image";
import ButtonWrapper from "./buttonWraper/ButtonWrapper";
import PageWrapper from "./buttonWraper/PageWrapper";
import { Link } from "react-router-dom";

function App() {
  const [lastPage, setLastPage] = useState(false);
  const [val, setval] = useState({});

  useEffect(() => {
    let button = document.getElementById("runningButton");
    let temp = button.getBoundingClientRect();
    setval(temp);
  }, []);

  const handleHire = () => {
    setLastPage(true);
  };

  if (lastPage) {
    return <LastPage />;
  }

  return (
    <PageWrapper>
      {/* Text */}
      <Heading text={"Do you wanna Hire me ?"} />

      {/* gif */}
      <Image
        imgSrc={"https://media.tenor.com/F4beteoaDrsAAAAi/please-cute.gif"}
      />

      {/* buttons div */}
      <ButtonWrapper>
        {/* hire button */}
        <Link to="/thanks">
          <MyButton handleClick={handleHire} text={"Hire Me!!"} />
        </Link>

        {/* running button with div */}
        <RunningButton text={"No 😔"} val={val} />
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default App;
