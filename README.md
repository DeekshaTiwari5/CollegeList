College Table Web App
This is a simple web application that displays college data in a table format with infinite scroll functionality. It fetches college data from a JSON file and dynamically renders it in the table.

Features
Displays college data including CD Rank, name, course fees, user reviews, and ranking.
Infinite scroll functionality to load more colleges as the user scrolls down.
Featured flag for colleges with a truthy featured value.
Usage
Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/college-table-web-app.git
Navigate to the project directory:
bash
Copy code
cd college-table-web-app
Open the index.html file in a web browser.

Scroll down to see more colleges being loaded dynamically.

Data Format
The college data is provided in a JSON format and should be stored in a file named data.json. Here's an example of the JSON data format:

json
Copy code
[
  {
    "CDRank": "#1",
    "Colleges": {
      "name": "Harvard University",
      "featured": true,
      ...
    },
    ...
  },
  ...
]
Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.
