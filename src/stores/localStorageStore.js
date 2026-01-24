import { defineStore, acceptHMRUpdate } from 'pinia'

const defaultState = {
  items: {},
}

export const useLocalStorageStore = defineStore('LocalStorageStore', {
  state: () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      try {
        defaultState.items[key] = JSON.parse(localStorage.getItem(key))
      } catch {
        defaultState.items[key] = localStorage.getItem(key)
      }
    }
    return defaultState
  },

  getters: {
    getReactive: (state) => (key) => state.items[key],
  },

  actions: {
    getItem(key) {
      const raw = localStorage.getItem(key)
      try {
        return JSON.parse(raw)
      } catch {
        return raw
      }
    },

    setItem(key, value) {
      const toStore = typeof value === 'string' ? value : JSON.stringify(value)
      localStorage.setItem(key, toStore)
      this.items[key] = value
    },

    removeItem(key) {
      localStorage.removeItem(key)
      delete this.items[key]
    },

    clear() {
      localStorage.clear()
      this.items = {}
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocalStorageStore, import.meta.hot))
}
