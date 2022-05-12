$(".btn").on("click", function (event) {
    event.preventDefault();
    apod();
});

function apod() {
    const artigo = $(".nasa")
    const data = $("#data").val();
    const ttl = $(".titleNasa");
    const dscc = $(".textNasa");
    const img = $(".imgNasa");
    const vdo = $(".frameNasa");

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${data}`,

        success: function (search) {
            artigo.css("visibility", "visible");
            ttl.text(search.title);
            dscc.text(search.explanation);

            if (search.media_type == "image") {
                img.attr("src", search.url);
                img.css("display", "block");
                vdo.css("display", "none");
            } else {
                vdo.attr("src", search.url);
                img.css("display", "none");
                vdo.css("display", "block");
            }
            return search;
        },
        error: function () {
            artigo.css("display", "flex");
            ttl.text(`Erro na Api`);
            dscc.text(`Insira uma data válida`);
            img.css("width", "150px")
            vdo.css("display", "none");
        },
    });
}