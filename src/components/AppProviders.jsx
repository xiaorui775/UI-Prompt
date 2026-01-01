import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { LanguageProvider } from '../hooks/useLanguage';
import { DarkModeProvider } from '../hooks/useDarkMode';
import PropTypes from 'prop-types';

export function AppProviders({ children }) {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <DarkModeProvider>
                    {children}
                </DarkModeProvider>
            </LanguageProvider>
        </HelmetProvider>
    );
}

AppProviders.propTypes = {
    children: PropTypes.node.isRequired,
};
