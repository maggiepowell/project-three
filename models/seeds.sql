USE wannagetajob_db;

INSERT INTO Profiles (username, leader_score, score_memory, score_trivia, score_minesweeper, score_math, createdAt, updatedAt)

VALUES ("playerone", 8, 4, 1, 1, 2, "2019-01-01", "2019-01-01"),
("playertwo", 8, 0, 3, 3, 2, "2019-01-01", "2019-01-01"),
("playerthree", 9, 2, 5, 1, 1, "2019-01-01", "2019-01-01"),
("playerfour", 11, 4, 3, 2, 2, "2019-01-01", "2019-01-01"),
("playerfive", 16, 6, 0, 5, 5, "2019-01-01", "2019-01-01"),
("playersix", 15, 2, 9, 1, 3, "2019-01-01", "2019-01-01"),
("playerseven", 9, 0, 1, 1, 7, "2019-01-01", "2019-01-01"),
("playereight", 21, 11, 3, 2, 5, "2019-01-01", "2019-01-01"),
("playernine", 11, 2, 1, 4, 4, "2019-01-01", "2019-01-01"),
("playerten", 4, 1, 1, 1, 1, "2019-01-01", "2019-01-01"),
("Guest", 0, 0, 0, 0, 0, "2019-01-01", "2019-01-01");

SELECT * FROM Profiles;
