document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            let destino = document.querySelector(this.getAttribute("href"));
            let posicion = destino.offsetTop;
            let inicio = window.scrollY;
            let distancia = posicion - inicio;
            let duracion = 300;
            let tiempoInicio = null;

            function animarScroll(tiempoActual) {
                if (!tiempoInicio) tiempoInicio = tiempoActual;
                let tiempoTranscurrido = tiempoActual - tiempoInicio;
                let progreso = Math.min(tiempoTranscurrido / duracion, 1);
                let desplazamiento = inicio + distancia * progreso;
                window.scrollTo(0, desplazamiento);

                if (tiempoTranscurrido < duracion) {
                    requestAnimationFrame(animarScroll);
                }
            }

            requestAnimationFrame(animarScroll);
        });
    });
});

document.getElementById("change-language").addEventListener("click", function () {
    let currentLang = document.documentElement.lang;
    
    if (currentLang === "es") {
        window.location.href = "index-en.html"; // Redirigir a la versión en inglés
    } else {
        window.location.href = "index.html"; // Redirigir a la versión en español
    }
});