'use strict';
{

  // ヘッドのおみくじ

  const urn_btn = document.getElementById('urn_btn');
  const result = document.getElementById('result');
  urn_btn.addEventListener('click', () => {
    const results = ['#01 次世代シーケンサー', '#02 NMR', '#03 N末シーケンサー', '#04 MALDI-TOF-MS', '#05 ESI-MS', '#06 超遠心機', '#07 プレートリーダー', '#08 安全キャビネット', '#09 冷却遠心機', '#10 インキュベーター', '#11 SDS-PAGE泳動装置', '#12 ボルテックス', '#13 ミューピッド', '#14 ちびたん', '#15 マイクロピペッタ', '#16 96穴プレート', '#17 シャーレ', '#18 マイクロチューブ', '#19 キムワイプ', '#20 つまようじ'];
    const n = Math.floor(Math.random() * results.length);
    result.textContent = results[n];
  });

  // リンクのアコーディオン

  const dts = document.querySelectorAll('dt');
  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
    });
  });
  
  // カルーセル
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;
  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }
  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }
  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('currImg');
  }
  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('currImg');
    });
    dots[currentIndex].classList.add('currImg');
  }
  updateButtons();
  setupDots();
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });
  window.addEventListener('resize', () => {
    moveSlides();
  });
  
  // SPバージョン

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}
