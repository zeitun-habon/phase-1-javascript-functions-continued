// code your solution here
function saturdayFun(parameter = 'roller-skate'){
    return `This Saturday, I want to ${parameter}!`
}
saturdayFun("bath my dog")
function mondayWork(parameter='go to the office'){
    return `This Monday, I will ${parameter}.`
}
mondayWork(' work from home.')
function wrapAdjective(s){
    return function (parameter="special"){
          return `You are ${s}${parameter}${s}!`
          
    }

}
console.log(wrapAdjective("%")("a dedicated programmer"))