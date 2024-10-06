# PaySmart

**PaySmart** is a payment platform similar to Paytm, built to handle a variety of financial transactions like peer-to-peer (P2P) transfers, bank transfers, and wallet management. The platform focuses on secure authentication, integration with multiple banking APIs, and a scalable architecture to handle real-time transactions.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Wallet Management**: Users can load money into their wallet using bank transfers or cards.
- **Peer-to-Peer (P2P) Transfers**: Transfer money directly between users on the platform.
- **Bank Transfers**: Seamlessly transfer money from the PaySmart wallet to external bank accounts.
- **Authentication & Authorization**: Secure login and registration using JWT and session management.
- **Webhook Integration**: Handles multiple banking API integrations and webhook-based notifications for transaction success/failure.
- **Transaction History**: Track all transactions, including P2P transfers and bank withdrawals.
- **Real-Time Notifications**: Notifies users about transaction status via email and in-app notifications.
- **Admin Panel**: Admin dashboard to monitor system health and user activities.
- **Cloud Deployment**: The platform is designed for deployment on cloud services like AWS.

## Tech Stack
- **Frontend**: Next.js (for a responsive and dynamic user interface)
- **Backend**: Node.js, Express.js (for handling API requests and business logic)
- **Database**: PostgreSQL (for managing user data, transaction logs, etc.)
- **APIs**: Banking API integration for off-ramp payments
- **DevOps**: AWS, Docker (for containerization), and CI/CD for seamless deployment
- **Monorepo Tooling**: Turborepo (for managing multiple apps like user app, merchant app, and bank_webhook)
- Recoil

## Why Use Recoil in PaySmart?

Recoil is a state management library for React applications that offers several advantages, making it a valuable choice for projects like PaySmart. 

Here's why I used it:
       
        User authentication: Storing user authentication tokens and user data.
        Payment history: Tracking and displaying a user's payment history.
        App settings: Storing user preferences and settings.

        Other idea to use recoil:
        Cart data: Managing items in a user's shopping cart.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/PaySmart.git
    cd PaySmart
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the database by creating necessary tables. Refer to [Database Schema](#database-schema) for more details.

4. Set up environment variables (see [Environment Variables](#environment-variables)).

5. Run the server:
    ```bash
    npm start
    ```

## Usage

Once the server is up, you can use the PaySmart platform to register users, manage wallets, and perform financial transactions. You can use the provided API endpoints to interact with the backend or access the admin panel for managing the system.

### Example Workflow:

1. **Register a User**: Create a new account using the `/api/register` endpoint.
2. **Load Money**: Add money to the user wallet using the `/api/wallet/load` endpoint.
3. **Peer-to-Peer Transfer**: Transfer money to another user via the `/api/wallet/transfer` endpoint.
4. **Bank Transfer**: Withdraw money from the wallet to a bank account using `/api/bank/transfer`.
5. **View Transaction History**: Retrieve the transaction history from `/api/transactions`.

## Folder Structure

The PaySmart project is built using a monorepo structure with multiple apps for users, merchants, and banking webhooks.

```
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
```

- **src/app/api**: Contains the core API routes and handlers for the platform.
- **bank_webhook**: Manages the integration with banking APIs and handles incoming webhooks.
- **user_app**: The app responsible for user-facing functionalities like wallet management and P2P transfers.
- **merchant_app**: Manages merchant-related features such as handling payments and settlements.

## Database Schema

PaySmart uses PostgreSQL to manage data. Below is a simplified schema overview:

- **Users Table**: Stores user information (user_id, name, email, password, wallet balance).
- **Transactions Table**: Logs all transactions (transaction_id, from_user_id, to_user_id, amount, type, status, timestamp).
- **BankTransfers Table**: Stores information about money transfers to banks (transaction_id, user_id, bank_details, amount, status).
- **Webhooks Table**: Logs incoming webhook events from banks (event_id, payload, timestamp).

## API Endpoints

### 1. **User Registration**
   - **POST** `/api/register`
   - **Description**: Register a new user on the platform.
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "user_id": "123",
       "token": "jwt-token"
     }
     ```

### 2. **Load Money into Wallet**
   - **POST** `/api/wallet/load`
   - **Description**: Add funds to a user wallet.
   - **Request Body**:
     ```json
     {
       "amount": 1000,
       "payment_method": "bank"
     }
     ```
   - **Response**:
     ```json
     {
       "transaction_id": "txn_123",
       "status": "completed"
     }
     ```

### 3. **Peer-to-Peer Transfer**
   - **POST** `/api/wallet/transfer`
   - **Description**: Transfer money between users on the platform.
   - **Request Body**:
     ```json
     {
       "to_user_id": "456",
       "amount": 500
     }
     ```
   - **Response**:
     ```json
     {
       "transaction_id": "txn_456",
       "status": "completed"
     }
     ```

### 4. **Bank Transfer**
   - **POST** `/api/bank/transfer`
   - **Description**: Withdraw money from the wallet to an external bank account.
   - **Request Body**:
     ```json
     {
       "amount": 500,
       "bank_account": "9876543210",
       "ifsc": "ABC0123456"
     }
     ```
   - **Response**:
     ```json
     {
       "transaction_id": "txn_789",
       "status": "completed"
     }
     ```

### 5. **Transaction History**
   - **GET** `/api/transactions`
   - **Description**: Retrieve the transaction history for a user.

## Environment Variables

Create a `.env` file in the root directory and define the following variables:

```bash
PORT=4000
DATABASE_URL=postgresql://localhost:5432/paysmart
JWT_SECRET=your_jwt_secret
BANK_API_KEY=your_bank_api_key
```

## Testing

Run tests to ensure the platform functions as expected:

```bash
npm test
```

You can write unit tests and integration tests for critical features such as wallet transfers, bank integrations, and webhook handling.

## Contributing

Contributions are welcome! If you'd like to add new features or report bugs, feel free to fork the repository and create a pull request.

Access the application in your browser at http://localhost:3001
