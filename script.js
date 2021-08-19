// const coworkerComments = [
//   {
//     id: 0,
//     name: "Robert Downey Jr.",
//     job: "Super Hero",
//     comment: "I'm Genius, billionaire, playboy, philanthropist.",
//     avartarSrc: "./images/client-tony-stark.jpeg",
//     isActive: true,
//   },
//   {
//     id: 1,
//     name: "Christ Hemsworth",
//     job: "Super Hero",
//     comment: "I'm Thor. 🔨",
//     avartarSrc: "./images/client-chris-hemsworth.jpg",
//     isActive: false,
//   },
//   {
//     id: 2,
//     name: "Scarlet Johansson",
//     job: "Super Hero",
//     comment: "I'm Black Widow 🕵️‍♀️",
//     avartarSrc: "./images/client-scarlett.jpg",
//     isActive: false,
//   },
//   {
//     id: 3,
//     name: "Chris Patt",
//     job: "Super Hero",
//     comment: "I'm Star Lord 👨‍🚀",
//     avartarSrc: "./images/client-christ-patt.jpg",
//     isActive: false,
//   },
//   {
//     id: 4,
//     name: "Benedict Cumberbatch",
//     job: "Super Hero",
//     comment: "I'm Doctor. ...",
//     avartarSrc: "./images/client-benedict.jpg",
//     isActive: false,
//   },
//   {
//     id: 5,
//     name: "Mark Ruffalow",
//     job: "Super Hero",
//     comment: "Hulk hungry. Hulk smash 👊🏿👊🏿👊🏿",
//     avartarSrc: "./images/client-mark-ruffalow.jpg",
//     isActive: false,
//   }
  // ,
  // {
  //   id: 6,
  //   name: "Chris Evan",
  //   job: "Super Hero",
  //   comment: "Avenger!!!",
  //   avartarSrc: "./images/client-chris-evan.jpg",
  //   isActive: false,
  // },
  // {
  //   id: 7,
  //   name: "Chadwich Boseman",
  //   job: "Super Hero",
  //   comment: "Wakanda forever 🐈‍",
  //   avartarSrc: "./images/client-chadwich-boseman.jpg",
  //   isActive: false,
  // },
// ];

// (function testimonial() {
//   const avartarWrapper = document.querySelector(".cv-testimonial__left");
//   const commentWrapper = document.querySelector(".cv-testimonial-feedback");
//   const authorName = document.querySelector(".cv-testimonial-author__name");
//   const job = document.querySelector(".cv-testimonial-author__job");
//   coworkerComments.forEach((comment) => {
//     //append to left side
//     const image = document.createElement("img");
//     image.id = comment.id;
//     image.src = comment.avartarSrc;
//     image.alt = "avartar of client";
//     image.className = "cv-testimonial-avartar";
//     image.className += comment.isActive ? " active" : "";
//     avartarWrapper.appendChild(image);

//     //append to right side
//     if (comment.isActive) {
//       commentWrapper.textContent = comment.comment;
//       authorName.textContent = comment.name;
//       job.textContent = comment.job;
//     }
//   });
// })();

// const authorElements = document.querySelectorAll(".cv-testimonial-avartar");

const navList = document.querySelectorAll(".navbar li");

const resetActive = () => {
  navList.forEach((list) => {
    list.classList.remove("active");
  });
};

const clickHandler = (e) => {
  e.preventDefault();
  const linkElement = e.target;
  const href = e.target.getAttribute("href");
  resetActive();
  linkElement.parentNode.classList.add("active");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
};

navList.forEach((list) => {
  list.querySelector("a").addEventListener("click", clickHandler);
});

// type writer effect
const job = "Front End Developer.";
let currentWord = "";
index = 0;
(function typing() {
  currentWord = job.slice(0, index++);
  document.querySelector(".cv-introduce-role").textContent = currentWord;
  if (index <= job.length) {
    setTimeout(typing, 200);
  }
})();

const setNewActivedComment = (oldElement, newElement) => {
  const feedbackElement = document.querySelector(".cv-testimonial-feedback");
  const nameElement = document.querySelector(".cv-testimonial-author__name");
  const jobElement = document.querySelector(".cv-testimonial-author__job");
  // set avartar
  oldElement.classList.remove("active");

  // set comment
  const newActivedCoworker = coworkerComments.find(
    (comment) => comment.id == newElement.id
  );
  console.log("newActivedCoworker", newActivedCoworker);
  feedbackElement.textContent = newActivedCoworker.comment;
  nameElement.textContent = newActivedCoworker.name;
  jobElement.textContent = newActivedCoworker.job;

  newElement.classList.add("active");
};

// handle choose client comments event
const handleChooseAuthorBtn = (e) => {
  e.stopPropagation();
  const elementId = e.target.getAttribute("id");
  console.log(elementId);
  const currentActivedAuthor = Array.from(authorElements).find((avartar) => {
    return avartar.classList.contains("active");
  });
  if (elementId === "btn-prev") {
    console.log(currentActivedAuthor);
    let prevId = 0;
    // set avartar
    if (currentActivedAuthor.id > 0) {
      prevId = +currentActivedAuthor.id - 1;
      const newActivedAuthor = Array.from(authorElements).find((avartar) => {
        return avartar.id == prevId;
      });

      setNewActivedComment(currentActivedAuthor, newActivedAuthor);
    }
  } else if (elementId === "btn-next") {
    let nextId = 0;
    // set avartar
    if (currentActivedAuthor.id < coworkerComments.length - 1) {
      nextId = +currentActivedAuthor.id + 1;
      const newActivedAuthor = Array.from(authorElements).find((avartar) => {
        return avartar.id == nextId;
      });
      setNewActivedComment(currentActivedAuthor, newActivedAuthor);
    }
  } else {
    console.log('else', e.target);
    let selectedId = e.target.id;
    const newActivedAuthor = Array.from(authorElements).find((avartar) => {
      return avartar.id == selectedId;
    });
    setNewActivedComment(currentActivedAuthor, newActivedAuthor);
  }
};

// document
//   .getElementById("btn-prev")
//   .addEventListener("click", handleChooseAuthorBtn);

// document
//   .getElementById("btn-next")
//   .addEventListener("click", handleChooseAuthorBtn);

// authorElements.forEach((ele) => {
//   ele.addEventListener("click", handleChooseAuthorBtn);
// });

// set skill effect

const resetSkill = () => {
  document.querySelectorAll(".cv-expertises-skills-item").forEach((ele) => {
    ele.querySelector(".cv-expertises-skills-bar-progress").style.width = "0%";
  });
};

const setSkill = () => {
  document.querySelectorAll(".cv-expertises-skills-item").forEach((ele) => {

    const rates =  ele.querySelector(".cv-expertises-skills-item__rates").textContent;
    ele.querySelector(".cv-expertises-skills-bar-progress").style.width = rates;
  });
};

const scolledToElement = (ele) => {
  const coordinateYElement = ele.getBoundingClientRect().top;

  return (
    coordinateYElement <=
    (window.innerHeight || document.documentElement.clientHeight)
  );
};



window.addEventListener("scroll", () => {
  const skillAreas = document.querySelector(".cv-expertises-skills");

  if (scolledToElement(skillAreas)) {
    setSkill();
  }else{
    resetSkill();
  }
});

document.getElementById("btn-scroll-up").addEventListener("click" , () => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
})

document.querySelector(".cv-introduce-button").addEventListener('click', (e)=> {
  e.preventDefault();
  console.log('scroll');
  const offSet = document.getElementById('works').offsetTop;
  scroll({
    top: offSet,
    behavior: "smooth",
  });
})