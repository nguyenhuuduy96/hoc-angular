import { AbstractControl, FormGroup } from '@angular/forms';


export function nameValidator(control: AbstractControl) {

    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp(/^[^\s]/g);

        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }

    return null;
}
export function spaceValidator(control: AbstractControl) {

    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp(/^[^\s]/g);

        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }

    return null;
}
export function spacesValidator(control: AbstractControl) {

    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp(/^[^\s]/g);

        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }

    return null;
}
export function urlValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g);

        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }

    return null;
}

export function passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const cnfpassValue = control.value;

        const passControl = control.root.get('password'); // magic is this
        if (passControl) {
            const passValue = passControl.value;
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    isError: true
                };
            }
        }
    }

    return null;
}
