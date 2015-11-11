var CityGML_Bridge_2_0_Module_Factory = function () {
  var CityGML_Bridge_2_0 = {
    n: 'CityGML_Bridge_2_0',
    dens: 'http:\/\/www.opengis.net\/citygml\/bridge\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0', 'GML_3_1_1', 'CityGML_2_0'],
    tis: [{
        ln: 'BoundarySurfacePropertyType',
        ps: [{
            n: 'boundarySurface',
            rq: true,
            mx: false,
            dom: false,
            en: '_BoundarySurface',
            ti: '.AbstractBoundarySurfaceType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'IntBridgeInstallationPropertyType',
        ps: [{
            n: 'intBridgeInstallation',
            rq: true,
            en: 'IntBridgeInstallation',
            ti: '.IntBridgeInstallationType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'RoofSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfRoofSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfRoofSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractBridgeType',
        bti: 'CityGML_2_0.AbstractSiteType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'yearOfConstruction',
            ti: 'Calendar'
          }, {
            n: 'yearOfDemolition',
            ti: 'Calendar'
          }, {
            n: 'isMovable',
            ti: 'Boolean'
          }, {
            n: 'lod1Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod1MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod1TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod2Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod2MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod2TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'outerBridgeConstruction',
            mno: 0,
            col: true,
            ti: '.BridgeConstructionElementPropertyType'
          }, {
            n: 'outerBridgeInstallation',
            mno: 0,
            col: true,
            ti: '.BridgeInstallationPropertyType'
          }, {
            n: 'interiorBridgeInstallation',
            mno: 0,
            col: true,
            ti: '.IntBridgeInstallationPropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'lod3Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod3TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod4Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod4TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'interiorBridgeRoom',
            mno: 0,
            col: true,
            ti: '.InteriorBridgeRoomPropertyType'
          }, {
            n: 'consistsOfBridgePart',
            mno: 0,
            col: true,
            ti: '.BridgePartPropertyType'
          }, {
            n: 'address',
            mno: 0,
            col: true,
            ti: 'CityGML_2_0.AddressPropertyType'
          }, {
            n: 'genericApplicationPropertyOfAbstractBridge',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfAbstractBridge',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BridgePartPropertyType',
        ps: [{
            n: 'bridgePart',
            rq: true,
            en: 'BridgePart',
            ti: '.BridgePartType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'BridgeInstallationType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod2Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod3Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod2ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod3ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfBridgeInstallation',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBridgeInstallation',
            ti: 'AnyType'
          }]
      }, {
        ln: 'OuterCeilingSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfOuterCeilingSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfOuterCeilingSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractBoundarySurfaceType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'opening',
            mno: 0,
            col: true,
            ti: '.OpeningPropertyType'
          }, {
            n: 'genericApplicationPropertyOfBoundarySurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBoundarySurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'InteriorBridgeRoomPropertyType',
        ps: [{
            n: 'bridgeRoom',
            rq: true,
            en: 'BridgeRoom',
            ti: '.BridgeRoomType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'InteriorFurniturePropertyType',
        ps: [{
            n: 'bridgeFurniture',
            rq: true,
            en: 'BridgeFurniture',
            ti: '.BridgeFurnitureType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'WallSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfWallSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfWallSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BridgeInstallationPropertyType',
        ps: [{
            n: 'bridgeInstallation',
            rq: true,
            en: 'BridgeInstallation',
            ti: '.BridgeInstallationType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GroundSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfGroundSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfGroundSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BridgeRoomType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod4Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'interiorFurniture',
            mno: 0,
            col: true,
            ti: '.InteriorFurniturePropertyType'
          }, {
            n: 'bridgeRoomInstallation',
            mno: 0,
            col: true,
            ti: '.IntBridgeInstallationPropertyType'
          }, {
            n: 'genericApplicationPropertyOfBridgeRoom',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBridgeRoom',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BridgeConstructionElementType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod1Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod2Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod3Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod1TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod2TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod3TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod4TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod1ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod2ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod3ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfBridgeConstructionElement',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBridgeConstructionElement',
            ti: 'AnyType'
          }]
      }, {
        ln: 'OpeningPropertyType',
        ps: [{
            n: 'opening',
            rq: true,
            mx: false,
            dom: false,
            en: '_Opening',
            ti: '.AbstractOpeningType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'InteriorWallSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfInteriorWallSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfInteriorWallSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'ClosureSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfClosureSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfClosureSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'WindowType',
        bti: '.AbstractOpeningType',
        ps: [{
            n: 'genericApplicationPropertyOfWindow',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfWindow',
            ti: 'AnyType'
          }]
      }, {
        ln: 'CeilingSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfCeilingSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfCeilingSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'FloorSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfFloorSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfFloorSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'OuterFloorSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfOuterFloorSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfOuterFloorSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BridgeFurnitureType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'genericApplicationPropertyOfBridgeFurniture',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBridgeFurniture',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractOpeningType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'genericApplicationPropertyOfOpening',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfOpening',
            ti: 'AnyType'
          }]
      }, {
        ln: 'DoorType',
        bti: '.AbstractOpeningType',
        ps: [{
            n: 'address',
            mno: 0,
            col: true,
            ti: 'CityGML_2_0.AddressPropertyType'
          }, {
            n: 'genericApplicationPropertyOfDoor',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfDoor',
            ti: 'AnyType'
          }]
      }, {
        ln: 'IntBridgeInstallationType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfIntBridgeInstallation',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfIntBridgeInstallation',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BridgeType',
        bti: '.AbstractBridgeType',
        ps: [{
            n: 'genericApplicationPropertyOfBridge',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBridge',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BridgePartType',
        bti: '.AbstractBridgeType',
        ps: [{
            n: 'genericApplicationPropertyOfBridgePart',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBridgePart',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BridgeConstructionElementPropertyType',
        ps: [{
            n: 'bridgeConstructionElement',
            rq: true,
            en: 'BridgeConstructionElement',
            ti: '.BridgeConstructionElementType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }],
    eis: [{
        en: 'BridgeRoom',
        ti: '.BridgeRoomType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfBridgeRoom',
        ti: 'AnyType'
      }, {
        en: '_AbstractBridge',
        ti: '.AbstractBridgeType',
        sh: {
          lp: '_Site',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: 'InteriorWallSurface',
        ti: '.InteriorWallSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'RoofSurface',
        ti: '.RoofSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'Bridge',
        ti: '.BridgeType',
        sh: '_AbstractBridge'
      }, {
        en: '_Opening',
        ti: '.AbstractOpeningType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfWindow',
        ti: 'AnyType'
      }, {
        en: 'OuterCeilingSurface',
        ti: '.OuterCeilingSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfGroundSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBridgeFurniture',
        ti: 'AnyType'
      }, {
        en: 'OuterFloorSurface',
        ti: '.OuterFloorSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfBridge',
        ti: 'AnyType'
      }, {
        en: 'BridgeConstructionElement',
        ti: '.BridgeConstructionElementType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfInteriorWallSurface',
        ti: 'AnyType'
      }, {
        en: 'GroundSurface',
        ti: '.GroundSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'IntBridgeInstallation',
        ti: '.IntBridgeInstallationType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfRoofSurface',
        ti: 'AnyType'
      }, {
        en: 'CeilingSurface',
        ti: '.CeilingSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'FloorSurface',
        ti: '.FloorSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'WallSurface',
        ti: '.WallSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfBridgePart',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfOpening',
        ti: 'AnyType'
      }, {
        en: 'ClosureSurface',
        ti: '.ClosureSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfOuterCeilingSurface',
        ti: 'AnyType'
      }, {
        en: 'BridgeInstallation',
        ti: '.BridgeInstallationType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfDoor',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfOuterFloorSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBoundarySurface',
        ti: 'AnyType'
      }, {
        en: 'Door',
        ti: '.DoorType',
        sh: '_Opening'
      }, {
        en: '_GenericApplicationPropertyOfBridgeConstructionElement',
        ti: 'AnyType'
      }, {
        en: '_BoundarySurface',
        ti: '.AbstractBoundarySurfaceType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: 'BridgePart',
        ti: '.BridgePartType',
        sh: '_AbstractBridge'
      }, {
        en: 'BridgeFurniture',
        ti: '.BridgeFurnitureType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfIntBridgeInstallation',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfAbstractBridge',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfClosureSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfFloorSurface',
        ti: 'AnyType'
      }, {
        en: 'Window',
        ti: '.WindowType',
        sh: '_Opening'
      }, {
        en: '_GenericApplicationPropertyOfWallSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfCeilingSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBridgeInstallation',
        ti: 'AnyType'
      }]
  };
  return {
    CityGML_Bridge_2_0: CityGML_Bridge_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], CityGML_Bridge_2_0_Module_Factory);
}
else {
  var CityGML_Bridge_2_0_Module = CityGML_Bridge_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.CityGML_Bridge_2_0 = CityGML_Bridge_2_0_Module.CityGML_Bridge_2_0;
  }
  else {
    var CityGML_Bridge_2_0 = CityGML_Bridge_2_0_Module.CityGML_Bridge_2_0;
  }
}