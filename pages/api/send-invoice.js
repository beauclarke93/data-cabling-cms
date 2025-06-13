export default function handler(req, res) {
  if (req.method === 'POST') {
    // handle email/sms logic here
    res.status(200).json({ message: 'Invoice sent' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
