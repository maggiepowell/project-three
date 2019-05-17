'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Travel', [
          {
            username: 'playerone',
            leader_score: 8,
            score_memory: 4,
            score_trivia: 1,
            score_minesweeper: 1,
            score_math: 2,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playertwo',
            leader_score: 8,
            score_memory: 0,
            score_trivia: 3,
            score_minesweeper: 3,
            score_math: 2,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playerthree',
            leader_score: 9,
            score_memory: 2,
            score_trivia: 5,
            score_minesweeper: 1,
            score_math: 1,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playerfour',
            leader_score: 11,
            score_memory: 4,
            score_trivia: 3,
            score_minesweeper: 2,
            score_math: 2,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playerfive',
            leader_score: 16,
            score_memory: 6,
            score_trivia: 0,
            score_minesweeper: 5,
            score_math: 5,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playersix',
            leader_score: 15,
            score_memory: 2,
            score_trivia: 9,
            score_minesweeper: 1,
            score_math: 3,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playerseven',
            leader_score: 9,
            score_memory: 0,
            score_trivia: 1,
            score_minesweeper: 1,
            score_math: 7,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playereight',
            leader_score: 16,
            score_memory: 11,
            score_trivia: 4,
            score_minesweeper: 0,
            score_math: 1,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playernine',
            leader_score: 11,
            score_memory: 2,
            score_trivia: 1,
            score_minesweeper: 4,
            score_math: 4,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'playerten',
            leader_score: 4,
            score_memory: 1,
            score_trivia: 1,
            score_minesweeper: 1,
            score_math: 1,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          },
          {
            username: 'guest',
            leader_score: 0,
            score_memory: 0,
            score_trivia: 0,
            score_minesweeper: 0,
            score_math: 0,
            createdAt: "2019-01-01",
            updatedAt: "2019-01-01"
          }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
