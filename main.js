for (let i = 1; i <= 16; i++) {
    let theoryElem = document.getElementById('ctl00_MainContainer_rbtTheory' + i + '_0');
    let labElem = document.getElementById('ctl00_MainContainer_rbtLab' + i + '_0');

    if (theoryElem) {
        theoryElem.checked = true;
    } else if (labElem) {
        labElem.checked = true;
    }
}
