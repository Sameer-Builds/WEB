
    const apiKey = "580874fbe61b656fa2669f00dfac51f0";

    document.getElementById("searchBtn").onclick = async () => {
      const city = document.getElementById("cityInput").value.trim();
      if (!city) return alert("Please enter a city name!");

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();

        if (res.ok) {
          const { name, sys, main, weather, wind } = data;
          document.getElementById("cityName").innerHTML = `${name}, ${sys.country}`;
          document.getElementById("temp").innerHTML = `${Math.round(main.temp)}°C`;
          document.getElementById("condition").innerHTML = weather[0].main;
          document.getElementById("humidity").innerHTML = `${main.humidity}%`;
          document.getElementById("wind").innerHTML = `${wind.speed} km/h`;
          document.getElementById("dateTime").innerHTML = new Date().toLocaleString();
        } else {
          alert("City not found!");
        }
      } catch {
        alert("Something went wrong. Try again!");
      }
    };

