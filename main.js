let currentStage = 0;

const stages = [
    {
        title: `Chapter 1: <br> THE WISH`,
        message: `
            <p>
                Barakallahu fi umrik imel <br>
                Happy 20<sup>th</sup> birthday ^0^
            </p>
            <p>Sebelum itu, make a wish dulu yaa</p>
            <div class="wish-container">
                <textarea id="imel-wish" placeholder="ketik apapun harapan dan doa yang imel pengen.. tenang, damar ga akan tau kok"></textarea>
                <button id="send-wish-btn" class="send-btn" onclick="sendWishRitual()">Aamiin</button>
            </div>
            <div id="wish-success-msg" class="hidden">
                <p>AAMIIN YA RAB.. semoga alloh pelan pelan jawab doa imel yaa!</p>
                <p>
                    hari ini tepat 20 tahun lalu imel dilahirkan, dimana imel mulai
                    perjalanan di dunia yang penuh halang rintang ini. Banyak hal yang
                    udah imel lewatin hingga detik ini. semoga dengan bertambahnya usia
                    imel.. imel menjadi pribadi yang makin baik kedepannya, selalu diberi
                    kesehatan dan kebahagiaan yaa. semoga imel selalu diberi kemudahan 
                    dan kelancaran juga keteguhan hati dalam menghadapi apapun yang Alloh 
                    takdirkan untuk imel temui. terakhir, semoga diberikan kelancaran rezeki 
                    yang sat set tag teg dan apa yang imel impikan dapat terwujud.. AAMIIN ^^
                </p>
                <p></p>
            </div>
        `
    },
    {
        title: `Chapter 2: <br> CURRENT STATS`,
        message: `
            <p>
                how are you imel? <br>
                sudah lama sekali ga denger kabar imel. semoga baik baik saja yaa.. 
                walau pasti hidup ini tidak selalu baik baik sajaa tapi hari ini bahagiaa 
                dulu yaa.. harus full senyum, enjoy your day!!
            </p>
            <p>
                how's your life so far, imel? <br>
                as a medstud keliatan berat banget huhu.. apalagi sudah semester 6 ini 
                makin banyak hal yang perlu di pikir dan persiapkan. 
            </p>
            <p>
                anyway, damar ga akan singgung entitas inisial 'S'.. damar cuma berharap semoga 
                imel dilancarkan dalam segala proses penyusunan si 'S' itu. boleh santai tapi 
                jangan lalaii.. boleh buru buru tapi jangan memaksakan diri yaa.. doesn't have 
                to be perfect.. it just has to be done. SEMANGAT !! 
            </p>

        `
    },
    {
        title: `Chapter 3: <br> FINAL WORDS`,
        message: `
            <p>
                selama perjalanan kuliah imel.. pasti dalam prosesnya ada cape, ada kesal, ada 
                tangis yang mungkin imel sendiri ga pernah ungkapkan. tapi damar selalu inget 
                pesan imel <b>apa yang menjadi takdir mu tidak akan pernah menjadi milik orang lain</b>
                selalu pegang ituu yaa.. damar yakin segala lelah imel selama ini pasti akan 
                terbayarkaan hihi ^^
            </p>
            <p>
                damar ngerti bgt di umur umur segini tuh kalo kata orang mah "quarter life crisis" 
                ceunah.. kadang bikin kita unmotivated mau ngelakuin apa apa. rasanya kaya bingung.. 
                kehilangan arah. tapi Imel harus tahu, perasaan itu manusiawi bgt dan bukan berarti 
                Imel gagal atau jalan di tempat. justru tanda imel lagi berprosess.. pelan pelan yaa, 
                alloh pasti udah siapin pathway terbaik untuk imel. kata orang teh <b>hidup bukanlah ajang 
                balapan</b> satu satunya yang perlu imel jadikan rival adalah diri imel hari kemarin dan kemarinnya lagii
            </p>
            <p>
                tetap semangat yaa.. masih banyak ombak ombak yang perlu imel terjang.. masih banyak 
                badai yang perlu imel lalui. imel kuat dan imel mampu.. walau mungkin keluhan dan tangisan 
                menyertainya, gapapa.. gapapa bgt kalau harus merasa ga baik baik aja.. ungkapin ajaa, ceritaa 
                ke siapapun yang imel percaya, okay? remember this <b>i always support and be proud of u imel, 
                everything that u have done. make ur family proud, especially urself</b>
            </p>
            <p>
                oleh karena itu, damar mau mastiin satu hal.. <br>
                imel percaya kan dengan diri imel? 
            </p>

        `
    },
    {
        title: `Chapter 4: <br> GAME?`,
        message: `
            <p>Welcome to the last chapter..</p>
            <p>
                damar ada reward kecil buat imel (anggep aja kado ultah nya ahahaha) <br>
                damar ada mini game yang bisa imel cobain nii..
                bisa bantu ngusir ngusir dikit kegabutan imel ihihi<br>
                HAVE FUN !!
            </p>

            <p>
                one last thing.. <br>
                thank u for being a big part of my happiness, imel <br>
                see u future doctor ^^
            </p>
        `
    }
];

