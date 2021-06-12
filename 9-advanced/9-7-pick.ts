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

    // pick을 사용해서 원하는 타입만 사용할수있고,
    // 타입을 선언해서 재사용할수 있도록 만드는것이 좋다.
    type VideoMetadata = Pick<Video, 'id' | 'title'>;
    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'title',
        }
    }

}