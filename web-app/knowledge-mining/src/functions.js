import axios from 'axios';

export const getOptions = () => {
    // tbd - get all options
    return [
        {
            label: 'szkolnictwo: Raport o szkolnictwie 1',
            value: 'Raport o szkolnictwie 1'
        },
        {
            label: 'szkolnictwo: Raport o szkolnictwie 2',
            value: 'Raport o szkolnictwie 2'
        },
        {
            label: 'rolnictwo: Raport o rolnictwie',
            value: 'Raport o rolnictwie'
        }
    ];
};