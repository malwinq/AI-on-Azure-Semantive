import axios from 'axios';

// to be replaced - mock
export const getDocuments = (inputText) => {
    if (inputText.includes("s")) {
        return [
            {
                title: 'Raport o szkolnictwie',
                keywords: ['szkolnictwo', 'nauka', 'szkoła', 'oceny', 'podstawówka', 'szkoła średnia'],
                location: 'http://mockaddress1.com',
                date: 'Wed Dec 16 2020 ',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-kolowy'
            },
            {
                title: 'Raport o szkolnictwie',
                keywords: ['szkolnictwo', 'uniwersytety', 'szkoła', 'studenci', 'praca', 'staże'],
                location: 'http://mockaddress10.com',
                date: 'Wed Dec 06 2020 ',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            }
        ]
    } else if (inputText.includes("ro")) {
        return [
            {
                title: 'Raport o rolnictwie 1',
                keywords: ['rolnictwo', 'uprawa', 'uprawy', 'zboże', 'rośliny', 'maszyny rolnicze'],
                location: 'http://mockaddress2.com',
                date: 'Wed Dec 21 2020 ',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            },
            {
                title: 'Raport o robotyce',
                keywords: ['roboty', 'maszyny', 'automatyka', 'sterowniki', 'fabryki', 'produkcja'],
                location: 'http://mockaddress4.com',
                date: 'Wed Dec 01 2020 ',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'tabela'
            },
            {
                title: 'Raport o sportach',
                keywords: ['sport', 'pilka nozna', 'siatkowka', 'hala', 'dzieci', 'trening'],
                location: 'http://mockaddress431.com',
                date: 'Thu Dec 16 2020 ',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            }
        ]
    } else if (inputText.includes("ra")) {
        return [
            {
                title: 'Raport o rolnictwie 1',
                keywords: ['rolnictwo', 'uprawa', 'uprawy', 'zboże', 'rośliny', 'maszyny rolnicze'],
                location: 'http://mockaddress2.com',
                date: 'Wed Dec 21 2020 ',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            },
            {
                title: 'Raport o szkolnictwie 2',
                keywords: ['szkolnictwo', 'uniwersytety', 'szkoła', 'studenci', 'praca', 'staże'],
                location: 'http://mockaddress10.com',
                date: 'Fri Dec 06 2020 ',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            },
            {
                title: 'Raport o robotyce',
                keywords: ['roboty', 'maszyny', 'automatyka', 'sterowniki', 'fabryki', 'produkcja'],
                location: 'http://mockaddress4.com',
                date: 'Mon Dec 01 2020 ',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'tabela'
            },
            {
                title: 'Raport o szkolnictwie',
                keywords: ['szkolnictwo', 'nauka', 'szkoła', 'oceny', 'podstawówka', 'szkoła średnia'],
                location: 'http://mockaddress1.com',
                date: 'Thu Dec 16 2020 ',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-kolowy'
            },
            {
                title: 'Raport o czytelnictwie',
                keywords: ['czytelnictwo', 'książki', 'nauka', 'biblioteka', 'literatura', 'fantastyka'],
                location: 'http://mockaddress1439.com',
                date: 'Mon Dec 26 2020 ',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-kolowy'
            },
            {
                title: 'Raport o sportach',
                keywords: ['sport', 'pilka nozna', 'siatkowka', 'hala', 'dzieci', 'trening'],
                location: 'http://mockaddress431.com',
                date: 'Thu Dec 16 2020 ',
                institution: 'USA',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-liczbowy'
            }
        ]
    } else if (inputText.includes("c")) {
        return [
            {
                title: 'Raport o czytelnictwie',
                keywords: ['czytelnictwo', 'książki', 'nauka', 'biblioteka', 'literatura', 'fantastyka'],
                location: 'http://mockaddress1439.com',
                date: 'Mon Dec 26 2020 ',
                institution: 'EU',
                header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                type: 'wykres-kolowy'
            }
        ]
    } else {
        return null;
    }
}
