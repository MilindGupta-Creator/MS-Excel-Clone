

$(document).ready(function () {  // jab pura browswer pura load ho jaaye fir iske andar ka code load ho jaaye
    // jquery is accessed via dollar sign

    let cellcontainer = $(".input-cell-container"); // input-cell-container is a class selector and this is how we access it

    for (let i = 1; i <= 100; i++) {
        let ans = "";
        let n = i;

        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                ans = "Z" + ans; // added z on left hand side
                n = Math.floor(n / 26) - 1;
            }
            else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }
        let column = $(`<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`); // creating a new row just like we create in html
        $(".column-name-container").append(column); 

        let row = $(`<div class="row-name" id="rowId-${i}">${i}</div>`);
        $(".row-name-container").append(row);   
    }

    

});

