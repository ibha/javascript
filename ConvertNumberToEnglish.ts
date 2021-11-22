class Solution {
     numberToWords(num) {
        if (num == 0) {
            return "Zero";
        }

        let result = this.numberToWordsHelper(num % 1000);
        num = num / 1000;
        if (num > 0 && num % 1000 > 0) {
            result = this.numberToWordsHelper(num % 1000) + " " + "Thousand" + " " + result;
        }

        num = num / 1000;
        if (num > 0 && num % 1000 > 0) {
            result = this.numberToWordsHelper(num % 1000) + " " + "Million" + " " + result;
        }

        num = num / 1000;
        if (num > 0) {
            result = this.numberToWordsHelper(num %  1000) + " " + "Billion" + " " + result;
        }

        return result.trim();
    }

    //0~999
     numberToWordsHelper(num) {
        let digitNum = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        let teenNum = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        let tenNum = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        let result = "";
        if (num > 99) {
            result += digitNum[num / 100] + " " + "Hundred" + " ";
        }
        num = num % 100;
        //10 ~ 19
        if (num > 9 && num < 20) {
            result += teenNum[num % 10];
        } else {
            //20 ~ 99
            if (num > 19) {
                result += tenNum[num / 10] + " ";
            }
            num = num % 10;
            // 1 ~ 9
            if (num > 0) {
                result += digitNum[num % 10];
            }
        }

        return result.trim();
    }
}

var sol = new Solution();
console.log(sol.numberToWords(296));