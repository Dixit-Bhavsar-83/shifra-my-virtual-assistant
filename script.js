let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
/*  Robot Speaking function */

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
/* Good Morning Function */

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    /* if me candition*/
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
      wishMe()
})

/* speech output */

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
  let currentIndex=event.resultIndex
  let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript)
}

btn.addEventListener("click",()=>{
recognition.start()
btn.style.display="none"
voice.style.display="block"
})

/* Take command*/

function takeCommand(message){
  btn.style.display="flex"
  voice.style.display="none"
    if(message.includes("shipra")||message.includes("hey shifra")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who is Dixit")||message.includes("Dixit")){
        speak("Hello! I am a virtual assistant created by Dixit Bhavsar. Dixit is currently studying in 11th standard, specializing in Commerce. He lives in Ahmedabad, Gujarat, and has a strong passion for coding and AI technology. Some of his notable projects include the DBMessaging Tool, the R.M. Achievers Group website, and various login pages. He is proficient in multiple programming languages like HTML, CSS, JavaScript, C, C++, and Python. He is always eager to explore new technologies and develop innovative solutions.")
    } else if(message.includes("made")||message.includes("who made you")){
      speak("me created by Dixit sir")
  } else if (message.includes("what is your name") || message.includes("name")) {
    speak("my name is shifra i am a virtual assistant/");
}
    else if(message.includes("who are you")||message.includes("are")){
        speak("i am virtual assistant,created by Dixit sir")
    }else if(message.toLowerCase().includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com","_blank");
      } 
      else if(message.toLowerCase().includes("open google")){
        speak("opening google...");
        window.open("https://www.google.com","_blank");
      }
     /* else if(message.toLowerCase().includes("open whatsapp")){
        speak("opening whatsapp...");
        window.open("https://web.whatsapp.com/","_blank");
      }*/
    else if(message.toLowerCase().includes("open instagram")){
        speak("opening instagram...");
        window.open("https://www.instagram.com/bhavsarlila/?igsh=MWVpdWVwdGZ3NWZmYw%3D%3D","_blank");
      }
      else if(message.toLowerCase().includes("open facebook")){
        speak("opening facebook...");
        window.open("https://www.facebook.com/share/eHZ1JwCERnHaAf9C/?mibextid=qi2Omg","_blank");
      }
      else if(message.toLowerCase().includes("open dixit facebook")){
        speak("opening facebook...");
        window.open("https://www.facebook.com/lila.bhavsar.12?mibextid=qi2Omg&rdid=p2UdYFm3GSn4tMYZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Ff1hruUQwPnwoKxnm%2F%3Fmibextid%3Dqi2Omg","_blank");
      }
      else if(message.toLowerCase().includes("open github")){
        speak("opening github...");
        window.open("https://github.com/Dixit-Bhavsar-83","_blank");
      }
      else if(message.toLowerCase().includes("open wikipedia")){
        speak("opening wikipedia...");
        window.open("https://www.wikipedia.org/","_blank");
      }
      else if(message.toLowerCase().includes("open tuition")){
        speak("opening r m achievers group...");
        window.open("https://667965582815e.site123.me/","_blank");/* google api*/
      }
      else if(message.toLowerCase().includes("open calculator")){
        speak("opening calculator...");
        window.open("calculator://");/* google api*/
      }
      else if(message.toLowerCase().includes("open whatsapp")){
        speak("opening whatsapp...");
        window.open("whatsapp://");
      }
      else if (message.toLowerCase().includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } else if (message.toLowerCase().includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } else if (message.toLowerCase().includes("day")) {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[new Date().getDay()];
        speak(`Today is ${day}`);
    }    
      else {
        let finalText = "This is what I found on the internet regarding " + message.replace(/shipra|shifra/gi, "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(message.replace(/shipra|shifra/gi, ""))}`, "_blank");
    }
    
      
}