import {
  Container,
  PromoButton,
  PromoPara,
  Title,
} from "../styleComponents/PromoElements";

export const PromoStudents = () => {
  return (
    <Container>
      <img
        className='image-container'
        src={require(`../../../assets/imgs/students.jpg`)}
        alt='students-promo'
      />
      <div className='bottom-div'>
        <Title className='hide-content'>Student Offer -8$</Title>
        <PromoPara className='hide-content'>
          {" "}
          Procrastinate smarter not harder. Every Wednesday you pay for 1 ticket
          and you get 2{" "}
        </PromoPara>
        <PromoButton className='hide-btn'> GET OFFER </PromoButton>
      </div>
    </Container>
  );
};
