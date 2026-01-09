![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Email Detector API for Node.js

## 🎯 Detect and extract email addresses from text — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-detect-emails.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-emails)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-detect-emails.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Email Detector** parses text content and extracts any email addresses found within. Perfect for data validation, content moderation, and lead extraction from unstructured text.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [License](#license)

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

const text = `
For support inquiries, please contact support@example.com or sales@example.com.
You can also reach our CEO at john.doe@company.org for partnership opportunities.
`;

async function detectEmails() {
  try {
    // Submit detection job
    const statusUrl = await service.detectEmails(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Detected emails:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

detectEmails();
```

---

## API Documentation

### Methods

#### `detectEmails(text: string): Promise<string>`

Detects and extracts email addresses from the provided text.

**Parameters:**
- `text` (string, required): The text content to scan for email addresses

**Returns:**
- Promise<string>: Status URL for polling the job result

**Example:**
```javascript
const statusUrl = await service.detectEmails(textWithEmails);
const result = await service.fetchResults(statusUrl);
```

### Response Format

The API returns detected emails in a structured format:

```json
{
  "emails": [
    {
      "email": "support@example.com",
      "confidence": 1.0,
      "domain": "example.com",
      "username": "support"
    },
    {
      "email": "john.doe@company.org",
      "confidence": 1.0,
      "domain": "company.org",
      "username": "john.doe"
    }
  ]
}
```

---

## Examples

### Basic Email Detection

```javascript
const { SharpApiDetectEmailsService } = require('@sharpapi/sharpapi-node-detect-emails');

const service = new SharpApiDetectEmailsService(process.env.SHARP_API_KEY);

const sampleText = `
Contact our team at hello@startup.io or reach out to
the marketing department at marketing@startup.io.
`;

service.detectEmails(sampleText)
  .then(statusUrl => service.fetchResults(statusUrl))
  .then(result => {
    const emails = result.getResultJson();
    console.log(`Found ${emails.length} email addresses:`);
    emails.forEach((email, index) => {
      console.log(`${index + 1}. ${email.email}`);
    });
  })
  .catch(error => console.error('Detection failed:', error));
```

### Custom Polling Configuration

```javascript
const service = new SharpApiDetectEmailsService(process.env.SHARP_API_KEY);

// Customize polling behavior
service.setApiJobStatusPollingInterval(5);  // Poll every 5 seconds
service.setApiJobStatusPollingWait(120);    // Wait up to 2 minutes

const statusUrl = await service.detectEmails(text);
const result = await service.fetchResults(statusUrl);
```

---

## Use Cases

- **Lead Generation**: Extract email addresses from web pages, documents, or social media
- **Data Validation**: Verify and extract emails from user-submitted forms
- **Content Moderation**: Detect email addresses in user-generated content
- **Email Harvesting**: Collect contact information from business cards or documents
- **Spam Detection**: Identify suspicious email patterns in text
- **Contact Management**: Parse unstructured text to build contact databases

---

## API Endpoint

**POST** `/content/detect_emails`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVW)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/emails-detector)

---

## Related Packages

- [@sharpapi/sharpapi-node-detect-phones](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-phones) - Phone number detection
- [@sharpapi/sharpapi-node-detect-urls](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-urls) - URL detection
- [@sharpapi/sharpapi-node-detect-address](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-address) - Address detection
- [@sharpapi/sharpapi-node-client](https://www.npmjs.com/package/@sharpapi/sharpapi-node-client) - Full SharpAPI SDK

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
