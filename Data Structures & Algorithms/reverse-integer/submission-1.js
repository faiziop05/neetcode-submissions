class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let string = String(Math.abs(x)).split("");

        let p1 = 0;
        let p2 = string.length - 1;

        while (p1 < p2) {
            [string[p1], string[p2]] = [string[p2], string[p1]];
            p1++;
            p2--;
        }

        let number = Number(string.join(""));

        if (number < -(2 ** 31) || number > 2 ** 31 - 1) {
            return 0;
        }

        if (x < 0) {
            number = number * -1;
        }
        return number;
    }
}
