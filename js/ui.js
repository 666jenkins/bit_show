const uiModule = ((data) => {

    function onClick() {
        $('main div.card').click(function () {
            let showId = this.getAttribute("show-id");
            localStorage.setItem('showId', showId);
            location.href = "./show.html"
        })
        console.log("hey");
    }

    return {
        onClick
    }
})(dataModule)