const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for detecting email addresses in text using SharpAPI.com
 */
class SharpApiDetectEmailsService extends SharpApiCoreService {
  /**
   * Parses the provided text for any possible emails. Might come in handy in case of processing and validating
   * big chunks of data against email addresses or f.e. if you want to detect emails in places
   * where they're not supposed to be.
   *
   * @param {string} text
   * @returns {Promise<string>} - The status URL.
   */
  async detectEmails(text) {
    const data = { content: text };
    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.CONTENT_DETECT_EMAILS.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiDetectEmailsService };