// This is a add btn function. use some var assign id or input.value; 
function clickbtn(){

    var input = document.getElementById('input').value;
    var ol = document.getElementById('todo');
  //if condition use empty input value alert empty text;  
    if(input == "" || input == " " || input == "  "){
        alert("Please Write Something to add...!");
    }
    //else var asign creat li appendChild creat text input value;
    else{
 
    var li= document.createElement('li');
    li.appendChild(document.createTextNode(input));

    
 //var asign creat dlt btn or btn to appendChild text node add delete;

    var dlt = document.createElement('button');
    dlt.appendChild(document.createTextNode("Delete"));

    //li appendChild dlt btn any li to add with dlt btn;
    li.appendChild(dlt);

//delete btn to onclick function call return ol to removeChild "li" ;
//this means dlt.parent ol child is remove;
    dlt.onclick = function dlt(){
        return ol.removeChild(this.parentNode);
    }
//end ol to add appendChild li next input value empty add;
    ol.appendChild(li);
    document.getElementById('input').value = "";
}
}
//dlt all li for ol target id ol and ol innerHTML is empty string asign;
function dltAll(){

    var ol = document.getElementById('todo');
    ol.innerHTML = "";
}
//Thank you very much to read my commit. owner..>>>> Muhammad kareem