# Filtering-on-Reddit's-API

## Description

This project combines Flask as the backend framework with NextJS and Tailwind CSS as the frontend components. Flask handles data cleaning and provides three APIs for fetching Hot, New, and Top posts. The APIs selectively include only the author and image URL, filtering out irrelevant fields. NextJS communicates with these APIs and presents the results in a simplified manner using Tailwind CSS.

## Features

- Three APIs: Hot, New, and Top posts, created and managed by Flask.
- Selective Data Inclusion: APIs include only the author and image URL, filtering out unnecessary fields.
- Frontend Communication: NextJS communicates with the APIs to fetch and display the data.
- Simplified UI: The frontend design is implemented using Tailwind CSS for a clean and intuitive user interface.
- Additional Features:
  1. Ability to retrieve hot and top posts for enhanced browsing options.
  2. Key-based authentication for secure access to protected resources.
  3. Exclusion of videos and other unnecessary fields for optimized content delivery.

## Screenshots and Demo

For screenshots and a demo of the project, please refer to the following link: [Google Drive - Screenshots and Demo](https://drive.google.com/drive/folders/1tydyPCH7Gk7DQozG3-oqtGOm2iOJBZ_3?usp=share_link)

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kotharitanishka/Filtering-on-Reddit-s-API.git
   ```

2. Configure the backend:

   - Adjust the Flask configuration settings as needed, such as database connections and API endpoints.

3. Configure the frontend:

   - Customize the NextJS and Tailwind CSS configurations, if desired, for styling and UI enhancements.

4. Build and run the project:

   ```bash
    python -m flask --app main run 
   ```

5. Access the project:

   Open your web browser and navigate to `http://localhost:3000` to explore and interact with the application.


## Contribution

Contributions to this project are welcome! If you have any suggestions, bug reports, or improvements, please submit a pull request or open an issue in the project repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For further questions or inquiries, please contact the project maintainer at tanishka.k.kothari@gmail.com.
