import projects from '../privat/projects.js';
const app = document.getElementById('app');
let div = '';
projects.map(p=>{
    // let title = document.createElement('p');
    // let path = document.createElement('a');
    // title.textContent=p.title;
    // path.href=p.path;
    // path.textContent='Download';
    // div.appendChild(title);
    // div.appendChild(path);
    div += `
    <div>
        <p>${p.title}</p>
        <a hreff="${p.path}">Download</a>
    </div>
    `
})
export default function project(){
app.innerHTML = div;
// app.appendChild(div);
console.log(app)
}

// export default project();