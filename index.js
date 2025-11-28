const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
const partName = document.querySelector('.part__name');
const partBrand = document.querySelector('.part__brand');
const partPartnumber = document.querySelector('.part__partnumber');
const searchPartnumber = document.querySelector('.search__partnumber');


// function search(item) {
//     let searchPart = item.value;
//     let newSearch = searchPart.replace(/[^a-zA-Z0-9]/g, '');
//     let validateSearch = newSearch.toUpperCase();
//     item.value = validateSearch;

//     for (let i = 0; i < partsInStock.length; i++){
//         let searchCross = partsInStock[i].crossPN;
//         for (let j = 0; j < searchCross.length; j++) {
//             let searchOrig = searchCross[j];
//             if (validateSearch === searchOrig) {
//                 partName.textContent = partsInStock[i].name;
//                 partBrand.textContent = partsInStock[i].brand;
//                 partPartnumber.textContent = partsInStock[i].partnumber;
//             }
//         }
//     }
// }

function search(item) {
    let searchPart = item.value;
    let newSearch = searchPart.replace(/[^a-zA-Z0-9]/g, '');
    let validateSearch = newSearch.toUpperCase();
    searchPartnumber.textContent = `Поиск по оригинальному артикулу: ${validateSearch}`
    item.value = '';

    for (let i = 0; i < partsInStock.length; i++){
        let searchCross = partsInStock[i].crossPN;
        let serachOrig = searchCross.filter(item => item === validateSearch);
        if (serachOrig.length === 1){
                partName.textContent = partsInStock[i].name;
                partBrand.textContent = partsInStock[i].brand;
                partPartnumber.textContent = partsInStock[i].partnumber;
        }
    }

    if (partName.textContent === '') {
        partName.textContent = 'Деталь не найдена'
    }


}

function clearContent() {
    partName.textContent = '';
    partBrand.textContent = '';
    partPartnumber.textContent = '';
}

searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    clearContent()
    search(searchInput);
});