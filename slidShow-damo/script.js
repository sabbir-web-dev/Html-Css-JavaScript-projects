const box = document.querySelector(".content");
const tran = document.querySelectorAll(".tran")
const span = document.querySelectorAll("span")
const icon = [
    '<i class="fa-brands tran fa-html5"></i>',
    '<i class="fa-brands tran fa-css3"></i>',
    '<i class="fa-brands tran fa-js"><i>',
    '<i class="fa-brands tran fa-react"></i>'

]
for (let i = 0; i < icon.length; i++) {
    span[i].setAttribute("id",i)
}

    var count = 0;

    span.forEach(e =>{
        e.addEventListener('click', ()=>{
            const  id = e.id
            count = id
            box.innerHTML = icon[count];
            spanColor();
        })
    })

const next = () =>{
    count++;
    if( count >= icon.length){
        count = 0;
        box.innerHTML = icon[count];
        spanColor();
    }
    else{
        box.innerHTML = icon[count]
        spanColor();
    }
    }
    const prv = () =>{
        count--;
        if( count < 0 ){
            count = icon.length -1
            box.innerHTML = icon[count];
            spanColor()
        }
        else{
            box.innerHTML = icon[count];
            spanColor()
        }

    }


const spanClick = () =>{

}


    setInterval(() => {
        count ++ ;
            if(count >= icon.length ){
                count= 0;
                box.innerHTML = icon[count];
                spanColor()
            }
            else{
                box.innerHTML = icon[count];
                spanColor()
            }
    }, 4000);

const spanColor = (c) =>{
    span.forEach(e =>{
        e.classList.remove('spanColor');
    })
    span[count].classList.add('spanColor');
}
