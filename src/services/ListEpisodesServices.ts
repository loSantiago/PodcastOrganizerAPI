import { PodcastResponse } from "../models/IPodcastResponse";
import { repositoryPodcast } from "../repositories/PodcastRepository";
import { StatusCode } from "../utils/StatusCode";

export const serviceListEpisode = async () : Promise<PodcastResponse> => {

    let responseFormat: PodcastResponse = {
        statusCode: 0,
        body: []
    }
    
    const data =  await repositoryPodcast();

    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }

    responseFormat.body = data;

    return responseFormat;
}