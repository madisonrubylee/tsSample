{
    type Video = {
        id: string;
        title:string;
        url: string;
        data: string;
    }

    function getVideo(id: string): Video{
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..',
        };
    }

    // omit을 사용해서 ㅇ타입을 제외할수있다. 
    type VideoMetadata = Omit<Video, 'url' | 'data' | 'h'>;
    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'title',
        }
    }

    // function getVideoMetadata(id: string): Pick<Video, 'id' | 'title'{
    //     return {
    //         id: id,
    //         title: 'title',
    //     }
    // }
}