function saklar(action, lamp) {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (action == "on") {
        if (lamp == 1) {
            lampu1.src = "assets/image/on.png";
        }

        if (lamp == 2) {
            lampu2.src = "assets/image/on.png";
        }

        if (lamp == 3) {
            lampu3.src = "assets/image/on.png";
        }
    }

    if (action == "off") {
        if (lamp == 1) {
            lampu1.src = "assets/image/off.png";
        }

        if (lamp == 2) {
            lampu2.src = "assets/image/off.png";
        }

        if (lamp == 3) {
            lampu3.src = "assets/image/off.png";
        }
    }

    return lampu1;

}