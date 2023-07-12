import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

import {
  Container,
  LogoContainer,
  CardsContainer,
  Logo,
  ContainerButton,
  Button,
} from "./App.styles";

import logo from "../assets/images/logo.png";
import yoda from "../assets/images/yoda.png";

import { createBoard } from "../utils/setup";
import { shuffleArray } from "../utils/utils";

import { CardType } from "../utils/setup";
import Modal from "../components/Modal/Modal";

const App = () => {
  const timeout = 1000;
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  const [modal, setModal] = useState(false);

  const [text, setText] = useState("");
  const texts: { id: string; text: string }[] = [
    {
      id: "text0",
      text: "Uma das principais medidas de PREVENÇÃO de infecção é a HIGIENIZAÇÃO das mãos.",
    },
    {
      id: "text1",
      text: "A LIMPEZA das SUPERFÍCIES diminui o número de BACTÉRIAS no ambiente próximo ao paciente",
    },
    {
      id: "text2",
      text: "Todos os profissionais devem realizar a higienização das MÃOS antes e após o CONTATO com o PACIENTE",
    },
    {
      id: "text3",
      text: "A participação do ACOMPANHANTE é FUNDAMENTAL no COMBATE aos microrganismos presentes nos AMBIENTES do hospital.",
    },
    {
      id: "text4",
      text: "Seguimos protocolos para limpeza e DESINFECÇÃO de todos os EQUIPAMENTOS para uso do paciente.",
    },
    {
      id: "text5",
      text: "No atendimento entre um paciente e outro é necessário LAVAR as mãos.",
    },
    {
      id: "text6",
      text: "As luvas devem ser trocadas entre os procedimentos de um mesmo paciente",
    },
    { id: "text7", text: "Todos somos responsáveis pelo controle de infecção" },
  ];

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
    }
  }, [cards.length, matchedPairs]);

  function refreshPage() {
    window.location.reload();
  }

  const handleCardClick = (currentClickedCard: CardType) => {
    // Virar carta
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );

    // Se for a primeira carta virada, permanecer com ela virada
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // Checar se a carta corresponde ao seu par
    if (
      clickedCard.matchingCardId === currentClickedCard.id ||
      clickedCard.id === currentClickedCard.matchingCardId
    ) {
      const selectedText = texts.find(
        (text) => text.id === currentClickedCard.textId
      );
      setText(selectedText ? selectedText.text : "");
      setModal(true);

      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // Se não for o par correto
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, timeout);

    setClickedCard(undefined);
  };

  return (
    <Container>
      <Modal open={modal} setOpen={setModal} body={text} />

      <LogoContainer>
        <Logo src={logo} alt="logo" height={200} />
        <h1>Centro Médico de Campinas</h1>
        {gameWon && (
          <ContainerButton>
            <img src={yoda} width={300} height={300} alt="yoda" />
            <Button onClick={refreshPage}>Jogar de Novo</Button>
          </ContainerButton>
        )}
      </LogoContainer>
      <CardsContainer>
        {cards.map((card) => (
          <Card key={card.id} callback={handleCardClick} card={card} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default App;
