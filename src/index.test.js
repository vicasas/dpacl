import { getRegions, getProvinces, getCommunes } from './index'

describe('Regions', () => {
  test('Total Regions', () => {
    const regions = getRegions()
    expect(regions.length).toEqual(16)
  })
})

describe('Provinces', () => {
  test('Total Provinces', () => {
    const provinces = getProvinces()
    expect(provinces.length).toEqual(56)
  })
})

describe('Communes', () => {
  test('Total Communes', () => {
    const communes = getCommunes()
    expect(communes.length).toEqual(346)
  })
})