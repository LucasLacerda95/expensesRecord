const totalBalance = document.querySelector('.p-footer-main-total');
const totalRevenues = document.querySelector('.p-footer-main-revenues');
const totalExpenses = document.querySelector('.p-footer-main-expenses');


const newBalance = []

function calcValues(){
    let vBalance = []

    for(let i = 0; i < balanceTasks.length ; i++){    
        newBalance.push(balanceTasks[i][1]);
    }

    
    for(let i of newBalance){
        vBalance.push(i.replace('R$','')); 
    }

    floatBalance = parseFloat(vBalance[1].replace(',', '.'));
    const somaBalance = vBalance.reduce(function(soma,i){
        return soma + i;
    });
    
    console.log(floatBalance)

    totalBalance.innerText = `R$ ${somaBalance}`
    
};


