function style(){getClass(tag)}
document.head.appendChild(document.createElement('style'));
const tag =['p','hr','acronym','abbr','address','b','bdi','bdo','big','blockquote','center','cite','code','del','dfn','em','font','i','ins','kbd','mark','meter','pre','progress','q','rp','rt','ruby','s','samp','small','strike','strong','sub','sup','time','tt','u','var','wbr','form','input','textarea','button','select','optgroup','option','label','fieldset','legend','datalist','keygen','output','frame','frameset','noframes','iframe','img','map','area','canvas','figcaption','figure','audio','source','track','video','a','link','nav','ul','ol','li','dir','dl','dt','dd','menu','command','table','caption','th','tr','td','thead','tbody','tfoot','col','colgroup','div','span','footer','hgroup','section','article','aside','details','dialog','summary','base','basefont','applet','embed','object','param','h1','h2','h3','h4','h5','h6']
function getClass(tag) {
  const node =[];
  tag.map((value)=>{
    const n = document.querySelectorAll(value);
    if (n.length !== 0) {node.push(n)}
  })
  cls(node)
}
function cls(z) {
const element=[]
const classes=[]
const prop =[]
const val=[]
const selector =[]
z.forEach(x=>{
  const l = x.length;
  for (let i = 0; i < l; i++) {
    if ((x[i]).getAttribute('class') != null) {
        element.push((x[i]).getAttribute('class').split(' '));//looping element result = [[class_name,class_name],[class_name,...],...]
    }
  }
})
  const ell = element.length;
  if (ell >= 1) { 
    for (let i = 0; i < ell; i++) {
            for (var a = 0; a < element[i].length; a++) {
                     classes.push(element[i][a].split('_'));//result = [[class,name],[class,name],...]
             }
    }
  for (var i = 0; i < classes.length; i++) {
      prop.push(classes[i][0])//result=[class,class,class,...]
      val.push(classes[i][1])//result=[name,name,name,...]
      if (classes[i][0].match(/^S|M|L/)) {prop.splice([i],1,classes[i][0].replace(/S|M|L/,''))}
  }
  for (var i = 0; i < prop.length; i++) {
    selector.push(classes[i].join('_'))//result=[class_name,class_name,class_name,...]
  }
  } 
   c(selector,prop,val)
}





function c(el,prop,val) {
const rule=[];
  const sm =[];
  const md =[];
  const lg =[];

for (let i = 0; i < el.length; i++) {
    if (val[i] !== undefined) {
val[i]= val[i].replace(/P$/,'%');
prop[i]=acronim(prop[i])
  switch(el[i].charAt(0)){
    case 'S':
  sm.push(`.${el[i]}{${prop[i]}:${val[i]};}`)
   break;
   case 'M':
  md.push(`.${el[i]}{${prop[i]}:${val[i]};}`)
   break;
   case 'L':
  lg.push(`.${el[i]}{${prop[i]}:${val[i]};}`)
   break;
   default:
  rule.push(`.${el[i]}{${prop[i]}:${val[i]};}`);
  }

}
 }
 small(sm);
 medium(md);
 large(lg);
   const rules=newSet(rule);
   rules.forEach((rule)=>{
    sheetRule(rule)
  })
}


function abb(a,b) {
  return a=b;
}
function small(selector) {
  selector=newSet(selector)
  let rule= selector.join('\n')
  rule = `@media (max-width: 767px) {${rule}}`
  sheetRule(rule)
}
function medium(selector) {
  selector=newSet(selector)
  let rule= selector.join('\n')
  rule = `@media (min-width: 768px) {${rule}}`
  sheetRule(rule)
}
function large(selector) {
  selector=newSet(selector)
  let rule= selector.join('\n')
  rule = `@media (min-width: 992px) {${rule}}`
  sheetRule(rule)
}


function newSet(arr) {
  return [...new Set(arr)]
}

function sheetRule(rule) {
  const sheet = window.document.styleSheets[4];
      sheet.insertRule(rule,sheet.cssRules.length)
}

function acronim(key) {
  const obj = {
        w:'width',
        h:'height',
        p:'padding',
        pt:'padding-top',
        pb:'padding-bottom',
        pl:'padding-left',
        pr:'padding-right',
        m:'margin',
        mt:'margin-top',
        mb:'margin-bottom',
        ml:'margin-left',
        mr:'margin-right',
        fs:'font-size',
        bg:'background',
        cl:'color',
        br:'border-radius',
        l:'left',
        r:'right'
};
const abbr = Object.getOwnPropertyDescriptor(obj,key);
return abbr?abbr.value:key
}

export default style;