function Display() {
    if (!localStorage.getItem('welcomeMessageShown')) {
        alert("Welcome to my website!");
        localStorage.setItem('welcomeMessageShown', 'true');
    }
}

window.addEventListener('DOMContentLoaded', Display);