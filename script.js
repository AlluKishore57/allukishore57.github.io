const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');
menuBtn.addEventListener('click',()=>navMenu.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('open')));

document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const modal=document.getElementById('certModal');
const modalImage=document.getElementById('modalImage');
const closeModal=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');modalImage.src=''};
document.querySelectorAll('.verify').forEach(btn=>btn.addEventListener('click',()=>{modalImage.src=btn.dataset.image;modal.classList.add('show');modal.setAttribute('aria-hidden','false')}));
document.getElementById('closeModal').addEventListener('click',closeModal);
document.querySelector('.modal-backdrop').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
