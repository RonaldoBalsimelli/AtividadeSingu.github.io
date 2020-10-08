window.onload = function () {
  localStorage.removeItem('logado');
}

const api = 'http://localhost:3000/login';

document.getElementById('submit').addEventListener('click', () => {
  let email = document.getElementById('email').value
  let senha = document.getElementById('senha').value

  axios.post(api, {
    "email": email,
    "senha": senha
  }).then(sucess => {
    localStorage.setItem('logado', true)
    window.location.href = "fibonacci.html";
  }).catch(err => {
    alert('Usuário ou senha inválidos');
  })
})
