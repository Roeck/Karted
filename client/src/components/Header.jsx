import styled from 'styled-components'

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
`
export default Header;
