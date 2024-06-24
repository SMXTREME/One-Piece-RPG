// async function setWebsite() {
//     const test = document.getElementById('test');

//     test.innerHTML = '<div class="loader"></div>';

//     const response = await fetch(
//         'http://192.168.31.63:3000/api/opr/data/lb/level'
//     ).catch((e) => {});

//     if (!response) return setWebsite();

//     const data = await response.json();

//     test.innerHTML = data.html;
// }

// setWebsite();

const test = document.getElementById('test');

setTimeout(async () => {
    const response = await fetch('OnePiece.profiles.json').catch((e) => {});

    if (!response) return setWebsite();

    const data = await response.json();

    test.innerHTML = data.html;
}, 500);
