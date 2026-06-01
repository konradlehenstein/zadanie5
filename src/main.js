import './style.css';
import dayjs from 'dayjs';

const form = document.getElementById('birthday-form');
const dialog = document.getElementById('result-dialog');
const closeBtn = document.getElementById('close-dialog');
const dialogText = document.getElementById('dialog-text');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputDate = document.getElementById('bday-input').value;
    
    if (!inputDate) return;


    const birthDate = dayjs(inputDate);
    const today = dayjs();

   
  
    const daysPassed = today.diff(birthDate, 'days');


    dialogText.textContent = `Od Twoich narodzin minęło dokładnie ${daysPassed} dni.`;


    if (birthDate.date() === today.date() && birthDate.month() === today.month()) {
        alert('Wszystkiego najlepszego!');
    }

    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});