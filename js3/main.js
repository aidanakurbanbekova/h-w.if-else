//Работа с логическими переменными

/* 1.  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false.
Напишите два варианта скрипта - с короткой записью и с длинной*/

let test = true;
    if (test){
        console.log('Верно')
    }
    else {
        console.log('Не верно')
    }

    test ? console.log('Верно'):console.log('Не верно');