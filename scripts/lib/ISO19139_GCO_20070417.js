var ISO19139_GCO_20070417_Module_Factory = function () {
  var ISO19139_GCO_20070417 = {
    n: 'ISO19139_GCO_20070417',
    dens: 'http:\/\/www.isotc211.org\/2005\/gco',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0', 'GML_3_2_1'],
    tis: [{
        ln: 'MultiplicityType',
        bti: '.AbstractObjectType',
        ps: [{
            n: 'range',
            col: true,
            ti: '.MultiplicityRangePropertyType'
          }]
      }, {
        ln: 'DateTimePropertyType',
        ps: [{
            n: 'dateTime',
            en: 'DateTime',
            ti: 'Calendar'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiplicityPropertyType',
        ps: [{
            n: 'multiplicity',
            en: 'Multiplicity',
            ti: '.MultiplicityType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'MeasurePropertyType',
        ps: [{
            n: 'measure',
            mx: false,
            dom: false,
            typed: false,
            en: 'Measure',
            ti: 'GML_3_2_1.MeasureType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'GenericNamePropertyType',
        ps: [{
            n: 'abstractGenericName',
            mx: false,
            dom: false,
            typed: false,
            en: 'AbstractGenericName',
            ti: 'GML_3_2_1.CodeType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'DatePropertyType',
        ps: [{
            n: 'date',
            en: 'Date'
          }, {
            n: 'dateTime',
            en: 'DateTime',
            ti: 'Calendar'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'RealPropertyType',
        ps: [{
            n: 'real',
            en: 'Real',
            ti: 'Double'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'UnlimitedIntegerPropertyType',
        ps: [{
            n: 'unlimitedInteger',
            en: 'UnlimitedInteger',
            ti: '.UnlimitedIntegerType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinaryPropertyType',
        ps: [{
            n: 'binary',
            en: 'Binary',
            ti: '.BinaryType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'TypeNameType',
        bti: '.AbstractObjectType',
        ps: [{
            n: 'aName',
            ti: '.CharacterStringPropertyType'
          }]
      }, {
        ln: 'MemberNamePropertyType',
        ps: [{
            n: 'memberName',
            en: 'MemberName',
            ti: '.MemberNameType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'LengthPropertyType',
        ps: [{
            n: 'length',
            mx: false,
            dom: false,
            typed: false,
            en: 'Length',
            ti: 'GML_3_2_1.LengthType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'UomLengthPropertyType',
        ps: [{
            n: 'unitDefinition',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'UnitDefinition',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.UnitDefinitionType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'IntegerPropertyType',
        ps: [{
            n: 'integer',
            en: 'Integer',
            ti: 'Integer'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'MemberNameType',
        bti: '.AbstractObjectType',
        ps: [{
            n: 'aName',
            ti: '.CharacterStringPropertyType'
          }, {
            n: 'attributeType',
            ti: '.TypeNamePropertyType'
          }]
      }, {
        ln: 'UnitOfMeasurePropertyType',
        ps: [{
            n: 'unitDefinition',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'UnitDefinition',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.UnitDefinitionType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'RecordTypeType',
        ps: [{
            n: 'value',
            t: 'v'
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
        ln: 'DistancePropertyType',
        ps: [{
            n: 'distance',
            en: 'Distance',
            ti: 'GML_3_2_1.LengthType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'CodeListValueType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'codeList',
            an: {
              lp: 'codeList'
            },
            t: 'a'
          }, {
            n: 'codeListValue',
            an: {
              lp: 'codeListValue'
            },
            t: 'a'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'ScopedNamePropertyType',
        ps: [{
            n: 'scopedName',
            en: 'ScopedName',
            ti: 'GML_3_2_1.CodeType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'UomTimePropertyType',
        ps: [{
            n: 'unitDefinition',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'UnitDefinition',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.UnitDefinitionType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'ScalePropertyType',
        ps: [{
            n: 'scale',
            en: 'Scale',
            ti: 'GML_3_2_1.ScaleType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'RecordTypePropertyType',
        ps: [{
            n: 'recordType',
            en: 'RecordType',
            ti: '.RecordTypeType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'CharacterStringPropertyType',
        ps: [{
            n: 'characterString',
            mx: false,
            dom: false,
            typed: false,
            en: 'CharacterString',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'NumberPropertyType',
        ps: [{
            n: 'real',
            en: 'Real',
            ti: 'Double'
          }, {
            n: 'decimal',
            en: 'Decimal',
            ti: 'Decimal'
          }, {
            n: 'integer',
            en: 'Integer',
            ti: 'Integer'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiplicityRangePropertyType',
        ps: [{
            n: 'multiplicityRange',
            en: 'MultiplicityRange',
            ti: '.MultiplicityRangeType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'AnglePropertyType',
        ps: [{
            n: 'angle',
            en: 'Angle',
            ti: 'GML_3_2_1.AngleType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'ObjectReferencePropertyType',
        ps: [{
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'UomScalePropertyType',
        ps: [{
            n: 'unitDefinition',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'UnitDefinition',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.UnitDefinitionType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'RecordPropertyType',
        ps: [{
            n: 'record',
            en: 'Record',
            ti: 'AnyType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'MultiplicityRangeType',
        bti: '.AbstractObjectType',
        ps: [{
            n: 'lower',
            ti: '.IntegerPropertyType'
          }, {
            n: 'upper',
            ti: '.UnlimitedIntegerPropertyType'
          }]
      }, {
        ln: 'UomAnglePropertyType',
        ps: [{
            n: 'unitDefinition',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'UnitDefinition',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.UnitDefinitionType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'AbstractObjectType',
        ps: [{
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'uuid',
            an: {
              lp: 'uuid'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinaryType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'src',
            an: {
              lp: 'src'
            },
            t: 'a'
          }]
      }, {
        ln: 'UomVolumePropertyType',
        ps: [{
            n: 'unitDefinition',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'UnitDefinition',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.UnitDefinitionType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'UomAreaPropertyType',
        ps: [{
            n: 'unitDefinition',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'UnitDefinition',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.UnitDefinitionType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'DecimalPropertyType',
        ps: [{
            n: 'decimal',
            en: 'Decimal',
            ti: 'Decimal'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'TypeNamePropertyType',
        ps: [{
            n: 'typeName',
            en: 'TypeName',
            ti: '.TypeNameType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'LocalNamePropertyType',
        ps: [{
            n: 'localName',
            en: 'LocalName',
            ti: 'GML_3_2_1.CodeType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'UnlimitedIntegerType',
        ps: [{
            n: 'value',
            ti: 'Integer',
            t: 'v'
          }, {
            n: 'isInfinite',
            ti: 'Boolean',
            an: {
              lp: 'isInfinite'
            },
            t: 'a'
          }]
      }, {
        ln: 'BooleanPropertyType',
        ps: [{
            n: '_boolean',
            en: 'Boolean',
            ti: 'Boolean'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'UomVelocityPropertyType',
        ps: [{
            n: 'unitDefinition',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'UnitDefinition',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.UnitDefinitionType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        en: 'Record',
        ti: 'AnyType'
      }, {
        en: 'UnlimitedInteger',
        ti: '.UnlimitedIntegerType'
      }, {
        en: 'Boolean',
        ti: 'Boolean'
      }, {
        en: 'AbstractGenericName',
        ti: 'GML_3_2_1.CodeType'
      }, {
        en: 'Angle',
        ti: 'GML_3_2_1.AngleType',
        sh: 'Measure'
      }, {
        en: 'Date'
      }, {
        en: 'CharacterString'
      }, {
        en: 'Length',
        ti: 'GML_3_2_1.LengthType',
        sh: 'Measure'
      }, {
        en: 'ScopedName',
        ti: 'GML_3_2_1.CodeType',
        sh: 'AbstractGenericName'
      }, {
        en: 'AbstractObject',
        ti: '.AbstractObjectType'
      }, {
        en: 'LocalName',
        ti: 'GML_3_2_1.CodeType',
        sh: 'AbstractGenericName'
      }, {
        en: 'RecordType',
        ti: '.RecordTypeType'
      }, {
        en: 'Multiplicity',
        ti: '.MultiplicityType'
      }, {
        en: 'DateTime',
        ti: 'Calendar'
      }, {
        en: 'MultiplicityRange',
        ti: '.MultiplicityRangeType'
      }, {
        en: 'Decimal',
        ti: 'Decimal'
      }, {
        en: 'TypeName',
        ti: '.TypeNameType'
      }, {
        en: 'Distance',
        ti: 'GML_3_2_1.LengthType',
        sh: 'Length'
      }, {
        en: 'Scale',
        ti: 'GML_3_2_1.ScaleType',
        sh: 'Measure'
      }, {
        en: 'Binary',
        ti: '.BinaryType'
      }, {
        en: 'Real',
        ti: 'Double'
      }, {
        en: 'MemberName',
        ti: '.MemberNameType'
      }, {
        en: 'Measure',
        ti: 'GML_3_2_1.MeasureType'
      }, {
        en: 'Integer',
        ti: 'Integer'
      }]
  };
  return {
    ISO19139_GCO_20070417: ISO19139_GCO_20070417
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ISO19139_GCO_20070417_Module_Factory);
}
else {
  var ISO19139_GCO_20070417_Module = ISO19139_GCO_20070417_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ISO19139_GCO_20070417 = ISO19139_GCO_20070417_Module.ISO19139_GCO_20070417;
  }
  else {
    var ISO19139_GCO_20070417 = ISO19139_GCO_20070417_Module.ISO19139_GCO_20070417;
  }
}