function is_usZipCode(str) {

    let patterm = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if (patterm.test(str)) {
        return true;
    }
    return false;
}