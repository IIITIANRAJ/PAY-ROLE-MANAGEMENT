function calc() {
    const BA = parseFloat(document.getElementById('bill').value);
    const PA = parseFloat(document.getElementById('paid').value);
    const CA = PA - BA;
    const table = document.getElementById('notes');
    table.innerHTML = "";
    if (BA < 0 || PA < 0) {
        alert("Invalid Input");
        return;
    }
    if (CA < 0) {
        alert("Paid amount must be greater than or equal to bill amount!");
        return;
    }
    const notes= [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let RA = CA;
    let count = {};
    for (let i of notes) {
        if  (RA >= i) {
         count[i] = Math.floor (RA / i);
         RA %= i;
        }
    }

    const tableBody = table.createTBody();
    for (let i of notes) {
        if  (count[i]) {
            const row = tableBody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = `₹${i}`;
            cell2.textContent = count[i];
        }
    }
}
