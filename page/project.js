import projects from '../privat/projects.js';
const app = document.getElementById('app');
const div = document.createElement('div');
div.setAttribute('class','d_flex jc_center w_100vw h_100vh ai_center')
projects.map(p=>{
    let title = document.createElement('p');
    let path = document.createElement('a');
    title.textContent=p.title;
    path.href=p.path;
    path.textContent='Download';
    div.appendChild(title);
    div.appendChild(path);
})
export default function project(){
    app.innerHTML = '';
    app.appendChild(div);
}
