import React from "react";
import styled from "styled-components";
import { AlertCircle } from "react-feather";

interface Props {
  open: boolean;
  setOpen: (newState: boolean) => void;
  body: React.ReactNode;
}

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  max-width: 30rem;
  width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-left: 0.5rem;
`;

const ModalBody = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const ModalButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ModalCancelButton = styled(ModalButton)`
  background-color: #fff;
  border: 1px solid #d1d5db;
  color: #6b7280;
  margin-left: 0.5rem;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const ModalConfirmButton = styled(ModalButton)`
  background-color: #10b981;
  border: none;
  color: #fff;

  &:hover {
    background-color: #059669;
  }
`;

const Modal: React.FC<Props> = ({ open = false, setOpen, body }) => {
  const closeModal = () => {
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
              <AlertCircle color="red" size={18} aria-hidden="true" />
            </div>
            <ModalTitle>Lembrete</ModalTitle>
          </ModalHeader>
          <ModalBody>{body}</ModalBody>
          <ModalFooter>
            <ModalConfirmButton onClick={closeModal}>
              Continuar
            </ModalConfirmButton>
            {/* <ModalCancelButton onClick={closeModal}>Cancelar</ModalCancelButton> */}
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
