import axios from 'axios';

export const getDocuments = (inputText) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return axios.get(`https://semantive-api-management.azure-api.net/docs?api-version=2020-06-30&search=${inputText}`, config);
};

export const getFile = (fileURL) => {
    return axios.get(fileURL, {
        responseType: 'arraybuffer'
    });
};

export const FILE_TYPES = ["Image", "Complete Raport", "Editable Raport", "Calculations", "Undefined"];