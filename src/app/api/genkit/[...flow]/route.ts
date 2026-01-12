import defineNextHandler from '@genkit-ai/next';
import '@/ai/dev';

const handler = defineNextHandler({
  flows: [],
});

export { handler as GET, handler as POST };
