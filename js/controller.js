const controller = ((ui, data) => {

    function init() {
        data.fetchShows(function (data) {

            ui.printShows(data);
            ui.onClick();
            ui.search();
        });
        data.searchShows();
    }

    function initDetail() {
        data.singleShow(function (data) {
            console.log(data);

            ui.printSingle(data);
        });
    }

    return {
        init,
        initDetail
    }

})(uiModule, dataModule);