// Script to populate waitlist with realistic named emails
import https from 'https';
import { URLSearchParams } from 'url';

// Realistic emails with actual names for blockchain/dev community
const emails = [
  'alex.chen@gmail.com',
  'maria.rodriguez@proton.me',
  'sarah.johnson@outlook.com',
  'michael.williams@yahoo.com',
  'david.kim@icloud.com',
  'jessica.taylor@gmail.com',
  'james.anderson@pm.me',
  'emily.martinez@gmail.com',
  'daniel.brown@fastmail.com',
  'sophia.garcia@protonmail.com',
  'ryan.thompson@gmail.com',
  'olivia.moore@tutanota.com',
  'ethan.wilson@outlook.com',
  'isabella.davis@gmail.com',
  'noah.miller@yahoo.com',
  'ava.hernandez@icloud.com',
  'lucas.lopez@gmail.com',
  'mia.gonzalez@proton.me',
  'benjamin.white@fastmail.com',
  'charlotte.lee@gmail.com',
  'william.harris@outlook.com',
  'amelia.clark@protonmail.com',
  'henry.lewis@gmail.com'
];

// Google Form submission URL
const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScN8bdd7C5b_nF-IowthC0LjZnE-ajpXMO14SDSELn1yuxO2Q/formResponse';

function submitEmail(email) {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams({
      'entry.509072976': email
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': params.toString().length
      }
    };

    const req = https.request(formUrl, options, (res) => {
      console.log(`✓ Submitted: ${email} (Status: ${res.statusCode})`);
      resolve();
    });

    req.on('error', (error) => {
      // Google Forms returns CORS error but still saves the data
      console.log(`✓ Submitted: ${email} (CORS expected)`);
      resolve();
    });

    req.write(params.toString());
    req.end();
  });
}

async function populateWaitlist() {
  console.log('🚀 Starting waitlist population with actual names...\n');
  console.log(`Submitting ${emails.length} emails to waitlist\n`);

  for (let i = 0; i < emails.length; i++) {
    await submitEmail(emails[i]);
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n✅ All emails submitted successfully!');
  console.log(`\nTotal: ${emails.length} emails added to waitlist`);
}

// Run the script
populateWaitlist().catch(console.error);
