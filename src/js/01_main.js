
const header = document.querySelectorAll('.header')
const nav = document.querySelectorAll('.nav')
const container = document.querySelectorAll('.container')
const hedDesc = document.querySelectorAll('.header-desc-box')

window.addEventListener('resize', ()=>{
    let scrW = window.innerWidth;

    if(scrW < 1320){
        container.forEach((e)=>{
            e.style.width = `${scrW-36}px`
        })

    } else {

    }
})


document.addEventListener("DOMContentLoaded", function() {
    let scrW = window.innerWidth;
    const actCont = document.getElementById('action-content');
    console.log(actCont)
    actCont.innerHTML = ` <div class="action-left">

    <div class="act-df">
        <div class="act-icon">
            <img class="act-text" src="../../img/action/normicon.png" alt="">
        </div>
        <h1 class="act-title">Играй и выигрывай!</h1>
        
    </div>
    <p class="act-desc">Играй в <a href="#!" class="blue">Cyberpunk 2077</a> и получи возможность выиграть консоль <a href="#!" class="blue">Xbox Series X</a> или <a href="#!" class="blue">Sony PlayStation 5!</a> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p><br>
    <div class="action-wrap">
        <div class="form"><br>
            <input type="text" class="inp" placeholder="Как тебя зовут?">
            <hr>
            <input type="text" class="inp" placeholder="Твой e-mail">
            <hr>
            <div class="act-screenshot">
                <div class="act-scr-inner">
                    <a href="#!" class="white">Прикрепить скриншот</a>
                    <p>.png / .jpg / .pdf</p>
                </div>
            </div>
            <button class="act-btn">Отправить</button>
            <div class="act-sub">
                <input type="checkbox" class="chk">
                <p class="rbt">Согласен на обработку персональных данных</p>
            </div>
        </div>
        <div class="action-right">
            <ul class="act-r-list">
                <li><img class="act-img" src="../../img/action/ployka.webp" alt=""></li>
                <li><img class="act-img" src="../../img/action/xbox.webp" alt=""></li>
            </ul>
        </div>
    </div>

</div>`;



    
    if(scrW < 1440){
        actCont.innerHTML = `
        <div class="action-wrap">

         <div class="action-left">

            <div class="act-df">
                <div class="act-icon">
                    <img class="act-text" src="../../img/action/normicon.png" alt="">
                </div>
                <h1 class="act-title">Играй и выигрывай!</h1>
                
            </div>
            <p class="act-desc">Играй в <a href="#!" class="blue">Cyberpunk 2077</a> и получи возможность выиграть консоль <a href="#!" class="blue">Xbox Series X</a> или <a href="#!" class="blue">Sony PlayStation 5!</a> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p><br>
                <div class="form"><br>
                    <input type="text" class="inp" placeholder="Как тебя зовут?">
                    <hr>
                    <input type="text" class="inp" placeholder="Твой e-mail">
                    <hr>
                    <div class="act-screenshot">
                        <div class="act-scr-inner">
                            <a href="#!" class="white">Прикрепить скриншот</a>
                            <p>.png / .jpg / .pdf</p>
                        </div>
                    </div>
                    <button class="act-btn">Отправить</button>
                    <div class="act-sub">
                        <input type="checkbox" class="chk">
                        <p class="rbt">Согласен на обработку персональных данных</p>
                    </div>
                </div>



        </div>
        <div class="action-right">
        <ul class="act-r-list">
            <li><img class="act-img" src="../../img/action/ployka.webp" alt=""></li>
            <li><img class="act-img" src="../../img/action/xbox.webp" alt=""></li>
        </ul>
    </div>
    </div>
    `;
    }

    if(scrW < 1320){
        container.forEach((e)=>{
            e.style.width = `${scrW-36}px`
        })

    } else {

    }

});

