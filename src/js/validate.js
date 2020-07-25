$(document).ready(function() {
  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      msg: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Entrez votre nom",
        minlength: "Au moins 3 caractères"
      },
      email: {
        required: "Entrez votre email",
        email: "Format de courrier électronique non valide"
      }
    },
    submitHandler: function() {
      alert("Merci pour ton message!");
      validator.resetForm();
    }
  });
});
