//Hangman játék 

/*
Csináltunk a html-ben ->
    <div class="container">
        <div id="game-area">
            <div class="box">
                <h3>Tipp</h3>
                <input type="text" class="guess-input" maxlength="1">

                <button id="guess-btn">Tippelés</button>

                <h3>Helyes karakterek</h3>
                <div class="white-box" id="guessed-div"></div>

                <h3>Hibás karakterek</h3>
                <div class="white-box" id="errors-div"></div>
            </div> 
            <div class="box">
                <img id="hangman-img">
            </div>
        </div>
    </div>

és ezeket megformáztuk a css-ben 

<h3>Beviteli mező</h3>
<input type="text" class="guess-input" maxlength="1">

<button id="guess-btn">Tippelés</button>
->
ebbe írjuk be azt az egy karaktert, ami a tippünk és ennek 
a max-length-je egy lesz, csak egy karaktert fogunk tudni majd beleírni 
maxlength="1" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

most az input mező és a button egymás mellett helyezkedik el 
adtunk neki egy right-margin: 15px-t, hogy kicsit távolabbak legyenek egymástól 

<h3>Helyes karakterek</h3>
<div class="white-box" id="guessed-div"></div>
-> 
ide azt fogjuk megjeleníteni, hogy mik azok, amiket eltaláltunk 
és a white-box az semmi más nem lesz, hogy adunk neki egy background-color: white-ot és egy padding:15px
és még adunk neki egy width:100%-ot, hogy felvegye teljesen a szűlőelem szélességét, font-size:20px

itt fogja megjeleníteni azokat, hogy pl. a szavunk a kecske és a k-t kitaláltuk, akkor ->
k _ _ _k _

kitalált karakterek alatt meg fogjuk jeleníteni a hibákat is, html szerkezetileg teljesen ugyanolyan, mint az elöbbi helyes karakterek

<h3>Hibás karakterek</h3>
<div class="white-box" id="errors-div"></div>

A másik class="box"-ba pedig csinálunk egy img-t, mert itt fogjuk megjeleníteni a hangman rajzot
amiből 11 van és majd aszerint fog váltokozni, hogy hány darab rossz betűt tippeltünk már 

<div class="box">
    <img id="hangman-img">

!!!! alapból nem lesz src-attributuma, mert csak akkor kezd el megjelenni,
akkor jelenik meg az első kép, amikor az első hibát vétettük, ez egy alsó vonal lesz 
és majd szépen alakul ki a hangman
*/ 

