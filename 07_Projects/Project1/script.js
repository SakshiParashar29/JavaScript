const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function (button)
{
    button.addEventListener('click', function(event)
  {
      if(event.target.id === 'yellow')
      {
         body.style.backgroundColor = event.target.id;
      }
      if(event.target.id === 'blue')
        {
           body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'red')
        {
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'pink')
        {
           body.style.backgroundColor = event.target.id;
        }
  })
})