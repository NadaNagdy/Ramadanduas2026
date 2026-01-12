import defineNextHandler from '@genkit-ai/next';
import '@/ai/dev'; // flows are registered here

const handler = defineNextHandler(); // no arguments

export { handler as GET, handler as POST };
