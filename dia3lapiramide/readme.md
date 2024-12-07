# Proyecto de Animación CSS

Este proyecto demuestra el uso de animaciones CSS para crear una escena animada con un contenedor, suelo, sombra, pirámide y sol.

![Texto alternativo](piramide.png)

## Características

- Animación de desaparición del contenedor.
- Movimiento de sombra utilizando `clip-path`.
- Cambio de color de los lados de la pirámide.
- Rotación del fondo del sol.

## Tecnologías Utilizadas

- HTML
- CSS

Detalle de los Pasos Seguidos
Estructura HTML:

Se crea una estructura básica de HTML con un contenedor principal .container que incluye elementos para el suelo, la sombra, la pirámide y el sol.
Estilos CSS:

Se aplican estilos para dar formato a los elementos del contenedor, el suelo, la sombra, la pirámide y el sol.
Se utiliza aspect-ratio para mantener una relación de aspecto cuadrada para el contenedor.
Se utilizan animaciones con @keyframes para crear efectos de desaparición, movimiento de sombra, cambio de color y rotación.
Animaciones CSS:

@keyframes desaparecer: Define una animación que cambia la opacidad del contenedor de 0 a 1 y viceversa.
@keyframes sombra: Define una animación que cambia la forma de la sombra utilizando clip-path.
@keyframes cambioA y @keyframes cambioB: Definen animaciones que cambian el color de los lados de la pirámide.
@keyframes girar: Define una animación que rota el fondo del sol.
