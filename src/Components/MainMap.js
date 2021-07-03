import React, { useRef, useEffect } from "react";
import Home from '@arcgis/core/widgets/Home';
import Expand from '@arcgis/core/widgets/Expand';
import BasemapLayerList from '@arcgis/core/widgets/BasemapLayerList';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { makeStyles } from '@material-ui/core/styles';

export default function MainMap({ drawerHeight }) {

    const useStyles = makeStyles({
      mapDiv: {
        padding: 0,
        margin: 0,
        height: `calc(100% - ${drawerHeight}px)`,
        width: '100%',
        top: `${drawerHeight}px`,
        position: 'absolute'
      },
    });

    const classes = useStyles();

    const mapDiv = useRef(null);
  
    useEffect(() => {
      if (mapDiv.current) {
        /*
         * Initialize Map
         */
        const basemap = new Map({
          basemap: "streets-vector"
        });
  
        const view = new MapView({
          container: mapDiv.current,
          map: basemap
        });
  
        view.goTo({
          center: [114.08811447217778, 22.388296062052888],
          zoom: 10
        })
        .then(function() {
          // home widget
          var home = new Home({
            view: view,
            viewpoint: view.viewpoint
          });
          view.ui.add(home, "top-leading");
        })
        .catch(function(error) {
          if (error.name !== "AbortError") {
             console.error(error);
          }
        });
  
        // widgets
        var basemapLayerList = new BasemapLayerList({
          view: view
        });
  
        var basemapGallery = new BasemapGallery({
          view: view
        });
  
        const basemapGalleryExpand = new Expand({
          view,
          content: basemapGallery,
          expanded: false,
          autoCollapse: true,
          group: "top-right"
        });
  
        const basemapLayerListExpand = new Expand({
          view,
          content: basemapLayerList,
          expanded: false,
          autoCollapse: true,
          group: "top-right"
        });
  
        // Add widgets to the top-right corner of the view
        view.ui.add([basemapGalleryExpand, basemapLayerListExpand], "top-trailing");
      }
    }, []);
  
    return (
      <div className={classes.mapDiv} ref={mapDiv}></div>
    );
  }