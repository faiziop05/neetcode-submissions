/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        if(intervals.length===0) return true
        intervals.sort((a,b)=>a.start-b.start)
        let canAttend=true

        for(let i=1;i<intervals.length;i++){
            let takenMinTime=intervals[i-1].start
            let takenMaxTime=intervals[i-1].end
            let curTime=intervals[i];

            if(curTime.start<takenMaxTime && curTime.end > takenMinTime){
                return false
            }
        }   
        return canAttend
    }
}
