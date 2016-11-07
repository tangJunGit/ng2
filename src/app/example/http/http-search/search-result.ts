export interface SearchResult{
    title: string; 
    id: {
        videoId: string;
        kind: string;
    };
    snippet: {
        title: string;
        description: string;
        thumbnails: any;
        videoUrl: any;
    };
}
