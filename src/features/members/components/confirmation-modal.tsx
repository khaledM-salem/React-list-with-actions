import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ConfirmationModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  show,
  onClose,
  onConfirm,
  userName,
}) => {
  const message = `Are you sure you want to deactivate <strong>${userName}'s</strong> account? All of <br>your data will be permanently removed.This action cannot <br> be undone.`;


  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const handleOutsideClick = (event: MouseEvent) => {
    const modalElement = document.getElementById('confirmation-modal');
    if (modalElement && !modalElement.contains(event.target as Node)) {
      onClose();
    }
  };

  React.useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalContent id="confirmation-modal">
        <Title>
          <WarningIcon>
            <ExclamationMark>!</ExclamationMark>
          </WarningIcon>
          Deactivate Account
        </Title>
        <ModalMessage dangerouslySetInnerHTML={{ __html: message }} />
        <ModalButtons>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Deactivate</ConfirmButton>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

const Title = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const WarningIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ffc0c0; /* Light red background color */
  border: 1px solid red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  position: relative;
`;

const ExclamationMark = styled.span`
  color: red;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ModalMessage = styled.p`
  margin-top: 16px;
  margin-bottom: 20px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
  color: #000000;
`;

const ConfirmButton = styled.button`
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

export default ConfirmationModal;
