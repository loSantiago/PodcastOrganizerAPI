import { Podcast } from "./IPodcast";

export interface PodcastResponse{
    statusCode: number,
    body: Podcast[],

} 