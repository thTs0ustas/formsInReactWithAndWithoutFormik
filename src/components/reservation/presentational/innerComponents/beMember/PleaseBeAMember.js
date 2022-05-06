import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ButtonForMembers,
  PleaseBeAMember,
  PleaseBeAMemberHeader,
  PleaseBeAMemberParagraph,
} from "../../styledComponents";

function BeAMember({ link }) {
  const navigate = useNavigate();
  return (
    <PleaseBeAMember>
      <div>
        <PleaseBeAMemberHeader>Pretty Please be a member</PleaseBeAMemberHeader>
        <PleaseBeAMemberParagraph>TERMS AND CONDITIONS APPLY </PleaseBeAMemberParagraph>
      </div>
      <ButtonForMembers onClick={() => navigate(link)}>BE A MEMBER</ButtonForMembers>
    </PleaseBeAMember>
  );
}
BeAMember.propTypes = {
  link: PropTypes.string.isRequired,
};
export { BeAMember };
