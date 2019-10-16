var t1n1, t1n2, t1n3, t1n4, t1n5, t1pb
var t2n1, t2n2, t2n3, t2n4, t2n5, t2pb
var t3n1, t3n2, t3n3, t3n4, t3n5, t3pb
var t4n1, t4n2, t4n3, t4n4, t4n5, t4pb
var t5n1, t5n2, t5n3, t5n4, t5n5, t5pb
var cBoxNum
var ticket1numbers = []
var ticket2numbers = []
var ticket3numbers = []
var ticket4numbers = []
var ticket5numbers = []
var arr
var resultsArray = []
var numberOfDays = 1;
var fivePlusPb = 0;
var fiveMinusPb =0;
var fourPlusPb = 0;
var fourMinusPb =0;
var threePlusPb = 0;
var threeMinusPb =0;
var twoPlusPb = 0;
var onePlusPb = 0;
var onlyPb = 0



function addDays() {
        numberOfDays = Number(document.getElementById("howManyDays").value);
        console.log(numberOfDays);
}

function assignTicket1() {
        cBoxNum=1;
        if(cBoxNum=1) {
                assignTicketNumber();
        }
        assignTicketNumber();
}

function assignTicket2() {
        cBoxNum=2;
        assignTicketNumber();
}

function assignTicket3() {
        cBoxNum=3;
        assignTicketNumber();
}

function assignTicket4() {
        cBoxNum=4;
        assignTicketNumber();
}

function assignTicket5() {
        cBoxNum=5;
        assignTicketNumber();
}

function assignTicketNumber() {
        document.getElementById("currentlySelectedBox").innerHTML = "The Current Ticket is Number " + cBoxNum;
}

function checkArray() {
        document.getElementById("currentlySelectedBox").innerHTML = "("+ticket1numbers+")" +" "+ "("+ticket2numbers+")" +" "+ "("+ticket3numbers+")" +" "+ "("+ticket4numbers+")" +" "+ "("+ticket5numbers+")";                                                                 
}



// function to get a random number 1 through 69 and 1 through 26 for the powerball
function getNumbers() {
        var num1 = Math.floor((Math.random() * 69) + 1);
        var num2 = Math.floor((Math.random() * 69) + 1);
        var num3 = Math.floor((Math.random() * 69) + 1);
        var num4 = Math.floor((Math.random() * 69) + 1);
        var num5 = Math.floor((Math.random() * 69) + 1);
        var numPB = Math.floor((Math.random() * 26) + 1);

        // this code makes sure non of the non powerball numbers are the same
        while (num2 === num1) {
                var num2 = Math.floor((Math.random() * 69) + 1);
        }

        while (num3 === num2 || num3 === num1) {
                var num3 = Math.floor((Math.random() * 69) + 1);
        }

        while (num4 === num3 || num4 === num2 || num4 === num1) {
                var num4 = Math.floor((Math.random() * 69) + 1);
        }

        while (num5 === num4 || num5 === num3 || num5 === num2 || num5 === num1) {
                var num5 = Math.floor((Math.random() * 69) + 1);
        }

        //add numbers to an array after same number check
        var arr = [num1, num2, num3, num4, num5];

        // bubble sorting the array to put them in numerical order
        function swap(arr, first_Index, second_Index) {
                var temp = arr[first_Index];
                arr[first_Index] = arr[second_Index];
                arr[second_Index] = temp;
        }

        function bubble_Sort(arr) {

                var len = arr.length,
                        i, j, stop;

                for (i = 0; i < len; i++) {
                        for (j = 0, stop = len - i; j < stop; j++) {
                                if (arr[j] > arr[j + 1]) {
                                        swap(arr, j, j + 1);
                                }
                        }
                }
        }
        //run the function to make sure non powerball numbers are in numerical order
        bubble_Sort(arr);
        // add the powerball number to the end of the array
        arr.push(numPB);


        // assign the ticket numbers to an array to be checked later
        if (cBoxNum===1) {
            ticket1numbers = arr;
                document.getElementById("currentlySelectedBox").innerHTML = "hello world ticket 1 numbers " + ticket1numbers;
        } 
        if (cBoxNum===2) {
            ticket2numbers = arr;
                document.getElementById("currentlySelectedBox").innerHTML = "hello world ticket 2 numbers " + ticket2numbers;
        } 
        if (cBoxNum===3) {
            ticket3numbers = arr;
                document.getElementById("currentlySelectedBox").innerHTML = "hello world ticket 3 numbers " + ticket3numbers;
        } 
        if (cBoxNum===4) {
            ticket4numbers = arr;
                document.getElementById("currentlySelectedBox").innerHTML = "hello world ticket 4 numbers " + ticket4numbers;
        } 
        if (cBoxNum===5) {
            ticket5numbers = arr;
                document.getElementById("currentlySelectedBox").innerHTML = "hello world ticket 5 numbers " + ticket5numbers;
        } 
      


        // add a 0 to any number that is less than 10 so it looks like a real powerball ticket number
        // also depending on what the current value of cBoxNum, add the numbers to that row on the powerball ticket
        if (arr[0] < 10) {
                document.getElementById("pb"+cBoxNum+"1").innerHTML = "0" + arr[0];
        } else {
                document.getElementById("pb"+cBoxNum+"1").innerHTML = arr[0];
        }
        if (arr[1] < 10) {
                document.getElementById("pb"+cBoxNum+"2").innerHTML = "0" + arr[1];
        } else {
                document.getElementById("pb"+cBoxNum+"2").innerHTML = arr[1];
        }
        if (arr[2] < 10) {
                document.getElementById("pb"+cBoxNum+"3").innerHTML = "0" + arr[2];
        } else {
                document.getElementById("pb"+cBoxNum+"3").innerHTML = arr[2];
        }
        if (arr[3] < 10) {
                document.getElementById("pb"+cBoxNum+"4").innerHTML = "0" + arr[3];
        } else {
                document.getElementById("pb"+cBoxNum+"4").innerHTML = arr[3];
        }
        if (arr[4] < 10) {
                document.getElementById("pb"+cBoxNum+"5").innerHTML = "0" + arr[4];
        } else {
                document.getElementById("pb"+cBoxNum+"5").innerHTML = arr[4];
        }
        if (numPB < 10) {
                document.getElementById("pb"+cBoxNum+"6").innerHTML ="0" + numPB;
        } else {
                document.getElementById("pb"+cBoxNum+"6").innerHTML = numPB;
        }

        // end of getNumbers function
}

