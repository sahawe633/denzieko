import projects from '../privat/projects.js';
const PATH = location.origin;
const app = document.getElementById('app');
const div = document.createElement('div');
div.setAttribute('class','display_flex justify-content_center w_100vw h_100vh align-items_center')
projects.map(p=>{
    let title = document.createElement('p');
    let path = document.createElement('a');
    let img = document.createElement('img');
    title.textContent=p.title;
    path.href=PATH+'/files/'+p.path;
    path.textContent='Download';
    img.src=PATH+'/image/'+p.img;
    img.setAttribute('class','w_100px h_100px')
    div.appendChild(title);
    div.appendChild(path);
})
export default function project(){
    app.innerHTML = '';
    app.appendChild(div);
}
