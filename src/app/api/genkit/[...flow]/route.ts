import defineNextHandler from '@genkit-ai/next';
import { ai } from '@/ai/genkit';
import '@/ai/dev'; // Make sure flows are registered

const handler = defineNextHandler({ ai });

export { handler as GET, handler as POST };
