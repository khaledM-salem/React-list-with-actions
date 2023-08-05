import React from 'react';
import {Member} from '../models/member';
import styled from 'styled-components';
import {TextButton} from '../../../components/buttons';

type MembersListItemProps = {
  member: Member;
  onDelete: (memberId: string) => void;
}

export const MembersListItem: React.FC<MembersListItemProps> = ({
  member,
  onDelete
}) => {
  const handleDelete = () => onDelete(member._id);
  const displayName = `${member.firstName} ${member.lastName}`;

  return (
    <Container>
      <td>
        {displayName}
      </td>

      <td>
        {member.title}
      </td>

      <td>
        {member.email}
      </td>

      <td>
        {member.role}
      </td>

      <td>
        <TextButton
          text={'Deactivate'}
          onClick={handleDelete}
        />
      </td>
    </Container>
  );
}

const Container = styled.tr`
  color: #6b7280;
  
  td:first-child {
    font-weight: 500;
    color: black;
    padding-left: 1.6rem;
  }
  
  td:last-child {
    text-align: right;
  }
`;