function startLoading() {
    const startScreen = document.getElementById('start-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const wishScreen = document.getElementById('wish-screen');
    const counterElement = document.getElementById('age-counter');
    const barFill = document.getElementById('bar-fill');
    const music = document.getElementById('bday-music');
    const nextBtn = document.getElementById('next-btn');

    // Logic deteksi lagu selesai (tetap sama)
    music.onended = function() {
        // Sembunyikan teks "wait..."
        document.getElementById('wait-text').classList.add('hidden');
        // Munculkan tombol next
        nextBtn.classList.remove('hidden');
    };

    startScreen.classList.add('hidden');
    loadingScreen.classList.remove('hidden');

    let count = 0;
    let target = 20;

    let interval = setInterval(() => {
        count++;
        counterElement.innerText = count;
        barFill.style.width = (count / target * 100) + "%";

        if (count >= target) {
            clearInterval(interval);
            
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                wishScreen.classList.remove('hidden');
                
                // --- MUSIK DIMULAI DI SINI ---
                music.play().catch(error => {
                    console.log("Browser memblokir musik. Pastikan user sudah berinteraksi/klik START sebelumnya.");
                });
                
                triggerConfetti(); 
            }, 500);
        }
    }, 150); 
}

function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const myConfetti = confetti.create(canvas, { resize: true });

    myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#646cc3', '#a5d6a7', '#ffffff']
    });
}

function checkScrollPosition() {
    const container = document.getElementById('message-container');
    const nextBtn = document.getElementById('next-btn');

    const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 5;

    if (isAtBottom) {
        nextBtn.classList.remove('hidden');
        container.removeEventListener('scroll', checkScrollPosition);
    }
}

function nextStage() {
    const stageTitle = document.getElementById('stage-title');
    const stageMessage = document.getElementById('stage-message');
    const stageIndicator = document.getElementById('stage-indicator'); 
    const cakeWrapper = document.getElementById('cake-wrapper');
    const messageContainer = document.getElementById('message-container');
    const nextBtn = document.getElementById('next-btn');

    if (currentStage < stages.length) {
        
        if (cakeWrapper && !cakeWrapper.classList.contains('hidden')) {
            cakeWrapper.classList.add('hidden'); 
            if (stageIndicator) stageIndicator.classList.remove('hidden');
            if (messageContainer) messageContainer.classList.remove('hidden'); 
        }

        if (stageTitle) stageTitle.innerHTML = stages[currentStage].title;
        
        if (stageMessage) {
            stageMessage.innerHTML = stages[currentStage].message;
            messageContainer.scrollTop = 0; 
        }

        if (stageIndicator) {
            stageIndicator.innerText = `STAGE ${currentStage + 1}/${stages.length}`;
        }

        nextBtn.classList.add('hidden');

        if (currentStage === 0){
            console.log("Waiting for wishing");
        } else {
            setTimeout(() => {
                if (messageContainer.scrollHeight <= messageContainer.clientHeight) {
                    nextBtn.classList.remove('hidden');
                } else {
                    messageContainer.addEventListener('scroll', checkScrollPosition);
                }
            }, 100);
        }

        currentStage++;

        if (currentStage === stages.length) {
            nextBtn.innerText = "click here !"; 
            
            nextBtn.onclick = function() {
                window.open("https://kurvaparabola.github.io/MiniGame-Bunny/", "_blank"); 
            };
            
            nextBtn.classList.add("game-link-btn");
        }
    }
}

function sendWishRitual() {
    const wishArea = document.querySelector('.wish-container');
    const successMsg = document.getElementById('wish-success-msg');
    const nextBtn = document.getElementById('next-btn');
    const inputVal = document.getElementById('imel-wish').value;

    if (inputVal.trim() === "") {
        alert("isi dulu doanya ya, imel!");
        return;
    }

    wishArea.style.transition = "all 1s ease";
    wishArea.style.opacity = "0";
    wishArea.style.transform = "translateY(-20px)";

    setTimeout(() => {
        wishArea.classList.add('hidden');
        successMsg.classList.remove('hidden');
        
        triggerConfetti(); 

        setTimeout(() => {
            if (messageContainer.scrollHeight <= messageContainer.clientHeight) {
                document.getElementById('next-btn').classList.remove('hidden');
            } else {
                messageContainer.addEventListener('scroll', checkScrollPosition);
            }
        }, 100);
    }, 1000);
}