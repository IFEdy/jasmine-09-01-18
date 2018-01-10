    function quadratic(a, b, c){

       let positive = function(){
        let num1 = -b + Math.floor( Math.sqrt(b*b) - (4 * a * c));
        let den1 = 2 * a;
        return (num1 / den1);
        }

       let negative = function(){
        let num2 = -b - Math.floor( Math.sqrt(b*b) - (4 * a * c));
        let den2 = 2 * a;
        return (num2 / den2);
        }
       return negative()+' and '+positive();
    }

module.exports = quadratic;
