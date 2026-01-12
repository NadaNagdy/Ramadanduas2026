import defineNextHandler from '@genkit-ai/next';
import { ai } from '@/ai/genkit';
import '@/ai/dev'; // Make sure flows are registered

const handler = defineNextHandler(ai); // pass ai as the first argument

export { handler as GET, handler as POST };
