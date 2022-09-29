colors = {
    "github": "203, 166, 247",
    "twitter": "29, 161, 242",
    "anilist": "18, 39, 94",
    "discord": "137, 180, 250",
    "reddit": "250, 179, 135",
}

window.onload = function () {
    var str = ""

    Object.entries(colors).forEach(function ([k, v]) {
        str = str.concat(`#icons01 .${k} button:hover {
            background-color: rgb(${v}) !important;
            -webkit-box-shadow: 0px 15px 20px rgba(${v}, 0.4);
            box-shadow: 0px 15px 20px rgba(${v}, 0.4);
        }`)
    });
    const style = document.querySelector("#style");
    console.log(str);
    style.innerHTML = str;
}
