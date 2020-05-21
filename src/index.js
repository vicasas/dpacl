const regiones = require('./db/regiones.json')
const provincias = require('./db/provincias.json')
const comunas = require('./db/comunas.json')

/**
 * Lista de Regiones de Chile
 *
 * @return  devuelve una lista de Regiones de Chile
 */
function getRegiones() {
  return regiones
}

/**
 * Lista de Provincias de Chile
 *
 * 1. Para solicitar todas las Provincias no debe enviar params
 * 2. Para solicitar Provincias por Región debe enviar un id en params
 *
 * @param {number} [id]  id de la Región de Chile
 *
 * @return {array}  devuelve una lista de las Provincias de Chile
 */
function getProvincias(id = null) {
  if (id !== null) {
    return provincias.filter((p) => p.regionId === id)
  }

  return provincias
}

/**
 * Lista de Comunas de Chile
 *
 * 1. Para solicitar todas las Comunas no debe enviar params
 * 2. Para solicitar Comunas por Provincia debe enviar un id en params
 *
 * @param {number} [id]   id de la Provincia de Chile
 *
 * @return {array}  devuelve una lista de las Comunas de Chile
 */
function getComunas(id = null) {
  if (id !== null) {
    return comunas.filter((c) => c.provinciaId === id)
  }

  return comunas
}

/**
 * Lista de Comunas de Chile
 *
 * @param {number} id   id de la Región de Chile
 *
 * @return {array}  devuelve una lista de las comunas de Chile
 */
function getComunasByRegion(id) {
  if (id !== null) {
    return comunas.filter((c) => c.regionId === id)
  }

  return 'Debe indicar un id de una Región'
}

module.exports = {
  getRegiones,
  getProvincias,
  getComunas,
  getComunasByRegion,
}
