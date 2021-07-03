import React, { useState } from 'react';
import MainSimpleBottomNavigation from "./MainBottomNavigation"
import PersistentDrawer from "./PersistentDrawer"
import MainMap from "./MainMap";
import SearchDialog from './SearchDialog';
import ResultDialog from './ResultDialog';

export default function AppContainer() {

    // Drawer Height for Adjust Map Top
    const [drawerHeight, setDrawerHeight] = useState(0);

    // Dialog Open Or Close State
    const [dialogOpenState, setDialogOpenState] = useState({
        search: false,
        result: false
    });

    const handleDialogOpen = (dialogType, dialogOpen) => {
        if(dialogOpen == null) {
            dialogOpen = !dialogOpenState[dialogType];
        }
        setDialogOpenState({ ...dialogOpenState, [dialogType]: dialogOpen });
    }

    // Result List for ResultDialog
    const [resultList, setResultList] = useState([]);

    return (
    <div className="appContainer">
      <PersistentDrawer 
        setDrawerHeight={setDrawerHeight}
        handleDialogOpen={handleDialogOpen}
      />
      <MainMap 
        drawerHeight={drawerHeight} 
      />
      <MainSimpleBottomNavigation 
        handleDialogOpen={handleDialogOpen}
      >
        <SearchDialog
          open={dialogOpenState.search}
          handleDialogOpen={handleDialogOpen}
          setResultList={setResultList}
        />
        <ResultDialog
            open={dialogOpenState.result}
            handleDialogOpen={handleDialogOpen}
            resultList={resultList}
        />
      </MainSimpleBottomNavigation>
    </div>
  );
}