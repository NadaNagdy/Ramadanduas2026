import { genkit, z } from 'genkit';

export const ai = genkit({
  plugins: [],
});

export const testFlow = ai.defineFlow(
  {
    name: 'testFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (input) => {
    return `Hello from Genkit: ${input}`;
  }
);