function simulateLottery() {
    var num1 = Math.floor((Math.random() * 69) + 1);
        var num2 = Math.floor((Math.random() * 69) + 1);
        var num3 = Math.floor((Math.random() * 69) + 1);
        var num4 = Math.floor((Math.random() * 69) + 1);
        var num5 = Math.floor((Math.random() * 69) + 1);
        var numPB = Math.floor((Math.random() * 26) + 1);

        // this code makes sure non of the non powerball numbers are the same
        while (num2 === num1) {
                var num2 = Math.floor((Math.random() * 69) + 1);
        }

        while (num3 === num2 || num3 === num1) {
                var num3 = Math.floor((Math.random() * 69) + 1);
        }

        while (num4 === num3 || num4 === num2 || num4 === num1) {
                var num4 = Math.floor((Math.random() * 69) + 1);
        }

        while (num5 === num4 || num5 === num3 || num5 === num2 || num5 === num1) {
                var num5 = Math.floor((Math.random() * 69) + 1);
        }

        //add numbers to an array after same number check
        var resultsArray = [num1, num2, num3, num4, num5];

        function swap(arr, first_Index, second_Index) {
                var temp = arr[first_Index];
                arr[first_Index] = arr[second_Index];
                arr[second_Index] = temp;
        }

        function bubble_Sort(arr) {

                var len = arr.length,
                        i, j, stop;

                for (i = 0; i < len; i++) {
                        for (j = 0, stop = len - i; j < stop; j++) {
                                if (arr[j] > arr[j + 1]) {
                                        swap(arr, j, j + 1);
                                }
                        }
                }
        }

        bubble_Sort(resultsArray);
        resultsArray.push(numPB);


        document.getElementById("pbDrawingNumbers1").innerHTML = resultsArray[0];
        document.getElementById("pbDrawingNumbers2").innerHTML = resultsArray[1];
        document.getElementById("pbDrawingNumbers3").innerHTML = resultsArray[2];
        document.getElementById("pbDrawingNumbers4").innerHTML = resultsArray[3];
        document.getElementById("pbDrawingNumbers5").innerHTML = resultsArray[4];
        document.getElementById("pbDrawingNumbersPB").innerHTML = resultsArray[5];

        console.log(resultsArray);
        console.log("Ticket #1 : " + ticket1numbers);
        console.log("Ticket #2 : " + ticket2numbers);
        console.log("Ticket #3 : " + ticket3numbers);
        console.log("Ticket #4 : " + ticket4numbers);
        console.log("Ticket #5 : " + ticket5numbers);
     
     var allTickets = [ticket1numbers, ticket2numbers, ticket3numbers, ticket4numbers, ticket5numbers];

     for (i=0; i<5; i++) {
        if (allTickets[i].length === 6) {
                console.log("lottery ticket " + (i+1) + " is in play");
        }


     }
     
//      if(ticket1numbers.length > 0) {
//              console.log("lottery ticket 1 is in play");
//      }

}

