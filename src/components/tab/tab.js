import React, { useState, useEffect } from 'react';
import { tab as tabStyle, tabs as tabsStyle, tabBorder, selectedTab, tabContent, tabContentChild } from './tab.style';
import './tab.css';

const Tabs = (incomingProps) => {
    const props = { ...incomingProps };
    const [selectedIndex, setIndex] = useState(0);
    const [children, setChildren] = useState(props.children);

    const updateInsideTabsProp = (children) => {
        const childrenClone = children.map(child => React.cloneElement(child, { insideTabs: true }));
        setChildren(childrenClone);
    }

    const findSelectedTabIndex = (children) => {
        const isTabSelected = (reactElement) => reactElement.props.selected;

        const childrenArray = React.Children.toArray(children);
        return childrenArray.findIndex(isTabSelected);
    }

    useEffect(() => {
        updateInsideTabsProp(props.children);

        const index = findSelectedTabIndex(props.children);
        if (index > -1) {
            setIndex(index);
        }
    }, [props.children]);

    const getTabContent = (children) => {
        return children.map(updateSelectedProp);
    }

    const updateSelectedProp = (child, index) => {
        let childClone = child;

        if (selectedIndex === index) {
            childClone = React.cloneElement(child, { selected: true, key: index });
            return childClone;
        }

        childClone = React.cloneElement(child, { selected: false, key: index });
        return childClone;
    }

    const getTabStyle = (children, currentIndex) => {
        let style = { ...tabStyle };

        if (currentIndex !== children.length - 1) {
            style = { ...style, ...tabBorder };
        }

        if (currentIndex === selectedIndex) {
            style = { ...style, ...selectedTab };
        }

        return style;
    }

    return (
        <>
            <div style={{ ...tabsStyle }}>
                {children.map((tab, index) =>
                    <span
                        className="tab"
                        style={getTabStyle(children, index)}
                        key={index} onClick={() => setIndex(index)}>
                        {tab.props.name}
                    </span>
                )}
            </div>

            {getTabContent(children).map(child => child)}
        </>
    );
}

const tabDefaultProps = {
    name: '',
    selected: true,
    insideTabs: false
}

const Tab = (incomingProps) => {
    const props = { ...tabDefaultProps, ...incomingProps };
    return (
        <>
            {!props.insideTabs && <span>{props.name}</span>}
            <div style={tabContent}>{props.selected && props.children.map(child => React.cloneElement(child, { style: tabContentChild }))}</div>
        </>
    );
}

export { Tabs, Tab };
