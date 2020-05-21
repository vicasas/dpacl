<h1 align="center">División Político Administrativa de Chile (DPA)</h1>
<div align="center">
  <sub>Created by <a href="https://github.com/vicasas">Víctor Casas</a>.</sub>
</div>
<div align="center">
  <sub>Hecho con ❤ para LATAM</sub>
</div>

<br />

Sabemos que es difícil cuando necesitamos crear un formulario en donde la entrada de datos son las Comunas de Chile, ya sea por la disponibilización de la información, el tiempo invertido, entre otros... Por eso te queremos ayudar para así obtener de una forma fácil la División Político Administrativa de Chile.

🔔 Las 16 Regiones, las 56 Provincias y las 346 Comunasde Chile.

> Los ids de los datos no representan los códigos oficial de los datos, es solo una guía que se usa para hacer la relaciones entre los datos.

## Quick Start

Es muy fácil de comenzar a usar DPACL, solo debes seguir los siguientes pasos para instalar el `package` en tu proyecto.

```bash
npm install dpacl
```

## Use

```javascript
import { getRegiones } from 'dpacl'

getRegiones()

// exit
[
  {
    "id": 1,
    "name": "Arica y Parinacota",
    "capital": "Arica",
    "description": "Región de Arica y Parinacota"
  },
  ...
]
```

## Funtions

DPACL contiene las siguientes funciones para ser usadas.

### getRegiones()

Esta `function` no recibe parámetros, cuando se llama devuelve una lista de las Regiones de Chile.

### getProvincias()

Esta `function` se puede usar sin o con parámetros, cuando se llama devuelve una lista de las Provincias de Chile.

* `getProvincias()`: Devuelve una lista de todas las Provincias.
* `getProvincias(id)`: Devuelve una lista de todas las Provincias de una Región en particular.

### getComunas()

Esta `function` se puede usar sin o con parámetros, cuando se llama devuelve una lista de las Comunas de Chile.

* `getComunas()`: Devuelve una lista de todas las Comunas.
* `getComunas(id)`: Devuelve una lista de todas las Comunas de una Provincia en particular.

💡 Lo anterior es para su uso en formato de cascada, si necesita solo recuperar las comunas mediante una Región debe usar `getComunasByRegion()`.

## Roadmap

¿Que es lo próximo que se viene?

🚀 Queremos lograr disponibilizar los datos en una `api` para que los
desarrolladores puedan consumir los datos mediante una solicitud `HTTP`.

¿Te animas a contribuir con nosotros? 🙌.

## Contributing

¿Te gusta DPACL? Te invitamos a [colaborar con nosotros](./CONTRIBUTING.md) ❤😍🎉.

## Changelog

Para ver lo que a cambiado visita nuestro [CHANGELOG.md](./CHANGELOG.md)

## License

DPACL is [MIT Licensed](./LICENSE) 😁.
