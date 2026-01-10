![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Email Detector API for Node.js

## 📧 Detect and extract email addresses from text — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-detect-emails.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-emails)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-detect-emails.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Email Detector** parses text content and extracts any email addresses found within. Perfect for data validation, content moderation, and contact information extraction from unstructured text.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-detect-emails
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiDetectEmailsService } = require('@sharpapi/sharpapi-node-detect-emails');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiDetectEmailsService(apiKey);

const text = 'Contact us at support@example.com or sales@company.com';

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.detectEmails(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsRQ).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiDetectEmailsService } = require('@sharpapi/sharpapi-node-detect-emails');

const service = new SharpApiDetectEmailsService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/emails-detector).

---

## Use Cases

- **Data Validation**: Extract and validate email addresses from user submissions
- **Content Moderation**: Detect emails in user-generated content for privacy compliance
- **Lead Generation**: Extract contact information from web content
- **Document Processing**: Parse emails from scanned documents (after OCR)
- **Contact Management**: Automatically extract emails from correspondence
- **Compliance**: Identify and handle PII (Personally Identifiable Information)

---

## API Endpoint

**POST** `/content/detect_emails`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsRQ)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/emails-detector)

---

## Related Packages

- [@sharpapi/sharpapi-node-detect-phones](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-phones)
- [@sharpapi/sharpapi-node-detect-urls](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-urls)
- [@sharpapi/sharpapi-node-detect-address](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-address)

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
