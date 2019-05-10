USE wannagetajob_db;

INSERT INTO Profiles (username, overall_score, score_memory, score_trivia, score_minesweeper, score_math)

VALUES ("playerone", 400, 100, 100, 100, 100),
("playertwo", 600, 150, 150, 150, 150),
("playerthree", 6000, 1500, 1500, 1500, 1500),
("playerfour", 60, 15, 15, 15, 15),
("playerfive", 200, 50, 50, 50, 50),
("playersix", 400, 100, 100, 100, 100),
("playerseven", 4000, 1000, 1000, 1000, 1000),
("playereight", 100, 25, 25, 25, 25),
("playernine", 1000, 250, 250, 250, 250),
("playerten", 800, 200, 200, 200, 200);

SELECT * FROM Profiles;
