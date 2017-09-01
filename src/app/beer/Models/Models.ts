     
     export interface Glass {
        id: number;
        name: string;
        createDate: string;
 }

    export interface Srm {
        id: number;
        name: string;
        hex: string;
    }

    export interface Category {
        id: number;
        name: string;
        createDate: string;
    }

    export interface Style {
        id: number;
        categoryId: number;
        category: Category;
        name: string;
        shortName: string;
        description: string;
        ibuMin: string;
        ibuMax: string;
        abvMin: string;
        abvMax: string;
        srmMin: string;
        srmMax: string;
        ogMin: string;
        fgMin: string;
        fgMax: string;
        createDate: string;
        updateDate: string;
    }

    export interface Available {
        id: number;
        name: string;
        description: string;
    }

    export interface Labels {
        icon: string;
        medium: string;
        large: string;
    }

    export interface Datum {
        id: string;
        name: string;
        nameDisplay: string;
        description: string;
        abv: string;
        glasswareId: number;
        srmId: number;
        styleId: number;
        isOrganic: string;
        status: string;
        statusDisplay: string;
        createDate: string;
        updateDate: string;
        glass: Glass;
        srm: Srm;
        style: Style;
        ibu: string;
        availableId?: number;
        available: Available;
        labels: Labels;
        originalGravity: string;
        servingTemperature: string;
        servingTemperatureDisplay: string;
    }

    export interface BeerResult {
        currentPage: number;
        numberOfPages: number;
        totalResults: number;
        data: Datum[];
        status: string;
    }

export class FilterCriteria {
    name: string;
    ids: string;
    sortColumn = 'name';
    sortDirection= 'Asc';
    constructor()
    {
        this.name = '';
        this.ids = '';
    }
}