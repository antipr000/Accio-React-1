function fetchAllData(){
    fetch("https://api.github.com/users").then(res => {
        res.json().then(data => {
            console.log(data);
            const allUrls = data.map(userInfo => userInfo.url);
            console.log("All urls", allUrls);
            const listOfPromises = allUrls.map(url => {
                return fetch(url);
            });
            Promise.all(listOfPromises).then(resList => {
                const listOfJsonPromises = resList.map(response => response.json());
                Promise.all(listOfJsonPromises).then(data => {
                    console.log(data.map(userData => userData.public_repos));
                })
            })
        })
    })
}

async function fetchAllData2(){
    const res = await fetch("https://api.github.com/users");
    const resData = await res.json();
    const urls = resData.map(userInfo => userInfo.url);
    const promises = urls.map(url => fetch(url));
    const allResponses = await Promise.all(promises);
    const jsonPromises = allResponses.map(response => response.json());
    const allData = await Promise.all(jsonPromises);
    const publicRepos = allData.map(userData => userData.public_repos);
    console.log(publicRepos);
}

// fetchAllData();
fetchAllData2();