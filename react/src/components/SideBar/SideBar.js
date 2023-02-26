import React from "react";
import { FlexboxGrid } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import './SideBar.css';

const SideBar = () => {
    return (
        <>
            <h2>Latest News</h2>
            <FlexboxGrid className="sideBar">
                <FlexboxGridItem className="sideBarPanel">
                    <h4>Article 1</h4>
                </FlexboxGridItem>
                <FlexboxGridItem className="sideBarPanel">
                    <h4>Article 4</h4>
                </FlexboxGridItem>
                <FlexboxGridItem className="sideBarPanel">
                    <h4>Article 3</h4>
                </FlexboxGridItem>
                <FlexboxGridItem className="sideBarPanel">
                    <h4>Article 4</h4>
                </FlexboxGridItem>
            </FlexboxGrid>
        </>
    )
}

export default SideBar