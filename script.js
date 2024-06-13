const students = [
  {
    name: "ယမင်းခင်",
    results: [
      { subject: "Class Activities", score: 100, grade: "A" },
      { subject: "Module Projects", score: 35, grade: "C" },
      { subject: "Module Challenges", score: 85, grade: "A" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ဆန္ဒာဓိက",
    results: [
      { subject: "Class Activities", score: 95, grade: "A" },
      { subject: "Module Projects", score: 85, grade: "A" },
      { subject: "Module Challenges", score: 75, grade: "B" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ချယ်ရီမင်း",
    results: [
      { subject: "Class Activities", score: 78, grade: "A" },
      { subject: "Module Projects", score: 54, grade: "C" },
      { subject: "Module Challenges", score: 80, grade: "A" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "အိစန္ဒာ",
    results: [
      { subject: "Class Activities", score: 75, grade: "B" },
      { subject: "Module Projects", score: 57, grade: "C" },
      { subject: "Module Challenges", score: 59, grade: "C" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ခေမာသိရီ",
    results: [
      { subject: "Class Activities", score: 88, grade: "A" },
      { subject: "Module Projects", score: 70, grade: "C" },
      { subject: "Module Challenges", score: 69, grade: "C" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ပညာဇောတ",
    results: [
      { subject: "Class Activities", score: 100, grade: "A" },
      { subject: "Module Projects", score: 70, grade: "C" },
      { subject: "Module Challenges", score: 85, grade: "B" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ပညောဘာသ",
    results: [
      { subject: "Class Activities", score: 50, grade: "C" },
      { subject: "Module Projects", score: 50, grade: "C" },
      { subject: "Module Challenges", score: 50, grade: "C" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ခိုင်သဇင်",
    results: [
      { subject: "Class Activities", score: 80, grade: "A" },
      { subject: "Module Projects", score: 50, grade: "C" },
      { subject: "Module Challenges", score: 50, grade: "C" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "တေဇောဘာသ",
    results: [
      { subject: "Class Activities", score: 100, grade: "A" },
      { subject: "Module Projects", score: 93, grade: "A" },
      { subject: "Module Challenges", score: 80, grade: "A" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "အဂ္ဂဉာဏ",
    results: [
      { subject: "Class Activities", score: 95, grade: "A" },
      { subject: "Module Projects", score: 93, grade: "A" },
      { subject: "Module Challenges", score: 80, grade: "A" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ဇဝန",
    results: [
      { subject: "Class Activities", score: 45, grade: "C" },
      { subject: "Module Projects", score: 43, grade: "C" },
      { subject: "Module Challenges", score: 40, grade: "C" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "အင်္ကုရ",
    results: [
      { subject: "Class Activities", score: 55, grade: "C" },
      { subject: "Module Projects", score: 55, grade: "C" },
      { subject: "Module Challenges", score: 50, grade: "C" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "နှင်းနုလှိုင်",
    results: [
      { subject: "Class Activities", score: 55, grade: "C" },
      { subject: "Module Projects", score: 50, grade: "C" },
      { subject: "Module Challenges", score: 50, grade: "C" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ဝိုင်းရွှေရည်",
    results: [
      { subject: "Class Activities", score: 0, grade: "E" },
      { subject: "Module Projects", score: 0, grade: "E" },
      { subject: "Module Challenges", score: 0, grade: "E" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ငြိမ်းရွှေရည်",
    results: [
      { subject: "Class Activities", score: 0, grade: "E" },
      { subject: "Module Projects", score: 0, grade: "E" },
      { subject: "Module Challenges", score: 0, grade: "E" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ရွှေရည်သိမ့်",
    results: [
      { subject: "Class Activities", score: 35, grade: "D" },
      { subject: "Module Projects", score: 30, grade: "D" },
      { subject: "Module Challenges", score: 30, grade: "D" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ဆုထက်သာ",
    results: [
      { subject: "Class Activities", score: 0, grade: "E" },
      { subject: "Module Projects", score: 0, grade: "E" },
      { subject: "Module Challenges", score: 0, grade: "E" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "စိန်မင်း",
    results: [
      { subject: "Class Activities", score: 45, grade: "D" },
      { subject: "Module Projects", score: 40, grade: "D" },
      { subject: "Module Challenges", score: 40, grade: "D" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "သူရဖြိုး",
    results: [
      { subject: "Class Activities", score: 45, grade: "D" },
      { subject: "Module Projects", score: 40, grade: "D" },
      { subject: "Module Challenges", score: 40, grade: "D" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ဇင်ကို",
    results: [
      { subject: "Class Activities", score: 35, grade: "D" },
      { subject: "Module Projects", score: 30, grade: "D" },
      { subject: "Module Challenges", score: 30, grade: "D" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
  {
    name: "ဥက္ကာမိုး",
    results: [
      { subject: "Class Activities", score: 0, grade: "E" },
      { subject: "Module Projects", score: 0, grade: "E" },
      { subject: "Module Challenges", score: 0, grade: "E" },
      { subject: "Final Project", score: 50, grade: "-" },
    ],
  },
];

function showSuggestions() {
  const input = document.getElementById("searchBar").value.toUpperCase();
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  if (input.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  const matchingStudents = students.filter((student) =>
    student.name.toUpperCase().includes(input)
  );

  if (matchingStudents.length > 0) {
    suggestions.style.display = "block";
  } else {
    suggestions.style.display = "none";
  }

  matchingStudents.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = student.name;
    li.onclick = () => {
      document.getElementById("searchBar").value = student.name;
      suggestions.style.display = "none";
      filterResults();
    };
    suggestions.appendChild(li);
  });
}

function filterResults() {
  const input = document.getElementById("searchBar").value.toUpperCase();
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  students.forEach((student) => {
    if (student.name.toUpperCase() === input) {
      const resultCard = document.createElement("div");
      resultCard.className = "result-card";
      resultCard.style.display = "block"; // Show the result card

      const studentName = document.createElement("h2");
      studentName.textContent = student.name;
      resultCard.appendChild(studentName);

      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");

      const headerRow = document.createElement("tr");
      ["Subject", "Score", "Grade"].forEach((text) => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
      });

      thead.appendChild(headerRow);
      table.appendChild(thead);

      student.results.forEach((result) => {
        const row = document.createElement("tr");
        Object.values(result).forEach((value) => {
          const td = document.createElement("td");
          td.textContent = value;
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });

      table.appendChild(tbody);
      resultCard.appendChild(table);

      const congratsMessage = document.createElement("p");
      congratsMessage.className = "congratulations-message";
      congratsMessage.textContent =
        "စုစုပေါင်းရမှတ်ကိုတည် ၄၀၀-နဲ့စား၊ ၁၀၀-နဲ့မြှောက်၊ ရလာတဲ့အဖြက 75%-အထက်ဆိုယင် အောင်ပါတယ်! ပျော်ရွှင်ချမ်းမြေ့ပါစေ!";
      resultCard.appendChild(congratsMessage);

      resultsContainer.appendChild(resultCard);

      triggerFireworks();
    }
  });
}

function triggerFireworks() {
  const fireworksContainer = document.getElementById("fireworks-container");
  const fireworksSound = document.getElementById("fireworksSound");
  fireworksSound.play();

  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
  ];

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      fireworksContainer.appendChild(firework);

      const size = Math.random() * 50 + 50;
      firework.style.width = `${size}px`;
      firework.style.height = `${size}px`;
      firework.style.left = `${Math.random() * 100}%`;
      firework.style.top = `${Math.random() * 100}%`;

      firework.animate(
        [
          { transform: "scale(0)", opacity: 1 },
          { transform: "scale(3)", opacity: 0 },
        ],
        {
          duration: 1000,
          iterations: 1,
          easing: "ease-out",
        }
      );

      setTimeout(() => {
        firework.remove();
      }, 1000);
    }, i * 200);
  }
}
