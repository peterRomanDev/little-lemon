// hooks
import { useContext } from "react";

// context
import { PageContentContext } from "../context/PageContentContext";

export const usePageContent = () => {
    const context = useContext(PageContentContext);

    if (context === undefined) {
        throw new Error('usePageContent() must be used inside a PageContentProvider');
    }

    return context;
};