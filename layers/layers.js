var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ambernath_1 = new ol.format.GeoJSON();
var features_Ambernath_1 = format_Ambernath_1.readFeatures(json_Ambernath_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ambernath_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ambernath_1.addFeatures(features_Ambernath_1);
var lyr_Ambernath_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ambernath_1, 
                style: style_Ambernath_1,
                popuplayertitle: "Ambernath",
                interactive: true,
                title: '<img src="styles/legend/Ambernath_1.png" /> Ambernath'
            });
var format_BadlapurBoundary_2 = new ol.format.GeoJSON();
var features_BadlapurBoundary_2 = format_BadlapurBoundary_2.readFeatures(json_BadlapurBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadlapurBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadlapurBoundary_2.addFeatures(features_BadlapurBoundary_2);
var lyr_BadlapurBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BadlapurBoundary_2, 
                style: style_BadlapurBoundary_2,
                popuplayertitle: "Badlapur Boundary",
                interactive: true,
                title: '<img src="styles/legend/BadlapurBoundary_2.png" /> Badlapur Boundary'
            });
var format_KDMCBoundry_3 = new ol.format.GeoJSON();
var features_KDMCBoundry_3 = format_KDMCBoundry_3.readFeatures(json_KDMCBoundry_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMCBoundry_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMCBoundry_3.addFeatures(features_KDMCBoundry_3);
var lyr_KDMCBoundry_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMCBoundry_3, 
                style: style_KDMCBoundry_3,
                popuplayertitle: "KDMC Boundry",
                interactive: true,
                title: '<img src="styles/legend/KDMCBoundry_3.png" /> KDMC Boundry'
            });
var format_BhiwandiBoundary_4 = new ol.format.GeoJSON();
var features_BhiwandiBoundary_4 = format_BhiwandiBoundary_4.readFeatures(json_BhiwandiBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiBoundary_4.addFeatures(features_BhiwandiBoundary_4);
var lyr_BhiwandiBoundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiBoundary_4, 
                style: style_BhiwandiBoundary_4,
                popuplayertitle: "Bhiwandi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BhiwandiBoundary_4.png" /> Bhiwandi Boundary'
            });
var format_UlhasnagarBoundry_5 = new ol.format.GeoJSON();
var features_UlhasnagarBoundry_5 = format_UlhasnagarBoundry_5.readFeatures(json_UlhasnagarBoundry_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UlhasnagarBoundry_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UlhasnagarBoundry_5.addFeatures(features_UlhasnagarBoundry_5);
var lyr_UlhasnagarBoundry_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UlhasnagarBoundry_5, 
                style: style_UlhasnagarBoundry_5,
                popuplayertitle: "Ulhasnagar Boundry",
                interactive: true,
                title: '<img src="styles/legend/UlhasnagarBoundry_5.png" /> Ulhasnagar Boundry'
            });
var format_KalyanStopComparison_6 = new ol.format.GeoJSON();
var features_KalyanStopComparison_6 = format_KalyanStopComparison_6.readFeatures(json_KalyanStopComparison_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalyanStopComparison_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalyanStopComparison_6.addFeatures(features_KalyanStopComparison_6);
var lyr_KalyanStopComparison_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KalyanStopComparison_6, 
                style: style_KalyanStopComparison_6,
                popuplayertitle: "Kalyan Stop Comparison",
                interactive: true,
                title: '<img src="styles/legend/KalyanStopComparison_6.png" /> Kalyan Stop Comparison'
            });
var format_KDMTBusStops_7 = new ol.format.GeoJSON();
var features_KDMTBusStops_7 = format_KDMTBusStops_7.readFeatures(json_KDMTBusStops_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMTBusStops_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMTBusStops_7.addFeatures(features_KDMTBusStops_7);
var lyr_KDMTBusStops_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMTBusStops_7, 
                style: style_KDMTBusStops_7,
                popuplayertitle: "KDMT Bus Stops",
                interactive: true,
                title: '<img src="styles/legend/KDMTBusStops_7.png" /> KDMT Bus Stops'
            });
