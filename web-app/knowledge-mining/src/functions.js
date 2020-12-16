import axios from 'axios';

// tbd - get all options

export const getDocuments = (inputText) => {
    if ("s" in inputText) {
        return [
            {
                title: 'Raport o szkolnictwie 1',
                keywords: ['szkolnictwo', 'nauka', 'szkoła', 'oceny', 'podstawówka', 'szkoła średnia'],
                location: 'http://mockaddress1.com',
                date: 'Wed Dec 16 2020 09:56:36 GMT+0100',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-kolowy'
            },
            {
                title: 'Raport o szkolnictwie 2',
                keywords: ['szkolnictwo', 'uniwersytety', 'szkoła', 'studenci', 'praca', 'staże'],
                location: 'http://mockaddress10.com',
                date: 'Wed Dec 06 2020 09:56:36 GMT+0100',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            }
        ]
    } else if ("ro" in inputText) {
        return [
            {
                title: 'Raport o rolnictwie 1',
                keywords: ['rolnictwo', 'uprawa', 'uprawy', 'zboże', 'rośliny', 'maszyny rolnicze'],
                location: 'http://mockaddress2.com',
                date: 'Wed Dec 21 2020 09:56:36 GMT+0100',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            },
            {
                title: 'Raport o robotyce',
                keywords: ['roboty', 'maszyny', 'automatyka', 'sterowniki', 'fabryki', 'produkcja'],
                location: 'http://mockaddress4.com',
                date: 'Wed Dec 01 2020 09:56:36 GMT+0100',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'tabela'
            },
        ]
    } else if ("ra" in inputText) {
        return [
            {
                title: 'Raport o rolnictwie 1',
                keywords: ['rolnictwo', 'uprawa', 'uprawy', 'zboże', 'rośliny', 'maszyny rolnicze'],
                location: 'http://mockaddress2.com',
                date: 'Wed Dec 21 2020 09:56:36 GMT+0100',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            },
            {
                title: 'Raport o szkolnictwie 2',
                keywords: ['szkolnictwo', 'uniwersytety', 'szkoła', 'studenci', 'praca', 'staże'],
                location: 'http://mockaddress10.com',
                date: 'Wed Dec 06 2020 09:56:36 GMT+0100',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            },
            {
                title: 'Raport o robotyce',
                keywords: ['roboty', 'maszyny', 'automatyka', 'sterowniki', 'fabryki', 'produkcja'],
                location: 'http://mockaddress4.com',
                date: 'Wed Dec 01 2020 09:56:36 GMT+0100',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'tabela'
            },
            {
                title: 'Raport o szkolnictwie 1',
                keywords: ['szkolnictwo', 'nauka', 'szkoła', 'oceny', 'podstawówka', 'szkoła średnia'],
                location: 'http://mockaddress1.com',
                date: 'Wed Dec 16 2020 09:56:36 GMT+0100',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-kolowy'
            }
        ]
    } else {
        return null;
    }
}

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