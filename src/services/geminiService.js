// geminiService.js

/**
 * Google Gemini AI API Integration
 *
 * This service provides functions to analyze images and videos using the Google Gemini AI API.
 */

const axios = require('axios');

const GEMINI_API_URL = 'https://api.gemini.google.com/v1';
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

/**
 * Analyze image using Google Gemini AI API.
 *
 * @param {string} imagePath - The path of the image to analyze.
 * @returns {Promise} - Promise representing the analysis results.
 */
async function analyzeImage(imagePath) {
    try {
        const response = await axios.post(`${GEMINI_API_URL}/analyze/image`, {
            imagePath
        }, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error analyzing image:', error);
        throw error;
    }
}

/**
 * Analyze video using Google Gemini AI API.
 *
 * @param {string} videoPath - The path of the video to analyze.
 * @returns {Promise} - Promise representing the analysis results.
 */
async function analyzeVideo(videoPath) {
    try {
        const response = await axios.post(`${GEMINI_API_URL}/analyze/video`, {
            videoPath
        }, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error analyzing video:', error);
        throw error;
    }
}

module.exports = { analyzeImage, analyzeVideo };