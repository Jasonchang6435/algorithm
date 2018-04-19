/*
1. Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let s = nums[j]
            if (n + s == target) {
                return [i, j]
            }
        }
    }
};

nums = [2, 7, 11, 15], target = 17
twoSum(nums, target)


/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/
var lengthOfLongestSubstring = function(s) {

};


/*
    tutorials
*/

/*
    1. array
*/

/*
    nums = [0,0,1,1,1,2,2,3,3,4]
    len = removeDuplicates(nums);
    5
*/
var removeDuplicates = function(nums) {
    // let len = nums.length
    let i = 0
    // let j = 1
    while (i < nums.length) {
        let n = nums[i]
        for (let j = j + 1; j < nums.length; j++) {
            let sn = nums[j]
            if (n == sn) {
                nums.splice(i, 1)
                i--
                break
            }
        }
        i++
    }
    return nums.length
};
/*
n = 7 k = 3，给定数组  [1,2,3,4,5,6,7] 向右旋转后的结果为 [5,6,7,1,2,3,4]
*/
var rotate = function(nums, k) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let n = nums[i]
        nums[i+k] = n
    }
    for (var i = nums.length - 1 - k; i < nums.length; i++) {
        let j = 0
        nums[j] = nums[i]
    }
    nums.splice(nums.length - 1 - k, k)
};
var nums = [1,2,3,4,5,6,7]
rotate(nums, 3)
console.log("debug1", nums)
var nums = [1,2]
rotate(nums, 0)
console.log("debug", nums)

/*
nums = [1, 3, 1, 4, 5, 2, 5, 4, 2]
singleNumber(nums) => 3
*/
var singleNumber = function(nums) {
    let t;
    for (var i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (t) {
            if (t == n) {
                t = undefined
            }
        }
    }
    return t
};
var nums = [1, 3, 1, 4, 5, 2, 5, 4, 2]
var n = singleNumber(nums)
console.log('result', n)
