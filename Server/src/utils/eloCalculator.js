exports.calculateElo = (ratingA, ratingB, kFactor = 32) => {
    const expectedScoreA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
    const expectedScoreB = 1 - expectedScoreA;
    
    const newRatingA = Math.round(ratingA + kFactor * (1 - expectedScoreA));
    const newRatingB = Math.round(ratingB + kFactor * (0 - expectedScoreB));
    
    return [newRatingA, newRatingB];
  };