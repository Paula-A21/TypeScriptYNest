import axios from "axios"

export interface HttpAdapter{

    get<T>(url: string): Promise<T>  //El <T> establece que el tipo del que se va aretornar puede ser de cualquier 
                                    //tipo que le envie. Se utiliza T por convención
}

export class pokeAdapterAxios implements HttpAdapter{

    async get<T>(url: string){
        const {data} = await axios.get<T>(url)
        console.log("se ejecuta axios");
        return data;
    }
}

export class pokeAdapterFetch implements HttpAdapter{

    async get<T>(url: string){

        const resp = await fetch(url);
        const data: T = await resp.json();

        console.log("se ejecuta fetch");
        
        return data;
    }
}