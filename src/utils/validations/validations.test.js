import { SignUpValidatePasswords } from '.';

describe('Validations', () => {
    describe('SignUpValidatePasswords()', () => {
        test('Should return error when passwords does not match', () => {
            const values = { password: '123', confirmPassword: '321' };
            
            expect(SignUpValidatePasswords(values)).toBe('Passwords does not match');
        });

        test('Should return empty string if passwords match', () => {
            const values = { password: '123', confirmPassword: '123' };

            expect(SignUpValidatePasswords(values)).toBe('');
        })
    });
});