export type Breed = {
    id: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
    life_span: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    grooming: number;
    intelligence: number;
    health_issues: number;
    social_needs: number;
    stranger_friendly: number;
    image: {
        url: string;
    };
    vcahospitals_url: string;
    cfa_url: string;
    vetstreet_url: string;
};

export type Detail = {
    string: string;
    value: string | number;
};

export type Identifiers = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    vcahospitals_url: string;
    cfa_url: string;
    vetstreet_url: string;
}

export type Data = {
    breedData: {identifiers: Identifiers, details: Detail[], attributes: Detail[]}
    imageResponse: string[]
}

export type BreedName = {
    id: string;
    name: string;
    image: {
        url: string;
    };
    views: number;
    vcahospitals_url: string;
    cfa_url: string;
    vetstreet_url: string;
};
