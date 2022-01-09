function changeTheme(value) {
    localStorage.setItem('theme', `${value}`)
}

function callTheme() {
    return localStorage.getItem('theme');
}

function createElementLink(value) {
    document.head.insertAdjacentHTML(
        'beforeend',
        `<link id="theme" rel="stylesheet" href="css/${value}.css">`
    );
}

if(localStorage.theme) {
    if(localStorage.theme === 'light') {
        createElementLink('light')
    } else {
        createElementLink('dark')
    }
} else {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        if (window.matchMedia('(prefers-color-scheme = dark)').matches) {
            createElementLink('dark')
            changeTheme('dark');
        } else {
            createElementLink('light');
            changeTheme('light');
        }
    } else {
        createElementLink('light')
    }
}