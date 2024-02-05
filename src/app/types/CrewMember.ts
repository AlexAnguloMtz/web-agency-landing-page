import { CrewMemberRole } from './CrewMemberRole';

export type CrewMember = {
  name: string;
  image: string;
  role: CrewMemberRole;
  gender?: 'male' | 'female';
  phrase?: string;
  biography?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
};
