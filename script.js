function prikaziFormu() {
    document.getElementById('forma').style.display = 'block';
}

function posaljiPoruku() {
    const poruka = document.getElementById('poruka').value;
    if (poruka.trim() !== "") {
        document.getElementById('potvrda').style.display = 'block';
        document.getElementById('poruka').value = "";
    } else {
        alert("Molimo unesite poruku.");
    }
}
