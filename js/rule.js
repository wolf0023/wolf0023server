fetch("json/rules.json")
    .then((response) => response.json())
    .then((json_data) => {
        // 利用規約のタイトル
        const top = document.createElement("p");
        top.className = "top";
        top.textContent = json_data.top + " -  " + json_data.lastModified;
        document.getElementById("rules").appendChild(top);

        json_data.rules.forEach((rule) => {
            // 利用規約内のセクション
            const section = document.createElement("p");
            section.className = "rule-section";
            section.textContent = rule.section;
            document.getElementById("rules").appendChild(section);

            rule.content.forEach((content) => {
                // 利用規約内のタイトル
                const title = document.createElement("p");
                title.className = "rule-title";
                title.textContent = content.title;
                document.getElementById("rules").appendChild(title);
                
                // 利用規約内の内容
                content.description.forEach((desc, index) => {
                    const description = document.createElement("p");
                    description.className = "rule-description";
                    description.textContent = `(${index + 1}) ${desc}`;
                    document.getElementById("rules").appendChild(description);
                });
            });
        });
    })
    .catch((error) => console.error('Error fetching header:', error));