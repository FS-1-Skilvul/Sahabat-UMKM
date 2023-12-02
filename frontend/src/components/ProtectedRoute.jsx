import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Send token verification request to server
    fetch('/verify', {
      headers: { 'Authorization': `Bearer ${token}` },
    });
  }, [token]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return children;
}
