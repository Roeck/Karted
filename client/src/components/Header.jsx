import styled, {css} from 'styled-components'

const Header = styled.header`
    grid-area: header;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    position: sticky;
    z-index: 25;
    top: 0;

    ${props => props.fontSize? css`
    font-size: props.fontSize;             
`:''}
`
export default Header;
