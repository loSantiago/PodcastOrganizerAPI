import * as http from "node:http";
import {getFilterEpisodes, getListEspisodes} from "./controllers/PodcastsController"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/HttpMethods";


export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //Query string
    const baseUrl = req.url?.split("?")[0] ?? [];

    //Check entry methods.
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEspisodes(req, res);
    }

    //list episodes by podcast name.
    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODES){
        await getFilterEpisodes(req, res);
    }
}