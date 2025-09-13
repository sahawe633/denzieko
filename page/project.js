import projects from '../privat/projects.js';
const app = document.getElementById('app');
const div = document.createElement('div');
projects.map(p=>{
    let title = document.createElement('p');
    let path = document.createElement('a');
    title.textContent=p.title;
    path.href=p.path;
    path.textContent='Download';
    div.appendChild(title);
    div.appendChild(path);
})
const project=()=>{
    app.innerHTML = '';
    app.appendChild(div);
}

export default project;