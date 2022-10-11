import {devEnvirontment, prodEnvironment} from './config/env.js'

let BaseUrl:string = devEnvirontment.BASE_URL;

class Endpoints {
   

    static trendingBooks:String = `${BaseUrl}/books/trending`
    static booksForCategory:String = `${BaseUrl}/books/types`
}

export default Endpoints;