let socials = document.querySelector('.socials');
let navigation = document.querySelector('.navigation');
console.log(socials);
socials.addEventListener('click', () => {
  navigation.classList.toggle('hidden');
});
