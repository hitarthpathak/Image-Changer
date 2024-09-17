let image_1 = document.getElementById("img-1");
let image_2 = document.getElementById("img-2");
let image_3 = document.getElementById("img-3");
let image_4 = document.getElementById("img-4");
let image_5 = document.getElementById("img-5");
let main_image = document.getElementById("main-img");

// --------------------------------------------------------------------------------------------------

function change_image(path) {

    main_image.setAttribute("src", path);

}