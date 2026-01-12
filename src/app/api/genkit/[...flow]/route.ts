// CORRECT
import defineNextHandler from '@genkit-ai/next';
import * as flows from '@/ai/dev'; // imports all exported flows

const handler = defineNextHandler({
  flows: Object.values(flows), // converts all exports into an array
});

export { handler as GET, handler as POST };
