import { MemoryCache } from 'memory-cache-node';

class MemoryCacheService {
    constructor(ttl = 3600, capacity = 1000000) {
        this.memoryCache = new MemoryCache(ttl, capacity);
        MemoryCacheService.instance = this;
    }

    static getInstance() {
        if (!MemoryCacheService.instance) {
            MemoryCacheService.instance = new MemoryCacheService();
        }

        return MemoryCacheService.instance;
    }

    dispose() {
        this.memoryCache.destroy();
        MemoryCacheService.instance = null;
    }

    add(key, value, timeToLiveInSecs) {
        if (timeToLiveInSecs) {
            this.memoryCache.storeExpiringItem(key, value, timeToLiveInSecs);
            return;
        }
        this.memoryCache.storePermanentItem(key, value);
    }

    addOrUpdate(key, value, timeToLiveInSecs) {
        if (this.memoryCache.hasItem(key)) {
            this.memoryCache.removeItem(key);
        }
        this.add(key, value, timeToLiveInSecs);
    }

    addOrGetExisting(key, value, timeToLiveInSecs) {
        return this.memoryCache.hasItem(key)
            ? this.memoryCache.retrieveItemValue(key)
            : this.add(key, value, timeToLiveInSecs);
    }

    contains(key) {
        return this.memoryCache.hasItem(key);
    }

    get(key) {
        return this.memoryCache.retrieveItemValue(key);
    }

    remove(key) {
        this.memoryCache.removeItem(key);
    }

    update(key, value, timeToLiveInSecs) {
        if (!this.memoryCache.hasItem(key)) {
            throw new Error("Key not found in cache");
        }

        this.add(key, value, timeToLiveInSecs);
    }

    getItemCount() {
        return this.memoryCache.getItemCount();
    }
}

export { MemoryCacheService };