function show(date){

    let h2 = document.querySelectorAll('h2');
    if(date == 'weekly'){
        h2[0].className="";
        h2[2].className="";
        h2[1].className="active";
    }
    else if(date == 'monthly'){
        h2[0].className="";
        h2[1].className="";
        h2[2].className="active";
    }
    else{
        h2[0].className="active";
        h2[1].className="";
        h2[2].className="";
    }
    fetch('./data.json').then( resolve => resolve.json()).then( (print)=> {
        for(let i =0;i<print.length;i++){
            let curtime = document.querySelectorAll(".curtime");
            let totaltime = document.querySelectorAll(".totaltime");
            curtime[i].innerText = JSON.stringify(print[i].timeframes[date].current)
            totaltime[i].innerText = JSON.stringify(print[i].timeframes[date].previous)
        }
    });
}