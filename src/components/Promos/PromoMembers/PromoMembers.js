import {
  Container,
  PromoButton,
  PromoPara,
  Title,
} from "../styleComponents/PromoElements";

export const PromoMember = () => {
  return (
    <Container>
      <img
        className='image-container'
        src={require(`../../../assets/imgs/movie-theater.jpg`)}
        alt='movie-theater'
      />
      <div className='bottom-div'>
        <Title className='hide-content'>Join Our Club - 15$</Title>
        <PromoPara className='hide-content'>
          Become a member and enjoy our exclusive benefits{" "}
        </PromoPara>
        <PromoButton className='hide-btn'> GET OFFER </PromoButton>
      </div>
    </Container>
  );
};
