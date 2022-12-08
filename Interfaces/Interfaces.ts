export interface HomePage {
    homePage: HomePage;
}

export interface HomePage {
    name:             string;
    position:         string;
    extract:          string;
    greeting:         string;
    description:      string;
    imagesCollection: ImagesCollection;
    __typename:       string;
}

export interface ImagesCollection {
    items:      Item[];
    __typename: string;
}

export interface Item {
    url:        string;
    __typename: string;
}



