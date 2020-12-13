import axios from 'axios';

// tbd - get all options
export const getOptions = () => {
    return [
        {
            label: 'szkolnictwo: Raport o szkolnictwie 1',
            value: 'Raport o szkolnictwie 1'
        },
        {
            label: 'nauka: Raport o szkolnictwie 1',
            value: 'Raport o szkolnictwie 1'
        },
        {
            label: 'szkoła: Raport o szkolnictwie 1',
            value: 'Raport o szkolnictwie 1'
        },
        {
            label: 'oceny: Raport o szkolnictwie 1',
            value: 'Raport o szkolnictwie 1'
        },
        {
            label: 'podstawówka: Raport o szkolnictwie 1',
            value: 'Raport o szkolnictwie 1'
        },
        {
            label: 'szkoła średnia: Raport o szkolnictwie 1',
            value: 'Raport o szkolnictwie 1'
        },
        {
            label: 'szkolnictwo: Raport o szkolnictwie 2',
            value: 'Raport o szkolnictwie 2'
        },
        {
            label: 'uniwersytety: Raport o szkolnictwie 2',
            value: 'Raport o szkolnictwie 2'
        },
        {
            label: 'szkoła: Raport o szkolnictwie 2',
            value: 'Raport o szkolnictwie 2'
        },
        {
            label: 'studenci: Raport o szkolnictwie 2',
            value: 'Raport o szkolnictwie 2'
        },
        {
            label: 'praca: Raport o szkolnictwie 2',
            value: 'Raport o szkolnictwie 2'
        },
        {
            label: 'staże: Raport o szkolnictwie 2',
            value: 'Raport o szkolnictwie 2'
        },
        {
            label: 'rolnictwo: Raport o rolnictwie',
            value: 'Raport o rolnictwie'
        },
        {
            label: 'uprawa: Raport o rolnictwie',
            value: 'Raport o rolnictwie'
        },
        {
            label: 'uprawy: Raport o rolnictwie',
            value: 'Raport o rolnictwie'
        },
        {
            label: 'zboże: Raport o rolnictwie',
            value: 'Raport o rolnictwie'
        },
        {
            label: 'rośliny: Raport o rolnictwie',
            value: 'Raport o rolnictwie'
        },
        {
            label: 'maszyny rolnicze: Raport o rolnictwie',
            value: 'Raport o rolnictwie'
        },
    ];
};

export const getKeywords = (documentName) => {
    if (documentName === 'Raport o szkolnictwie 1') {
        return ['szkolnictwo', 'nauka', 'szkoła', 'oceny', 'podstawówka', 'szkoła średnia'];
    } else if (documentName === 'Raport o szkolnictwie 2') {
        return ['szkolnictwo', 'uniwersytety', 'szkoła', 'studenci', 'praca', 'staże'];
    } else if (documentName === 'Raport o rolnictwie') {
        return ['rolnictwo', 'uprawa', 'uprawy', 'zboże', 'rośliny', 'maszyny rolnicze'];
    } 
};