var format_KalyanPopulation_8 = new ol.format.GeoJSON();
var features_KalyanPopulation_8 = format_KalyanPopulation_8.readFeatures(json_KalyanPopulation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalyanPopulation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalyanPopulation_8.addFeatures(features_KalyanPopulation_8);
var lyr_KalyanPopulation_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KalyanPopulation_8, 
                style: style_KalyanPopulation_8,
                popuplayertitle: "Kalyan Population",
                interactive: true,
                title: '<img src="styles/legend/KalyanPopulation_8.png" /> Kalyan Population'
            });
var format_KDMCStopspop_9 = new ol.format.GeoJSON();
var features_KDMCStopspop_9 = format_KDMCStopspop_9.readFeatures(json_KDMCStopspop_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMCStopspop_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMCStopspop_9.addFeatures(features_KDMCStopspop_9);
var lyr_KDMCStopspop_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMCStopspop_9, 
                style: style_KDMCStopspop_9,
                popuplayertitle: "KDMC Stops pop ",
                interactive: true,
    title: 'KDMC Stops pop <br />\
    <img src="styles/legend/KDMCStopspop_9_0.png" /> 5 min<br />'
        });
var format_Kalyanpop5MinDissolved_10 = new ol.format.GeoJSON();
var features_Kalyanpop5MinDissolved_10 = format_Kalyanpop5MinDissolved_10.readFeatures(json_Kalyanpop5MinDissolved_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kalyanpop5MinDissolved_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kalyanpop5MinDissolved_10.addFeatures(features_Kalyanpop5MinDissolved_10);
var lyr_Kalyanpop5MinDissolved_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kalyanpop5MinDissolved_10, 
                style: style_Kalyanpop5MinDissolved_10,
                popuplayertitle: "Kalyan pop 5 Min Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Kalyanpop5MinDissolved_10.png" /> Kalyan pop 5 Min Dissolved'
            });
var format_KalyanPop5minDissolvedPop_11 = new ol.format.GeoJSON();
var features_KalyanPop5minDissolvedPop_11 = format_KalyanPop5minDissolvedPop_11.readFeatures(json_KalyanPop5minDissolvedPop_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalyanPop5minDissolvedPop_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalyanPop5minDissolvedPop_11.addFeatures(features_KalyanPop5minDissolvedPop_11);
var lyr_KalyanPop5minDissolvedPop_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KalyanPop5minDissolvedPop_11, 
                style: style_KalyanPop5minDissolvedPop_11,
                popuplayertitle: "Kalyan Pop 5 min Dissolved Pop",
                interactive: true,
                title: '<img src="styles/legend/KalyanPop5minDissolvedPop_11.png" /> Kalyan Pop 5 min Dissolved Pop'
            });
var format_PlaceofWorship_12 = new ol.format.GeoJSON();
var features_PlaceofWorship_12 = format_PlaceofWorship_12.readFeatures(json_PlaceofWorship_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlaceofWorship_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlaceofWorship_12.addFeatures(features_PlaceofWorship_12);
var lyr_PlaceofWorship_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlaceofWorship_12, 
                style: style_PlaceofWorship_12,
                popuplayertitle: "Place of Worship",
                interactive: true,
                title: '<img src="styles/legend/PlaceofWorship_12.png" /> Place of Worship'
            });
var format_PrivateOffice_13 = new ol.format.GeoJSON();
var features_PrivateOffice_13 = format_PrivateOffice_13.readFeatures(json_PrivateOffice_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateOffice_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateOffice_13.addFeatures(features_PrivateOffice_13);
var lyr_PrivateOffice_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateOffice_13, 
                style: style_PrivateOffice_13,
                popuplayertitle: "Private Office",
                interactive: true,
                title: '<img src="styles/legend/PrivateOffice_13.png" /> Private Office'
            });
var format_office_government_14 = new ol.format.GeoJSON();
var features_office_government_14 = format_office_government_14.readFeatures(json_office_government_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_office_government_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_office_government_14.addFeatures(features_office_government_14);
var lyr_office_government_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_office_government_14, 
                style: style_office_government_14,
                popuplayertitle: "office_government",
                interactive: true,
                title: '<img src="styles/legend/office_government_14.png" /> office_government'
            });
