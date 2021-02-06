import regions from './db/regions.json'
import provinces from './db/provinces.json'
import communes from './db/communes.json'

/**
 * Lista de Regiones de Chile
 *
 * @return  devuelve una lista de Regiones de Chile
 */
export const getRegions = () => regions

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
export const getProvinces = (id = null) => {
  if (id && typeof id !== 'number') {
    throw new Error('A type number value was expected')
  }

  return id !== null
    ? provinces.filter((province) => province.regionId === id)
    : provinces
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
export const getCommunes = (id = null) => {
  if (id && typeof id !== 'number') {
    throw new Error('A type number value was expected')
  }

  return id !== null
    ? communes.filter((commune) => commune.provinciaId === id)
    : communes
}

/**
 * Lista de Comunas de Chile
 *
 * @param {number} id   id de la Región de Chile
 *
 * @return {array}  devuelve una lista de las comunas de Chile
 */
export const getCommunesByRegion = (id = null) => {
  if (!id || typeof id !== 'number') {
    throw new Error('A type number value was expected')
  }

  return communes.filter((commune) => commune.regionId === id)
}
