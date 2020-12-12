import axios from 'axios';

export const getOptions = () => {
    // tbd - get all options
    return [
        {
            label: 'szkolnictwo',
            value: 'Raport o szkolnictwie 1'
        },
        {
            label: 'szkolnictwo',
            value: 'Raport o szkolnictwie 2'
        },
        {
            label: 'rolnictwo',
            value: 'Raport o rolnictwie'
        }
    ];
};