var format_Educational_15 = new ol.format.GeoJSON();
var features_Educational_15 = format_Educational_15.readFeatures(json_Educational_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Educational_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educational_15.addFeatures(features_Educational_15);
var lyr_Educational_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Educational_15, 
                style: style_Educational_15,
                popuplayertitle: "Educational",
                interactive: true,
                title: '<img src="styles/legend/Educational_15.png" /> Educational'
            });
var format_Medical_16 = new ol.format.GeoJSON();
var features_Medical_16 = format_Medical_16.readFeatures(json_Medical_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medical_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medical_16.addFeatures(features_Medical_16);
var lyr_Medical_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Medical_16, 
                style: style_Medical_16,
                popuplayertitle: "Medical",
                interactive: true,
                title: '<img src="styles/legend/Medical_16.png" /> Medical'
            });
var format_Mall_17 = new ol.format.GeoJSON();
var features_Mall_17 = format_Mall_17.readFeatures(json_Mall_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mall_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mall_17.addFeatures(features_Mall_17);
var lyr_Mall_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mall_17, 
                style: style_Mall_17,
                popuplayertitle: "Mall",
                interactive: true,
                title: '<img src="styles/legend/Mall_17.png" /> Mall'
            });
var format_PublicBuildings_18 = new ol.format.GeoJSON();
var features_PublicBuildings_18 = format_PublicBuildings_18.readFeatures(json_PublicBuildings_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_18.addFeatures(features_PublicBuildings_18);
var lyr_PublicBuildings_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicBuildings_18, 
                style: style_PublicBuildings_18,
                popuplayertitle: "Public Buildings",
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_18.png" /> Public Buildings'
            });
var format_KalyanPOI_19 = new ol.format.GeoJSON();
var features_KalyanPOI_19 = format_KalyanPOI_19.readFeatures(json_KalyanPOI_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalyanPOI_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalyanPOI_19.addFeatures(features_KalyanPOI_19);
var lyr_KalyanPOI_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KalyanPOI_19, 
                style: style_KalyanPOI_19,
                popuplayertitle: "Kalyan POI",
                interactive: true,
                title: '<img src="styles/legend/KalyanPOI_19.png" /> Kalyan POI'
            });
var format_KalyanPOIwithinbusrange_20 = new ol.format.GeoJSON();
var features_KalyanPOIwithinbusrange_20 = format_KalyanPOIwithinbusrange_20.readFeatures(json_KalyanPOIwithinbusrange_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalyanPOIwithinbusrange_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalyanPOIwithinbusrange_20.addFeatures(features_KalyanPOIwithinbusrange_20);
var lyr_KalyanPOIwithinbusrange_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KalyanPOIwithinbusrange_20, 
                style: style_KalyanPOIwithinbusrange_20,
                popuplayertitle: "Kalyan POI within bus range",
                interactive: true,
                title: '<img src="styles/legend/KalyanPOIwithinbusrange_20.png" /> Kalyan POI within bus range'
            });
