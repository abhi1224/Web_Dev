let image = ['https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' ,
'https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
'https://images.unsplash.com/photo-1697644371824-41d4d0a8a12f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1697497305217-59590809a833?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D' ]

let count = 0;
function next(){
    let slider = document.getElementById("slider");
    count++
    if(count >= image.length){
       count = 0
    }
    else{
    slider.src = image[count]
    }

}

function previous(){
    let slider = document.getElementById("slider");
    if(count < 0)
    {
        count = image.length - 1
    }
    else{
        slider.src = image[count]
    }

}