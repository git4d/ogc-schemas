var WCS_1_0_0_Module_Factory = function () {
  var WCS_1_0_0 = {
    n: 'WCS_1_0_0',
    dens: 'http:\/\/www.opengis.net\/wcs',
    deps: ['XLink_1_0', 'GML4WCS_1_0_0'],
    tis: [{
        ln: 'GetCapabilities',
        tn: null,
        ps: [{
            n: 'section'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputType',
        ps: [{
            n: 'crs',
            ti: 'GML4WCS_1_0_0.CodeType'
          }, {
            n: 'format',
            rq: true,
            ti: 'GML4WCS_1_0_0.CodeType'
          }]
      }, {
        ln: 'ServiceType',
        bti: '.AbstractDescriptionType',
        ps: [{
            n: 'keywords',
            mno: 0,
            col: true,
            ti: '.Keywords'
          }, {
            n: 'responsibleParty',
            ti: '.ResponsiblePartyType'
          }, {
            n: 'fees',
            rq: true,
            ti: 'GML4WCS_1_0_0.CodeListType'
          }, {
            n: 'accessConstraints',
            rq: true,
            col: true,
            ti: 'GML4WCS_1_0_0.CodeListType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'TelephoneType',
        ps: [{
            n: 'voice',
            mno: 0,
            col: true
          }, {
            n: 'facsimile',
            mno: 0,
            col: true
          }]
      }, {
        ln: 'DCPTypeType.HTTP.Post',
        tn: null,
        ps: [{
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }]
      }, {
        ln: 'WCSCapabilitiesType',
        tn: 'WCS_CapabilitiesType',
        ps: [{
            n: 'service',
            rq: true,
            en: 'Service',
            ti: '.ServiceType'
          }, {
            n: 'capability',
            rq: true,
            en: 'Capability',
            ti: '.WCSCapabilityType'
          }, {
            n: 'contentMetadata',
            rq: true,
            en: 'ContentMetadata',
            ti: '.ContentMetadata'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'WCSCapabilityType.Request',
        tn: null,
        ps: [{
            n: 'getCapabilities',
            rq: true,
            en: 'GetCapabilities',
            ti: '.WCSCapabilityType.Request.GetCapabilities'
          }, {
            n: 'describeCoverage',
            rq: true,
            en: 'DescribeCoverage',
            ti: '.WCSCapabilityType.Request.DescribeCoverage'
          }, {
            n: 'getCoverage',
            rq: true,
            en: 'GetCoverage',
            ti: '.WCSCapabilityType.Request.GetCoverage'
          }]
      }, {
        ln: 'WCSCapabilityType.VendorSpecificCapabilities',
        tn: null,
        ps: [{
            n: 'any',
            rq: true,
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'TypedLiteralType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }]
      }, {
        ln: 'SpatialSubsetType',
        bti: '.SpatialDomainType'
      }, {
        ln: 'OnlineResourceType',
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataAssociationType',
        bti: 'GML4WCS_1_0_0.MetaDataPropertyType'
      }, {
        ln: 'Keywords',
        tn: null,
        ps: [{
            n: 'keyword',
            rq: true,
            col: true
          }, {
            n: 'type',
            ti: 'GML4WCS_1_0_0.CodeType'
          }]
      }, {
        ln: 'ContactType',
        ps: [{
            n: 'phone',
            ti: '.TelephoneType'
          }, {
            n: 'address',
            ti: '.AddressType'
          }, {
            n: 'onlineResource',
            ti: '.OnlineResourceType'
          }]
      }, {
        ln: 'CoverageDescription',
        tn: null,
        ps: [{
            n: 'coverageOffering',
            rq: true,
            col: true,
            en: 'CoverageOffering',
            ti: '.CoverageOfferingType'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'ContentMetadata',
        tn: null,
        ps: [{
            n: 'coverageOfferingBrief',
            mno: 0,
            col: true,
            en: 'CoverageOfferingBrief',
            ti: '.CoverageOfferingBriefType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
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
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoverageOfferingType',
        bti: '.CoverageOfferingBriefType',
        ps: [{
            n: 'domainSet',
            rq: true,
            ti: '.DomainSetType'
          }, {
            n: 'rangeSet',
            rq: true,
            ti: '.RangeSet'
          }, {
            n: 'supportedCRSs',
            rq: true,
            ti: '.SupportedCRSsType'
          }, {
            n: 'supportedFormats',
            rq: true,
            ti: '.SupportedFormatsType'
          }, {
            n: 'supportedInterpolations',
            ti: '.SupportedInterpolationsType'
          }]
      }, {
        ln: 'AxisDescriptionType',
        bti: '.AbstractDescriptionType',
        ps: [{
            n: 'values',
            rq: true,
            ti: '.AxisDescriptionType.Values'
          }, {
            n: 'semantic',
            an: {
              lp: 'semantic',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'refSys',
            an: {
              lp: 'refSys'
            },
            t: 'a'
          }, {
            n: 'refSysLabel',
            an: {
              lp: 'refSysLabel'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataLinkType',
        bti: '.MetadataAssociationType',
        ps: [{
            n: 'metadataType',
            rq: true,
            an: {
              lp: 'metadataType'
            },
            t: 'a'
          }]
      }, {
        ln: 'RangeSetType',
        bti: '.AbstractDescriptionType',
        ps: [{
            n: 'axisDescription',
            mno: 0,
            col: true,
            ti: '.AxisDescription'
          }, {
            n: 'nullValues',
            ti: '.ValueEnumType'
          }, {
            n: 'semantic',
            an: {
              lp: 'semantic',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'refSys',
            an: {
              lp: 'refSys'
            },
            t: 'a'
          }, {
            n: 'refSysLabel',
            an: {
              lp: 'refSysLabel'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractDescriptionBaseType',
        bti: 'GML4WCS_1_0_0.AbstractGMLType'
      }, {
        ln: 'LonLatEnvelopeType',
        bti: '.LonLatEnvelopeBaseType',
        ps: [{
            n: 'timePosition',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            en: {
              lp: 'timePosition',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML4WCS_1_0_0.TimePositionType'
          }]
      }, {
        ln: 'SupportedInterpolationsType',
        ps: [{
            n: 'interpolationMethod',
            rq: true,
            col: true
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'DCPTypeType.HTTP',
        tn: null,
        ps: [{
            n: 'getOrPost',
            rq: true,
            col: true,
            etis: [{
                en: 'Get',
                ti: '.DCPTypeType.HTTP.Get'
              }, {
                en: 'Post',
                ti: '.DCPTypeType.HTTP.Post'
              }],
            t: 'es'
          }]
      }, {
        ln: 'DescribeCoverage',
        tn: null,
        ps: [{
            n: 'coverage',
            mno: 0,
            col: true,
            en: 'Coverage'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoverageOfferingBriefType',
        bti: '.AbstractDescriptionType',
        ps: [{
            n: 'lonLatEnvelope',
            rq: true,
            ti: '.LonLatEnvelopeType'
          }, {
            n: 'keywords',
            mno: 0,
            col: true,
            ti: '.Keywords'
          }]
      }, {
        ln: 'AbstractDescriptionType',
        bti: '.AbstractDescriptionBaseType',
        ps: [{
            n: 'wcsDescription',
            en: 'description'
          }, {
            n: 'wcsName',
            rq: true,
            en: 'name'
          }, {
            n: 'label',
            rq: true
          }]
      }, {
        ln: 'IntervalType',
        tn: 'intervalType',
        bti: '.ValueRangeType',
        ps: [{
            n: 'res',
            ti: '.TypedLiteralType'
          }]
      }, {
        ln: 'DomainSetType',
        ps: [{
            n: 'spatialDomain',
            rq: true,
            ti: '.SpatialDomainType'
          }, {
            n: 'optionalTemporalDomain',
            en: 'temporalDomain',
            ti: '.TimeSequenceType'
          }, {
            n: 'temporalDomain',
            rq: true,
            ti: '.TimeSequenceType'
          }]
      }, {
        ln: 'RangeSet',
        tn: null,
        ps: [{
            n: 'rangeSet',
            rq: true,
            en: 'RangeSet',
            ti: '.RangeSetType'
          }]
      }, {
        ln: 'DCPTypeType',
        ps: [{
            n: 'http',
            rq: true,
            en: 'HTTP',
            ti: '.DCPTypeType.HTTP'
          }]
      }, {
        ln: 'WCSCapabilityType.Request.DescribeCoverage',
        tn: null,
        ps: [{
            n: 'dcpType',
            rq: true,
            col: true,
            en: 'DCPType',
            ti: '.DCPTypeType'
          }]
      }, {
        ln: 'WCSCapabilityType',
        ps: [{
            n: 'request',
            rq: true,
            en: 'Request',
            ti: '.WCSCapabilityType.Request'
          }, {
            n: 'exception',
            rq: true,
            en: 'Exception',
            ti: '.WCSCapabilityType.Exception'
          }, {
            n: 'vendorSpecificCapabilities',
            en: 'VendorSpecificCapabilities',
            ti: '.WCSCapabilityType.VendorSpecificCapabilities'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetCoverage',
        tn: null,
        ps: [{
            n: 'sourceCoverage',
            rq: true
          }, {
            n: 'domainSubset',
            rq: true,
            ti: '.DomainSubsetType'
          }, {
            n: 'rangeSubset',
            ti: '.RangeSubsetType'
          }, {
            n: 'interpolationMethod'
          }, {
            n: 'output',
            rq: true,
            ti: '.OutputType'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'TimeSequenceType',
        ps: [{
            n: 'timePositionOrTimePeriod',
            rq: true,
            col: true,
            etis: [{
                en: {
                  lp: 'timePosition',
                  ns: 'http:\/\/www.opengis.net\/gml'
                },
                ti: 'GML4WCS_1_0_0.TimePositionType'
              }, {
                en: 'timePeriod',
                ti: '.TimePeriodType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'DCPTypeType.HTTP.Get',
        tn: null,
        ps: [{
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }]
      }, {
        ln: 'DomainSubsetType',
        ps: [{
            n: 'spatialSubset',
            rq: true,
            ti: '.SpatialSubsetType'
          }, {
            n: 'optionalTemporalSubset',
            en: 'temporalSubset',
            ti: '.TimeSequenceType'
          }, {
            n: 'temporalSubset',
            rq: true,
            ti: '.TimeSequenceType'
          }]
      }, {
        ln: 'ResponsiblePartyType',
        ps: [{
            n: 'individualName',
            rq: true
          }, {
            n: 'optionalOrganisationName',
            en: 'organisationName'
          }, {
            n: 'organisationName',
            rq: true
          }, {
            n: 'positionName'
          }, {
            n: 'contactInfo',
            ti: '.ContactType'
          }]
      }, {
        ln: 'TimePeriodType',
        ps: [{
            n: 'beginPosition',
            rq: true,
            ti: 'GML4WCS_1_0_0.TimePositionType'
          }, {
            n: 'endPosition',
            rq: true,
            ti: 'GML4WCS_1_0_0.TimePositionType'
          }, {
            n: 'timeResolution'
          }, {
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }]
      }, {
        ln: 'WCSCapabilityType.Exception',
        tn: null,
        ps: [{
            n: 'format',
            rq: true,
            col: true,
            en: 'Format'
          }]
      }, {
        ln: 'AddressType',
        ps: [{
            n: 'deliveryPoint',
            mno: 0,
            col: true
          }, {
            n: 'city'
          }, {
            n: 'administrativeArea'
          }, {
            n: 'postalCode'
          }, {
            n: 'country'
          }, {
            n: 'electronicMailAddress',
            mno: 0,
            col: true
          }]
      }, {
        ln: 'LonLatEnvelopeBaseType',
        bti: 'GML4WCS_1_0_0.EnvelopeType'
      }, {
        ln: 'ValueRangeType',
        tn: 'valueRangeType',
        ps: [{
            n: 'min',
            ti: '.TypedLiteralType'
          }, {
            n: 'max',
            ti: '.TypedLiteralType'
          }, {
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'semantic',
            an: {
              lp: 'semantic',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'atomic',
            ti: 'Boolean',
            an: {
              lp: 'atomic'
            },
            t: 'a'
          }, {
            n: 'closure',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'closure',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }]
      }, {
        ln: 'RangeSubsetType.AxisSubset',
        tn: null,
        bti: '.ValueEnumBaseType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'WCSCapabilityType.Request.GetCapabilities',
        tn: null,
        ps: [{
            n: 'dcpType',
            rq: true,
            col: true,
            en: 'DCPType',
            ti: '.DCPTypeType'
          }]
      }, {
        ln: 'ValueEnumType',
        tn: 'valueEnumType',
        bti: '.ValueEnumBaseType',
        ps: [{
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'semantic',
            an: {
              lp: 'semantic',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }]
      }, {
        ln: 'ValueEnumBaseType',
        tn: 'valueEnumBaseType',
        ps: [{
            n: 'intervalOrSingleValue',
            rq: true,
            col: true,
            etis: [{
                en: 'interval',
                ti: '.IntervalType'
              }, {
                en: 'singleValue',
                ti: '.TypedLiteralType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'RangeSubsetType',
        ps: [{
            n: 'axisSubset',
            rq: true,
            col: true,
            ti: '.RangeSubsetType.AxisSubset'
          }]
      }, {
        ln: 'SpatialDomainType',
        ps: [{
            n: 'envelope',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: {
              lp: 'Envelope',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML4WCS_1_0_0.EnvelopeType',
            t: 'er'
          }, {
            n: 'grid',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: {
              lp: 'Grid',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML4WCS_1_0_0.GridType',
            t: 'er'
          }, {
            n: 'polygon',
            mno: 0,
            col: true,
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML4WCS_1_0_0.PolygonType'
          }]
      }, {
        ln: 'SupportedFormatsType',
        ps: [{
            n: 'formats',
            rq: true,
            col: true,
            ti: 'GML4WCS_1_0_0.CodeListType'
          }, {
            n: 'nativeFormat',
            an: {
              lp: 'nativeFormat'
            },
            t: 'a'
          }]
      }, {
        ln: 'AxisDescription',
        tn: null,
        ps: [{
            n: 'axisDescription',
            rq: true,
            en: 'AxisDescription',
            ti: '.AxisDescriptionType'
          }]
      }, {
        ln: 'SupportedCRSsType',
        ps: [{
            n: 'requestResponseCRSs',
            rq: true,
            col: true,
            ti: 'GML4WCS_1_0_0.CodeListType'
          }, {
            n: 'requestCRSs',
            rq: true,
            col: true,
            ti: 'GML4WCS_1_0_0.CodeListType'
          }, {
            n: 'responseCRSs',
            rq: true,
            col: true,
            ti: 'GML4WCS_1_0_0.CodeListType'
          }, {
            n: 'nativeCRSs',
            mno: 0,
            col: true,
            ti: 'GML4WCS_1_0_0.CodeListType'
          }]
      }, {
        ln: 'AxisDescriptionType.Values',
        tn: null,
        bti: '.ValueEnumType',
        ps: [{
            n: '_default',
            en: 'default',
            ti: '.TypedLiteralType'
          }]
      }, {
        ln: 'WCSCapabilityType.Request.GetCoverage',
        tn: null,
        ps: [{
            n: 'dcpType',
            rq: true,
            col: true,
            en: 'DCPType',
            ti: '.DCPTypeType'
          }]
      }, {
        t: 'enum',
        ln: 'InterpolationMethodType',
        vs: ['nearest neighbor', 'bilinear', 'bicubic', 'lost area', 'barycentric', 'none']
      }, {
        t: 'enum',
        ln: 'CapabilitiesSectionType',
        vs: ['\/', '\/WCS_Capabilities\/Service', '\/WCS_Capabilities\/Capability', '\/WCS_Capabilities\/ContentMetadata']
      }],
    eis: [{
        en: 'CoverageOffering',
        ti: '.CoverageOfferingType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'axisDescription',
        ti: '.AxisDescription'
      }, {
        en: 'timePeriod',
        ti: '.TimePeriodType'
      }, {
        en: 'supportedInterpolations',
        ti: '.SupportedInterpolationsType'
      }, {
        en: 'singleValue',
        ti: '.TypedLiteralType'
      }, {
        en: 'spatialSubset',
        ti: '.SpatialSubsetType'
      }, {
        en: 'CoverageOfferingBrief',
        ti: '.CoverageOfferingBriefType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'GetCoverage',
        ti: '.GetCoverage'
      }, {
        en: 'keywords',
        ti: '.Keywords'
      }, {
        en: 'formats',
        ti: 'GML4WCS_1_0_0.CodeListType'
      }, {
        en: 'RangeSet',
        ti: '.RangeSetType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'interval',
        ti: '.IntervalType'
      }, {
        en: 'name'
      }, {
        en: 'metadataLink',
        ti: '.MetadataLinkType',
        sh: {
          lp: 'metaDataProperty',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'WCS_Capabilities',
        ti: '.WCSCapabilitiesType'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilities'
      }, {
        en: 'ContentMetadata',
        ti: '.ContentMetadata'
      }, {
        en: 'domainSet',
        ti: '.DomainSetType'
      }, {
        en: 'temporalSubset',
        ti: '.TimeSequenceType'
      }, {
        en: 'CoverageDescription',
        ti: '.CoverageDescription'
      }, {
        en: 'Capability',
        ti: '.WCSCapabilityType'
      }, {
        en: 'spatialDomain',
        ti: '.SpatialDomainType'
      }, {
        en: 'rangeSet',
        ti: '.RangeSet'
      }, {
        en: 'supportedCRSs',
        ti: '.SupportedCRSsType'
      }, {
        en: 'Service',
        ti: '.ServiceType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'description'
      }, {
        en: 'lonLatEnvelope',
        ti: '.LonLatEnvelopeType'
      }, {
        en: 'DescribeCoverage',
        ti: '.DescribeCoverage'
      }, {
        en: 'TimeSequence',
        ti: '.TimeSequenceType'
      }, {
        en: 'temporalDomain',
        ti: '.TimeSequenceType'
      }, {
        en: 'interpolationMethod'
      }, {
        en: 'AxisDescription',
        ti: '.AxisDescriptionType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'supportedFormats',
        ti: '.SupportedFormatsType'
      }]
  };
  return {
    WCS_1_0_0: WCS_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WCS_1_0_0_Module_Factory);
}
else {
  var WCS_1_0_0_Module = WCS_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WCS_1_0_0 = WCS_1_0_0_Module.WCS_1_0_0;
  }
  else {
    var WCS_1_0_0 = WCS_1_0_0_Module.WCS_1_0_0;
  }
}