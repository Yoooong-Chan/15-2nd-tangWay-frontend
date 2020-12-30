import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Service({ data }) {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.0.7:8000/flight/service`)
      .then((res) => res.json())
      .then((res) => setServiceData(res.SERVICE));
  }, []);
  return (
    <ServiceSection>
      <h2>부가서비스 & 제휴서비스</h2>
      <div className="serviceList">
        {data.Services?.map((item, idx) => (
          <ServiceContent key={idx}>
            <img src={item.image} alt="service" />
            <p>{item.name}</p>
          </ServiceContent>
        ))}
      </div>
    </ServiceSection>
  );
}

export default Service;

const ServiceSection = styled.section`
  width: 100%;
  padding: 50px 0px;
  h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
  }
  .serviceList {
    display: flex;
    width: 1224px;
    margin: 50px auto 20px;
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 200px;
  margin: 0 12px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    height: 245px;
    background-color: red;
    transition: all 0.1s;
    p {
      color: white;
    }
  }
  img {
    width: 100px;
    margin-top: 27px;
  }

  p {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
`;
