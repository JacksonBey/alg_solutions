//Problem: Robot Tour Optimization
// Input: A set S of n points in the plane
// Output: What is the shortest cycle tour that visits each point in the set S?

// [x,y]
const points=[[0,0],[100,100],[-100,-100],[1,0],[2,1],[7,6]]

const nearestNeighbor=(S)=>{
    let tour = [S[0]]
    S.splice(0,1)
    let i = 0
    let distance;
    let minDistance;
    while (S.length > 0){
        distance = 0
        
        let nextPointIndex = 0
        minDistance = Infinity
        for(let j=0;j<S.length;j++){
            // distance = SquareRoot((x2-x1)^2 + (y2-y1)^2))
            distance = Math.sqrt(((S[j][0]-tour[i][0])**2+(S[j][1]-tour[i][1])**2))
             if(distance < minDistance) {
                 minDistance = distance
                 nextPointIndex = j
             }
        }
        i++
        tour.push(S[nextPointIndex])
        S.splice(nextPointIndex,1)
    }
    return tour
}

console.log(nearestNeighbor(points))
//Pick and visit an initial Point p from S
// P=p
// i = 0
// while there are still unvisited points
// i = i +1
// select p to be closet unvisited point to P
// visit p

const closestPair=(S)=>{

}