document.getElementById("timer").style.display = 'none'
const btn = document.getElementById('button')
btn.addEventListener('click', init_quiz)

function timer() {
  let label = document.getElementById('minutes')
  let minutes = label.textContent
  let label2 = document.getElementById('seconds')
  let seconds = label2.textContent
  let i = 0
  if (seconds == 0) {
    seconds = 59
    label2.textContent = seconds
    if (minutes > 0) {
      minutes--
    }
    label.textContent = "0" + minutes
  } else if (seconds > 0) {
    seconds--
    if (seconds >= 0 && seconds < 10) {
      label2.textContent = "0" + seconds
    } else {
      label2.textContent = seconds
    }
  }
  if (minutes == 0 && seconds == 0) {
    i = 1
  }
  if (i == 0) {
    window.setTimeout("timer();", 1000);
  } else if (i == 1) {
    display_result("Time Expired")
  }
}
let main_container, questionlabel, pos, correct, div1, question, submitbtn, radiobtn1, radiobtn5, radiobtn2, radiobtn3, radiobtn4, label1, label2, label3, label4, choice, choices


function init_quiz() {
  pos = 0
  correct = 0
  document.getElementById("timer").style.display = 'block'
  document.getElementById('upperdiv').style.display = 'none'
  main_container = document.getElementById("main_container")
  div1 = document.createElement("div")
  div1.setAttribute('class', 'questions')
  question = document.createElement("h2")
  questionlabel = document.createElement("h2")
  radiobtn1 = document.createElement('INPUT')
  radiobtn1.setAttribute('type', 'radio')
  radiobtn1.setAttribute('name', 'choices')
  radiobtn1.setAttribute('value', 'A')
  label1 = document.createElement("label")
  label2 = document.createElement("label")
  label3 = document.createElement("label")
  label4 = document.createElement("label")
  radiobtn2 = document.createElement('INPUT')
  radiobtn2.setAttribute('type', 'radio')
  radiobtn2.setAttribute('name', 'choices')
  radiobtn2.setAttribute('value', 'B')
  radiobtn3 = document.createElement('INPUT')
  radiobtn3.setAttribute('type', 'radio')
  radiobtn3.setAttribute('name', 'choices')
  radiobtn3.setAttribute('value', 'C')
  radiobtn4 = document.createElement('INPUT')
  radiobtn4.setAttribute('type', 'radio')
  radiobtn4.setAttribute('name', 'choices')
  radiobtn4.setAttribute('value', 'D')
  radiobtn5 = document.createElement('INPUT')
  radiobtn5.setAttribute('type', 'radio')
  radiobtn5.setAttribute('name', 'choices')
  radiobtn5.setAttribute('value', 'E')

  radiobtn5.style.display = 'none';

  submitbtn = document.createElement("button")
  submitbtn.textContent = "submit answer"
  submitbtn.addEventListener('click', checkanswer)
  div1.appendChild(questionlabel)
  div1.appendChild(question)
  div1.appendChild(radiobtn1)
  div1.appendChild(label1)
  div1.appendChild(radiobtn2)
  div1.appendChild(label2)
  div1.appendChild(radiobtn3)
  div1.appendChild(label3)
  div1.appendChild(radiobtn4)
  div1.appendChild(label4)
  div1.appendChild(radiobtn5)
  div1.appendChild(submitbtn)
  main_container.appendChild(div1)
  timer()
  display_questions()
}

let questions = [
  ["Which is the capital of Canada?", "Halifax", "Toronto", "Monreal", "Ottawa", "D"],
  ["Who is the patron saint of Canada?", "St. David", "St. Andrew", "St. George", "St. Jean de Brebeuf", "D"],
  ["When did Montreal host Olympics?", "1964", "1970", "1980", "1984", "B"],
  ["Who was the Prime Minister of Canada from 1968 to 1979?", "Pierre Elliot Trudeau", "John Napier Turner", "Kim Campbell", "Martin Brian Mulroney", "A"],
  [" What is in the centre of Canada flag?", "Two swords", "sun", "cross", "Maple leaf", "D"],
  ["What is the status of Canada?", "Republic", "Dominion", "Kingdom", "Commonwealth", "D"],
  ["Which of the following is not a province of Canada?", "Alberta", "British Columbia", "Rhode Island", "Quebec", "C"],
  ["Which country has larger area than Canada?", "Russia", "USA", "Brazil", "China", "A"],
  ["Which country is on the south of Canada?", "Norway", "USA", "Mexico", "Brazil", "B"],
  ["Which is the longest river in Canada?", "St. Lawrence", "MacKenzie", "Nelson", "Fraser", "B"]
]

function display_questions() {
  if (pos >= questions.length) {
    display_result("Quiz completed")
    return false
  }
  radiobtn5.checked = true
  questionlabel.textContent = `Question ${pos+1} of ${questions.length}`
  question.textContent = questions[pos][0]
  label1.textContent = questions[pos][1]
  label2.textContent = questions[pos][2]
  label3.textContent = questions[pos][3]
  label4.textContent = questions[pos][4]
}

function checkanswer() {
  
  choices = document.getElementsByName("choices")
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value

    }
  }
  if (choice == questions[pos][5]) {
    correct++
  }
  pos++
  display_questions()
}

function display_result(value) {
  document.getElementById('timer').style.display = 'none'
  div1.style.display = 'none'
  const message = document.createElement("h3")
  message.textContent = value
  const result = document.createElement("h3")
  result.textContent = "you got " + correct + " out of " + questions.length
  const startagain = document.createElement("button")
  startagain.textContent = "Start Quiz Again"
  main_container.appendChild(message)
  main_container.appendChild(result)
  main_container.appendChild(startagain)
  startagain.addEventListener('click', startquiz)
}


function startquiz() {
  location.reload()
}
