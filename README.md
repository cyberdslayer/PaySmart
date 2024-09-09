# PaySmart

PaySmart is a digital payment platform designed to provide secure and efficient payment solutions. It offers features such as user-to-user transfers, merchant payments, and bank integrations.

Technologies Used:

    Frontend: Next.js
    Backend: Express
    Database: PostgreSQL
    ORM: Prisma ORM
    Styling: Tailwind CSS
    Build Tool: Turborepo

Project Structure

    ├── api 
    │   ├── routes    
    │   ├── controllers    
    │   └── models    
    ├── components    
    ├── pages    
    ├── public  
    |---packages/db
    |    ├── prisma
    |       ├── schema.prisma
    |       ├── migrations
    |       └── seed.js
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
