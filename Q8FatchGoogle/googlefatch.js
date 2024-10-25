import fetch from 'node-fetch';

const fetchGooglePage = async () => {
    try {
        const response = await fetch('https://www.google.com');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text(); // Get HTML as text
        console.log(data); // Outputs the HTML of the Google homepage

    } catch (error) {
        console.error('Error fetching the Google page:', error);
    }
};

fetchGooglePage();
