import { useContext } from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from './ThemeContext';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        theme={theme}
                        switchTheme={switchTheme}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter>
        </div>
    );
}
