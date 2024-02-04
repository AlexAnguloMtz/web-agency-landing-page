import { CrewMemberRole } from './CrewMemberRole';

export type CrewMember = {
  name: string;
  gender: 'male' | 'female';
  role: CrewMemberRole;
  image: string;
  phrase?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
};
