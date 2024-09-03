import { repositoryPodcast } from "../repositories/PodcastRepository"
import { PodcastResponse } from "../models/IPodcastResponse";
import { StatusCode } from "../utils/StatusCode";

export const serviceFilterEpisodes = async (url: string | undefined) : Promise<PodcastResponse>=> {

    //define interface de resposta.
    let responseFormat: PodcastResponse = {
        statusCode: 0,
        body: []
    }

    //Busca os dados
    const queryString = url?.split("?p=")[1] ?? ""
    const data = await repositoryPodcast(queryString);

    //define a resposta
    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }

    responseFormat.body = data;

    return responseFormat;
}