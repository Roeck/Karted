import styled from 'styled-components'

const Brand = styled.div`
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #8e8e8e, rgb(0, 0, 0), #5e5e5e);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-text-fill-color: #f4f4f46b;
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
`

export default Brand;