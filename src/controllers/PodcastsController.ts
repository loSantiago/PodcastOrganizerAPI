import {IncomingMessage, ServerResponse} from "node:http";
import {serviceListEpisode} from "../services/ListEpisodesServices"
import { serviceFilterEpisodes } from "../services/FilterPodcastsServices";
import { PodcastResponse } from "../models/IPodcastResponse";

export const getListEspisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content : PodcastResponse = await serviceListEpisode();

    res.writeHead(content.statusCode, {"Content-Type" : "application/json"});
    res.write(JSON.stringify(content.body));
    res.end();
};

export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
    ) => {
        const content : PodcastResponse = await serviceFilterEpisodes(req.url);
        
        res.writeHead(content.statusCode, {"Content-Type" : "application/json"});
        res.write(JSON.stringify(content.body));
        res.end();
}

