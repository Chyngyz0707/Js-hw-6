/* Написать приложение "Лото". Программа должна по нажатию на кнопку генерировать случайным образом
 шесть чисел в диапазоне от 1 до 99.
Для генерации случайного числа можете скопировать себе функцию из 3-го урока getRandomInt
Постарайтесь в приложении сделать так чтобы сами кружки с цифрами не были изначально на верстке,
 а вы их генерировали через javascript как мы на уроке генерировали строки таблицы.
  Дизайн приложения на ваш вкус.*/


const generateButton = document.getElementById("button")

generateButton.onclick = () => {
    function generateRandomNumbers() {
        let numbers = [];
        while (numbers.length < 6) {
            let random = Math.floor(Math.random() * 99) + 1;
            if (numbers.indexOf(random) === -1) {
                numbers.push(random);
            }
        }
        document.getElementById("num1").innerHTML = numbers[0];
        document.getElementById("num2").innerHTML = numbers[1];
        document.getElementById("num3").innerHTML = numbers[2];
        document.getElementById("num4").innerHTML = numbers[3];
        document.getElementById("num5").innerHTML = numbers[4];
        document.getElementById("num6").innerHTML = numbers[5];

    }
    generateRandomNumbers()
}


  

