let index=1;

function clik(){
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let mail=document.getElementById("mail").value;
    let msg=document.getElementById("msg").value;

    console.log(fname+lname+mail+msg);

    document.getElementById("fname").value='';
    document.getElementById("lname").value='';
    document.getElementById("mail").value='';
    document.getElementById("msg").value='';
}


function scrol(direction){
    var scroll1=document.getElementById("scroll1");
    var scroll2=document.getElementById("scroll2");
    var scroll3=document.getElementById("scroll3");

    if(direction==='right'&&index==1){
        scroll1.style.transform='translateX(-100%)';
        scroll2.style.transform='translateX(-100%)';
        scroll3.style.transform='translateX(-100%)';

        scroll1.style.opacity=0;
        scroll2.style.opacity=1;
        scroll3.style.opacity=0;

        index=2;
    }else if(direction==='right'&&index==2){
        scroll1.style.transform='translateX(-200%)';
        scroll2.style.transform='translateX(-200%)';
        scroll3.style.transform='translateX(-200%)';

        scroll1.style.opacity=0;
        scroll2.style.opacity=0;
        scroll3.style.opacity=1;

        index=3;
    }else if(direction==='left'&&index==3){
        scroll1.style.transform='translateX(-100%)';
        scroll2.style.transform='translateX(-100%)';
        scroll3.style.transform='translateX(-100%)';

        scroll1.style.opacity=0;
        scroll2.style.opacity=1;
        scroll3.style.opacity=0;

        index=2;
    }else if(direction==='left'&&index==2){
        scroll1.style.transform='translateX(0)';
        scroll2.style.transform='translateX(0)';
        scroll3.style.transform='translateX(0)';

        scroll1.style.opacity=1;
        scroll2.style.opacity=0;
        scroll3.style.opacity=0;

        index=1;
    }
}

let active=[0,0,0,0];

function fun(a){

    if(active[a]==0){
    var acc=document.getElementById('w'+a);
    acc.style.display="block";

    var button=document.getElementById('q'+a);
    button.style.backgroundColor="#b9b9b9";

    active[a]=1;
    }else if(active[a]==1){
        var acc=document.getElementById('w'+a);
        acc.style.display="none";

        var button=document.getElementById('q'+a);
        button.style.backgroundColor="#eae8e8";

        active[a]=0;
    }
}