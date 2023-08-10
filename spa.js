document.addEventListener('DOMContentLoaded', () => {
    const $list = document.querySelector('.list');
    const $library = document.querySelector('.displayLibrary');
    const $awesome = document.querySelector('.awesome');
    const $new = document.querySelector('.new');
    const $add = document.querySelector('.add');
    
  
    $list.addEventListener('click', () => {
    $library.classList.add('active');
    $add.classList.remove('active');
    $awesome.classList.add('active');
    });

    $new.addEventListener('click', () => {
    $add.classList.add('active');
    $library.classList.remove('active');
    $awesome.classList.remove('active');
    });
  });