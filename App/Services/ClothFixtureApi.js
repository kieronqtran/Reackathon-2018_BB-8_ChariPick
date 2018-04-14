let clothes = require('../Fixtures/clothes.json');

export default {
  // Functions return fixtures
  getCloth: (id) => {
    return {
      ok: true,
      data: clothes.find(e => e.id === id)
    }
  },
  getClothes: () => {
    return {
      ok: true,
      data: clothes
    }
  },
  createCloth: (cloth) => {
    clothes.push({
      ...cloth,
      id: cloth[cloth.length - 1].id + 1
    })
    return {
      ok: true,
      data: cloth
    }
  },
  updateCloth: (cloth) => {
    clothes[clothes.findIndex(e => e.id === cloth.id)] = cloth
    return {
      ok: true,
      data: cloth
    }
  },
  deleteCloth: (id) => {
    clothes.splice(clothes.findIndex(e => e.id === id), 1);
  }
}
