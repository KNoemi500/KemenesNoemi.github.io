document.getElementById('country-selector').addEventListener('change', function() {
    var selectedCountry = this.options[this.selectedIndex].text;
    if (this.value !== "none") {
        document.getElementById('selected-country').innerText = 'Kiválasztott ország: ' + selectedCountry;
    } else {
        document.getElementById('selected-country').innerText = '';
    }
});
