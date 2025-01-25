db = db.getSiblingDB('notifyster');

db.createCollection('emails');

db.emails.insertOne({
  to: 'recipient@example.com',
  from: 'sender@example.com',
  subject: 'Welcome to Our Service!',
  body: '<h1>Welcome!</h1><p>Thanks for joining our service.</p>',
  status: 'sent',
  error: null, // Null se o envio foi bem-sucedido
  createdAt: new Date(), // Ds
});
