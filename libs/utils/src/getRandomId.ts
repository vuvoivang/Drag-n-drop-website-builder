import { customAlphabet } from 'nanoid';

// By default nanoid generate an ID with 21 characters. To reduce the footprint, we default to 10 characters.
// We have a higher probability for collisions, though

/**
 * Generate a random ID. That ID can for example be used as a node ID.
 *
 * @param size The number of characters that are generated for the ID. Defaults to `10`
 * @returns A random id
 */
const nanoid = (size: number) => customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', size);
export const getRandomId = (size: number = 5) => nanoid(size)();
