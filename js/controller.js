const controller = ((ui, data) => {

    function init() {
        data.fetchShows(function (data) {
            ui.printShows(data);
            ui.onClick();
        });
        data.searchShows(function (data) {
            ui.addToDDItem(data);
            ui.onClick();
        });
    }

    function initDetail() {
        data.singleShow(function (data) {
            ui.printSingle(data);
        });
    }

    return {
        init,
        initDetail
    }

})(uiModule, dataModule);