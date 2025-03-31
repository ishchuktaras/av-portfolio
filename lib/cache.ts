type CacheEntry<T> = {
  data: T
  expiry: number
}

class Cache {
  private cache: Map<string, CacheEntry<any>> = new Map()

  // Získání dat z cache
  get<T>(key: string): T | null {
    const entry = this.cache.get(key)

    if (!entry) {
      return null
    }

    // Kontrola expirace
    if (Date.now() > entry.expiry) {
      this.cache.delete(key)
      return null
    }

    return entry.data
  }

  // Uložení dat do cache
  set<T>(key: string, data: T, ttlSeconds = 60): void {
    const expiry = Date.now() + ttlSeconds * 1000
    this.cache.set(key, { data, expiry })
  }

  // Smazání dat z cache
  delete(key: string): void {
    this.cache.delete(key)
  }

  // Smazání všech dat z cache
  clear(): void {
    this.cache.clear()
  }

  // Smazání dat z cache podle prefixu klíče
  clearByPrefix(prefix: string): void {
    for (const key of this.cache.keys()) {
      if (key.startsWith(prefix)) {
        this.cache.delete(key)
      }
    }
  }
}

// Singleton instance
export const cache = new Cache()

