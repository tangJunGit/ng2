export function skuValidator(control) {
    if (!control.value.match(/^123/)) {
        return { invalidSku: true };
    }
}
//# sourceMappingURL=custom-validations.js.map