import axios from "axios";

class ASOIAFapi {
  static prepareResponse() {
    return {
      isError: false,
      data: null,
    };
  }

  static async getHouses(page, pageSize) {
    const url = `https://anapioficeandfire.com/api/houses?page=${page}&pageSize-${pageSize}`;
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

  // static async getCharacters() {
  //   const response = prepareResponse();

  //   try {
  //     const mockDb = getMockDb();
  //     response.data = mockDb.character;
  //   } catch (error) {
  //     response.isError = true;
  //     response.data = error;
  //   }

  //   return response;
  // }

  // static async getCharacterById({ id }) {
  //   const response = prepareResponse();

  //   try {
  //     const mockDb = getMockDb();

  //     for (let i = 0; i < mockDb.character.length; i++) {
  //       const character = mockDb.character[i];

  //       if (character.id === id) {
  //         response.data = character;
  //         break;
  //       }
  //     }
  //   } catch (error) {
  //     response.isError = true;
  //     response.data = error;
  //   }

  //   return response;
  // }
}

export default ASOIAFapi;
