// uses markdownit
function loadMessage(md) {
    const message = document.querySelector("#message");

    fetch("/message.txt")
        .then(response => response.text())
        .then(data => {
            message.innerHTML = md.render(data);
        })
        .catch(error => {
            message.innerHTML = "Dear Lea, When ur reading this IG we should be sitting aand DoughnutBar, on our 3 months anniversary, i wanted to make this one a bit special, it's our first time out taariban on our anniversary, lea u've been the best thing happening to me lately, i just wanted u to know that lea i love u so fucking much, until many more months and years together, I'm just simply PROUD OF YOU lea! I just don't care about anything else in life lea, All I want is you, i care about you, about everything related to you. I want you my wife, the mother of my kid, BTW not ente mae aal call aam tesmaae music u i asked u to tell me whatever word that comes up to your mind, and u said 'LOVE' BHAHAHA MFAKKRA AAM ESHTEGHEL WEBSITE QATAR W ANA ALREADY KHALLASTO MN A COUPLE OF MINUTES. ANYWAYS, Be3sha2ik Lea w I hope ykune aajabouke el donuts, w be sure lea that i will never give up on you, on us, ma teetale hamm shi maae lea, ha nedhar ktir inshaAllah, we will spend much more time together, i won't leave you abadan, ana maaik in ur downs before ur ups. Bhebbik Lea. Your Favorite Boy, Your Man Abed.";
        });
}

document.addEventListener('DOMContentLoaded', function() {
    let tempdata = {
        "did_open": false
    }

    const heart = document.querySelector("#solid-heart");
    const heart_container = document.querySelector(".heart-container");
    
    const msg_container = document.querySelector("#message-container");
    
    const md = window.markdownit({html: true});

    loadMessage(md);

    heart.addEventListener("click", function() {
        if (tempdata.did_open) {
            return;
        }
        tempdata.did_open = true;
        
        msg_container.style.display = "block";
        heart_container.style.marginTop = "-1.5%";
        
        const auto_css_height = msg_container.scrollHeight + 20; // 20 extra padding
        msg_container.style.height = auto_css_height + "px";

        // time it takes for the css to finally finish panning
        setTimeout(() => {
            msg_container.style.overflowY = "scroll";
        }, 1500);
    });

});