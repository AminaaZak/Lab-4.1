document.addEventListener('DOMContentLoaded', function () {
    function addOrder() {
        let size = document.querySelector('input[name="розмір"]:checked').value;
        let sauce = document.getElementById('соус').value;
        let ingredients = getSelectedCheckboxes('інгредієнти');
        let notes = document.getElementById('побажання').value;
        let name = document.getElementById('ім\'я').value;
        let phone = document.getElementById('телефон').value;
        let email = document.querySelector('input[type="email"]').value;

        if (validateName(name) && validatePhone(phone) && validateEmail(email)) {
            let table = document.getElementById('pizzaTable').getElementsByTagName('tbody')[0];
            let newRow = table.insertRow(table.rows.length);

            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);
            let cell5 = newRow.insertCell(4);
            let cell6 = newRow.insertCell(5);
            let cell7 = newRow.insertCell(6);

            cell1.innerHTML = size;
            cell2.innerHTML = sauce;
            cell3.innerHTML = ingredients.join(', ');
            cell4.innerHTML = notes;
            cell5.innerHTML = name;
            cell6.innerHTML = phone;
            cell7.innerHTML = email;
        } else {
            alert('Будь ласка, введіть коректні дані для імені, телефону та пошти.');
        }
    }

    function getSelectedCheckboxes(name) {
        let checkboxes = document.getElementsByName(name);
        let selectedCheckboxes = [];

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                selectedCheckboxes.push(checkboxes[i].value);
            }
        }

        return selectedCheckboxes;
    }

    function validateName(name) {
        return /^[a-zA-Zа-яА-Я]+$/.test(name);
    }

    function validatePhone(phone) {
        return /^\+380[0-9]{9}$/.test(phone);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
        event.preventDefault();
        addOrder();
    });
});
