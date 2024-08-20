
//#1
let mname = prompt('Введите свое имя')
let bday= +prompt('Введите свой год рождения')
let tyear= +prompt('Введите нынешний год')
function age(mname,bday,tyear){
    let finalage =tyear-bday
    let finalfinal = (mname)+', Ваш возраст '+finalage+' лет'
    return finalfinal

}
alert(age(mname,bday,tyear))

//#1


//#2



function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min )
}

let numoft = prompt('Введите количество примеров')

function opfinal(){
    let oprand=rand(1,4)
    let op;
    if (oprand ==1){
        op='+'
    }else if(oprand==2){
        op='-'
    }else if(oprand==3){
        op='*'
    }else if(oprand==4){
        op='/'
    }
    return op;
}

for (let a = 0; a < numoft; a++) { 
    let operand1 = rand(1, 100);
    let operand2 = rand(1, 100);
    let operator = opfinal();
    let final=(operand1 + operator + operand2)
    
    alert(final);
    let result = eval(final)
    let tf=prompt('Введите ответ')
    if (result==tf){
        alert(`Ваш ответ верный - ${result}`)
    }else{
        alert(`Ваш ответ неверный - ${tf}.Правильный ответ - ${result}!`)
    }
}



//#2
