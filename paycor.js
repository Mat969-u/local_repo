const puppeteer = require('puppeteer');

exports.handler = async (myTimer, context) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    try {
        await page.goto("https://hcm.paycor.com/authentication/signin");

        await page.type('input[name="username"]', 'matheshwaran.babu'); // Ensure this selector is correct
        await page.type('input[name="password"]', 'c8$6GAEvd'); // Ensure this selector is correct
        
        // Click the "Sign In" button
        await page.click('button.sign-in-button[type="submit"]'); // Use the appropriate selector

        await page.waitForNavigation();

        return {
            statusCode: 200,
            body: 'Form successfully submitted',
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: 'An error occurred',
        };
    } finally {
        await browser.close();
    }
};
