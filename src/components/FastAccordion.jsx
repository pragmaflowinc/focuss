import React from "react";
// import { faker } from "@faker-js/faker";
import Accordion from "react-fast-accordion";

// Your list - array of objects, id is required
// const data = Array.from({ length: 200 }, () => {
//   return {
//     id: faker.datatype.uuid(),
//     title: faker.hacker.noun(),
//     content: faker.hacker.phrase(),
//   };
// });

// create type if you need intellisense
// props = typeof data[0] & {
//   isOpen: boolean;
//   onClick: (txt: string) => void;
// };


// all the props get passed here with isOpen


const FastAccordion = (props) => {
  
  const {
    isOpen,
    onClick,
    children
  } = props;
  

  const SummaryComponent = ( title, isOpen ) => (
    <div className="header">
      {title} <span className={(isOpen ? "open" : "") + " chevron"}>👇</span>
    </div>
  );
  
  // component will get wrapped in <div class="acc-content">
  const DetailComponent = (content, onClick) => (
    <p onClick={() => onClick(content)}>{content}</p>
  );
  
  
  return (
    <div>
      <Accordion
        items={children}
        // you can pass any props,
        // it will be passed to the Detail & Summary
        onClick={onClick}
        isOpen={isOpen}
        SummaryComponent={SummaryComponent}
        DetailComponent={DetailComponent}
      />
    </div>
  );
};

export default FastAccordion;