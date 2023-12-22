import axios from "axios";
import { MemoryCacheService } from "./MemoryCacheService";

const memoryCacheService = MemoryCacheService.getInstance();

class ASOIAFapi {
  static prepareResponse() {
    return {
      isError: false,
      data: null,
    };
  }

  static async isNumber(num) {
    const result = typeof num === "number";
    return result;
  }

  static async getName(url) {
    const response = this.prepareResponse();

    try {
      if (memoryCacheService.contains(url)) {
        console.log(`Fetching from cache: ${url}`);
        response.data = memoryCacheService.getById(url);
      } else {
        const result = await axios.get(url);
        response.data = result.data;
        memoryCacheService.addOrUpdate(url, result.data, 3600);
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }
    return Promise.resolve(response);
  }

  static async getHouses(p, ps) {
    let page = 1;
    let pageSize = 10;
    if (this.isNumber(p) && this.isNumber(ps)) {
      page = p;
      pageSize = ps;
    }

    const url = `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`;
    const response = this.prepareResponse();
    try {
      const result = await axios.get(url);
      response.data = result.data;
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async getCharacters(p, ps) {
    let page = 1;
    let pageSize = 10;
    if (this.isNumber(p) && this.isNumber(ps)) {
      page = p;
      pageSize = ps;
    }

    const url = `https://anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`;
    const response = this.prepareResponse();
    try {
      const result = await axios.get(url);
      response.data = result.data;
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async getCharacterById({ id }) {
    const url = `https://anapioficeandfire.com/api/characters/${id}`;
    const response = this.prepareResponse();
    try {
      if (memoryCacheService.contains(url)) {
        console.log(`Fetching from cache: ${url}`);
        response.data = memoryCacheService.getById(url);
      } else {
        const result = await axios.get(url);
        response.data = result.data;
        memoryCacheService.addOrUpdate(url, result.data, 3600);
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }
}

export default ASOIAFapi;
