import React, { useState } from 'react';

const Tabs = (props) => {
    const [selectedIndex, setIndex] = useState('');

    const getTabs = () => {
        return props.children.map(showTabContent);
    }

    const showTabContent = (child, index) => {
        let childClone = child;
        if (selectedIndex === index) {
            childClone = React.cloneElement(child, { show: true })
        }
        return childClone;
    }

    return (
        <>
            {props.children.map((tab, index) =>
                <span id={index} onClick={() => setIndex(index)}>
                    {tab.props.name}
                </span>
            )}

            {getTabs().map(child => child)}
        </>
    );
}

const tabDefaultProps = {
    name: '',
    show: false
}
const Tab = (incomingProps) => {
    const props = { ...tabDefaultProps, ...incomingProps };
    return (
        <>{props.show && props.children}</>
    );
}

export { Tabs, Tab };
