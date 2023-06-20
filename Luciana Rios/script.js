
// EVENTO PARA VIDEOS:
//REPRODUCIR Y PAUSAR
//DURACION VIDEO - AGREGAR EN TEXTO

let botonPlay=document.getElementsByClassName(".botonesVideo")[0];

let video=document.getElementById("videoHistoria");

const reproducir=()=>{
    video.play()
    document.querySelector("#duracion").textContent=("Duración del video: ")+video.duration.toFixed(2)
};

let botonPause=document.getElementsByClassName(".botonesVideo")[1];

const pausar=()=>{
    video.pause()
};

// EVENTO CAMBIAR DE COLOR CAJA DE FOTOS INDEX3

let cajaFotos=document.getElementById("drop1");

    const cambiaColor=()=>{
        cajaFotos.style.backgroundColor="#1d1d1d"
    };

    const vuelveColor=()=>{
        cajaFotos.style.backgroundColor="grey"
    };

let cajaFotos2=document.getElementById("drop2");

    const cambiaColor2=()=>{
        cajaFotos2.style.backgroundColor="#1d1d1d"
    };

    const vuelveColor2=()=>{
        cajaFotos2.style.backgroundColor="grey"
    };

let cajaFotos3=document.getElementById("drop3");

    const cambiaColor3=()=>{
        cajaFotos3.style.backgroundColor="#1d1d1d"
    };

    const vuelveColor3=()=>{
        cajaFotos3.style.backgroundColor="grey"
    };



/* EVENTO PARA API DRAG & DROP */

// EN EL ELEMENTO DRAGGABLE

// 1) Invoco a la foto que será arrastrada

let arrastre1=document.getElementById("drag1");

// 2) Evento dragstar

arrastre1.addEventListener("dragstart",(evento)=>{
    console.log("Evento dragstart")
});

// 3) Evento dragend

arrastre1.addEventListener("dragend",(evento)=>{
    console.log("Evento dragend")
});

// 4) Evento drag

arrastre1.addEventListener("drag",(evento)=>{
    console.log("Evento drag")
});

// EN LA DROP ZONE

// 1) Invoco la drop zone (hacer siempre 1 variable por caja)

let dZone=document.getElementById("drop1");

// 2) Evento dragenter

dZone.addEventListener("dragenter",(evento)=>{
    console.log("Evento dragenter")
});

// 3) Evento dragleave

dZone.addEventListener("dragleave",(evento)=>{
    console.log("Evento dragleave")
});

// 4) Evento dragover

dZone.addEventListener("dragover",(evento)=>{
    console.log("Evento dragover")
    evento.preventDefault()
});

// 5) Evento drop + agregar foto

dZone.addEventListener("drop",(evento)=>{
    console.log("Evento drop")
    dZone.appendChild(drag2)
});


// N° 2

let arrastre2=document.getElementById("drag2");

arrastre2.addEventListener("dragstart",(evento)=>{
    console.log("Evento dragstart")
});

arrastre2.addEventListener("dragend",(evento)=>{
    console.log("Evento dragend")
});

arrastre2.addEventListener("drag",(evento)=>{
    console.log("Evento drag")
});

let dZone2=document.getElementById("drop2");

dZone2.addEventListener("dragenter",(evento)=>{
    console.log("Evento dragenter")
});

dZone2.addEventListener("dragleave",(evento)=>{
    console.log("Evento dragleave")
});

dZone2.addEventListener("dragover",(evento)=>{
    console.log("Evento dragover")
    evento.preventDefault()
});

dZone2.addEventListener("drop",(evento)=>{
    console.log("Evento drop")
    dZone2.appendChild(drag1)
});


// N° 3

let arrastre3=document.getElementById("drag3");

arrastre3.addEventListener("dragstart",(evento)=>{
    console.log("Evento dragstart")
});

arrastre3.addEventListener("dragend",(evento)=>{
    console.log("Evento dragend")
});

arrastre3.addEventListener("drag",(evento)=>{
    console.log("Evento drag")
});

let dZone3=document.getElementById("drop3");

dZone3.addEventListener("dragenter",(evento)=>{
    console.log("Evento dragenter")
});

dZone3.addEventListener("dragleave",(evento)=>{
    console.log("Evento dragleave")
});

dZone3.addEventListener("dragover",(evento)=>{
    console.log("Evento dragover")
    evento.preventDefault()
});

dZone3.addEventListener("drop",(evento)=>{
    console.log("Evento drop")
    dZone3.appendChild(drag3)
});


// BOTÓN REINICIO
//Hacer un evento que refresque la página
//ERROR: no se usa removeEventListener porque tendríamos que escribir mucho código.


let reiniciarVideo=document.getElementById("botonReinicio");

    const reiniciar=()=>{
        window.location.reload();
    };

/* ERROR EN DRAG&DROP:

Cuando arrastramos la foto y la colocamos sobre cualquiera de las cajas vacías, automáticamente la acomoda donde corresponde. No me permite dejarla en ese contenedor.

*/

