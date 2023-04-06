$(document).ready(function(){
    
    // Define quiz questions, answers, and options
    const questions = [
        "Which year was Nazarbayev University founded?",
        "What is the name of the first man on the moon?",
        "What is the code name for Android 10?",
        "What is the programming language used for web development?"
    ];
    
    const answers = [
        "2009",
        "Neil Armstrong",
        "Q",
        "JavaScript"
    ];
    
    const choice_options = [
        ["2009", "2010", "2011", "2012"],
        ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
        ["P", "O", "N", "Q"],
        ["Python", "Java", "C++", "JavaScript"]
    ];
    
    // Generate quiz questions
    const quizBox = $("#quiz-box");
    for(let i = 0; i < questions.length; i++) {
        quizBox.append("<div class='question'>"); 
        $('.question').eq(i).append(`<p class='d'>Q${i+1}. ${questions[i]}</p>`);
        for(let j = 0; j < 4; j++) {
            $('.question').eq(i).append(`<label><input type='radio' name='q${i+1}' value='${choice_options[i][j]}'>${choice_options[i][j]}</label>`);
        }
    }
    
    // Initialize score and reset flag
    let countCorrect = 0;
    let reset = false;
    
    // Attach event listener to the "Check Answer" button
    $("button").click(function(event) {
        // Prevent default form submission behavior
        event.preventDefault();
        
        // Check answers and update score
        for(let i = 0; i < questions.length; i++) {
            let selected = $(`input[name='q${i+1}']:checked`).val();
            if(selected === answers[i]) {
                countCorrect++;
            }
        }
        
        // Display result
        $("#quiz-box").append(`<h2>Result of the quiz is: ${countCorrect}/${questions.length}</h2>`);
        
        // Reset score and flag for next attempt
        countCorrect = 0;
        reset = true;
    });
    
});
