// checkAuth.js
export const checkAuth = async () => {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch('/api/check-auth', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data.isAuthenticated;
        }
        return false;
    } catch (error) {
        console.error('Authentication check failed:', error);
        return false;
    }
};
