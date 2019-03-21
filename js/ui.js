const uiModule = ((data) => {

    const $searchForm = $('form');
    const $searchBox = $('form input');
    const $searchButton = $('form button');
    const $dataList = $('.showsList');
    const $main = $('main');

    function printShows(array) {
        $.each(array, function (i) {
            $main.append(
                `<div show-id="${array[i].id}" class="card col-md-3 pt-3" style="width: 18rem;">
                    <div class="image-badge">
                        <img src="${array[i].image}" class="card-img-top" alt="">
                        <span class="badge badge-pill badge-primary pt-3" style="height:47px">
                        <i class="fas fa-star"></i>
                        ${array[i].rating.toFixed(1)}
                        </span>
                    </div>
                    <div class="card-body">
                        <p class="card-text d-inline">${array[i].name}</p>
                    </div>
                </div>`
            )
        });
    }

    function printSingle(obj) {

        $main.append(
            `<div class="card flex-row col-9">
                <img class="card-img-left py-3" style="height: 800px" src="${obj.image}" alt="">
                <div class="card-body card-block">
                    <h1 class="card-title">${obj.name}</h1>
                    <p class="card-text">${obj.summary}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${obj.genres.join(', ')}</li>
                        <li class="list-group-item">Premiered: ${obj.premiered}</li>
                    </ul>
                </div>
            </div>`
        )
    }

    function onClick() {
        $('main div.card').click(function () {
            let showId = this.getAttribute("show-id");
            localStorage.setItem('showId', showId);
            location.href = "./show.html"
        })
    }

    function search() {

        // let searchTerm = $searchBox.val();

        // data.fetchShows(function (data) {
        //     const myShows = data;
        //     $.each(myShows, function (i) {
        //         $dataList.append(`<li data-id="${myShows[i].id}">${myShows[i].name}</li>`)
        //     })

        //     $('li').on('click', function () {
        //         let showId = this.getAttribute("data-id");
        //         localStorage.setItem('showId', showId);
        //         location.href = "./show.html"
        //     })

        // })
    }

    return {
        onClick,
        printShows,
        printSingle,
        search
    }
})(dataModule)