const copyToClipboard = (elementId) => {
    const temp = document.createElement("input");
    const text = document.getElementById(elementId+"_dir").innerHTML;
    temp.setAttribute("value", text);
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);


    document.getElementById(elementId+"_mensaxe").innerHTML="✔️"


    setTimeout(function(){
        document.getElementById(elementId+"_mensaxe").innerHTML="";
    },1000);
};
