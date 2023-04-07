const getRequest = async (url) => {
    console.log(url);
    return await fetch(url, {
        headers: {
            "Authorization": "Bearer 307f41c022ff1bd09df4e98ec070770aefac6c31be77bf19ee6c784bef8b0cfd"
        },
    }).then(response => response.json());
}

async function postRequest(url = "", method, data = {}){
    const response = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 307f41c022ff1bd09df4e98ec070770aefac6c31be77bf19ee6c784bef8b0cfd"
        },
    });
    return response;
}

module.exports = {
    getRequest,
    postRequest
}