
import styled from 'styled-components'
// import {theme }  from '../../theme/GlobalStyles/index'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


export const CarouselButton = styled.button`
    min-width: 80px;
    font-weight: 500;
    outline: none;
    border: none;
    border: 2px solid #b09661;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.220);
    color: white;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.363);
    &:hover {
        color: #b09661;
    }

`;
    
export const ButtonIcon = styled(MdOutlineKeyboardArrowRight)`
`;
