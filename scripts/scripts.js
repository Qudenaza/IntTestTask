// УПРАВЛЕНИЕ ПРОКРУТКОЙ


window.addEventListener('scroll', function (e) {
  if (window.pageYOffset > 100) {
    navigation.classList.add('nav--sticky');
  } else {
    navigation.classList.remove('nav--sticky');
  }

});


// ОТКРЫВАНИЕ И ЗАКРЫВАНИЕ МЕНЮ

const toggle = document.querySelector('.toggle'),
  navigation = document.querySelector('.nav');

toggle.addEventListener('click', function () {
  if (!toggle.classList.contains('toggle--opened')) {
    toggle.classList.add('toggle--opened');

    navigation.classList.add('nav--active')

    freeze();

    return;
  }

  toggle.classList.remove('toggle--opened');

  navigation.classList.remove('nav--active');

  unfreeze();
})

// СКРИПТ ЗАМОРАЖИВАЕТ СТРАНИЧУ ЗАПРЕЩАЯ СКРОЛЛ

function freeze() {
  const html = document.querySelector('html');

  if (html.style.position !== 'fixed') {
    const top = html.scrollTop ? html.scrollTop : document.querySelector('body').scrollTop;

    if (window.innerWidth > html.innerWidth) {
      html.style.overflowY = 'scroll';
    }


    Object.assign(html.style, {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: -top,
    })
  }
};


// СКРИПТ РАЗМОРАЖИВАЕТ СТРАНИЦУ

function unfreeze() {
  const html = document.querySelector('html');

  if (html.style.position === 'fixed') {
    html.style.position = 'static';

    html.scrollTop = -parseInt(html.style.top = '10');

    Object.assign(html.style, {
      position: '',
      width: '',
      height: '',
      top: '',
      'overflow-y': '',
    })
  }
}

// ВТОРОЙ БЛОК

new Vue({
  el: '#vm',
  data: {
    showInfo: true
  }
})

const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.about__pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        ' из ' +
        '<span class="' + totalClass + '"></span>';
    }
  },
  navigation: {
    nextEl: '.about__arrow--right',
    prevEl: '.about__arrow--left',
  },
});