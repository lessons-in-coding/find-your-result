const students = [
  {
    name: "ယမင်း ခင်",
    results: [
      { subject: "Class Activities", score: 100, grade: "A" },
      { subject: "Module Projects", score: 35, grade: "C" },
      { subject: "Module Challenges", score: 85, grade: "A" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "ဆန္ဒာဓိက",
    results: [
      { subject: "Class Activities", score: 100, grade: "A" },
      { subject: "Module Projects", score: 85, grade: "A" },
      { subject: "Module Challenges", score: 75, grade: "B" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "ချယ်ရီမင်း",
    results: [
      { subject: "Class Activities", score: 78, grade: "A" },
      { subject: "Module Projects", score: 54, grade: "C" },
      { subject: "Module Challenges", score: 80, grade: "A" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "အိစန္ဒာ",
    results: [
      { subject: "Class Activities", score: 75, grade: "B" },
      { subject: "Module Projects", score: 57, grade: "C" },
      { subject: "Module Challenges", score: 59, grade: "C" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "ခေမာသိရီ",
    results: [
      { subject: "Class Activities", score: 88, grade: "A" },
      { subject: "Module Projects", score: 70, grade: "C" },
      { subject: "Module Challenges", score: 69, grade: "C" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "ပညာဇောတ",
    results: [
      { subject: "Class Activities", score: 100, grade: "A" },
      { subject: "Module Projects", score: 70, grade: "C" },
      { subject: "Module Challenges", score: 85, grade: "B" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "ပညောဘာသ",
    results: [
      { subject: "Class Activities", score: 50, grade: "C" },
      { subject: "Module Projects", score: 50, grade: "C" },
      { subject: "Module Challenges", score: 50, grade: "C" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "ဇင်ကို",
    results: [
      { subject: "Class Activities", score: 50, grade: "C" },
      { subject: "Module Projects", score: 50, grade: "C" },
      { subject: "Module Challenges", score: 50, grade: "C" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "ခိုင်သဇင်",
    results: [
      { subject: "Class Activities", score: 80, grade: "A" },
      { subject: "Module Projects", score: 50, grade: "C" },
      { subject: "Module Challenges", score: 50, grade: "C" },
      { subject: "Final Project", score: 0, grade: "-" },
    ],
  },
  {
    name: "တေဇောဘာသ",
    results: [
      { subject: "Class Activities", score: 100, grade: "A" },
      { subject: "Module Projects", score: 93, grade: "A" },
      { subject: "Module Challenges", score: 80, grade: "A" },
      { subject: "Final Project", score: 0, grade: "-" },
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
        "မင်္ဂလာပါ! အခုလို ကြိုးစားမူအတွက် ဂုဏ်ယူပါတယ်။ အကျိုးပြုလုပ်ငန်းများ ဆက်လက်လုပ်ဆောင်နိုင်ပါစေ။";
      resultCard.appendChild(congratsMessage);

      resultsContainer.appendChild(resultCard);
    }
  });
}
