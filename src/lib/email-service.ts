import { supabase, EmailRecord } from './supabase';

// Define return types for better type safety
type SubmitEmailResult =
  | { success: true; data: EmailRecord }
  | { success: false; error: string };

// Helper function to handle errors properly
const getErrorMessage = (error: unknown): string => {
  console.log('Full error object:', error); // Added for debugging
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'An unknown error occurred';
};

export class EmailService {
  // Test Supabase connection
  static async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      console.log('Testing Supabase connection...');
      const { data, error } = await supabase
        .from('emails')
        .select('count', { count: 'exact', head: true });

      if (error) {
        console.error('Supabase connection error:', error);
        throw error;
      }

      console.log('Supabase connection successful');
      return { success: true };
    } catch (error) {
      console.error('Connection test failed:', error);
      return {
        success: false,
        error: getErrorMessage(error)
      };
    }
  }

  // Submit email from the form
  static async submitEmail(email: string, source: string = 'landing_page'): Promise<SubmitEmailResult> {
    try {
      console.log('Attempting to submit email:', email);

      // Test connection first
      const connectionTest = await this.testConnection();
      if (!connectionTest.success) {
        throw new Error(`Connection failed: ${connectionTest.error}`);
      }

      const { data, error } = await supabase
        .from('emails')
        .insert([{ email, source }])
        .select()
        .single();

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }

      console.log('Email submitted successfully:', data);
      return { success: true, data };
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error('Error submitting email:', errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    }
  }

  // Get all emails (for dashboard)
  static async getAllEmails(): Promise<EmailRecord[]> {
    try {
      const { data, error } = await supabase
        .from('emails')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching emails:', getErrorMessage(error));
      return [];
    }
  }

  // Get email count
  static async getEmailCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from('emails')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;
      return count || 0;
    } catch (error) {
      console.error('Error getting email count:', getErrorMessage(error));
      return 0;
    }
  }
}