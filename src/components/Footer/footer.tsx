import { FooterContainer } from '../../pages/App.styles' // Importe o estilo do footer

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} João Ricardo</p>
      <p>
        Feito com ❤️ em <a href="/">Campinas</a>
      </p>
    </FooterContainer>
  )
}

export default Footer
