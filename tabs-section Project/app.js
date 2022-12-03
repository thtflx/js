const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.button');
const articles = document.querySelectorAll('.content');

tabs.addEventListener('click', (event) => {
    // console.log(event.target); // bosilgan button ni ko'rsatadi
    // console.log(event.target.dataset.id); // qaysi biri bosilsa, ushani data-id si ko'rsatiladi (masalan: step2)

    const id = event.target.dataset.id;

    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('live');
        });

        event.target.classList.add('live');

        articles.forEach((article) => {
            article.classList.remove('live');
        });

        const element = document.getElementById(id);
        element.classList.add('live');
    }
});