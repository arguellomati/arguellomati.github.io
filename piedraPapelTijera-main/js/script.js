const where = document.querySelector('#container');

function startGame(){

    const html = `<figure>
    <img src="./image/hpensandom.png" alt="Messi pensando">
    </figure>
    <button class="title"> ELIGE </button>
    <div>
        <button class="ppt" type="submit" onclick="play1()" ><img src="./image/piedra.png" alt="piedra"/></button>
        <button class="ppt" type="submit" onclick="play2()" ><img src="./image/papel.png" alt="papel"/></button>
        <button class="ppt" type="submit" onclick="play3()" ><img src="./image/tijeras.png" alt="tijeras"/></button>
    </div>
    `;

    where.innerHTML = html;

}

function play1(){
    const messi = Math.ceil(Math.random() *3);
    if(messi === 1){
        const html = `
        <figure>
        <img src="./image/hempatem.png" alt="Messi">
        </figure>
        <button class="title"> EMPATE </button>
        <article>
            <p class="result">Ambos eligieron Piedra </p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }else if (messi === 2){
        const html = `
        <figure>
        <img src="./image/hperdistem.png" alt="Messi">
        </figure>
        <button class="title"> PERDISTE </button>
        <article>
            <p class="result">Te envolvió el Papel de Messi</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    } else {
        const html = `
        <figure>
        <img src="./image/hganastem.png" alt="Messi">
        </figure>
        <button class="title"> GANASTE </button>
        <article>
            <p class="result">Rompiste las Tijeras de Messi</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }
}

function play2(){
    const messi = Math.ceil(Math.random() *3);
    if(messi === 2){
        const html = `
        <figure>
        <img src="./image/hempatem.png" alt="Messi">
        </figure>
        <button class="title"> EMPATE </button>
        <article>
            <p class="result">Ambos eligieron Papel </p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }else if (messi === 3){
        const html = `
        <figure>
        <img src="./image/hperdistem.png" alt="Messi">
        </figure>
        <button class="title"> PERDISTE </button>
        <article>
            <p class="result">Te cortaron las Tijeras de Messi</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    } else {
        const html = `
        <figure>
        <img src="./image/hganastem.png" alt="Messi">
        </figure>
        <button class="title"> GANASTE </button>
        <article>
            <p class="result">Envolviste la Piedra de Messi</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }
}

function play3(){
    const messi = Math.ceil(Math.random() *3);
    if(messi === 3){
        const html = `
        <figure>
        <img src="./image/hempatem.png" alt="Messi">
        </figure>
        <button class="title"> EMPATE </button>
        <article>
            <p class="result">Ambos eligieron Tijeras </p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }else if (messi === 1){
        const html = `
        <figure>
        <img src="./image/hperdistem.png" alt="Messi">
        </figure>
        <button class="title"> PERDISTE </button>
        <article>
            <p class="result">La Piedra de Messi rompió tus Tijeras</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    } else {
        const html = `
        <figure>
        <img src="./image/hganastem.png" alt="Messi">
        </figure>
        <button class="title"> GANASTE </button>
        <article>
            <p class="result">Cortaste el Papel de Messi</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }
}