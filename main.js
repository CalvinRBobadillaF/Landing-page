/*const url = 'https://rickandmortyapi.com/api/episode'
/*let content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		/*'x-rapidapi-key': '84127eda71msh36449be2a568c36p1b1f1ejsn5e85a8692e0d',
		'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'*/ /*
	}
};
async function getData(url) {
    const response = await fetch(url);
	const result = await response.json();
	return result
}



(async () => {
    try {
        const episodes = await getData(url);
        const episodeNames = episodes.results.map(episode => episode.name);
        console.log(episodeNames);

        // Obtener personajes de los episodios
        const characterUrls = episodes.results.flatMap(episode => episode.characters);
        const characterPromises = characterUrls.map(url => fetch(url).then(res => res.json()));
        const characters = await Promise.all(characterPromises);

        let view = `
        ${characters.map(character => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${character.image}" alt="${character.name}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${character.name}
                    </h3>
                </div>
            </div>`).slice(0,6).join('')}
        `;

        content.innerHTML = `texto de prueba`
    } catch (error) {
        console.error(error);
    }
})()

*/
const API = "https://rickandmortyapi.com/api";
const content = null || document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const characters = await fetchData(`${API}/character/?page=1`);

    let view = `
    ${characters.results
      .map(
        (character) =>
          `<a href="" class="block">
          <img
          src="${character.image}"
          alt="${character.name}'s image"
          class="object-cover w-full h-72 rounded-bl-3xl rounded-tr-3xl transition duration-500 hover:rounded-none"
          />
  
          <div class="flex items-center justify-center mt-4 space-x-4">
            <p class="font-medium">${character.name}</p>
      
            <span class="w-8 h-px bg-yellow-500"></span>
      
            <p class="opacity-50">${character.species} / ${character.origin.name}</p>
          </div>
        </a>
      `
      )
      .join("")}`;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();


