var index = 0;

function changeColors() {
    var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "brown"];

    document.getElementsByTagName("body")[0].

    style.background = colors[index++];

    if (index > colors.length - 1)
        index = 0
}