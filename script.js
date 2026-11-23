// // load previousely saved theme 
let theme = localStorage.getItem('theme') || 'light'
// // apply saved theme 
document.body.className = theme
// // Get button 
let themeBtn = document.getElementById('themeBtn')
// // Update button text 
function updateButton(){
   if(theme === 'dark'){
     themeBtn.textContent = 'Switch to Light Mode'
   }else{
     themeBtn.textContent = 'Switch to Dark Mode'
   }
}
// // Change theme function 
function changeTheme(){
    theme = theme === 'light' ? 'dark' : 'light'

//     // save theme in localstrorage 
    localStorage.setItem('theme',theme)
    // apply theme to body 
    document.body.className = theme
    // update button text 
    updateButton()
}
// // Set correct button text on page load 
updateButton()