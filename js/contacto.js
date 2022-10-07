/*const btn = document.getElementById("button");

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_eii1tu6";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Enviar";
        alert("Tu mensaje ha sido enviado con éxito!");
      },
      (err) => {
        btn.value = "Enviar";
        alert(JSON.stringify(err));
      }
    );
  });

const getNombre = (idPost) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then((res) => res.json())
    .then((post) => {
      console.log(post.userId);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((res) => res.json())
      .then(user => {
        console.log(user);
      })
    });
};

getNombre(33);*/


const productosRecientes = document.getElementById("products");
function traer() {
  fetch("../products.json")
    .then((res) => res.json())
    .then((productosRecientes) => {
      console.log(productosRecientes);
      })
 };

traer();
