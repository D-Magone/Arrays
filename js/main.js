var table

fetch('users.json')
  .then(response => response.json())
  .then(data => renderTable(data));

function renderTable(data) {
  table = data
  let out = ''
  out += ``
  out += data.map(element => {
    return `
      <table class="tab1">
        <thead>
          <tr>
            <th>${element.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website</td>
            <td>${element.website}</td></tr>
          <tr>
          <tr>
            <td>Telephone</td>
            <td>${element.phone}</td></tr>
          <tr>
            <td>email</td>
            <td>${element.email}</td></tr>
      </tbody></table>`
  }).join('');
  console.log(out)
  document.getElementById('table').innerHTML = out
}

function myFunction() {
  var input, filter, table, tr, th, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById('table');
  tr = table.getElementsByTagName("table");
  for (i = 0; i < tr.length; i++) {
    th = tr[i].getElementsByTagName("th")[0];
    if (th) {
      txtValue = th.textContent || th.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



