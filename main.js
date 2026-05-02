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
                    hari ini tepat 20 tahun lalu imel dilahirkan, memulai perjalanan di dunia 
                    yang penuh halang rintang ini. banyak kejutan manis dan pahit yang imel temui,
                    banyak hal hebat yang udah imel lewati hingga detik ini. di usia awal 20 ini..
                    semoga imel tumbuh menjadi pribadi yang lebih tangguh, selalu dipeluk kesehatan dan 
                    dikelilingi kebaikan serta kebahagiaan. semoga alloh selalu menyertai imel, memberikan 
                    keteguhan hati dalam menghadapi apapun kejutan kedepannya. juga semoga apapun yang imel 
                    usahakan, segera di dekatkan dan apa yang sudah menjadi rezeki imel segera di sat set kan..
                    AAMIIN ^^
                </p>
                <p>peluk hangat diri imel yaa.. bilang <i>bangga dan terimakasih telah bertahan</i></p>
            </div>
        `
    },
    {
        title: `Chapter 2: <br> CURRENT STATS`,
        message: `
            <p>
                how are u imel? <br>
                sudah lama sekali ga denger kabar imel. semoga baik baik saja yaa.. 
                walau pasti hidup ini tidak selalu baik baik sajaa tapi hari ini bahagiaa 
                dulu yaa.. harus full senyum, enjoy your day!!
            </p>
            <p>
                how's ur life so far, imel? <br>
                as a medstud keliatan berat banget huhu.. apalagi sudah semester 6 ini 
                makin banyak hal yang perlu di pikir dan persiapkan. 
            </p>
            <p>
                beberapa waktu lalu, postingan kkn imel sempet lewat difyp.. liat video imel 
                main ama anak sd itu.. lucu hihi. gimana imel pengalaman kkn nyaa? keliatan 
                seruu bgt.. sharing dong seberapa seruu
            </p>
            <div class="stats-container">
                <p style="font-size: 0.8rem; margin-bottom: 5px;">seberapa seru KKN kemarin?</p>
                <div class="slider-wrapper">
                    <input type="range" min="1" max="100" value="50" class="slider" id="stress-slider" oninput="updateSliderVal(this.value)">
                    <span id="slider-val">50%</span>
                </div>
                <p id="slider-response" style="font-size: 0.9rem; font-style: italic; color: #646cc3; margin-top: 5px;"></p>
            </div>
            <p>
                anyway, damar ga akan singgung entitas inisial 'S'.. damar cuma berharap semoga 
                imel dilancarkan dalam segala proses penyusunan si 'S' itu. boleh santai tapi 
                jangan lalaii.. boleh buru buru tapi jangan memaksakan diri yaa.. doesn't have 
                to be perfect.. it just has to be done. SEMANGAT !! 
            </p>
            <div class="fire-ritual-container">
                <button class="fire-btn" onclick="triggerFireRain()">kasih menyala 🔥</button>
            </div>
        `
    },
    {
        title: `Chapter 3: <br> FINAL WORDS`,
        message: `
            <p>
                selama perjalanan kuliah.. pasti dalam prosesnya ada cape, ada kesal, ada 
                tangis yang mungkin imel sendiri ga pernah ungkapkan. tapi damar selalu inget 
                pesan imel <i><b>apa yang menjadi takdir mu tidak akan pernah menjadi milik orang lain</b></i>
                imel pegang ituu baik baik yaa.. damar yakin segala lelah imel selama ini pasti akan 
                terbayar indah pada waktu yang tepat hihi ^^
            </p>
            <p>
                mungkin imel relate.. biasanya di umur umur segini tuh lagi <i>quarter life crisis</i>
                yang bikin kita bingung kaya kehilangan arah.. kehilangan semangat.. demot gitu. tapi
                is oke.. namanya juga hidup. itu bukan suatu tanda kalo gagal kok, cuma kadang emang untuk
                menuju sesuatu yang besar tuh godaan setan nya kuat bgt.  
            </p>
            <p>
                pelan pelan aja.. it's just dunya.. bukan ajang buat balapan dengan orang lain, satu satu nya 
                yang perlu imel kalahin cuma versi imel di hari kemarin.. just follow the pathway that Alloh planned for u ^^
            </p>
            <p>
                tetap semangat yaa.. masih banyak ombak ombak yang perlu imel terjang.. masih banyak 
                badai yang perlu imel lalui. gaperlu jadi kuat teruss.. gapapa bgt sesekali merasa ga baik baik aja..
                kita manusia biasa pasti ada kalanya di titik lemah.. keluh, kesah, tangis.. itu wajar bgt, jangan di tahan yaa
                ada orang terdekat imel yang bisa di percaya.. ada alloh.. manapun yang bikin imel nyaman buat berbagi apa yang imel rasain
            </p>
            <p>
                remember this... <br>
                masih banyak makanan yang bisa imel coba, masih banyak tempat tempat indah yang bisa imel kunjungi, banyak pemandangan indah yang 
                bisa imel nikmati, mungkin juga alloh masih banyak menitipkan rezeki orang lain lewat imel.. so, tetap semangat yaa !! ^0^
                <br>
                <b>i always support and be proud of u imel, for everything that u have done. make ur family proud, especially urself</b>
            </p>
            <p>
                oleh karena itu, damar mau mastiin satu hal.. <br>
                imel percaya kan dengan diri imel? 
            </p>
            <div class="radio-decision-container">
                <label class="radio-option">
                    <input type="radio" name="belief" value="yes" onclick="confirmBelief()">
                    <span class="custom-radio"></span>
                    <span class="radio-label">YES, opkross!</span>
                </label>
                <label class="radio-option">
                    <input type="radio" name="belief" value="yes" onclick="confirmBelief()">
                    <span class="custom-radio red-radio"></span>
                    <span class="radio-label red-text">sama aja cuma warna merah</span>
                </label>
            </div>
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
        } else if (currentStage === 1) {
            console.log("Waiting for fire ritual..."); 
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
            nextBtn.innerText = "game click here !"; 
            
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
    const messageContainer = document.getElementById('message-container');

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

function updateSliderVal(val) {
    document.getElementById('slider-val').innerText = val + "%";
    const response = document.getElementById('slider-response');
    
    if (val > 80) {
        response.innerText = "wah fiks ini mah seru parah!";
    } else if (val > 50) {
        response.innerText = "keliatan bgt sih imel enjoy bgt di videonya, seru yaa!";
    } else if (val > 20) {
        response.innerText = "seru tapi pasti cape bgt ya ngurus bocil-bocil SD? ahaha";
    } else {
        response.innerText = "masa sih cuma segini? padahal di video keliatannya seru bgt hmm";
    }
}

function triggerFireRain() {
    const nextBtn = document.getElementById('next-btn');
    const consoleBody = document.querySelector('.console-body');
    const messageContainer = document.getElementById('message-container');

    if (consoleBody) {
        consoleBody.classList.add('shake-anim');
        setTimeout(() => consoleBody.classList.remove('shake-anim'), 500);
    }

    const rect = messageContainer.getBoundingClientRect();
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const fire = document.createElement('div');
            fire.innerText = '🔥';
            fire.style.cssText = `
                position: fixed;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top - 50}px;
                font-size: 2.5rem;
                z-index: 9999;
                pointer-events: none;
                transition: transform 2s linear, opacity 2s linear;
            `;
            
            document.body.appendChild(fire);

            setTimeout(() => {
                fire.style.transform = `translateY(${rect.height + 150}px) rotate(${Math.random() * 360}deg)`;
                fire.style.opacity = '0';
            }, 50);

            setTimeout(() => fire.remove(), 2500);
        }, i * 100);
    }

    setTimeout(() => {
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.style.animation = "fadeInButton 0.5s forwards";
        }
    }, 3000);
}

function confirmBelief() {
    const nextBtn = document.getElementById('next-btn');
    
    // Feedback visual: Semua opsi berubah jadi positif
    const allLabels = document.querySelectorAll('.radio-label');
    allLabels.forEach(label => {
        if(label.classList.contains('red-text')) {
            label.innerText = "harus percaya!"; 
        }
    });

    // Munculkan tombol NEXT dengan delay halus
    setTimeout(() => {
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.style.animation = "fadeInButton 0.5s forwards";
        }
    }, 400);
}