/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : minnek

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 25/10/2021 13:10:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for minnek
-- ----------------------------
DROP TABLE IF EXISTS `minnek`;
CREATE TABLE `minnek`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(1000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `phone` varchar(1000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `mensaje` varchar(1000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of minnek
-- ----------------------------
INSERT INTO `minnek` VALUES (1, 'vidyut kumar', 'admin@vanik.org', '1234567890', 'asdadasdafgd');
INSERT INTO `minnek` VALUES (2, 'junior', 'preciosrd.com@gmail.com', '8092166487', 'hgtfnhtdfvtgesgfdxcfgcgfjbfxgfncmcghmj vnhgcgnffgfxfgxxjytxjydtjjtdrd');
INSERT INTO `minnek` VALUES (3, 'junior', 'preciosrd.com@gmail.com', '8092166487', 'nb nc chhcghgcvhgchythcvgfcgfc');
INSERT INTO `minnek` VALUES (4, 'jose', 'hotel.piergiorgio@gmail.com', '8092166487', 'bvgxfdxgfdxfgzdffd');
INSERT INTO `minnek` VALUES (5, 'bggb', 'preciosrd.com@gmail.com', '8092166487', 'dfbdfgbdfg');

SET FOREIGN_KEY_CHECKS = 1;
