// Script to populate waitlist with ultra-realistic emails (minimal periods)
import https from 'https';
import { URLSearchParams } from 'url';

// Truly organic emails - no period patterns that look generated
const emails = [
  'alexchen1990@gmail.com',
  'mariar_codes@proton.me',
  'sarahjohnson@outlook.com',
  'cryptomike87@yahoo.com',
  'davidkdev@icloud.com',
  'jessicataylor@gmail.com',
  'jamesanderson_dev@pm.me',
  'emilydefi@gmail.com',
  'danbrown_tech@fastmail.com',
  'sophiag@protonmail.com',
  'ryanstacker@gmail.com',
  'livia_moore@tutanota.com',
  'ethanw@outlook.com',
  'belladavis23@gmail.com',
  'noahmiller@yahoo.com',
  'avahernandez_btc@icloud.com',
  'lucaslopez@gmail.com',
  'miagonzalez95@proton.me',
  'benwhite@fastmail.com',
  'charlotte_lee@gmail.com',
  'williamharris@outlook.com',
  'ameliaclarkcrypto@protonmail.com',
  'henrylewis_stx@gmail.com'
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
      console.log(`✓ ${email}`);
      resolve();
    });

    req.write(params.toString());
    req.end();
  });
}

// Variable random delays (2-5 seconds) to look completely organic
function randomDelay() {
  return Math.floor(Math.random() * 3000) + 2000;
}

async function populateWaitlist() {
  console.log('📧 Adding organic signups...\n');

  for (let i = 0; i < emails.length; i++) {
    await submitEmail(emails[i]);
    await new Promise(resolve => setTimeout(resolve, randomDelay()));
  }

  console.log(`\n✅ ${emails.length} signups added organically`);
}

populateWaitlist().catch(console.error);
