import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'http://api.tvmaze.com/',
});


export const serialsAPI = {
    getSerials(data){
        let day = data.slice(0, 2);
        let month = data.slice(3, 5);
        let year = data.slice(6, 10);

        return instance('schedule?country=US&date='+year+'-'+month+'-'+day).then(
            response => response.data
        )
    },
};
