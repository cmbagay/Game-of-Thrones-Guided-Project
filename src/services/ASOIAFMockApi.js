import { nanoid } from "nanoid";

class ASOIAFMockApi {
  static MOCK_DB = {
    houses: [
      {
        id: 0,
        url: "https://anapioficeandfire.com/api/houses/1",
        name: "House Algood",
        region: "The Westerlands",
        coatOfArms:
          "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
        words: "",
        titles: [""],
        seats: [""],
        currentLord: "",
        heir: "",
        overlord: "https://anapioficeandfire.com/api/houses/229",
        founded: "",
        founder: "",
        diedOut: "",
        ancestralWeapons: [""],
        cadetBranches: [],
        swornMembers: [],
      },
    ],
    character: [
      {
        id: 1,
        url: "https://anapioficeandfire.com/api/characters/1",
        name: "",
        gender: "Female",
        culture: "Braavosi",
        born: "",
        died: "",
        titles: [""],
        aliases: ["The Daughter of the Dusk"],
        father: "",
        mother: "",
        spouse: "",
        allegiances: [],
        books: ["https://anapioficeandfire.com/api/books/5"],
        povBooks: [],
        tvSeries: [""],
        playedBy: [""],
      },
    ],

    pagination: [
      {
        page: 1,
        pageSize: 10,
      },
    ],
  };
  static MOCK_DB_KEY = "MOCK_DB";

  static prepareResponse() {
    return {
      isError: false,
      data: null,
    };
  }

  static wait(duration = 1000) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  static getMockDb() {
    let mockDb = localStorage.getItem(ASOIAFMockApi.MOCK_DB_KEY);

    if (!mockDb) {
      localStorage.setItem(
        ASOIAFMockApi.MOCK_DB_KEY,
        JSON.stringify(ASOIAFMockApi.MOCK_DB)
      );
      mockDb = ASOIAFMockApi.MOCK_DB;
    } else {
      mockDb = JSON.parse(mockDb);
    }

    return mockDb;
  }

  static setMockDb(mockDb) {
    localStorage.setItem(ASOIAFMockApi.MOCK_DB_KEY, JSON.stringify(mockDb));
  }

  static async getHouses() {
    await ASOIAFMockApi.wait();

    const response = ASOIAFMockApi.prepareResponse();

    try {
      const mockDb = ASOIAFMockApi.getMockDb();
      response.data = mockDb.houses;
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async getCharacters() {
    await ASOIAFMockApi.wait();

    const response = ASOIAFMockApi.prepareResponse();

    try {
      const mockDb = ASOIAFMockApi.getMockDb();
      response.data = mockDb.character;
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async getCharacterById({ id }) {
    await ASOIAFMockApi.wait();

    const response = ASOIAFMockApi.prepareResponse();

    try {
      const mockDb = ASOIAFMockApi.getMockDb();

      for (let i = 0; i < mockDb.character.length; i++) {
        const character = mockDb.character[i];

        if (character.id === id) {
          response.data = character;
          break;
        }
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }
}

export default ASOIAFMockApi;
