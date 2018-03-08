const FetchUtils = {
    getRequest: function(url, successCallBack, failCallBack) {
        let opts = {
            method: 'GET'
        };
        fetch(url, opts)
        .then((res) => res.json())
        .then((resData) => successCallBack(resData))
        .catch((err) => failCallBack(err));
    }
}

export default FetchUtils;