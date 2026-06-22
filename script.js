const ticketID = "GHI-230625-01";

let currentQuestion = 0;
let score = 0;

/* PAGES */

function showPage(pageId){

document.querySelectorAll(".screen").forEach(page=>{

page.classList.remove("active");

});

document.getElementById(pageId).classList.add("active");

}

/* LOGIN */

function verifyTicket(){

const input =
document.getElementById("ticketInput").value;

if(input === ticketID){

showPage("loadingPage");

startLoading();

}else{

document.getElementById("loginError").innerHTML =
"❌ Ticket tidak valid 😭";

}

}

/* LOADING */

function startLoading(){

const box =
document.getElementById("loadingText");

setTimeout(()=>{

box.innerHTML =
"<p>Checking memories... ✓</p>";

},1000);

setTimeout(()=>{

box.innerHTML +=
"<p>Checking loyalty... ✓</p>";

},2000);

setTimeout(()=>{

box.innerHTML +=
"<p>Checking patience... ✓</p>";

},3000);

setTimeout(()=>{

box.innerHTML +=
"<p>Access Granted ❤️</p>";

},4000);

setTimeout(()=>{

showPage("quizPage");

loadQuestion();

},5000);

}

/* QUIZ */

const questions = [

{
question:
"Siapa yang paling sering bilang 'aku gapapa' padahal nggak? 😭",

answers:[
"Alina",
"Alina",
"Alina",
"Semua benar"
],

correct:3
},

{
question:
"Tanggal jadian kita?",

answers:[
"23 Juni 2025",
"22 Juni 2025",
"24 Juni 2025",
"23 Mei 2025"
],

correct:0
},

{
question:
"Siapa yang lebih sering ngambek? 😋",

answers:[
"Alina",
"Ghifarel",
"Kucing tetangga",
"Google Maps"
],

correct:0
},

{
question:
"Apa hadiah terbesar selama setahun ini?",

answers:[
"Boneka",
"Jajan",
"Kamu ❤️",
"Stiker"
],

correct:2
},

{
question:
"Siapa yang lebih sering bilang 'kangen' duluan?",

answers:[
"Alina",
"Ghifarel",
"Dua-duanya",
"ChatGPT"
],

correct:2
},

{
question:
"Kalau berantem biasanya siapa yang nyair duluan?",

answers:[
"Alina",
"Ghifarel",
"Random",
"Admin"
],

correct:0
},

{
question:
"Relationship status?",

answers:[
"Verified ❤️",
"Verified ❤️",
"Verified ❤️",
"Semua benar"
],

correct:3
},

{
question:
"Siapa pacar Alina?",

answers:[
"Ghifarel",
"Ghifarel",
"Ghifarel",
"Semua benar"
],

correct:3
},

{
question:
"Siapa orang favorit Alina?",

answers:[
"Ghifarel",
"Ghifarel",
"Ghifarel",
"Semua benar"
],

correct:3
},

{
question:
"Apakah kamu siap lanjut ke tahun kedua?",

answers:[
"Ya",
"YA",
"YAAA",
"1000x YA"
],

correct:3
}

];

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("questionNumber").innerHTML =
`Question ${currentQuestion+1}/10`;

document.getElementById("questionText").innerHTML =
q.question;

const answers =
document.getElementById("answers");

answers.innerHTML = "";

q.answers.forEach((answer,index)=>{

answers.innerHTML +=
`<button class="answerBtn"
onclick="answerQuestion(${index})">
${answer} </button>`;

});

}

function answerQuestion(index){

if(index === questions[currentQuestion].correct){

score++;

}

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

showResult();

}

}

/* RESULT */

function showResult(){

showPage("resultPage");

document.getElementById("scoreText").innerHTML =
`${score}/10`;

let rank = "";

if(score >= 9){

rank =
"👑 Certified Boyfriend";

}else if(score >= 7){

rank =
"⭐ Good Boyfriend";

}else{

rank =
"😭 Needs More Training";

}

document.getElementById("rankText").innerHTML =
rank;

}

/* CAMERA */

async function startCamera(){

const stream =
await navigator.mediaDevices.getUserMedia({
video:true
});

document.getElementById("video").srcObject =
stream;

}

function capturePhoto(){

const video =
document.getElementById("video");

const canvas =
document.getElementById("canvas");

canvas.width =
video.videoWidth;

canvas.height =
video.videoHeight;

const ctx =
canvas.getContext("2d");

ctx.drawImage(
video,
0,
0
);

alert(
`📸 Photo captured!\nScore: ${score}/10`
);

}
