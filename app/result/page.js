'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CircularProgress, Typography, Container, Box, Button } from "@mui/material";

const ResultPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const session_id = searchParams.get('session_id');

    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCheckoutSession = async () => {
            if (!session_id) return;
            try {
                const res = await fetch(`/api/checkout_session?session_id=${session_id}`);
                const sessionData = await res.json();
                if (res.ok) {
                    setSession(sessionData);
                } else {
                    setError(sessionData.error || 'Failed to retrieve session data');
                }
            } catch (err) {
                setError('An error occurred while fetching the session');
            } finally {
                setLoading(false);
            }
        };
        fetchCheckoutSession();
    }, [session_id]);

    const handleGoHome = () => {
        router.push('/');
    };

    if (loading) {
        return (
            <Container maxWidth="100vw" sx={{ textAlign: 'center', mt: 4 }}>
                <CircularProgress />
                <Typography variant="h6">Loading...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="100vw" sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h6">{error}</Typography>
                <Button variant="contained" onClick={handleGoHome} sx={{ mt: 2 }}>
                    Go to Home
                </Button>
            </Container>
        );
    }

    if (!session) {
        return (
            <Container maxWidth="100vw" sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h6">No session data found.</Typography>
                <Button variant="contained" onClick={handleGoHome} sx={{ mt: 2 }}>
                    Go to Home
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="100vw" sx={{ textAlign: 'center', mt: 4 }}>
            {
                session.payment_status === 'paid' ? (
                    <>
                        <Typography variant='h4'>Thank you for your purchase!</Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6">Session ID: {session_id}</Typography>
                            <Typography variant="body1">
                                We have received your payment. You will receive an email with the order details shortly.
                            </Typography>
                        </Box>
                        <Button variant="contained" onClick={handleGoHome} sx={{ mt: 4 }}>
                            Go to Home
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography variant='h4'>Payment Failed</Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="body1">
                                Your payment was unsuccessful. Please try again.
                            </Typography>
                            <Button variant="contained" onClick={handleGoHome} sx={{ mt: 4 }}>
                                Go to Home
                            </Button>
                        </Box>
                    </>
                )
            }
        </Container>
    );
};

export default ResultPage
