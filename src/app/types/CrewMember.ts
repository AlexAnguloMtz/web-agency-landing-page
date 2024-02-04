export type CrewMember = {
  name: string;
  gender: 'male' | 'female';
  role: string;
  phrase?: string;
  profilePicture: string;
  socialNetworks: Array<SocialNetwork>;
};

export type SocialNetwork = {};
