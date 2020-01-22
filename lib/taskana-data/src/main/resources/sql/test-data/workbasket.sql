-- KSC workbaskets
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000001', 'GPK_KSC', '2018-02-01 12:00:00', '2018-02-01 12:00:00', 'Gruppenpostkorb KSC', 'DOMAIN_A', 'GROUP', 'Gruppenpostkorb KSC', 'owner0815', 'ABCQVW', '', 'xyz4', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000002', 'GPK_KSC_1', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'Gruppenpostkorb KSC 1', 'DOMAIN_A', 'GROUP', 'Gruppenpostkorb KSC 1', '', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000003', 'GPK_KSC_2', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'Gruppenpostkorb KSC 2', 'DOMAIN_A', 'GROUP', 'Gruppenpostkorb KSC 2', '', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000004', 'TEAMLEAD_1', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'PPK Teamlead KSC 1', 'DOMAIN_A', 'PERSONAL', 'PPK Teamlead KSC 1', '', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000005', 'TEAMLEAD_2', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'PPK Teamlead KSC 2', 'DOMAIN_A', 'PERSONAL', 'PPK Teamlead KSC 2', '', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000006', 'USER_1_1', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'PPK User 1 KSC 1', 'DOMAIN_A', 'PERSONAL', 'PPK User 1 KSC 1', '', '', '', '', 'custom4z', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000007', 'USER_1_2', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'PPK User 2 KSC 1', 'DOMAIN_A', 'PERSONAL', 'PPK User 2 KSC 1', 'Peter Maier', 'custom1', 'custom2', 'custom3', 'custom4', 'versicherung', 'abteilung', 'projekt', 'team', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000008', 'USER_2_1', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'PPK User 1 KSC 2', 'DOMAIN_A', 'PERSONAL', 'PPK User 1 KSC 2', '', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000009', 'USER_2_2', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'PPK User 2 KSC 2', 'DOMAIN_A', 'PERSONAL', 'PPK User 2 KSC 2', '', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000010', 'TPK_VIP', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'Themenpostkorb VIP', 'DOMAIN_A', 'TOPIC', 'Themenpostkorb VIP', '', '', '', '', '', '', '', '', '', FALSE);

-- KSC workbaskets Domain_B
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000011', 'GPK_B_KSC', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'Gruppenpostkorb KSC B', 'DOMAIN_B', 'GROUP', 'Gruppenpostkorb KSC', '', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000012', 'GPK_B_KSC_1', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'Gruppenpostkorb KSC B1', 'DOMAIN_B', 'GROUP', 'Gruppenpostkorb KSC 1', '', 'custom1', 'custom2', 'custom3', 'custom4', 'orgl1', 'orgl2', 'orgl3', 'aorgl4', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000013', 'GPK_B_KSC_2', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'Gruppenpostkorb KSC B2', 'DOMAIN_B', 'GROUP', 'Gruppenpostkorb KSC 2', '', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000014', 'USER_3_1', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'PPK User 1 KSC 1 Domain B', 'DOMAIN_B', 'PERSONAL', 'PPK User 1 KSC 1 Domain B', '', '', 'custom20', '', 'custom4', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('WBI:100000000000000000000000000000000015', 'USER_3_2', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'PPK User 2 KSC 1 Domain B', 'DOMAIN_B', 'PERSONAL', 'PPK User 1 KSC 1 Domain B', 'owner0815', 'ABCABC', 'cust2', 'cust3', 'cust4', 'orgl1', 'orgl2', 'orgl3', 'orgl4', FALSE);

-- Workbaskets for sorting test
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000900', 'sort001', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'basxet0', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000901', 'Sort002', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'Basxet1', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000902', 'sOrt003', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'bAsxet2', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000903', 'soRt004', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'baSxet3', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000904', 'sorT005', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'basXet4', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000905', 'Sort006', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'basxEt5', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000906', 'SOrt007', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'basxeT6', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000907', 'SoRt008', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'BAsxet7', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000908', 'SorT009', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'BaSxet8', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);
INSERT INTO WORKBASKET VALUES ('0000000000000000000000000000000000000909', 'Sort010', RELATIVE_DATE(0) , RELATIVE_DATE(0) , 'BasXet9', 'DOM_XY', 'TOPIC',     'Lorem ipsum dolor sit amet.', 'Max', '', '', '', '', '', '', '', '', FALSE);