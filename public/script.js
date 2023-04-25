var source_file = `Difficulty: 1
Question: What does DNA mean?
A: deoxyribonucleic acid
B: ribonucleic acid
C: deoxyribose
D: organic base
Answer: A

Difficulty: 1
Question: What is the basic unit of DNA called?
A: Nucleotide
B: Gene
C: Nucleus
D: Chromosome
Answer: A

Difficulty: 1
Question: Where can you find DNA in human cells?
A: Ribosomes
B: Nucleus
C: Vacule
D: Kloroplast
Answer: B

Difficulty: 1
Question: What is the structure of DNA?
A: Single helix
B: Triple helix
C: Double helix
D: Quadruple helix
Answer: C

Difficulty: 1
Question: How many chromosomes does an average human have?
A: 23
B: 100000
C: 44
D: 46
Answer: D

Difficulty: 2
Question: What happens to DNA in the S phase of cell cycle?
A: It is halved
B: Nothing
C: It is doubled
D: It is broken down 
Answer: C

Difficulty: 1
Question: What are the four nitrogenous bases found in DNA?
A: Adenine, Guanine, Cytosine, Thymine
B: Adenine, Guanine, Cytosine, Uracil
C: Adenine, Guanine, Uracil, Thymine
D: Adenine, Uracil, Cytosine, Thymine
Answer: A

Difficulty: 2
Question: Which one is wrong about cell division?
A: Human gametes are produced by meiosis
B: In mitosis 2 daughter cells are produced.
C: Daughter cells produced by mitosis are genetically identical with mother cells.
D: Meiosis produces 4 diploid cells. 
Answer: D

Difficulty: 3
Question: If a plant cell has 20 chromosomes, how many chromosomes are there in its endosperm?
A: 10
B: 20
C: 30
D: 40
Answer: C

Difficulty: 2
Question: What is the function of DNA helicase in DNA replication?
A: To unzip or separate the two strands of DNA
B: To arrange the nitrogenous bases
C: To fix a mutation
D: To form chromosomes
Answer: A

Difficulty: 1
Question: What does RNA mean?
A: ribonucleic acid
B: deoxyribonucleic acid
C: ribose
D: ribosome
Answer: A

Difficulty: 2
Question: What is a mutation in DNA?
A: A change in the DNA sequence that can alter the function of a gene
B: The absence of a phosphate group in a nucleotide
C: A problem in gene expressio
D: An additional sugar molecule in a nucleotide
Answer: A

Difficulty: 2
Question: What is the complementary base pair for adenine in DNA?
A: Guanine
B: Thymine
C: Cytosine
D: Uracil
Answer: B

Difficulty: 2
Question: What is the name of the process by which DNA is converted into RNA?
A: Translation
B: Transcription
C: Replication
D: Transformation
Answer: B

Difficulty: 3
Question: What is epigenetics?
A: The study of how DNA is replicated
B: The study of how proteins are translated from RNA
C: The study of how the expression of genes is regulated
D: The study of how mutations occur
Answer: C

Difficulty: 3
Question: What is CRISPR?
A: A type of enzyme used to cut DNA
B: A type of RNA that helps regulate gene expression
C: A method of gene editing
D: A type of virus that infects bacteria
Answer: C

Difficulty: 1
Question: Which of the following is NOT a component of a nucleotide?
A: Nitrogenous base
B: Phosphate group
C: Ribose sugar
D: Hydrogen ion                              
Answer: D

Difficulty: 2
Question: What is the process called when DNA is copied before cell division?
A: Translation
B: Transcription
C: Replication
D: Mutation
Answer: C

Difficulty: 2
Question: Which nitrogenous base is not present in RNA?
A: Adenine
B: Thymine
C: Guanine
D: Uracil
Answer: B

Difficulty: 2
Question: Which best describes the DNA in prokaryotes? 
A: Linear
B: Circular
C: Squared
D: Hexagonal
Answer: B

Difficulty: 1
Question: When is the national (for US) DNA day?
A: 6th of january 
B: 24th of april
C: 25th of april
D: there is no such thing
Answer: C

Difficulty: 3
Question: Which one is false for mitochondrial DNA in humans?
A: It’s inherited from mother only.
B: It’s circular. 
C: Its existence supports the endosymbiotic theory.
D: It codes for eye color. 
Answer: D

Difficulty: 3
Question: Which scientist didn’t receive a Nobel Prize for their work on the structure of DNA?
A: Francis Crick
B: James Watson
C: Rosalind Franklin
D: Maurice Wilkins
Answer: C

Difficulty: 3
Question: Which one is right about gel electrophoresis?
A: Smaller DNA fragments move less. 
B: It uses agarose gel.
C: DNA fragments move towards the cathode (-).
D: This is the method to edit human DNA. 
Answer: B

Difficulty:3
Question: What percentage of human DNA is the same as one of a banana?
A: 10%
B: 25%
C: 30%
D: 50%
Answer: D

Difficulty: 1
Question: How are the nitrogeneous bases in DNA connected?
A: By hydrogen bonds
B: By covalent bonds
C: By ionic bonds
D: By van der Waals forces
Answer: A

Difficulty: 2
Question: Which of the following is less determined by genetics?
A: Eye color
B: Lactose intolerance
C: Lung cancer 	
D: Huntington's disease
Answer: C

Difficulty: 3
Question: Who first identified DNA as a distinct molecule?
A: Phoebus Levene
B: Friedrich Miescher
C: Albrecht Kossel
D: Erwin Chargaff
Answer: B

Difficulty: 2
Question: For what purpose is DNA profiling not normally used?
A: To conduct a public survey
B: To investigate crimes
C: To indicate family relationships
D: To identify disaster victims
Answer: A

Difficulty: 3
Question: When was the Human Genome Project completed?
A: 1990
B: 1993
C: 2003
D: 2005
Answer: C
`

