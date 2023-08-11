document.addEventListener('DOMContentLoaded', () => {
  const $list = document.querySelector('.list');
  const $library = document.querySelector('.displayLibrary');
  const $awesome = document.querySelector('.awesome');
  const $new = document.querySelector('.new');
  const $add = document.querySelector('.add');
  const $contact = document.getElementById('contactButton');
  const $contactInfo = document.querySelector('.contactInform');
  const $footer = document.querySelector('.footer');

  $list.addEventListener('click', () => {
    $library.classList.add('active');
    $awesome.classList.add('active');
    $footer.classList.add('active');
    $add.classList.remove('active');
    $contactInfo.classList.remove('active');
  });

  $new.addEventListener('click', () => {
    $add.classList.add('active');
    $footer.classList.add('active');
    $library.classList.remove('active');
    $awesome.classList.remove('active');
    $contactInfo.classList.remove('active');
  });

  $contact.addEventListener('click', () => {
    $contactInfo.classList.add('active');
    $footer.classList.add('active');
    $add.classList.remove('active');
    $library.classList.remove('active');
    $awesome.classList.remove('active');
  });
});