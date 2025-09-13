import projects from '../privat/projects.js';
const app = document.getElementById('app');
const div = document.createElement('div');
div.setAttribute('class','display_flex justify-content_center w_100vw h_100vh align-items_center')
projects.map(p=>{
    let title = document.createElement('p');
    let path = document.createElement('p');
    title.textContent=p.title;
    path.href=p.path;
    path.textContent='Download';
    div.appendChild(title);
    div.appendChild(path);
})
const download=(url,filename)=>{
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click()

    document.body.removeChild(a);
}
export default function project(){
    app.innerHTML = '';
    app.appendChild(div);
}
