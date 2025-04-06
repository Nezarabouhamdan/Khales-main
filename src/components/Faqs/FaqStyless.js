// src/components/FAQ/FaqStyles.js
import styled from 'styled-components';

/* 
  The main section that holds the background gradient.
  Positions the FAQ container in the middle.
*/
export const Section = styled.section`
  width: 100%;
  height: 100vh;
background: linear-gradient(to bottom , #000000, #66a109, #ffffff);
  position: relative;
`;

/* 
  The white card container that holds the FAQ content.
  Centered via absolute positioning on larger screens.
*/
export const FaqContainer = styled.div`
  width: 50%;
  min-height: 440px;
  height: auto;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Responsive for mobile */
  @media (max-width: 375px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    position: static;
    top: auto;
    left: auto;
    transform: none;
    justify-content: center;
  }
`;

/* Desktop illustration on the left side */
export const FaqLeftDesktop = styled.div`
  width: 50%;
  height: 440px;
  display: none;
  position: relative;

  /* The box image */
  > img {
    position: absolute;
    top: 32%;
    left: -18%;
    width: 30%;
  }

  .faq-left-image-desktop {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    /* The woman illustration */
    img:nth-of-type(1) {
      position: absolute;
      top: 50%;
      left: -14%;
      width: 100%;
      transform: translateY(-50%);
    }

    /* Background pattern */
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: url('https://rvs-faq-accordion-card.netlify.app/images/bg-pattern-desktop.svg')
        no-repeat center / contain;
      transform: scale(2);
      position: absolute;
      top: -53px;
      left: -280px;
      z-index: -1;
    }
  }

  @media (min-width: 375px) {
    display: block;
  }
`;

/* Mobile illustration on the left side */
export const FaqLeftMobile = styled.div`
  width: 85%;
  height: 140px;

  .faq-left-image-mobile {
    width: 100%;
    height: 100%;
    position: relative;

    /* The woman illustration */
    img:nth-of-type(1) {
      position: absolute;
      top: -6%;
      left: 44%;
      width: 100%;
      transform: translate(-50%, -50%);
    }

    /* Background pattern */
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: url('https://rvs-faq-accordion-card.netlify.app/images/bg-pattern-mobile.svg')
        no-repeat center / contain;
      transform: scale(0.9);
      position: absolute;
      top: -15px;
      left: 0;
    }
  }

  @media (min-width: 375px) {
    display: none;
  }
`;

/* Right side: FAQ Title + Body */
export const FaqRight = styled.div`
  width: 50%;
  height: 100%;
  padding: 50px 60px 50px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 375px) {
    width: 100%;
    padding: 25px;
    align-items: center;
  }
`;

export const FaqTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;

  @media (max-width: 375px) {
    margin-bottom: 35px;
  }
`;

export const FaqBody = styled.div`
  position: relative;

  details {
    border-bottom: 1px solid var(--dividers_light-grayish-blue);
    margin-bottom: 20px;
    cursor: pointer;

    &:not([open]) {
      padding-bottom: 15px;
    }

    &:not([open]) summary:hover {
      color: var(--primary_text-soft-red);
    }

    summary {
      color: var(--neutral_text-very-dark-grayish-blue);
      font-weight: 700;
      display: block;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        background: url('https://rvs-faq-accordion-card.netlify.app/images/icon-arrow-down.svg')
          no-repeat center / contain;
        width: 10px;
        height: 10px;
        transform: rotate(0deg);
      }
    }

    &[open] summary::after {
      transform: rotate(180deg);
    }

    p {
      color: var(--neutral_text-dark-grayish-blue);
      line-height: 18px;
      padding-right: 25px;
      font-weight: 400;
      font-size: 11px;
    }
  }
`;
