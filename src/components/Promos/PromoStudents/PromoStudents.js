import { useNavigate } from "react-router-dom";
import { Container, PromoButton, PromoPara, Title } from "../styleComponents/PromoElements";

export function PromoStudents() {
  const navigate = useNavigate();
  return (
    <Container>
      <img
        className='image-container'
        src={require(`../../../assets/imgs/students.jpg`)}
        alt='students-promo'
      />
      <div className='bottom-div'>
        <Title className='hide-content'>Student Offer</Title>
        <PromoPara className='hide-content'>
          Procrastinate smarter not harder. Be a member and every Wednesday only 8 € per ticket{" "}
        </PromoPara>
        <PromoButton onClick={() => navigate("/signup")} className='hide-btn'>
          Join Now
        </PromoButton>
      </div>
    </Container>
  );
}
