$(() => {
// ======================
// GLOBAL VARIABLES
// ======================

    let $randQuestion;
    let $random;
    let $randQuestionDisplay;
    let $wrongAnswers = 0;
    let $correctAnswers = 0;


// =====================
// QUESTION BANKS
// =====================

const easyQuestions = [
    {Question: `What is the name of the parallel hybrid computer that runs Project Quantum Leap?`, Answer: `Ziggy`},
    {Question: `What is the name of Sam's holographic best friend and guide?`, Answer: `Al`},
    {Question: `On what network did Quantum Leap air?`, Answer: `NBC`},
    {Question: `Who played Dr. Sam Beckett?`, Answer: `Scott Bakula`},
    {Question: `Who played the Project Observer, Al?`, Answer: `Dean Stockwell`},
    {Question: `In what year did the series debut?`, Answer: `1989`},
    {Question: `How many seasons did the show last?`, Answer: `Five`},
    {Question: `In the opening narration of most episodes, we're told that Sam is always hoping that his next leap will be the leap...where?`, Answer: `Home`},
    {Question: `In what Illinois city does Sam rescue rock 'n roll music in 1959?`, Answer: 'Peoria'},
    {Question: `Al can walk through things in the past, because he is a what?`, Answer: `Hologram`},
];

const kissesWithHistoryQuestions = [
    
    {Question: `In "How the Tess Was Won", Sam accidentally helps Buddy Holly come up with the lyrics for what song?`, Answer: `Peggy Sue`},
    {Question: `Which U.S. president did Sam encounter as a young boy in 1950s New York?`, Answer: `Donald Trump`},
    {Question: `Who does Sam teach the 'Moonwalk' to in 1961?`, Answer: `Michael Jackson`},
    {Question: `In the infamous "Halloween episode" (it's title shall not be named), what future novelist did Sam accidentally influence?)`, Answer: `Stephen King`},
    {Question: `Who does Sam teach 'The Twist' to in 1959?`, Answer: `Chubby Checker`},
    {Question: `Sam was in New York City in 1964 at the same time which band was playing The Ed Sullivan Show?`, Answer: 'The Beatles'},
    {Question: `What does Sam teach Dr. Heimlich a couple of years before the maneuver is invented?`,  Answer: `The Heimlich Maneuver`},
    {Question: `In the Pilot Episode, Sam leaps into a minor league baseball player, and is pitched to by what future star player?`, Answer: `Tom Seaver`},
    {Question: `Prior to the conclusion of "Mirror Image", how many times had Al been married?`, Answer: `5`},
    {Question: `In the new timeline created at the end of "Mirror Image", how many daughters did Al and Beth have?`, Answer: `4`},
    {Question: `In what year was Sam born?`, Answer: `1953`},
    {Question: `In what year did Sam step into the accelerator and first travel back in time?`, Answer: '1995'},
    {Question: `In what year does the future sequence of "The Leap Back" take place?`, Answer: '1999'},
];

const nameTheEpisodeQuestions = [
    {Question: `What year is the furthest Sam has leapt back in time, including the novels?`, Answer: `1776`},
    {Question: `In what year was Sammy Jo Fuller born?`, Answer: `1967`},
    {Question: `What is the first name of Marilyn Monroe's bodyguard in "Goodbye Norma Jean?"`, Answer: `Dennis`},
    {Question: `In what year does the episode "Promised Land" take place?`, Answer: `1971`},
    {Question: `In what year does Tom Beckett die in Vietnam in the original timeline?`, Answer: '1970'},
    {Question: `Sam is the lead singer of what 70's glam rock band in the episode "Glitter Rock"?`, Answer: `King Thunder`},
    {Question: `What third season episode was almost the final episode aired before a letter-writing campaign saved the series?`, Answer: `Runaway`}
];

const theProjectQuestions = [
    {Question: `What year is the furthest Sam has leapt back in time, including the novels?`, Answer: `1776`},
    {Question: `In what year was Sammy Jo Fuller born?`, Answer: `1967`},
    {Question: `What is the first name of Marilyn Monroe's bodyguard in "Goodbye Norma Jean?"`, Answer: `Dennis`},
    {Question: `In what year does the episode "Promised Land" take place?`, Answer: `1971`},
    {Question: `In what year does Tom Beckett die in Vietnam in the original timeline?`, Answer: '1970'},
    {Question: `Sam is the lead singer of what 70's glam rock band in the episode "Glitter Rock"?`, Answer: `King Thunder`},
    {Question: `What third season episode was almost the final episode aired before a letter-writing campaign saved the series?`, Answer: `Runaway`}

];

const novelsAndComicsQuestions = [
    {Question: `What year is the furthest Sam has leapt back in time, including the novels?`, Answer: `1776`},
    {Question: `In what year was Sammy Jo Fuller born?`, Answer: `1967`},
    {Question: `What is the first name of Marilyn Monroe's bodyguard in "Goodbye Norma Jean?"`, Answer: `Dennis`},
    {Question: `In what year does the episode "Promised Land" take place?`, Answer: `1971`},
    {Question: `In what year does Tom Beckett die in Vietnam in the original timeline?`, Answer: '1970'},
    {Question: `Sam is the lead singer of what 70's glam rock band in the episode "Glitter Rock"?`, Answer: `King Thunder`},
    {Question: `What third season episode was almost the final episode aired before a letter-writing campaign saved the series?`, Answer: `Runaway`}
];
//===========================================================================
//======================================
// FUNCTIONS FOR 5 ROUNDS OF GAME PLAY
//======================================

////////////////////
// INTRO
///////////////////

// Removes Intro message and 'Why I'm Here' Button
const removeIntro = () => {
    $('#ready').remove();
    $('#why-im-here').remove();
    $('#ultimate').css('display', 'none');
};

// Adds the Rules and 'Activate Accelerator' button
const addRules = () => {
    $('#rules').css('display', 'block');
    $('#play-game').css('display', 'block');
};

////////////////////////////
// ROUND 1 - SWISS-CHEESED
////////////////////////////

// Removes the Rules and the start of 'Round 1 - Easy Questions'
const removeRules = () => {
    $('.rules-head').remove();
    $('.sub-head').remove();
};

// Removes 'Activate Accelerator Button' at the start of 'Round 1 - Easy Questions'
const removeAcceleratorButton = () => {
    $('#play-game').remove();
};

// Adds the answer box and button at the start of 'Round 1 - Easy Questions'
const addEasyAnswerBox = () => {
    $('#easy-answer').css('display', 'block');
    $('#easy-button').css('display', 'block');
};

// Removes the answer box and submit button for end of 'Round 1 - Easy Questions'
const removeEasyAnswerBox = () => {
    $('#easy-answer').css('display', 'none');
    $('#easy-button').css('display', 'none');
}

/////////////////////////////////
// ROUND 2 - KISSES WITH HISTORY
/////////////////////////////////

// Adds 'Round 2 - Kisses with History' explanation and Round 2 Start button to DOM
const kissesWithHistory = () => {
    $('#kisses').css('display', 'block');
    $('#kisses-button').css('display', 'block');
    $wrongAnswers = 0;
    console.log($wrongAnswers);
}

// Removes Round 2 - Kisses with History' explanation and Round 2 Start button from the DOM
const removeKisses = () => {
    $('#kisses').remove();
    $('#kisses-button').remove();
}

// Adds 'Round 2 - Kisses with History' answer box and submit button
const addKissesAnswerBox = () => {
    $('#kisses-input-answer').css('display', 'block');
    $('#kisses-input-button').css('display', 'block');
};

// Removes the answer box and submit button for end of 'Round 2 - Kisses with History' Questions
const removeKissesAnswerBox = () => {
    $('#kisses-input-answer').css('display', 'none');
    $('#kisses-input-button').css('display', 'none');
}

///////////////////////////////
// ROUND 3 - NAME THE EPISODE
///////////////////////////////

// Adds 'Round 3 - Name the Episode' explanation and Round 3 Start button to DOM
const nameTheEpisode = () => {
    $('#episode').css('display', 'block');
    $('#episode-button').css('display', 'block');
    $wrongAnswers = 0;
    console.log($wrongAnswers);
}

// Removes 'Round 3 - Name the Episode' explanation and Round 3 Start button from the DOM
const removeEpisode = () => {
    $('#episode').remove();
    $('#episode-button').remove();
}

// Adds 'Round 3 - Name the Episode' answer box and submit button
const addEpisodeAnswerBox = () => {
    $('#episode-input-answer').css('display', 'block');
    $('#episode-input-button').css('display', 'block');
};

// Removes the answer box and submit button for end of 'Round 3 - Name the Episode' Questions
const removeEpisodeAnswerBox = () => {
    $('#episode-input-answer').css('display', 'none');
    $('#episode-input-button').css('display', 'none');
}

///////////////////////////////
// ROUND 4 - THE PROJECT
///////////////////////////////

// Adds 'Round 4 - The Project' explanation and Round 4 Start button to DOM
const theProject = () => {
    $('#the-project').css('display', 'block');
    $('#the-project-button').css('display', 'block');
    $wrongAnswers = 0;
}

// Removes 'Round 4 - The Project' explanation and Round 4 Start button from the DOM
const removeProject = () => {
    $('#the-project').remove();
    $('#the-project-button').remove();
}

// Adds 'Round 4 - The Project' answer box and submit button
const addTheProjectAnswerBox = () => {
    $('#the-project-input-answer').css('display', 'block');
    $('#the-project-input-button').css('display', 'block');
}

// Removes the answer box and submit button for end of 'Round 4 - The Project' Questions
const removeTheProjectAnswerBox = () => {
    $('#the-project-input-answer').css('display', 'none');
    $('#the-project-input-button').css('display', 'none');
};

////////////////////////////////
// ROUND 5 - NOVELS AND COMICS
////////////////////////////////

// Adds 'Final Round - Novels and Comics' explanation and Final Round Start button to DOM
const novelsAndComics = () => {
    $('#novels-and-comics').css('display', 'block');
    $('#the-project-button').css('display','block');
    $wrongAnswers = 0;
}

// Removes 'Final Round - Novels and Comics' explanation and Start button from the DOM
const removeNovelsAndComics = () => {
    $('#the-project').remove();
    $('#the-project-button').remove();
}

// Adds 'Final Round - Novels and Comics' answer box and submit button
const addNovelsAndComicsAnswerBox = () => {
    $('#novels-and-comics-input-answer').css('display', 'block');
    $('#novels-and-comics-input-button').css('display', 'block');
}

// Removes the answer box and submit button for end of 'Final Round - Novels and Comics'
const removeNovelsAndComicsAnswerBox = () => {
    $('#novels-and-comics-input-answer').css('display', 'none');
    $('#the-project-input-button').css('display', 'none');
}

//=========================================================================
// SCORE CHECKS
//=========================================================================

// Checks score after end of 'Round 1 - Easy Questions' round, and sends player on to Round 2 - Kisses with History if wrong answers < 3, else, it will end the game
const checkArraysEasy = () => {
    removeEasyAnswerBox();
    console.log($wrongAnswers);
    if ($wrongAnswers >= 3) {
        endGameLose();
    } else if ($wrongAnswers < 3) {
        $scoreMessage = $('<h3>').text(`You got ${$wrongAnswers} questions wrong in that round. Your score is now ${$correctAnswers}.`).attr('id', '#judge');
        $('#judge').append($scoreMessage);
        $('#proceed').css('display', 'block');
        // kissesWithHistory
    }
};

// Removes score card and proceed button for round 2
const removeCheckArraysEasy = () => {
    $('#judge').empty();
    $('#proceed').remove();
};

// Checks score after end of 'Round 2 - Kisses with History', and sends player to 'Round 3 - Name the Episode' if wrong answers < 3, else, it will end the game
const checkArraysKisses = () => {
    removeKissesAnswerBox();
    console.log($wrongAnswers);
    if ($wrongAnswers >= 3) {
        endGameLose();
        console.log('Is this running?');
    } else if ($wrongAnswers < 3) {
        $scoreMessageKisses = $('<h3>').text(`You got ${$wrongAnswers} questions wrong in that round. Your score is now ${$correctAnswers}.`).attr('id', '#judge');
        $('#judge').append($scoreMessageKisses);
        $('#proceed-kisses').css('display', 'block');
    }
};

// Removes score card and proceed button for round 3
const removeCheckArraysKisses = () => {
    $('#judge').empty();
    $('#proceed-kisses').remove();
};

// Checks score after end of 'Round 3 - Name the Episode', and sends player to 'Round 4 - The Project' if wrong answers < 3, else, it will end the game
const checkArraysEpisode = () => {
    removeEpisodeAnswerBox();
    console.log($wrongAnswers);
    if ($wrongAnswers >= 3) {
        endGameLose();
        console.log('Is this running?');
    } else if ($wrongAnswers < 3) {
        $scoreMessageEpisode = $('<h3>').text(`You got ${$wrongAnswers} questions wrong in that round. Your score is now ${$correctAnswers}.`).attr('id', '#judge');
        $('#judge').append($scoreMessageEpisode);
        $('#proceed-episode').css('display', 'block');
    }
};

// Removes score button and proceed for round 4
const removeCheckArraysEpisode = () => {
    $('#judge').empty();
    $('#proceed-episode').remove();
};

// Checks score after end of 'Round 4 - The Project' and sends player to 'Round 5 - Novels and Comics' if wrong answers are < 3. 
const checkArraysTheProject = () => {
    removeTheProjectAnswerBox();
    if ($wrongAnswers >= 3) {
        endGameLose();
    } else if ($wrongAnswers < 3) {
        $scoreMessageProject = $('<h3>').text(`You got ${$wrongAnswers} questions wrong in that round. Your score is now ${$correctAnswers}.`).attr('id', '#judge');
        $('#judge').append($scoreMessageProject);
        $('#proceed-project').css('display', 'block');
    }
};

const removeCheckArraysProject = () => {
    $('#judge').empty();
    $('#proceed-project').remove();
};

// Checks score after end of 'Round 4 - The Project' and sends player to 'Round 5 - Novels and Comics' if wrong answers are < 3. 
const checkArraysNovels = () => {
    removeNovelsAndComicsAnswerBox();
    if ($wrongAnswers >= 3) {
        endGameLose();
    } else if ($wrongAnswers < 3) {
        $scoreMessageProject = $('<h3>').text(`You got ${$wrongAnswers} questions wrong in that round. Your score is now ${$correctAnswers}.`).attr('id', '#judge');
        $('#judge').append($scoreMessageProject);
        $('#end-game-win').css('display', 'block');
    }
};

// Ends game if player has missed more than 3 questions in the last round
const endGameLose = () => {
    $endGameLoseMessage = $('<h2>')
        .text(`You missed ${$wrongAnswers} questions in the last round, and have lost the game. Your total score was ${$correctAnswers}. Try again and beat your score!`)
        .attr('id', '#judge')
        .css('color', 'red')
        .on($('audio#end-game-music')[0].play())
    $('#judge').append($endGameLoseMessage);
    $('#play-again').css('display', 'block');
    $endGameLoseMessage;

};

// =========================================================================
// AUDIO FILES AND FUNCTIONS
// ========================================================================
const playTheme = () => {
    $('audio#theme')[0].play();
}

const stopTheme = () => {
    $('audio#theme')[0].pause();
}

const playLeapEffect = () => {
    $('audio#leap-effect')[0].play();
}

const handlinkEffect = () => {
    $('audio#handlink-effect')[0].play();
}

const endTheme = () => {
    $('audio#rock-theme')[0].play();
}

// ========================================================================================
// ANSWER INPUTS
// ========================================================================================

// /////////////////////
// Easy Questions Input
// /////////////////////
 
$('#easy-input').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#easy-answer').val();
    if ($answer === easyQuestions[$random].Answer) {
        $('#display-question').append($randQuestionDisplay);
        easyQuestions.splice($random, 1);
        $randQuestionDisplay.remove();
        $correctMessage = $('<h3>').text('Correct!');
        $('#judge').append($correctMessage);
        $correctAnswers +=1;
        $answer = $('#easy-answer').val('');
        $correctMessage.fadeOut(2000);
        randEasyQGenerator();
    } else if ($answer !== easyQuestions[$random].Answer) {
        $randQuestionDisplay.remove();
        $incorrectMessage = $('<h3>').text('Incorrect!').css('color', 'red');
        $('#judge').append($incorrectMessage);
        $wrongAnswers++;
        easyQuestions.splice($random, 1);
        $answer = $('#easy-answer').val('');
        $incorrectMessage.fadeOut(2000);
        randEasyQGenerator();
    }
    
});

