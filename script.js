function checkPassword() {

  let pass = document.getElementById("password").value;

  if (pass === "0609") {

    document.getElementById("welcome").style.display = "none";
    document.getElementById("main").style.display = "block";

    let text =
`Not every message is meant for everyone...

This one is meant for you.

Happy Birthday, Umair Nawaz.

May Allah bless you with peace, happiness, good health and countless beautiful moments.

Ameen.`;

    let i = 0;

    function typeWriter() {

      if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      } else {
        document.getElementById("letterBtn").style.display = "inline-block";
      }

    }

    typeWriter();

  } else {

    alert("Wrong Password");

  }

}
document.getElementById("letterBtn").onclick = function(){

document.getElementById("main").style.display="none";

document.getElementById("letter").style.display="block";

};
document.getElementById("letter").scrollIntoView({
behavior:"smooth"
});
for(let i=0;i<40;i++){

let s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.animationDelay=Math.random()*5+"s";

s.style.animationDuration=(3+Math.random()*5)+"s";

document.body.appendChild(s);

}
