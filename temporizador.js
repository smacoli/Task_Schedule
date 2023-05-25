const schedule = require('node-schedule')
const task1 = schedule.scheduleJob('*/5 * * * * *', function() { // Executa a cada 5 segundos 
  console.log('Executando task1', new Date().getSeconds())
})

setTimeout(function () {
  task1.cancel()
  console.log('Cancelando task1')
}, 20000) // Cancela tarefa 1 após 20 segundos 

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)] // Executa tarefa de segund a sexta as 11:17 pm
rule.hour = 23
rule.second = 17

const task2 = schedule.scheduleJob(rule, function() {
  console.log('Executando task 2', new Date().getSeconds())
})