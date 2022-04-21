import {
  ButtonForMembers,
  PleaseBeAMember,
  PleaseBeAMemberHeader,
  PleaseBeAMemberParagraph,
} from "../../styledComponents";
import React from "react";
import { useNavigate } from "react-router-dom";

const BeAMember = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <PleaseBeAMember>
      <div>
        <PleaseBeAMemberHeader>Pretty Please be a member</PleaseBeAMemberHeader>
        <PleaseBeAMemberParagraph>
          TERMS AND CONDITIONS APPLY{" "}
        </PleaseBeAMemberParagraph>
      </div>
      <ButtonForMembers onClick={onClick(navigate)}>
        BE A MEMBER
      </ButtonForMembers>
    </PleaseBeAMember>
  );
};

export { BeAMember };
