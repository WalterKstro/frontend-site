export interface Projects {
    projectsPage: ProjectsPage;
}

export interface ProjectsPage {
    projectsCollection: ProjectsCollection;
    cite:               Cite;
    __typename:         string;
}

export interface Cite {
    cite:       string;
    author:     string;
    __typename: string;
}

export interface ProjectsCollection {
    items:      ProjectsCollectionItem[];
    __typename: string;
}

export interface ProjectsCollectionItem {
    sys:                    Sys;
    title:                  string;
    extract:                string;
    technologiesCollection: TechnologiesCollection;
    imagesCollection:       ImagesCollection;
    links:                  string[];
    __typename:             string;
}

export interface ImagesCollection {
    items:      ImagesCollectionItem[];
    __typename: string;
}

export interface ImagesCollectionItem {
    url:        string;
    __typename: PurpleTypename;
}

export enum PurpleTypename {
    Asset = "Asset",
}

export interface Sys {
    id:         string;
    __typename: string;
}

export interface TechnologiesCollection {
    items:      TechnologiesCollectionItem[];
    __typename: string;
}

export interface TechnologiesCollectionItem {
    technology: string;
    __typename: FluffyTypename;
}

export enum FluffyTypename {
    Categories = "Categories",
}
