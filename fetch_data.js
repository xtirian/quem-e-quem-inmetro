const fetch_data = async () => {
    const response = await fetch('./assets/data/data.json');
    const data = await response.json();
    return data;
}

const return_data = async (setor = "presi" ) => {
    const data = await fetch_data();
    const setor_data = data.find(item => item[setor]);

    return setor_data
}

export default return_data