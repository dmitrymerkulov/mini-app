// Синхронизация переключателей для подъема
document.getElementById('elevator_required').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('elevator_not_needed').checked = false;
    } else {
        // Если оба выключены, включаем второй
        if (!document.getElementById('elevator_not_needed').checked) {
            document.getElementById('elevator_not_needed').checked = true;
        }
    }
});

document.getElementById('elevator_not_needed').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('elevator_required').checked = false;
    } else {
        // Если оба выключены, включаем первый
        if (!document.getElementById('elevator_required').checked) {
            document.getElementById('elevator_required').checked = true;
        }
    }
});

// Синхронизация переключателя для доставки и даты
const deliverSoonCheckbox = document.getElementById('deliver_soon');
const deliveryDateInput = document.getElementById('delivery_date');

// При изменении даты - отключаем переключатель
deliveryDateInput.addEventListener('change', function() {
    if (this.value) {
        deliverSoonCheckbox.checked = false;
        deliverSoonCheckbox.disabled = true;
    } else {
        deliverSoonCheckbox.disabled = false;
    }
});

// При изменении переключателя - очищаем дату
deliverSoonCheckbox.addEventListener('change', function() {
    if (this.checked) {
        deliveryDateInput.value = '';
        deliveryDateInput.disabled = true;
    } else {
        deliveryDateInput.disabled = false;
    }
});

// Установка текущей даты по умолчанию
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
deliveryDateInput.value = `${year}-${month}-${day}`;

function submitOrder() {
    // Здесь будет логика отправки данных
    alert("Форма отправлена!");

    // В реальности нужно будет:
    // 1. Собрать все данные из формы
    // 2. Отправить их на сервер через fetch
    // 3. Обработать ответ
}