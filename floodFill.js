/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

//https://leetcode.com/problems/flood-fill/submissions/
 var floodFill = function(image, sr, sc, newColor) {
    var origColor = image[sr][sc];
    
    if(origColor !== newColor) { dfs(image, sr, sc, newColor,origColor) }
    console.log(image);
    return image;
    
};

//traverse top, left, bottom, right
function dfs(image, sr, sc, newColor,origColor) {
    if(image[sr][sc] == origColor) {
        image[sr][sc] = newColor;
        if(sr >=1) dfs(image, sr-1, sc, newColor,origColor);
        if(sc >= 1)   dfs(image, sr, sc-1, newColor,origColor);     
        if(sr+1 < image.length) dfs(image, sr+1, sc, newColor,origColor);
        if(sc+1 < image[0].length)   dfs(image, sr, sc+1, newColor,origColor);          

    }
              
}

floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2);