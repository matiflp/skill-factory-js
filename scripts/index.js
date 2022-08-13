const getData = async (url) => {
    try{
        const response = await axios.get(url);
        return response.data;
    }
    catch(error){
        console.log("Error al traer los datos: ", error);
    }
}