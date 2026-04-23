"use client";
import {ThemeProvider} from "next-themes";

const HeroUiThemeProviders=(    {children}) => {
    
    return (
        <ThemeProvider attribute="data-theme" defaultTheme="light">
      {children}
    </ThemeProvider>
    );
};

export default HeroUiThemeProviders;