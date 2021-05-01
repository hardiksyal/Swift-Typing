const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const speedElement = document.getElementById('speed')
const accuracyElement = document.getElementById('accuracy')
var words;
var time;
var x=0;
let correctLetter;
let incorrectLetter;
let correct;
quoteInputElement.addEventListener('input', () => {
    for(; x<1; x++)startTimer()
    correctLetter=0;
    incorrectLetter=0;
    words=1;

    correct = true
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]

        if(character == null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        }else if (character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            correctLetter++;
            if (characterSpan.innerText==' '){words++}
        }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
            incorrectLetter++;
            if (characterSpan.innerText==' '){words++}

        }
    })
    if(correct){
        renderNewQuote()
    }
})

const btn = document.querySelector('#btn');
const sb = document.querySelector('#dropDown')
var selectedTest=4;
btn.onclick = (event) => {
    event.preventDefault();
    // alert(sb.selectedIndex);
    selectedTest = sb.selectedIndex;
    renderNewQuote(selectedTest)
};
var str;
function getRandomQuote(selectedTest){

    if (selectedTest == 0){
        str = "Hold the door for someone has their hands full. It's pretty easy. Just hold the door as you see them approaching. They will be truly glad they didn't have to drop their things just to open a door. If someone gives you a nice gift, write a physical thank you letter and put that into the mail. An actual thank you letter on paper means a lot more than just an e-mail, even in today's modern times. If you are having a meal with someone, please turn off your cell phone. Unless you are a doctor on call, it is not polite to eat and still be wired. You owe it to yourself to disconnect from the hustle and bustle of the world for a few minutes."
        return str;
        
    }
    else if(selectedTest == 1){
        str ="Out of another, I get a lovely view of the bay and a little private wharf belonging to the estate. There is a beautiful shaded lane that runs down there from the house. I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try."
        return str;
    }
    else if(selectedTest == 2){
        str ="The words hadn't flowed from his fingers for the past few weeks. He never imagined he'd find himself with writer's block, but here he sat with a blank screen in front of him. That blank screen taunting him day after day had started to play with his mind. He didn't understand why he couldn't even type a single word, just one to begin the process and build from there. And yet, he already knew that the eight hours he was prepared to sit in front of his computer today would end with the screen remaining blank."
        return str;
    }
    else if(selectedTest == 3){
        str = "Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime."
        return str;
    }
    else if(selectedTest == 4){
        str = "This is a sample"
        return str;
    }
}


 function renderNewQuote(){
    const quote =  getRandomQuote(selectedTest)
    quoteDisplayElement.innerText = ''
    quote.split('').forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    // document.write("Your speed is : "+Math.floor(word*60/Math.floor((new Date() - startTime) / 1000)));
    // document.write("No. of words "+word+"<br>");
    // document.write("Time taken "+Math.floor((new Date() - startTime) / 1000)+"sec<br>");
    // document.write("Speed = " + Math.floor(word / time * 60) + " WPM");
    quoteInputElement.value = null
    
}

var seconds;
function startTimer(){
    timerElement.innerText = '00:00';
    seconds = 0;

    setInterval(function(){timerElement.innerText = getTimerTime(correct)
    }, 1000)
}
var minutes=0;
function getTimerTime(correct) {
    
    if (correct == true){
        // const timeTaken;
        if (minutes<10 && seconds<10) return '0'+minutes+':0'+seconds;
        if (minutes<10) return '0'+minutes+':'+seconds;
        if (seconds<10) return minutes+':0'+seconds;
        // return timeTaken;
    }

    if (seconds==59){
        minutes++;
        seconds=-1;
    }
    seconds++;
    
    time = minutes*60 + seconds;
    
    speedElement.innerHTML="Speed : "+ Math.floor((words/time*60))+" WPM";
    const totalLetter = correctLetter+incorrectLetter;
    accuracyElement.innerHTML = "Accuracy : "+Math.floor(correctLetter/totalLetter*100)+"%";
    
    if (minutes<10 && seconds<10) return '0'+minutes+':0'+seconds;
    if (minutes<10) return '0'+minutes+':'+seconds;
    if (seconds<10) return minutes+':0'+seconds;


    return minutes+':'+seconds;
}

renderNewQuote(selectedTest);
