// API service functions for Deveramma Temple website
// Note: This is a mock API service. In production, you would replace these functions
// with actual API calls to your backend server.

/**
 * Submit contact form data
 * @param {Object} formData - Form data containing name, email, etc.
 * @returns {Promise} - Promise resolving to success message or error
 */
export async function submitContactForm(formData) {
  // In a real implementation, this would send data to a server
  // For now, we'll simulate a success response after a short delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        reject({ error: 'Please fill all required fields' });
        return;
      }
      
      // Log the data (in production, this would be sent to a server)
      console.log('Contact form submission:', formData);
      
      // Simulate successful submission
      resolve({ success: true, message: 'Your message has been sent successfully! We will get back to you soon.' });
    }, 1500);
  });
}

/**
 * Submit a pooja booking request
 * @param {Object} bookingData - Data containing service, date, name, etc.
 * @returns {Promise} - Promise resolving to booking confirmation or error
 */
export async function bookPooja(bookingData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate booking data
      if (!bookingData.service || !bookingData.date || !bookingData.name || !bookingData.contact) {
        reject({ error: 'Please fill all required fields' });
        return;
      }
      
      // Log the booking (in production, this would be sent to a server)
      console.log('Pooja booking:', bookingData);
      
      // Generate a booking reference
      const bookingRef = 'DEV' + Date.now().toString().slice(-6);
      
      // Simulate successful booking
      resolve({
        success: true,
        bookingRef,
        message: `Your booking for ${bookingData.service} has been received. Your booking reference is ${bookingRef}.`
      });
    }, 2000);
  });
}

/**
 * Process a donation
 * @param {Object} donationData - Donation details including amount, name, etc.
 * @returns {Promise} - Promise resolving to donation confirmation or error
 */
export async function processDonation(donationData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate donation data
      if (!donationData.amount || !donationData.name || !donationData.email) {
        reject({ error: 'Please fill all required fields' });
        return;
      }
      
      // Check for valid donation amount
      if (isNaN(donationData.amount) || parseFloat(donationData.amount) <= 0) {
        reject({ error: 'Please enter a valid donation amount' });
        return;
      }
      
      // Log the donation (in production, this would be sent to a payment processor)
      console.log('Donation:', donationData);
      
      // Generate a receipt number
      const receiptNumber = 'DON' + Date.now().toString().slice(-8);
      
      // Simulate successful donation
      resolve({
        success: true,
        receiptNumber,
        message: `Thank you for your generous donation of ${donationData.amount}. Your receipt number is ${receiptNumber}.`
      });
    }, 2000);
  });
}

/**
 * Fetch temple announcements
 * @returns {Promise} - Promise resolving to array of announcements
 */
export async function getAnnouncements() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const announcements = [
        {
          id: 1,
          title: 'Temple Hours Extended',
          content: 'Starting June 1st, the temple will remain open until 9:00 PM on weekends.',
          date: '2025-05-20',
          important: true
        },
        {
          id: 2,
          title: 'New Priest Joining',
          content: 'We are pleased to welcome Pandit Ramesh Kumar who will be joining our temple from next month.',
          date: '2025-05-15',
          important: false
        },
        {
          id: 3,
          title: 'Online Donation System Launched',
          content: 'Devotees can now make donations online through our secure payment system.',
          date: '2025-05-10',
          important: false
        }
      ];
      
      resolve(announcements);
    }, 1000);
  });
}