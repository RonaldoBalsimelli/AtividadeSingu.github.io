window.onload = function () {
  if (!localStorage.getItem('logado')) {
    alert('Usuário não está logado, voltando para login')
    window.location.href = "login.html"
  }
}

const api = 'http://localhost:3000/fibonacci';

document.getElementById('submit').addEventListener('click', () => {
  let numero = +document.getElementById('numero').value;

  if (numero > 20) {
    alert('Ops...isso é muito pesada para eu processar');
  } else {
    axios.post(api, {
      "numero": numero
    }).then(success => {
      console.log(success)
      alert(success.data);
    }).catch(err => {
      alert('Ops...isso é muito pesada para eu processar');
    });
  }
})
