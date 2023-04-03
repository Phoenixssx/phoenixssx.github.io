let part3_aboutMe_btnFR = document.querySelector("#part3_aboutMe_btnFR")
let part3_aboutMe_btnEN = document.querySelector("#part3_aboutMe_btnEN")

let aboutMe_desc = document.querySelector("#aboutMe_desc")
let aboutMe_title = document.querySelector("#aboutMe_title")

let part3_aboutMe_title = document.querySelector(".part3_aboutMe_title")
// ENGLISH
let titleTxtEN = `Hi, My name is Mkhitar`
let descTxtEN = ` I am a web developer based in Paris, France. Born on April 13th, 2000, I have always been passionate about programming and technology, which led me to pursue a career in this field. I received my training in web development, including JS, HTML, and CSS, through a comprehensive program in a foreign country, which helped me gain the necessary skills and knowledge to become proficient in these areas.
                    As a programmer, I am dedicated to producing high-quality work that meets the needs of my clients and users. I am comfortable working both independently and as part of a team, and I am always eager to learn new technologies and programming languages to stay up-to-date with the latest trends and best practices. I am passionate about using my skills to create meaningful and impactful web applications that can make a difference in people's lives. Whether it's developing a new website, improving an existing one, or creating custom solutions to meet specific needs, I am committed to delivering results that exceed expectations. Thank you for taking the time to read this introduction, and I look forward to discussing any potential opportunities or projects with you in the future."
                    `

// FRANCAIS
let titleTxtFR = `Salut, je me nomme Mkhitar`
let descTxtFR = `Je suis un développeur web basé à Paris, France. Né le 13 avril 2000, j'ai toujours été passionné par la programmation et la technologie, ce qui m'a amené à poursuivre une carrière dans ce domaine. J'ai reçu ma formation en développement web, notamment en JS, HTML et CSS, grâce à un programme complet dans un pays étranger, qui m'a permis d'acquérir les compétences et les connaissances nécessaires pour devenir compétent dans ces domaines.
                 En tant que programmeur, je suis déterminé à produire un travail de haute qualité qui répond aux besoins de mes clients et utilisateurs. Je suis à l'aise à travailler à la fois de manière indépendante et en équipe, et je suis toujours désireux d'apprendre de nouvelles technologies et langages de programmation pour rester à jour avec les dernières tendances et les meilleures pratiques. Je suis passionné par l'utilisation de mes compétences pour créer des applications web significatives et impactantes qui peuvent faire une différence dans la vie des gens. Que ce soit en développant un nouveau site web, en améliorant un existant ou en créant des solutions sur mesure pour répondre à des besoins spécifiques, je m'engage à fournir des résultats qui dépassent les attentes.
                 Merci d'avoir pris le temps de lire cette introduction, et je me réjouis de discuter avec vous de toute opportunité ou projet potentiel à l'avenir."
                `
                
// let saBugChepasPq = document.querySelector("#saBugChepasPq")

part3_aboutMe_btnFR.addEventListener("click",function(event)
{
    aboutMe_title.innerHTML = titleTxtFR
    aboutMe_desc.innerHTML = descTxtFR
    
})

part3_aboutMe_btnEN.addEventListener("click",function(event)
{
    aboutMe_title.innerHTML = titleTxtEN
    aboutMe_desc.innerHTML = descTxtEN
})


