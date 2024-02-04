import { CrewMemberRole } from './CrewMemberRole';

export type CrewMember = {
  name: string;
  gender: 'male' | 'female';
  role: CrewMemberRole;
  phrase?: string;
  profilePicture: string;
  githubUrl?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
};
