var wms_layers = [];


        var lyr_googlesta_0 = new ol.layer.Tile({
            'title': 'google sta',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___1, 
                style: style___1,
                interactive: true,
    title: 'النطاق_الاشرافي<br />\
    <img src="styles/legend/__1_0.png" /> مخطط الامير نايف+مركز الميق<br />\
    <img src="styles/legend/__1_1.png" /> مركز البيداء<br />\
    <img src="styles/legend/__1_2.png" /> مركز الحرم<br />\
    <img src="styles/legend/__1_3.png" /> مركز الخالدية<br />\
    <img src="styles/legend/__1_4.png" /> مركز الخليل<br />\
    <img src="styles/legend/__1_5.png" /> مركز السديري<br />\
    <img src="styles/legend/__1_6.png" /> مركز الشهداء<br />\
    <img src="styles/legend/__1_7.png" /> مركز الصناعية+مركز الميقات<br />\
    <img src="styles/legend/__1_8.png" /> مركز العاقول<br />\
    <img src="styles/legend/__1_9.png" /> مركز العريض<br />\
    <img src="styles/legend/__1_10.png" /> مركز العزيزية<br />\
    <img src="styles/legend/__1_11.png" /> مركز العقيق<br />\
    <img src="styles/legend/__1_12.png" /> مركز العنبرية<br />\
    <img src="styles/legend/__1_13.png" /> مركز الفتح<br />\
    <img src="styles/legend/__1_14.png" /> مركز الفيصلية<br />\
    <img src="styles/legend/__1_15.png" /> مركز المطار<br />\
    <img src="styles/legend/__1_16.png" /> مركز الملك فهد<br />\
    <img src="styles/legend/__1_17.png" /> مركز الميقات<br />\
    <img src="styles/legend/__1_18.png" /> مركز باب المجيدي<br />\
    <img src="styles/legend/__1_19.png" /> مركز باب الملك عبدالعزيز<br />\
    <img src="styles/legend/__1_20.png" /> مركز طيبة<br />\
    <img src="styles/legend/__1_21.png" /> مركز قباء<br />\
    <img src="styles/legend/__1_22.png" /> مركز مخطط الامير نايف<br />\
    <img src="styles/legend/__1_23.png" /> <br />'
        });
var format_Export_Output_2 = new ol.format.GeoJSON();
var features_Export_Output_2 = format_Export_Output_2.readFeatures(json_Export_Output_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_2.addFeatures(features_Export_Output_2);cluster_Export_Output_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Export_Output_2
});
var lyr_Export_Output_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Export_Output_2, 
                style: style_Export_Output_2,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_2.png" /> Export_Output'
            });

lyr_googlesta_0.setVisible(true);lyr___1.setVisible(true);lyr_Export_Output_2.setVisible(true);
var layersList = [lyr_googlesta_0,lyr___1,lyr_Export_Output_2];
lyr___1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NEIGH_NAME': 'NEIGH_NAME', 'NAME': 'NAME', 'BELEDIYE': 'BELEDIYE', 'DIST_CODE': 'DIST_CODE', 'NEIGH_CODE': 'NEIGH_CODE', 'BEL_CODE': 'BEL_CODE', 'AREA': 'AREA', 'POPULATION': 'POPULATION', 'HIGH': 'HIGH', 'SQKM': 'SQKM', 'عدد_ا': 'عدد_ا', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Export_Output_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr___1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NEIGH_NAME': 'TextEdit', 'NAME': 'TextEdit', 'BELEDIYE': 'TextEdit', 'DIST_CODE': 'TextEdit', 'NEIGH_CODE': 'TextEdit', 'BEL_CODE': 'TextEdit', 'AREA': 'TextEdit', 'POPULATION': 'TextEdit', 'HIGH': 'TextEdit', 'SQKM': 'TextEdit', 'عدد_ا': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Export_Output_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', });
lyr___1.set('fieldLabels', {'OBJECTID_1': 'no label', 'NEIGH_NAME': 'no label', 'NAME': 'inline label', 'BELEDIYE': 'no label', 'DIST_CODE': 'no label', 'NEIGH_CODE': 'no label', 'BEL_CODE': 'no label', 'AREA': 'no label', 'POPULATION': 'no label', 'HIGH': 'no label', 'SQKM': 'no label', 'عدد_ا': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Export_Output_2.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', });
lyr_Export_Output_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});