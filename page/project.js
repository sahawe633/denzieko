import projects from '../privat/projects.js';
export default function project(){
const app = document.getElementById('app');
const div = '';
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
        <a hreff="${path}">Download</a>
    </div>
    `
})
app.innerHTML = div;
// app.appendChild(div);
console.log(app)
}

// export default project();