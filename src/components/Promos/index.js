
import {  Container, PromoButton, Title, PromoPara } from './PromoElements';

export const PromoStudents = () => {
    return (
        <Container> 
           <img className="image-container" src= {require(`../../assets/imgs/students.jpg`)} alt="students-promo"/>
            <div className ="bottom-div">
                <Title className='hide-content'>Student Offer -8$</Title>
                <PromoPara className='hide-content'> Procrastinate smarter not harder. Every Wednesday you pay for 1 ticket and you get 2 </PromoPara>
                <PromoButton className= "hide-btn"> GET OFFER </PromoButton>
            </div>           
        </Container>
    )
}

export const PromoMember = () => {
    return (
        <Container> 
           <img className="image-container" src= {require(`../../assets/imgs/movie-theater.jpg`)} alt="movie-theater"/>
            <div className ="bottom-div">
                <Title className='hide-content'>Join Our Club - 15$</Title>
                <PromoPara className='hide-content'>Become a member and enjoy our exclusive benefits </PromoPara>
                <PromoButton className= "hide-btn"> GET OFFER </PromoButton>
            </div>           
        </Container>
    )
}

