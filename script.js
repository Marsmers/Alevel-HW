const PLANET_API_URL = "https://swapi.dev/api/planets/";
const body = document.getElementById("body");

// Отримуємо назви планет
fetch(PLANET_API_URL)
  .then((data) => data.json())
  .then((json) => json.results)
  .then((results) =>
    results.map((result) => {
      const div = document.createElement("div");
      div.textContent = result.name;
      document.body.appendChild(div);

      // Отримуємо назви фільмів, в яких була ця планета
      const films = result.films;

      // Створюємо список для кожної планети з назвами фільмів
      const ul = document.createElement("ul");
      div.appendChild(ul);

      films.forEach((element) => {
        fetch(element)
          .then((result) => result.json())
          .then((result) => result.title)
          .then((result) => {
            const li = document.createElement("li");
            li.textContent = result;
            ul.appendChild(li);
          });
      });

      // Створюємо кнопки для кожної карточки
      const btn = document.createElement("button");
      btn.textContent = "🔽";
      div.append(btn);

      // Додаємо обробник подій на кнопки
      btn.addEventListener("click", () => {
        // Отримуємо жителів планети
        const residents = result.residents;
        const ul = div.querySelector("ul");
        ul.innerHTML = "";

        residents.forEach((element) => {
          fetch(element)
            .then((data) => data.json())
            .then((results) => results.name)
            .then((results) => {
              const li = document.createElement("li");
              li.textContent = results;
              ul.appendChild(li);
            });
        });
      });
    })
  );
