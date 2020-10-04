  $('#fsubmit').click(()=>{
    $.post("http://localhost/php/test.php",
    {
      name: $('#user').val(),
      password: $('#pass').val()
    },
    function validateForm(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
      if(status === 'success') {
        console.log($('#modal').html())
        $('#modal').html('<h1>Success Login</h1>')
        setTimeout(() => {
          location.reload()
        }, 5000);
      }
    })
  })

const modal = document.getElementById('modal')

document.getElementById('but2').onclick = function(){
  console.log('Onclick event')
  modal.classList.toggle('showed')
}
