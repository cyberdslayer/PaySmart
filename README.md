# PaySmart

PaySmart is a digital payment platform designed to provide secure and efficient payment solutions. It offers features such as user-to-user transfers, merchant payments, and bank integrations.

Technologies Used:

    Frontend: Next.js
    Backend: Express
    Database: PostgreSQL
    ORM: Prisma ORM
    Styling: Tailwind CSS
    Build Tool: Turborepo
    State Management: Recoil
Why Use Recoil in PaySmart?

Recoil is a state management library for React applications that offers several advantages, making it a valuable choice for projects like PaySmart. 

Here's why I used it:
       
        User authentication: Storing user authentication tokens and user data.
        Payment history: Tracking and displaying a user's payment history.
        App settings: Storing user preferences and settings.

        Other idea to use recoil:
        Cart data: Managing items in a user's shopping cart.

Project Structure

    apps
    |   ├── merchant_app
    |   │   ├── pages
    |   │   ├── components
    |   │   ├── ... (other app-specific files)
    |   ├── user_app
    |   │   ├── pages
    |   │   ├── components
    |   │   ├── ... (other app-specific files)
    |   ├── bank_webhook_handler
    |       |---src
    |           ├── index.js
    |       
    |    
    |---packages/
    |    |---ui
    |    |---store (recoil)
    |    |---db
    |        ├── prisma
    |           ├── schema.prisma
    |           ├── migrations
    |           └── seed.js
    ├── .env    
    ├── .gitignore    
    └── README.md
    

Installation and Setup

Clone the repository:
    
    Bash

    git clone https://github.com/cyberdslayer/PaySmart

    Use code with caution.

#Install dependencies:
    
    Bash
    
    cd PaySmart
    npm install

Use code with caution.
Set up environment variables: Create a .env file and add your environment variables (e.g., database connection details, API keys).
    Run Prisma migrations:
    
    Bash

    npx prisma migrate dev

Use code with caution.

Development

Start the development server:
    
    Bash

    npm run dev

    Use code with caution.

Access the application in your browser at http://localhost:3001