// ==========================
// Kisses With History Input
// ==========================

$('#kisses-input').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#kisses-input-answer').val();
    if ($answer === kissesWithHistoryQuestions[$random].Answer) {
        // console.log($answer);
        $correctMessage = $('<h3>').text('Correct!');
        $('#display-question').append($randQuestionDisplay);
        kissesWithHistoryQuestions.splice($random, 1);
        $randQuestionDisplay.remove();
        $correctMessage = $('<h3>').text('Correct!');
        $('#judge').append($correctMessage);
        $correctAnswers +=2;
        $answer = $('#kisses-input-answer').val('');
        $correctMessage.fadeOut(1000);
        randKissesQGenerator();
    } else if ($answer !== kissesWithHistoryQuestions[$random].Answer) {
        $randQuestionDisplay.remove();
        $incorrectMessage = $('<h3>').text('Incorrect!').css('color', 'red');
        $('#judge').append($incorrectMessage);
        $wrongAnswers++;
        kissesWithHistoryQuestions.splice($random, 1);
        // console.log(kissesWithHistoryQuestions.length);
        $answer = $('#kisses-input-answer').val('');
        $incorrectMessage.fadeOut(1000);
        randKissesQGenerator();
    }
    
});

// ==========================
// Name the Episode Input
// ==========================

