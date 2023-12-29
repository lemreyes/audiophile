export const INPUT_LENGTH_MAX = 60;
export const NAME_LENGTH_MIN = 2;
export const NAME_LENGTH_MAX = 60;
export const EMAIL_LENGTH_MAX = 60;
export const PHONE_LENGTH_MAX = 14;
export const ADDRESS_LENGTH_MAX = 100;
export const ZIP_LENGTH_MAX = 5;
export const EMONEYNUMBER_LENGTH_MAX = 8;
export const EMONEYPIN_LENGTH_MAX = 4;

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

/**
 * Function that checks if email is in valid format.
 * @param name Name to be validated
 * @returns {boolean}
 */
export function isValidName(name: string): boolean {
  // Check if the name is not empty
  if (!name.trim()) {
    return false;
  }

  // Check if the name contains only letters and spaces
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    return false;
  }

  // Check length
  if (name.length < 2 || name.length > NAME_LENGTH_MAX) {
    return false;
  }

  // If all checks pass, consider the name valid
  return true;
}

/**
 * Validate phone number format
 * @param number Phone number to be validated
 * @returns
 */
export function isValidPhone(number: string): boolean {
  const cleanedNumber = number.replace(/[^\d()+-]/g, "");

  // Check if the cleaned number is not empty
  if (!cleanedNumber.trim()) {
    return false;
  }

  // Check if the cleaned number contains only allowed characters
  const validFormatRegex = /^[\d()+-]+$/;
  if (!validFormatRegex.test(cleanedNumber)) {
    return false;
  }

  // Check length
  if (number.length < 7) {
    return false;
  }

  // If all checks pass, consider the phone number valid
  return true;
}

/**
 * Validate the address
 * @param address Address to be validated
 * @returns
 */
export function isValidAddress(address: string): boolean {
  return address.length > 3;
}

/**
 * Validate the zip code
 * @param zip zip code to be validated
 * @returns
 */
export function isValidZip(zip: string): boolean {
  return zip.length > 3;
}

/**
 * Validate the city
 * @param city string to be validated
 * @returns
 */
export function isValidCity(city: string): boolean {
  // Check if the city is not empty
  if (!city.trim()) {
    return false;
  }

  // Check if the city contains only letters and spaces
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(city)) {
    return false;
  }

  return city.length > 2;
}

/**
 * Validate the country
 * @param country Country string to be validated.
 * @returns
 */
export function isValidCountry(country: string): boolean {
  // Check if the country is not empty
  if (!country.trim()) {
    return false;
  }

  // Check if the country contains only letters and spaces
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(country)) {
    return false;
  }

  return country.length > 2;
}

/**
 * Validate the emoney number
 * @param emoneyNumber emoney number to be validated.  It must be 8-digit numeric string
 * @returns
 */
export function isValidEmoneyNumber(emoneyNumber: string): boolean {
  if (emoneyNumber.length !== 8) {
    return false;
  }

  // Use a regular expression to check if the string contains only numbers
  const onlyNumbersRegex = /^[0-9]+$/;

  return onlyNumbersRegex.test(emoneyNumber);
}

/**
 * Validate the pin number
 * @param pin pin string to be validated.  must be 4-digit numeric string
 * @returns
 */
export function isValidEmoneyPin(pin: string): boolean {
  if (pin.length !== 4) {
    return false;
  }

  // Use a regular expression to check if the string contains only numbers
  const onlyNumbersRegex = /^[0-9]+$/;

  return onlyNumbersRegex.test(pin);
}
