var arr =  [
    {dp:"https://images.unsplash.com/photo-1696263077754-055b110c5820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" , story:"https://images.unsplash.com/photo-1696263077754-055b110c5820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
    {dp:"https://images.unsplash.com/photo-1696215325855-082b3aba071c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80" , story:"https://images.unsplash.com/photo-1696215325855-082b3aba071c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80"},

    {dp:"https://images.unsplash.com/photo-1696161812499-e17695da6056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" , story:"https://images.unsplash.com/photo-1696161812499-e17695da6056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
    {dp:"https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" , story:"https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
    {dp:"https://images.unsplash.com/photo-1695740022029-229ab3400d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80" , story:"https://images.unsplash.com/photo-1695740022029-229ab3400d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"},
    {dp:"https://images.unsplash.com/photo-1696263077754-055b110c5820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" , story:"https://images.unsplash.com/photo-1696263077754-055b110c5820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
    {dp:"https://images.unsplash.com/photo-1696215325855-082b3aba071c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80" , story:"https://images.unsplash.com/photo-1696215325855-082b3aba071c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80"},

] 

var clutter = ""
var story = document.querySelector(".story")
var fullScreen = document.querySelector(".full-screen")
arr.forEach(function(elem,index){
    clutter += `<div class="circle">
    <img id = "${index}" src="${elem.dp}" alt="">
</div>`
})

story.innerHTML = clutter


story.addEventListener("click",function(ele){
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr [ele.target.id].story})`

    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none"
    
    },3000)
})
