export type CrewMember = {
  name: string;
  gender: 'male' | 'female';
  role: CrewMemberRole;
  phrase?: string;
  profilePicture: string;
  socialNetworks: Array<SocialNetwork>;
};

export type CrewMemberRole = {
  name: string;
  description: string;
};

export type SocialNetwork = {};
