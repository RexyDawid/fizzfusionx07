document.addEventListener("DOMContentLoaded", function () {
    const anmeldenBtn = document.getElementById("btn-anmelden");
    const streamerBtn = document.getElementById("btn-streamer");
    const hardcoreBtn = document.getElementById("btn-Hardcore");
    const endbossBtn = document.getElementById("btn-ENDBOSS");

    anmeldenBtn.addEventListener("click", function () {
        alert("🚨 AGB-Aktivierung erkannt! Initiere XZ1 Modus...");
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }

        let flashInterval = setInterval(() => {
            document.body.style.backgroundColor =
                document.body.style.backgroundColor === "black" ? "#0f0" : "black";
        }, 100);

        setTimeout(() => {
            clearInterval(flashInterval);
            document.body.style.backgroundColor = "#111";

            for (let i = 0; i < 100; i++) {
                const emoji = document.createElement("div");
                emoji.textContent = "🎉";
                emoji.style.position = "absolute";
                emoji.style.left = Math.random() * 100 + "vw";
                emoji.style.top = Math.random() * 100 + "vh";
                emoji.style.fontSize = "2rem";
                emoji.style.pointerEvents = "none";
                document.body.appendChild(emoji);
            }

            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
            alert("🎊 Willkommen bei XZ1! Du wurdest offiziell gerickrollt.");
        }, 2000);
    });

    streamerBtn.addEventListener("click", function () {
        alert("🧠 Streamer-Modus aktiviert... Bereite dich vor 😈");

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }

        document.body.style.backgroundColor = "black";

        setTimeout(() => {
            window.open("https://www.youtube.com/watch?v=_P5vR9pz5Hc", "_blank");
            alert("👻 Streamer-Modus aktiv. Möge dein Chat dich trösten.");
        }, 1000);
    });

    hardcoreBtn.addEventListener("click", function () {
        alert("☠️ Hardcore-Modus aktiviert. Kein Entkommen mehr...");

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }

        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        window.open("https://www.youtube.com/watch?v=_P5vR9pz5Hc", "_blank");

        document.body.innerHTML = "";
        document.body.style.margin = "0";
        document.body.style.overflow = "hidden";

        setInterval(() => {
            const emoji = document.createElement("div");
            emoji.textContent = Math.random() > 0.5 ? "💀" : "🔥";
            emoji.style.position = "absolute";
            emoji.style.left = Math.random() * 100 + "vw";
            emoji.style.top = Math.random() * 100 + "vh";
            emoji.style.fontSize = "3rem";
            emoji.style.pointerEvents = "none";
            emoji.style.zIndex = "1000";
            document.body.appendChild(emoji);
            setTimeout(() => { emoji.remove(); }, 3000);
        }, 80);

        setInterval(() => {
            document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        }, 50);

        setInterval(() => {
            document.body.style.transform = `translate(${(Math.random() - 0.5) * 10}px, ${(Math.random() - 0.5) * 10}px)`;
        }, 40);
    });

    // ENDBOSS Modus
    endbossBtn.addEventListener("click", function () {
        alert("👹 ENDBOSS-Modus aktiviert. Bereite dich auf den ultimativen Wahnsinn vor!");

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }

        document.body.innerHTML = "";
        document.body.style.margin = "0";
        document.body.style.overflow = "hidden";

        // 1000 Rickrolls öffnen (Achtung, kann Browser lahmlegen!)
        for(let i = 0; i < 1000; i++) {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        }

        // Dauer-Flash und Emojis
        setInterval(() => {
            const emoji = document.createElement("div");
            emoji.textContent = Math.random() > 0.5 ? "🔥" : "💀";
            emoji.style.position = "absolute";
            emoji.style.left = Math.random() * 100 + "vw";
            emoji.style.top = Math.random() * 100 + "vh";
            emoji.style.fontSize = "3rem";
            emoji.style.pointerEvents = "none";
            emoji.style.zIndex = "1000";
            document.body.appendChild(emoji);
            setTimeout(() => { emoji.remove(); }, 3000);
        }, 50);

        setInterval(() => {
            document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        }, 40);

        setInterval(() => {
            document.body.style.transform = `translate(${(Math.random() - 0.5) * 15}px, ${(Math.random() - 0.5) * 15}px)`;
        }, 30);

        // Kein Entkommen außer Tab schließen!
    });
});
