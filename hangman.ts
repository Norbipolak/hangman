/*
Megoldjuk egy osztályba és majd ide mentjük le a html-es dolgokat, amikre szükségünk lesz
*/

class Hangman {
    //mivel ezeket kivülről nem akarjuk meghívni ezért minden mező lehet private
    private guessInput: HTMLInputElement | null;
    //HtmlInputElement típusú!!!!!!!!!!!!!!!!!!!
    private guessBtn: HTMLButtonElement | null;
    private guessedDiv: HTMLDivElement | null;
    private errorsDiv: HTMLDivElement | null;
    //Szükségunk van arra, hogy tudjuk, hogy hány hibát vétettünk
    private errorNumbers: number;
    //errors-ban konkrétan azokat a karaktereket írjuk, amik rosszak voltak 
    private errors: string[]//egy string tömb, tömb, amikben stringek lesznek 
    private guessed: string[];//azokat a karaktereket fogja tartalmazni, amiket már kitaláltunk 
    private words: string[];//ebből a tömbböl fogunk kiválogatni szavakat 
    private word: string;//a szó, amit majd ki kell találni 

    constructor() {
        this.guessInput = document.querySelector("#guess-input");
        /*
        Mert azt mondtuk, hogy ez egy HTMLInputElement típus, de hogyha nincsen, ilyen id-nk(guess-input)
        akkor ez null lesz és nem veheti fel a null értéket, mert ez csak HTMLInputElement, ezért mondhatjuk neki 
        egy union-type-val, hogy ||null 
        ->
        guessInput:HTMLInputElement|null
        és akkor nem huzzá alá, hogy valami probléma van 
        */
        this.guessBtn = document.querySelector("#guess-btn");
        this.guessedDiv = document.querySelector("#guess-div");
        this.errorsDiv = document.querySelector("#errors-div");
        this.errorNumbers = 0;//nulláról indul 
        this.errors = [];//üres tömb, itt fogjuk tárolni a hibás karaktereket
        this.guessed = [];//kitalált karaktereket fogja tárolni

        this.words = [
            //megadjuk a szavakat, amiből, majd random valamelyiket beteszi, hogy ki lehessen találni 
            "alma", "kecske", "monitor", "mobiltelefon", "zsemle"
        ];

        this.generateWord(); //meghívjuk itt a generateWord-ot!!!!!!
    }

    private generateWord() {

        //ez annyit csinál, hogy a words-ből véletlenszerűen választunk 
        this.word = this.words[Math.floor(Math.random() * this.words.length)]
        /*
        a this.word, tehát a szavunk az a this.words tömb egy véletlenszerűen kiválasztott indexű eleme lesz 
        */

        console.log(this.word);//kiírja mindig az aktuális szavunkat, pl. alma utána ujratöltünk zsemle stb.

        // this.guessBtn?.addEventListener("click", () => {
        //     /*
        //     a kérdőjel annyit tesz a guessBtn után, hogyha null, akkor nem fog hibát adni 
        //     ha viszont nem írjuk oda a kérdőjelt, akkor alá fogja húzni, mert lehet null is és abból nem tudunk eventListenert meghatározni
        //     ha ott van a kérdőjel akkor, amennyiben null, nem próbálja meg az eventListener metódust meghívni
        //     */
        
        // });

    }
}
/*
Tehát a class-ban meghatározzuk a dolgok típusát, majd a constructorében lementjük, illetve értéket adunk neki
*/

/*
És ha létrehozunk egy példányt a Hangman-ből és 
lefordítjuk -> 
tsc -w hangman.ts --target ES2022
ezt lefordította nekünk egy js fájlba és a js fájlra már tudunk hivatkozni a html-ben
<script src="hangman.js"></script>
*/

const hm = new Hangman();
/*
Amikor elkészítjük a példányt abban a pillanatban a generateWord(), ami meg van hívva constructorában,
generál nekünk egy szót véletlenszerűen a words tömbből és majd ezt kell majd kitalálnunk 

*/