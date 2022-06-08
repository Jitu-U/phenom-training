

export default async function(searchField){
    searchField = searchField.replaceAll(' ','+');
    console.log(searchField);

    console.log(process.env.REACT_APP_YT_API_KEY);
    let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchField}&maxResults=20&safeSearch=moderate&access_token=AIzaSyCk1U5cTHJoQO30oG7AHoFfIPxVAZ3IQDU&key=AIzaSyCk1U5cTHJoQO30oG7AHoFfIPxVAZ3IQDU`)
    .then(res => res.json())
    .then(data => data)
    .catch( err => console.error("ERROR : "+ err));
    //console.log(data);
    return data;
}