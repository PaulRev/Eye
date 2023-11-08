const eye_iris = document.getElementById('eye_iris');
const inpuTExt = document.getElementById('inpuTExt');

const btnEYE = document.getElementById('btnEYE');


btnEYE.addEventListener('click',function(){
    
const agregarColor = inpuTExt.value;

eye_iris.style.background = agregarColor;
btnEYE.style.background = agregarColor;
})
