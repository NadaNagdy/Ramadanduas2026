import defineNextHandler from '@genkit-ai/next';
import '@/ai/dev'; // Make sure flows are registered

const handler = defineNextHandler();

export { handler as GET, handler as POST };
