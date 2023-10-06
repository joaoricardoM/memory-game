import styled from 'styled-components'
import backgroundImage from '../assets/images/backgroundImage.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background-image: url(${backgroundImage});
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 70px 20px;
  }
`

export const LogoContainer = styled.div`
  flex-direction: column;
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 44px;
    font-weight: 500;
    line-height: 52px;
    text-align: center;
    color: #90d8ef;
    text-shadow: 0px 2px 29px #014051;
    margin-top: 20px;

    @media (max-width: 1000px) {
      font-size: 30px;
    }
  }

  @media (max-width: 1000px) {
    margin-bottom: 70px;
  }
`

export const Logo = styled.img`
  width: 400px;
  @media (max-width: 1000px) {
    width: 250px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralizar verticalmente */
  justify-content: center; /* Centralizar horizontalmente */
  margin-top: 50px;

  img {
    width: 180px;
  }
`

export const Button = styled.button`
  width: 180px;
  height: 55px;
  margin-top: 20px;
  background-color: #dba90d;
  border: none;
  border-radius: 10px;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: #d1f4ff;
  text-shadow: 0px 2px 29px #90d8ef;
  cursor: pointer;

  :hover {
    text-shadow: 0px 0px 14px #90d8ef;
    box-shadow: 0px 6px 60px #dba90d;
  }

  @media (min-width: 1000px) {
    height: 60px;
    font-size: 22px;
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 135px);
  grid-template-rows: repeat(3, 135px);
  justify-items: center;
  align-items: stretch;
  grid-gap: 1.5rem;
`

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 20px;
  text-align: center;

  /* Adicione aqui outros estilos de acordo com suas necessidades */

  a {
    color: #dba90d;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #90d8ef;
    }
  }
`
