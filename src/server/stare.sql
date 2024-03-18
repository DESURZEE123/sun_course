-- 创建讨论表
CREATE TABLE `platform_schema1`.`Discussion` (
  `idDiscussion` INT NOT NULL,
  `idCourse` INT NOT NULL,
  -- 回复的idDiscussion
  `replayId` INT NULL,
  `DisName` VARCHAR(45) NULL,
  `title` VARCHAR(45) NULL,
  `data` DATETIME NULL,
  `content` VARCHAR(45) NULL,
  PRIMARY KEY (`idDiscussion`)
);

-- 插入讨论数据
INSERT INTO `platform_schema1`.`Discussion` (`idDiscussion`, `idCourse`, `DisName`, `title`, `data`, `content`) VALUES ('1', '1', '提问者', '作业', '2023-03-15 15:11:30', '作业是什么');
INSERT INTO `platform_schema1`.`Discussion` (`idDiscussion`, `idCourse`, `replayId`, `DisName`, `data`, `content`) VALUES ('2', '1', '1', '回答者1', '2023-03-16 15:11:30', '试卷');
INSERT INTO `platform_schema1`.`Discussion` (`idDiscussion`, `idCourse`, `replayId`, `DisName`, `data`, `content`) VALUES ('3', '1', '1', '回答者2', '2023-03-17 15:11:30', '复习');
INSERT INTO `platform_schema1`.`Discussion` (`idDiscussion`, `idCourse`, `replayId`, `DisName`, `data`, `content`) VALUES ('4', '1', '2', '回答1的回答者', '2023-03-17 15:11:30', '试卷1-2');
