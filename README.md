# Upward — landing

React + Vite. Cada sección de la página es un componente independiente.

## Correrlo

```bash
npm install
npm run dev      # desarrollo
npm run build    # genera /dist listo para publicar
```

## Dónde editar qué

| Quiero cambiar…                | Archivo |
|--------------------------------|---------|
| Mail y WhatsApp                | `src/config.js` |
| Links del menú                 | `src/config.js` |
| Clientes (logo, título, texto) | `src/data/clientes.json` |
| Colores, tipografía, botones   | `src/styles/global.css` |
| El orden de las secciones      | `src/App.jsx` |

Cada componente vive en `src/components/` junto a su hoja de estilos:

```
Nav                 menú y logotipo
Hero                titular + PerfilAltimetria
PerfilAltimetria    la línea de ascenso animada (firma visual)
Metodo              "no tomamos requerimientos" + comparación
Rol                 sección oscura, desarrollo + consultoría
Servicios           qué construimos
Proceso             las cinco etapas
Clientes            se arma solo desde clientes.json
Faq                 preguntas frecuentes
Contacto            formulario + links directos
Footer              pie
Contornos           curvas de nivel de fondo (compartido)
```

Los textos de cada sección están en un array arriba del componente:
para agregar un servicio, una etapa o una pregunta, sumás un objeto a esa lista.

## Imágenes

- Logotipo: `public/logo.svg`. Si el archivo no está, el menú muestra la palabra
  "Upward" tipografiada como respaldo.
- Logos de clientes: `public/clientes/`. Si un logo falta, la tarjeta muestra la
  inicial del cliente.

## Clientes

`src/data/clientes.json` es un array. Si lo dejás vacío (`[]`) la sección entera
desaparece de la página.

```json
{
  "logo": "/clientes/acme.svg",
  "titulo": "Acme",
  "descripcion": "Qué construimos y qué resolvió."
}
```

## Formulario

Hoy abre el cliente de mail del visitante con los datos cargados, así funciona sin
servidor. Para recibir los mensajes de otra forma, cambiá la función `enviar` en
`src/components/Contacto.jsx`.
