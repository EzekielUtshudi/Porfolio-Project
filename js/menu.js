import workData from './index.js';

const workOuterContainer = document.querySelector('.works');

// create works
function generateWorks({ name, tech, ImgUrl }, index) {
  const workContainer = document.createElement('div');
  workContainer.classList.add('works-item');

  workContainer.innerHTML = `
  <div class="work-img">
    <div class="proj-image">
      <img src="Images/${ImgUrl}" alt="${name}" />
    </div>
  </div>
  <div class="lower">
    <h3>${name}</h3>
    <ul class="tags">
    ${tech.map(
    (tec) => `<li>
      <a href="#"> ${tec} </a>
    </li>`,
  ).join('')}
    </ul>
    <button class="btn show-modal" data-id="${index}" type="button">
      See Project
    </button>
  </div>
  `;

  workOuterContainer.appendChild(workContainer);
}

// create works section
workData.forEach((work, index) => {
  generateWorks(work, index);
});

// hambuger menu imports
const btn = document.querySelector('.mb-menu');
const menu = document.querySelector('.hamburger');
const menuList = document.querySelectorAll('.mb-menu-list a');

// hambuger menu implementation
btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// modal implementation
const modalContainer = document.querySelector('.modal-container');
const workBtns = document.querySelectorAll('.show-modal');

// create modal
function generateModal({
  ImgUrl, name, description, tech, demoUrl, gitUrl,
}) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  modal.innerHTML = `
    <button type="button" class="modalcross">
      <span></span>
      <span></span>
    </button>
    <div class="modal-img">
      <img src="Images/${ImgUrl}" alt="${name}" />
    </div>
    <div class="modal-d">
      <h2 class="modal-title">${name}</h2>
      <div class="modal-btn desktop">
        <a href="${demoUrl}" class="btn"
          ><span>See Live</span> <img src="Images/export.svg" alt="see live"
        /></a>
        <a href="${gitUrl}" class="btn"
          ><span>See Source</span> <img src="Images/github_ic.svg" alt="see live"
        /></a>
      </div>
    </div>
    <ul class="tags">
      ${tech.map(
    (tec) => `<li>
        <a href="#"> ${tec} </a>
      </li>`,
  ).join('')}
    </ul>
    <p class="modal-desc">
      ${description}
    </p>
    <div class="modal-btn mobile">
      <a href="${demoUrl}" class="btn"
        ><span>See Live</span> <img src="Images/export.svg" alt="see live"
      /></a>
      <a href="${gitUrl}" class="btn"
        ><span>See Source</span> <img src="Images/github_ic.svg" alt="see live"
      /></a>
    </div>
  `;

  modalContainer.appendChild(modal);
}

function closeBtn() {
  document.querySelector('.modalcross').addEventListener('click', () => {
    modalContainer.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
}

workBtns.forEach((workBtn) => {
  workBtn.addEventListener('click', () => {
    modalContainer.innerHTML = '';
    generateModal(workData[workBtn.dataset.id]);
    closeBtn();
    modalContainer.classList.add('active');
    document.body.classList.add('no-scroll');
  });
});
