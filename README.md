# StarWars Movie List App

This is a Next.js project that provides a list of Star Wars movies using GraphQL and follows the Atomic Design pattern. The project also utilizes SCSS for styling to maintain a reusable and structured design system.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

Clone the repository:
 git clone https://github.com/inder100/starwars06

Navigate to the project directory:
 cd starwars


Install dependencies:
 npm install


Running the Application
 npm run dev
 Open http://localhost:3000 in your browser to view the application.

Project Structure
The project follows the Atomic Design pattern, organizing components into atoms, molecules, organisms, templates, and pages. The SCSS styles are structured for reusability and maintainability.

.
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── pages/
├── public/
├── grapql/
│   └── queries.ts
├── styles/
│   └── global.scss
├── .babelrc
├── .gitignore
├── next.config.js
├── package.json
└── README.md

GraphQL
The application uses GraphQL to fetch data about Star Wars movies. The queries are defined in the queries directory.

Styling with SCSS
SCSS is used for styling to maintain a modular and reusable design system. The styles are organized into atoms, molecules, organisms, and templates.

Contributing
Feel free to contribute to the project by opening issues or submitting pull requests.
