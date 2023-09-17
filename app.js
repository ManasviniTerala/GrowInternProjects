let btns=document.querySelectorAll('button');
let h2=document.querySelector('h2');
let name=prompt("Enter your name: ");
let clr=document.querySelector('#clear');
h2.innerText=`Hello,${name}!`;
let str="";
let trackstr="";
let e;

// clr.addEventListener("click",()=>{
//     document.querySelector("#track").value="";
// })
for(btn of btns)
{
    btn.addEventListener('click',(event)=>{
        if(event.target.innerHTML=='=')
        {
          str=eval(str);
        //   e=eval(str);
        document.querySelector("#output").value=str;
        // document.querySelector("#track").value=str;
        // document.querySelector("#track").value=" ";
         
        }

        else if(event.target.innerHTML=='C')
        {
            str="";
            document.querySelector("#output").value=str;
            // document.querySelector("#track").value=e;
        }
        else if(event.target.innerHTML=='DEL')
        {
            str=str.substring(0,str.length-1);
            document.querySelector("#output").value=str;
        }
        else if(event.target.innerHTML=='!')
        {
            e=parseInt(str);
          
           let f=1;
           for(let i=1;i<=e;i++)
            f*=i;

            document.querySelector("#output").value=f; 
            
        }
        else
        {
        str=str+event.target.innerHTML
        document.querySelector("#output").value=str;
        }

        // if(event.target.innerText!='C' && event.target.innerText!='DEL')
        // {
        //  trackstr+=event.target.innerHTML;
        //  document.querySelector("#track").value=trackstr;

         
        // }
    })
}