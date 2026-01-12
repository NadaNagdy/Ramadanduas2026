import { genkit } from 'genkit';
import defineNextHandler from '@genkit-ai/next';
import '@/ai/dev';

const ai = genkit({});
const handler = defineNextHandler(ai);

export { handler as GET, handler as POST };
