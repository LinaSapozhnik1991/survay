import React, { ReactNode } from 'react';
import { Button } from '../../../shared/ui/Button';


interface OpenSurveyProps {
    primary?: boolean;
    size?: "small" | "medium" | "large" | "mediumXL" | "mediumXXL" | "smallXL";
    children: ReactNode;
}
    const OpenSurvey: React.FC<OpenSurveyProps> = ({ primary = false, size, children }) => {
        return (
            <Button 
                as="a" 
                href="https://docs.google.com/forms/d/11ts6mMuXXdXtHYMUrteBkitQsQLoUfN6Dl8BYOTmpNg/edit" 
                primary={primary} 
                size={size} 
            >
               {children}
            </Button>
        );
    };

export default OpenSurvey;