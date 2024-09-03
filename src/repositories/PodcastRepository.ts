import fs from "node:fs";
import path from "node:path"
import { Podcast } from "../models/IPodcast";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(rawData);
    
    if(podcastName){
        jsonFile = jsonFile.filter((podcast: Podcast) => {
            return (podcast.podcastName.toLowerCase() === podcastName.toLowerCase())
        });
    }

    return jsonFile;
}