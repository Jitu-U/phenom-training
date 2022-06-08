

/// Youtube Search Response
export default async function(searchField){
    //Making appropriate search field for API
    searchField = searchField.replaceAll(' ','+');
    console.log(searchField);

    console.log(process.env.REACT_APP_YT_API_KEY);
    // using template string to use variables inside string
    let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchField}&maxResults=20&safeSearch=moderate&access_token=${process.env.REACT_APP_YT_API_KEY}&key=${process.env.REACT_APP_YT_API_KEY}`)
    .then(res => res.json())
    .then(data => data)
    .catch( error => {
        console.error(`ERROR: ${error.code} : ${error.message}`);
    });
    //console.log(data);
    return data;
}