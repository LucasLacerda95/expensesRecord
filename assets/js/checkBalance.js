const totalBalance = document.querySelector('.p-footer-main-total');
const totalRevenues = document.querySelector('.p-footer-main-revenues');
const totalExpenses = document.querySelector('.p-footer-main-expenses');
let valueOfExpenses = 0;
let valueOfRevenues = 0;




function typeVerification(){
    const bruteTypes = balanceTasks;
    const newBruteTypesRevenue = [];
    const newBruteTypesExpenses = [];
    const backgroundType = document.querySelector('.pType');
    
    for(let i = 0; i < bruteTypes.length ; i++){    
        if(bruteTypes[i][3] === 'Crédito'){
            newBruteTypesRevenue.push(bruteTypes[i][1])
        }else{
            newBruteTypesExpenses.push(bruteTypes[i][1])
        }
    };
    
    //Expenses
    const parseFloatValuesExpenses = parseStringToFloat(newBruteTypesExpenses);
    valueOfExpenses = parseFloatValuesExpenses;
    parseValuesCurrencyExpenses = convertFloatToCurrency(parseFloatValuesExpenses);
    totalExpenses.innerText = `${parseValuesCurrencyExpenses}`;

    //Revenue
    const parseFloatValuesRevenue = parseStringToFloat(newBruteTypesRevenue);
    valueOfRevenues = parseFloatValuesRevenue;
    
    parseValuesCurrencyRevenue = convertFloatToCurrency(parseFloatValuesRevenue);
    totalRevenues.innerText = `${parseValuesCurrencyRevenue}`;
};


function parseStringToFloat(array){

    let vBalance = [];//Valores em string sem R$(Sifrão)
    let v2Balance = [];//Valores em string sem ,(Vírgula)
    let newQuery = []//Valores em Float para realizar cálculo
    
    
    for(let i of array){
        vBalance.push(i.replace('R$','')); 
    }
    
    for(let i of vBalance){
        v2Balance.push(i.replace('.','')); 
    }
    
    for(let i = 0; i < vBalance.length ; i++){    
        newQuery.push(parseFloat(v2Balance[i]));
    }
    
  
    if(!newQuery[0]){
        newQuery[0] = 0;
    };
    
    const somaBalance = newQuery.reduce(function(soma,i){
        return soma + i;
    });

    return somaBalance;
};

function convertFloatToCurrency(value){
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });//converte para valor monetário
}


function totalizer(){
    const newBalance = []//Captura o que está na tela de outro Array Global
    const totalValueExpenses = valueOfExpenses;
    const totalValueRevenues = valueOfRevenues;
    const soldTotal = valueOfRevenues - valueOfExpenses;

    for(let i = 0; i < balanceTasks.length ; i++){    
        newBalance.push(balanceTasks[i][1]);
    }

    //somaBalance = parseStringToFloat(newBalance);
    const parseTotalBalance = convertFloatToCurrency(soldTotal);
    
    totalBalance.innerText = `${parseTotalBalance}`;
};

