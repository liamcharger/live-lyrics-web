import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const email = "chargertech.help@gmail.com";
        
        window.location.href = `mailto:${email}?subject=${encodeURIComponent("Live Lyrics Support")}`;
        
        navigate('/');
    }, [navigate]);
    
    return null;
};

export default Support;