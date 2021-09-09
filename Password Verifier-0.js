const password = 'passw0rD';

// IS NOT NULL //

const isNotNull = (password) => password != null;

// HAS THE RIGHT LENGTH  //

const hasRightLength = (password) => password.length < 9;

// HAS ATLEAST ONE LOWER CASE CHARACTER //

const hasLowerCaseCharacter = (password) => /[a-z]/.test(password);

// HAS AT LEAST ONE UPPER CASE CHARACTER //

const hasUpperCaseCharacter = (password) => /[A-Z]/.test(password);

// HAS AT LEAST ONE NUMBER //

const hasNumber = (password) => /[0-9]/.test(password);

// PASSES A MINIMUM OF 3 CONDITIONS // 

const minimumOf3ConditionsReached = conditions => {
    conditions = [true, false, false, true, true]
    conditionsMatched = conditions.filter(conditions => conditions)
    return conditionsMatched.length >= 3;
}

const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasLowerCaseCharacter(password),
        hasUpperCaseCharacter(password),
        hasNumber(password),
    ];
    return result = minimumOf3ConditionsReached(conditions)
};

// MODULES TO BE EXPORTED //

module.exports = {
    isNotNull,
    hasRightLength,
    hasLowerCaseCharacter,
    hasUpperCaseCharacter,
    hasNumber,
    minimumOf3ConditionsReached,
    verifyPassword
};