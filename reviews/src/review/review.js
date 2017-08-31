import React from "react";
import { Link } from "react-router-dom";
import { wrapper, sectionWithFlexGrow } from "../styles/styleSheet";

import glamorous from "glamorous";

const Wrapper = glamorous.div(wrapper);
const Section1 = glamorous.section(sectionWithFlexGrow('20%'));
const Section2 = glamorous.section(sectionWithFlexGrow('40%'));
// Glamrous is scope limited and extremely flexible, here we use a style API that allows us to control width on the fly

const Review = ({ id, score, comment, fromEmployee = {}, forEmployee = {} }) => (
  <Wrapper>
    <Section1>{`from: ${fromEmployee.first}, ${fromEmployee.last} `}</Section1>
    <Section1>{`for: ${forEmployee.first}, ${forEmployee.last} `}</Section1>

    <Section1> {score ? score : "Not Completed!"} </Section1>
    <Section2>
      {comment ? comment : <Link to={`/new/${id}`}> Click here to complete review. </Link>}
    </Section2>
  </Wrapper>
);

export default Review;
