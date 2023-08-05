import React from 'react';
import styled from 'styled-components';
import {Member} from '../models/member';
import {MembersListItem} from './members-list-item';

type MembersListProps = {
  members: Member[];
  onDelete: (memberId: string) => void;
};

export const MembersList: React.FC<MembersListProps> = ({
  members,
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
        member={member}
        onDelete={onDelete}
      />
    ))}
    </tbody>
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
