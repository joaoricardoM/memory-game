import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'

import {
  Container,
  LogoContainer,
  CardsContainer,
  Logo,
  ContainerButton,
  Button
} from './App.styles'

import logo from '../assets/images/logo.png'
import yoda from '../assets/images/yoda.png'

import { createBoard } from '../utils/setup'
import { shuffleArray } from '../utils/utils'

import { CardType } from '../utils/setup'
import Modal from '../components/Modal/Modal'
import Footer from '../components/Footer/footer'

const App = () => {
  const timeout = 1000
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()))
  const [gameWon, setGameWon] = useState(false)
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  )

  const [modal, setModal] = useState(false)

  const [text, setText] = useState('')
  const texts: { id: string; text: string }[] = [
    {
      id: 'text0',
      text: ' Antes de ser Skywalker, Luke era Starkiller. Adventures of the Starkiller, Episode I: The Star Wars era o título da segunda versão do roteiro de Uma Nova Esperança. Luke foi rebatizado e chegou à sua personalidade definitiva durante a pré-produção do filme.'
    },
    {
      id: 'text1',
      text: 'O icônico Darth Vader foi o primeiro personagem do universo Star Wars criado por George Lucas, mesmo com seu tempo de tela limitado no longa original'
    },
    {
      id: 'text2',
      text: 'Apesar da presença marcante em Uma Nova Esperança, Vader aparece, ao todo, por 12 minutos no longa que deu origem à franquia.'
    },
    {
      id: 'text3',
      text: ' Originalmente, Darth Vader seria um caçador de recompensas intergaláctico, mas depois que o personagem se tornou um Jedi caído, Lucas decidiu reciclar o conceito do "bounty hunter" para Boba Fett.'
    },
    {
      id: 'text4',
      text: 'A respiração de Darth Vader foi feita com um respirador de mergulho'
    },
    {
      id: 'text5',
      text: 'O visual Yoda foi baseado em Albert Einstein. Stuart Freeborn, supervisor de efeitos especiais em O Império Contra-Ataca, usou o próprio rosto misturado com o do famoso físico para criar o personagem.'
    },
    {
      id: 'text6',
      text: 'Originalmente, R2-D2 participava de diálogos, com partes realmente faladas.'
    },
    {
      id: 'text7',
      text: 'Variações da fala "tenho um mal pressentimento quanto a isso" foram colocadas em todos os filmes da saga.'
    }
  ]

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true)
    }
  }, [cards.length, matchedPairs])

  function refreshPage() {
    window.location.reload()
  }

  const handleCardClick = (currentClickedCard: CardType) => {
    // Virar carta
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    )

    // Se for a primeira carta virada, permanecer com ela virada
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard })
      return
    }

    // Checar se a carta corresponde ao seu par
    if (
      clickedCard.matchingCardId === currentClickedCard.id ||
      clickedCard.id === currentClickedCard.matchingCardId
    ) {
      const selectedText = texts.find(
        (text) => text.id === currentClickedCard.textId
      )
      setText(selectedText ? selectedText.text : '')
      setModal(true)

      setMatchedPairs((prev) => prev + 1)
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      )
      setClickedCard(undefined)
      return
    }

    // Se não for o par correto
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      )
    }, timeout)

    setClickedCard(undefined)
  }

  return (
    <Container>
      <Modal open={modal} setOpen={setModal} body={text} />

      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <h1>João Ricardo</h1>
        {gameWon && (
          <ContainerButton>
            <img src={yoda} width={200} height={200} alt="yoda" />
            <Button onClick={refreshPage}>Jogar de Novo</Button>
          </ContainerButton>
        )}
      </LogoContainer>
      <CardsContainer>
        {cards.map((card) => (
          <Card key={card.id} callback={handleCardClick} card={card} />
        ))}
      </CardsContainer>
      <Footer />
    </Container>
  )
}

export default App
