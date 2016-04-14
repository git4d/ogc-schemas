var AdsDataCenter_Module_Factory = function () {
  var AdsDataCenter = {
    name: 'AdsDataCenter',
    defaultElementNamespaceURI: 'urn:ads-data-center:schemas',
    typeInfos: [{
        localName: 'Properties',
        propertyInfos: [{
            name: 'property',
            required: true,
            collection: true,
            typeInfo: '.Property'
          }]
      }, {
        localName: 'AttachedDoc',
        propertyInfos: [{
            name: 'identification',
            required: true,
            typeInfo: '.DocIdentification'
          }, {
            name: 'classification',
            required: true
          }, {
            name: 'docVersions',
            required: true,
            typeInfo: '.AttachedDoc.DocVersions'
          }, {
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'linkRefs',
            typeInfo: '.LinkRefs'
          }]
      }, {
        localName: 'Entity',
        propertyInfos: [{
            name: 'identification',
            required: true,
            typeInfo: '.EntityIdentification'
          }, {
            name: 'classification',
            required: true
          }, {
            name: 'lifeCycle',
            required: true,
            typeInfo: '.EntityLifeCycle'
          }, {
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'linkRefs',
            typeInfo: '.LinkRefs'
          }, {
            name: 'footprint'
          }]
      }, {
        localName: 'LinkRefs',
        propertyInfos: [{
            name: 'linkRef',
            required: true,
            collection: true,
            typeInfo: '.LinkRef'
          }]
      }, {
        localName: 'LinkRef',
        propertyInfos: [{
            name: 'refId',
            required: true
          }, {
            name: 'linkType',
            required: true
          }]
      }, {
        localName: 'AttachedDoc.DocVersions',
        typeName: null,
        propertyInfos: [{
            name: 'docVersion',
            required: true,
            collection: true,
            typeInfo: '.DocVersion'
          }]
      }, {
        localName: 'DocVersion',
        propertyInfos: [{
            name: 'versionNumber',
            required: true
          }, {
            name: 'versionedId',
            required: true
          }, {
            name: 'fileName',
            required: true
          }, {
            name: 'fileSize',
            required: true,
            typeInfo: 'Int'
          }, {
            name: 'uploader',
            required: true
          }, {
            name: 'uploadDate',
            required: true,
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'EntityIdentification',
        propertyInfos: [{
            name: 'subType',
            required: true
          }, {
            name: 'id',
            required: true
          }, {
            name: 'name',
            required: true
          }]
      }, {
        localName: 'EntityLifeCycle',
        propertyInfos: [{
            name: 'creator',
            required: true
          }, {
            name: 'creationDate',
            required: true,
            typeInfo: 'DateTime'
          }, {
            name: 'lastUpdater',
            required: true
          }, {
            name: 'lastUpdateDate',
            required: true,
            typeInfo: 'DateTime'
          }, {
            name: 'lastUpdateDescription',
            required: true
          }]
      }, {
        localName: 'DocIdentification',
        propertyInfos: [{
            name: 'subType',
            required: true
          }, {
            name: 'id',
            required: true
          }, {
            name: 'title',
            required: true
          }]
      }, {
        localName: 'Property',
        propertyInfos: [{
            name: 'key',
            required: true
          }, {
            name: 'value',
            required: true,
            collection: true
          }]
      }, {
        type: 'enumInfo',
        localName: 'LinkType',
        values: ['IsChildOf', 'IsOwnedBy', 'IsReviewOfVersion', 'IsAssociatedTo']
      }],
    elementInfos: [{
        elementName: 'entity',
        typeInfo: '.Entity'
      }, {
        elementName: 'attachedDoc',
        typeInfo: '.AttachedDoc'
      }]
  };
  return {
    AdsDataCenter: AdsDataCenter
  };
};
if (typeof define === 'function' && define.amd) {
  define([], AdsDataCenter_Module_Factory);
}
else {
  var AdsDataCenter_Module = AdsDataCenter_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.AdsDataCenter = AdsDataCenter_Module.AdsDataCenter;
  }
  else {
    var AdsDataCenter = AdsDataCenter_Module.AdsDataCenter;
  }
}
