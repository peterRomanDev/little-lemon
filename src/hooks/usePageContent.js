// hooks
import { useContext } from "react";

// context
import { PageContentContext } from "../context/PageContentContext";

export const usePageContent = () => {
    // a hook that can be used by any component to access anything that is stored in the Page Content Context
    const context = useContext(PageContentContext);

    if (context === undefined) {
        throw new Error('usePageContent() must be used inside a PageContentProvider');
    }

    return context;
};