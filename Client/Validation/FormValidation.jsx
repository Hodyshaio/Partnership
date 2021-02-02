
export const checkValidity = (form, value, rules) => {
    console.log("[Validation] => ");
    console.log("[form] => ",form);
    let isValid = true;

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        console.log("[required]");
    }

    // if (rules.minLength) {
    //     isValid = value.length >= rules.minLength && isValid;
    //     console.log("[minLength]");
    // }

    // if (rules.maxLength) {
    //     isValid = value.length <= rules.maxLength && isValid;
    //     console.log("[maxLength]");
    // }

    if (typeof rules.valid == "function") {
        isValid = rules.valid(value) && isValid;
        console.log("[valid]");
    }

    return isValid;
}
