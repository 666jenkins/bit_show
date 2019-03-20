const controller = ((ui, data) => {

    function init() {
        data.fetchShows(function (data) {
            console.log(data);

            $.each(data, function (i) {
                $('main').append(
                    `<div show-id="${data[i].id}" class="card col-md-3 pt-3" style="width: 18rem;">
                    <img src="${data[i].image}" class="card-img-top" alt="">
                    <div class="card-body">
                    <p class="card-text">${data[i].name}</p>
                    </div>
                    </div>`
                )
            });
            ui.onClick();
        });
    }

    return {
        init
    }

})(uiModule, dataModule);