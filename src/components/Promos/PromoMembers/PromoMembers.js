import { useNavigate } from "react-router-dom";
import { Container, PromoButton, PromoPara, Title } from "../styleComponents/PromoElements";

export function PromoMember() {
  const navigate = useNavigate();
  return (
    <Container>
      <img
        className='image-container'
        src={require(`../../../assets/imgs/movie-theater.jpg`)}
        alt='movie-theater'
      />
      <div className='bottom-div'>
        <Title className='hide-content'>Join Our Club </Title>
        <PromoPara className='hide-content'>
          Become a member with only 180 € a year (15 € per month) and enjoy our exclusive benefits{" "}
        </PromoPara>
        <PromoButton onClick={() => navigate("/signup")} className='hide-btn'>
          Join Now
        </PromoButton>
      </div>
    </Container>
  );
}
