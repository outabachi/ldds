// On récupère toutes les pâtisseries depuis le backend
        fetch("http://localhost:4000/api/stuff")
            .then(res => res.json())
            .then(data => {
                const gallery = document.getElementById("gallery");

                data.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "card";

                    div.innerHTML = `
                        <h3>${item.title}</h3>
                        <img src="http://localhost:4000/api/image/${item.imageId}" alt="${item.title}">
                    `;

                    gallery.appendChild(div);
                });
            })
            .catch(err => console.error(err));