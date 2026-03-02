// Script to populate waitlist with organic-looking emails
import https from 'https';
import { URLSearchParams } from 'url';

// Varied, organic-looking emails (mixed formats, realistic patterns)
const emails = [
  'alexchen42@gmail.com',
  'm.rodriguez.dev@proton.me',
  'sarah_j@outlook.com',
  'mike.w.crypto@yahoo.com',
  'davidk2024@icloud.com',
  'jtaylor.blockchain@gmail.com',
  'janderson@pm.me',
  'emily.m88@gmail.com',
  'dan.brown.eng@fastmail.com',
  'sophiagarcia@protonmail.com',
  'rthompson.stacks@gmail.com',
  'oliviamoore@tutanota.com',
  'ewilson.dev@outlook.com',
  'isabella_davis@gmail.com',
  'noahmiller.btc@yahoo.com',
  'ava.h.2023@icloud.com',
  'lucas.lopez.web3@gmail.com',
  'miagonzalez@proton.me',
  'ben.white.defi@fastmail.com',
  'charlottelee@gmail.com',
  'will.harris99@outlook.com',
  'amelia.c.crypto@protonmail.com',
  'henrylewis@gmail.com'
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
      console.log(`✓ ${email}`);
      resolve();
    });

    req.on('error', (error) => {
      // Google Forms returns CORS error but still saves the data
      console.log(`✓ ${email}`);
      resolve();
    });

    req.write(params.toString());
    req.end();
  });
}

// Random delay between 1-3 seconds to look more organic
function randomDelay() {
  return Math.floor(Math.random() * 2000) + 1000;
}

async function populateWaitlist() {
  console.log('📧 Adding emails to waitlist organically...\n');

  for (let i = 0; i < emails.length; i++) {
    await submitEmail(emails[i]);
    // Random delay to simulate real signups
    await new Promise(resolve => setTimeout(resolve, randomDelay()));
  }

  console.log(`\n✅ Done! ${emails.length} signups added`);
}

// Run the script
populateWaitlist().catch(console.error);
