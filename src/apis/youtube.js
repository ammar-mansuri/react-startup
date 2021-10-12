import axios from 'axios';

const ACCESS_KEY="AIzaSyCkLZ-QsqzH8NTvUOFjNeUISLWkcX4wzvI";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:ACCESS_KEY,
        type: 'video'
    }

});

