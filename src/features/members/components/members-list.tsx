import React from 'react';
import styled from 'styled-components';
import {Member} from '../models/member';
import {MembersListItem} from './members-list-item';
import ConfirmationModal from './confirmation-modal';

type MembersListProps = {
  members: Member[];
  onDelete: () => void;
  handleDeactivateClick: (member: Member) => void;
  handleCancelClick: () => void;
  showConfirmationModal: boolean;
  selectedUser: Member | null; 
};

export const MembersList: React.FC<MembersListProps> = ({
  members,
  handleDeactivateClick,
  handleCancelClick,
  showConfirmationModal,
  selectedUser,
  onDelete,
}) => (
  <Container>
    <thead>
    <Header>
      <th>Name</th>
      <th>Title</th>
      <th>Email</th>
      <th>Role</th>
      <th/>
    </Header>
    </thead>

    <tbody>
    {members.map(member => (
      <MembersListItem
        key={member._id}
        member={member}
        handleDeactivateClick={handleDeactivateClick}
      />
    ))}
    </tbody>
    <ConfirmationModal
      show={showConfirmationModal}
      onClose={handleCancelClick}
      onConfirm={onDelete}
      userName={`${selectedUser?.firstName}${' '}${selectedUser?.lastName}`}
    />
  </Container>
);

const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: .8rem;
  overflow: hidden;
`;

const Header = styled.tr`
  background: #fafafb;
  text-align: left;
  border-radius: .8rem .8rem 0 0;
  height: 3.2rem;
  
  th:first-child {
    padding-left: 1.6rem;
  }
`;
