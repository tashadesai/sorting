describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([2, 3, 1, 4]) ).toEqual( [[2, 3], [1, 4]] );
  });

  it('is able to split an array into two halves', function() {
    expect( split([2, 3, 1, 4, 5]) ).toEqual( [[2, 3], [1, 4, 5]] );
  });

});

describe('Merge Sort', function(){
  it('handles an unsorted array', function(){
    expect( mergeSort([3, 4, 1, 7, 9, 10, 2, 1]) ).toEqual( [1, 1, 2, 3, 4, 7, 9, 10] );
  });

  it('handles an already sorted array', function(){
    expect( mergeSort([1, 1, 2, 3, 4, 7, 9, 10]) ).toEqual( [1, 1, 2, 3, 4, 7, 9, 10] );
  });
});
