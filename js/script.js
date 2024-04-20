// uses markdownit
function loadMessage(md) {
    const message = document.querySelector("#message");

    fetch("/message.txt")
        .then(response => response.text())
        .then(data => {
            message.innerHTML = md.render(data);
        })
        .catch(error => {
            message.innerHTML = "Oomre Lea, I just wanted to take a moment to tell you how much you mean to me. From the moment we met, you've brought so much joy and light into my life ya albe. Your smile brightens my day DAKHILA, and your laugh is like music to my ears. I am so grateful for all the little moments we share, from the late-night talks to the small walk around the school or even on our way to your aunt's house. You make everything better just by being in my life. I love you more than words can express, and I'm excited to create many more beautiful memories with you. Thank you for being you, and thank you for loving me. With all my heart, Your Man Abed.";
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