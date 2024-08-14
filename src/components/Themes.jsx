import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/1.png",
      title: "Analytical and Numerical Modeling including Soft Computation",
    },
    {
      id: 2,
      url: "/2.png",
      title:
        "Smart and Sustainable Materials for Civil Engineering Construction",
    },
    {
      id: 3,
      url: "/3.png",
      title: "Structural health monitoring and Retrofitting",
    },
    {
      id: 4,
      url: "/4.png",
      title: " Remote Sensing and Geo informatics ",
    },
    {
      id: 5,
      url: "/5.png",
      title: "Air, Noise and Solid waste management",
    },
    {
      id: 6,
      url: "/6.png",
      title: "Road Safety and Traffic management",
    },
    {
      id: 7,
      url: "/7.png",
      title: "Geo-Environmental Engineering",
    },
    {
      id: 8,
      url: "/8.png",
      title: "Advances in Geotechnical Engineering",
    },
    {
      id: 9,
      url: "/9.png",
      title:
        "Sustainable Green Infrastructure and Building including Embodied Energy Estimation",
    },
    {
      id: 10,
      url: "/10.png",
      title: "Water and Wastewater Quality and Treatment",
    },
    {
      id: 11,
      url: "/11.jpeg",
      title: "Disaster risk assessment and management",
    },
    {
      id: 12,
      url: "/12.jpeg",
      title: "Case studies for Sustainable Civil Engineering Application.",
    },
  ];
  return (
    <>
      <section className="services container">
        <h2>CONFERENCE THEMES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </section>
      <marquee
        className="default"
        direction="left"
        scrollamount="12"
        behaviour="scroll"
        loop="3"
      >
        <span>Call For Papers : </span>
        We are inviting all researchers and civil engineering enthusiasts to
        submit their unique research papers by{" "}
        <span>
          15 <sup>th</sup> September, 2024
        </span>
        . For Guidelines{" "}
        <span>
          <a
            href="https://paper-publication-guidelines.vercel.app/"
            target="_blank"
          >
            Click here
          </a>
        </span>
      </marquee>
    </>
  );
};

export default Services;
