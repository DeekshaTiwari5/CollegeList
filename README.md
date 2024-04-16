# College Table Web App

This is a simple web application that displays college data in a table format with infinite scroll functionality. It fetches college data from a JSON file and dynamically renders it in the table.

## Features

- Displays college data including CD Rank, name, course fees, user reviews, and ranking.
- Infinite scroll functionality to load more colleges as the user scrolls down.
- Featured flag for colleges with a truthy featured value.

## Usage

1. Clone the repository to your local machine:

git clone https://github.com/your-username/college-table-web-app.git

css
Copy code

2. Navigate to the project directory:

cd college-table-web-app

css
Copy code

3. Open the `index.html` file in a web browser.

4. Scroll down to see more colleges being loaded dynamically.

## Data Format

The college data is provided in a JSON format and should be stored in a file named `data.json`. Here's an example of the JSON data format:

```json
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
## Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.
