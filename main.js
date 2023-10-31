const etudiant1 = {
    name: "pierre",
    age: 19,
    plat: 'pizza',
    booleanPref: true,
    github: 'Pierrot69280',
    avatar: 'img.png'
}
const etudiant2 = {
    name: "mei",
    age: 17,
    plat: 'choux',
    booleanPref: false,
    github: 'MeyDetour',
    avatar: 'img.png'
}
const etudiant3 = {
    name: "natan",
    age: 20,
    plat: 'boeuf',
    booleanPref: false,
    github: 'Natanbinisti',
    avatar: 'img.png'
}
const etudiant4 = {
    name: "raph",
    age: 18,
    plat: 'riz',
    booleanPref: true,
    github: 'raphaelmoynat',
    avatar: 'img.png'
}
const etudiant5 = {
    name: "kaya",
    age: 21,
    plat: 'farine',
    booleanPref: true,
    github: 'MalakayaLvg',
    avatar: 'img.png'
}
const etudiants = [etudiant1, etudiant2, etudiant3, etudiant4, etudiant5]
let divEtudiants = document.querySelector('.divEtudiants')


etudiants.forEach((etudiant) => {
    replaceAvatar(etudiant).then(newEtudiant => {
        divEtudiants.innerHTML += makeCardFromStudent(newEtudiant)
    })

})

async function replaceAvatar(etudiant) {
    return await fetch(`https://api.github.com/users/${etudiant.github}`)
        .then(response => response.json())
        .then(data => {
            etudiant.avatar = data.avatar_url
            return etudiant
        })
}


function makeCardFromStudent(etudiant) {
    const carte = `
        <div class="card" style="width: 18rem;">
            <div class="card-body d-flex flex-column">
                <img src="${etudiant.avatar}" alt="">
                <span>Nom : ${etudiant.name}</span>
                <span>age : ${etudiant.age}</span>
                <span>plat : ${etudiant.plat}</span>
                <span>bool : ${etudiant.booleanPref}</span>
                 <span>github : ${etudiant.github}</span>
 
            </div>
        </div>
        `
    return carte
}


const bouton = document.querySelector('.bouttonCN')
const divblague = document.querySelector('.blaguesCNemplié')
const espace_bouton = document.querySelector('.boutoncat')


async function generateJoke() {
    console.log('a')
    return await
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                return data
            })
}

bouton.addEventListener('click', () => {
    //alert('a')
    generateJoke().then(data => {
        console.log(data.value)
        divblague.innerHTML += `<h3>${data.value}</h3>`
    })
})


fetch('https://api.chucknorris.io/jokes/categories')
    .then(response=>response.json())
    .then(data =>
    )





// fetch('https://api.chucknorris.io/jokes/categories')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach((categorie) => {
//             espace_bouton.innerHTML += `<button id="${categorie}" class="bouttoncategorie">${categorie}</button>`
//         })
//
//         const boutons = document.querySelectorAll('.bouttoncategorie')
//
//         boutons.forEach((bton) => {
//             bton.addEventListener('click', () => {
//
//                 let categorie = bton.id
//                 fetch(`https://api.chucknorris.io/jokes/random?category=${categorie}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         divblague.innerHTML += `<h3>${data.value}</h3>`
//                     })
//             })
//
//         })
//
//     }
// )