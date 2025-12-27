"use server"

export const submitActions = async (formData)=>{
  
const message = formData.get('message'); 
const email = formData.get('email');
const name = formData.get('name')

if (!message || !email) {
    return { success: false, error: 'Missing fields' };
  }
  
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  const text = `New Message:\nEmail: ${email}\nName: ${name}\nMessage: ${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    if (!response.ok) {
        throw new Error('Telegram API Error');
    }

    return { success: true };

  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to send message' };
  }

  };
