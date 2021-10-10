const formHeader = document.querySelector('#formHeader');
const formFooter = document.querySelector('#formFooter');
const textResultHeader = formHeader.querySelector('.form__button');
const textResultFooter = formFooter.querySelector('.form__button');

formHeader.addEventListener('submit', (evt) => {
  evt.preventDefault();
  textResultHeader.textContent = 'Круто, спасибо за доверие!';
});

formFooter.addEventListener('submit', (evt) => {
  evt.preventDefault();
  textResultFooter.textContent = 'Круто, спасибо за доверие!';
});
