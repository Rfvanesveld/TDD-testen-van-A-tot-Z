const passwordVerifier = require('./Password Verifier-0');

// IS NOT NULL //

test("THE PASSWORD IS NOT NULL", () => {
    expect(passwordVerifier.isNotNull()).not.toBeNull();
});

// HAS THE RIGHT LENGTH  //

test("THE PASSWORD HAS LESS THAN NINE CHARACTERS", () => {
    expect(passwordVerifier.hasRightLength("123456789")).toBe(false);
});

// HAS AT LEAST ONE LOWER CASE CHARACTER //

test("THE PASSWORD HAS AT LEAST ON LOWER CASE CHARACTER", () => {
    expect(password).toMatch(/[a-z]/);
    expect(passwordVerifier.hasLowerCaseCharacter(password)).not.toBe(false);
});

// HAS AT LEAST ONE UPPER CASE CHARACTER //

test("THE PASSWORD HAS AT LEAST ON UPPER CASE CHARACTER", () => {
    expect(password).toMatch(/[A-Z]/);
    expect(passwordVerifier.hasUpperCaseCharacter(password)).toBe(true);
});

// HAS AT LEAST ONE NUMBER //

test("THE PASSWORD HAS AT LEAST ONE NUMBER", () => {
    expect(password).toMatch(/[0-9]/);
    expect(passwordVerifier.hasNumber(password)).toBe(true);
});

// PASSES AT LEAST A MINIMUM OF 3 CONDITIONS // 

test("THE PASSWORD PASSES AT LEAST A MINIMUM OF 3 CONDITIONS", () => {
    expect(passwordVerifier.minimumOf3ConditionsReached()).toBeTruthy()

});