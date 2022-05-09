import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, PromoButton, PromoPara, Title } from "../styleComponents/PromoElements";

export function PromoMember({ img, content, offerType }) {
  const navigate = useNavigate();
  return (
    <Container>
      <img
        className='image-container'
        src={require(`../../../assets/imgs/${img}.jpg`)}
        alt='movie-theater'
      />
      <div className='bottom-div'>
        <Title className='hide-content'>{offerType}</Title>
        <PromoPara className='hide-content'>{content} </PromoPara>
        <PromoButton onClick={() => navigate("/signup")} className='hide-btn'>
          Join Now
        </PromoButton>
      </div>
    </Container>
  );
}

PromoMember.propTypes = {
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  offerType: PropTypes.string.isRequired,
};
