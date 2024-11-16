
import React, { createContext, useContext } from 'react';
import { QueryClient } from '../core'; // Assuming you have this module

// Ensure ReactQueryClientContext is available globally
if (!window.ReactQueryClientContext) {
    window.ReactQueryClientContext = createContext();
}

// Custom hook to use the QueryClient
export const useQueryClient = () => {
    const context = useContext(window.ReactQueryClientContext);
    if (!context) {
        throw new Error('useQueryClient must be used within a QueryClientProvider');
    }
    return context;
};

// QueryClientProvider component
export const QueryClientProvider = ({ client, contextSharing = false, children }) => {
    if (contextSharing) {
        // Share context globally
        window.ReactQueryClientContext = createContext(client);
    }
    return (
        <window.ReactQueryClientContext.Provider value={client}>
            {children}
        </window.ReactQueryClientContext.Provider>
    );
};