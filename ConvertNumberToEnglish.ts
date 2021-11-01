class Solution {
    private static SPACE:string = " ";
    public numberToWords(num:number) {
        if (num == 0) {
            return "Zero";
        }
         
        let result = this.numberToWordsHelper(num % 1000);
        num = num / 1000;
        if (num > 0 && num % 1000 > 0) {
            result = this.numberToWordsHelper(num % 1000) + Solution.SPACE + "Thousand" + Solution.SPACE + result;
        }
         
        num = num / 1000;
        if (num > 0 && num % 1000 > 0) {
            result = this.numberToWordsHelper(num % 1000) + Solution.SPACE + "Million" + Solution.SPACE + result;
        }
         
        num = num / 1000;
        if (num > 0) {
            result = this.numberToWordsHelper(num %  1000) + Solution.SPACE + "Billion" + Solution.SPACE + result;
        }
         
        return result.trim();
    }
     
    //0~999
    private numberToWordsHelper(num:number) {
        let digitNum:string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        let teenNum:string[] = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        let tenNum:string[] = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        let result:string = "";
        if (num > 99) {
            result += digitNum[num / 100] + Solution.SPACE + "Hundred" + Solution.SPACE;
        }
        num = num % 100;
        //10 ~ 19
        if (num > 9 && num < 20) {
            result += teenNum[num % 10];
        } else {
            //20 ~ 99
            if (num > 19) {
                result += tenNum[num / 10] + Solution.SPACE;
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