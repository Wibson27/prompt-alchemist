import { supabase } from './supabase';

// Realistic fake email data
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
  'grace.campbell@hotmail.com',
  'noah.parker@gmail.com',
  'zoe.evans@icloud.com',
  'caleb.edwards@yahoo.com',
  'natalie.collins@outlook.com',
  'ethan.stewart@gmail.com',
  'hannah.sanchez@protonmail.com',
  'jacob.morris@hotmail.com',
  'olivia.rogers@gmail.com',
  'luke.reed@yahoo.com',
  'ava.cook@icloud.com'
];

const SOURCES = [
  'landing_page',
  'landing_page', // More common
  'landing_page',
  'social_media',
  'referral',
  'organic_search',
  'newsletter'
];

// Generate random date within the last 30 days, with more recent dates being more likely
function generateRandomDate(): string {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));

  // Weight towards more recent dates
  const randomWeight = Math.random() * Math.random(); // This skews towards 0
  const timeDifference = now.getTime() - thirtyDaysAgo.getTime();
  const randomTime = thirtyDaysAgo.getTime() + (timeDifference * (1 - randomWeight));

  return new Date(randomTime).toISOString();
}

// Generate random source
function getRandomSource(): string {
  return SOURCES[Math.floor(Math.random() * SOURCES.length)];
}

// Shuffle array utility
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export class EmailSeeder {
  /**
   * Seeds the database with fake email subscribers
   * @param count Number of emails to generate (default: 25)
   * @param clearExisting Whether to clear existing emails first (default: false)
   */
  static async seedEmails(count: number = 25, clearExisting: boolean = false): Promise<{
    success: boolean;
    message: string;
    insertedCount?: number;
    error?: string;
  }> {
    try {
      console.log(`Starting email seeding: ${count} emails, clearExisting: ${clearExisting}`);

      // Clear existing emails if requested
      if (clearExisting) {
        const { error: deleteError } = await supabase
          .from('emails')
          .delete()
          .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

        if (deleteError) {
          console.error('Error clearing emails:', deleteError);
          return {
            success: false,
            message: 'Failed to clear existing emails',
            error: deleteError.message
          };
        }
        console.log('Cleared existing emails');
      }

      // Get shuffled emails and take only the requested count
      const shuffledEmails = shuffleArray(FAKE_EMAILS);
      const emailsToInsert = shuffledEmails.slice(0, Math.min(count, FAKE_EMAILS.length));

      // Generate the email records with random dates and sources
      const emailRecords = emailsToInsert.map(email => ({
        email,
        source: getRandomSource(),
        created_at: generateRandomDate()
      }));

      // Sort by created_at to maintain chronological order in the database
      emailRecords.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

      // Insert the emails
      const { data, error } = await supabase
        .from('emails')
        .insert(emailRecords)
        .select();

      if (error) {
        console.error('Error inserting emails:', error);
        return {
          success: false,
          message: 'Failed to insert emails',
          error: error.message
        };
      }

      console.log(`Successfully inserted ${data?.length || 0} emails`);

      return {
        success: true,
        message: `Successfully seeded ${data?.length || 0} email subscribers`,
        insertedCount: data?.length || 0
      };

    } catch (error) {
      console.error('Seeder error:', error);
      return {
        success: false,
        message: 'Unexpected error during seeding',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Quick seed with default settings (25 emails, no clearing)
   */
  static async quickSeed(): Promise<{
    success: boolean;
    message: string;
    insertedCount?: number;
    error?: string;
  }> {
    return this.seedEmails(25, false);
  }

  /**
   * Fresh seed - clears existing and adds new emails
   */
  static async freshSeed(count: number = 30): Promise<{
    success: boolean;
    message: string;
    insertedCount?: number;
    error?: string;
  }> {
    return this.seedEmails(count, true);
  }

  /**
   * Get the count of available fake emails
   */
  static getAvailableEmailCount(): number {
    return FAKE_EMAILS.length;
  }
}