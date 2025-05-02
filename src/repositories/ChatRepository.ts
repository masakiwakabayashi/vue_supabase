export async function fetchChatStream(messages: any, onMessageCallback: any) {
  const apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4.1',
      messages: messages,
      stream: true,   // ←重要！
    }),
  });

  if (!response.body) {
    throw new Error('Stream not supported');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');

  let done = false;
  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;
    if (value) {
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n').filter(line => line.trim() !== '');
      for (const line of lines) {
        if (line.startsWith('data:')) {
          const data = line.replace(/^data: /, '');
          if (data === '[DONE]') return;
          try {
            const parsed = JSON.parse(data);
            const text = parsed.choices[0]?.delta?.content;
            if (text) {
              onMessageCallback(text); // Vueに通知！
            }
          } catch (e) {
            console.error('JSON parse error', e);
          }
        }
      }
    }
  }
}
