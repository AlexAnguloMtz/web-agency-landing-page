import { CrewMemberRole } from './CrewMemberRole';

export type CrewMember = {
  name: string;
  gender: 'male' | 'female';
  role: CrewMemberRole;
  profilePicture: string;
  phrase?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
};
