export interface SearchResult extends id, snippet{
    title: string; 
}

interface id{
    videoId: string;
    kind: string;
}

interface snippet{
    description: string;
    thumbnails: Object;
    videoUrl: Object;
}