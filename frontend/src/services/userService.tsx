import axios, {AxiosResponse} from "axios"


const baseUrl: string = "http://localhost:8080/"

const getDistilleries = (): Promise<AxiosResponse<any>> => {  
    return axios.get(baseUrl + "distilleries")
}

const getWhiskies = (): Promise<AxiosResponse<any>> => {  
    return axios.get(baseUrl + "whiskies")
}

const getPersons = (): Promise<AxiosResponse<any>> => {  
    return axios.get(baseUrl + "persons")
}

export default {
    getDistilleries,
    getWhiskies,
    getPersons
}