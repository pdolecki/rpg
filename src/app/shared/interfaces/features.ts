export interface NamedEntity {
  name: string;
  description: string;
}

export interface Quality extends NamedEntity {}

export interface State extends NamedEntity {
  neutralization: string;
  consequences: string;
}

export interface Talent extends NamedEntity {
  max: string;
  tests?: string;
}

export interface Profession extends NamedEntity {
  races: string[];
  paths: ProfessionPath[];
  requirements: ProfessionRequirement;
}

export interface ProfessionPath {
  level: number;
  name: string;
  status: string;
  skills: string[];
  talents: string[];
  equipment: string[];
}

export interface ProfessionRequirement {
  [level: number]: string[];
}