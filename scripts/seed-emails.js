#!/usr/bin/env node

/**
 * Email Seeder Script
 *
 * Usage:
 * node scripts/seed-emails.js [count] [clear]
 *
 * Examples:
 * node scripts/seed-emails.js           # Seed 25 emails (default)
 * node scripts/seed-emails.js 50        # Seed 50 emails
 * node scripts/seed-emails.js 30 clear  # Clear existing and seed 30 emails
 */

// This script requires you to set up your environment variables
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables');
  console.log('Make sure you have NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fake email data (same as in the TypeScript file)
const FAKE_EMAILS = [
  'sarah.johnson@gmail.com',
  'mike.chen@yahoo.com',
  'alexandra.rodriguez@outlook.com',
  'david.kim@protonmail.com',
  'jessica.thompson@gmail.com',
  'ryan.patel@hotmail.com',
  'emily.wang@icloud.com',
  'carlos.martinez@gmail.com',
  'lisa.anderson@yahoo.com',
  'james.taylor@outlook.com',
  'maria.garcia@gmail.com',
  'kevin.lee@protonmail.com',
  'amanda.brown@hotmail.com',
  'daniel.wilson@gmail.com',
  'sophia.davis@icloud.com',
  'michael.jones@yahoo.com',
  'rachel.miller@outlook.com',
  'christopher.moore@gmail.com',
  'nicole.jackson@protonmail.com',
  'brandon.white@hotmail.com',
  'ashley.harris@gmail.com',
  'jonathan.martin@yahoo.com',
  'stephanie.clark@icloud.com',
  'matthew.lewis@outlook.com',
  'laura.walker@gmail.com',
  'andrew.hall@protonmail.com',
  'megan.young@hotmail.com',
  'joshua.king@gmail.com',
  'samantha.wright@yahoo.com',
  'tyler.green@outlook.com',
  'brittany.adams@gmail.com',
  'jordan.baker@icloud.com',
  'taylor.nelson@protonmail.com',
  'kayla.carter@hotmail.com',
  'austin.mitchell@gmail.com',
  'chloe.perez@yahoo.com',
  'mason.roberts@outlook.com',
  'madison.turner@gmail.com',
  'logan.phillips@protonmail.com',
  'grace.campbell@hotmail.com'
];

const SOURCES = [
  'landing_page',
  'landing_page',
  'landing_page',
  'social_media',
  'referral',
  'organic_search',
  'newsletter'
];

function generateRandomDate() {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));

  const randomWeight = Math.random() * Math.random();
  const timeDifference = now.getTime() - thirtyDaysAgo.getTime();
  const randomTime = thirtyDaysAgo.getTime() + (timeDifference * (1 - randomWeight));

  return new Date(randomTime).toISOString();
}

function getRandomSource() {
  return SOURCES[Math.floor(Math.random() * SOURCES.length)];
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function seedEmails() {
  const args = process.argv.slice(2);
  const count = parseInt(args[0]) || 25;
  const shouldClear = args.includes('clear');

  console.log('🌱 Starting email seeding...');
  console.log(`📧 Emails to insert: ${count}`);
  console.log(`🗑️  Clear existing: ${shouldClear ? 'Yes' : 'No'}`);
  console.log('');

  try {
    // Clear existing emails if requested
    if (shouldClear) {
      console.log('🗑️  Clearing existing emails...');
      const { error: deleteError } = await supabase
        .from('emails')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');

      if (deleteError) {
        console.error('❌ Error clearing emails:', deleteError.message);
        process.exit(1);
      }
      console.log('✅ Cleared existing emails');
    }

    // Generate fake emails
    const shuffledEmails = shuffleArray(FAKE_EMAILS);
    const emailsToInsert = shuffledEmails.slice(0, Math.min(count, FAKE_EMAILS.length));

    const emailRecords = emailsToInsert.map(email => ({
      email,
      source: getRandomSource(),
      created_at: generateRandomDate()
    }));

    // Sort by date
    emailRecords.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

    console.log('📤 Inserting emails...');

    // Insert the emails
    const { data, error } = await supabase
      .from('emails')
      .insert(emailRecords)
      .select();

    if (error) {
      console.error('❌ Error inserting emails:', error.message);
      process.exit(1);
    }

    console.log('');
    console.log('🎉 Success!');
    console.log(`✅ Inserted ${data?.length || 0} email subscribers`);
    console.log('📊 Your dashboard should now show the new data');

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  }
}

// Run the seeder
seedEmails();