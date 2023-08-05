import React from 'react';
import {MembersList} from '../features/members/components/members-list';
import {useMembers} from '../api/use-members';
import {Page} from '../components/layout/page';

export const MemberPage = () => {
  const {members, deleteMember, handleDeactivateClick, handleCancelClick, showConfirmationModal, selectedUser} = useMembers();

  return (
    <Page
      title="Users"
      description="A list of all the users in your account including their name, title, email and role."
    >
      <MembersList
        members={members}
        onDelete={deleteMember}
        handleDeactivateClick={handleDeactivateClick}
        handleCancelClick={handleCancelClick}
        showConfirmationModal={showConfirmationModal}
        selectedUser={selectedUser}
      />
    </Page>
  );
};