var format_AllRoutesKDMC_21 = new ol.format.GeoJSON();
var features_AllRoutesKDMC_21 = format_AllRoutesKDMC_21.readFeatures(json_AllRoutesKDMC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllRoutesKDMC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllRoutesKDMC_21.addFeatures(features_AllRoutesKDMC_21);
var lyr_AllRoutesKDMC_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllRoutesKDMC_21, 
                style: style_AllRoutesKDMC_21,
                popuplayertitle: "All Routes KDMC",
                interactive: true,
    title: 'All Routes KDMC<br />\
    <img src="styles/legend/AllRoutesKDMC_21_0.png" /> R01AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_1.png" /> R01R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_2.png" /> R02R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_3.png" /> R03R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_4.png" /> R05R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_5.png" /> R06R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_6.png" /> R07R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_7.png" /> R08R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_8.png" /> R09R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_9.png" /> R102AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_10.png" /> R102R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_11.png" /> R108ACR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_12.png" /> R108AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_13.png" /> R108BR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_14.png" /> R10AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_15.png" /> R10R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_16.png" /> R11R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_17.png" /> R12R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_18.png" /> R13R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_19.png" /> R14R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_20.png" /> R15R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_21.png" /> R16R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_22.png" /> R17R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_23.png" /> R18R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_24.png" /> R19R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_25.png" /> R20R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_26.png" /> R21R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_27.png" /> R22R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_28.png" /> R23R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_29.png" /> R24R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_30.png" /> R25R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_31.png" /> R26R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_32.png" /> R27R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_33.png" /> R28R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_34.png" /> R29R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_35.png" /> R33AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_36.png" /> R33BR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_37.png" /> R33R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_38.png" /> R34AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_39.png" /> R34B<br />\
    <img src="styles/legend/AllRoutesKDMC_21_40.png" /> R34CR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_41.png" /> R34R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_42.png" /> R35ACR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_43.png" /> R35AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_44.png" /> R35R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_45.png" /> R37R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_46.png" /> R38AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_47.png" /> R38R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_48.png" /> R3AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_49.png" /> R40R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_50.png" /> R42R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_51.png" /> R44R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_52.png" /> R45R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_53.png" /> R4AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_54.png" /> R4BR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_55.png" /> R51AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_56.png" /> R51R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_57.png" /> R55AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_58.png" /> R55BR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_59.png" /> R55R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_60.png" /> R57BR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_61.png" /> R57R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_62.png" /> R58AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_63.png" /> R58R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_64.png" /> R62R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_65.png" /> R63DR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_66.png" /> R63R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_67.png" /> R64AR<br />\
    <img src="styles/legend/AllRoutesKDMC_21_68.png" /> R64R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_69.png" /> R65R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_70.png" /> R74R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_71.png" /> R76R<br />\
    <img src="styles/legend/AllRoutesKDMC_21_72.png" /> <br />'
        });
var format_StopswithinKalyancsv_22 = new ol.format.GeoJSON();
var features_StopswithinKalyancsv_22 = format_StopswithinKalyancsv_22.readFeatures(json_StopswithinKalyancsv_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopswithinKalyancsv_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopswithinKalyancsv_22.addFeatures(features_StopswithinKalyancsv_22);
var lyr_StopswithinKalyancsv_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopswithinKalyancsv_22, 
                style: style_StopswithinKalyancsv_22,
                popuplayertitle: "Stops within Kalyan.csv",
                interactive: true,
                title: '<img src="styles/legend/StopswithinKalyancsv_22.png" /> Stops within Kalyan.csv'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ambernath_1.setVisible(true);lyr_BadlapurBoundary_2.setVisible(true);lyr_KDMCBoundry_3.setVisible(true);lyr_BhiwandiBoundary_4.setVisible(true);lyr_UlhasnagarBoundry_5.setVisible(true);lyr_KalyanStopComparison_6.setVisible(true);lyr_KDMTBusStops_7.setVisible(true);lyr_KalyanPopulation_8.setVisible(true);lyr_KDMCStopspop_9.setVisible(true);lyr_Kalyanpop5MinDissolved_10.setVisible(true);lyr_KalyanPop5minDissolvedPop_11.setVisible(true);lyr_PlaceofWorship_12.setVisible(true);lyr_PrivateOffice_13.setVisible(true);lyr_office_government_14.setVisible(true);lyr_Educational_15.setVisible(true);lyr_Medical_16.setVisible(true);lyr_Mall_17.setVisible(true);lyr_PublicBuildings_18.setVisible(true);lyr_KalyanPOI_19.setVisible(true);lyr_KalyanPOIwithinbusrange_20.setVisible(true);lyr_AllRoutesKDMC_21.setVisible(true);lyr_StopswithinKalyancsv_22.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ambernath_1,lyr_BadlapurBoundary_2,lyr_KDMCBoundry_3,lyr_BhiwandiBoundary_4,lyr_UlhasnagarBoundry_5,lyr_KalyanStopComparison_6,lyr_KDMTBusStops_7,lyr_KalyanPopulation_8,lyr_KDMCStopspop_9,lyr_Kalyanpop5MinDissolved_10,lyr_KalyanPop5minDissolvedPop_11,lyr_PlaceofWorship_12,lyr_PrivateOffice_13,lyr_office_government_14,lyr_Educational_15,lyr_Medical_16,lyr_Mall_17,lyr_PublicBuildings_18,lyr_KalyanPOI_19,lyr_KalyanPOIwithinbusrange_20,lyr_AllRoutesKDMC_21,lyr_StopswithinKalyancsv_22];
