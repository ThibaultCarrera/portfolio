const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-gauche");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

btnMenu.addEventListener("click", () => {
  ligne.classList.toggle("active");
  nav.classList.toggle("menu-visible");
});

if (window.matchMedia("(max-width: 1300px)").matches) {
  allItemNav.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.toggle("menu-visible");
      ligne.classList.toggle("active");
    });
  });
}

//Animation ecriture

const textAnim = document.querySelector(".txt-animation");
let typewriter = new Typewriter(textAnim, {
  loop: false,
  deleteSpeed: 20,
});

typewriter
  .pauseFor(1800)
  .changeDelay(20)
  .typeString("Moi c'est Thibault Carrera, ")
  .pauseFor(300)
  .typeString("<strong> Développeur Full-Stack !<strong>")
  .pauseFor(1000)
  .deleteChars(13)
  .typeString("<span style='color: #059ef7; font-weight: bold;'> CSS</span> !")
  .pauseFor(1000)
  .deleteChars(5)
  .typeString(
    "<span style='color: #f7d705; font-weight: bold;'> JavaScript</span> !"
  )
  .pauseFor(1000)
  .deleteChars(12)
  .typeString("<span style='color: #484778; font-weight: bold;'> PHP</span> !")
  .pauseFor(1000)
  .deleteChars(5)
  .typeString(
    "<span style='color: #27ae60; font-weight: bold;'> Symfony</span> !"
  )
  .pauseFor(1000)
  .deleteChars(9)
  .typeString("<span style='font-weight: bold;'> Full-Stack</span> !")

  .start();

//Animation Contact

const input_fields = document.querySelectorAll("input");

for (let i = 0; i < input_fields.length; i++) {
  let fields = input_fields[i];
  fields.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      e.target.parentNode.classList.add("animation");
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove("animation");
    }
  });
}

//Animation GSAP + ScrollMagic

const navbar = document.querySelector(".nav-gauche");
const titre = document.querySelector("h1");
const btn = document.querySelectorAll(".btn-acc");
const btnMedias = document.querySelectorAll(".media");
const btnRondAccueil = document.querySelector(".btn-rond");

const TL1 = gsap.timeline({ paused: true });

TL1.to(navbar, { left: "0px", duration: 0.6, ease: Power3.easeOut })
  .from(titre, { y: -50, opacity: 0, duration: 0.4, ease: Power3.easeOut })
  .staggerFrom(btn, 1, { opacity: 0 }, 0.2, "-=0.3")
  .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, "-=0.75")
  .from(btnRondAccueil, {
    y: -50,
    opacity: 0,
    duration: 0.4,
    ease: Power3.easeOut,
  });

window.addEventListener("load", () => {
  TL1.play();
});

// Animation ScrollMagic GSAP Presentation

const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre-pres");
const presGauche = document.querySelector(".pres-gauche");
const listePres = document.querySelectorAll(".item-liste");

const tlpres = new TimelineMax();

tlpres
  .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
  .from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, "-=0.5")
  .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, "-=0.5");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false,
})

  .setTween(tlpres)
  // .addIndicators({})
  .addTo(controller);

// Animation Portfolio

// Vague 1

const portfolioContainer = document.querySelector(".portfolio");
const titrePortfolio = document.querySelector(".titre-port");
const itemPortfolio = document.querySelectorAll(".vague1");

const tlPortfolio = new TimelineMax();

tlPortfolio
  .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
  .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene2 = new ScrollMagic.Scene({
  triggerElement: portfolioContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlPortfolio)
  // .addIndicators()
  .addTo(controller);

// Vague 2

const itemPortfolio2 = document.querySelectorAll(".vague2");

const tlPortfolio2 = new TimelineMax();

tlPortfolio2.staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene3 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio,
  triggerHook: 0.2,
  reverse: false,
})
  .setTween(tlPortfolio2)
  // .addIndicators()
  .addTo(controller);

// Vague 3

const itemPortfolio3 = document.querySelectorAll(".vague3");

const tlPortfolio3 = new TimelineMax();

tlPortfolio3.staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene4 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio2,
  triggerHook: 0.2,
  reverse: false,
})
  .setTween(tlPortfolio3)
  // .addIndicators()
  .addTo(controller);

// Animation Range

const sectionComp = document.querySelector(".section-range");
const titreComp = document.querySelector(".titre-exp");
const allLabels = document.querySelectorAll(".label-skill");
const allPourcent = document.querySelectorAll(".number-skill");
const allBarres = document.querySelectorAll(".barre-skill");
const allShadowBarres = document.querySelectorAll(".barre-grises");

const tlCompetences = new TimelineMax();

tlCompetences
  .from(titreComp, { opacity: 0, duration: 0.6 })
  .staggerFrom(allLabels, 0.5, { y: -50, opacity: 0 }, 0.1, "-=0.5")
  .staggerFrom(allPourcent, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1")
  .staggerFrom(allShadowBarres, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1")
  .staggerFrom(allBarres, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1");

const scene5 = new ScrollMagic.Scene({
  triggerElement: sectionComp,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlCompetences)
  .addTo(controller);
