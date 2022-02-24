import styled, {css} from 'styled-components'

const Footer = styled.footer`
  grid-area: footer;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.fontSize? css`
          font-size: props.fontSize;             
`:''}
`
export default Footer;