var userName = "";
var userMail = "";
var timerShouldStart = false;

function togglePopup(num) {
  var popup = document.getElementById('popup-container-' + num);
  popup.style.display = (popup.style.display === 'none') ? 'flex' : 'none';
}

function writeScore(name, mail, score) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var scores = JSON.parse(this.responseText);
      scores.push({name: name, mail: mail, score: score});
      console.log(scores); 
    }
  };
  xhttp.open("POST", "scores.json", true);
  xhttp.send();
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

togglePopup("end");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var scores = JSON.parse(this.responseText);
    console.log(scores);
    // Do something with the scores data
  }
};
xhttp.open("GET", "scores.json", true);
xhttp.send();

class Question {
  constructor(difficulty, question, options, answer) {
    this.difficulty = difficulty;
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}
  
function readQuestionsFromString(text) {
  let questions = [];
  let lines = text?.split("\n");
  for (let i = 0; i < lines?.length; i += 8) {
    // parse difficulty, question, options, answer
    let difficulty = parseInt(lines[i]?.split(':')[1]?.trim());
    // parse difficulty to int
    difficulty = parseInt(difficulty);

    let question = lines[i + 1]?.split(':')[1]?.trim();
    let options = [];
    for (let j = 0; j < 4; j++) {
      options.push(lines[i + 2 + j]?.split(':')[1]?.trim());
    }
    let answer = lines[i + 6]?.split(':')[1]?.trim();
    
    let q = new Question(difficulty, question, options, answer);
    questions.push(q);
  }
  return questions;
}
      
let questions = readQuestionsFromString(source_file);
console.log(questions);
  
// randomize question order
questions.sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 1;

var countdown = 16;

document.getElementById("question").innerHTML = questions[currentQuestion].question;
document.getElementById("buttonA").innerHTML = questions[currentQuestion].options[0];
document.getElementById("buttonB").innerHTML = questions[currentQuestion].options[1];
document.getElementById("buttonC").innerHTML = questions[currentQuestion].options[2];
document.getElementById("buttonD").innerHTML = questions[currentQuestion].options[3];
document.getElementById("currentQuestion").innerHTML = "Question " + (currentQuestion + 1) + " of " + questions.length;



  var timer = setInterval(function() {
    if (!timerShouldStart) {
      return;
    }
    countdown--;
    document.getElementById("countdown").innerHTML = countdown;
    if (countdown <= 0) {
      clearInterval(timer);
      timerShouldStart = false;
      togglePopup("end");
    }
  }, 1000);



// button click event listener
document.getElementById("buttons").addEventListener("click", function(event) {
  // get last character of id
  var lastChar = event.target.id[event.target.id.length - 1];
  console.log(lastChar);
  console.log(questions[currentQuestion].answer);
  if (lastChar == questions[currentQuestion].answer) {
    // Correct
    score++;
    // if score is higher than 30, go to end screen
    if (score > 30) {
      togglePopup("end");
      //writeScore(userName, userMail, score);
      setCookie(userName, [userMail, score], 7);
      timerShouldStart = false;
      return;
    }

    document.getElementById("currentQuestion").innerHTML = "Question " + score + " of " + questions.length;
    currentQuestion++;
    countdown = 15;
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("buttonA").innerHTML = questions[currentQuestion].options[0];
    document.getElementById("buttonB").innerHTML = questions[currentQuestion].options[1];
    document.getElementById("buttonC").innerHTML = questions[currentQuestion].options[2];
    document.getElementById("buttonD").innerHTML = questions[currentQuestion].options[3];
    
  } else { // wrong
    togglePopup("end");
    //writeScore(userName, userMail, score);
    setCookie(userName, [userMail, score], 7);
    timerShouldStart = false;
  }
});

function welcomeSubmit() {
  // get name and mail
  userName = document.getElementById("name").value;
  userMail = document.getElementById("email").value;
  // Log: "User {user} started the quiz."
  console.log("User " + userName + " started the quiz.");
  currentQuestion = 0;
  score = 1;
  questions.sort(() => Math.random() - 0.5);
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  document.getElementById("buttonA").innerHTML = questions[currentQuestion].options[0];
  document.getElementById("buttonB").innerHTML = questions[currentQuestion].options[1];
  document.getElementById("buttonC").innerHTML = questions[currentQuestion].options[2];
  document.getElementById("buttonD").innerHTML = questions[currentQuestion].options[3];
  document.getElementById("currentQuestion").innerHTML = "Question " + (currentQuestion + 1) + " of " + questions.length;
  countdown = 16;
  timerShouldStart = true;
  togglePopup("welcome");
}

function endSubmit() {
  togglePopup("end");
  // submit JSON score

  togglePopup("welcome");
}

document.getElementById("button-welcome").addEventListener("click", welcomeSubmit);
document.getElementById("button-end").addEventListener("click", endSubmit);