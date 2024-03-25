import axios from "axios";

export const getProducts = async () =>{

    try {
        const url = 'https://api.escuelajs.co/api/v1/products';

        const result = await axios.get(url);
        const { data, status } = result;
        
        return ({
            data,
            status
        });

    } catch (error) {
        return ({
            data:'Algo fallo en la peticion',
            status: error.response.status
        })
    }

}