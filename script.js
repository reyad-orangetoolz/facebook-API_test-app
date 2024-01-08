const postId = document.getElementById('postId');
const deleteId = document.getElementById('deleteId');
const message = document.getElementById('caption');
const url = document.getElementById('url');
let pageIdDom = document.getElementById('fbPageId');
let accessTokenDom = document.getElementById('accessToken');
let pageId = '';
let accessToken = '';

const set = () => {
    pageId = pageIdDom.value;
    accessToken = accessTokenDom.value;
}

const addPost = () => {
    if (url.value != '') {
        axios.post("https://graph.facebook.com/" + pageId + "/photos?access_token=" + accessToken, {
            message: message.value,
            url: url.value,
        })
    }
    else {
        axios.post("https://graph.facebook.com/" + pageId + "/feed?access_token=" + accessToken, {
            message: message.value,
        })
    }
    console.log('photo:', url.value);
    console.log('caption:', message.value);
}

const getSpecificPost = async () => {
    const response = await axios.get("https://graph.facebook.com/" + postId.value + "?access_token=" + accessToken)
    console.log(response.data);
}

const deletPost = async () => {
    const response = await axios.delete("https://graph.facebook.com/" + deleteId.value + "?access_token=" + accessToken)
    console.log(response.data);
}

const seePosts = async () => {
    const response = await axios.get("https://graph.facebook.com/" + pageId + "/feed?access_token=" + accessToken)
    console.log(response.data);
}