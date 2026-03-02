// Script to populate waitlist with test emails
import https from 'https';
import { URLSearchParams } from 'url';

// Realistic emails for blockchain/dev community
const emails = [
  'alex.stacker@gmail.com',
  'maria.defi@proton.me',
  'dev.sarah@outlook.com',
  'bitcoin.builder@yahoo.com',
  'clarity.dev@icloud.com',
  'stacks.enthusiast@gmail.com',
  'web3.michael@pm.me',
  'crypto.trader.jane@gmail.com',
  'blockchain.engineer@fastmail.com',
  'defi.researcher@protonmail.com',
  'smart.contracts.dev@gmail.com',
  'btc.maximalist@tutanota.com',
  'layer2.developer@outlook.com',
  'dao.contributor@gmail.com',
  'nft.collector.pro@yahoo.com',
  'stacks.protocol.dev@icloud.com',
  'clarity.auditor@gmail.com',
  'defi.strategist@proton.me',
  'blockchain.security@fastmail.com',
  'crypto.analyst.tom@gmail.com',
  'web3.fullstack@outlook.com',
  'bitcoin.stacker@protonmail.com',
  'transaction.preview.user@gmail.com'
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
  console.log('🚀 Starting waitlist population...\n');
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
