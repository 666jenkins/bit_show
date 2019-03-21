const dataModule = (() => {

    const API_BASE_URL = 'http://api.tvmaze.com';

    class Show {
        constructor(id, name, rating, image, summary, premiered, genres) {
            this.id = id
            this.name = name
            this.rating = rating
            this.image = image
            this.summary = summary
            this.premiered = premiered
            this.genres = genres
        }
    }

    function fetchShows(onSuccess) {

        const showsRequestUrl = `${API_BASE_URL}/show`

        $.get(showsRequestUrl, function (showsArr) {

            const myShows = showsArr
                .slice(0, 50)
                .map((item) => {
                    const {id, name, rating, image} = item;
                    return new Show(id, name, rating.average, image.medium);
                });

            onSuccess(myShows);
        })
    }

    function singleShow(onSuccess) {

        const showId = localStorage.getItem('showId')
        const showPageUrl = `${API_BASE_URL}/shows/${showId}`
        
        
        $.get(showPageUrl, function (showData) {

            console.log(showData);

            const myShow = new Show(
                showId,
                showData.name,
                undefined,
                showData.image.original,
                showData.summary,
                showData.premiered,
                showData.genres
                );

            onSuccess(myShow);
        })
    }

    return {
        fetchShows,
        singleShow
    }

})()