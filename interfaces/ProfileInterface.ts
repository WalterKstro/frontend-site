export interface Profile {
  profilePage: ProfilePage;
}

export interface ProfilePage {
  me: Me;
  experiencesCollection: ExperiencesCollection;
  educationsCollection: EducationsCollection;
  __typename: string;
}

export interface EducationsCollection {
  items: EducationsCollectionItem[];
  __typename: string;
}

export interface EducationsCollectionItem {
  career: string;
  institute: string;
  date: string;
  __typename: string;
}

export interface ExperiencesCollection {
  items: ExperiencesCollectionItem[];
  __typename: string;
}

export interface ExperiencesCollectionItem {
  position: string;
  company: string;
  functions: string[];
  date: string;
  __typename: string;
}

export interface Me {
  name: string;
  position: string;
  photo: Photo;
  __typename: string;
}

export interface Photo {
  url: string;
  __typename: string;
}
