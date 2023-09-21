// Выбираем все элементы с классом 'collapsible' и добавляем обработчик события 'click' для каждого из них
document.querySelectorAll('.collapsible').forEach((el) => {
    el.addEventListener('click', () =>{
        // Находим следующий соседний элемент после 'el', который будет содержать скрываемый контент
        let content = el.nextElementSibling;
        // Проверяем, если у контента уже установлена максимальная высота
        if(content.style.maxHeight){
            // Если максимальная высота установлена, сбрасываем её на 'null', чтобы скрыть контент
            content.style.maxHeight = null;
            // Убираем класс 'opened', который указывает на открытое состояние
            el.classList.remove('opened');
        } else{
            // Если максимальная высота не установлена, устанавливаем её равной высоте контента,
            // чтобы отобразить контент
            content.style.maxHeight = content.scrollHeight + 'px';
            // Добавляем класс 'opened', чтобы показать, что контент открыт
            el.classList.add('opened');
        }
    })
})