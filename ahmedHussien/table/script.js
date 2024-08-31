document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Create a new table row
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Add data to cells
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = email;

    // Clear form inputs
    document.getElementById('dataForm').reset();
});
