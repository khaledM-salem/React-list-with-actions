import {useState, useEffect} from 'react';
import {Member} from '../features/members/models/member';

const MEMBER_LIST: Member[] = [{
  _id: 'pablo',
  firstName: 'Pablo',
  lastName: 'Escobar',
  email: 'pablo.escobar@medelin.mx',
  title: 'Founder',
  role: 'Owner'
}, {
  _id: 'jorge',
  firstName: 'Jorge Luis',
  lastName: 'Ochoa Vàsquez',
  email: 'jorge.vaskez@medelin.mx',
  title: 'Chief Executive officer',
  role: 'Admin'
}, {
  _id: 'carlos',
  firstName: 'Carlos',
  lastName: 'Lehder',
  email: 'carlos.lehder@medelin.mx',
  title: 'Project Manager',
  role: 'Member'
}]

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  role: string;
}

export const useMembers = () => {
  const [members, setMembers] = useState(MEMBER_LIST)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDeactivateClick = (member: User) => {
    setShowConfirmationModal(true);
    setSelectedUser(member);
  };

  const handleCancelClick = () => {
    setShowConfirmationModal(false);
  };

  const deleteMember = () => {
    if (selectedUser?._id) {
      setMembers(members.filter(member => member._id !== selectedUser._id));
    }
    setShowConfirmationModal(false);
  }

  return {
    members,
    deleteMember,
    handleDeactivateClick,
    handleCancelClick,
    showConfirmationModal,
    selectedUser,
  }
}
