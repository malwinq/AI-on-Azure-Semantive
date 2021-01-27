import axios from 'axios';

export const getDocuments = (inputText) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const apiKey = "<<API_KEY>>";
    return axios.get(`https://semantive-azure-search.search.windows.net/indexes/semantive-azureblob-index/docs?api-version=2020-06-30&search=${inputText}&api-key=${apiKey}`, config);
};

export const getFile = (fileURL) => {
    return axios.get(fileURL);
};

export const FILE_TYPES = ["Image", "Complete Raport", "Editable Raport", "Calculations", "Undefined"];