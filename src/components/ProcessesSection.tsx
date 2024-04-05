import React from "react";
import "./ProcessesSection.scss";
import ProcessCard from "./MiscElements/ProcessCard";

const ProcessesSection = () => {
  return (
    <section className="processes-section">
      <div className="processes-container">
        <div className="categorie-wrapper">
          <img
            className="star"
            loading="lazy"
            alt=""
            src="/hulo.dev-test-page/star-2.svg"
          />
          <p>OUR PROCESS</p>
        </div>
        <div className="processes-wrapper">
          <ProcessCard
            cardNumber="01"
            headline="strategic PLANNING"
            subHeadline="Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business?"
            description="Deep breaths. Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business? Deep breaths. We’ve got you covered. Our process kicks off with research and concept development. We want to take a learning deep-dive when it comes to your company's history, goals, and dreams for the future. Then, our team will design a branding concept to take your business to the next level–and then craft a mastermind plan to roll it out."
          />
          <ProcessCard
            cardNumber="02"
            headline="creative EXECUTION"
            subHeadline="We believe in the marketing trifecta: visuals, copy, and technology."
            description="Deep breaths. Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business? Deep breaths. We’ve got you covered. Our process kicks off with research and concept development. We want to take a learning deep-dive when it comes to your company's history, goals, and dreams for the future. Then, our team will design a branding concept to take your business to the next level–and then craft a mastermind plan to roll it out."
          />
          <ProcessCard
            cardNumber="03"
            headline="strategic PLANNING"
            subHeadline="In this day and age, having a strong online presence is like getting a good night’s sleep–it’s just that important."
            description="And whenever a business grows, its website and social media need to be updated. We know more than anyone that managing your online spaces can be onerous and overwhelming. Our team is here to support you throughout any and every stage of your business development. While other companies can be fragmented and slow-moving in their outsourcing offerings, you can trust us to do better. Our support is guaranteed to be personable, consistent, and efficient."
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessesSection;
