import type { Agent, UserAgent } from '../types';
import { agents } from '../agents';

export const getAgent = <T extends Agent>(userAgent: T): UserAgent[T] => {
  return agents[userAgent];
}

export default getAgent;