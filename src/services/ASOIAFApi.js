import ASOIAFMockApi from "./ASOIAFMockApi";

class ASOIAFapi {
  static async getHouses() {
    return ASOIAFMockApi.getHouses();
  }

  static async getCharacters() {
    return ASOIAFMockApi.getCharacters();
  }

  static async getCharacterById({ id }) {
    return ASOIAFMockApi.getCharacterById({ id });
  }
}

export default ASOIAFapi;
