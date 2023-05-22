let container = document.querySelector('.container');

let jobs = ['Front-End Developer', 'Web Designer', 'Freelancer', 'Instructor']

let index = 0;

let chIn = 0;
textUp()

function textUp() {
    chIn++;
    container.innerHTML = `
    <h1>I am ${jobs[index].slice(0, 1) === 'I' ? 'an' : 'a' } ${jobs[index].slice(0, chIn)}</h1>
    `;
    

    if (chIn === jobs[index].length) {
        index++;
        chIn = 0;
    }

    if (index === jobs.length) {
        index = 0;
    }
    setTimeout(textUp, 300)
}
