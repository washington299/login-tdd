export const SignUpValidatePasswords = (values) => {
    const { password, confirmPassword } = values;

    if (password !== confirmPassword) {
        return 'Passwords does not match';
    }

    return '';
}