$('#episode-input').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#episode-input-answer').val();
    if ($answer === nameTheEpisodeQuestions[$random].Answer) {
        // console.log($answer);
        $correctMessage = $('<h3>').text('Correct!');
        $('#display-question').append($randQuestionDisplay);
        // timer =+ 15;
        nameTheEpisodeQuestions.splice($random, 1);
        $randQuestionDisplay.remove();
        $correctMessage = $('<h3>').text('Correct!');
        $('#judge').append($correctMessage);
        $correctAnswers +=3;
        $answer = $('#episode-input-answer').val('');
        $correctMessage.fadeOut(1000);
        randEpisodeQGenerator();
    } else if ($answer !== nameTheEpisodeQuestions[$random].Answer) {
        $randQuestionDisplay.remove();
        $incorrectMessage = $('<h3>').text('Incorrect!').css('color', 'red');
        $('#judge').append($incorrectMessage);
        $wrongAnswers++;
        nameTheEpisodeQuestions.splice($random, 1);
        $answer = $('#episode-input-answer').val('');
        $incorrectMessage.fadeOut(1000);
        randEpisodeQGenerator();
    }
});

//////////////////////////
// The Project Input
//////////////////////////

$('#the-project-input').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#the-project-input-answer').val();
    if ($answer === theProjectQuestions[$random].Answer) {
        // console.log($answer);
        $correctMessage = $('<h3>').text('Correct!');
        $('#display-question').append($randQuestionDisplay);
        // timer =+ 15;
        theProjectQuestions.splice($random, 1);
        $randQuestionDisplay.remove();
        $correctMessage = $('<h3>').text('Correct!');
        $('#judge').append($correctMessage);
        $correctAnswers += 4;
        $answer = $('#the-project-input-answer').val('');
        $correctMessage.fadeOut(1000);
        randProjectQGenerator();
    } else if ($answer !== theProjectQuestions[$random].Answer) {
        $randQuestionDisplay.remove();
        $incorrectMessage = $('<h3>').text('Incorrect!').css('color', 'red');
        $('#judge').append($incorrectMessage);
        $wrongAnswers++;
        theProjectQuestions.splice($random, 1);
        $answer = $('#the-project-input-answer').val('');
        $incorrectMessage.fadeOut(1000);
        randProjectQGenerator();
    }
});

