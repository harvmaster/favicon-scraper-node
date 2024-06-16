import type { Agent } from '../types';
import { agents } from '../agents';

export const getAgent = <T extends Agent>(userAgent: T): typeof agents[T] => {
  return agents[userAgent];
}

export default getAgent;