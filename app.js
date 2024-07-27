document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registrationForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://127.0.0.1:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            // Ensure the response is in JSON format
            const result = await response.json();

            if (response.ok) {
                document.getElementById('responseMessage').textContent = result.message || 'Registration successful!';
                document.getElementById('responseMessage').style.color = 'green';
            } else {
                document.getElementById('responseMessage').textContent = result.error || 'Registration failed';
                document.getElementById('responseMessage').style.color = 'red';
            }
        } catch (error) {
            console.error('Fetch error:', error);
            document.getElementById('responseMessage').textContent = 'An error occurred. Please try again.';
            document.getElementById('responseMessage').style.color = 'red';
        }
    });
});