///////////////////////////
// Novels and Comics Input
///////////////////////////

$('#novels-andcomics-input').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#novels-and-comics-input-answer').val();
    if ($answer === novelsAndComicsQuestions[$random].Answer) {
        // console.log($answer);
        $correctMessage = $('<h3>').text('Correct!');
        $('#display-question').append($randQuestionDisplay);
        // timer =+ 15;
        novelsAndComicsQuestions.splice($random, 1);
        $randQuestionDisplay.remove();
        $correctMessage = $('<h3>').text('Correct!');
        $('#judge').append($correctMessage);
        $correctAnswers += 5;
        $answer = $('#novels-and-comics-input-answer').val('');
        $correctMessage.fadeOut(1000);
        randNovelsQGenerator();
    } else if ($answer !== novelsAndComicsQuestions[$random].Answer) {
        $randQuestionDisplay.remove();
        $incorrectMessage = $('<h3>').text('Incorrect!').css('color', 'red');
        $('#judge').append($incorrectMessage);
        $wrongAnswers++;
        novelsAndComicsQuestions.splice($random, 1);
        $answer = $('#novels-and-comics-input-answer').val('');
        $incorrectMessage.fadeOut(1000);
        randNovelsQGenerator();
    }
});

////////////////////////////////////
// Random Question Generator Arrays
///////////////////////////////////

