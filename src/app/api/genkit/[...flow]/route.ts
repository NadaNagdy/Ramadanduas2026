import defineNextHandler from '@genkit-ai/next';
import { testFlow } from '@/ai/dev';

export const GET = defineNextHandler(testFlow);
export const POST = defineNextHandler(testFlow);
