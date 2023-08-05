import {useState} from 'react';
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

export const useMembers = () => {
  const [members, setMembers] = useState(MEMBER_LIST)

  const deleteMember = (memberId: string) => {
    setMembers(members.filter(member => member._id !== memberId));
  }

  return {
    members,
    deleteMember,
  }
}
