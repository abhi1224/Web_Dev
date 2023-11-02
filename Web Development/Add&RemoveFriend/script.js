var addFriend = document.querySelector('.btn')
var content = document.querySelector('h3')
var count = 0 ;

addFriend.addEventListener('click',function(){
    if(count == 0)
    {
        content.innerHTML = 'Friend'
        content.style.color = 'green'
        addFriend.innerHTML = 'Remove Friend'
        count = 1
    }
    else{
        content.innerHTML = 'Stranger'
        content.style.color = 'red'
        addFriend.innerHTML = 'Add Friend'
        count = 0
    }
   

})