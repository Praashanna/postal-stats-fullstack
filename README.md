# Postal Stats - Full Stack Email Analytics

A complete full-stack application designed to work alongside [Postal MTA](https://github.com/postalserver/postal) to provide enhanced email statistics and analytics capabilities.

## 🏗️ Architecture Overview

This is a **full-stack application** consisting of two separate repositories:

- **Frontend (React/TypeScript):** [https://github.com/Praashanna/postal-stats](https://github.com/Praashanna/postal-stats)
- **Backend (Laravel API):** [https://github.com/Praashanna/postal-stats-backend](https://github.com/Praashanna/postal-stats-backend)

## 📧 What is this?

This project addresses some limitations in Postal MTA's built-in statistics by providing:

- **Enhanced Analytics** - More detailed email statistics and insights
- **Time Series Data** - Chart-ready data for opens, bounces, and delivery metrics
- **Multi-Server Management** - Manage statistics across multiple Postal installations
- **Advanced Filtering** - Filter data by domains, time periods, and custom criteria
- **CSV Export** - Export detailed reports for further analysis
- **Real-time Connection Testing** - Verify Postal database connectivity

## 🎯 Why was this created?

While [Postal MTA](https://github.com/postalserver/postal) is an excellent open-source mail delivery platform, its statistics interface has some limitations:

- Limited historical data visualization
- Basic filtering and search capabilities
- No multi-server statistics aggregation
- Limited export options for detailed analysis

This backend provides a robust API that connects directly to Postal's database to offer enhanced statistics and analytics capabilities.

## 🚀 Features

### 📊 Enhanced Statistics
- **Server Statistics** - Comprehensive stats for individual Postal servers
- **Combined Analytics** - Aggregate statistics across multiple servers
- **Bounce Analysis** - Detailed bounce statistics by domain and email
- **Open Tracking** - Email open statistics and tracking
- **Time Series Charts** - Hourly and daily chart data for trends

### 🔧 Server Management
- **Multi-Server Support** - Connect to multiple Postal installations
- **Connection Testing** - Real-time database connectivity validation
- **Server Status Management** - Enable/disable servers dynamically
- **Secure Configuration** - Encrypted password storage

### 📤 Export Capabilities
- **CSV Export** - Export bounce data and opened addresses
- **Filtered Exports** - Export data with custom filters
- **Bulk Data Access** - API endpoints for bulk data retrieval

### 🔐 Security & Production Ready
- **JWT Authentication** - Secure API access
- **Production-Safe Error Handling** - No sensitive data exposure
- **Rate Limiting** - Built-in API protection
- **Comprehensive Logging** - Detailed operation logs

## 🖥️ Frontend Setup

This backend requires the **Postal Stats Frontend** to provide a complete user interface. The frontend is a modern React application that communicates with this API backend.

**Frontend Repository:** [https://github.com/Praashanna/postal-stats](https://github.com/Praashanna/postal-stats)

### Frontend Configuration

When setting up the frontend, you'll need to configure the API base URL to point to this backend:

1. **For Development:** Edit `/public/assets/config.js` in the frontend:
   ```javascript
   const API_CONFIG = {
     BASE_URL: "http://localhost:8000/api"  // Point to your backend URL
   };
   ```

2. **For Production:** Update the same file with your production backend URL:
   ```javascript
   const API_CONFIG = {
     BASE_URL: "https://your-backend-domain.com/api"
   };
   ```

The frontend application will automatically use this configuration to connect to the API backend.

## � Complete Full-Stack Setup

To run the complete Postal Stats application, you need to set up both repositories:

### 1. Backend Setup
```bash
# Clone the backend repository
git clone https://github.com/Praashanna/postal-stats-backend.git
cd postal-stats-backend

# Install dependencies and configure
composer install
cp .env.example .env
# Edit .env with your database settings
php artisan key:generate
php artisan jwt:secret
php artisan migrate

# Start the backend server
php artisan serve
# Backend will be available at http://localhost:8000
```

### 2. Frontend Setup
```bash
# Clone the frontend repository
git clone https://github.com/Praashanna/postal-stats.git
cd postal-stats

# Configure API URL in /public/assets/config.js:
# Change BASE_URL to "http://localhost:8000/api"

# Install and start frontend (refer to frontend repository for specific instructions)
```

## �🛠️ Installation

### Prerequisites
- PHP 8.2+
- Composer
- MySQL/MariaDB
- Access to Postal MTA database(s)

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/your-username/postal-stats-backend.git
cd postal-stats-backend

# Install dependencies
composer install

# Set up environment
cp .env.example .env
# Edit .env with your database settings

# Generate application key
php artisan key:generate

# Generate JWT secret
php artisan jwt:secret

# Run migrations
php artisan migrate

# Start the development server
php artisan serve
```

## 📖 API Documentation

### Authentication
All API endpoints require JWT authentication:

```bash
# Login to get token
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password"}'

# Use token in subsequent requests
curl -H "Authorization: Bearer your_jwt_token" \
  http://localhost:8000/api/servers
```

### Key Endpoints

- **GET** `/api/servers` - List all Postal servers
- **POST** `/api/servers` - Add new Postal server
- **GET** `/api/stats/server/{id}` - Get server statistics
- **GET** `/api/stats/server/{id}/bounces` - Get bounce data
- **GET** `/api/export/server/{id}/bounces` - Export bounce data as CSV

## 🔧 CLI Tools

The backend includes powerful command-line tools for management:

```bash
# Add a new Postal server
php artisan postal:add-server

# Remove a Postal server
php artisan postal:remove-server

# Create user account
php artisan create:account
```

## ⚙️ Configuration

### Adding Postal Servers

You can add Postal servers via the API or CLI:

```bash
# Interactive CLI setup
php artisan postal:add-server

# Or specify parameters
php artisan postal:add-server \
  --name="Main Server" \
  --host="localhost" \
  --database="postal" \
  --username="postal_user" \
  --password="secure_password"
```

### Environment Variables

Key configuration options:

```bash
# Database (for this application)
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=postal_stats_backend

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_TTL=60

# CORS (for frontend)
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

## 🏢 About

This project is developed and maintained by **Praashanna** at [**No Stress Limited**](https://hostmaria.com) - a hosting and web services company focused on providing reliable email and web hosting solutions.

### Links
- **Postal MTA (Official):** [https://github.com/postalserver/postal](https://github.com/postalserver/postal)
- **Frontend Repository:** [https://github.com/Praashanna/postal-stats](https://github.com/Praashanna/postal-stats)
- **Backend Repository:** [https://github.com/Praashanna/postal-stats-backend](https://github.com/Praashanna/postal-stats-backend)
- **No Stress Limited:** [https://hostmaria.com](https://hostmaria.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is open-source software licensed under the [MIT license](LICENSE).

## 🆘 Support

If you encounter any issues or need help, open an issue on GitHub

## 🙏 Acknowledgments

- **Postal Team** - For creating the excellent [Postal MTA](https://github.com/postalserver/postal)
- **Laravel Team** - For the robust framework
- **Community Contributors** - For feedback and contributions

---

**Made with ❤️ by [Prashanna](https://github.com/Praashanna) at [No Stress Limited](https://hostmaria.com)**