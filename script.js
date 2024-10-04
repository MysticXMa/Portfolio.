function Display() {
    if (!sessionStorage.getItem('welcomeMessageShown')) {
        alert("Welcome to my website!");
        sessionStorage.setItem('welcomeMessageShown', 'true');
    }
}

window.addEventListener('DOMContentLoaded', Display);