import { Property } from "@shared/models/CommonModels.ts";

export const getPropertiesMock = (): Promise<Property[]> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "aea9bc21-9c36-482e-80e9-46c10df07556",
            name: "Agent Password TTL",
            apcode: "AgentPasswordTTL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "164d1c32-3929-11ea-91d1-42010afa010f",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              },
              engineeringUnit: {
                id: "164d1c32-3929-11ea-91d1-42010afa010f",
                name: "days"
              }
            }
          },
          {
            id: "d9da665e-e00d-11ec-8a27-42010afa015a",
            name: "Event audio visual alert",
            apcode: "EventAudioVisualAlert",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "b3d113ec-b99a-11de-94e6-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              },
              engineeringUnit: {
                id: "b3d113ec-b99a-11de-94e6-0019bbc9165c",
                name: "-"
              }
            }
          },
          {
            id: "f613ce00-d836-406d-8d7b-8bebb3697193",
            name: "Color HEX",
            apcode: "ColorHEX",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "b3d113ec-b99a-11de-94e6-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              },
              engineeringUnit: {
                id: "b3d113ec-b99a-11de-94e6-0019bbc9165c",
                name: "-"
              }
            }
          },
          {
            id: "16760456-96ed-11e8-a735-42010afa015a",
            name: "User Group",
            apcode: "UserGroup",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "78b2af8c-c792-11ec-aa54-42010afa015a",
            name: "CRM ID",
            apcode: "CRMID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "b3d113ec-b99a-11de-94e6-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              },
              engineeringUnit: {
                id: "b3d113ec-b99a-11de-94e6-0019bbc9165c",
                name: "-"
              }
            }
          },
          {
            id: "b8adbb10-e66c-11ec-a805-42010afa010f",
            name: "CRM ID",
            apcode: "CRM_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7879402-9633-11de-94e6-0019bbc9165c",
            name: "Number of plants",
            apcode: "NumOfPlants",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e787c9fe-9633-11de-94e6-0019bbc9165c",
            name: "Plant designer",
            apcode: "PlantDesigner",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e788037e-9633-11de-94e6-0019bbc9165c",
            name: "Plant installer",
            apcode: "PlantInstaller",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7883ab0-9633-11de-94e6-0019bbc9165c",
            name: "Plant operator",
            apcode: "PlantOperator",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7888290-9633-11de-94e6-0019bbc9165c",
            name: "Type of project",
            apcode: "TypeOfProject",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e788cba6-9633-11de-94e6-0019bbc9165c",
            name: "Type of plant",
            apcode: "TypeOfPlant",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7890d32-9633-11de-94e6-0019bbc9165c",
            name: "Typical use",
            apcode: "TypicalUse",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7894edc-9633-11de-94e6-0019bbc9165c",
            name: "AC load",
            apcode: "ACLoad",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e789923e-9633-11de-94e6-0019bbc9165c",
            name: "Grid connected",
            apcode: "GridConnected",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e789d474-9633-11de-94e6-0019bbc9165c",
            name: "Number of PV panel groups",
            apcode: "NumOfPanelGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e78a0e8a-9633-11de-94e6-0019bbc9165c",
            name: "Number of PV arrays",
            apcode: "NumOfArrays",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e78a440e-9633-11de-94e6-0019bbc9165c",
            name: "Number of PV array groups",
            apcode: "NumOfArrayGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "a52c918a-6386-11ea-8395-42010afa010f",
            name: "Number of STATCOM array groups",
            apcode: "NumOfSTATCOMArrayGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e212aa44-6386-11ea-a0aa-42010afa010f",
            name: "Number of STATCOM arrays",
            apcode: "NumOfSTATCOMArrays",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "3f5d8462-82a7-11ec-bc6a-42010afa010f",
            name: "Number of STATCOM controls",
            apcode: "NumOfSTATCOMControls",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e5bb2806-b5a9-11e8-a56d-42010afa010f",
            name: "Number of battery array groups",
            apcode: "NumOfBatteryArrayGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "4efe9de0-b814-11e8-a136-42010afa010f",
            name: "Number of battery arrays",
            apcode: "NumOfBatteryArrays",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "8ee0a5ce-b815-11e8-a4eb-42010afa010f",
            name: "Number of battery inverter modules",
            apcode: "NumOfBatteryInverterModules",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "20c8dcf4-b816-11e8-ac8e-42010afa010f",
            name: "Number of battery strings",
            apcode: "NumOfBatteryStrings",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "90247abe-2236-11ea-8ef1-24be0512ad82",
            name: "Number of battery systems",
            apcode: "NumOfBatterySystems",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "faf7fbb6-6f7b-11eb-9db6-42010afa010f",
            name: "Number of battery auxiliary services",
            apcode: "NumOfBatteryAuxiliaryServices",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "1c575c4a-dd00-11e8-9cf8-42010afa010f",
            name: "Nominal capacity",
            apcode: "CapacityNominal",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "1f06a644-dd00-11e8-bfd2-42010afa010f",
            name: "Nominal energy capacity",
            apcode: "EnergyCapacityNominal",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "02f0aa1c-4536-11e7-94a6-42010afa010f",
            name: "Number of wind turbines",
            apcode: "NumOfWT",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "c327406c-4530-11e7-8976-42010afa010f",
            name: "Number of wind turbine groups",
            apcode: "NumOfWTGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e78a7b7c-9633-11de-94e6-0019bbc9165c",
            name: "Number of transformers",
            apcode: "NumOfTransformers",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "d4aa5ae2-804b-11df-94f4-0019bbc9165c",
            name: "Number of TCPs",
            apcode: "NumOfTCPs",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e78aaf02-9633-11de-94e6-0019bbc9165c",
            name: "Number of PV panels",
            apcode: "NumOfPanels",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "50955074-f3ef-11ed-ae6e-dd26502c0479",
            name: "Number of Schedules",
            apcode: "NumOfSchedules",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e78ae21a-9633-11de-94e6-0019bbc9165c",
            name: "Connection voltage",
            apcode: "ConnectionVoltage",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "233e03a6-b285-11de-94e6-0019bbc9165c",
            name: "LV metering present",
            apcode: "LVMeteringPresent",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "30dc2aba-b285-11de-94e6-0019bbc9165c",
            name: "MV metering present",
            apcode: "MVMeteringPresent",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a99197ae-bca0-11de-94e6-0019bbc9165c",
            name: "PCC metering present",
            apcode: "PCCMeteringPresent",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1adbbafc-bca1-11de-94e6-0019bbc9165c",
            name: "Metering present",
            apcode: "MeteringPresent",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e78b245a-9633-11de-94e6-0019bbc9165c",
            name: "Production metering present",
            apcode: "ProductionMeteringPresent",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78b67f8-9633-11de-94e6-0019bbc9165c",
            name: "Protection present",
            apcode: "ProtectionPresent",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "368630e2-d520-11ed-9932-f9fa03aecbcf",
            name: "Generator present",
            apcode: "GeneratorPresent",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78ba664-9633-11de-94e6-0019bbc9165c",
            name: "EPS operator name",
            apcode: "EPSOperatorName",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e78be642-9633-11de-94e6-0019bbc9165c",
            name: "Multi-string PV array",
            apcode: "MultiStringPVArray",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78c25da-9633-11de-94e6-0019bbc9165c",
            name: "Number of strings in the PV array",
            apcode: "NumOfStringsInPVArray",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e78c6a36-9633-11de-94e6-0019bbc9165c",
            name: "Number of PV panels per string",
            apcode: "NumOfPanelsPerString",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e78cad70-9633-11de-94e6-0019bbc9165c",
            name: "By-pass diodes",
            apcode: "ByPassDiodes",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78cee66-9633-11de-94e6-0019bbc9165c",
            name: "Blocking diodes",
            apcode: "BlockingDiodes",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78d249e-9633-11de-94e6-0019bbc9165c",
            name: "String fuse",
            apcode: "StringFuse",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78d5b80-9633-11de-94e6-0019bbc9165c",
            name: "Concentrator",
            apcode: "Concentrator",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78d91b8-9633-11de-94e6-0019bbc9165c",
            name: "PV panel group mounting",
            apcode: "PanelGroupMounting",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e78dc71e-9633-11de-94e6-0019bbc9165c",
            name: "PV panel group integrated mounting",
            apcode: "PanelGroupIntegratedMounting",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78dfeaa-9633-11de-94e6-0019bbc9165c",
            name: "PV panel group tracking type",
            apcode: "PanelGroupTrackingType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e78e4626-9633-11de-94e6-0019bbc9165c",
            name: "PV panel group tilt angle",
            apcode: "PanelGroupTiltAngle",
            measurementTypeId: "3074ed1c-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8683-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1c-8264-11de-ad55-0090f586a869",
                apcode: "Angle",
                name: "Angle",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8683-8264-11de-ad55-0090f586a869",
                name: "degrees"
              }
            }
          },
          {
            id: "e78e95d6-9633-11de-94e6-0019bbc9165c",
            name: "PV panel group azimuth angle",
            apcode: "PanelGroupAzimuthAngle",
            measurementTypeId: "3074ed1c-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8683-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1c-8264-11de-ad55-0090f586a869",
                apcode: "Angle",
                name: "Angle",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8683-8264-11de-ad55-0090f586a869",
                name: "degrees"
              }
            }
          },
          {
            id: "e78edd02-9633-11de-94e6-0019bbc9165c",
            name: "PV panel group tracking axis",
            apcode: "PanelGroupTrackingAxis",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e78f26ae-9633-11de-94e6-0019bbc9165c",
            name: "Air conditioned room",
            apcode: "AirConditionedRoom",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78f6c4a-9633-11de-94e6-0019bbc9165c",
            name: "Number of access-controlled doors",
            apcode: "NumOfAccessControlledDoors",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e78fb5f6-9633-11de-94e6-0019bbc9165c",
            name: "Temperature sensor",
            apcode: "TempSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e78ffd9a-9633-11de-94e6-0019bbc9165c",
            name: "Fire sensor",
            apcode: "FireSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7903eb8-9633-11de-94e6-0019bbc9165c",
            name: "Flood sensor",
            apcode: "FloodSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7907fe0-9633-11de-94e6-0019bbc9165c",
            name: "Occupancy sensor",
            apcode: "OccupancySensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e790b9ec-9633-11de-94e6-0019bbc9165c",
            name: "Room type",
            apcode: "RoomType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e790ee8a-9633-11de-94e6-0019bbc9165c",
            name: "Latitude",
            apcode: "Latitude",
            measurementTypeId: "e7869624-9633-11de-94e6-0019bbc9165c",
            engineeringUnitId: "a0bc8683-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "e7869624-9633-11de-94e6-0019bbc9165c",
                apcode: "Latitude",
                name: "Latitude",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8683-8264-11de-ad55-0090f586a869",
                name: "degrees"
              }
            }
          },
          {
            id: "e79122ce-9633-11de-94e6-0019bbc9165c",
            name: "Longitude",
            apcode: "Longitude",
            measurementTypeId: "e786de90-9633-11de-94e6-0019bbc9165c",
            engineeringUnitId: "a0bc8683-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "e786de90-9633-11de-94e6-0019bbc9165c",
                apcode: "Longitude",
                name: "Longitude",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8683-8264-11de-ad55-0090f586a869",
                name: "degrees"
              }
            }
          },
          {
            id: "e5211f86-993e-11de-94e6-0019bbc9165c",
            name: "Altitude",
            apcode: "Altitude",
            measurementTypeId: "e78724ae-9633-11de-94e6-0019bbc9165c",
            engineeringUnitId: "a0bc867c-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "e78724ae-9633-11de-94e6-0019bbc9165c",
                apcode: "Altitude",
                name: "Altitude",
                datatype: "Integer"
              },
              engineeringUnit: {
                id: "a0bc867c-8264-11de-ad55-0090f586a869",
                name: "m"
              }
            }
          },
          {
            id: "e7915802-9633-11de-94e6-0019bbc9165c",
            name: "Number of rooms",
            apcode: "NumOfRooms",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e7919bd2-9633-11de-94e6-0019bbc9165c",
            name: "Shelter type",
            apcode: "ShelterType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e791e790-9633-11de-94e6-0019bbc9165c",
            name: "Number of alarms",
            apcode: "NumOfAlarms",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e792334e-9633-11de-94e6-0019bbc9165c",
            name: "Zone location",
            apcode: "ZoneLocation",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7927c14-9633-11de-94e6-0019bbc9165c",
            name: "Number of actuators",
            apcode: "NumOfActuators",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e792f158-9633-11de-94e6-0019bbc9165c",
            name: "Exit button",
            apcode: "ExitButton",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e79337e4-9633-11de-94e6-0019bbc9165c",
            name: "Door open/closed contact",
            apcode: "DoorOpenContact",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7937862-9633-11de-94e6-0019bbc9165c",
            name: "Door locked/unlocked contact",
            apcode: "DoorLockContact",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e793b61a-9633-11de-94e6-0019bbc9165c",
            name: "Part number",
            apcode: "PartNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e793f24c-9633-11de-94e6-0019bbc9165c",
            name: "Temperature operational range",
            apcode: "TempOpRange",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e794311c-9633-11de-94e6-0019bbc9165c",
            name: "Humidity operational range",
            apcode: "HumidityOpRange",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7947b18-9633-11de-94e6-0019bbc9165c",
            name: "Width",
            apcode: "Width",
            measurementTypeId: "3074ed19-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867c-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed19-8264-11de-ad55-0090f586a869",
                apcode: "Length",
                name: "Length",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867c-8264-11de-ad55-0090f586a869",
                name: "m"
              }
            }
          },
          {
            id: "e794d3ce-9633-11de-94e6-0019bbc9165c",
            name: "Height",
            apcode: "Height",
            measurementTypeId: "3074ed19-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867c-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed19-8264-11de-ad55-0090f586a869",
                apcode: "Length",
                name: "Length",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867c-8264-11de-ad55-0090f586a869",
                name: "m"
              }
            }
          },
          {
            id: "e79529c8-9633-11de-94e6-0019bbc9165c",
            name: "Length",
            apcode: "Length",
            measurementTypeId: "3074ed19-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867c-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed19-8264-11de-ad55-0090f586a869",
                apcode: "Length",
                name: "Length",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867c-8264-11de-ad55-0090f586a869",
                name: "m"
              }
            }
          },
          {
            id: "e795685c-9633-11de-94e6-0019bbc9165c",
            name: "Weight",
            apcode: "Weight",
            measurementTypeId: "3074ed1a-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8671-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1a-8264-11de-ad55-0090f586a869",
                apcode: "Weight",
                name: "Weight",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8671-8264-11de-ad55-0090f586a869",
                name: "Kilogram"
              }
            }
          },
          {
            id: "e7959dfe-9633-11de-94e6-0019bbc9165c",
            name: "Temperature sensor type",
            apcode: "TempSensorType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e795d3f0-9633-11de-94e6-0019bbc9165c",
            name: "Accuracy class",
            apcode: "AccuracyClass",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7961af4-9633-11de-94e6-0019bbc9165c",
            name: "Accuracy",
            apcode: "Accuracy",
            measurementTypeId: "78f8b776-9879-11de-94e6-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "78f8b776-9879-11de-94e6-0019bbc9165c",
                apcode: "Float",
                name: "Float",
                datatype: "Float"
              }
            }
          },
          {
            id: "e7965c08-9633-11de-94e6-0019bbc9165c",
            name: "Temperature sensor measurement range low limit",
            apcode: "TempSensorRangeLowLimit",
            measurementTypeId: "3074ed1f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8673-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1f-8264-11de-ad55-0090f586a869",
                apcode: "Temp",
                name: "Temperature",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8673-8264-11de-ad55-0090f586a869",
                name: "C"
              }
            }
          },
          {
            id: "e796aa28-9633-11de-94e6-0019bbc9165c",
            name: "Temperature sensor measurement range high limit",
            apcode: "TempSensorRangeHiLimit",
            measurementTypeId: "3074ed1f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8673-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1f-8264-11de-ad55-0090f586a869",
                apcode: "Temp",
                name: "Temperature",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8673-8264-11de-ad55-0090f586a869",
                name: "C"
              }
            }
          },
          {
            id: "e796f686-9633-11de-94e6-0019bbc9165c",
            name: "Mounting",
            apcode: "Mounting",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7974104-9633-11de-94e6-0019bbc9165c",
            name: "Protection class",
            apcode: "ProtectionClass",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79789d4-9633-11de-94e6-0019bbc9165c",
            name: "Temperature transducer type",
            apcode: "TempTransducerType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e797ce62-9633-11de-94e6-0019bbc9165c",
            name: "Temperature transducer measurement range low limit",
            apcode: "TempTransducerRangeLowLimit",
            measurementTypeId: "78f8b776-9879-11de-94e6-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "78f8b776-9879-11de-94e6-0019bbc9165c",
                apcode: "Float",
                name: "Float",
                datatype: "Float"
              }
            }
          },
          {
            id: "e79811f6-9633-11de-94e6-0019bbc9165c",
            name: "Temperature transducer measurement range high limit",
            apcode: "TempTransducerRangeHiLimit",
            measurementTypeId: "78f8b776-9879-11de-94e6-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "78f8b776-9879-11de-94e6-0019bbc9165c",
                apcode: "Float",
                name: "Float",
                datatype: "Float"
              }
            }
          },
          {
            id: "e798571a-9633-11de-94e6-0019bbc9165c",
            name: "Supply voltage range low limit",
            apcode: "SupplyVoltageRangeLowLimit",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867d-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867d-8264-11de-ad55-0090f586a869",
                name: "Vdc"
              }
            }
          },
          {
            id: "e7989c2a-9633-11de-94e6-0019bbc9165c",
            name: "Supply voltage range high limit",
            apcode: "SupplyVoltageRangeHiLimit",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867d-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867d-8264-11de-ad55-0090f586a869",
                name: "Vdc"
              }
            }
          },
          {
            id: "e798de42-9633-11de-94e6-0019bbc9165c",
            name: "Max supply current",
            apcode: "MaxSupplyCurrent",
            measurementTypeId: "3074ed10-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867f-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed10-8264-11de-ad55-0090f586a869",
                apcode: "Current",
                name: "Current",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867f-8264-11de-ad55-0090f586a869",
                name: "A"
              }
            }
          },
          {
            id: "e7991c40-9633-11de-94e6-0019bbc9165c",
            name: "Transducer output",
            apcode: "TransducerOutput",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7996146-9633-11de-94e6-0019bbc9165c",
            name: "Pyranometer WMO standard",
            apcode: "PyranometerWMOstandard",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e799a8e0-9633-11de-94e6-0019bbc9165c",
            name: "Pyranometer ISO standard",
            apcode: "PyranometerISOstandard",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e799e92c-9633-11de-94e6-0019bbc9165c",
            name: "Spectral range",
            apcode: "SpectralRange",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79a2720-9633-11de-94e6-0019bbc9165c",
            name: "Field of view",
            apcode: "FieldOfView",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79a6bc2-9633-11de-94e6-0019bbc9165c",
            name: "Maximum irradiance",
            apcode: "MaxIrradiance",
            measurementTypeId: "3074ed21-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8675-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed21-8264-11de-ad55-0090f586a869",
                apcode: "Irradiance",
                name: "Irradiance",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8675-8264-11de-ad55-0090f586a869",
                name: "W*m^-2"
              }
            }
          },
          {
            id: "e79aa81c-9633-11de-94e6-0019bbc9165c",
            name: "Sensitivity",
            apcode: "Sensitivity",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79ae804-9633-11de-94e6-0019bbc9165c",
            name: "Impedance",
            apcode: "Impedance",
            measurementTypeId: "3074ed11-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8680-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed11-8264-11de-ad55-0090f586a869",
                apcode: "Impedance",
                name: "Impedance",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8680-8264-11de-ad55-0090f586a869",
                name: "Ohm"
              }
            }
          },
          {
            id: "e79b253a-9633-11de-94e6-0019bbc9165c",
            name: "Response time",
            apcode: "ResponseTime",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79b6752-9633-11de-94e6-0019bbc9165c",
            name: "Sensitivity temperature dependency",
            apcode: "SensitivityTemperatureDependency",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79b9ff6-9633-11de-94e6-0019bbc9165c",
            name: "Non-stability",
            apcode: "NonStability",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79bd3d6-9633-11de-94e6-0019bbc9165c",
            name: "Uncertainty in daily total",
            apcode: "UncertaintyInDailyTotal",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79c13a0-9633-11de-94e6-0019bbc9165c",
            name: "Zero offset",
            apcode: "ZeroOffset",
            measurementTypeId: "3074ed21-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8675-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed21-8264-11de-ad55-0090f586a869",
                apcode: "Irradiance",
                name: "Irradiance",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8675-8264-11de-ad55-0090f586a869",
                name: "W*m^-2"
              }
            }
          },
          {
            id: "e79c4b68-9633-11de-94e6-0019bbc9165c",
            name: "Input impedance",
            apcode: "InputImpedance",
            measurementTypeId: "3074ed11-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8680-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed11-8264-11de-ad55-0090f586a869",
                apcode: "Impedance",
                name: "Impedance",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8680-8264-11de-ad55-0090f586a869",
                name: "Ohm"
              }
            }
          },
          {
            id: "e79c7fd4-9633-11de-94e6-0019bbc9165c",
            name: "Conversion gain",
            apcode: "ConversionGain",
            measurementTypeId: "3074ed0b-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8681-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0b-8264-11de-ad55-0090f586a869",
                apcode: "Ratio",
                name: "Ratio",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8681-8264-11de-ad55-0090f586a869",
                name: "dB"
              }
            }
          },
          {
            id: "e79cc034-9633-11de-94e6-0019bbc9165c",
            name: "Output type",
            apcode: "OutputType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79cfcde-9633-11de-94e6-0019bbc9165c",
            name: "Voltage",
            apcode: "Voltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867d-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867d-8264-11de-ad55-0090f586a869",
                name: "Vdc"
              }
            }
          },
          {
            id: "e79d3aa0-9633-11de-94e6-0019bbc9165c",
            name: "Current",
            apcode: "Current",
            measurementTypeId: "3074ed10-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867f-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed10-8264-11de-ad55-0090f586a869",
                apcode: "Current",
                name: "Current",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867f-8264-11de-ad55-0090f586a869",
                name: "A"
              }
            }
          },
          {
            id: "e79d6f7a-9633-11de-94e6-0019bbc9165c",
            name: "Fire sensor type",
            apcode: "FireSensorType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79dba7a-9633-11de-94e6-0019bbc9165c",
            name: "Monitoring area",
            apcode: "MonitoringArea",
            measurementTypeId: "3074ed1b-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8682-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1b-8264-11de-ad55-0090f586a869",
                apcode: "Area",
                name: "Area",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8682-8264-11de-ad55-0090f586a869",
                name: "m^2"
              }
            }
          },
          {
            id: "e79e039a-9633-11de-94e6-0019bbc9165c",
            name: "Monitoring angle",
            apcode: "MonitoringAngle",
            measurementTypeId: "3074ed1c-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8683-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1c-8264-11de-ad55-0090f586a869",
                apcode: "Angle",
                name: "Angle",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8683-8264-11de-ad55-0090f586a869",
                name: "degrees"
              }
            }
          },
          {
            id: "e79e4ca6-9633-11de-94e6-0019bbc9165c",
            name: "Monitoring distance",
            apcode: "MonitoringDistance",
            measurementTypeId: "3074ed19-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867c-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed19-8264-11de-ad55-0090f586a869",
                apcode: "Length",
                name: "Length",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867c-8264-11de-ad55-0090f586a869",
                name: "m"
              }
            }
          },
          {
            id: "e79e8e8c-9633-11de-94e6-0019bbc9165c",
            name: "Polarity",
            apcode: "Polarity",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79ed356-9633-11de-94e6-0019bbc9165c",
            name: "Serial interface parity",
            apcode: "SerialParity",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79f1a96-9633-11de-94e6-0019bbc9165c",
            name: "Serial interface stop bits",
            apcode: "SerialStopBits",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e79f6442-9633-11de-94e6-0019bbc9165c",
            name: "Serial interface baudrate",
            apcode: "SerialBaudrate",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e79faa1a-9633-11de-94e6-0019bbc9165c",
            name: "Number of output bits",
            apcode: "NumOfOutputBits",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e79ff1aa-9633-11de-94e6-0019bbc9165c",
            name: "Communication interface",
            apcode: "CommIf",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a0320a-9633-11de-94e6-0019bbc9165c",
            name: "Transponder chip",
            apcode: "TransponderChip",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a07544-9633-11de-94e6-0019bbc9165c",
            name: "RF frequency",
            apcode: "RFFreq",
            measurementTypeId: "3074ed1d-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8684-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1d-8264-11de-ad55-0090f586a869",
                apcode: "Frequency",
                name: "Frequency",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8684-8264-11de-ad55-0090f586a869",
                name: "Hz"
              }
            }
          },
          {
            id: "e7a0c1b6-9633-11de-94e6-0019bbc9165c",
            name: "IP address",
            apcode: "IPAddress",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a10a18-9633-11de-94e6-0019bbc9165c",
            name: "Communication module",
            apcode: "CommModule",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7a15338-9633-11de-94e6-0019bbc9165c",
            name: "Communication protocol",
            apcode: "CommProtocol",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a1985c-9633-11de-94e6-0019bbc9165c",
            name: "Modbus address",
            apcode: "ModbusAddress",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e7a1e47e-9633-11de-94e6-0019bbc9165c",
            name: "Current transformer ratio",
            apcode: "CurrentTransformerRatio",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a22e02-9633-11de-94e6-0019bbc9165c",
            name: "Voltage transformer ratio",
            apcode: "VoltageTransformerRatio",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a2a47c-9633-11de-94e6-0019bbc9165c",
            name: "Protection device type",
            apcode: "ProtectionDeviceType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a2f0d0-9633-11de-94e6-0019bbc9165c",
            name: "ANSI C37.2 protections",
            apcode: "ANSIC37.2Protections",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a3368a-9633-11de-94e6-0019bbc9165c",
            name: "Contact type",
            apcode: "ContactType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a37e60-9633-11de-94e6-0019bbc9165c",
            name: "Contact interface",
            apcode: "ContactIf",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7a3c5e6-9633-11de-94e6-0019bbc9165c",
            name: "Striking plate required",
            apcode: "StrikingPlateRequired",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7a40cc2-9633-11de-94e6-0019bbc9165c",
            name: "Mechanical override function",
            apcode: "MechanicalOverrideFunction",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7a44700-9633-11de-94e6-0019bbc9165c",
            name: "Override contact",
            apcode: "OverrideContact",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7a47f22-9633-11de-94e6-0019bbc9165c",
            name: "Striking plate part number",
            apcode: "StrikingPlatePartNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a4bbea-9633-11de-94e6-0019bbc9165c",
            name: "Actuator input type",
            apcode: "ActuatorInputType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a4f286-9633-11de-94e6-0019bbc9165c",
            name: "Nominal transformer power",
            apcode: "NominalTransformerPower",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8685-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8685-8264-11de-ad55-0090f586a869",
                name: "kVA"
              }
            }
          },
          {
            id: "e7a52a12-9633-11de-94e6-0019bbc9165c",
            name: "Number of phases",
            apcode: "NumberOfPhases",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e7a56e96-9633-11de-94e6-0019bbc9165c",
            name: "Primary voltage",
            apcode: "PrimaryVoltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867e-8264-11de-ad55-0090f586a869",
                name: "Vac"
              }
            }
          },
          {
            id: "e7a5b77a-9633-11de-94e6-0019bbc9165c",
            name: "Secondary voltage",
            apcode: "SecondaryVoltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867e-8264-11de-ad55-0090f586a869",
                name: "Vac"
              }
            }
          },
          {
            id: "e7a600ea-9633-11de-94e6-0019bbc9165c",
            name: "Operational frequency",
            apcode: "OperationalFrequency",
            measurementTypeId: "3074ed1d-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8684-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1d-8264-11de-ad55-0090f586a869",
                apcode: "Frequency",
                name: "Frequency",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8684-8264-11de-ad55-0090f586a869",
                name: "Hz"
              }
            }
          },
          {
            id: "e7a64474-9633-11de-94e6-0019bbc9165c",
            name: "Vector group",
            apcode: "VectorGroup",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a68a7e-9633-11de-94e6-0019bbc9165c",
            name: "Cooling type",
            apcode: "CoolingType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a6d0ba-9633-11de-94e6-0019bbc9165c",
            name: "Voltage regulation",
            apcode: "VoltageRegulation",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7a71890-9633-11de-94e6-0019bbc9165c",
            name: "Maximum oil temperature rise",
            apcode: "MaxOilTempRise",
            measurementTypeId: "3074ed1f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8673-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1f-8264-11de-ad55-0090f586a869",
                apcode: "Temp",
                name: "Temperature",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8673-8264-11de-ad55-0090f586a869",
                name: "C"
              }
            }
          },
          {
            id: "e7a75e40-9633-11de-94e6-0019bbc9165c",
            name: "Maximum winding temperature rise",
            apcode: "MaxWindingTempRise",
            measurementTypeId: "3074ed1f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8673-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1f-8264-11de-ad55-0090f586a869",
                apcode: "Temp",
                name: "Temperature",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8673-8264-11de-ad55-0090f586a869",
                name: "C"
              }
            }
          },
          {
            id: "e7a7a620-9633-11de-94e6-0019bbc9165c",
            name: "Maximum ambient temperature",
            apcode: "MaxAmbientTemp",
            measurementTypeId: "3074ed1f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8673-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed1f-8264-11de-ad55-0090f586a869",
                apcode: "Temp",
                name: "Temperature",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8673-8264-11de-ad55-0090f586a869",
                name: "C"
              }
            }
          },
          {
            id: "e7a7eb3a-9633-11de-94e6-0019bbc9165c",
            name: "Impedance voltage",
            apcode: "ImpedanceVoltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867e-8264-11de-ad55-0090f586a869",
                name: "Vac"
              }
            }
          },
          {
            id: "e7a83798-9633-11de-94e6-0019bbc9165c",
            name: "Iron losses",
            apcode: "IronLosses",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "e7a881da-9633-11de-94e6-0019bbc9165c",
            name: "Copper losses",
            apcode: "CopperLosses",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "e7a8ca6e-9633-11de-94e6-0019bbc9165c",
            name: "Mode of operation",
            apcode: "ModeOfOperation",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a91136-9633-11de-94e6-0019bbc9165c",
            name: "Nominal inverter power",
            apcode: "NominalIverterPower",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "e7a95506-9633-11de-94e6-0019bbc9165c",
            name: "Number of MPP trackers",
            apcode: "NumOfMPPTrackers",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e7a9ad94-9633-11de-94e6-0019bbc9165c",
            name: "Inverter control",
            apcode: "InverterControl",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7a9f77c-9633-11de-94e6-0019bbc9165c",
            name: "Grid connection type",
            apcode: "GridConnType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7aa3d90-9633-11de-94e6-0019bbc9165c",
            name: "DC overvoltage protection",
            apcode: "DCOvervoltageProtection",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7aa82c8-9633-11de-94e6-0019bbc9165c",
            name: "Maximum input voltage",
            apcode: "MaxInputVoltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867d-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867d-8264-11de-ad55-0090f586a869",
                name: "Vdc"
              }
            }
          },
          {
            id: "e7aac08a-9633-11de-94e6-0019bbc9165c",
            name: "Maximum input power",
            apcode: "MaxInputPower",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "e7aafd3e-9633-11de-94e6-0019bbc9165c",
            name: "Maximum input current",
            apcode: "MaxInputCurrent",
            measurementTypeId: "3074ed10-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867f-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed10-8264-11de-ad55-0090f586a869",
                apcode: "Current",
                name: "Current",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867f-8264-11de-ad55-0090f586a869",
                name: "A"
              }
            }
          },
          {
            id: "e7ab3dd0-9633-11de-94e6-0019bbc9165c",
            name: "Maximum number of strings",
            apcode: "MaxNumberOfStrings",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e7ab7552-9633-11de-94e6-0019bbc9165c",
            name: "Nominal output voltage",
            apcode: "NominalOutputVoltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867e-8264-11de-ad55-0090f586a869",
                name: "Vac"
              }
            }
          },
          {
            id: "e7abb9c2-9633-11de-94e6-0019bbc9165c",
            name: "Nominal output power",
            apcode: "NominalOutputPower",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "cec6a7ba-cae9-11de-94e6-0019bbc9165c",
            name: "Panel group nominal output power",
            apcode: "PGNominalOutputPower",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "4208f668-cae7-11de-94e6-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "4208f668-cae7-11de-94e6-0019bbc9165c",
                name: "kWp"
              }
            }
          },
          {
            id: "e7abf3ce-9633-11de-94e6-0019bbc9165c",
            name: "Maximum output power",
            apcode: "MaxOutputPower",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "e7ac27d6-9633-11de-94e6-0019bbc9165c",
            name: "Maximum output current",
            apcode: "MaxOutputCurrent",
            measurementTypeId: "3074ed10-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867f-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed10-8264-11de-ad55-0090f586a869",
                apcode: "Current",
                name: "Current",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867f-8264-11de-ad55-0090f586a869",
                name: "A"
              }
            }
          },
          {
            id: "e7ac5c2e-9633-11de-94e6-0019bbc9165c",
            name: "Nominal inverter efficiency",
            apcode: "NominalInverterEfficiency",
            measurementTypeId: "3074ed29-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8672-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed29-8264-11de-ad55-0090f586a869",
                apcode: "InverterEfficiency",
                name: "Inverter efficiency",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8672-8264-11de-ad55-0090f586a869",
                name: "%"
              }
            }
          },
          {
            id: "e7ac9234-9633-11de-94e6-0019bbc9165c",
            name: "Standby losses",
            apcode: "StandbyLosses",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "e7acd15e-9633-11de-94e6-0019bbc9165c",
            name: "Losses at no load",
            apcode: "LossesNoLoad",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "e7ad10e2-9633-11de-94e6-0019bbc9165c",
            name: "Galvanic insulation",
            apcode: "GalvanicInsulation",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "e7ad5674-9633-11de-94e6-0019bbc9165c",
            name: "Output THD",
            apcode: "OutputTHD",
            measurementTypeId: "3074ed13-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8672-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed13-8264-11de-ad55-0090f586a869",
                apcode: "THD",
                name: "THD",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8672-8264-11de-ad55-0090f586a869",
                name: "%"
              }
            }
          },
          {
            id: "e7ad99ea-9633-11de-94e6-0019bbc9165c",
            name: "Output power factor",
            apcode: "OutputPowerFactor",
            measurementTypeId: "3074ed14-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed14-8264-11de-ad55-0090f586a869",
                apcode: "PowerFactor",
                name: "Power Factor",
                datatype: "Float"
              }
            }
          },
          {
            id: "e7ae1582-9633-11de-94e6-0019bbc9165c",
            name: "PV Panel type",
            apcode: "PanelType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7ae5894-9633-11de-94e6-0019bbc9165c",
            name: "PV Panel nominal voltage @ STC",
            apcode: "PanelNominalVoltageSTC",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867d-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867d-8264-11de-ad55-0090f586a869",
                name: "Vdc"
              }
            }
          },
          {
            id: "e7aea556-9633-11de-94e6-0019bbc9165c",
            name: "PV Panel short circuit current (ISC)",
            apcode: "PanelISC",
            measurementTypeId: "3074ed10-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867f-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed10-8264-11de-ad55-0090f586a869",
                apcode: "Current",
                name: "Current",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867f-8264-11de-ad55-0090f586a869",
                name: "A"
              }
            }
          },
          {
            id: "e7aee0e8-9633-11de-94e6-0019bbc9165c",
            name: "PV Panel open circuit voltage (VOC)",
            apcode: "PanelVOC",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867d-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867d-8264-11de-ad55-0090f586a869",
                name: "Vdc"
              }
            }
          },
          {
            id: "e7af1540-9633-11de-94e6-0019bbc9165c",
            name: "PV Panel reference in-plane irradiance",
            apcode: "PanelRefIrradiance",
            measurementTypeId: "3074ed21-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8675-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed21-8264-11de-ad55-0090f586a869",
                apcode: "Irradiance",
                name: "Irradiance",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8675-8264-11de-ad55-0090f586a869",
                name: "W*m^-2"
              }
            }
          },
          {
            id: "e7af4cfe-9633-11de-94e6-0019bbc9165c",
            name: "PV Panel nominal efficiency",
            apcode: "PanelNominalEfficiency",
            measurementTypeId: "3074ed28-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8672-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed28-8264-11de-ad55-0090f586a869",
                apcode: "NominalArrayEfficiency",
                name: "Nominal array efficiency",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8672-8264-11de-ad55-0090f586a869",
                name: "%"
              }
            }
          },
          {
            id: "e7af81e2-9633-11de-94e6-0019bbc9165c",
            name: "First name",
            apcode: "FirstName",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7afe9a2-9633-11de-94e6-0019bbc9165c",
            name: "Surname",
            apcode: "Surname",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7b026ba-9633-11de-94e6-0019bbc9165c",
            name: "Mobile phone number",
            apcode: "MobilePhoneNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e7b069d6-9633-11de-94e6-0019bbc9165c",
            name: "Wind-speed sensor measurement range low limit",
            apcode: "WindSpeedSensorRangeLowLimit",
            measurementTypeId: "3074ed20-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8674-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed20-8264-11de-ad55-0090f586a869",
                apcode: "WindSpeed",
                name: "Wind Speed",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8674-8264-11de-ad55-0090f586a869",
                name: "m*s^-1"
              }
            }
          },
          {
            id: "e7b0b6e8-9633-11de-94e6-0019bbc9165c",
            name: "Wind-speed sensor measurement range hi limit",
            apcode: "WindSpeedSensorRangeHiLimit",
            measurementTypeId: "3074ed20-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8674-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed20-8264-11de-ad55-0090f586a869",
                apcode: "WindSpeed",
                name: "Wind Speed",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8674-8264-11de-ad55-0090f586a869",
                name: "m*s^-1"
              }
            }
          },
          {
            id: "e7b10292-9633-11de-94e6-0019bbc9165c",
            name: "Threshold",
            apcode: "Threshold",
            measurementTypeId: "3074ed20-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc8674-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed20-8264-11de-ad55-0090f586a869",
                apcode: "WindSpeed",
                name: "Wind Speed",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc8674-8264-11de-ad55-0090f586a869",
                name: "m*s^-1"
              }
            }
          },
          {
            id: "e7b14b58-9633-11de-94e6-0019bbc9165c",
            name: "Distance constant",
            apcode: "DistanceConstant",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3283c002-993b-11de-94e6-0019bbc9165c",
            name: "Phone number",
            apcode: "PhoneNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "32842006-993b-11de-94e6-0019bbc9165c",
            name: "FAX number",
            apcode: "FAXNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "328479c0-993b-11de-94e6-0019bbc9165c",
            name: "E-mail",
            apcode: "Email",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3284c86c-993b-11de-94e6-0019bbc9165c",
            name: "Address-street",
            apcode: "AddressStreet",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "32851768-993b-11de-94e6-0019bbc9165c",
            name: "Address-ZIP code",
            apcode: "AddressZIPCode",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "328564b6-993b-11de-94e6-0019bbc9165c",
            name: "Address-POBox",
            apcode: "AddressPOBox",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3285b6fa-993b-11de-94e6-0019bbc9165c",
            name: "City",
            apcode: "City",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "32860948-993b-11de-94e6-0019bbc9165c",
            name: "Country",
            apcode: "Country",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d1ba0a46-edfb-11e2-b00a-0019bbc9165c",
            name: "Hub",
            apcode: "Hub",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d45c39a-9dea-11de-94e6-0019bbc9165c",
            name: "passwd_l0",
            apcode: "passwd_l0",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d4619f8-9dea-11de-94e6-0019bbc9165c",
            name: "passwd_l1",
            apcode: "passwd_l1",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d4667c8-9dea-11de-94e6-0019bbc9165c",
            name: "passwd_l2",
            apcode: "passwd_l2",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d46b020-9dea-11de-94e6-0019bbc9165c",
            name: "passwd_l3",
            apcode: "passwd_l3",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d46f4ea-9dea-11de-94e6-0019bbc9165c",
            name: "cmd_port",
            apcode: "cmd_port",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d4802f4-9dea-11de-94e6-0019bbc9165c",
            name: "mon_port",
            apcode: "mon_port",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d48543e-9dea-11de-94e6-0019bbc9165c",
            name: "dm_port",
            apcode: "dm_port",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d489390-9dea-11de-94e6-0019bbc9165c",
            name: "timeout",
            apcode: "timeout",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d48d3aa-9dea-11de-94e6-0019bbc9165c",
            name: "deadline",
            apcode: "deadline",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d491022-9dea-11de-94e6-0019bbc9165c",
            name: "keepalive",
            apcode: "keepalive",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d4956d6-9dea-11de-94e6-0019bbc9165c",
            name: "update_period",
            apcode: "update_period",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cf0268b6-61ee-11e0-b211-0019bbc9165c",
            name: "pq_logs_port",
            apcode: "pq_logs_port",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0af5d218-61ef-11e0-a697-0019bbc9165c",
            name: "pq_events_port",
            apcode: "pq_events_port",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2712221e-9ed0-11de-94e6-0019bbc9165c",
            name: "VPN address",
            apcode: "VPNAddress",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3c3cb3de-9ed0-11de-94e6-0019bbc9165c",
            name: "VPN key",
            apcode: "VPNKey",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "49ade754-9ed0-11de-94e6-0019bbc9165c",
            name: "IP address 1",
            apcode: "IPAddress1",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "55c46f0e-9ed0-11de-94e6-0019bbc9165c",
            name: "IP address 2",
            apcode: "IPAddress2",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0edb9146-9ed3-11de-94e6-0019bbc9165c",
            name: "Site network address",
            apcode: "SiteNetworkAddress",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "684d54ba-9ed0-11de-94e6-0019bbc9165c",
            name: "Netmask",
            apcode: "Netmask",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "93159680-9ed0-11de-94e6-0019bbc9165c",
            name: "Internet connection type",
            apcode: "InternetConnectionType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "00913fc4-a1e3-11de-94e6-0019bbc9165c",
            name: "name",
            apcode: "name",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "05a41d10-a1e3-11de-94e6-0019bbc9165c",
            name: "Vendor",
            apcode: "Vendor",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0a233aec-a1e3-11de-94e6-0019bbc9165c",
            name: "Release",
            apcode: "Release",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b43afc56-a45c-11de-94e6-0019bbc9165c",
            name: "cid",
            apcode: "cid",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d232cb04-bef0-11de-94e6-0019bbc9165c",
            name: "User name",
            apcode: "Username",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "de417e36-bef0-11de-94e6-0019bbc9165c",
            name: "Password",
            apcode: "Password",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "149a23ca-c22a-11de-94e6-0019bbc9165c",
            name: "Recording period",
            apcode: "RecordingPeriod",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a011334e-ddee-11e0-b4d3-00163eb15f52",
            name: "Video external URL",
            apcode: "VideoAppURL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b8a72944-c88e-11de-94e6-0019bbc9165c",
            name: "Video application type",
            apcode: "VideoAppType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "240faf9e-c88f-11de-94e6-0019bbc9165c",
            name: "Video application port",
            apcode: "VideoAppPort",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "44f222be-c88f-11de-94e6-0019bbc9165c",
            name: "Video application username",
            apcode: "VideoAppUser",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "81f4d3fa-c88f-11de-94e6-0019bbc9165c",
            name: "Video application password",
            apcode: "VideoAppPassword",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "052e6f56-8294-11df-94f4-0019bbc9165c",
            name: "Video application target IP",
            apcode: "VideoAppIP",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4bc3cc0e-c890-11de-94e6-0019bbc9165c",
            name: "Connection upload speed",
            apcode: "ConnectionUpSpeed",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5b73cafa-c890-11de-94e6-0019bbc9165c",
            name: "Connection download speed",
            apcode: "ConnectionDownSpeed",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5d9de87a-e3ec-11de-94e6-0019bbc9165c",
            name: "Surge arrester type",
            apcode: "SurgeArresterType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8cf12920-e3ec-11de-94e6-0019bbc9165c",
            name: "Surge arrester number",
            apcode: "SurgeArresterNumber",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "90eeddba-e3ec-11de-94e6-0019bbc9165c",
            name: "Circuit breaker type",
            apcode: "CircuitBreakerType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "950a037a-e3ec-11de-94e6-0019bbc9165c",
            name: "Circuit breaker number",
            apcode: "CircuitBreakerNumber",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "aad14926-fc5a-11de-94e6-0019bbc9165c",
            name: "Fuses number",
            apcode: "FusesNumber",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "af5cd7c6-fc5a-11de-94e6-0019bbc9165c",
            name: "Switches number",
            apcode: "SwitchesNumber",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "7c210276-e4ac-11de-94e6-0019bbc9165c",
            name: "Timezone",
            apcode: "Timezone",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3a6337be-e63c-11de-94e6-0019bbc9165c",
            name: "Gateway",
            apcode: "Gateway",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "469b5098-e641-11de-94e6-0019bbc9165c",
            name: "update_events_period",
            apcode: "update_events_period",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "4b15dcf6-e641-11de-94e6-0019bbc9165c",
            name: "update_sources_period",
            apcode: "update_sources_period",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "492f0d26-0442-11df-94e6-0019bbc9165c",
            name: "Protocol address",
            apcode: "ProtocolAddress",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5f56ca56-a3cb-11e0-b37d-00163eb15f52",
            name: "update_sync_period",
            apcode: "update_sync_period",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "e786b22a-b9d7-11e0-9e27-0019bbc9165c",
            name: "Service profile capabilities",
            apcode: "ServiceProfileCapabilities",
            measurementTypeId: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
                apcode: "CSVS",
                name: "CSVString",
                datatype: "String"
              }
            }
          },
          {
            id: "f1ddd31c-9686-11e0-8ec4-0019bbc9165c",
            name: "Report formats",
            apcode: "ReportFormats",
            measurementTypeId: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
                apcode: "CSVS",
                name: "CSVString",
                datatype: "String"
              }
            }
          },
          {
            id: "f9199b52-9686-11e0-9819-0019bbc9165c",
            name: "Cyclic report periods",
            apcode: "CyclicReportPeriods",
            measurementTypeId: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
                apcode: "CSVS",
                name: "CSVString",
                datatype: "String"
              }
            }
          },
          {
            id: "feb238da-9686-11e0-be28-0019bbc9165c",
            name: "Ad hoc report periods",
            apcode: "AdHocReportPeriods",
            measurementTypeId: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
                apcode: "CSVS",
                name: "CSVString",
                datatype: "String"
              }
            }
          },
          {
            id: "550fb3c8-3551-11e2-9df2-0019bbc9165c",
            name: "Report interval constraints",
            apcode: "ReportIntervalConstraints",
            measurementTypeId: "2950caa0-3552-11e2-a261-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "2950caa0-3552-11e2-a261-0019bbc9165c",
                apcode: "ServiceConfiguration",
                name: "Service Configuration",
                datatype: "JSON"
              }
            }
          },
          {
            id: "610b3f6c-3551-11e2-82b5-0019bbc9165c",
            name: "Report layouts",
            apcode: "ReportLayouts",
            measurementTypeId: "2950caa0-3552-11e2-a261-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "2950caa0-3552-11e2-a261-0019bbc9165c",
                apcode: "ServiceConfiguration",
                name: "Service Configuration",
                datatype: "JSON"
              }
            }
          },
          {
            id: "a3da94e4-961f-11e2-a828-0019bbc9165c",
            name: "Report preset config",
            apcode: "ReportPresetConfig",
            measurementTypeId: "2950caa0-3552-11e2-a261-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "2950caa0-3552-11e2-a261-0019bbc9165c",
                apcode: "ServiceConfiguration",
                name: "Service Configuration",
                datatype: "JSON"
              }
            }
          },
          {
            id: "d98fd018-961f-11e2-8892-0019bbc9165c",
            name: "Use preset config",
            apcode: "UsePresetConfig",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "ea654d30-8791-11e0-9d78-0800200c9a66",
            name: "Maximum mimic diagrams per site",
            apcode: "MaxMimicDiagramsPerSite",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "6cd1f5d0-8c4b-11e0-83f2-0800200c9a66",
            name: "Mimic segment types",
            apcode: "MimicSegmentTypes",
            measurementTypeId: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
                apcode: "CSVS",
                name: "CSVString",
                datatype: "String"
              }
            }
          },
          {
            id: "748da610-8792-11e0-9d78-0800200c9a66",
            name: "Maximum components per mimic diagram",
            apcode: "MaxComponentsPerMimicDiagram",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "9853ab30-8792-11e0-9d78-0800200c9a66",
            name: "Maximum parameters per mimic component",
            apcode: "MaxMimicParametersPerComponent",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "dca73c6c-de12-11e0-bb16-0019bbc9165c",
            name: "Maximum states per mimic component",
            apcode: "MaxMimicStatesPerComponent",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "5321d176-6c75-11e2-ac1e-0019bbc9165c",
            name: "Hamec name",
            apcode: "HamecName",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5371208c-6c75-11e2-a326-0019bbc9165c",
            name: "Hamec target",
            apcode: "HamecTarget",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "53b7b420-6c75-11e2-81fd-0019bbc9165c",
            name: "Hamec parameters",
            apcode: "HamecParameters",
            measurementTypeId: "2950caa0-3552-11e2-a261-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "2950caa0-3552-11e2-a261-0019bbc9165c",
                apcode: "ServiceConfiguration",
                name: "Service Configuration",
                datatype: "JSON"
              }
            }
          },
          {
            id: "5402d4d2-6c75-11e2-a534-0019bbc9165c",
            name: "Hamec code",
            apcode: "HamecCode",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "abd03980-8792-11e0-9d78-0800200c9a66",
            name: "Maximum mimic diagram file size",
            apcode: "MaxMimicDiagramFileSize",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fa567530-bcf1-11e0-8824-0019bbc9165c",
            name: "Maximum agent preferences count",
            apcode: "MaxCustomPrefsCount",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fa59331a-bcf1-11e0-999d-0019bbc9165c",
            name: "Maximum agent preferences file size",
            apcode: "MaxCustomPrefsFileSize",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fa573010-bcf1-11e0-a8a1-0019bbc9165c",
            name: "Maximum custom collection of site measurement locations count",
            apcode: "MaxCustomMlocsCount",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fa59dd42-bcf1-11e0-af59-0019bbc9165c",
            name: "Maximum custom collection of site measurement locations file size",
            apcode: "MaxCustomMlocsFileSize",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fa57dd26-bcf1-11e0-b286-0019bbc9165c",
            name: "Maximum custom collection of site state variables count",
            apcode: "MaxCustomSvarsCount",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fa5a99c6-bcf1-11e0-83b1-0019bbc9165c",
            name: "Maximum custom collection of site state variables file size",
            apcode: "MaxCustomSvarsFileSize",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fa58882a-bcf1-11e0-81ae-0019bbc9165c",
            name: "Maximum custom collection of data across sites count",
            apcode: "MaxCustomXsitesCount",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fa5b5ef6-bcf1-11e0-ac0c-0019bbc9165c",
            name: "Maximum custom collection of data across sites file size",
            apcode: "MaxCustomXsitesFileSize",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "39930538-c260-11e0-8237-0019bbc9165c",
            name: "Preset report segment types",
            apcode: "PresetReportSegmentTypes",
            measurementTypeId: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "b636e2cc-9686-11e0-9ef3-0019bbc9165c",
                apcode: "CSVS",
                name: "CSVString",
                datatype: "String"
              }
            }
          },
          {
            id: "d787bfb0-c425-11e0-b985-0019bbc9165c",
            name: "Maximum documents per site",
            apcode: "MaxDocumentsPerSite",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "d7886a14-c425-11e0-8565-0019bbc9165c",
            name: "Maximum document file size",
            apcode: "MaxDocumentSize",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "d78911c6-c425-11e0-9ce8-0019bbc9165c",
            name: "Maximum total Document File Size per Site",
            apcode: "MaxDocumentSpacePerSite",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "2002df1c-e821-11e0-9e4e-0019bbc9165c",
            name: "Maximum parameters per graph",
            apcode: "MaxParametersPerGraph",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "bd6553e6-113a-11e2-aa68-0019bbc9165c",
            name: "Maximum concurrent online access sessions",
            apcode: "MaxOnlineAccessKept",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "58439cf0-2aa4-11e3-a934-0019bbc9165c",
            name: "Maximum concurrent real time monitors",
            apcode: "MaxRealTimeMonitors",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "738758e2-be22-11e2-8302-0019bbc9165c",
            name: "Tracker type",
            apcode: "TrackerType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8cf9a10e-be22-11e2-98ba-0019bbc9165c",
            name: "Drive type",
            apcode: "DriveType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "44036ca0-beea-11e2-9409-00163eb15f52",
            name: "Number of trackers",
            apcode: "NumOfTrackers",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "99ff005e-482d-11e6-8135-0019bbc9165c",
            name: "Number of tracker gateways",
            apcode: "NumOfTrackerGateways",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "a927a228-cede-40d6-8fce-81cd40248984",
            name: "Site online in CMCS timeout",
            apcode: "SiteOnlineInCMCSTimeout",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "4a493586-4b13-4e91-b0f6-5dc69ae9d8b5",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              },
              engineeringUnit: {
                id: "4a493586-4b13-4e91-b0f6-5dc69ae9d8b5",
                name: "min"
              }
            }
          },
          {
            id: "707fe6e8-94ad-11e3-88a6-00163eb15f52",
            name: "Maximum phase voltage",
            apcode: "MaxPhaseVoltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867e-8264-11de-ad55-0090f586a869",
                name: "Vac"
              }
            }
          },
          {
            id: "7082ac48-94ad-11e3-9eb8-00163eb15f52",
            name: "Maximum DC voltage",
            apcode: "MaxDCVoltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867d-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867d-8264-11de-ad55-0090f586a869",
                name: "Vdc"
              }
            }
          },
          {
            id: "7085adf8-94ad-11e3-9b3e-00163eb15f52",
            name: "Maximum Line voltage",
            apcode: "MaxLineVoltage",
            measurementTypeId: "3074ed0f-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc867e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0f-8264-11de-ad55-0090f586a869",
                apcode: "Voltage",
                name: "Voltage",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc867e-8264-11de-ad55-0090f586a869",
                name: "Vac"
              }
            }
          },
          {
            id: "708bc4f4-94ad-11e3-9065-00163eb15f52",
            name: "Peak LCP power",
            apcode: "PeakLCPPower",
            measurementTypeId: "3074ed0e-8264-11de-ad55-0090f586a869",
            engineeringUnitId: "a0bc866e-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0e-8264-11de-ad55-0090f586a869",
                apcode: "Power",
                name: "Power",
                datatype: "Float"
              },
              engineeringUnit: {
                id: "a0bc866e-8264-11de-ad55-0090f586a869",
                name: "kW"
              }
            }
          },
          {
            id: "b94dac3c-a918-11e3-b365-0019bbc9165c",
            name: "Temperature 1 sensor",
            apcode: "Temp1Sensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "de05eade-a919-11e3-b241-0019bbc9165c",
            name: "Temperature 2 sensor",
            apcode: "Temp2Sensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "3b089fd8-a91f-11e3-92a3-0019bbc9165c",
            name: "Fan speed sensor",
            apcode: "FanSpeedSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "9c2af61c-a91f-11e3-b76a-0019bbc9165c",
            name: "Humidity sensor",
            apcode: "HumiditySensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "3b6447b6-56aa-11ec-87c9-5405dbf465f7",
            name: "Humidity 2 sensor",
            apcode: "Humidity2Sensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "caf735d8-57cc-11e6-afe1-0019bbc9165c",
            name: "Dew point sensor",
            apcode: "DewPointSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "cab10b3a-57cc-11e6-bd1d-0019bbc9165c",
            name: "Mixture ratio sensor",
            apcode: "MixtureRatioSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "ca577764-57cc-11e6-9da5-0019bbc9165c",
            name: "Absolute humidity sensor",
            apcode: "AbsoluteHumiditySensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "c12d27f4-5568-11e5-826f-0019bbc9165c",
            name: "Dust sensor",
            apcode: "DustSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "94a2dd80-8f76-11e5-abda-0019bbc9165c",
            name: "Snow sensor",
            apcode: "SnowSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "34641384-b96d-11e3-903c-0019bbc9165c",
            name: "Sun tracker",
            apcode: "SunTracker",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "178b7604-3757-11e4-8c91-0019bbc9165c",
            name: "Solectria site ID",
            apcode: "SolectriaSiteID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "69aca65e-97e9-11e4-8c63-0019bbc9165c",
            name: "Portfolio",
            apcode: "Portfolio",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7fa1e596-9b27-11e4-a30a-0019bbc9165c",
            name: "Pq id",
            apcode: "PqId",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "84de1980-9b27-11e4-b7c2-0019bbc9165c",
            name: "Pq mode",
            apcode: "PqMode",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "87ea1d54-9b27-11e4-bc2d-0019bbc9165c",
            name: "Pq host",
            apcode: "PqHost",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "883d1d74-9b27-11e4-95d1-0019bbc9165c",
            name: "Pq port",
            apcode: "PqPort",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "888da4ba-9b27-11e4-aa4e-0019bbc9165c",
            name: "Pq rx keepalive",
            apcode: "PqRxKeepalive",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "92a3d492-9b27-11e4-96b4-0019bbc9165c",
            name: "Pq tx keepalive",
            apcode: "PqTxKeepalive",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c704feca-ae03-11e4-86cc-0019bbc9165c",
            name: "File access",
            apcode: "ff_access",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cbb7b4c6-ae03-11e4-bbc8-0019bbc9165c",
            name: "File host",
            apcode: "ff_host",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cffd7a2a-ae03-11e4-bcd8-0019bbc9165c",
            name: "File host username",
            apcode: "ff_username",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d32f4cd2-ae03-11e4-a3a4-0019bbc9165c",
            name: "File host password",
            apcode: "ff_password",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d73cf716-ae03-11e4-a2af-0019bbc9165c",
            name: "File host insecure",
            apcode: "ff_insecure",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "da84b9cc-ae03-11e4-aa2d-0019bbc9165c",
            name: "File path",
            apcode: "ff_path",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dd6e92fc-ae03-11e4-be02-0019bbc9165c",
            name: "File format",
            apcode: "ff_format",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "22b30fa4-bdc8-11e4-84f7-0019bbc9165c",
            name: "Meteo service name",
            apcode: "meteo_service_name",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2fd0534a-bdc8-11e4-8f62-0019bbc9165c",
            name: "Meteo service username",
            apcode: "meteo_service_username",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "30039dae-bdc8-11e4-bab4-0019bbc9165c",
            name: "Meteo service password",
            apcode: "meteo_service_password",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "30381b1a-bdc8-11e4-a261-0019bbc9165c",
            name: "Meteo service insecure",
            apcode: "meteo_service_insecure",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "306efa04-bdc8-11e4-b38d-0019bbc9165c",
            name: "Solargis site id",
            apcode: "solargis_site_id",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "30a72a28-bdc8-11e4-be64-0019bbc9165c",
            name: "Solargis site name",
            apcode: "solargis_site_name",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "31aed1e6-bdc8-11e4-b422-0019bbc9165c",
            name: "Solargis tilt",
            apcode: "solargis_tilt",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "31f59446-bdc8-11e4-84a5-0019bbc9165c",
            name: "Solargis azimuth",
            apcode: "solargis_azimuth",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "32329f08-bdc8-11e4-bb3d-0019bbc9165c",
            name: "Solargis elevation",
            apcode: "solargis_elevation",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "327f8138-bdc8-11e4-ba43-0019bbc9165c",
            name: "Solargis pv system",
            apcode: "solargis_pv_system",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bba2518-c673-11e5-9d9a-0019bbc9165c",
            name: "Power control service",
            apcode: "PPCEnabled",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "42b32016-e4cd-11ed-b5f8-01f7fb76437e",
            name: "Power control service",
            apcode: "MultiplePPCEnabled",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "9bbaa560-c673-11e5-9de5-0019bbc9165c",
            name: "Power plant controller integrated",
            apcode: "PPCIntegrated",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6e97edd8-e4cd-11ed-b5f8-01f7fb76437e",
            name: "Power plant controller integrated",
            apcode: "MultiplePPCIntegrated",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbb18ba-c673-11e5-b716-0019bbc9165c",
            name: "Nominal power",
            apcode: "PPCNominalPower",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "85448230-e4cd-11ed-b5f8-01f7fb76437e",
            name: "Nominal power",
            apcode: "MultiplePPCNominalPower",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbb8dcc-c673-11e5-a227-0019bbc9165c",
            name: "Nominal voltage",
            apcode: "PPCGridVoltage",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9c4fce94-e4cd-11ed-b5f8-01f7fb76437e",
            name: "Nominal voltage",
            apcode: "MultiplePPCGridVoltage",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbbfda2-c673-11e5-b442-0019bbc9165c",
            name: "PPC vendor",
            apcode: "PPCVendor",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b6e8d26e-e4cd-11ed-b5f8-01f7fb76437e",
            name: "PPC vendor",
            apcode: "MultiplePPCVendor",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbc6eae-c673-11e5-bbf4-0019bbc9165c",
            name: "PPC model",
            apcode: "PPCModel",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5542dc6c-e4cd-11ed-b5f8-01f7fb76437e",
            name: "PPC model",
            apcode: "MultiplePPCModel",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2c2e74f6-4e95-475f-9c7b-2fbcf9710b63",
            name: "PPC grid frequency",
            apcode: "PPCNominalFrequency",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e42a43f4-e4d5-11ed-b5f8-01f7fb76437e",
            name: "PPC grid frequency",
            apcode: "MultiplePPCNominalFrequency",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f08a5a25-3a17-4719-a946-c26728cf7b9d",
            name: "AVR voltage regulation service",
            apcode: "AVRVoltageRegulationService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ca249e46-e4d5-11ed-b5f8-01f7fb76437e",
            name: "AVR voltage regulation service",
            apcode: "MultipleAVRVoltageRegulationService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbce122-c673-11e5-986c-0019bbc9165c",
            name: "P active power control service",
            apcode: "PActivePowerControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cdb53e7e-e4cd-11ed-b5f8-01f7fb76437e",
            name: "P active power control service",
            apcode: "MultiplePActivePowerControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbd5436-c673-11e5-936a-0019bbc9165c",
            name: "Pgrad active power ramp rate control service",
            apcode: "PgradActivePowerRampRateControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ebc72d3c-e4cd-11ed-b5f8-01f7fb76437e",
            name: "Pgrad active power ramp rate control service",
            apcode: "MultiplePgradActivePowerRampRateControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a2b0124e-e4ef-11e9-bdaf-42010afa010f",
            name: "Qgrad reactive power ramp rate control service",
            apcode: "QgradReactivePowerRampRateControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbdc344-c673-11e5-b177-0019bbc9165c",
            name: "P(f) frequency control service",
            apcode: "PfFrequencyControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "02d0d1a4-e4ce-11ed-b5f8-01f7fb76437e",
            name: "P(f) frequency control service",
            apcode: "MultiplePfFrequencyControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbe32fc-c673-11e5-9a67-0019bbc9165c",
            name: "Q reactive power control service",
            apcode: "QReactivePowerControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "18a69c8e-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Q reactive power control service",
            apcode: "MultipleQReactivePowerControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbea5ac-c673-11e5-ac04-0019bbc9165c",
            name: "Q(P) reactive power-active power control service",
            apcode: "QPReactivePowerActivePowerControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "34d2359e-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Q(P) reactive power-active power control service",
            apcode: "MultipleQPReactivePowerActivePowerControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbf1906-c673-11e5-8733-0019bbc9165c",
            name: "Q(V) reactive power-voltage control service",
            apcode: "QVReactivePoweVoltageControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4e026534-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Q(V) reactive power-voltage control service",
            apcode: "MultipleQVReactivePoweVoltageControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbf8814-c673-11e5-a897-0019bbc9165c",
            name: "Cosphi power factor control service",
            apcode: "CosphiPowerFactorControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "627e5f2c-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Cosphi power factor control service",
            apcode: "MultipleCosphiPowerFactorControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bbff98e-c673-11e5-9f53-0019bbc9165c",
            name: "Cosphi(P) power factor-active power control service",
            apcode: "CosphiPPowerFactorActivePowerControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "77d8e09a-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Cosphi(P) power factor-active power control service",
            apcode: "MultipleCosphiPPowerFactorActivePowerControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bc06aa4-c673-11e5-a40c-0019bbc9165c",
            name: "Cosphi(V) power factor-voltage control service",
            apcode: "CosphiVPowerFactorVoltageControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8b8811c4-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Cosphi(V) power factor-voltage control service",
            apcode: "MultipleCosphiVPowerFactorVoltageControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bc0db4c-c673-11e5-a537-0019bbc9165c",
            name: "Tanphi phase control service",
            apcode: "TanphiPhaseControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9e5a1040-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Tanphi phase control service",
            apcode: "MultipleTanphiPhaseControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bc159a0-c673-11e5-a30a-0019bbc9165c",
            name: "Phi phase shift control service",
            apcode: "PhiPhaseShiftControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b0d44178-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Phi phase shift control service",
            apcode: "MultiplePhiPhaseShiftControlService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bc1cbb0-c673-11e5-9ec2-0019bbc9165c",
            name: "Qnight reactive power at night service",
            apcode: "QNightReactivePowerAtNightService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c5fa16f4-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Qnight reactive power at night service",
            apcode: "MultipleQNightReactivePowerAtNightService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bc23d7a-c673-11e5-bd01-0019bbc9165c",
            name: "Slimit apparent power limitation",
            apcode: "SlimitApparentPowerLimitation",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d7f5b39a-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Slimit apparent power limitation",
            apcode: "MultipleSlimitApparentPowerLimitation",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bc2ad32-c673-11e5-a794-0019bbc9165c",
            name: "Plant shutdown service",
            apcode: "PlantShutdownService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ee52d01e-e4ce-11ed-b5f8-01f7fb76437e",
            name: "Plant shutdown service",
            apcode: "MultiplePlantShutdownService",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b5c0bfee-57d7-11e6-a779-b083fe86d869",
            name: "Number of flood sensors",
            apcode: "NumOfFloodSensors",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "74542ca8-57d7-11e6-a779-b083fe86d869",
            name: "Number of anemometers",
            apcode: "NumOfTrackerAnemometers",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5d56df2a-c125-11e6-a9fb-0019bbc9165c",
            name: "Model",
            apcode: "Model",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "04ff5928-c130-11e6-a19a-0019bbc9165c",
            name: "Number of network switches",
            apcode: "NumOfNetworkSwitches",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "c5358a84-4b58-11e7-8f7b-7071bcaac31b",
            name: "Water level sensor",
            apcode: "WaterLevelSensor",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "43637802-cad5-11e7-8218-ac162d1048b3",
            name: "Number of measurement upload profiles",
            apcode: "NumberOfMeasurementUploadProfiles",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "17eff36e-c7ed-11e9-8b02-42010afa010f",
            name: "Number of generators",
            apcode: "NumOfGenerators",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "54182048-d2f9-11e9-8a4d-42010afa010f",
            name: "Number of generator groups",
            apcode: "NumOfGeneratorGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "82cf5102-1e7c-11eb-be12-42010afa010f",
            name: "Number of gas engine groups",
            apcode: "NumOfGasEngineGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "de224906-1e7c-11eb-bdc6-42010afa010f",
            name: "Number of gas engines",
            apcode: "NumOfGasEngines",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "95040754-1e7d-11eb-8e25-42010afa010f",
            name: "Number of gas engines controllers",
            apcode: "NumOfGasEnginesControllers",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "d17378be-1e7d-11eb-8a97-42010afa010f",
            name: "Number of Continuous Emissions Monitoring Systems",
            apcode: "NumOfCEMS",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "64873a32-1e7e-11eb-8b5d-42010afa010f",
            name: "Number of Gas Pressure Reduction Stations",
            apcode: "NumOfGasPRS",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "5a7da484-b0de-11eb-926d-42010afa010f",
            name: "Number of Electrical Preheaters",
            apcode: "NumOfElectricalPreheaters",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "46b47e1e-11c0-11ea-bbed-42010afa010f",
            name: "Number of gas turbines",
            apcode: "NumOfGasTurbines",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "8a474748-11bf-11ea-91b6-42010afa010f",
            name: "Number of gas turbine groups",
            apcode: "NumOfGasTurbineGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "7a8793d1-3d14-4c27-aee4-7b3b69b533b4",
            name: "Available calculation periods",
            apcode: "AvailableCalculationPeriods",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "220834ae-e4f0-11e9-a53d-42010afa010f",
            name: "Spinning reserve",
            apcode: "SpinningReserve",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "26ed5f44-f0d0-11e9-aa45-42010afa010f",
            name: "PV control mode",
            apcode: "PVControlMode",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4b492dbe-f0d0-11e9-940c-42010afa010f",
            name: "Gensets control mode",
            apcode: "GensetsControlMode",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6ef80c1c-f0d0-11e9-a7f7-42010afa010f",
            name: "Under frequency load shedding",
            apcode: "UnderFreqLoadShedding",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e9a22c94-20ce-11ea-8f62-42010afa015a",
            name: "Nominal power AC",
            apcode: "NominalPowerAC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ef557308-20ce-11ea-a4a9-42010afa015a",
            name: "Nominal power DC",
            apcode: "NominalPowerDC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b4bfc09c-3c5b-11ea-a02d-f48e389c51d3",
            name: "Subtypes",
            apcode: "SubTypes",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "82c4f78a-7007-11ea-930d-42010afa010f",
            name: "Number of battery monitors",
            apcode: "NumOfBatteryMonitors",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "77a40012-48ed-11ea-9e0a-80c16ef57daa",
            name: "Number of battery banks",
            apcode: "NumOfBatteryBanks",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "8ee73e38-48ed-11ea-9e0a-80c16ef57daa",
            name: "Number of load groups",
            apcode: "NumOfLoadGroups",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "a1c7ae8e-48ed-11ea-9e0a-80c16ef57daa",
            name: "Number of mains phases",
            apcode: "NumOfMainsPhases",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "b70a3410-48ed-11ea-9e0a-80c16ef57daa",
            name: "Number of rectifiers",
            apcode: "NumOfRectifiers",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "d9b4edd4-48ed-11ea-9e0a-80c16ef57daa",
            name: "Serial number",
            apcode: "Serial",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e5065cba-4f08-11ea-8bbe-42010afa010f",
            name: "Number of currents",
            apcode: "NumOfCurrents",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "119064ec-4f09-11ea-b076-42010afa010f",
            name: "Number of fuses",
            apcode: "NumOfFuses",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "8aef2666-4f09-11ea-afe9-42010afa010f",
            name: "Number of symmetries",
            apcode: "NumOfSymmetries",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "668cd8ca-4f0b-11ea-9b8d-42010afa010f",
            name: "Number of temperatures",
            apcode: "NumOfTemperatures",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "2d81eb44-4f27-11ea-8df4-42010afa010f",
            name: "Number of LVLDs",
            apcode: "NumOfLVLDs",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "41ba9f3e-4f27-11ea-9f9f-42010afa010f",
            name: "Number of voltages",
            apcode: "NumOfVoltages",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "35a9130c-5886-11ea-88fc-80c16ef57daa",
            name: "Software version",
            apcode: "SofwareVersion",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d9a22682-94dc-11ea-a6fe-42010afa010f",
            name: "Modbus ID",
            apcode: "ModbusID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "838b579a-b472-11ea-b3b5-6bd60120b466",
            name: "Site ID",
            apcode: "SiteId",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a360f879-9452-4aff-9e0c-05e6a8a66875",
            name: "Market Timezone",
            apcode: "MarketTimezone",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "950df88a-30bc-11eb-bd3d-c37d7dc3d476",
            name: "Cabin vendor",
            apcode: "CabinVendor",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "20207042-30bd-11eb-bd3d-c37d7dc3d476",
            name: "Installation contractor",
            apcode: "InstallationContractor",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "347265dc-30bd-11eb-bd3d-c37d7dc3d476",
            name: "Maintenance contractor",
            apcode: "MaintenanceContractor",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "48f4065a-30bd-11eb-bd3d-c37d7dc3d476",
            name: "Cabin type",
            apcode: "CabinType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "da0c7d34-fba0-413c-8e7a-94e0600d7886",
            name: "District",
            apcode: "District",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5f15d772-a454-433c-9a44-e44f1c19b8e3",
            name: "Urban center",
            apcode: "UrbanCenter",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "882f8289-70fd-484c-bb6b-70479e4b7fd9",
            name: "Region",
            apcode: "Region",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c0585cc2-0125-4f38-a285-d616ef15d6e4",
            name: "Warranty expiration date",
            apcode: "WarrantyExpirationDate",
            measurementTypeId: "3074ed0a-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0a-8264-11de-ad55-0090f586a869",
                apcode: "Date",
                name: "Date",
                datatype: "Date"
              }
            }
          },
          {
            id: "d03ebaac-4791-4342-934b-2ed875f44348",
            name: "Activation date",
            apcode: "ActivationDate",
            measurementTypeId: "3074ed0a-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0a-8264-11de-ad55-0090f586a869",
                apcode: "Date",
                name: "Date",
                datatype: "Date"
              }
            }
          },
          {
            id: "987bbc44-522f-4013-b85c-4dd2849d8fd9",
            name: "Activation date on NMS",
            apcode: "ActivationDateNMS",
            measurementTypeId: "3074ed0a-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0a-8264-11de-ad55-0090f586a869",
                apcode: "Date",
                name: "Date",
                datatype: "Date"
              }
            }
          },
          {
            id: "e146f5d8-0926-40ee-b13d-cc98dd4f621c",
            name: "Maintenance date",
            apcode: "MaintenanceDate",
            measurementTypeId: "3074ed0a-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0a-8264-11de-ad55-0090f586a869",
                apcode: "Date",
                name: "Date",
                datatype: "Date"
              }
            }
          },
          {
            id: "c6aa3a4d-9333-4bf3-b406-4f38e63e852e",
            name: "Number of controllers",
            apcode: "NumberOfControllers",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "89850342-2712-4c69-9080-3727fb81800f",
            name: "Number of active equipment",
            apcode: "NumberOfActiveEquipment",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "92c52570-0552-4a8b-87bb-06b96fe397b9",
            name: "Contract",
            apcode: "Contract",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b3baaf9e-01c0-42e0-853a-92a8b7980feb",
            name: "Information",
            apcode: "Information",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e3a1315d-7cdc-4de8-917d-5a4cca498262",
            name: "Cabin KV number",
            apcode: "CabinKVNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e3286d16-ded2-4eef-bc05-0e28854465aa",
            name: "Severity",
            apcode: "Severity",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9c311b88-b015-47ae-955c-3ca3f9ca106c",
            name: "Cabin group",
            apcode: "CabinGroup",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "db5c7eb2-bb1f-4896-a71b-c603967e5d21",
            name: "DSLAM network IP address",
            apcode: "DSLAMNetworkIPAddress",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9a59ff29-9819-4089-950a-ee8e11de73ff",
            name: "DSLAM code",
            apcode: "DSLAMCode",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3089c320-e043-47a2-97f4-d722050c18db",
            name: "Power source provision number",
            apcode: "PowerSourceProvision",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3c108855-db95-40d5-8453-30b7c66a5aab",
            name: "Number of copper pairs",
            apcode: "NumberOfCopperPairs",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "9fde7409-d676-49cb-abff-59d36bcd879f",
            name: "Number of copper wires",
            apcode: "NumberOfCopperWires",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "96dc2acc-f922-4e3a-850e-baf9a47335b8",
            name: "Port",
            apcode: "Port",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "786ce3e1-ea8c-4f60-bda6-3ffd210adb56",
            name: "PSU serial number",
            apcode: "PSUSerialNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "20606f64-5129-434f-875e-7e5e16c632f6",
            name: "MAC address",
            apcode: "MACAddress",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ebc67cd8-aa67-4242-a3e1-81fd96d40ba9",
            name: "URL",
            apcode: "URL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c0b80557-fec1-473b-a2ff-6b772cbcb476",
            name: "T3 app prefix",
            apcode: "T3AppPrefix",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9756b953-022f-4ff3-bae1-c63db1f3f291",
            name: "Extended iProc Handles",
            apcode: "extIprocHandles",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "45370622-e74b-433f-a3da-8939a910ad48",
            name: "ETSS Client Group",
            apcode: "EtssClientGroup",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0bd78ef6-d2c1-4e71-8824-ad1e04723357",
            name: "VPP Site",
            apcode: "IsVpp",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "12ceafa7-64cf-4d9f-9b39-ac502a7bbfef",
            name: "VPP Parent ID",
            apcode: "VppParentId",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "82e6e1bd-e191-44f2-a1aa-30c10dbeb331",
            name: "VPP Parent Name",
            apcode: "VppParentName",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c92c703f-7366-4c14-b412-0dca79b6db69",
            name: "Firebase Token Vfsl Mobile",
            apcode: "FirebaseTokenVfslMobile",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3f7df3c8-bd40-11eb-9f64-d5f938d37783",
            name: "Number of range extenders",
            apcode: "NumOfTrackerRangeExtenders",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c980d418-4e18-4e4c-96f7-ded474c89b19",
            name: "Cabin tech",
            apcode: "CabinTech",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "adb56ba3-e638-41c9-91a7-4a0a12e73dac",
            name: "Fang disabled",
            apcode: "FangDisabled",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "a65149de-cdac-11eb-a69c-812221f460d9",
            name: "Number of cleaning robots",
            apcode: "NumOfCleaningRobots",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ad0b3e60-cdac-11eb-a69c-812221f460d9",
            name: "Number of cleaning robot gateways",
            apcode: "NumOfCleaningRobotGateways",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "93831270-69b5-4434-98a0-09c2d3f969d0",
            name: "Fose",
            apcode: "Fose",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0c5b9f54-22b2-11ec-a7b5-4b33ab6c0879",
            name: "Number of tracker gateway groups",
            apcode: "NumOfTrackerGatewayGroups",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d8de8a2a-84c6-11ec-8db2-b0a460c00080",
            name: "Number of PPCs",
            apcode: "NumOfMultiplePPCs",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b8845196-8f2b-11ec-9013-42010afa010f",
            name: "Number of HVACs",
            apcode: "NumOfHVACs",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a4b300aa-9a2e-11ec-89e4-5405dbf465f7",
            name: "Tcp Port",
            apcode: "TcpPort",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e6f71dfb-2d0c-41d4-9f8f-12128000cc49",
            name: "Max number of documents an agent can have for DSM",
            apcode: "MaxDocumentsPerAgent",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "399bb6e7-2f9b-4f5f-a4db-dfeaefe0c043",
            name: "Max size in bytes of all the documents an agent can have for DSM",
            apcode: "MaxDocumentSpacePerAgent",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "abb11398-e181-11ec-bac8-42010afa015a",
            name: "File Type",
            apcode: "FileType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2f6de650-f228-11ec-8cc6-42010afa010f",
            name: "ODSS Presence",
            apcode: "ODSSPresence",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8f9570f2-f2e6-11ec-a68d-42010afa010f",
            name: "ODSS Active",
            apcode: "ODSSActive",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f0c9e46c-f2e5-11ec-8953-42010afa010f",
            name: "Cabins Designs",
            apcode: "CabinsDesigns",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "90059426-f2e7-11ec-9e25-42010afa010f",
            name: "RNOC Notification Date",
            apcode: "RNOCNotificationDate",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "45beecf6-f2e6-11ec-a7ab-42010afa010f",
            name: "RNOC Tests End Date",
            apcode: "RNOCTestsEndDate",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "76d4c87e-f2e6-11ec-8ed6-42010afa010f",
            name: "EETT Code",
            apcode: "EETTCode",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "30cae718-f2e7-11ec-a6b0-42010afa010f",
            name: "Admin Region",
            apcode: "AdminRegion",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3428a4b8-f2e7-11ec-992e-42010afa010f",
            name: "Controller Type",
            apcode: "ControllerType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "36c0bcf6-f2e7-11ec-9011-42010afa010f",
            name: "RO Community",
            apcode: "ROCommunity",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "39601376-f2e7-11ec-a46a-42010afa010f",
            name: "RW Community",
            apcode: "RWCommunity",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3c25527e-f2e7-11ec-8e99-42010afa010f",
            name: "System Serial",
            apcode: "SystemSerial",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6ff31370-f2e7-11ec-b9c4-42010afa010f",
            name: "Telco Area",
            apcode: "TelcoArea",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "729fe2ce-f2e7-11ec-a3a2-42010afa010f",
            name: "Tech Department",
            apcode: "TechDepartment",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "75111532-f2e7-11ec-9c31-42010afa010f",
            name: "Test Results",
            apcode: "TestResults",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "510edec4-254d-11ed-878d-42010afa015a",
            name: "Battery Installation Date",
            apcode: "BatteryInstallationDate",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9ffe24fe-254d-11ed-a11f-42010afa015a",
            name: "Grid Supply Number",
            apcode: "GridSupplyNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c274fe86-254d-11ed-bf94-42010afa015a",
            name: "Address",
            apcode: "Address",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e45cc8d0-254d-11ed-9dbc-42010afa015a",
            name: "ODSS Number",
            apcode: "ODSSNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0a3d7fe0-254e-11ed-bff8-42010afa015a",
            name: "Site Criticality",
            apcode: "SiteCriticality",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1cc1f29a-254e-11ed-9863-42010afa015a",
            name: "Notes",
            apcode: "Notes",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5962fe88-254e-11ed-a29d-42010afa015a",
            name: "Battery Type",
            apcode: "BatteryType",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ddd8db94-463f-11ed-ae95-42010afa015a",
            name: "Site Origin",
            apcode: "SiteOrigin",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f9a43af2-8447-4141-9259-1d5789343f14",
            name: "138kV AC_CURRENT_A",
            apcode: "DRIVE_138kV AC_CURRENT_A",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "459ae702-15f0-4f7e-a347-7b42cfe868ae",
            name: "138kV AC_CURRENT_B",
            apcode: "DRIVE_138kV AC_CURRENT_B",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cc3d673b-ebac-43ef-a82a-e9d236cc2268",
            name: "138kV AC_CURRENT_C",
            apcode: "DRIVE_138kV AC_CURRENT_C",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d800078e-72b0-4f73-b607-aa077e3906c4",
            name: "34.5kV AC_CURRENT_A",
            apcode: "DRIVE_34.5kV AC_CURRENT_A",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "36252ece-5ee2-4a28-a4fb-d4f5bd6bbd5a",
            name: "34.5kV AC_CURRENT_B",
            apcode: "DRIVE_34.5kV AC_CURRENT_B",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f556535f-d752-4a5b-92c9-77b7af399489",
            name: "34.5kV AC_CURRENT_C",
            apcode: "DRIVE_34.5kV AC_CURRENT_C",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "920b7255-c074-4011-9637-a10b5d8716ed",
            name: "ABS_NUMBER",
            apcode: "DRIVE_ABS_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8a830a60-6ec3-4c80-9845-be6c5e122332",
            name: "AC_Capacity",
            apcode: "DRIVE_AC_CAPACITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f3e68558-a342-42d7-9209-e70e116c4496",
            name: "AC_CLIPPING_LIMIT",
            apcode: "DRIVE_AC_CLIPPING_LIMIT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "97a6e4a4-6749-4f5e-b4c2-747bef0b10b1",
            name: "AC_CURRENT",
            apcode: "DRIVE_AC_CURRENT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2d8fffa0-3671-4175-8f38-798485eae520",
            name: "AC_CURRENT_A",
            apcode: "DRIVE_AC_CURRENT_A",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "032bdc67-3702-4d9c-9c67-aac883c6969a",
            name: "AC_CURRENT_A_ANGLE_IEC",
            apcode: "DRIVE_AC_CURRENT_A_ANGLE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8c533eaa-a019-41bc-b835-0cc128e9967b",
            name: "AC_CURRENT_A_GRID",
            apcode: "DRIVE_AC_CURRENT_A_GRID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4d92f2c0-7224-40b3-9318-181bbe39b3e6",
            name: "AC_CURRENT_A_IEC",
            apcode: "DRIVE_AC_CURRENT_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c23946f4-837b-4782-8815-8734070e57de",
            name: "AC_CURRENT_A_NOM",
            apcode: "DRIVE_AC_CURRENT_A_NOM",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f5e9a37f-2646-4b2f-912c-6e0336941886",
            name: "AC_CURRENT_A_NOM_IEC",
            apcode: "DRIVE_AC_CURRENT_A_NOM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a1bdbd14-6feb-429d-81f1-5de23aa0d936",
            name: "AC_CURRENT_A_PRIMARY_IEC",
            apcode: "DRIVE_AC_CURRENT_A_PRIMARY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "079cef68-de2a-4b47-aa56-89c33ffba88e",
            name: "AC_CURRENT_A_SECONDARY_IEC",
            apcode: "DRIVE_AC_CURRENT_A_SECONDARY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4b227b56-fa7f-4e13-a78e-4a0113ccd96f",
            name: "AC_CURRENT_B",
            apcode: "DRIVE_AC_CURRENT_B",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "02503149-8132-4396-8cc7-c3dcf105eaf2",
            name: "AC_CURRENT_B_ANGLE_IEC",
            apcode: "DRIVE_AC_CURRENT_B_ANGLE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "97e00872-9742-4023-a398-78850724039d",
            name: "AC_CURRENT_B_GRID",
            apcode: "DRIVE_AC_CURRENT_B_GRID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a16e6139-1cf6-4a60-be85-072f5bd40a1e",
            name: "AC_CURRENT_B_IEC",
            apcode: "DRIVE_AC_CURRENT_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bbc6d6bd-3af0-434c-a687-04452703e201",
            name: "AC_CURRENT_B_LO",
            apcode: "DRIVE_AC_CURRENT_B_LO",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f7d6cda8-cae0-47d4-8c4d-be1a6b301665",
            name: "AC_CURRENT_B_NOM",
            apcode: "DRIVE_AC_CURRENT_B_NOM",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f14f875d-2a91-43dc-be15-2a94a76ff847",
            name: "AC_CURRENT_B_NOM_IEC",
            apcode: "DRIVE_AC_CURRENT_B_NOM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1421d3e4-32aa-427d-b04a-030de86a5834",
            name: "AC_CURRENT_B_PRIMARY_IEC",
            apcode: "DRIVE_AC_CURRENT_B_PRIMARY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ae295988-be8c-4082-98ac-b558f1d01a2d",
            name: "AC_CURRENT_B_SECONDARY_IEC",
            apcode: "DRIVE_AC_CURRENT_B_SECONDARY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c7b55eb4-d5a7-4197-840a-c93be0983287",
            name: "AC_CURRENT_C",
            apcode: "DRIVE_AC_CURRENT_C",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b4d687fb-fa56-4033-acfc-a9912a96d1a4",
            name: "AC_CURRENT_C_ANGLE_IEC",
            apcode: "DRIVE_AC_CURRENT_C_ANGLE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a87b3b9d-f18b-4d16-a05a-8f42e46aa02c",
            name: "AC_CURRENT_C_GRID",
            apcode: "DRIVE_AC_CURRENT_C_GRID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8555e7cb-0049-463a-a2dc-1d5b95d5e714",
            name: "AC_CURRENT_C_IEC",
            apcode: "DRIVE_AC_CURRENT_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "28fecf7b-a042-4567-8f76-b975b891d20d",
            name: "AC_CURRENT_C_NOM",
            apcode: "DRIVE_AC_CURRENT_C_NOM",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3bed8df7-f75b-4573-aba9-40883470da15",
            name: "AC_CURRENT_C_NOM_IEC",
            apcode: "DRIVE_AC_CURRENT_C_NOM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "153f357d-c67f-4b77-92c0-6482d397e19d",
            name: "AC_CURRENT_C_PRIMARY_IEC",
            apcode: "DRIVE_AC_CURRENT_C_PRIMARY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9be95367-2102-4540-8912-f2fc6ea83dc8",
            name: "AC_CURRENT_C_SECONDARY_IEC",
            apcode: "DRIVE_AC_CURRENT_C_SECONDARY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "949893e9-b257-4b09-9de4-c7c62009f25a",
            name: "AC_CURRENT_IEC",
            apcode: "DRIVE_AC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0a52e824-5019-4a90-8cbd-f5395df74dcf",
            name: "AC_CURRENT_N_ANGLE_IEC",
            apcode: "DRIVE_AC_CURRENT_N_ANGLE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e898bc65-2155-47d0-b8c2-12b7c2781e81",
            name: "AC_CURRENT_N_IEC",
            apcode: "DRIVE_AC_CURRENT_N_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "261b657c-6e78-4985-8c5d-7be3a5493979",
            name: "AC_CURRENT_NOM",
            apcode: "DRIVE_AC_CURRENT_NOM",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5ee8abd0-2ed1-49d7-ac50-89fabc6edcce",
            name: "AC_CURRENT_NOM_IEC",
            apcode: "DRIVE_AC_CURRENT_NOM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3c436916-005e-48a1-8cf4-a73625a35a83",
            name: "AC_CURRENT_N_PRIMARY_IEC",
            apcode: "DRIVE_AC_CURRENT_N_PRIMARY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "452b6dfe-bef7-4342-b470-53a66d4a00a5",
            name: "AC_CURRENT_N_SECONDARY_IEC",
            apcode: "DRIVE_AC_CURRENT_N_SECONDARY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "310a3275-ed42-4709-825f-8dc7b7612f47",
            name: "AC_CURTAILMENT_LIMIT",
            apcode: "DRIVE_AC_CURTAILMENT_LIMIT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "029fffbf-1824-4691-9401-78f6a579ef9e",
            name: "A_COEFF",
            apcode: "DRIVE_A_COEFF",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c82b74a8-3599-4b3d-a9d1-019c20c22641",
            name: "AC_POWER",
            apcode: "DRIVE_AC_POWER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "89f176f7-277d-47a2-b41d-e8bd243c5104",
            name: "AC_POWER_ADJUSTMENT_IEC",
            apcode: "DRIVE_AC_POWER_ADJUSTMENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d3f731dd-315a-40fa-9064-74ced30f83e4",
            name: "AC_POWER_ADJUSTMENT_MAX_IEC",
            apcode: "DRIVE_AC_POWER_ADJUSTMENT_MAX_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "030d6aa5-f661-4f22-ac9a-0c0b6e4d2b83",
            name: "AC_POWER_ADJUSTMENT_PERCENTAGE_IEC",
            apcode: "DRIVE_AC_POWER_ADJUSTMENT_PERCENTAGE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5b21e7ff-f49f-4d09-b27f-b2eac4849e82",
            name: "AC_POWER_ADJUSTMENT_RATIO_IEC",
            apcode: "DRIVE_AC_POWER_ADJUSTMENT_RATIO_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9823b9e6-0d32-4833-8079-14089cd8ffa1",
            name: "AC_POWER_A_IEC",
            apcode: "DRIVE_AC_POWER_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a2bea184-038f-4618-b1b9-f5f0136269ba",
            name: "AC_POWER_ALARM_IEC",
            apcode: "DRIVE_AC_POWER_ALARM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1538aafe-b5c4-48c8-a498-0452ac10978d",
            name: "AC_POWER_APPARENT_RATED",
            apcode: "DRIVE_AC_POWER_APPARENT_RATED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6ce6cd6d-5701-412a-8f26-24a3fd829c47",
            name: "AC_POWER_B_IEC",
            apcode: "DRIVE_AC_POWER_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1784b6e2-320e-41ab-8d36-15919e9062eb",
            name: "AC_POWER_CHARGE_MAX",
            apcode: "DRIVE_AC_POWER_CHARGE_MAX",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "322ea69b-20ab-49fa-8f43-b5c098eed88b",
            name: "AC_POWER_CHARGE_RATED",
            apcode: "DRIVE_AC_POWER_CHARGE_RATED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fbef2ba0-e78a-44cb-82d2-4042c092f503",
            name: "AC_POWER_C_IEC",
            apcode: "DRIVE_AC_POWER_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d40f1eec-6d98-46d7-be3e-1417176274cc",
            name: "AC_POWER_CTRL_MODE_IEC",
            apcode: "DRIVE_AC_POWER_CTRL_MODE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9f9b3086-cdd7-42f6-bca1-b9f30677f157",
            name: "AC_POWER_DAY_IEC",
            apcode: "DRIVE_AC_POWER_DAY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4e90a790-62ff-42e0-b0d9-eafb93aed739",
            name: "AC_POWER_DEVIATION",
            apcode: "DRIVE_AC_POWER_DEVIATION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8d8a48f3-15c4-4432-84e2-a9938a6cf257",
            name: "AC_POWER_DISCHARGE_MAX",
            apcode: "DRIVE_AC_POWER_DISCHARGE_MAX",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "366e306b-3a74-4fff-a276-d365c8a70074",
            name: "AC_POWER_DISCHARGE_RATED",
            apcode: "DRIVE_AC_POWER_DISCHARGE_RATED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8f64bff5-1527-4f55-a74d-8b6d9fc95bbc",
            name: "AC_POWER_GRADIENT_IEC",
            apcode: "DRIVE_AC_POWER_GRADIENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4ed2850f-2170-4b27-8bf4-f198e89bcb55",
            name: "AC_POWER_HOUR_IEC",
            apcode: "DRIVE_AC_POWER_HOUR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bcf3527f-b1dc-4ee3-a027-780063763d5a",
            name: "AC_POWER_IEC",
            apcode: "DRIVE_AC_POWER_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4177871b-74d1-4a94-970d-085068a652c2",
            name: "AC_POWER_LIMIT_IEC",
            apcode: "DRIVE_AC_POWER_LIMIT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2a75630d-1c5b-4cb4-8e37-f90d2a14c785",
            name: "AC_POWER_LO",
            apcode: "DRIVE_AC_POWER_LO",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ce4d0075-d069-44ff-a038-1fea098c8a4d",
            name: "AC_POWER_MAX_DAY_IEC",
            apcode: "DRIVE_AC_POWER_MAX_DAY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "be3b9a07-ca62-4250-ad97-d389cb6a4d59",
            name: "AC_POWER_MONTH_IEC",
            apcode: "DRIVE_AC_POWER_MONTH_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6690ab6d-61b5-45f0-8b47-e026effe3dab",
            name: "AC_POWER_SCHEDULE_TARGET_IEC",
            apcode: "DRIVE_AC_POWER_SCHEDULE_TARGET_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e9325598-1807-4faf-8579-2e74439c4088",
            name: "AC_POWER_TOTAL_IEC",
            apcode: "DRIVE_AC_POWER_TOTAL_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c920b52d-d6ea-4016-92e4-9c985686cd6c",
            name: "AC_POWER_YEAR_IEC",
            apcode: "DRIVE_AC_POWER_YEAR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "805534d0-fe44-4264-98ea-5a8e1fdb9a61",
            name: "AC_VOLTAGE_A",
            apcode: "DRIVE_AC_VOLTAGE_A",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cd04f59f-52d6-4328-a3c8-2e4b855df5fd",
            name: "AC_VOLTAGE_AB_IEC",
            apcode: "DRIVE_AC_VOLTAGE_AB_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "709822fc-0617-4c50-831c-58f01421afcb",
            name: "AC_VOLTAGE_AN_IEC",
            apcode: "DRIVE_AC_VOLTAGE_AN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "be8412ef-1ecf-40ac-af5e-9405b0c7e7f8",
            name: "AC_VOLTAGE_B",
            apcode: "DRIVE_AC_VOLTAGE_B",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "be5fa62b-6c5e-4710-848d-708f19ee9cb8",
            name: "AC_VOLTAGE_BC_IEC",
            apcode: "DRIVE_AC_VOLTAGE_BC_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "81b3661c-2366-40d2-a56d-4e83585e51cd",
            name: "AC_VOLTAGE_BN_IEC",
            apcode: "DRIVE_AC_VOLTAGE_BN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "00edc6fa-4c53-485e-b57c-89dcc4f5b683",
            name: "AC_VOLTAGE_C",
            apcode: "DRIVE_AC_VOLTAGE_C",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3d81f97a-5608-4266-85cf-f12364ee5645",
            name: "AC_VOLTAGE_CA_IEC",
            apcode: "DRIVE_AC_VOLTAGE_CA_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8f0984c3-50d9-40a0-95a7-7aaf9e5edf0f",
            name: "AC_VOLTAGE_CN_IEC",
            apcode: "DRIVE_AC_VOLTAGE_CN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0856ff96-6f5d-49cc-9f88-54b99f192fcc",
            name: "AC_VOLTAGE_IEC",
            apcode: "DRIVE_AC_VOLTAGE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d5eabbc2-f849-4a37-ab87-fdc67abd9e79",
            name: "AC_VOLTAGE_N_IEC",
            apcode: "DRIVE_AC_VOLTAGE_N_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bd9ff5e7-bc1f-4c2f-b106-2fa8f441660f",
            name: "AC_VOLTAGE_SETPOINT_AO_IEC",
            apcode: "DRIVE_AC_VOLTAGE_SETPOINT_AO_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c2a46bf7-9a92-425d-802c-8198ecf7460e",
            name: "AC_VOLTAGE_SETPOINT_IEC",
            apcode: "DRIVE_AC_VOLTAGE_SETPOINT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3a8e1a06-e450-4f42-a5b9-7b7b196ca870",
            name: "API_COLLECTION_INTERVAL",
            apcode: "DRIVE_API_COLLECTION_INTERVAL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "918b767a-7544-4cdb-865c-a9cd4b03fdf7",
            name: "API_ID",
            apcode: "DRIVE_API_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "64afc7f8-fa6a-43d3-805f-095b8346e452",
            name: "API_SOURCE",
            apcode: "DRIVE_API_SOURCE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8fb35296-a2d7-4cb3-828a-e155509fc96a",
            name: "API_DATA_ALREADY_AGGREGATED",
            apcode: "DRIVE_API_DATA_ALREADY_AGGREGATED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a4c17c37-ddc1-4e4c-ba10-8b234d0a54b1",
            name: "ASDU_NUMBER",
            apcode: "DRIVE_ASDU_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cf820517-2fe3-428c-9777-cab7a6fa9131",
            name: "ASDU_NUMBER_END",
            apcode: "DRIVE_ASDU_NUMBER_END",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e8b39baa-dc25-4abc-9b96-5f7fad11569a",
            name: "ASSET_CLASS",
            apcode: "DRIVE_ASSET_CLASS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6b80c2df-dbe1-4d40-be06-e483d9146588",
            name: "ASSET_COMM_ADDRESS",
            apcode: "DRIVE_ASSET_COMM_ADDRESS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "100a8c29-b311-4c2f-8a07-90dc22ef2439",
            name: "ASSET_MANUFACTURER",
            apcode: "DRIVE_ASSET_MANUFACTURER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "58fee252-eff0-4508-a316-2928b67652bb",
            name: "ASSET_MANUFACTURER_BLADE",
            apcode: "DRIVE_ASSET_MANUFACTURER_BLADE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "50d690eb-e110-48f3-9bb6-c1467787e920",
            name: "ASSET_MODEL_NUMBER",
            apcode: "DRIVE_ASSET_MODEL_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a2069b9f-ece1-4a7c-a427-63503d3cbfd2",
            name: "ASSET_NAME",
            apcode: "DRIVE_ASSET_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "907d564e-267f-4e5b-a91a-5ea626b7ddef",
            name: "ASSET_OS",
            apcode: "DRIVE_ASSET_OS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "75e26f8c-b55c-4b00-a973-e08dc0d60dc6",
            name: "ASSET_POINT_SOURCE",
            apcode: "DRIVE_ASSET_POINT_SOURCE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bdcae899-1c9e-49ee-b8d5-1acf93fde4d4",
            name: "ASSET_SERIAL_NUMBER",
            apcode: "DRIVE_ASSET_SERIAL_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4428bb32-2de9-491b-bb77-38fcdcddd93e",
            name: "ASSET_SUBCLASS",
            apcode: "DRIVE_ASSET_SUBCLASS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "07168c06-66b2-4c5f-8a8a-77580fd7f57f",
            name: "ASSET_TEMPLATE",
            apcode: "DRIVE_ASSET_TEMPLATE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ca3923c3-5543-4d29-aa0e-cf208e9bf9fe",
            name: "ASSET_TYPE",
            apcode: "DRIVE_ASSET_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5b7be788-f81c-4983-b779-57184700f229",
            name: "ASSET_TYPE_IEC",
            apcode: "DRIVE_ASSET_TYPE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3dfbbd27-7089-4d4c-8d99-25258a68df18",
            name: "ASSET_VOLTAGE_IEC",
            apcode: "DRIVE_ASSET_VOLTAGE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "98fd5c46-2c79-46d3-bfb0-852716892910",
            name: "B1",
            apcode: "DRIVE_B1",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "84469d04-9838-457e-a502-a0aa079b88ca",
            name: "B2",
            apcode: "DRIVE_B2",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dd39b147-8645-414a-aef1-f0a0d418f999",
            name: "B3",
            apcode: "DRIVE_B3",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "64a8f906-8db5-4eb3-8838-6a8f4a04cbc8",
            name: "BACKTRACK_ENABLED",
            apcode: "DRIVE_BACKTRACK_ENABLED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "749d625a-314c-4a48-bb2f-75eb3f19503f",
            name: "BACKUP_MET",
            apcode: "DRIVE_BACKUP_MET",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8faacd0a-31ff-4681-903f-da63f02df168",
            name: "BACKUP_METER",
            apcode: "DRIVE_BACKUP_METER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7e0c4a3c-6b30-4ff3-a519-5e7e54210039",
            name: "BACKUP_PRIMARY",
            apcode: "DRIVE_BACKUP_PRIMARY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f891daf4-b1f5-40ef-9177-edd30544a4ad",
            name: "BACKUP_SECONDARY",
            apcode: "DRIVE_BACKUP_SECONDARY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ed6e0b07-1054-494e-9b85-c8c11c3015b4",
            name: "BAROMETRIC_PRES_IEC",
            apcode: "DRIVE_BAROMETRIC_PRES_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "94092556-d146-4587-9c29-f2182fcef3ae",
            name: "BATCH_NUMBER_IEC",
            apcode: "DRIVE_BATCH_NUMBER_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9f3c37ff-a7ed-4d46-bef7-ced532b78c3d",
            name: "BATT_AC_CAPACITY",
            apcode: "DRIVE_BATT_AC_CAPACITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "978492af-af46-4539-b497-ba47dc913930",
            name: "Battery",
            apcode: "DRIVE_Battery",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "57bb5199-f7fc-4b4e-aef2-85c8896dea1a",
            name: "B_COEFF",
            apcode: "DRIVE_B_COEFF",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e36e6399-a95a-43cf-8dee-bd6206250d3e",
            name: "BestRefBackupDevice",
            apcode: "DRIVE_BEST_REF_BACKUP_DEVICE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "332282d7-1975-4cdc-b69e-dfd86b6f834a",
            name: "BIFACIAL_ARRAY",
            apcode: "DRIVE_BIFACIAL_ARRAY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c8902dc3-93fa-48f1-aa08-cc37ccfe7209",
            name: "BLADE_LENGTH",
            apcode: "DRIVE_BLADE_LENGTH",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f9176296-bfe2-41e5-916c-18fa2d7b7462",
            name: "BOM_ID",
            apcode: "DRIVE_BOM_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e5b0a4cf-c1f0-4ee0-8b4d-d59aba467a57",
            name: "CALC_REFERENCE",
            apcode: "DRIVE_CALC_REFERENCE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a3f705ef-3bee-47c8-8a29-58d9aa7c3d3c",
            name: "CALIBRATION_DAY_IEC",
            apcode: "DRIVE_CALIBRATION_DAY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d8325bb1-c14e-4f20-aacb-918a91ed8f31",
            name: "CALIBRATION_MONTH_IEC",
            apcode: "DRIVE_CALIBRATION_MONTH_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d08753f4-1c38-4c86-998f-3372fd7f9fd8",
            name: "CALIBRATION_YEAR_IEC",
            apcode: "DRIVE_CALIBRATION_YEAR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2565fbdd-b5f0-4a4d-bae1-8e717489f1ea",
            name: "CB1_ACTUAL_TIME",
            apcode: "DRIVE_CB1_ACTUAL_TIME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3274cb65-4be5-4b4a-b29d-972ed5c9282a",
            name: "CB1_NEUTRAL_VOLTAGE",
            apcode: "DRIVE_CB1_NEUTRAL_VOLTAGE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "520dca1c-fbcf-47f2-9dd4-0c85f1bedaf1",
            name: "CB1_WAIT_TO_CLOSE",
            apcode: "DRIVE_CB1_WAIT_TO_CLOSE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c1e56ef6-f5b9-41de-8a9c-055fc47e7467",
            name: "CB2_ACTUAL_TIME",
            apcode: "DRIVE_CB2_ACTUAL_TIME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "56e51a41-190d-44b5-a01e-c849ef4f0178",
            name: "CB2_NEUTRAL_VOLTAGE",
            apcode: "DRIVE_CB2_NEUTRAL_VOLTAGE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "307621bc-99f8-4656-b0fd-7e6f4ddb7e7c",
            name: "CB2_WAIT_TO_CLOSE",
            apcode: "DRIVE_CB2_WAIT_TO_CLOSE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ba3600ad-00a1-4e87-9f4a-8816dec7b0d1",
            name: "CHARTS_URL",
            apcode: "DRIVE_CHARTS_URL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "aa8523cd-e839-4a91-bea0-3edc2c06388c",
            name: "CIRCUIT",
            apcode: "DRIVE_CIRCUIT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e79eb0d7-bea1-4a09-bd73-07f7bed1c10a",
            name: "CIRCUIT_ID",
            apcode: "DRIVE_CIRCUIT_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cb3d99d1-65b8-41db-9346-f7f86cfa6f18",
            name: "CITY_IEC",
            apcode: "DRIVE_CITY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "818a2413-e7a1-4139-98ff-339d0a4c75c8",
            name: "CMB01.DC_CURRENT_IEC",
            apcode: "DRIVE_CMB01.DC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8e29bd0a-8b90-4f26-8c7b-b8a96087520b",
            name: "CMB02.DC_CURRENT_IEC",
            apcode: "DRIVE_CMB02.DC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "92762da7-4e44-4d29-bbcc-f417dcfcaee4",
            name: "CMB03.DC_CURRENT_IEC",
            apcode: "DRIVE_CMB03.DC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dee07ed5-1603-4379-a7d6-76da107f1aa9",
            name: "CMB04.DC_CURRENT_IEC",
            apcode: "DRIVE_CMB04.DC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "da5d0888-7be0-4d60-89ad-026a92426618",
            name: "CMB05.DC_CURRENT_IEC",
            apcode: "DRIVE_CMB05.DC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fd0a6394-760f-466b-b738-8680d5d8c6bc",
            name: "CMB06.DC_CURRENT_IEC",
            apcode: "DRIVE_CMB06.DC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c6896dc4-696e-4838-9a94-472d421c41f0",
            name: "CMB07.DC_CURRENT_IEC",
            apcode: "DRIVE_CMB07.DC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0b366c7e-ddb0-4f70-bfa8-53e36280e465",
            name: "CMB08.DC_CURRENT_IEC",
            apcode: "DRIVE_CMB08.DC_CURRENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7ec83eaa-32a6-4a0a-9331-24658f78f5f2",
            name: "CMB_ID",
            apcode: "DRIVE_CMB_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1065a033-958f-4997-9d44-cd543c46f1ce",
            name: "CMB_MOD_ADD",
            apcode: "DRIVE_CMB_MOD_ADD",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3b8850ef-e579-4551-be61-c5a45ed2004f",
            name: "CO2_REDUCTION_IEC",
            apcode: "DRIVE_CO2_REDUCTION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c917509b-37a8-4d45-ac40-1ab39c787c54",
            name: "COD",
            apcode: "DRIVE_DATE_COMMERCIAL_OPERATION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0160d741-f76c-4214-ab9f-10578fb55a3e",
            name: "COLUMN_NAME",
            apcode: "DRIVE_COLUMN_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6f499a11-bc09-476d-86d8-8cf33f29e8c8",
            name: "COLUMN_NAME_POA",
            apcode: "DRIVE_COLUMN_NAME_POA",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "360187d9-8040-4114-9eb8-341fb4815356",
            name: "COLUMN_NAME_T_MOD",
            apcode: "DRIVE_COLUMN_NAME_T_MOD",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "811fbc3b-dee4-48f6-9688-a3f84dbb7485",
            name: "COMBINER",
            apcode: "DRIVE_COMBINER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "21903f18-e70c-43cb-829f-68c89814d210",
            name: "COMMERCIAL_ASSET_MANAGER",
            apcode: "DRIVE_COMMERCIAL_ASSET_MANAGER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a0392ff2-7356-432c-bffa-d1e807d374b4",
            name: "COMMERCIAL_BILLABLE_ENERGY_TYPE",
            apcode: "DRIVE_COMMERCIAL_BILLABLE_ENERGY_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6d7384c9-00ef-4840-8924-6cef93254487",
            name: "COMMERCIAL_BUSINESS_UNIT",
            apcode: "DRIVE_COMMERCIAL_BUSINESS_UNIT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a49bc508-40a1-49dd-8388-7dbdb049bf83",
            name: "COMMERCIAL_CUSTOMER_NAME",
            apcode: "DRIVE_COMMERCIAL_CUSTOMER_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9befdc12-c5f9-40a3-b16d-fecf0fb76b71",
            name: "COMMERCIAL_ENTITY_ACCOUNT",
            apcode: "DRIVE_COMMERCIAL_ENTITY_ACCOUNT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2f4540d0-f9b6-4a9e-b8d2-887071e8e350",
            name: "COMMERCIAL_ENTITY_OFFTAKER",
            apcode: "DRIVE_COMMERCIAL_ENTITY_OFFTAKER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5828869e-5f59-42e4-bb4a-97853515e8bb",
            name: "COMMERCIAL_OPERATOR",
            apcode: "DRIVE_COMMERCIAL_OPERATOR",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "38d0c8d1-90aa-40ba-ac08-5273edc92b07",
            name: "COMMERCIAL_SERVICE_REGION",
            apcode: "DRIVE_COMMERCIAL_SERVICE_REGION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "aa68f8dc-c17e-4026-89a1-0e66b7435c84",
            name: "CURATION_PRIORITY",
            apcode: "DRIVE_CURATION_PRIORITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "152a5063-15e3-47e5-8a4e-30e1559626e5",
            name: "CURTAILMENT_SETPOINT_AO_IEC",
            apcode: "DRIVE_CURTAILMENT_SETPOINT_AO_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7adc7461-0ffb-446c-a461-9f721adbf136",
            name: "CURTAILMENT_SETPOINT_IEC",
            apcode: "DRIVE_CURTAILMENT_SETPOINT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bac442ac-99ee-4ff5-9d67-0069bd50511b",
            name: "CUSTOMER_DEVICE_ID",
            apcode: "DRIVE_CUSTOMER_DEVICE_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "889c1d8b-d87c-4e50-bf90-c750888c5508",
            name: "CUSTOMER_NAME",
            apcode: "DRIVE_CUSTOMER_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e3e8a717-19f2-440e-b22b-6f981a98a555",
            name: "CUSTOMER_PLANT_ID",
            apcode: "DRIVE_CUSTOMER_PLANT_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ebba687c-dc3d-4fc9-b1ea-8a3c9a1ec348",
            name: "CUSTOMER_PLANT_NAME",
            apcode: "DRIVE_CUSTOMER_PLANT_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2c85649a-12db-4283-b2a6-955fd2734d49",
            name: "DATA_API_END_TIME_OFFSET",
            apcode: "DRIVE_DATA_API_END_TIME_OFFSET",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d9334deb-3a6f-45e5-b4ea-6f4ec52eb327",
            name: "DATA_API_START_TIME_OFFSET",
            apcode: "DRIVE_DATA_API_START_TIME_OFFSET",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "aabae60f-eeaa-4154-adbe-1a9ca77c4eb1",
            name: "DATA_DAILY_REPROCESS_PERIOD",
            apcode: "DRIVE_DATA_DAILY_REPROCESS_PERIOD",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a83ffffb-62c0-440a-8be3-4ebff1011e0f",
            name: "DATA_DEVICE_IS_MONITORED",
            apcode: "DRIVE_DATA_DEVICE_IS_MONITORED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "00624ae6-7990-4caa-96bf-90c2ed91d9d0",
            name: "DATA_DEVICE_IS_VIRTUAL",
            apcode: "DRIVE_DATA_DEVICE_IS_VIRTUAL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8653e81f-a5f6-457b-97d7-185269637d09",
            name: "DATA_MIN_STEP_KWH",
            apcode: "DRIVE_DATA_MIN_STEP_KWH",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "73ddb3f8-1d61-401b-b871-bd088b0a4afb",
            name: "DATAMODEL_VERSION_IEC",
            apcode: "DRIVE_DATAMODEL_VERSION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e06215bd-e2c5-422a-8839-6330fec397cb",
            name: "DATA_ORIGINATOR",
            apcode: "DRIVE_DATA_ORIGINATOR",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "26517fb7-3a3e-422d-8091-7ec413c0f99b",
            name: "DATA_REPROCESS_PERIOD",
            apcode: "DRIVE_DATA_REPROCESS_PERIOD",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7fb35fb0-1a19-48c4-a1fb-86ca05a6709e",
            name: "DATA_RESOLUTION",
            apcode: "DRIVE_DATA_RESOLUTION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "170ca5d0-552b-4c2d-98cc-d7b8035c6760",
            name: "DATE_COMMISSION",
            apcode: "DRIVE_DATE_COMMISSION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a6ea1378-fc38-4f5d-856b-4fe12138bda6",
            name: "DATE_DATACOLLECTION_ACTIVE",
            apcode: "DRIVE_DATE_DATACOLLECTION_ACTIVE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c6be8a62-c6d8-45a8-8111-d9a68223ac9d",
            name: "DATE_DATACOLLECTION_END",
            apcode: "DRIVE_DATE_DATACOLLECTION_END",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "045d66e5-2e50-4926-8a9d-8adcc78bc52b",
            name: "DATE_END_OF_LIFE",
            apcode: "DRIVE_DATE_END_OF_LIFE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4dee7abe-5e1e-4bd4-b863-9be02384776c",
            name: "DATE_IMPLEMENTATION_START",
            apcode: "DRIVE_DATE_IMPLEMENTATION_START",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6fea7aa1-d7ad-41f2-9f20-b667d2bd23f2",
            name: "DATE_LAST_ACQUISITION",
            apcode: "DRIVE_DATE_LAST_ACQUISITION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "eac4f430-ca40-4841-8f32-6994f364b671",
            name: "DATE_OUT_OF_SERVICE",
            apcode: "DRIVE_DATE_OUT_OF_SERVICE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5d3a8f7d-f7ca-4639-afb2-aef48c5a5e64",
            name: "DATE_RETURN_TO_SERVICE",
            apcode: "DRIVE_DATE_RETURN_TO_SERVICE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6417684f-908c-479b-900f-5c0353b19f8e",
            name: "DATE_SAT_APPROVED",
            apcode: "DRIVE_DATE_SAT_APPROVED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d2f54553-647d-4cf5-9c66-8ec3ce2ca637",
            name: "DATE_SAT_SUBMISSION",
            apcode: "DRIVE_DATE_SAT_SUBMISSION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4046d75d-71b4-43f0-a7bf-9ae6b2617dd3",
            name: "DATE_TIME_IEC",
            apcode: "DRIVE_DATE_TIME_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2ddcc169-efe4-4ff5-a3be-c434b1e48625",
            name: "DATE_WARRANTY_END",
            apcode: "DRIVE_DATE_WARRANTY_END",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d69595cd-2e54-475a-a403-92c6d65340a6",
            name: "DATE_WARRANTY_START",
            apcode: "DRIVE_DATE_WARRANTY_START",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dd0feeb3-e7ac-4ed0-b898-d661f7295750",
            name: "DC_Capacity",
            apcode: "DRIVE_DC_CAPACITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "07e2a039-83ce-4d72-82e2-d45f175ec633",
            name: "DC_CLIPPING_LIMIT",
            apcode: "DRIVE_DC_CLIPPING_LIMIT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5c23b201-a245-4815-b97b-251fdf4c94bd",
            name: "DC_CURRENT_1_IEC",
            apcode: "DRIVE_DC_CURRENT_1_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "004d06c7-6d19-4cce-95ca-9f2f9df4617d",
            name: "DC_CURRENT_2_IEC",
            apcode: "DRIVE_DC_CURRENT_2_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c8e9d4b8-8c6b-40ea-ace3-d03086efeeba",
            name: "DC_CURRENT_3_IEC",
            apcode: "DRIVE_DC_CURRENT_3_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "876064ea-2fe8-4285-97f4-2f382ae343db",
            name: "DC_CURRENT_4_IEC",
            apcode: "DRIVE_DC_CURRENT_4_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1e3692e9-1b31-4c45-b6ff-1f73220877f8",
            name: "DC_CURRENT_5_IEC",
            apcode: "DRIVE_DC_CURRENT_5_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "330d3756-3dd8-42bd-883f-d710530b52c7",
            name: "DC_CURRENT_6_IEC",
            apcode: "DRIVE_DC_CURRENT_6_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d3a89622-7423-42b2-8b93-7c49d19afad4",
            name: "DC_CURRENT_7_IEC",
            apcode: "DRIVE_DC_CURRENT_7_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c06d7f0a-0ea9-4be4-8443-ab3b2b6e95da",
            name: "DC_CURRENT_8_IEC",
            apcode: "DRIVE_DC_CURRENT_8_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "709142ab-0e6f-487d-8b34-160671068bf9",
            name: "DC_POWER_IEC",
            apcode: "DRIVE_DC_POWER_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b16e4fa3-1e37-4522-a773-702f8150e372",
            name: "DC_POWER_MPPT_1_IEC",
            apcode: "DRIVE_DC_POWER_MPPT_1_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "44f4965a-a6cf-42ba-b1f2-97744bd77727",
            name: "DC_POWER_MPPT_2_IEC",
            apcode: "DRIVE_DC_POWER_MPPT_2_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "039b0477-3a47-4e28-bdd1-fbedefe0ede7",
            name: "DC_POWER_MPPT_3_IEC",
            apcode: "DRIVE_DC_POWER_MPPT_3_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f8bcab68-2642-400b-9fdb-c97ccb1be8bc",
            name: "DC_POWER_MPPT_4_IEC",
            apcode: "DRIVE_DC_POWER_MPPT_4_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d93cdeb3-a0c3-44d3-badf-eec47e585b68",
            name: "DC_VOLTAGE_1_IEC",
            apcode: "DRIVE_DC_VOLTAGE_1_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8552ce6c-5708-480c-9051-86db1c6703eb",
            name: "DC_VOLTAGE_2_IEC",
            apcode: "DRIVE_DC_VOLTAGE_2_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9271f414-f457-41fb-8119-fbfd0d8e428a",
            name: "DC_VOLTAGE_3_IEC",
            apcode: "DRIVE_DC_VOLTAGE_3_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8529686c-b7ec-4c2a-8dcf-535a9f15766c",
            name: "DC_VOLTAGE_4_IEC",
            apcode: "DRIVE_DC_VOLTAGE_4_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "90cdc5e9-7ee7-4c69-aff8-f3096ffedc3a",
            name: "DC_VOLTAGE_5_IEC",
            apcode: "DRIVE_DC_VOLTAGE_5_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4aaed464-dade-4b4a-a56c-3e3dd6ad2a64",
            name: "DC_VOLTAGE_6_IEC",
            apcode: "DRIVE_DC_VOLTAGE_6_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c6258176-7fcc-40d1-be7e-0b4e3010f95f",
            name: "DC_VOLTAGE_7_IEC",
            apcode: "DRIVE_DC_VOLTAGE_7_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2f3a0f1d-85ce-4c73-bd90-63ac439ea722",
            name: "DC_VOLTAGE_8_IEC",
            apcode: "DRIVE_DC_VOLTAGE_8_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "253b75a1-4be8-47d4-959c-8d056f35c274",
            name: "DC_VOLTAGE_WINDOW_H",
            apcode: "DRIVE_DC_VOLTAGE_WINDOW_H",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f3fde683-a99a-4548-a345-23d80c5e99bd",
            name: "DC_VOLTAGE_WINDOW_L",
            apcode: "DRIVE_DC_VOLTAGE_WINDOW_L",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c9a529fc-f38e-4d72-b441-764115561b81",
            name: "DELTA_TCND",
            apcode: "DRIVE_DELTA_TCND",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a68e1379-27f5-4712-8bc8-d46f86e3aa0b",
            name: "DEV",
            apcode: "DRIVE_DEV",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cd741701-c543-4829-a387-17d1e8e6be3d",
            name: "Device",
            apcode: "DRIVE_Device",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3616128b-9671-4d81-949c-a9ae5e140889",
            name: "DEW_POINT_IEC",
            apcode: "DRIVE_DEW_POINT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7c43c91b-0e70-4e44-adde-00a1d275a6cd",
            name: "DST_OFFSET_IEC",
            apcode: "DRIVE_DST_OFFSET_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1e2389ff-e8ce-4427-ae13-1c8f5c7b751f",
            name: "EDGE_SERVICES",
            apcode: "DRIVE_EDGE_SERVICES",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b3cb1403-4568-4f87-bbe1-a6bea6b77547",
            name: "E_FACTOR_COEFFICIENT_A",
            apcode: "DRIVE_E_FACTOR_COEFFICIENT_A",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d07a7fa7-d1fa-4ade-8aed-72c42cf1381e",
            name: "E_FACTOR_COEFFICIENT_B",
            apcode: "DRIVE_E_FACTOR_COEFFICIENT_B",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ad2450b5-aa0a-4b6a-a418-59ea4d1cb7cf",
            name: "EFFICIENCY_IEC",
            apcode: "DRIVE_EFFICIENCY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9f232403-10fa-4520-b18c-ab1969111bbd",
            name: "EFFICIENCY_INVERTER_IEC",
            apcode: "DRIVE_EFFICIENCY_INVERTER_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d8a882dd-303e-4ca1-abe3-46e2f82bc3c2",
            name: "ElementPath",
            apcode: "DRIVE_ElementPath",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d115e84-20eb-4f4a-bd03-0769b7e343ea",
            name: "ElementPathExtension",
            apcode: "DRIVE_ElementPathExtension",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f209ab32-851b-482a-969a-70d1de781865",
            name: "ELEMENTPATH_MODIFIED",
            apcode: "DRIVE_ELEMENTPATH_MODIFIED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "80dc4154-20b1-4196-a5a4-c740a56323b4",
            name: "ElementPathTurbine",
            apcode: "DRIVE_ElementPathTurbine",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7fec9d78-a486-40d4-8bdc-6e05879890e5",
            name: "ENERGY_CAPACITY",
            apcode: "DRIVE_ENERGY_CAPACITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1c8a409b-2a5b-499c-845a-a8533366f4a0",
            name: "ENERGY_DAY_IEC",
            apcode: "DRIVE_ENERGY_DAY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f8d80aa5-ed1c-4cab-befd-88b6240611cf",
            name: "ENERGY_DELIVERED_A_IEC",
            apcode: "DRIVE_ENERGY_DELIVERED_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e1f2fb0c-1454-467f-81b8-271fe06edb5e",
            name: "ENERGY_DELIVERED_B_IEC",
            apcode: "DRIVE_ENERGY_DELIVERED_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a0dee869-4df5-44d3-9925-49478a20e24c",
            name: "ENERGY_DELIVERED_C_IEC",
            apcode: "DRIVE_ENERGY_DELIVERED_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "67c779f1-4cfe-4c85-9a78-a33a7d4a6633",
            name: "ENERGY_DELIVERED_IEC",
            apcode: "DRIVE_ENERGY_DELIVERED_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2a0e9823-d336-46b8-b7ea-db652cd5b58e",
            name: "ENERGY_NET_A_IEC",
            apcode: "DRIVE_ENERGY_NET_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "585a035e-459a-4505-b9e9-25e53fea9e7e",
            name: "ENERGY_NET_B_IEC",
            apcode: "DRIVE_ENERGY_NET_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8c0507e4-758b-46c8-a88b-a2623194ce90",
            name: "ENERGY_NET_C_IEC",
            apcode: "DRIVE_ENERGY_NET_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5aac153e-fc8a-4536-92ed-ad173fd5776e",
            name: "ENERGY_NET_IEC",
            apcode: "DRIVE_ENERGY_NET_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ef2027ad-3744-4d8d-9a37-f54701126330",
            name: "ENERGY_RATED",
            apcode: "DRIVE_ENERGY_RATED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "970e9a93-83ca-49ca-8db0-d5066caacd11",
            name: "ENERGY_RECEIVED_A_IEC",
            apcode: "DRIVE_ENERGY_RECEIVED_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0ab10241-a984-422a-9de2-5971076b28a2",
            name: "ENERGY_RECEIVED_B_IEC",
            apcode: "DRIVE_ENERGY_RECEIVED_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "738b827c-037b-44d2-94e3-71aba2398f9c",
            name: "ENERGY_RECEIVED_C_IEC",
            apcode: "DRIVE_ENERGY_RECEIVED_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f0105669-29dd-4644-8c1f-f43a34330a07",
            name: "ENERGY_RECEIVED_IEC",
            apcode: "DRIVE_ENERGY_RECEIVED_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e06bd149-4a51-46b3-a37b-fc4a0aacf3fe",
            name: "ENERGY_SITE_ID",
            apcode: "DRIVE_ENERGY_SITE_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c7a46e65-2132-40e3-84cb-b5524a56a170",
            name: "ENERGY_SOURCE",
            apcode: "DRIVE_ENERGY_SOURCE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f41f3473-34be-46a3-ad27-fa7be4cbc63f",
            name: "ENERGY_TOTAL_IEC",
            apcode: "DRIVE_ENERGY_TOTAL_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "85951c95-3f3d-4cc7-8600-2c96fc5d98cd",
            name: "ENTITY_ACCOUNT",
            apcode: "DRIVE_ENTITY_ACCOUNT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5236c847-ae29-4cdb-9874-b6896fa00faa",
            name: "ESN_IEC",
            apcode: "DRIVE_ESN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "546f136d-38bc-400a-9e4b-61ba3e64b420",
            name: "EVENTS_URL",
            apcode: "DRIVE_EVENTS_URL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cdb204bd-a053-44fc-bdd3-5107d31f464a",
            name: "EXCLUDE_FROM_AO_SYNC",
            apcode: "DRIVE_EXCLUDE_FROM_AO_SYNC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "95228f26-ef8d-4f93-a23e-f47e0625e197",
            name: "EXP_PWR_COEFF_A",
            apcode: "DRIVE_EXP_PWR_COEFF_A",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f28a8666-feea-4704-bb86-ff6c2fb663c9",
            name: "EXP_PWR_COEFF_B",
            apcode: "DRIVE_EXP_PWR_COEFF_B",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "37c83b8c-25bb-4577-a80f-1abd52f78616",
            name: "EXP_PWR_COEFF_C",
            apcode: "DRIVE_EXP_PWR_COEFF_C",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e4dfacac-3dbb-45da-9fac-70b3ce8d317a",
            name: "EXP_PWR_COEFF_D",
            apcode: "DRIVE_EXP_PWR_COEFF_D",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "74060fe2-dbe9-4e47-9220-e2ffdc975ebd",
            name: "FCAB_ID",
            apcode: "DRIVE_FCAB_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cea02e05-91ce-4395-9bb8-d7556dcb2b81",
            name: "FCS_ID",
            apcode: "DRIVE_FCS_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1275be6b-97de-45b8-9a57-9ab0be0a9f7d",
            name: "FIELD_PREFIX",
            apcode: "DRIVE_FIELD_PREFIX",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "91623e2b-a99a-4749-a12f-037d5a10f5df",
            name: "FIELD_PREFIX_2",
            apcode: "DRIVE_FIELD_PREFIX_2",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "eb71b681-41fc-4194-94f6-f7b97ae3c954",
            name: "FREQUENCY",
            apcode: "DRIVE_FREQUENCY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d5c4a257-41d4-4c09-acb2-4985996b54b9",
            name: "FREQUENCY_IEC",
            apcode: "DRIVE_FREQUENCY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ff0ac6b3-5575-4346-8eaf-800f37298319",
            name: "FUEL_TYPE",
            apcode: "DRIVE_FUEL_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0635559e-0ddf-4f91-82d4-0fb5d1bc02d6",
            name: "GROUP_NAME",
            apcode: "DRIVE_GROUP_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "53b758cc-b9fd-4c32-8b63-9a21d627feed",
            name: "HARDWARE_VERSION_IEC",
            apcode: "DRIVE_HARDWARE_VERSION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "554750ec-8319-4cef-acf7-6b1d7a8be738",
            name: "HEARTBEAT",
            apcode: "DRIVE_HEARTBEAT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "677edc23-943c-40a7-acf6-324cce975bc8",
            name: "HEARTBEAT_LAG_COUNT",
            apcode: "DRIVE_HEARTBEAT_LAG_COUNT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7bdf346b-724e-4952-b771-8643d5919c6e",
            name: "HOST_NAME",
            apcode: "DRIVE_HOST_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "471cab3b-6c09-4feb-a376-a16ed1d46663",
            name: "HOST_OS",
            apcode: "DRIVE_HOST_OS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d905fcd9-19c9-4300-a9ec-9403bd835dd2",
            name: "HOST_TYPE",
            apcode: "DRIVE_HOST_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1ef51b57-870d-4370-86cf-5b6e7ef9bdf9",
            name: "HUB_HEIGHT",
            apcode: "DRIVE_HUB_HEIGHT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8df11e73-574a-4c9c-8012-6038ab047303",
            name: "HUMIDITY_1_IEC",
            apcode: "DRIVE_HUMIDITY_1_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6ac8d729-68f8-469d-883e-0f07eccc8e1f",
            name: "HUMIDITY_2_IEC",
            apcode: "DRIVE_HUMIDITY_2_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5fd731a7-2161-4ab3-b62d-0c52f6597dd8",
            name: "HUMIDITY_IEC",
            apcode: "DRIVE_HUMIDITY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0e4ed72d-7119-479e-84fe-92f758978d79",
            name: "ICD",
            apcode: "DRIVE_DATE_INTERCONNECT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2869004f-391c-46b7-8bee-aaf40714a3e1",
            name: "ID_01",
            apcode: "DRIVE_ID_01",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2405152a-2b79-4743-bc18-7527b92b68b7",
            name: "ID_02",
            apcode: "DRIVE_ID_02",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "959ca9fe-71f3-4833-b16d-357d50e1d31b",
            name: "ID_03",
            apcode: "DRIVE_ID_03",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "822f505b-9c2b-480b-9f79-052dfd96801a",
            name: "ID_04",
            apcode: "DRIVE_ID_04",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "461689d6-f94c-4749-b4a4-dd491eabb0b0",
            name: "ID_05",
            apcode: "DRIVE_ID_05",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "259e37f2-1fdb-4c91-b20a-daab0fb1853d",
            name: "IEC_TURBULENCE_INTENSITY",
            apcode: "DRIVE_IEC_TURBULENCE_INTENSITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1fbcf91a-cfc9-4d25-af46-066e70e60b94",
            name: "INDEPENDENT_SYSTEM_OPERATOR",
            apcode: "DRIVE_INDEPENDENT_SYSTEM_OPERATOR",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9392bdf7-8b08-4bd3-9c72-4064cf354e84",
            name: "INSULATION_RESISTANCE_IEC",
            apcode: "DRIVE_INSULATION_RESISTANCE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ed770c50-0651-42b4-be2d-196082875b94",
            name: "INTERFACE_ID",
            apcode: "DRIVE_INTERFACE_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e3dde1f3-8588-4e33-89ce-6c233c156d82",
            name: "INTERFACE_NAME",
            apcode: "DRIVE_INTERFACE_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "eba0006d-5f5b-4fda-b6c2-2671ac09a169",
            name: "INTERFACE_TYPE",
            apcode: "DRIVE_INTERFACE_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "00ec91ea-297e-4a47-bcc0-91f4cf0bd4dc",
            name: "INV",
            apcode: "DRIVE_INV",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b99d17fc-48a8-42dd-a6e6-bce7c9b033b0",
            name: "INV_CAP",
            apcode: "DRIVE_INV_CAP",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1788c7c0-690c-4e48-b120-a875b2767e13",
            name: "INV_ID",
            apcode: "DRIVE_INV_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9d450848-9adf-4a7c-8ab5-b27c37a8a014",
            name: "INV_ID2",
            apcode: "DRIVE_INV_ID2",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "31249dc9-db89-4575-87c5-129c3174f7ed",
            name: "INV_ID_ATT_01",
            apcode: "DRIVE_INV_ID_ATT_01",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7a24fd4c-df46-4f72-bd7a-162e9497b344",
            name: "INV_ID_ATT_02",
            apcode: "DRIVE_INV_ID_ATT_02",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "22a13a23-f92e-4d4f-b16e-059cf30bf4f8",
            name: "INV_ID_ATT_03",
            apcode: "DRIVE_INV_ID_ATT_03",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bc633d8d-032e-480f-81a8-d1b549698adc",
            name: "INV_ID_ATT_04",
            apcode: "DRIVE_INV_ID_ATT_04",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "233a32dc-3569-4ccb-a221-0cf915e38d52",
            name: "INV_ID_ATT_05",
            apcode: "DRIVE_INV_ID_ATT_05",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "48d89352-6f8d-41cb-9216-f09fdd3c04a3",
            name: "INV_ID_ATT_06",
            apcode: "DRIVE_INV_ID_ATT_06",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5576112d-e963-4052-8f8b-fcbee52fad13",
            name: "INV_ID_ATT_07",
            apcode: "DRIVE_INV_ID_ATT_07",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "94388429-2576-405d-8641-48a43ea0c4f9",
            name: "INV_ID_ATT_08",
            apcode: "DRIVE_INV_ID_ATT_08",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b6dd6d33-a765-421b-bdf9-f9ec0a42f79b",
            name: "INV_ID_ATT_09",
            apcode: "DRIVE_INV_ID_ATT_09",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "19ce64d3-f9ab-47ae-881a-3bd6885fe50b",
            name: "INV_ID_ATT_1",
            apcode: "DRIVE_INV_ID_ATT_1",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a42539c6-6085-4c07-9382-62b9f95ee5a2",
            name: "INV_ID_ATT_10",
            apcode: "DRIVE_INV_ID_ATT_10",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "54df81c0-2716-4b35-a068-ec221f3526e6",
            name: "INV_ID_ATT_11",
            apcode: "DRIVE_INV_ID_ATT_11",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d94ded33-a3dc-4082-8e6a-27b7e56b422b",
            name: "INV_ID_ATT_12",
            apcode: "DRIVE_INV_ID_ATT_12",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6d036523-4a1a-48a3-98f7-6ea0becbdb0a",
            name: "INV_ID_ATT_13",
            apcode: "DRIVE_INV_ID_ATT_13",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6f7d2e82-f8bd-40d2-9250-6e63377b03be",
            name: "INV_ID_ATT_14",
            apcode: "DRIVE_INV_ID_ATT_14",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "51691ccd-6508-4e38-a2ea-d604c93474ee",
            name: "INV_ID_ATT_15",
            apcode: "DRIVE_INV_ID_ATT_15",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c749babd-9b67-4324-b3c5-b5fdf77f8dcf",
            name: "INV_ID_ATT_16",
            apcode: "DRIVE_INV_ID_ATT_16",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c4c62739-a569-4656-b3a7-83dcfb0903a8",
            name: "INV_ID_ATT_17",
            apcode: "DRIVE_INV_ID_ATT_17",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d8b8f3d7-07e0-41fb-b386-d6bffc33a87f",
            name: "INV_ID_ATT_18",
            apcode: "DRIVE_INV_ID_ATT_18",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ee0b1ab1-d591-49f4-b74e-51fb8813c90f",
            name: "INV_ID_ATT_19",
            apcode: "DRIVE_INV_ID_ATT_19",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4970c3bd-80e9-4afb-a376-83e1b87efe74",
            name: "INV_ID_ATT_2",
            apcode: "DRIVE_INV_ID_ATT_2",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "42eadce4-2f14-47e5-8080-57e07d2f17e5",
            name: "INV_ID_ATT_20",
            apcode: "DRIVE_INV_ID_ATT_20",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "07ba86e4-5e91-40e2-9595-59165b57ffc3",
            name: "INV_ID_ATT_21",
            apcode: "DRIVE_INV_ID_ATT_21",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "13f15b5b-adca-4467-a153-95cfc8cc7c85",
            name: "INV_ID_ATT_22",
            apcode: "DRIVE_INV_ID_ATT_22",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "16802159-a5f3-4892-96e3-f2366a6b68e6",
            name: "INV_ID_ATT_23",
            apcode: "DRIVE_INV_ID_ATT_23",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e94830c6-42ca-424b-bb9a-2b58320cb653",
            name: "INV_ID_ATT_24",
            apcode: "DRIVE_INV_ID_ATT_24",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fad3bc29-e4ca-445a-be29-a5f72bb92a86",
            name: "INV_ID_ATT_25",
            apcode: "DRIVE_INV_ID_ATT_25",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "382cb3bf-03aa-4f1c-955f-b265521a0cd2",
            name: "INV_ID_ATT_26",
            apcode: "DRIVE_INV_ID_ATT_26",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6879cd4e-f3ba-4a82-ad50-6db8759d1094",
            name: "INV_ID_ATT_27",
            apcode: "DRIVE_INV_ID_ATT_27",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dbdbe7e5-844d-4bdc-8df5-c51f2522f5a4",
            name: "INV_ID_ATT_28",
            apcode: "DRIVE_INV_ID_ATT_28",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3757ef48-c4f2-4f54-accd-6d23e8fbf81d",
            name: "INV_ID_ATT_29",
            apcode: "DRIVE_INV_ID_ATT_29",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a1d2a34f-59cd-4e7b-87b6-4ed8fa29aae5",
            name: "INV_ID_ATT_3",
            apcode: "DRIVE_INV_ID_ATT_3",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1d54c34b-638d-4821-8e17-63f937432419",
            name: "INV_ID_ATT_30",
            apcode: "DRIVE_INV_ID_ATT_30",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "43750cd7-2f93-4d72-96fc-2207e194fe4c",
            name: "INV_ID_ATT_31",
            apcode: "DRIVE_INV_ID_ATT_31",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "299c01ce-caca-4ce4-97fd-0985a9e75892",
            name: "INV_ID_ATT_32",
            apcode: "DRIVE_INV_ID_ATT_32",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0313ec8d-1706-4ae0-a65e-dc59c8dfa02c",
            name: "INV_ID_ATT_33",
            apcode: "DRIVE_INV_ID_ATT_33",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bc484ee2-9b66-4831-8215-73fac7f833e8",
            name: "INV_ID_ATT_34",
            apcode: "DRIVE_INV_ID_ATT_34",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "31e7bc5b-a4d8-4257-a276-9fd3b9397a13",
            name: "INV_ID_ATT_35",
            apcode: "DRIVE_INV_ID_ATT_35",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8d903e5b-d338-461d-9fca-6d9590fdcfd6",
            name: "INV_ID_ATT_36",
            apcode: "DRIVE_INV_ID_ATT_36",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7e2e36a6-01ca-4822-ad2b-2e745b729d1b",
            name: "INV_ID_ATT_4",
            apcode: "DRIVE_INV_ID_ATT_4",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3fec9d7f-508a-4c56-a80c-dab95a5561cb",
            name: "INV_ID_ATT_5",
            apcode: "DRIVE_INV_ID_ATT_5",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c0142e24-c77b-4970-9260-0d193f040424",
            name: "INV_ID_ATT_6",
            apcode: "DRIVE_INV_ID_ATT_6",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "78fd9f7e-3953-4fda-a2b0-096adfdcbed0",
            name: "INV_ID_ATT_7",
            apcode: "DRIVE_INV_ID_ATT_7",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5e45cefe-42ea-4c1b-abea-7bb75cb744b8",
            name: "INV_ID_ATT_8",
            apcode: "DRIVE_INV_ID_ATT_8",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a297f53a-2844-4c48-976f-36c1b9942d32",
            name: "INV_ID_ATT_9",
            apcode: "DRIVE_INV_ID_ATT_9",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fc596acb-864b-49a0-9b3b-f526f6b97e67",
            name: "INV_NAME",
            apcode: "DRIVE_INV_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5c8e4435-079a-4ce0-ac6a-daa004ffebb9",
            name: "IP_ADDRESS",
            apcode: "DRIVE_IP_ADDRESS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3f260d84-5b2b-4518-91f1-b3676d43c611",
            name: "IRRADIANCE_GHI_IEC",
            apcode: "DRIVE_IRRADIANCE_GHI_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2163f24e-2bf8-46e6-b8a4-e06104ac3f08",
            name: "IRRADIANCE_POA_IEC",
            apcode: "DRIVE_IRRADIANCE_POA_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6e85a9dd-a92f-4d82-9290-eeb66467ad55",
            name: "IRRADIANCE_THRESHOLD",
            apcode: "DRIVE_IRRADIANCE_THRESHOLD",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dda37422-55e6-4e89-b254-7b35b10bae38",
            name: "IRRADIATION_IEC",
            apcode: "DRIVE_IRRADIATION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f5809e32-8c6a-4c6d-998d-609311886312",
            name: "IS_RESIDENTIAL",
            apcode: "DRIVE_IS_RESIDENTIAL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9b344ae4-f419-48c6-b61e-088ad76e046b",
            name: "kW",
            apcode: "DRIVE_kW",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dc4143e6-b0e2-41aa-ad23-6c7802364b69",
            name: "Latitude",
            apcode: "DRIVE_LOCATION_LATITUDE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c7dd05d8-eaae-4f42-a922-a2e0503b7d44",
            name: "LOCATION_5",
            apcode: "DRIVE_LOCATION_5",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7a5c514d-020d-451e-b5b5-c35afa370352",
            name: "LOCATION_COUNTRY",
            apcode: "DRIVE_LOCATION_COUNTRY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "69c9b06d-c765-433b-bb58-fab32a50afd0",
            name: "LOCATION_ELEVATION",
            apcode: "DRIVE_LOCATION_ELEVATION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2456715f-bef6-4ee6-90a9-502466440204",
            name: "LOCATION_SITE_ADDRESS",
            apcode: "DRIVE_LOCATION_SITE_ADDRESS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "57c163ee-2b3e-4c6d-ac80-33e63a78bd09",
            name: "LOCATION_STATE",
            apcode: "DRIVE_LOCATION_STATE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "356baaf9-8901-4b68-a762-420d29eeed01",
            name: "Longitude",
            apcode: "DRIVE_LOCATION_LONGITUDE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c3d0dc23-7254-4585-b035-b89fca065a04",
            name: "LOSS_PERCENTAGE",
            apcode: "DRIVE_LOSS_PERCENTAGE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f5473ae8-abc1-40fa-bacd-e9db6ab956cf",
            name: "LTC_COUNTS",
            apcode: "DRIVE_LTC_COUNTS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1724b199-d09b-41d7-ac47-e664cfb11121",
            name: "LTC_POSITION",
            apcode: "DRIVE_LTC_POSITION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "42d219d9-b8d7-4b6c-80d2-8f40328132f3",
            name: "MAST_HEIGHT",
            apcode: "DRIVE_MAST_HEIGHT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a6e41e41-fe0c-41a2-a732-2209f38cde7b",
            name: "MAX_OPERATIONAL_POWER",
            apcode: "DRIVE_MAX_OPERATIONAL_POWER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8152dc39-4177-4187-9702-c07713e81ca3",
            name: "MAX_TRACKER_ANGLE",
            apcode: "DRIVE_MAX_TRACKER_ANGLE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f9128292-8188-4cb3-89e7-7ecd7c19287f",
            name: "METER_AC_POWER_AVAILABLE",
            apcode: "DRIVE_METER_AC_POWER_AVAILABLE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ad9a136c-f7f9-4d57-9927-c794b42b05ba",
            name: "METER_ENERGY_ACCUMULATOR_AVAILABLE",
            apcode: "DRIVE_METER_ENERGY_ACCUMULATOR_AVAILABLE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a7bc1b51-0aae-44c0-90b6-0166cc56f6cb",
            name: "METER_HAS_VIRTUAL_ROLLOVER",
            apcode: "DRIVE_METER_HAS_VIRTUAL_ROLLOVER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5db48d96-6b2e-442b-8e8b-13b51c87fd1c",
            name: "METER_ID",
            apcode: "DRIVE_METER_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0014c443-947e-40ad-be76-fabd1500ed9f",
            name: "METER_IS_PULSE",
            apcode: "DRIVE_METER_IS_PULSE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e01d08ec-5636-4c4e-b614-5cfa99407051",
            name: "METER_MAX_VOLTAGE",
            apcode: "DRIVE_METER_MAX_VOLTAGE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ac369ad1-43d0-4bb2-a28c-c3c1510b96d9",
            name: "METER_MIN_VOLTAGE",
            apcode: "DRIVE_METER_MIN_VOLTAGE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3e5411fa-efaa-49c3-bb03-f91151f28bef",
            name: "METER_RECEIVED_DAILY_STEP",
            apcode: "DRIVE_METER_RECEIVED_DAILY_STEP",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a905354c-62db-4c7a-af90-0635f26d34af",
            name: "METER_TYPE",
            apcode: "DRIVE_METER_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "11ff41a7-85d1-41cd-8768-d7e591e44068",
            name: "MET_ID",
            apcode: "DRIVE_MET_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "07779974-da21-4e4c-b535-22584cc0ec17",
            name: "MODEL_AVAILABILITY",
            apcode: "DRIVE_MODEL_AVAILABILITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8cfe5a8f-a859-4056-af31-ae0ba78a3de2",
            name: "MODEL_AVAILABILITY_CONTROL",
            apcode: "DRIVE_MODEL_AVAILABILITY_CONTROL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "34c042c7-cdb1-4fd6-9029-d14256853f4f",
            name: "MODEL_AVAILABILITY_UNCONTROL",
            apcode: "DRIVE_MODEL_AVAILABILITY_UNCONTROL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e313d6b4-d041-416c-92a3-a78449573c31",
            name: "MODE_OUTPUT_IEC",
            apcode: "DRIVE_MODE_OUTPUT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "522c42c2-d45f-4bfb-94c0-2a94412e2c22",
            name: "Module",
            apcode: "DRIVE_Module",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "13820e74-2b71-44f1-91a9-49157ca3d876",
            name: "MODULE_BIFACIALITY",
            apcode: "DRIVE_MODULE_BIFACIALITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "023a78e6-8579-4c31-bfdd-9a86f30cf4f7",
            name: "MODULE_COUNT",
            apcode: "DRIVE_MODULE_COUNT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ba40e9ca-3d81-4393-b494-7a76ca82aa0a",
            name: "MODULE_EFFICIENCY",
            apcode: "DRIVE_MODULE_EFFICIENCY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "efa6dde8-30c2-45b5-b453-74b96d93f55c",
            name: "MODULE_IMP",
            apcode: "DRIVE_MODULE_IMP",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cd5a7068-4f49-42cb-bd0b-c2f0c248c175",
            name: "MODULE_ISC",
            apcode: "DRIVE_MODULE_ISC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dfd04e9d-2efc-4a9d-9ff6-99dae76b1f7e",
            name: "MODULE_PMAX",
            apcode: "DRIVE_MODULE_PMAX",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "496478ad-c14e-4e14-b959-c428f07fabec",
            name: "MODULE_SERIES",
            apcode: "DRIVE_MODULE_SERIES",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cec0753a-1195-43b7-91b6-f4da0927403d",
            name: "MODULES_PER_STRING",
            apcode: "DRIVE_MODULES_PER_STRING",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dfea132e-97c2-4c23-a8c9-e583389ea4b5",
            name: "MODULE_TCOEFF",
            apcode: "DRIVE_MODULE_TCOEFF",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "833ef657-f63e-4a0d-844e-3d43214505c3",
            name: "MODULE_VMP",
            apcode: "DRIVE_MODULE_VMP",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a0721a91-16fa-483d-bed3-9687de67ee5c",
            name: "MODULE_VOC",
            apcode: "DRIVE_MODULE_VOC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "047956ec-727c-46f6-840b-c4a11a81cdca",
            name: "MOUNTING_AZIMUTH",
            apcode: "DRIVE_MOUNTING_AZIMUTH",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7d5c2e1d-b89b-41ae-9956-9c514143f652",
            name: "MOUNTING_GCR",
            apcode: "DRIVE_MOUNTING_GCR",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f4172147-4c32-4e61-b601-71aa1b033f20",
            name: "MOUNTING_LOCATION",
            apcode: "DRIVE_MOUNTING_LOCATION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "31b2fde3-fac9-4881-a865-c109393d3a4e",
            name: "MOUNTING_POST_HEIGHT",
            apcode: "DRIVE_MOUNTING_POST_HEIGHT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d16e4fea-903c-4523-9f4a-331d0e7b5f2d",
            name: "MOUNTING_ROW_WIDTH",
            apcode: "DRIVE_MOUNTING_ROW_WIDTH",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d353f245-7388-4475-80bf-57a2154f7eb1",
            name: "MOUNTING_TILT",
            apcode: "DRIVE_MOUNTING_TILT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "48bebaa7-baf9-4a47-849d-267b0b5c190e",
            name: "MOUNTING_TYPE",
            apcode: "DRIVE_MOUNTING_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cea8b887-ff55-43d0-8873-09729209d8e1",
            name: "MTR_ATT_ID_1",
            apcode: "DRIVE_MTR_ATT_ID_1",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e1ef249a-f6d3-4635-8b4f-74dc0ae02108",
            name: "MTR_ATT_ID_10",
            apcode: "DRIVE_MTR_ATT_ID_10",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d7c7791-5dee-484c-a915-9a1decba2dfe",
            name: "MTR_ATT_ID_11",
            apcode: "DRIVE_MTR_ATT_ID_11",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "37e65165-75fe-4b8f-85fa-84a973f1d130",
            name: "MTR_ATT_ID_12",
            apcode: "DRIVE_MTR_ATT_ID_12",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b9377a68-08d0-4666-a7f6-6736a429afe1",
            name: "MTR_ATT_ID_13",
            apcode: "DRIVE_MTR_ATT_ID_13",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d9fe3ec3-f0c9-4482-b5e1-81104fc6acad",
            name: "MTR_ATT_ID_14",
            apcode: "DRIVE_MTR_ATT_ID_14",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d807db3b-a362-4c90-a17b-3477aaeb4b1d",
            name: "MTR_ATT_ID_15",
            apcode: "DRIVE_MTR_ATT_ID_15",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1fadb6d1-ec47-4f51-bc0c-27508fb93242",
            name: "MTR_ATT_ID_16",
            apcode: "DRIVE_MTR_ATT_ID_16",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "db070d0d-2abe-4063-8408-0ff40b5b8310",
            name: "MTR_ATT_ID_17",
            apcode: "DRIVE_MTR_ATT_ID_17",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "965b3abf-28c7-4b7c-b2f1-5a6c460ba35f",
            name: "MTR_ATT_ID_18",
            apcode: "DRIVE_MTR_ATT_ID_18",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3762efc1-fba9-42f7-bcd2-c119d65445bf",
            name: "MTR_ATT_ID_19",
            apcode: "DRIVE_MTR_ATT_ID_19",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "35f70c99-6486-4681-b741-d1db86adfd3d",
            name: "MTR_ATT_ID_2",
            apcode: "DRIVE_MTR_ATT_ID_2",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ea809f01-9230-4455-8c75-7520e318b77f",
            name: "MTR_ATT_ID_20",
            apcode: "DRIVE_MTR_ATT_ID_20",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c8e62204-8d9e-4b68-99e9-1775b1dc07df",
            name: "MTR_ATT_ID_21",
            apcode: "DRIVE_MTR_ATT_ID_21",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "debc354e-0b68-4229-bd43-fa545fe10e12",
            name: "MTR_ATT_ID_22",
            apcode: "DRIVE_MTR_ATT_ID_22",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a30f0463-2f67-4c67-822f-452c31444cf5",
            name: "MTR_ATT_ID_23",
            apcode: "DRIVE_MTR_ATT_ID_23",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f7e5b2e2-088c-4143-b546-745a0e2c3266",
            name: "MTR_ATT_ID_3",
            apcode: "DRIVE_MTR_ATT_ID_3",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0ac5393e-a1d9-481c-8008-f9eb3b8f18b4",
            name: "MTR_ATT_ID_4",
            apcode: "DRIVE_MTR_ATT_ID_4",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8763a995-169d-4f69-8d0a-29968129b0aa",
            name: "MTR_ATT_ID_5",
            apcode: "DRIVE_MTR_ATT_ID_5",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3b489f1d-7bd4-4ca0-80f3-6055b7ed0b66",
            name: "MTR_ATT_ID_6",
            apcode: "DRIVE_MTR_ATT_ID_6",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9034db63-46ea-4250-8210-cf847682c895",
            name: "MTR_ATT_ID_7",
            apcode: "DRIVE_MTR_ATT_ID_7",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f45cd289-a0b9-4d58-bd30-0753f9efe3d6",
            name: "MTR_ATT_ID_8",
            apcode: "DRIVE_MTR_ATT_ID_8",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7d65b068-f0d6-493f-96c5-1bf46bbef583",
            name: "MTR_ATT_ID_9",
            apcode: "DRIVE_MTR_ATT_ID_9",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d9d3342c-a53a-4f70-80b2-06cb50f44fd1",
            name: "MTR_ID",
            apcode: "DRIVE_MTR_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cbcf5b56-16dc-4313-bbf9-7a0adf26892b",
            name: "MTR_ID_1",
            apcode: "DRIVE_MTR_ID_1",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bdb33829-603c-4262-a576-de146353d292",
            name: "MTR_ID_2",
            apcode: "DRIVE_MTR_ID_2",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9bde1807-604e-413c-96fa-f2acff73f404",
            name: "MTR_NAME",
            apcode: "DRIVE_MTR_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0fad535f-7e41-4db5-95b4-22a3b8df9fc8",
            name: "MTR_PREFIX",
            apcode: "DRIVE_MTR_PREFIX",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ddab74e0-0422-4ca3-9e0f-011e32f14a8c",
            name: "Name",
            apcode: "DRIVE_PIAFAttributeName",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "974ca4f9-aed9-4081-a273-d787dd52c75d",
            name: "NCU_ID",
            apcode: "DRIVE_NCU_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2e8d8bb1-571d-40f8-8ece-c0dec8b07dd4",
            name: "NEGATIVE_ENERGY_LOSS_TO_RESIDUAL",
            apcode: "DRIVE_NEGATIVE_ENERGY_LOSS_TO_RESIDUAL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "12510d57-4505-4bbc-8603-90c09b276f1b",
            name: "NEUTRAL_HI_CURRENT",
            apcode: "DRIVE_NEUTRAL_HI_CURRENT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e85556a5-5953-4e52-8f54-1d1957992be4",
            name: "NEUTRAL_LO_CURRENT1",
            apcode: "DRIVE_NEUTRAL_LO_CURRENT1",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "66daeb00-a6b8-4c49-995a-8aca2a1ccfa4",
            name: "NOMINAL_AC_VOLTAGE_AN",
            apcode: "DRIVE_NOMINAL_AC_VOLTAGE_AN",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8f2872cc-e050-4d69-99da-39d64f624886",
            name: "NOMINAL_AC_VOLTAGE_BUS",
            apcode: "DRIVE_NOMINAL_AC_VOLTAGE_BUS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1d855290-4a80-434b-aa5b-db0037c8e167",
            name: "NOMINAL_AC_VOLTAGE_FEEDER",
            apcode: "DRIVE_NOMINAL_AC_VOLTAGE_FEEDER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "96ef7eb0-ce5c-4c10-a2ac-3f9de29544e6",
            name: "NPT_TEMPERATURE",
            apcode: "DRIVE_NPT_TEMPERATURE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a6766b50-f1ee-4b65-bb1a-6cc75182ea17",
            name: "NUMBER_INVERTER_BLOCKS",
            apcode: "DRIVE_NUMBER_INVERTER_BLOCKS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "701533ca-3866-469f-901f-653e7624bffa",
            name: "OEM_NAME",
            apcode: "DRIVE_OEM_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2464ae2b-f0b6-4aaa-98f4-4891761832c7",
            name: "PATH",
            apcode: "DRIVE_PATH",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ca1bbec9-d5d6-4a27-b9e0-f0cd8e2de5a9",
            name: "PF550_AC_POWER_DEVIATION",
            apcode: "DRIVE_PF550_AC_POWER_DEVIATION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "372fb64c-c13d-42a6-8c7b-f77531bac78b",
            name: "PF550_AC_POWER_RATIO",
            apcode: "DRIVE_PF550_AC_POWER_RATIO",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c6421183-c4cd-4c14-a511-1a6524ff307e",
            name: "PF550_PITCH_MIN",
            apcode: "DRIVE_PF550_PITCH_MIN",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9d476fbf-688a-4995-83e0-feefb1afc889",
            name: "Plant",
            apcode: "DRIVE_Plant",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5da45b97-0625-42ec-bc11-c689bfaf0ce1",
            name: "POINT_SOURCE",
            apcode: "DRIVE_POINT_SOURCE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1e084e5c-4989-4bc9-8341-348455eb5a99",
            name: "POINTSOURCE",
            apcode: "DRIVE_POINTSOURCE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f4804473-924d-40ff-af08-6b124ae2d428",
            name: "POINT_SOURCE1",
            apcode: "DRIVE_POINT_SOURCE1",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "eee587ae-4aa5-4ae0-b053-e89d4b42bbdd",
            name: "POINT_SOURCE_EVENT",
            apcode: "DRIVE_POINT_SOURCE_EVENT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "edcbd9f0-9260-43df-965e-11ab3dec7074",
            name: "POINT_SOURCE_SQL",
            apcode: "DRIVE_POINT_SOURCE_SQL",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4450443d-fd0f-4280-a79e-c91c46ec5fac",
            name: "POINT_SOURCE_TEMP",
            apcode: "DRIVE_POINT_SOURCE_TEMP",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0a8c47cd-3117-4bcc-8e47-22521b405bd5",
            name: "POWER_FACTOR_ADJUSTMENT_IEC",
            apcode: "DRIVE_POWER_FACTOR_ADJUSTMENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7a73963f-9b4e-4f8c-8ab0-dcabde1bb67c",
            name: "POWER_FACTOR_A_IEC",
            apcode: "DRIVE_POWER_FACTOR_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6fa7c1e4-e838-40e2-910b-36279f91f01e",
            name: "POWER_FACTOR_B_IEC",
            apcode: "DRIVE_POWER_FACTOR_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9e677b23-088e-4db2-a2ba-9930bc7aba7c",
            name: "POWER_FACTOR_C_IEC",
            apcode: "DRIVE_POWER_FACTOR_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "205673e0-eb31-42ee-8135-2f0afd01d57b",
            name: "POWER_FACTOR_IEC",
            apcode: "DRIVE_POWER_FACTOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "be7dce1c-94ca-45fa-8821-84e731802ba4",
            name: "POWER_FACTOR_SETPOINT_AO_IEC",
            apcode: "DRIVE_POWER_FACTOR_SETPOINT_AO_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "45a78c78-726b-48c5-81d5-aa775ec1e502",
            name: "POWER_FACTOR_SETPOINT_IEC",
            apcode: "DRIVE_POWER_FACTOR_SETPOINT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "565bc903-048d-445e-abde-b733fae99148",
            name: "PPA_LIMIT",
            apcode: "DRIVE_PPA_LIMIT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1e5b8f1f-a516-480d-9083-0496178dc99f",
            name: "PYR_ID",
            apcode: "DRIVE_PYR_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "03803ffc-e913-4913-ae2b-fa52ae956cbb",
            name: "RACK",
            apcode: "DRIVE_RACK",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e4f5794e-9795-4b91-8374-722f10832a43",
            name: "RATED_AIR_DENSITY",
            apcode: "DRIVE_RATED_AIR_DENSITY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "76c937e8-3396-4ab1-95d0-9e73400e363d",
            name: "RATED_CUT_IN",
            apcode: "DRIVE_RATED_CUT_IN",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e4b1c91c-2f13-48f1-a162-4a5716162c05",
            name: "RATED_CUT_OUT",
            apcode: "DRIVE_RATED_CUT_OUT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "784a3e71-6438-4270-ab56-bc46899ba2ab",
            name: "RATED_WIND_SPEED",
            apcode: "DRIVE_RATED_WIND_SPEED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9679317c-3131-4413-a377-3d0ed7772910",
            name: "RCB_ID",
            apcode: "DRIVE_RCB_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "534fc044-544a-403c-8534-f80bd4f3b333",
            name: "REACTIVE_POWER",
            apcode: "DRIVE_REACTIVE_POWER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fbc14398-ac8c-4505-8055-2313157d21c9",
            name: "REAL_POWER",
            apcode: "DRIVE_REAL_POWER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f56ffe26-009d-4258-be62-40b26d5689dc",
            name: "REFERENCE_MET",
            apcode: "DRIVE_REFERENCE_MET",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f7b00446-ffb3-4432-8df0-07e0e48ddaa9",
            name: "ReferencePath",
            apcode: "DRIVE_ReferencePath",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3b7d7109-233d-4fb9-9e6e-6790caf4cdca",
            name: "REF_ID",
            apcode: "DRIVE_REF_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f6bd08f2-35bd-4b3b-af3f-54c4206be4d1",
            name: "RMB_ID",
            apcode: "DRIVE_RMB_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7da57352-9fd4-4b84-aa39-69d94464eff6",
            name: "RTU_ID",
            apcode: "DRIVE_RTU_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c84dffeb-0fe3-4287-b33d-dcf2ae40c23d",
            name: "SalesForceAssetID",
            apcode: "DRIVE_ASSET_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ac873d74-b9b8-402c-8249-c6895fee453b",
            name: "SAT_STATUS",
            apcode: "DRIVE_SAT_STATUS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7caad11e-fd44-4ba4-a2f4-8cf36ff3d144",
            name: "SCAN_CLASS",
            apcode: "DRIVE_SCAN_CLASS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a04e8fd2-9d98-4d7b-a766-c0f1ae23f93e",
            name: "SENSOR_HEATED",
            apcode: "DRIVE_SENSOR_HEATED",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a7ec3ab3-3d24-4b71-96bb-e6ed0d0daa53",
            name: "SENSOR_HEIGHT",
            apcode: "DRIVE_SENSOR_HEIGHT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "80ca44b3-0e52-4f12-b974-158e32313d96",
            name: "Sensor_ID",
            apcode: "DRIVE_Sensor_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "39698f48-1829-4c7f-b42d-e99ead76ca93",
            name: "SENSOR_ORIENTATION",
            apcode: "DRIVE_SENSOR_ORIENTATION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b98bc813-cf4e-4b59-8f81-c4cc0923fb53",
            name: "SENSOR_TYPE",
            apcode: "DRIVE_SENSOR_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e3341161-e1ca-45d8-9e98-b8a649e08f5a",
            name: "SERIAL_NUMBER",
            apcode: "DRIVE_SERIAL_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "225376bd-0b91-4842-a6e9-f6d2abea8f96",
            name: "SERIAL_NUMBER_IEC",
            apcode: "DRIVE_SERIAL_NUMBER_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0e823e1a-71b6-4a56-9bf6-83483263880b",
            name: "SIGNAL_NAME",
            apcode: "DRIVE_SIGNAL_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "16203cc9-6040-4a03-ab72-ec31927670f2",
            name: "SIGNAL_NUMBER",
            apcode: "DRIVE_SIGNAL_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "93fe9e3e-3ba4-4b63-9302-319eafdf0042",
            name: "SITE_CODE",
            apcode: "DRIVE_SITE_CODE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "78b1a1f2-d595-4bc4-b7ed-057f7b98c0e3",
            name: "SLAVE_DEVICE_NAME",
            apcode: "DRIVE_SLAVE_DEVICE_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5ece8bb7-3d3c-4ce1-a398-6116fbb35e0e",
            name: "sm1e__Asset_Number__c",
            apcode: "DRIVE_sm1e__Asset_Number__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "550c29c7-9a9e-4eda-a9a3-c9dbc575a97a",
            name: "sm1e__Asset_Priority__c",
            apcode: "DRIVE_sm1e__Asset_Priority__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "309986e8-dfdd-457b-b6f3-a1d20d49df46",
            name: "sm1e__Asset_Tag_Image__c",
            apcode: "DRIVE_sm1e__Asset_Tag_Image__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f25e55a2-da1e-46d1-887b-4bf4ec6ea5cb",
            name: "sm1e__Asset_Tag_Image_URL__c",
            apcode: "DRIVE_sm1e__Asset_Tag_Image_URL__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "609940ba-35d1-4b2e-9bfd-146c7d21dfef",
            name: "sm1e__City__c",
            apcode: "DRIVE_sm1e__City__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "76df794b-96aa-4622-8d21-5321b9a5c215",
            name: "sm1e__Doors__c",
            apcode: "DRIVE_sm1e__Doors__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2f8fe316-4c6b-4be1-9e99-86369500bbd3",
            name: "sm1e__Engine__c",
            apcode: "DRIVE_sm1e__Engine__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6eedde60-1897-4e3b-9954-8a80a7572e5e",
            name: "sm1e__Fuel_Type__c",
            apcode: "DRIVE_sm1e__Fuel_Type__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b943ae51-d201-4364-8dbc-ae73d1eac60f",
            name: "sm1e__Gross_Vehicle_Weight__c",
            apcode: "DRIVE_sm1e__Gross_Vehicle_Weight__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f9daf395-3cdd-4744-b519-861e46cec481",
            name: "sm1e__Hierarchy_Display__c",
            apcode: "DRIVE_sm1e__Hierarchy_Display__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "eb0f903e-076d-43db-a474-620a27f1df91",
            name: "sm1e__Hierarchy_Sort_Order__c",
            apcode: "DRIVE_sm1e__Hierarchy_Sort_Order__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "58078fdb-742e-4b02-bfca-b3f3bcb80e77",
            name: "sm1e__ID_Description__c",
            apcode: "DRIVE_sm1e__ID_Description__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ba66da70-1ec1-4260-a401-f23757b52b84",
            name: "sm1e__Image__c",
            apcode: "DRIVE_sm1e__Image__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "19e8a9f9-48c5-4cd5-983f-77c3826172c4",
            name: "sm1e__Latitude__c",
            apcode: "DRIVE_sm1e__Latitude__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5db6948d-0aaf-4e48-85d8-957a75ce9357",
            name: "sm1e__Location_text__c",
            apcode: "DRIVE_sm1e__Location_text__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2375d193-f757-46f0-8a59-09e993f932b3",
            name: "sm1e__Longitude__c",
            apcode: "DRIVE_sm1e__Longitude__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "850841be-41c0-4ded-af53-8b767c5baf58",
            name: "sm1e__Nameplate_Data__c",
            apcode: "DRIVE_sm1e__Nameplate_Data__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dea4c0f4-9f8e-4399-9e84-ce1651805d52",
            name: "sm1e__Parent_Description__c",
            apcode: "DRIVE_sm1e__Parent_Description__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b311d684-9fe2-4204-ae8b-5ca7f1708967",
            name: "sm1e__Parts_Expense_Account__c",
            apcode: "DRIVE_sm1e__Parts_Expense_Account__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5f193831-7251-466b-a39b-53a2699424c6",
            name: "sm1e__Passenger_Seats__c",
            apcode: "DRIVE_sm1e__Passenger_Seats__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4763cd16-4f11-41e4-8c80-a1d66af1f0b2",
            name: "sm1e__Search__c",
            apcode: "DRIVE_sm1e__Search__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e4eab096-b813-4361-9359-8193ac999de9",
            name: "sm1e__Service_Location__c",
            apcode: "DRIVE_sm1e__Service_Location__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "30a37615-b9af-4d4c-89c4-8c5241cf8b0a",
            name: "sm1e__Service_Region__c",
            apcode: "DRIVE_sm1e__Service_Region__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "83d67d4b-633b-43e3-af4c-e09c5ba6a822",
            name: "sm1e__State_Province__c",
            apcode: "DRIVE_sm1e__State_Province__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "52b115f2-3b27-4573-8368-fc29d49319b7",
            name: "sm1e__Street__c",
            apcode: "DRIVE_sm1e__Street__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1f0826e2-57d0-4ab9-ac38-8fe4615c8aa0",
            name: "sm1e__Top_Level__c",
            apcode: "DRIVE_sm1e__Top_Level__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e6a6b029-b48c-4e96-8a56-9aa6ec308f2c",
            name: "sm1e__Transmission__c",
            apcode: "DRIVE_sm1e__Transmission__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "60d8fa84-893a-4ded-875a-01a9a02b0514",
            name: "sm1e__VIN__c",
            apcode: "DRIVE_sm1e__VIN__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bf029962-bfbd-48ba-8c19-3150c1bdaef0",
            name: "sm1e__Wheel_Drive__c",
            apcode: "DRIVE_sm1e__Wheel_Drive__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2e414826-53c6-4e32-a3a8-aae0efe763ec",
            name: "sm1e__Zip_Postal_Code__c",
            apcode: "DRIVE_sm1e__Zip_Postal_Code__c",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9523b0cd-b56a-4241-a5b9-9dc1d4db1d70",
            name: "SOC_TYPE",
            apcode: "DRIVE_SOC_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7d2f6bc7-f006-45a8-a0c8-22082e351992",
            name: "SOFTWARE_VERSION_IEC",
            apcode: "DRIVE_SOFTWARE_VERSION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b2ac1526-5150-4600-a49c-7e642842eba7",
            name: "SOH_IEC",
            apcode: "DRIVE_SOH_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "11fbd7de-48ec-4d57-b50f-3837b688e7ae",
            name: "SOH_TYPE",
            apcode: "DRIVE_SOH_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ac0e848b-512f-4e52-b4c9-5321d5a3876b",
            name: "SOILING_RATIO_1_IEC",
            apcode: "DRIVE_SOILING_RATIO_1_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "92f73f9b-c754-45c8-9fb0-f92845e4be8f",
            name: "SOILING_RATIO_2_IEC",
            apcode: "DRIVE_SOILING_RATIO_2_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "eb37b9f8-5eb7-465c-817a-1967e46c68b5",
            name: "SQL_FILE",
            apcode: "DRIVE_SQL_FILE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e4d998db-0df2-4517-866e-2ddb78ea304a",
            name: "STATE_DST",
            apcode: "DRIVE_STATE_DST",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a647b120-9402-47a7-9c28-943107fb1e0d",
            name: "STATE_DST_IEC",
            apcode: "DRIVE_STATE_DST_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "228637d4-4c05-442c-8a31-a53392934db4",
            name: "STATION_NAME",
            apcode: "DRIVE_STATION_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fc4f1640-4bef-4249-9ba2-cc51f6b84c14",
            name: "STATION_NUMBER",
            apcode: "DRIVE_STATION_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d9428fec-4f39-4efb-bfdc-9853a9e9788c",
            name: "STATUS_105_HI_TRIP_IEC",
            apcode: "DRIVE_STATUS_105_HI_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2e224c1e-79f0-4359-8539-4ffef48b514a",
            name: "STATUS_27-1_PICKED_UP_IEC",
            apcode: "DRIVE_STATUS_27-1_PICKED_UP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8f31de15-9a47-4f45-ad7a-a991c740c6ec",
            name: "STATUS_27-1_TRIP_IEC",
            apcode: "DRIVE_STATUS_27-1_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f56e9773-a8a9-4937-b031-ce1b9e6b0d41",
            name: "STATUS_27_ACTIVE_IEC",
            apcode: "DRIVE_STATUS_27_ACTIVE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "45f063b2-09ee-414d-9506-121e947d7e51",
            name: "STATUS_27_IEC",
            apcode: "DRIVE_STATUS_27_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0fd7d688-3e03-414d-a9b3-30995aa380c5",
            name: "STATUS_50_51_PH_ACT_IEC",
            apcode: "DRIVE_STATUS_50_51_PH_ACT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a7cdf8d1-9984-4e12-a570-fcf3cb3afdf0",
            name: "STATUS_50_51_PH_A_PU_IEC",
            apcode: "DRIVE_STATUS_50_51_PH_A_PU_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1c31fc51-fd92-48e6-918b-39b4c9a1bdb2",
            name: "STATUS_50_51_PH_B_PU_IEC",
            apcode: "DRIVE_STATUS_50_51_PH_B_PU_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "696ced13-2279-49f5-90f9-f0e8ee65617c",
            name: "STATUS_50_51_PH_C_PU_IEC",
            apcode: "DRIVE_STATUS_50_51_PH_C_PU_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a0c22b4c-8b89-4360-8102-6bb1e42133fb",
            name: "STATUS_50_IEC",
            apcode: "DRIVE_STATUS_50_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "35dc8457-6904-4adf-845f-7581707e3bdd",
            name: "STATUS_50N_51N_ACT_IEC",
            apcode: "DRIVE_STATUS_50N_51N_ACT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7e832130-888f-40e1-b46c-b961085d241d",
            name: "STATUS_50N_51N_PICKED_UP_IEC",
            apcode: "DRIVE_STATUS_50N_51N_PICKED_UP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b0ecf9ee-852e-486c-beef-f2227d4e1859",
            name: "STATUS_50N_51N_PU_IEC",
            apcode: "DRIVE_STATUS_50N_51N_PU_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6781fd7b-7da9-4522-a987-74d13d8ff438",
            name: "STATUS_50N_51N_TRIP_IEC",
            apcode: "DRIVE_STATUS_50N_51N_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "41fafef9-e4c3-47ce-92a8-1b2d218135f3",
            name: "STATUS_50N_IEC",
            apcode: "DRIVE_STATUS_50N_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e37b7aaa-5509-477d-b23e-f6760a975f52",
            name: "STATUS_50NS-1_PICK_UP_IEC",
            apcode: "DRIVE_STATUS_50NS-1_PICK_UP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d78d9533-4a67-4fc6-ade9-834a15f2a557",
            name: "STATUS_50NS-1_TRIP_IEC",
            apcode: "DRIVE_STATUS_50NS-1_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b18415e9-3e55-49e8-acdf-ac2933bf7d12",
            name: "STATUS_50NS-2_PICK_UP_IEC",
            apcode: "DRIVE_STATUS_50NS-2_PICK_UP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6be2c068-882c-4f99-9b5e-f85b7764769c",
            name: "STATUS_50NS-2_TRIP_IEC",
            apcode: "DRIVE_STATUS_50NS-2_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "48c65450-6bff-47b7-b27a-d0c30865d6e4",
            name: "STATUS_50NS_67NS_ACT_IEC",
            apcode: "DRIVE_STATUS_50NS_67NS_ACT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0b31a66f-4d3d-4627-b20c-aa62c8065b7a",
            name: "STATUS_59-1_PICKED_UP_IEC",
            apcode: "DRIVE_STATUS_59-1_PICKED_UP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e5b871f6-b2fd-4e0a-a7d1-7697a6e57fa2",
            name: "STATUS_59-1_TRIP_IEC",
            apcode: "DRIVE_STATUS_59-1_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1fe838bc-8139-430e-8877-8d2f60ff1820",
            name: "STATUS_59_ACTIVE_IEC",
            apcode: "DRIVE_STATUS_59_ACTIVE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "83f240de-906b-4eb3-b4bd-e95548646126",
            name: "STATUS_59_IEC",
            apcode: "DRIVE_STATUS_59_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "eb2bdce7-5a72-4a66-a579-58d15abc2a80",
            name: "STATUS_81-1_PICKED_UP_IEC",
            apcode: "DRIVE_STATUS_81-1_PICKED_UP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1e7448d0-0fac-4ccc-a3cc-315a0e00fd6d",
            name: "STATUS_81-1_TRIP_IEC",
            apcode: "DRIVE_STATUS_81-1_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "924b29d3-55e5-4568-8e0b-8d5e96bda159",
            name: "STATUS_81-2_PICKED_UP_IEC",
            apcode: "DRIVE_STATUS_81-2_PICKED_UP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ce168dbb-2f32-4f48-a7e7-772cdd2778cb",
            name: "STATUS_81-2_TRIP_IEC",
            apcode: "DRIVE_STATUS_81-2_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d1172aef-3a43-473b-83d2-d6dee1d76db0",
            name: "STATUS_81_ACTIVE_IEC",
            apcode: "DRIVE_STATUS_81_ACTIVE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "40d39235-fc66-4109-852a-94bf2e460a36",
            name: "STATUS_81_IEC",
            apcode: "DRIVE_STATUS_81_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ec3db4ce-07b9-45bd-b6a5-4b016ed31d43",
            name: "STATUS_ABNORMAL_AUXILIARY_POWER_AID_410_CID_4_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_AUXILIARY_POWER_AID_410_CID_4_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4c3afe46-b725-4657-b7fb-99a83261eac1",
            name: "STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_10_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_10_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "239dabdf-4d73-4876-a291-045d7b4fff12",
            name: "STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_11_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_11_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9552ec44-963c-495f-a073-d06fa1a09fd8",
            name: "STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_12_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_12_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cb175f70-0c5d-44c3-8d80-3ba75b5e8141",
            name: "STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_15_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_15_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b4cf7e29-5b46-4948-af39-e986826500da",
            name: "STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_30_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_30_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c22b7d14-d7d5-4209-a129-98cd3f9050fa",
            name: "STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_3_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_DC_CIRCUIT_AID_200_CID_3_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "123f5af0-1a12-470d-9a0d-59aa61a76eb1",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_16_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_16_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "29ec0cb1-9b83-482d-bba5-af0629beda96",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_19_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_19_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "329b811b-f709-416c-8c6d-1e3005ad5483",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_26_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_26_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2a2b14b1-9ec1-4e4c-97e7-0c1b5168efb7",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_28_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_28_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0d3ee56d-9428-4820-b054-43f20157bfb5",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_29_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_29_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bbf816ce-0db2-496e-81de-e4538f74ab98",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_31_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_31_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "57899cde-3569-4958-be70-fbc80f04bf2b",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_32_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_32_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "045f6244-f1bb-4e2e-924d-81eb4ab565e2",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_33_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_33_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8a81f2b3-8993-4a28-b41f-4f2a74037aa3",
            name: "STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_4_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GRID_VOLT_AID_301_CID_4_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a58bddd9-c8c4-4790-b24a-bb56c8ff966e",
            name: "STATUS_ABNORMAL_GROUND_AID_326_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_GROUND_AID_326_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "de8dd5a6-bcf0-4903-b5f9-9daeb165f619",
            name: "STATUS_ABNORMAL_INV_CIRCUIT_AID_202_CID_13_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_INV_CIRCUIT_AID_202_CID_13_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f1feb327-2c97-4e4d-ba01-0c69435c3a49",
            name: "STATUS_ABNORMAL_INV_CIRCUIT_AID_202_CID_14_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_INV_CIRCUIT_AID_202_CID_14_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9107c630-f656-45c1-afe8-f63ab1affd7c",
            name: "STATUS_ABNORMAL_INV_CIRCUIT_AID_202_CID_16_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_INV_CIRCUIT_AID_202_CID_16_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ff22771b-b7ff-4ef6-aaa7-fde82a1b6743",
            name: "STATUS_ABNORMAL_INV_CIRCUIT_AID_202_CID_20_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_INV_CIRCUIT_AID_202_CID_20_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "42601826-b640-4ca0-a9a6-7226180f0931",
            name: "STATUS_ABNORMAL_RESID_CUR_AID_318_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_RESID_CUR_AID_318_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fd8260b4-6e5c-4ce3-92b5-47c9d69c14b0",
            name: "STATUS_ABNORMAL_SPI_COMM_AID_322_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_SPI_COMM_AID_322_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4abf8a80-0a8b-4502-843d-90f173fa69b6",
            name: "STATUS_ABNORMAL_STRING_1_AID_106_CID_1_WARNING_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_STRING_1_AID_106_CID_1_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "83596954-5d16-4ccc-94c1-ece2f16a1f02",
            name: "STATUS_ABNORMAL_STRING_2_AID_107_CID_1_WARNING_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_STRING_2_AID_107_CID_1_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "19772d39-66fa-484c-a49a-8b01ea517b0c",
            name: "STATUS_ABNORMAL_STRING_3_AID_108_CID_1_WARNING_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_STRING_3_AID_108_CID_1_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ae56352d-0a49-4791-abec-3c245f368855",
            name: "STATUS_ABNORMAL_STRING_4_AID_109_CID_1_WARNING_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_STRING_4_AID_109_CID_1_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4d4d2744-36b3-4136-bc6c-13888208a93f",
            name: "STATUS_ABNORMAL_STRING_5_AID_110_CID_1_WARNING_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_STRING_5_AID_110_CID_1_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a83b3e50-0278-4776-b7f5-a171511200ac",
            name: "STATUS_ABNORMAL_STRING_6_AID_111_CID_1_WARNING_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_STRING_6_AID_111_CID_1_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8d024374-eeb4-4968-b08f-e32cd552a633",
            name: "STATUS_ABNORMAL_STRING_7_AID_112_CID_1_WARNING_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_STRING_7_AID_112_CID_1_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "de539b9f-e9d1-49f4-8b67-818102d6cd02",
            name: "STATUS_ABNORMAL_STRING_8_AID_113_CID_1_WARNING_IEC",
            apcode: "DRIVE_STATUS_ABNORMAL_STRING_8_AID_113_CID_1_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e4372408-eb12-4f9d-b6b9-5d26ab13e45a",
            name: "STATUS_AC_POWER_DERATING_FIXED_IEC",
            apcode: "DRIVE_STATUS_AC_POWER_DERATING_FIXED_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "482c9092-3919-48ff-9b3d-b5e8f50950fb",
            name: "STATUS_AC_POWER_DERATING_PERCENT_IEC",
            apcode: "DRIVE_STATUS_AC_POWER_DERATING_PERCENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e354fde9-a59f-4d97-944b-58842b1d72a6",
            name: "STATUS_AFCI_SELF-TEST_FAULT_AID_411_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_AFCI_SELF-TEST_FAULT_AID_411_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e445a46b-2ced-4204-9f7f-42b52e784a1b",
            name: "STATUS_AFCI_SELF-TEST_FAULT_AID_411_CID_2_MAJOR_IEC",
            apcode: "DRIVE_STATUS_AFCI_SELF-TEST_FAULT_AID_411_CID_2_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0761cb2e-0aef-435f-8d59-f91ff8adc585",
            name: "STATUS_AFCI_SELF-TEST_FAULT_AID_411_CID_3_MAJOR_IEC",
            apcode: "DRIVE_STATUS_AFCI_SELF-TEST_FAULT_AID_411_CID_3_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b40908e8-0f3d-4a86-8323-dcb43b1dae33",
            name: "STATUS_ALARM_IEC",
            apcode: "DRIVE_STATUS_ALARM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1abfc4cc-cbbc-413e-a74a-8ef8b63e962d",
            name: "STATUS_ARRAY_RESET_IEC",
            apcode: "DRIVE_STATUS_ARRAY_RESET_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8d5b781d-e035-4300-924c-8defd41a3947",
            name: "STATUS_BATT_LOW_IEC",
            apcode: "DRIVE_STATUS_BATT_LOW_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0e0edee9-18da-4357-b782-d136b8311f74",
            name: "STATUS_BATT_ON_IEC",
            apcode: "DRIVE_STATUS_BATT_ON_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7279c9a0-3ba5-40c2-a454-a7d4d914fff9",
            name: "STATUS_CABINET_OVERTEMP_AID_321_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_CABINET_OVERTEMP_AID_321_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f411dab9-3dc7-403a-a067-033a114299f2",
            name: "STATUS_CB_SW_IEC",
            apcode: "DRIVE_STATUS_CB_SW_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a398fb53-61b4-4cf8-b8d1-6b89d16ca72b",
            name: "STATUS_CB_SWITCH_IEC",
            apcode: "DRIVE_STATUS_CB_SWITCH_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9928e42a-1821-4bfc-a885-7bb4475e33dc",
            name: "STATUS_CB_XFR_IEC",
            apcode: "DRIVE_STATUS_CB_XFR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "514588af-8bb5-464a-88fc-2f01d5c42493",
            name: "STATUS_CLOSE_IEC",
            apcode: "DRIVE_STATUS_CLOSE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bf36766d-af5c-468f-961e-e3b034923a0e",
            name: "STATUS_CURTAILMENT_MODE_IEC",
            apcode: "DRIVE_STATUS_CURTAILMENT_MODE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "53146576-5468-4a13-9e29-0e650ab348f6",
            name: "STATUS_DC_ARC_FAULT_AID_412_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_DC_ARC_FAULT_AID_412_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0ed85095-8bdc-49f1-b2cd-b2dbc3c96916",
            name: "STATUS_DC_ARC_FAULT_AID_412_CID_2_MAJOR_IEC",
            apcode: "DRIVE_STATUS_DC_ARC_FAULT_AID_412_CID_2_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2543684e-c548-46b4-84fa-016e92cb3743",
            name: "STATUS_DC_ARC_FAULT_AID_412_CID_3_MAJOR_IEC",
            apcode: "DRIVE_STATUS_DC_ARC_FAULT_AID_412_CID_3_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "28c9785f-0598-466f-8cca-67aad98348e7",
            name: "STATUS_DC_ARC_FAULT_AID_412_CID_4_MAJOR_IEC",
            apcode: "DRIVE_STATUS_DC_ARC_FAULT_AID_412_CID_4_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "02160ca0-2755-4aa6-be5c-ac17660b15b2",
            name: "STATUS_DST",
            apcode: "DRIVE_STATUS_DST",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b6d17c45-3a13-49c2-a029-9220159a27c0",
            name: "STATUS_DST_IEC",
            apcode: "DRIVE_STATUS_DST_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c1816662-1b6c-427d-b122-61ca9825b6ee",
            name: "STATUS_EARTHING_SW_IEC",
            apcode: "DRIVE_STATUS_EARTHING_SW_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "235d0264-24e3-4a74-a1da-e9b6c4cd896f",
            name: "STATUS_EARTHING_SWITCH_IN_IEC",
            apcode: "DRIVE_STATUS_EARTHING_SWITCH_IN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7e1d3d1b-2382-44b8-bcbb-f4547229157a",
            name: "STATUS_EARTHING_SWITCH_OUT_IEC",
            apcode: "DRIVE_STATUS_EARTHING_SWITCH_OUT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2ae37223-a64e-4846-b5fb-4c632be1f0c3",
            name: "STATUS_EMERGENCY_IEC",
            apcode: "DRIVE_STATUS_EMERGENCY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6b39165d-ab65-486c-b53f-2370bb28741b",
            name: "STATUS_FAN_FAULT_AID_320_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_FAN_FAULT_AID_320_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ca10d538-43f3-4ca5-be49-ae43a2f35f25",
            name: "STATUS_FAULT_IEC",
            apcode: "DRIVE_STATUS_FAULT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3233ca0f-b674-489a-9dd4-c97a97bd4512",
            name: "STATUS_FLAGS_IEC",
            apcode: "DRIVE_STATUS_FLAGS_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2dc14fd8-2305-4cb8-ae34-0c3dc3ce12e0",
            name: "STATUS_FLASH_FAULT_AID_61440_CID_0_MAJOR_IEC",
            apcode: "DRIVE_STATUS_FLASH_FAULT_AID_61440_CID_0_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2efc9820-d582-42f2-a6b5-7006e4cb9fa7",
            name: "STATUS_FREQUENCY_ABNORMAL_AID_305_CID_2_MAJOR_IEC",
            apcode: "DRIVE_STATUS_FREQUENCY_ABNORMAL_AID_305_CID_2_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5630e6d8-620e-46f1-bf7d-2e3262868f80",
            name: "STATUS_FREQUENCY_ABNORMAL_AID_305_CID_4_MAJOR_IEC",
            apcode: "DRIVE_STATUS_FREQUENCY_ABNORMAL_AID_305_CID_4_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4e3835ea-6c7d-4b3c-be3c-dde8d2258b90",
            name: "STATUS_FREQUENCY_ABNORMAL_AID_305_CID_5_MAJOR_IEC",
            apcode: "DRIVE_STATUS_FREQUENCY_ABNORMAL_AID_305_CID_5_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c69edd21-0df6-4a4b-8681-8c9f02257a75",
            name: "STATUS_GND_A_IEC",
            apcode: "DRIVE_STATUS_GND_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "909d674c-d450-4e93-8d9a-ce801a707631",
            name: "STATUS_GRID_SUPPLY_IEC",
            apcode: "DRIVE_STATUS_GRID_SUPPLY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f4790ab9-b11e-4542-9617-ba7dd8aff5c2",
            name: "STATUS_HIGH_DC_INPUT_VOLT_AID_103_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_HIGH_DC_INPUT_VOLT_AID_103_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8c96de9f-23ff-4827-b552-abbdfbee8d35",
            name: "STATUS_HIGH_DC_INPUT_VOLT_AID_103_CID_2_MAJOR_IEC",
            apcode: "DRIVE_STATUS_HIGH_DC_INPUT_VOLT_AID_103_CID_2_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a06ac3ab-124f-4d83-ac2f-165133e62050",
            name: "STATUS_HIGH_DC_INPUT_VOLT_AID_103_CID_3_MAJOR_IEC",
            apcode: "DRIVE_STATUS_HIGH_DC_INPUT_VOLT_AID_103_CID_3_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e3e76a42-e134-4967-a72b-f033a9c4ac5c",
            name: "STATUS_HIGH_DC_INPUT_VOLT_AID_103_CID_4_MAJOR_IEC",
            apcode: "DRIVE_STATUS_HIGH_DC_INPUT_VOLT_AID_103_CID_4_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "14849f89-5599-4f3a-bacb-15343c68b5bb",
            name: "STATUS_INCORRECT_STRING_WIRING_AID_413_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_INCORRECT_STRING_WIRING_AID_413_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4e3b1362-57ab-4d0e-82b6-8b98614f41b8",
            name: "STATUS_INCORRECT_STRING_WIRING_AID_413_CID_2_MAJOR_IEC",
            apcode: "DRIVE_STATUS_INCORRECT_STRING_WIRING_AID_413_CID_2_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "87c201c1-ac9e-4f7d-9bbc-496a7646681b",
            name: "STATUS_INCORRECT_STRING_WIRING_AID_413_CID_3_MAJOR_IEC",
            apcode: "DRIVE_STATUS_INCORRECT_STRING_WIRING_AID_413_CID_3_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8d001943-0af3-4a09-ab22-58e5c44af2a9",
            name: "STATUS_INCORRECT_STRING_WIRING_AID_413_CID_4_MAJOR_IEC",
            apcode: "DRIVE_STATUS_INCORRECT_STRING_WIRING_AID_413_CID_4_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cf165279-0c7f-4b9f-a843-b5054f36f60a",
            name: "STATUS_INVERTER_IEC",
            apcode: "DRIVE_STATUS_INVERTER_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6deb7519-ed91-4b36-b447-d56fe457b4fd",
            name: "STATUS_INVERTER_ON-GRID_IEC",
            apcode: "DRIVE_STATUS_INVERTER_ON-GRID_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "51b2a69d-a51c-4b58-aaa0-4dc8d9a298c1",
            name: "STATUS_ISLANDING_PROTECTION_IEC",
            apcode: "DRIVE_STATUS_ISLANDING_PROTECTION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b9cb4241-56ea-4747-92b2-ad982a50def5",
            name: "STATUS_LOCAL_REMOTE_IEC",
            apcode: "DRIVE_STATUS_LOCAL_REMOTE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "91b615b8-ef7d-4bb8-b733-426af83c4f80",
            name: "STATUS_LOCK",
            apcode: "DRIVE_STATUS_LOCK",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cba0ab4b-0dd4-4c29-9aba-29a77f61c5ac",
            name: "STATUS_LOCK_IEC",
            apcode: "DRIVE_STATUS_LOCK_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6a983a3f-c749-4953-a7c2-9d97edc5e292",
            name: "STATUS_LOCKING_IEC",
            apcode: "DRIVE_STATUS_LOCKING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3148a34f-368b-4dd2-b858-920173b4b299",
            name: "STATUS_LOW_INSULATION_RES_AID_313_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_LOW_INSULATION_RES_AID_313_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a231973b-2b6a-4d17-b80f-4454629b2241",
            name: "STATUS_LVRT_PROTECTION_IEC",
            apcode: "DRIVE_STATUS_LVRT_PROTECTION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c365e792-7da9-43d6-b38e-e403352c018a",
            name: "STATUS_MAGNETIC_LIQUID_INDICATOR_TRIP_IEC",
            apcode: "DRIVE_STATUS_MAGNETIC_LIQUID_INDICATOR_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7b101f06-c98f-4bad-89bc-aa261853cb67",
            name: "STATUS_OFFLINE_IEC",
            apcode: "DRIVE_STATUS_OFFLINE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d73d2663-ea1c-400e-ada9-7950ff6c689a",
            name: "STATUS_OPEN_IEC",
            apcode: "DRIVE_STATUS_OPEN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "28db6c7d-44ec-471a-baf6-8e241155f1fa",
            name: "STATUS_OPERATIONAL_MODE_IEC",
            apcode: "DRIVE_STATUS_OPERATIONAL_MODE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c130df38-c538-4dc3-8258-8bb17c40bb82",
            name: "STATUS_PF_CTRL_MODE_IEC",
            apcode: "DRIVE_STATUS_PF_CTRL_MODE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d38f4b01-379f-4776-9d2c-f6607e9ac6c3",
            name: "STATUS_POSITION_CLOSE_IEC",
            apcode: "DRIVE_STATUS_POSITION_CLOSE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6230f2ba-ec16-4d41-bda1-969a17d420a0",
            name: "STATUS_POSITION_IEC",
            apcode: "DRIVE_STATUS_POSITION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cf53e59f-5385-461b-9e2e-54e2c1d538b5",
            name: "STATUS_POSITION_OPEN_IEC",
            apcode: "DRIVE_STATUS_POSITION_OPEN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "57e01db7-9121-4649-aa06-a7f6f214d04e",
            name: "STATUS_PRESS_HI_TRIP_IEC",
            apcode: "DRIVE_STATUS_PRESS_HI_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d28e5de3-6022-4219-bc93-c124f5c08ba9",
            name: "STATUS_REMOTE_LOCAL_IEC",
            apcode: "DRIVE_STATUS_REMOTE_LOCAL_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bae1c978-4def-4db5-9482-0b618651f552",
            name: "STATUS_SF6_IEC",
            apcode: "DRIVE_STATUS_SF6_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3c50ab69-7349-4036-97e8-00645e585c80",
            name: "STATUS_SF6_IN_IEC",
            apcode: "DRIVE_STATUS_SF6_IN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "60ab9d14-2dd5-4b0d-8ef4-dc55f936fe6c",
            name: "STATUS_SF6_OUT_IEC",
            apcode: "DRIVE_STATUS_SF6_OUT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4f9c8633-cdbb-4aca-9303-f9be1b9d3332",
            name: "STATUS_SF6_XFR_IEC",
            apcode: "DRIVE_STATUS_SF6_XFR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "19647c96-cdc8-496d-9599-144ddda5b17e",
            name: "STATUS_SOFTWARE_VER_UNMATCH_AID_504_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SOFTWARE_VER_UNMATCH_AID_504_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7ae5dfeb-0b7d-4bca-aa86-44cc1f01196b",
            name: "STATUS_SOFTWARE_VER_UNMATCH_AID_504_CID_2_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SOFTWARE_VER_UNMATCH_AID_504_CID_2_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4ed1bebe-b413-423e-b83b-f42511aa5d0a",
            name: "STATUS_SOFTWARE_VER_UNMATCH_AID_504_CID_3_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SOFTWARE_VER_UNMATCH_AID_504_CID_3_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "815a0ae9-fefb-4d61-9859-08469c19e9b3",
            name: "STATUS_STRING_1_REVERSED_AID_120_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_STRING_1_REVERSED_AID_120_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1a119c6b-172b-4ef2-bf40-c2b76ef456e9",
            name: "STATUS_STRING_1_REVERSED_AID_120_CID_2_WARNING_IEC",
            apcode: "DRIVE_STATUS_STRING_1_REVERSED_AID_120_CID_2_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "36ad68b9-486d-4175-a9ca-93d0d19cb7f6",
            name: "STATUS_STRING_2_REVERSED_AID_121_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_STRING_2_REVERSED_AID_121_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "9342018e-9452-42d3-b082-59cfce65693d",
            name: "STATUS_STRING_2_REVERSED_AID_121_CID_2_WARNING_IEC",
            apcode: "DRIVE_STATUS_STRING_2_REVERSED_AID_121_CID_2_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1676903b-cb9f-4000-97f5-c631c75a4fca",
            name: "STATUS_STRING_3_REVERSED_AID_122_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_STRING_3_REVERSED_AID_122_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3961c907-2df1-48a4-941d-257f0a4062ba",
            name: "STATUS_STRING_3_REVERSED_AID_122_CID_2_WARNING_IEC",
            apcode: "DRIVE_STATUS_STRING_3_REVERSED_AID_122_CID_2_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "773885b9-1fba-44d0-b6e6-50909cb6fa8f",
            name: "STATUS_STRING_4_REVERSED_AID_123_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_STRING_4_REVERSED_AID_123_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "06788f06-7227-430b-9cd7-e2917ecf6dca",
            name: "STATUS_STRING_4_REVERSED_AID_123_CID_2_WARNING_IEC",
            apcode: "DRIVE_STATUS_STRING_4_REVERSED_AID_123_CID_2_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d39787a0-d0ce-4f3c-9278-cb1e24871084",
            name: "STATUS_STRING_5_REVERSED_AID_124_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_STRING_5_REVERSED_AID_124_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2c5ba93f-aa11-4353-bc3f-6f3cd627addb",
            name: "STATUS_STRING_5_REVERSED_AID_124_CID_2_WARNING_IEC",
            apcode: "DRIVE_STATUS_STRING_5_REVERSED_AID_124_CID_2_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "194d4159-cde1-4272-8778-f17011a46a76",
            name: "STATUS_STRING_6_REVERSED_AID_125_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_STRING_6_REVERSED_AID_125_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "576c01db-7124-4f2c-be09-12d5a7998ac3",
            name: "STATUS_STRING_6_REVERSED_AID_125_CID_2_WARNING_IEC",
            apcode: "DRIVE_STATUS_STRING_6_REVERSED_AID_125_CID_2_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "11e8f608-eaa9-433b-a3e7-7e22041e3272",
            name: "STATUS_STRING_7_REVERSED_AID_126_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_STRING_7_REVERSED_AID_126_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4a3d7991-8168-4b4b-882d-c3d2b4398df5",
            name: "STATUS_STRING_7_REVERSED_AID_126_CID_2_WARNING_IEC",
            apcode: "DRIVE_STATUS_STRING_7_REVERSED_AID_126_CID_2_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "626b4665-99bc-4e45-ada7-c69311abc766",
            name: "STATUS_STRING_8_REVERSED_AID_127_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_STRING_8_REVERSED_AID_127_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1e1ce7de-6648-4ea0-98b7-d935148d8b1f",
            name: "STATUS_STRING_8_REVERSED_AID_127_CID_2_WARNING_IEC",
            apcode: "DRIVE_STATUS_STRING_8_REVERSED_AID_127_CID_2_WARNING_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "11d563f8-e95d-47cd-a68c-8c82a9d6b4be",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c47d9939-4091-42d9-b891-eea67185aa9e",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_21_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_21_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "026f7a51-ab68-49c3-a51d-09a31ee563ac",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_23_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_23_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f8e3ef32-2926-49ea-9c00-5ba31383e533",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_27_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_27_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f5734f8c-3da2-4695-bbe8-ac2f065d4651",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_28_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_28_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1d4e697a-23a1-48a2-92e2-bb1a58836aea",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_29_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_29_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b0700bb1-b0ff-40e5-8b51-40657dada85f",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_30_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_30_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "aa723c6b-f268-4595-8579-dadffecacd76",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_31_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_31_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ba8a5e2d-07cc-46f5-b909-c6f40abc3ed2",
            name: "STATUS_SYSTEM_FAULT_AID_400_CID_3_MAJOR_IEC",
            apcode: "DRIVE_STATUS_SYSTEM_FAULT_AID_400_CID_3_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "eabfbe73-f478-48a9-a2fe-b71d1d95d329",
            name: "STATUS_TEMP_95_HI_ALARM_IEC",
            apcode: "DRIVE_STATUS_TEMP_95_HI_ALARM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "736360cb-e5ae-4904-a9b3-99eacca1da45",
            name: "STATUS_UPGRADE_FAILED_AID_505_CID_1_MAJOR_IEC",
            apcode: "DRIVE_STATUS_UPGRADE_FAILED_AID_505_CID_1_MAJOR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fe457813-9926-4fb2-8e50-e04e74aad438",
            name: "STATUS_UTILITY_FAIL_IEC",
            apcode: "DRIVE_STATUS_UTILITY_FAIL_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1e5ddb95-6c84-46b0-8cf7-741f8f2b5717",
            name: "STATUS_VAR_SCHEDULING_CURVE_MODE",
            apcode: "DRIVE_STATUS_VAR_SCHEDULING_CURVE_MODE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fc0b7bf5-422f-4f02-a76e-2f67fda341d7",
            name: "STATUS_VAR_SCHEDULING_CURVE_MODE_IEC",
            apcode: "DRIVE_STATUS_VAR_SCHEDULING_CURVE_MODE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "55e26ea2-25af-422c-8d86-c19ec16b7658",
            name: "STATUS_VOLTAGE_CTRL_MODE_IEC",
            apcode: "DRIVE_STATUS_VOLTAGE_CTRL_MODE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f452168d-cd3a-43a1-a2ef-b79db69c6b3e",
            name: "STATUS_XFR_EARTHING_SWITCH_IEC",
            apcode: "DRIVE_STATUS_XFR_EARTHING_SWITCH_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "708289c1-6b0b-42be-8778-2ffa308b37f7",
            name: "STATUS_XFR_LIQUID_TEMP_ALARM_IEC",
            apcode: "DRIVE_STATUS_XFR_LIQUID_TEMP_ALARM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4a88121a-de98-4ca6-9046-276a752874f0",
            name: "STATUS_XFR_LIQUID_TEMP_TRIP_IEC",
            apcode: "DRIVE_STATUS_XFR_LIQUID_TEMP_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "053261ec-b901-4d67-971b-000a44ce7324",
            name: "STATUS_XFR_LOCAL_REMOTE_IEC",
            apcode: "DRIVE_STATUS_XFR_LOCAL_REMOTE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4b6fa45a-6c66-4214-9131-5b59770a0eb5",
            name: "STATUS_XFR_MAGNETIC_LIQUID_HI_ALARM_IEC",
            apcode: "DRIVE_STATUS_XFR_MAGNETIC_LIQUID_HI_ALARM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8878e1f4-1467-437d-927b-4dfa02814e80",
            name: "STATUS_XFR_MAGNETIC_LIQUID_LOW_TRIP_IEC",
            apcode: "DRIVE_STATUS_XFR_MAGNETIC_LIQUID_LOW_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a10ad5aa-7902-4970-9b4e-20ac2f71fbb3",
            name: "STATUS_XFR_PRESS_TRIP_IEC",
            apcode: "DRIVE_STATUS_XFR_PRESS_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b3918d47-3fc5-44d1-88cc-65a25f8fa37a",
            name: "STATUS_XFR_PRESS_VALV_OPERATION_TRIP_IEC",
            apcode: "DRIVE_STATUS_XFR_PRESS_VALV_OPERATION_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a51835c9-0410-4bf1-81de-284662dfbf1d",
            name: "STATUS_XFR_RECLOSE_IEC",
            apcode: "DRIVE_STATUS_XFR_RECLOSE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7c9ecc6c-a750-4822-8c84-9446435f38ba",
            name: "STATUS_XFR_T154_ALARM_IEC",
            apcode: "DRIVE_STATUS_XFR_T154_ALARM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "17c24ddf-15e8-4e49-8266-ceb9edc5d1cf",
            name: "STATUS_XFR_T154_TRIP_IEC",
            apcode: "DRIVE_STATUS_XFR_T154_TRIP_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6e835a72-d247-4ae0-a48f-c72635f2d2c9",
            name: "STATUS_ZERO_VOLTAGE_RIDE_THROUGH_PROTECTION_IEC",
            apcode: "DRIVE_STATUS_ZERO_VOLTAGE_RIDE_THROUGH_PROTECTION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4de000ce-9f0f-4516-bfe1-e9d7da2ee10b",
            name: "STOW_ANGLE",
            apcode: "DRIVE_STOW_ANGLE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ec395eab-e3da-4d2c-b437-5f8c4ad6b638",
            name: "String",
            apcode: "DRIVE_String",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fd1d40b2-5809-47ed-89bc-80c8d374b725",
            name: "STRING_COUNT",
            apcode: "DRIVE_STRING_COUNT",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "11079cc1-077e-48af-82a6-000dd2132804",
            name: "STRING_NUMBER",
            apcode: "DRIVE_STRING_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7e170b03-27ea-4961-ad28-c9123b3f29f0",
            name: "STRING_NUMBER_NEGATIVE",
            apcode: "DRIVE_STRING_NUMBER_NEGATIVE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3e7147af-35f6-469c-8b95-fd58c00430e7",
            name: "SUBARRAY",
            apcode: "DRIVE_SUBARRAY",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2bdbffc2-f165-4282-b2c8-76760b750ba2",
            name: "SUBARRAY_NUMBER",
            apcode: "DRIVE_SUBARRAY_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dc6a1efb-a1d7-4fab-8e14-4a5ca8b96fc1",
            name: "SVA_A_IEC",
            apcode: "DRIVE_SVA_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "78cdc052-c861-43a2-9e77-b0b8c682b705",
            name: "SVA_B_IEC",
            apcode: "DRIVE_SVA_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "fa35e973-43a6-4d85-a56c-f71ade3f5cd3",
            name: "SVA_C_IEC",
            apcode: "DRIVE_SVA_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "86ee79e5-bce1-48d2-b0bf-9e45f5db314e",
            name: "SVAH_A_IEC",
            apcode: "DRIVE_SVAH_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "77236050-602f-4094-8594-ef3cb5b5f4f2",
            name: "SVAH_B_IEC",
            apcode: "DRIVE_SVAH_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c203d8e9-2c22-4f13-9cc1-15c3cca25d21",
            name: "SVAH_C_IEC",
            apcode: "DRIVE_SVAH_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "67cec25f-4799-4010-89be-988050e461c7",
            name: "SVAH_IEC",
            apcode: "DRIVE_SVAH_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "81bc2453-9945-4170-b231-86dacdc0afbc",
            name: "SVA_IEC",
            apcode: "DRIVE_SVA_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2ce04a3c-55c8-420e-aade-dd36c39a93b3",
            name: "SYNC_OE",
            apcode: "DRIVE_SYNC_OE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "cc2a1d2c-ba3b-4300-b4cb-793706ecc555",
            name: "TABLE_NAME",
            apcode: "DRIVE_TABLE_NAME",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "24b2cc75-147c-48bd-b43d-cec2075ca0eb",
            name: "tag",
            apcode: "DRIVE_tag",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0ded61ce-78a5-4227-b4f4-2b89bf1c13bb",
            name: "TAG_PREFIX",
            apcode: "DRIVE_TAG_PREFIX",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b89e101f-6d4d-42b3-9880-a61124f495fa",
            name: "TAG_SOURCE",
            apcode: "DRIVE_TAG_SOURCE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8f0608a4-eee6-42f2-a62f-f6ac36d26c4f",
            name: "T_ALARM",
            apcode: "DRIVE_T_ALARM",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0afb9e17-cc54-4efd-8c15-fa2a285cf402",
            name: "T_AMB_IEC",
            apcode: "DRIVE_T_AMB_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6f2f9e4c-c620-4eac-8e1d-4985d356ada3",
            name: "TAP_POSITION",
            apcode: "DRIVE_TAP_POSITION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b080c569-7e0b-41c5-b7d6-dec2fd785afe",
            name: "T_ASSET",
            apcode: "DRIVE_T_ASSET",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "35b5f363-49cc-4c5f-82b7-9cf219b84a9a",
            name: "T_ASSET_1_IEC",
            apcode: "DRIVE_T_ASSET_1_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c4646e63-7a9d-4459-8d55-571873d8c44d",
            name: "T_ASSET_2_IEC",
            apcode: "DRIVE_T_ASSET_2_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f60bcebc-25b4-4bc4-b2c2-3b5eafe6fa2a",
            name: "T_ASSET_IEC",
            apcode: "DRIVE_T_ASSET_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c7568e3e-714f-4d7d-9101-e441077a381b",
            name: "TBA_MIN_IRRADIANCE_POA",
            apcode: "DRIVE_TBA_MIN_IRRADIANCE_POA",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "632e8791-5d63-47ea-9dfa-943c5b993294",
            name: "TCU_ID",
            apcode: "DRIVE_TCU_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4fa3350f-e137-4e1e-9e1f-945ae6367e8a",
            name: "THD_AC_CURRENT_A_IEC",
            apcode: "DRIVE_THD_AC_CURRENT_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "93e47d9e-24ad-4821-a6b0-594dfdbc074f",
            name: "THD_AC_CURRENT_B_IEC",
            apcode: "DRIVE_THD_AC_CURRENT_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "35ec79b4-39d1-4de8-a7e6-aa41d978a6c6",
            name: "THD_AC_CURRENT_C_IEC",
            apcode: "DRIVE_THD_AC_CURRENT_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a7b47d4c-aa6a-4d00-8b96-0ac94941efa3",
            name: "THD_AC_VOLTAGE_AN_IEC",
            apcode: "DRIVE_THD_AC_VOLTAGE_AN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "144193d9-ea48-4147-ae7b-9f2a39285254",
            name: "THD_AC_VOLTAGE_BN_IEC",
            apcode: "DRIVE_THD_AC_VOLTAGE_BN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "70250101-517a-4f46-977a-0ef1b102cdb1",
            name: "THD_AC_VOLTAGE_CN_IEC",
            apcode: "DRIVE_THD_AC_VOLTAGE_CN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "794481e6-1853-487a-bb96-6b754be8c788",
            name: "TILT_X_DIRECTION_IEC",
            apcode: "DRIVE_TILT_X_DIRECTION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "72a4deec-861a-4668-8f6f-a8e5c2f0d37a",
            name: "TILT_Y_DIRECTION_IEC",
            apcode: "DRIVE_TILT_Y_DIRECTION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "66b274b7-47b2-4279-baeb-b1ac6a0bbe72",
            name: "TIME_COLLECTION_IEC",
            apcode: "DRIVE_TIME_COLLECTION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "c2094eea-4c3b-4bd0-9bd7-e5d4c6666df6",
            name: "TIME_DAY_IEC",
            apcode: "DRIVE_TIME_DAY_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "919ca23f-666f-4110-9486-f816a7c79087",
            name: "TIME_HOUR_IEC",
            apcode: "DRIVE_TIME_HOUR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "dd094921-8999-4474-9726-372549b57cb1",
            name: "TIME_LOCAL_IEC",
            apcode: "DRIVE_TIME_LOCAL_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "667113d4-ee98-47ef-8e5b-e85f86d9d635",
            name: "TIME_MINUTE_IEC",
            apcode: "DRIVE_TIME_MINUTE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "5c71d15e-b972-4165-b00a-e0dd4e047e03",
            name: "TIME_MONTH_IEC",
            apcode: "DRIVE_TIME_MONTH_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "3b71ceb0-2ed7-42e0-a728-e2953e77c430",
            name: "TIME_SECOND_IEC",
            apcode: "DRIVE_TIME_SECOND_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0e3721c8-8a0b-4dff-9eff-4cd139905afc",
            name: "TIME_SHUTDOWN_IEC",
            apcode: "DRIVE_TIME_SHUTDOWN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ea135614-af3e-4596-9f6d-2058f4101cf0",
            name: "TIME_START_IEC",
            apcode: "DRIVE_TIME_START_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "ab659a72-d66c-4525-8f73-0f13bfba3895",
            name: "TIME_SYSTEM_IEC",
            apcode: "DRIVE_TIME_SYSTEM_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8c2dcf39-2140-43d8-adb4-3749805e4549",
            name: "TIME_YEAR_IEC",
            apcode: "DRIVE_TIME_YEAR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a58e3934-dd05-4cee-bef8-d1ec29b4a87e",
            name: "Timezone",
            apcode: "DRIVE_LOCATION_TIMEZONE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2517ac13-2eb4-4f0e-a2fc-15f9c030276b",
            name: "TIME_ZONE_IEC",
            apcode: "DRIVE_TIME_ZONE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f010ede5-9181-4ed7-a41e-63caf02d99d9",
            name: "T_MOD_CLEAN",
            apcode: "DRIVE_T_MOD_CLEAN",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f2bb1361-8459-4f00-890d-e5af93508920",
            name: "T_MOD_IEC",
            apcode: "DRIVE_T_MOD_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1f7123f8-7935-4e1e-8022-91e63923c654",
            name: "T_MOD_SOILED_IEC",
            apcode: "DRIVE_T_MOD_SOILED_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "1a1dfddf-3e8b-4a3e-aa7f-aa04694228db",
            name: "TRACKER_MOTOR",
            apcode: "DRIVE_TRACKER_MOTOR",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "14fa6901-c333-4db5-9718-5783d5237fb9",
            name: "TRANSMISSION_LOSS_1_IEC",
            apcode: "DRIVE_TRANSMISSION_LOSS_1_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b988dec7-9520-47d9-b4cb-d3e39c5e8fe0",
            name: "TRANSMISSION_LOSS_2_IEC",
            apcode: "DRIVE_TRANSMISSION_LOSS_2_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "78348338-d908-409e-94bc-69fc42608884",
            name: "TRK_AVAIL_DERATE",
            apcode: "DRIVE_TRK_AVAIL_DERATE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f5c43a93-390b-4b85-828c-7a69a69e40cd",
            name: "TRK_ID",
            apcode: "DRIVE_TRK_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "90a01399-756f-4300-86b9-09eb21b3741a",
            name: "USE_GHI_IRRADIANCE_SENSOR",
            apcode: "DRIVE_USE_GHI_IRRADIANCE_SENSOR",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8e710ff2-77a4-45fe-8b0c-55dad14e1c1b",
            name: "USE_MEASURED_IN_EXPECTED_PRODUCTION",
            apcode: "DRIVE_USE_MEASURED_IN_EXPECTED_PRODUCTION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "67a16a8d-ca67-466e-9058-7d6d66918f51",
            name: "VAR",
            apcode: "DRIVE_VAR",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "06a9b110-4efd-4bfa-a7a4-7c2940c753d1",
            name: "VAR_ADJUSTMENT_IEC",
            apcode: "DRIVE_VAR_ADJUSTMENT_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "81c8c1a7-db64-462c-b0e7-70de6034fb24",
            name: "VAR_ADJUSTMENT_MAX_IEC",
            apcode: "DRIVE_VAR_ADJUSTMENT_MAX_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "37cf0552-c729-4fb4-b724-bd7c1d5aa8b2",
            name: "VAR_ADJUSTMENT_MIN_IEC",
            apcode: "DRIVE_VAR_ADJUSTMENT_MIN_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "05df122d-7fd5-48db-b30f-e1d8485803bc",
            name: "VAR_A_IEC",
            apcode: "DRIVE_VAR_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a9326b0b-e09d-4b8e-9500-659438b69124",
            name: "VAR_B_IEC",
            apcode: "DRIVE_VAR_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2946933c-faf2-4db2-a21d-a889623f792e",
            name: "VAR_C_IEC",
            apcode: "DRIVE_VAR_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f6ecec62-b58e-41af-9eb0-8083c997c5c9",
            name: "VAR_CTRL_MODE_IEC",
            apcode: "DRIVE_VAR_CTRL_MODE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "bab99168-c7b4-4eaa-a3c0-f8a15e204f00",
            name: "VARH_A_IEC",
            apcode: "DRIVE_VARH_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "622800d9-a195-42df-81ee-1863e0356e75",
            name: "VARH_B_IEC",
            apcode: "DRIVE_VARH_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e3e76de6-69f4-4bce-a349-017c477576c6",
            name: "VARH_CAPACITIVE_A_IEC",
            apcode: "DRIVE_VARH_CAPACITIVE_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8c4d2362-8ec7-40dc-ac29-052ef21396f9",
            name: "VARH_CAPACITIVE_B_IEC",
            apcode: "DRIVE_VARH_CAPACITIVE_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "a3eba53f-b356-4ab9-aa31-99899ac6d8c1",
            name: "VARH_CAPACITIVE_C_IEC",
            apcode: "DRIVE_VARH_CAPACITIVE_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "0690e2f8-0ce3-44f7-9de1-4cbbde32f7dd",
            name: "VARH_CAPACITIVE_IEC",
            apcode: "DRIVE_VARH_CAPACITIVE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e0928ebb-30f6-4fba-a550-0446a868b800",
            name: "VARH_C_IEC",
            apcode: "DRIVE_VARH_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6b8903a8-b644-4b5c-b6cd-b114767dcda6",
            name: "VARH_DELIVERED_IEC",
            apcode: "DRIVE_VARH_DELIVERED_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "acd03375-8d53-4e3e-ae13-bd9395e6457a",
            name: "VARH_IEC",
            apcode: "DRIVE_VARH_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7a9d28c3-0dd1-4f5a-8ff5-1f61abb41220",
            name: "VARH_INDUCTIVE_A_IEC",
            apcode: "DRIVE_VARH_INDUCTIVE_A_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d10b54e5-a03d-4965-92c7-7718000f5fe7",
            name: "VARH_INDUCTIVE_B_IEC",
            apcode: "DRIVE_VARH_INDUCTIVE_B_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "15b5b5f0-1f3b-416e-8bea-67fde9dcb041",
            name: "VARH_INDUCTIVE_C_IEC",
            apcode: "DRIVE_VARH_INDUCTIVE_C_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "7220ec79-de4a-497b-bac7-a79e5b8bcf7c",
            name: "VARH_INDUCTIVE_IEC",
            apcode: "DRIVE_VARH_INDUCTIVE_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "aa7308b4-c55e-4d91-811a-77c216b6fdf6",
            name: "VAR_IEC",
            apcode: "DRIVE_VAR_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "f0f3b143-71ae-46f6-ae52-5082ab553840",
            name: "VAR_LO",
            apcode: "DRIVE_VAR_LO",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6ae50b7d-d298-4790-919f-6ce365bf207d",
            name: "VAR_PF_IEC",
            apcode: "DRIVE_VAR_PF_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2004d9e9-6492-4d91-b862-99e12ba30475",
            name: "VAR_QS_IEC",
            apcode: "DRIVE_VAR_QS_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b811faa6-f2b1-41b8-b054-16c8a6ea8813",
            name: "VAR_SCHEDULE_TARGET_IEC",
            apcode: "DRIVE_VAR_SCHEDULE_TARGET_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "d6fc2138-76f2-4520-9e83-935b003ce40f",
            name: "VAR_TIME_IEC",
            apcode: "DRIVE_VAR_TIME_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "b1bc1e7b-5609-4150-beb1-01a78ce6ae95",
            name: "VEE_AC_POWER_ESTIMATION",
            apcode: "DRIVE_VEE_AC_POWER_ESTIMATION",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "84ff5b8c-4ded-4002-ae12-33c82bedf7c6",
            name: "VOLUME_COEFFICIENT_A",
            apcode: "DRIVE_VOLUME_COEFFICIENT_A",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "01d91ea4-296c-4b01-97ca-a0f1a84b2da9",
            name: "VOLUME_COEFFICIENT_B",
            apcode: "DRIVE_VOLUME_COEFFICIENT_B",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4b16ac6d-c3fd-42c5-a255-e6d8539692a1",
            name: "VOLUME_COEFFICIENT_C",
            apcode: "DRIVE_VOLUME_COEFFICIENT_C",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "aacb42ec-4ec0-41a4-878f-53a50c5b4df2",
            name: "VOLUME_COEFFICIENT_D",
            apcode: "DRIVE_VOLUME_COEFFICIENT_D",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e1a9d44b-1484-4887-8444-1617c9561f7f",
            name: "WIND_DIRECTION_IEC",
            apcode: "DRIVE_WIND_DIRECTION_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "8ce92a73-e537-4d21-af67-21fb0a8054b2",
            name: "WIND_SPEED_IEC",
            apcode: "DRIVE_WIND_SPEED_IEC",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "48878fe5-3c4b-400f-9994-dff9946ad92a",
            name: "WTG_ID",
            apcode: "DRIVE_WTG_ID",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "be47e016-80ba-4144-ae53-3b00ca24acc0",
            name: "YACNumber",
            apcode: "DRIVE_YACNumber",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "648f6165-7c6d-4d04-9a66-82003ca12be0",
            name: "YAC_NUMBER",
            apcode: "DRIVE_YAC_NUMBER",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "e01db520-934f-11ed-89af-2d58bcccc988",
            name: "Weekend days",
            apcode: "WeekendDays",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "4188ed2a-9350-11ed-89af-2d58bcccc988",
            name: "Holidays",
            apcode: "HoliDays",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "61c5fb68-a7a1-11ed-afa1-0242ac120002",
            name: "Configuration Day Of Week ISO8601",
            apcode: "ConfigurationDayOfWeekISO8601",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "5a1f0198-a7a1-11ed-afa1-0242ac120002",
            name: "Configuration Date ISO8601",
            apcode: "ConfigurationDateISO8601",
            measurementTypeId: "3074ed0a-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed0a-8264-11de-ad55-0090f586a869",
                apcode: "Date",
                name: "Date",
                datatype: "Date"
              }
            }
          },
          {
            id: "4e59e9fe-a7a1-11ed-afa1-0242ac120002",
            name: "Configuration Year",
            apcode: "ConfigurationYear",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "fdaf6d69-784e-491e-8e95-195400e168ea",
            name: "Configuration String Generic",
            apcode: "ConfigurationStringGeneric",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "2fea162f-a8f3-415f-94a4-2ced8d3b2c1d",
            name: "Configuration Integer Generic",
            apcode: "ConfigurationIntegerGeneric",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "93ee23d4-c709-4789-b8e3-e1ef5460f906",
            name: "Configuration Float Generic",
            apcode: "ConfigurationFloatGeneric",
            measurementTypeId: "78f8b776-9879-11de-94e6-0019bbc9165c",
            relationships: {
              measurementType: {
                id: "78f8b776-9879-11de-94e6-0019bbc9165c",
                apcode: "Float",
                name: "Float",
                datatype: "Float"
              }
            }
          },
          {
            id: "bc85b8cd-00d9-4c73-bfb2-1225eef2f9c0",
            name: "Configuration Boolean Generic",
            apcode: "ConfigurationBooleanGeneric",
            measurementTypeId: "3074ed07-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed07-8264-11de-ad55-0090f586a869",
                apcode: "Boolean",
                name: "Boolean",
                datatype: "Boolean"
              }
            }
          },
          {
            id: "1ba3ca70-ac5b-11ed-b50e-313677d36569",
            name: "PPC Controller Id",
            apcode: "PPCcid",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "400d1d76-ac5b-11ed-b50e-313677d36569",
            name: "Multiple PPC Controller Id",
            apcode: "MultiplePPCcid",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "87f0ca2a-ac5b-11ed-b50e-313677d36569",
            name: "Multiple PPC Id",
            apcode: "MultiplePPCid",
            measurementTypeId: "3074ed08-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed08-8264-11de-ad55-0090f586a869",
                apcode: "Integer",
                name: "Integer",
                datatype: "Integer"
              }
            }
          },
          {
            id: "f902f7da-deda-44f6-a9aa-09ad8edc6b41",
            name: "SERVICE_TYPE",
            apcode: "DRIVE_SERVICE_TYPE",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          },
          {
            id: "6148233f-4fd5-48c9-b2c8-bb9f33cc8f96",
            name: "HYBRID_PV_BESS",
            apcode: "DRIVE_HYBRID_PV_BESS",
            measurementTypeId: "3074ed09-8264-11de-ad55-0090f586a869",
            relationships: {
              measurementType: {
                id: "3074ed09-8264-11de-ad55-0090f586a869",
                apcode: "String",
                name: "String",
                datatype: "String"
              }
            }
          }
        ]),
      1000
    );
  });
};
