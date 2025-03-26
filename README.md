# Control de Semáforo Simulador WebSocket

Este proyecto simula un sistema de control de semáforos industriales controlado desde una WebApp, usando WebSocket como medio de comunicación.

## Archivos

- `index.js`: servidor WebSocket en Node.js
- `control.html`: interfaz web que envía señales (como si fuera el celular del operador)
- `receptor.html`: semáforo receptor que reacciona a la señal

## ¿Cómo probarlo?

1. Ejecuta `index.js` con Node.js (`npm install ws` y luego `node index.js`)
2. Abre `control.html` y `receptor.html` en tu navegador
3. Al presionar botones en `control.html`, el semáforo en `receptor.html` reaccionará

## Ideal para presentaciones sin hardware físico
