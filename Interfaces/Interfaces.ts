export interface Home {
    data: Data;
}

export interface Data {
    homePage: HomePage;
}

export interface HomePage {
    name:             string;
    position:         string;
    extract:          string;
    greeting:         string;
    description:      string;
    frontend:         string[];
    backend:          string[];
    imagesCollection: ImagesCollection;
}

export interface ImagesCollection {
    items: Item[];
}

export interface Item {
    url: string;
}
