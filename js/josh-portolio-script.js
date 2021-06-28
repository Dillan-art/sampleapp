








let navigationItem1 = document.getElementById('list-item-1');
let navIcon1 = document.getElementById('nav-icon-1');
let navIcon2 = document.getElementById('nav-icon-2');
let navIcon3 = document.getElementById('nav-icon-3');
let navIcon4 = document.getElementById('nav-icon-4');

navigationItem1.addEventListener('click', () => {
 window.scroll({
   top:575,
   left: 0,
   behavior: 'smooth'
 });
 




});
let navigationItem2 = document.getElementById('list-item-2').addEventListener('click', () => {
   window.scroll({
   top:1360,
   left: 0,
   behavior: 'smooth'
 });
});

let navigationItem3 = document.getElementById('list-item-3').addEventListener('click', () => {
   window.scroll({
   top:1855,
   left: 0,
   behavior: 'smooth'
 });
});
let navigationItem4 = document.getElementById('list-item-4').addEventListener('click', () => {
   window.scroll({
   top:3000,
   left: 0,
   behavior: 'smooth'
 });
});
  
if (window.innerWidth === 1200 || window.innerWidth > 1200) {
  let navigationItem1 = document.getElementById('list-item-1').addEventListener('click', () => {
 window.scroll({
   top:575,
   left: 0,
   behavior: 'smooth'
 });
 

});
let navigationItem2 = document.getElementById('list-item-2').addEventListener('click', () => {
   window.scroll({
   top:1360,
   left: 0,
   behavior: 'smooth'
 });
});
let navigationItem3 = document.getElementById('list-item-3').addEventListener('click', () => {
   window.scroll({
   top:1855,
   left: 0,
   behavior: 'smooth'
 });
});
let navigationItem4 = document.getElementById('list-item-4').addEventListener('click', () => {
   window.scroll({
   top:3000,
   left: 0,
   behavior: 'smooth'
 });
});
}