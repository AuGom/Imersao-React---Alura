import config from "../config";

const URL_CATEGORIAS = `${config.URL_BACK}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error("Nao pegou os dados.");
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIAS}`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error("Nao pegou os dados.");
  });
}

export default { getAllWithVideos, getAll };
