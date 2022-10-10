/*
Given 2 inputs, an array devices [] such that each element represents a batch of devices to be made in a factory. And an input n for the number of days allotted to finish all of the devices. The factory can only work on 1 batch at a time. A factory has k workers and each worker can finish 1 device in a day.
Make a function that takes in these 2 inputs and outputs the the minimum number of workers k needed to complete all of the devices in the given number of days.

Ex: 
devices = [3, 8, 2]
days = 3
expected output: workers (k) = 8 (need to finish every batch in one day)

Ex 2
devices = [3, 5, 1]
days = 4
expected output: workers (k) = 3, we have an extra day so we can spend 2 days working on the 5 devices
*/

function factoryWorks(devices, days){
    devices.sort(function(a, b) {return a - b}); //sort our array
    if (days < devices.length) return -1; //error - impossible
    let max = devices[devices.length - 1];
    if (days === devices.length) return max; //must use max

    let extraDays = days - devices.length;

    for(let k = max; k > 0 ; k--){ //we start with the greatest k, and work our way down till we fail
      for(let i = 0; i < devices.length; i++){
        if((devices[i] / k) > 1) extraDays = extraDays - Math.ceil(devices[i] / k) + 1;
      }
      if(extraDays < 0) return (k + 1); //k too small, failed. Use prev success.
      else extraDays = days - devices.length; //reset for new k
    }
    return -1;
} 