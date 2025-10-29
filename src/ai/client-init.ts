'use client';

import { ai } from './genkit';

export function initializeAi() {
  // This function will only be called on the client side.
  // We can safely import and use client-side plugins here.
  import('@genkit-ai/google-genai').then(({ googleAI }) => {
    ai.configure({
      plugins: [googleAI()],
    });
  });
}