lyr_Ambernath_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BadlapurBoundary_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KDMCBoundry_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BhiwandiBoundary_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_UlhasnagarBoundry_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KalyanStopComparison_6.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', 'Pop': 'Pop', 'Percentage': 'Percentage', });
lyr_KDMTBusStops_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '___Sr__No_': '___Sr__No_', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_KalyanPopulation_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_KDMCStopspop_9.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Kalyanpop5MinDissolved_10.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_KalyanPop5minDissolvedPop_11.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_PlaceofWorship_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'religion': 'religion', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'phone': 'phone', 'grades': 'grades', 'addr_distr': 'addr_distr', 'descriptio': 'descriptio', 'townhall_t': 'townhall_t', 'service_ti': 'service_ti', 'opening_ho': 'opening_ho', 'addr_house': 'addr_house', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'ele': 'ele', 'denominati': 'denominati', 'name': 'name', });
lyr_PrivateOffice_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'tourism': 'tourism', 'name_hi': 'name_hi', 'operator': 'operator', 'name_mr': 'name_mr', 'internet_a': 'internet_a', 'name': 'name', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'barrier': 'barrier', 'access': 'access', 'website': 'website', 'phone': 'phone', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', });
lyr_office_government_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'name_mr': 'name_mr', 'name': 'name', 'government': 'government', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', });
lyr_Educational_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_city': 'addr_city', 'entrance': 'entrance', 'name_etymo': 'name_etymo', 'website': 'website', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'email': 'email', 'descriptio': 'descriptio', 'name_en': 'name_en', 'wheelchair': 'wheelchair', 'operator_t': 'operator_t', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'name': 'name', });
lyr_Medical_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_etymo': 'name_etymo', 'health_fac': 'health_fac', 'descriptio': 'descriptio', 'addr_subdi': 'addr_subdi', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'operator': 'operator', 'phone': 'phone', 'website': 'website', 'operator_t': 'operator_t', 'email': 'email', 'contact_ph': 'contact_ph', 'dispensing': 'dispensing', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name_en': 'name_en', 'emergency': 'emergency', 'addr_stree': 'addr_stree', 'name': 'name', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', });
lyr_Mall_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'building': 'building', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name': 'name', });
lyr_PublicBuildings_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator_w': 'operator_w', 'operator': 'operator', 'tower_type': 'tower_type', 'man_made': 'man_made', 'name_en': 'name_en', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'religion': 'religion', 'name': 'name', });
lyr_KalyanPOI_19.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Education': 'Education', 'Mall': 'Mall', 'Medical': 'Medical', 'Govt Offic': 'Govt Offic', 'Place Of W': 'Place Of W', 'Private Of': 'Private Of', 'Pop': 'Pop', 'Public Bld': 'Public Bld', });
lyr_KalyanPOIwithinbusrange_20.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Education': 'Education', 'Mall': 'Mall', 'NUMPOINTS': 'NUMPOINTS', 'Worship pl': 'Worship pl', 'Pvt Office': 'Pvt Office', 'Govt Offic': 'Govt Offic', 'Pop': 'Pop', 'Public bld': 'Public bld', });
lyr_AllRoutesKDMC_21.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_StopswithinKalyancsv_22.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '___Sr__No_': '___Sr__No_', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Ambernath_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BadlapurBoundary_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KDMCBoundry_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BhiwandiBoundary_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_UlhasnagarBoundry_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KalyanStopComparison_6.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', '_count': '', '_sum': '', '_mean': '', 'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', 'layer': '', 'path': '', 'Pop': '', 'Percentage': '', });
lyr_KDMTBusStops_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '___Sr__No_': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_KalyanPopulation_8.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', '_count': '', '_sum': '', '_mean': '', });
lyr_KDMCStopspop_9.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Kalyanpop5MinDissolved_10.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_KalyanPop5minDissolvedPop_11.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', '_count': '', '_sum': '', '_mean': '', });
lyr_PlaceofWorship_12.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'religion': '', 'wheelchair': '', 'name_mr': '', 'name_hi': '', 'phone': '', 'grades': '', 'addr_distr': '', 'descriptio': '', 'townhall_t': '', 'service_ti': '', 'opening_ho': '', 'addr_house': '', 'name_en': '', 'addr_stree': '', 'addr_postc': '', 'addr_city': '', 'ele': '', 'denominati': '', 'name': '', });
lyr_PrivateOffice_13.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'office': '', 'tourism': '', 'name_hi': '', 'operator': '', 'name_mr': '', 'internet_a': '', 'name': '', 'addr_postc': '', 'addr_city': '', 'barrier': '', 'access': '', 'website': '', 'phone': '', 'opening_ho': '', 'name_en': '', 'addr_stree': '', 'addr_house': '', });
lyr_office_government_14.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'office': '', 'opening_ho': '', 'name_en': '', 'name_mr': '', 'name': '', 'government': '', 'addr_stree': '', 'addr_postc': '', 'addr_city': '', });
lyr_Educational_15.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'addr_city': '', 'entrance': '', 'name_etymo': '', 'website': '', 'phone': '', 'operator': '', 'opening_ho': '', 'email': '', 'descriptio': '', 'name_en': '', 'wheelchair': '', 'operator_t': '', 'designatio': '', 'addr_stree': '', 'addr_postc': '', 'name': '', });
lyr_Medical_16.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'healthcare': '', 'healthca_1': '', 'name_mr': '', 'name_etymo': '', 'health_fac': '', 'descriptio': '', 'addr_subdi': '', 'wheelchair': '', 'opening_ho': '', 'operator': '', 'phone': '', 'website': '', 'operator_t': '', 'email': '', 'contact_ph': '', 'dispensing': '', 'addr_house': '', 'addr_city': '', 'name_en': '', 'emergency': '', 'addr_stree': '', 'name': '', 'addr_state': '', 'addr_postc': '', 'addr_full': '', 'addr_distr': '', });
lyr_Mall_17.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'shop': '', 'building': '', 'addr_stree': '', 'addr_house': '', 'addr_city': '', 'name': '', });
lyr_PublicBuildings_18.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'operator_w': '', 'operator': '', 'tower_type': '', 'man_made': '', 'name_en': '', 'opening_ho': '', 'addr_stree': '', 'addr_postc': '', 'religion': '', 'name': '', });
lyr_KalyanPOI_19.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Education': 'TextEdit', 'Mall': 'TextEdit', 'Medical': 'TextEdit', 'Govt Offic': 'TextEdit', 'Place Of W': 'TextEdit', 'Private Of': 'TextEdit', 'Pop': 'TextEdit', 'Public Bld': 'TextEdit', });
lyr_KalyanPOIwithinbusrange_20.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Education': 'TextEdit', 'Mall': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'Worship pl': 'TextEdit', 'Pvt Office': 'TextEdit', 'Govt Offic': 'TextEdit', 'Pop': 'TextEdit', 'Public bld': 'TextEdit', });
lyr_AllRoutesKDMC_21.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_StopswithinKalyancsv_22.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '___Sr__No_': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Ambernath_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BadlapurBoundary_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KDMCBoundry_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BhiwandiBoundary_4.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_UlhasnagarBoundry_5.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KalyanStopComparison_6.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', 'layer': 'no label', 'path': 'no label', 'Pop': 'no label', 'Percentage': 'no label', });
lyr_KDMTBusStops_7.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '___Sr__No_': 'hidden field', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', });
lyr_KalyanPopulation_8.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', '_count': 'hidden field', '_sum': 'inline label - visible with data', '_mean': 'hidden field', });
lyr_KDMCStopspop_9.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - visible with data', });
lyr_Kalyanpop5MinDissolved_10.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_KalyanPop5minDissolvedPop_11.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - visible with data', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', });
lyr_PlaceofWorship_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'religion': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'phone': 'hidden field', 'grades': 'hidden field', 'addr_distr': 'hidden field', 'descriptio': 'hidden field', 'townhall_t': 'hidden field', 'service_ti': 'hidden field', 'opening_ho': 'hidden field', 'addr_house': 'hidden field', 'name_en': 'inline label - visible with data', 'addr_stree': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', 'addr_city': 'hidden field', 'ele': 'hidden field', 'denominati': 'hidden field', 'name': 'header label - visible with data', });
lyr_PrivateOffice_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'tourism': 'hidden field', 'name_hi': 'hidden field', 'operator': 'hidden field', 'name_mr': 'hidden field', 'internet_a': 'hidden field', 'name': 'header label - visible with data', 'addr_postc': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', 'barrier': 'hidden field', 'access': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'name_en': 'inline label - visible with data', 'addr_stree': 'inline label - visible with data', 'addr_house': 'inline label - visible with data', });
lyr_office_government_14.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'inline label - visible with data', 'opening_ho': 'hidden field', 'name_en': 'inline label - visible with data', 'name_mr': 'inline label - visible with data', 'name': 'header label - visible with data', 'government': 'inline label - visible with data', 'addr_stree': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', });
lyr_Educational_15.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_city': 'inline label - visible with data', 'entrance': 'hidden field', 'name_etymo': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'email': 'hidden field', 'descriptio': 'hidden field', 'name_en': 'inline label - visible with data', 'wheelchair': 'hidden field', 'operator_t': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_Medical_16.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_etymo': 'hidden field', 'health_fac': 'hidden field', 'descriptio': 'hidden field', 'addr_subdi': 'hidden field', 'wheelchair': 'hidden field', 'opening_ho': 'hidden field', 'operator': 'hidden field', 'phone': 'hidden field', 'website': 'hidden field', 'operator_t': 'hidden field', 'email': 'hidden field', 'contact_ph': 'hidden field', 'dispensing': 'hidden field', 'addr_house': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', 'name_en': 'inline label - visible with data', 'emergency': 'hidden field', 'addr_stree': 'hidden field', 'name': 'header label - always visible', 'addr_state': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', 'addr_full': 'inline label - visible with data', 'addr_distr': 'inline label - visible with data', });
lyr_Mall_17.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'shop': 'hidden field', 'building': 'inline label - visible with data', 'addr_stree': 'inline label - visible with data', 'addr_house': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_PublicBuildings_18.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'tower_type': 'hidden field', 'man_made': 'hidden field', 'name_en': 'inline label - visible with data', 'opening_ho': 'inline label - visible with data', 'addr_stree': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', 'religion': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_KalyanPOI_19.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Education': 'inline label - visible with data', 'Mall': 'inline label - visible with data', 'Medical': 'inline label - visible with data', 'Govt Offic': 'inline label - visible with data', 'Place Of W': 'inline label - visible with data', 'Private Of': 'inline label - visible with data', 'Pop': 'header label - visible with data', 'Public Bld': 'inline label - visible with data', });
lyr_KalyanPOIwithinbusrange_20.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Education': 'inline label - visible with data', 'Mall': 'inline label - visible with data', 'NUMPOINTS': 'hidden field', 'Worship pl': 'inline label - visible with data', 'Pvt Office': 'inline label - visible with data', 'Govt Offic': 'inline label - visible with data', 'Pop': 'header label - visible with data', 'Public bld': 'inline label - visible with data', });
lyr_AllRoutesKDMC_21.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'header label - visible with data', 'path': 'hidden field', 'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_StopswithinKalyancsv_22.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '___Sr__No_': 'hidden field', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', 'shapeName': 'inline label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_StopswithinKalyancsv_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});