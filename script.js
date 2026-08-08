const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");

boton.addEventListener("click", function() {
    titulo.textContent = "Leo Messi - Campeón del Mundo";
        titulo.style.color = "#008000";

            descripcion.textContent =
                    "En 2022, Leo Messi ganó la Copa del Mundo con Argentina. " +
                            "La final se disputó el 18 de diciembre de 2022 contra Francia. " +
                                    "En 2023 continuó celebrando este histórico logro como campeón del mundo.";

                                        boton.textContent = "¡Argentina Campeón!";
                                        });
                                        a