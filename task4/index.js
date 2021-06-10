function update(val){
    document.getElementById('answer').value += val;
}

function clearAnswer(){
    document.getElementById('answer').value='';
}

function calculate(){
    var ans=document.getElementById('answer').value;
    document.getElementById('answer').value=eval(ans);
}