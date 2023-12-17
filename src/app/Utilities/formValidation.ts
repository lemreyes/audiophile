/**
 * Function to check if email is in valid format.
 * @param email Email to be validated
 * @returns {boolean}
 */
export function isValidEmail(email: string): boolean {
  // regex validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}
