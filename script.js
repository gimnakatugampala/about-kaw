const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');
const loader = document.getElementById('loader');
const container = document.getElementById('container');
const domScore = document.getElementById('dom-score');
const hud = document.getElementById('hud-item');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 23;

let shuffleQuestions
let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded',() =>{
    setTimeout(() =>{
        loader.classList.add('hide');
        container.classList.remove('hide')
    },2000)
})

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
    
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish & Restart';
            domScore.innerText = `Your Score : ${scoretext}`;
            startButton.onclick = function(){
                setTimeout(() =>{
                    loader.classList.remove('hide')
                    container.classList.add('hide');
                    hud.classList.add('hide');
                },1)
                window.location.reload();
                    domScore.innerText = ''
            }
            startButton.classList.remove('hide')
            
            // setTimeout(() =>{
            //     window.location.reload();
            //     domScore.innerText = ''
            // },3000)
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"One of Her Hobbies ?",
        answers:[
            {text:'Gaming',correct:false},
            {text:'Reading',correct:true},
            {text:'Sleeping',correct:false},
            {text:'Singing',correct:false}
        ]
    },
    {
        questions:"Her Favorite Subject ?",
        answers:[
            {text:'Literature',correct:false},
            {text:'Economics',correct:true},
            {text:'Bussiness Studies',correct:false},
            {text:'Accounting',correct:false},
        ]
    },
    {
        questions:"Her Dream Job ?",
        answers:[
            {text:'CEO of her own company',correct:false},
            {text:'Chairman of her own company',correct:true},
            {text:'COO of her own company',correct:false},
            {text:'CFO of her own company',correct:false}
        ]
    },
    {
        questions:"Her Best School Moment ?",
        answers:[
            {text:'First Day of A/L',correct:false},
            {text:'Sports Meet',correct:false},
            {text:'First Day of O/L',correct:false},
            {text:'After Party Thinetha',correct:true}
        ]
    },
    {
        questions:"Her Most embarrassing moment in school ?",
        answers:[
            {text:'Slipped in the assembly',correct:true},
            {text:'Scolded by the Principal',correct:false},
            {text:'Got Beaten by a Teacher',correct:false},
            {text:'Fainted in the assembly',correct:false}
        ]
    },
    {
        questions:" A teacher who always mocks her ?",
        answers:[
            {text:'Kapila Sir',correct:false},
            {text:'Manjula Sir',correct:true},
            {text:'Maneesha Teacher',correct:false},
            {text:'Sathsara Sir',correct:false}
        ]
    },
    {
        questions:"Her Current Job ?",
        answers:[
            {text:'Babysitter',correct:false},
            {text:'Cashier',correct:false},
            {text:'Teacher',correct:false},
            {text:'Account assistant',correct:true}
        ]
    },
    {
        questions:" Define her school life in one word  ?",
        answers:[
            {text:'Memories',correct:true},
            {text:'Fun',correct:false},
            {text:'Waste of time',correct:false},
            {text:'Independent',correct:false}
        ]
    },
    {
        questions:"Where does she hope to be in 10 years ?",
        answers:[
            {text:'Getting Married',correct:false},
            {text:'Make as many kids as possible',correct:false},
            {text:'In Autralia',correct:false},
            {text:'Owner of a fashion studio',correct:true},
        ]
    },
    {
        questions:"Her Friend Circle Members ?",
        answers:[
            {text:'Bryan,Anju,Dileka',correct:true},
            {text:'Migara,Adhya,Sahassrika',correct:false},
            {text:'Sanduni,Sandro,Azmi',correct:false},
            {text:'Seneka,Roshan,Sahasra',correct:false}
        ]
    },
    {
        questions:"Famous Person she look up to ?",
        answers:[
            {text:'Oprah Winfrey',correct:false},
            {text:'Ellen Degeneres',correct:false},
            {text:'Emma Watson',correct:true},
            {text:'Princess Diana',correct:false}
        ]
    },
    {
        questions:"A schoolmate she look up to ?",
        answers:[
            {text:'Aadhya',correct:false},
            {text:'Sandro',correct:false},
            {text:'Sanduni',correct:false},
            {text:'Bryan',correct:true}
        ]
    },
    {
        questions:"Best year of her school life ?",
        answers:[
            {text:'2015 - 2016',correct:false},
            {text:'2018- 2019',correct:true},
            {text:'2013 - 2014',correct:false},
            {text:'2011 - 2012',correct:false}
        ]
    },
    {
        questions:"what is the most exciting thing in her life right now ?",
        answers:[
            {text:'Teaching',correct:false},
            {text:'Building a Startup',correct:false},
            {text:'Working on new fashion designs for her shop',correct:true},
            {text:'Her Job',correct:false}
        ]
    },
    {
        questions:"Best gift she ever recieved ?",
        answers:[
            {text:'A single rose',correct:true},
            {text:'A Ring',correct:false},
            {text:'A Phone',correct:false},
            {text:'A Laptop',correct:false}
        ]
    },
    {
        questions:"What is the one bad habbit she has since childhood?",
        answers:[
            {text:'Lazy',correct:false},
            {text:'Over Eating',correct:false},
            {text:'Over sleeping',correct:true},
            {text:'Bad Handwriting',correct:false}
        ]
    },
    {
        questions:"What is the one good habbit she has since childhood ?",
        answers:[
            {text:'Be Responsible With Money',correct:false},
            {text:'Working before deadlines',correct:true},
            {text:'Brushing Twice a Day',correct:false},
            {text:'Say "Please" and "Thank You"',correct:false}
        ]
    },
    {
        questions:"If she was given a superpower,what would it be ?",
        answers:[
            {text:'Mind reading',correct:true},
            {text:'Invisibility',correct:false},
            {text:'Teleportation',correct:false},
            {text:'Super Strength',correct:false}
        ]
    },
    {
        questions:"Best teacher she ever had?",
        answers:[
            {text:'Chamari Gamer',correct:false},
            {text:'Achini teacher',correct:false},
            {text:'Priyangani teacher',correct:true},
            {text:'Thilini teacher',correct:false}
        ]
    },
    {
        questions:"Her personality in one Word?",
        answers:[
            {text:'Impatient',correct:false},
            {text:'Diciplined',correct:false},
            {text:'Determined',correct:true},
            {text:'Domineering ',correct:false}
        ]
    },
    {
        questions:"'Manjula Sir' according to her?",
        answers:[
            {text:'Trust worthy',correct:false},
            {text:'Humble',correct:false},
            {text:'Experienced',correct:true},
            {text:'Funny',correct:false}
        ]
    },
    {
        questions:"'Bryan' according to her?",
        answers:[
            {text:'Kind',correct:false},
            {text:'Funny',correct:false},
            {text:'Loyal',correct:true},
            {text:'Humble',correct:false}
        ]
    },
    {
        questions:"'Migara' according to her?",
        answers:[
            {text:'Funny',correct:false},
            {text:'Humble',correct:false},
            {text:'Trust worthy',correct:true},
            {text:'Kind',correct:false}
        ]
    },
]