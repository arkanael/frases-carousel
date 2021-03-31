// local reviews data
const reviews = [
    {
        id: 1,
        name: "Steve Jobs",
        job: "Ex-presidente da Apple Inc.",
        img:
            "https://s.ebiografia.com/assets/img/authors/st/ev/steve-jobs-2-l.jpg",
        text:
            "“Ser o homem mais rico do cemitério não me interessa...Ir para a cama à noite dizendo que fizemos algo maravilhoso, isso é o que importa para mim”.",
    },   
    {
        id: 2,
        name: "Bill Gates",
        job: "Fundador da Microsoft",
        img:
            "https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2021/02/bill-gates-e1613016156235.jpg",
        text:
            "“A paciência é um dos elementos chave para o sucesso”.",
    },
    {
        id: 3,
        name: "Elon Musk",
        job: "CEO da Tesla",
        img:
            "https://img.olhardigital.com.br/wp-content/uploads/2021/01/shutterstock_1866780067-1.jpg",
        text:
            "“As pessoas trabalham melhor quando sabem qual é o objetivo e o porquê. É importante que as pessoas estejam ansiosas para vir trabalhar de manhã e gostem de trabalhar”.",
    },
    {
        id: 4,
        name: "Jeff Bezos",
        job: "CEO da Amazon",
        img:
            "https://i0.wp.com/assets.propmark.com.br/uploads/2019/09/jeff-bezos-2.jpg?resize=768%2C432&ssl=1",
        text:
            "“A melhor maneira de escapar de uma caixa é inventando seu próprio caminho para fora”.",
    },
    {
        id: 5,
        name: "Jack Ma",
        job: "Fundador da Alibaba",
        img:
            "https://s2.glbimg.com/Q-vFS5ZXA5HzbIzx7QpBQZZS4WY=/0x0:1353x1789/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2020/d/D/SxACvqTh2WAHb1884S8w/foto29emp-101-alibaba-b7.jpg",
        text:
            "“Se você tem uma mentalidade diferente, você terá um resultado diferente: se você fez escolhas diferentes de seus colegas, sua vida será, então, diferente de seus pares”.",
    },
    {
        id: 6,
        name: "Steve Jobs",
        job: "Ex-presidente da Apple Inc.",
        img:
            "https://s.ebiografia.com/assets/img/authors/st/ev/steve-jobs-2-l.jpg",
        text:
            "“Você pode encarar um erro como uma besteira a ser esquecida ou como um resultado que aponta uma nova direção”.",
    },
    {
        id: 7,
        name: "Bill Gates",
        job: "Fundador da Microsoft",
        img:
            "https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2021/02/bill-gates-e1613016156235.jpg",
        text:
            "“Tente uma, duas, três vezes e se possível tente a quarta, a quinta e quantas vezes for necessário. Só não desista nas primeiras tentativas, a persistência é amiga da conquista. Se você quer chegar aonde a maioria não chega, faça o que a maioria não faz”.",
    },
    {
        id: 8,
        name: "Elon Musk",
        job: "CEO da Tesla",
        img:
            "https://img.olhardigital.com.br/wp-content/uploads/2021/01/shutterstock_1866780067-1.jpg",
        text:
            "“Quando algo é importante o suficiente, você faz, mesmo que as chances não estejam a seu favor”.",
    },
    {
        id: 9,
        name: "Jeff Bezos",
        job: "CEO da Amazon",
        img:
            "https://i0.wp.com/assets.propmark.com.br/uploads/2019/09/jeff-bezos-2.jpg?resize=768%2C432&ssl=1",
        text:
            "“Se você é focado na competição, você terá que esperar até que um competidor faça algo. Se você é focado nos clientes, poderá ser pioneiro”.",
    },
    {
        id: 10,
        name: "Jack Ma",
        job: "Fundador da Alibaba",
        img:
            "https://s2.glbimg.com/Q-vFS5ZXA5HzbIzx7QpBQZZS4WY=/0x0:1353x1789/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2020/d/D/SxACvqTh2WAHb1884S8w/foto29emp-101-alibaba-b7.jpg",
        text:
            "“O que é a falha? Desistir é o maior fracasso”.",
    },
];

//SELECIONAR ITENS
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randonBtn = document.querySelector(".random-btn");


//INICIANDO O ITEM
let currentItem = 0;

//CARREGAMENTO INICIAL
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

//MONSTRAR PESSOA PELO ITEM
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//MOSTRAR A PROXIMA PESSOA
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1 ){
        currentItem = 0;
    }

    showPerson();
});

//MOSTRAR A PESSOA ANTERIOR
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length - 1;
    }

    showPerson();
});

//MOSTRAR PESSOA DE FORMA RANDOMICA
randonBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});