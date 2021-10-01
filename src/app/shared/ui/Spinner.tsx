import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 6%;
    height: 16%;
    position: absolute;
    left: 49%;
    top: 43%;
    opacity: 0;
    border-radius: 50px;
    animation: fade 1s linear infinite;
    background: #4a4a4a;

    &.bar1 {
      transform: rotate(0deg) translate(0, -130%);
      animation-delay: 0s;
    }

    &.bar2 {
      transform: rotate(30deg) translate(0, -130%);
      animation-delay: -0.9167s;
    }

    &.bar3 {
      transform: rotate(60deg) translate(0, -130%);
      animation-delay: -0.833s;
    }

    &.bar4 {
      transform: rotate(90deg) translate(0, -130%);
      animation-delay: -0.7497s;
    }
    &.bar5 {
      transform: rotate(120deg) translate(0, -130%);
      animation-delay: -0.667s;
    }
    &.bar6 {
      transform: rotate(150deg) translate(0, -130%);
      animation-delay: -0.5837s;
    }
    &.bar7 {
      transform: rotate(180deg) translate(0, -130%);
      animation-delay: -0.5s;
    }
    &.bar8 {
      transform: rotate(210deg) translate(0, -130%);
      animation-delay: -0.4167s;
    }
    &.bar9 {
      transform: rotate(240deg) translate(0, -130%);
      animation-delay: -0.333s;
    }
    &.bar10 {
      transform: rotate(270deg) translate(0, -130%);
      animation-delay: -0.2497s;
    }
    &.bar11 {
      transform: rotate(300deg) translate(0, -130%);
      animation-delay: -0.167s;
    }
    &.bar12 {
      transform: rotate(330deg) translate(0, -130%);
      animation-delay: -0.0833s;
    }
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }
`;

const Spinner = (): JSX.Element => {
  return (
    <SpinnerContainer>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
      <div className="bar4" />
      <div className="bar5" />
      <div className="bar6" />
      <div className="bar7" />
      <div className="bar8" />
      <div className="bar9" />
      <div className="bar10" />
      <div className="bar11" />
      <div className="bar12" />
    </SpinnerContainer>
  );
};

export default Spinner;
