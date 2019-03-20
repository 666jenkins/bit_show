const dataModule = (() => {

    const API_BASE_URL = 'http://api.tvmaze.com';

    function fetchShows(onSuccess) {

        const showsRequestUrl = `${API_BASE_URL}/show`

        class Show {
            constructor(id, name, rating, image) {
                this.id = id
                this.name = name
                this.rating = rating
                this.image = image
            }
        }

        $.get(showsRequestUrl, function (showsArr) {

            const myShows = showsArr
                .slice(0, 50)
                .map(obj => {
                    return new Show(obj.id, obj.name, obj.rating.average, obj.image.medium);
                });

            onSuccess(myShows);
        })
    }

    function printShow() {
        const showPageUrl = `${API_BASE_URL}/shows/${localStorage.getItem('showId')}`
        $.get(showPageUrl, function (data) {
            console.log(data);
        })
    }

    return {
        fetchShows, printShow
    }

})()