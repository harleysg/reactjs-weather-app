const fetchService = (endPoint, header={}) => {
    return fetch(endPoint, header)
    .then(response => response.json())
}

export default fetchService;