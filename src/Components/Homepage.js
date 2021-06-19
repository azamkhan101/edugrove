import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../Animation/homepage.json";
import animationData2 from "../Animation/plant.json";

function Homepage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className='home-heading'>
        <p>
          Learn Computer Science from the best <strong>free resources</strong>{" "}
          online! and <strong>nurture saplings</strong> while doing so!
        </p>
        <p>
          For every task you complete, <strong>Earn coins</strong> which can be
          used to plant trees!
        </p>
      </div>
      <div className='home-page'>
        <Lottie options={defaultOptions2} height={550} width={260} />
        <Link to='/courses'>
          <div className='get-started'>Get Started!</div>
        </Link>
        <Lottie options={defaultOptions} height={550} width={600} />
      </div>
    </div>
  );
}

export default Homepage;