// Round 1 - Easy Questions
const randEasyQGenerator = () => {
    // Runs through array 10 times, then exits back to check score
        
        if (easyQuestions.length > 0) {
        // random variable will generate number to determine randomly selected question
        $random = Math.floor(Math.random() * easyQuestions.length);
        $randQuestion = (easyQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
        // console.log($randQuestionDisplay);
    // Question is appended to the div for player to answer
        $('#display-question').append($randQuestionDisplay);
        } else {
        checkArraysEasy();
        }
}
// Round 2 - Kisses with History
const randKissesQGenerator = () => {
    if (kissesWithHistoryQuestions.length > 0) {
        // random variable will generate number to determine randomly selected question
        $random = Math.floor(Math.random() * kissesWithHistoryQuestions.length);
        $randQuestion = (kissesWithHistoryQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
        console.log($randQuestionDisplay);
    // Question is appended to the div for player to answer
        $('#display-question').append($randQuestionDisplay);
        } else {
        checkArraysKisses();
        }
}

// Round 3 - Name the Episode
const randEpisodeQGenerator = () => {
    if (nameTheEpisodeQuestions.length > 0) {
        // random variable will generate number to determine randomly selected question
        $random = Math.floor(Math.random() * nameTheEpisodeQuestions.length);
        $randQuestion = (nameTheEpisodeQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
        console.log($randQuestionDisplay);
    // Question is appended to the div for player to answer
        $('#display-question').append($randQuestionDisplay);
        } else {
        checkArraysEpisode();
        }
}

// Round 4 - The Project 

const randProjectQGenerator = () => {
    if (theProjectQuestions.length > 0) {
        $random = Math.floor(Math.random() * theProjectQuestions.length);
        $randQuestion = (theProjectQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
    // Question is appended to the div for player to answer
        $('#display-question').append($randQuestionDisplay);
        } else {
        checkArraysTheProject();
        }
}
      
// Final Round - Novels and Comics

const randNovelsQGenerator = () => {
    if (novelsAndComicsQuestions.length > 0) {
        $random = Math.floor(Math.random() * novelsAndComicsQuestions.length);
        let $randQuestion = (novelsAndComicsQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
        $('#display-question').append($randQuestionDisplay);
        } else {
        checkArraysNovels();
        }
};



const winPageGenerator = () => {
    $('.game-end').css('display', 'block');
} 

// ================================================================ //
// Event Listeners
// ================================================================
//////////////////////
// GAME INTRO
/////////////////////

// Removes intro message and places the rules of the game onto the DOM
$('#why-im-here').on('click', removeIntro);
$('#why-im-here').on('click', addRules);
$('#why-im-here').on('click', playTheme);


//////////////////////////////
// START GAME PLAY - ROUND 1
//////////////////////////////

// Removes Rules from the DOM
$('#play-game').on('click', removeRules);

// Stops theme song
$('#play-game').on('click', stopTheme);

// Removes 'Begin Round 1' from DOM
$('#play-game').on('click', removeAcceleratorButton);

// Begins random question generator for 'Round 1 - Easy Questions'
$('#play-game').on('click', randEasyQGenerator);

// Adds input field and submit button for 'Round 1'
$('#play-game').on('click', addEasyAnswerBox);

// Plays Leap Effect to start the game
$('#play-game').on('click', playLeapEffect); 

// Adds handlink effect to button click
$('#easy-button').on('click', handlinkEffect);

/////////////////////////////////////////
// BEGINS ROUND 2 - KISSES WITH HISTORY
/////////////////////////////////////////

// Removes score update and Proceed button
$('#proceed').on('click', removeCheckArraysEasy);

// Adds 'Round 2 - Kisses with History' explanation to the DOM
$('#proceed').on('click', kissesWithHistory);

// Removes 'Round 2 - Kisses with History' explanation from the DOM
$('#kisses-button').on('click', removeKisses);

// Adds 'Round 2 - Kisses with History' input field and answer button to DOM
$('#kisses-button').on('click', addKissesAnswerBox);

// Plays leap effect to start the round
$('#kisses-button').on('click', playLeapEffect);

// Begins random question generator for 'Round 2 - Kisses with History'
$('#kisses-button').on('click', randKissesQGenerator);

// Adds handlink effect to button click
$('#kisses-input-button').on('click', handlinkEffect);

/////////////////////////////////////////
// BEGINS ROUND 3 - NAME THE EPISODE
/////////////////////////////////////////

// Removes score update and Proceed button
$('#proceed-kisses').on('click', removeCheckArraysKisses);

// Adds 'Round 3 - Name the Episode' explanation to the DOM
$('#proceed-kisses').on('click', nameTheEpisode);

// Removes 'Round 3 - Name the Episode' explanation from the DOM
$('#episode-button').on('click', removeEpisode);

// Adds 'Round 3 - Name the Episode' input field and answer button to DOM
$('#episode-button').on('click', addEpisodeAnswerBox);

// Plays leap effect to start the round
$('#episode-button').on('click', playLeapEffect);

// Begins random question generator for 'Round 3 - Name the Episode'
$('#episode-button').on('click', randEpisodeQGenerator);

// Adds handlink effect to button click
$('#episode-input-button').on('click', handlinkEffect);

////////////////////////////////
// BEGINS ROUND 4 - THE PROJECT
////////////////////////////////

// Removes score update and Proceed button
$('#proceed-episode').on('click', removeCheckArraysEpisode);

// Adds 'Round 4 - The Project' explanation to the DOM
$('#proceed-episode').on('click', theProject);

// Removes 'Round 4 - The Project' explanation from the DOM
$('#the-project-button').on('click', removeProject);

// Adds 'Round 4 - The Project' input field and answer button to DOM
$('#the-project-button').on('click', addTheProjectAnswerBox);

// Plays leap effect to start the round
$('#the-project-button').on('click', playLeapEffect);

// Begins random question generator for 'Round 4 - The Project'
$('#the-project-button').on('click', randProjectQGenerator);

// Adds handlink effect to button click
$('#the-project-input-button').on('click', handlinkEffect);

//////////////////////////////////////
// BEGINS ROUND 5 - NOVELS AND COMICS
//////////////////////////////////////

// Removes score update and Proceed button
$('#proceed-project').on('click', removeCheckArraysProject);

// Adds 'Round 5 - Novels and Comics' explanation to the DOM
$('#proceed-project').on('click', novelsAndComics);

// Removes 'Final Round - Novels and Comics' explanation from the DOM
$('#novels-and-comics-button').on('click', removeNovelsAndComics);

// Adds 'Round 5 - Novels and Comics' input field and answer button to DOM
$('#novels-and-comics-button').on('click', addNovelsAndComicsAnswerBox);

// Plays leap effect to start the round
$('#novels-and-comics-button').on('click', playLeapEffect);

// Begins random question generator for 'Final Round'. 
$('#novels-and-comics-button').on('click', randNovelsQGenerator);

// Adds handlink effect to button click
$('#novels-and-comics-input-button').on('click', handlinkEffect);

//////////////////////
// After win of game
//////////////////////

// Final win page

$('#end-game-win').on('click', winPageGenerator);
$('#end-game-win').on ('click', endTheme);
});