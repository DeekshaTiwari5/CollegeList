document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const collegeTable = document.getElementById("collegeTable");
  const collegeBody = document.getElementById("collegeBody");

  let visibleCount = 20; // Number of initially visible rows
  let colleges = []; // Array to store college data

  // Function to render colleges in the table
  function renderColleges(collegesToShow) {
    collegeBody.innerHTML = "";
    collegesToShow.forEach((college) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${college.CDRank}</td>
        <td>${college.Colleges.name}</td>
        <td>${college.CoursesFees.averagePackage} - ${college.CoursesFees.highestPackage}</td>
        <td>${college.UserReviews.rating} based on ${college.UserReviews.numberOfReviews} reviews</td>
        <td>${college.Ranking}</td>
      `;
      collegeBody.appendChild(row);
    });
  }

  // Function to sort colleges by a given key
  function sortColleges(key, order) {
    colleges.sort((a, b) => {
      const aValue = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      const bValue = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];
      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
    renderColleges(colleges.slice(0, visibleCount));
  }

  // Function to filter colleges by name
  function filterCollegesByName() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredColleges = colleges.filter((college) =>
      college.Colleges.name.toLowerCase().includes(searchTerm)
    );
    renderColleges(filteredColleges.slice(0, visibleCount));
  }

  // Fetch data from data.json file
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      colleges = data; // Store the fetched data in the colleges array
      renderColleges(colleges.slice(0, visibleCount)); // Render the colleges initially
    })
    .catch((error) => console.error("Error fetching data:", error));

  // Event listeners
  searchInput.addEventListener("input", filterCollegesByName);

  collegeTable.addEventListener("click", function (event) {
    const th = event.target.closest("th");
    if (th) {
      const key = th.textContent.trim().toLowerCase().replace(/\s+/g, "");
      const order = th.classList.contains("sorted-desc") ? "asc" : "desc";
      sortColleges(key, order);
      th.classList.toggle("sorted-desc");
    }
  });

  // Infinite scroll functionality
  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Reached the bottom of the page
      visibleCount += 10; // Increase visible count
      renderColleges(colleges.slice(0, visibleCount));
    }
  });
});
